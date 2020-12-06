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

}
