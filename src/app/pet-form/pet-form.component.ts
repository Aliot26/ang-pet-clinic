import {Component, OnInit} from '@angular/core';
import {Pet} from './pet';
import {Owner} from '../owner-details/owner';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PetType} from './petType';
import {OwnerDetailsService} from '../services/owner-details.service';
import {PetTypeService} from '../services/pet-type.service';
import {PetDetailsService} from '../services/pet-details.service';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {
  pet: Pet;
  owner: Owner;
  petTypes: PetType[];
  id: number;
  petId: number;
  petForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private ownerService: OwnerDetailsService,
    private petTypesService: PetTypeService,
    private petService: PetDetailsService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('owner-id'));
      this.petId = Number(params.get('id'));
    });
    this.petTypesService.getAllPetTypes()
      .subscribe(data => {
        this.petTypes = data;
      });
    this.ownerService.getOwnerByOwnerId(this.id)
      .subscribe(data => {
        this.owner = data;
      });
    this.pet = new Pet(this.petId, '', null, this.owner, '');
    this.initForm();
    this.getPetData();
  }

  initForm(): void {
    this.petForm = this.fb.group({
      name: [''],
      petTypes: [''],
      birthDate: ['']
    });
  }

  getPetData(): void {
    if (this.petId !== -1) {
      this.petService.getPet(this.petId)
        .subscribe(data => {
          this.pet = data;
          this.petForm = this.fb.group({
            name: [this.pet.name],
            petTypes: [this.pet.petType.name],
            birthDate: [this.pet.birthDate]
          });
        });
    }
  }

  save(petForm): void {
    console.log(petForm);
    this.pet.id = this.petId;
    this.pet.name = this.petForm.value.name;
    this.pet.owner = this.owner;
    this.pet.birthDate = this.petForm.value.birthDate;
    const petTypePet = this.petTypes.find(i => i.name === this.petForm.value.petTypes);
    this.pet.petType = petTypePet;
    console.log(petTypePet);

    if (this.pet.id != -1) {
      this.petService.editPet(this.pet, this.petId)
        .subscribe(data => {
          this.router.navigate(['owner/' + this.owner.user.id]);
        });
    }else{
      this.petService.addPet(this.pet)
        .subscribe( data => {
          this.router.navigate(['owner/' + this.owner.user.id]);
        });
    }
  }
}
