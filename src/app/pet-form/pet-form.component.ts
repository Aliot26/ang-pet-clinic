import {Component, OnInit} from '@angular/core';
import {Owner} from '../owner-details/owner';
import {Pet} from './pet';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {OwnerDetailsService} from '../services/owner-details.service';
import {PetDetailsService} from '../services/pet-details.service';
import {PetType} from './petType';
import {PetTypeService} from '../services/pet-type.service';

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
    this.ownerService.getOwnerById(this.id)
      .subscribe(data => {
        this.owner = data;
      });
    this.petTypeService.getAllPetTypes()
      .subscribe(data => {
        this.petTypes = data;
      });
  }

  save(petForm): void {


  }


}
