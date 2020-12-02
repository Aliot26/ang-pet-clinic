import {Component, OnInit} from '@angular/core';
import {Owner} from '../owner-details/owner';
import {Pet} from './pet';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {OwnerDetailsService} from '../services/owner-details.service';
import {PetDetailsService} from '../services/pet-details.service';
import {PetType} from './petType';
import {PetTypeService} from '../services/pet-type.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {

  id: number;
  owner: Owner;
  pet: Pet;
  petTypes: PetType[];
  petForm: FormGroup;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private ownerService: OwnerDetailsService,
              private petService: PetDetailsService,
              private petTypeService: PetTypeService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ownerService.getOwnerByOwnerId(this.id)
      .subscribe(data => {
        this.owner = data;
        this.pet = new Pet('-1', '', null, this.owner, '');
      });

    this.petTypeService.getAllPetTypes()
      .subscribe(data => {
        this.petTypes = data;
        this.initForm();
      });
  }

  save(petForm): void {
    this.pet.owner = this.owner;
    this.pet.name = petForm.value.name;
    this.pet.petType = petForm.value.petType;
    this.pet.birthDate = petForm.value.birthDate;

    this.petService.addPet(this.pet).subscribe(
      data => {
        this.router.navigate(['owner/' + this.owner.user.id]);
      }
    );

  }

  initForm(): void {

    this.petForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.pattern(/^[A-z0-9]*$/)
      ]],
      petType: ['', [
        Validators.required,
        Validators.pattern(/^[A-z0-9]*$/)
      ]],
      birthDate: ['']
    });
  }

}
