import {Component, Input, OnInit} from '@angular/core';
import {Owner} from '../owner-details/owner';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {OwnerDetailsService} from '../services/owner-details.service';

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.css']
})
export class OwnerFormComponent implements OnInit {
  id: number;
  owner: Owner;
  ownerForm: FormGroup;
  errorMessage = '';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private ownerDetailsService: OwnerDetailsService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    console.log(this.owner);
    if (this.id != -1) {
      console.log('in if');
      this.ownerDetailsService.getOwnerByOwnerId(this.id).subscribe(data => {
          this.owner = data;
          console.log(this.owner);
          this.initForm();
        },
        err => {
          console.log('errrrr');
          this.owner = JSON.parse(err.error).message;
        });
    } else {
      console.log('mmm');
    }
    // this.initForm();
  }

  initForm(): void {
    this.ownerForm = this.fb.group({
      firstName: [this.owner.firstName, [
        Validators.required,
        Validators.pattern(/^[A-z0-9]*$/)
      ]],
      lastName: [this.owner.lastName, [
        Validators.required,
        Validators.pattern(/^[A-z0-9]*$/)
      ]],
      address: [this.owner.address, [
        Validators.required,
        Validators.pattern(/^[A-z0-9]*$/)
      ]],
      city: [this.owner.city, [
        Validators.required,
        Validators.pattern(/^[A-z0-9]*$/)
      ]],
      telephone: [this.owner.telephone, [
        Validators.required,
        Validators.pattern(/^[A-z0-9]*$/)
      ]]
    });
  }

  edit(ownerForm): void {
    this.owner.firstName = this.ownerForm.value.firstName;
    this.owner.lastName = this.ownerForm.value.lastName;
    this.owner.address = this.ownerForm.value.address;
    this.owner.city = this.ownerForm.value.city;
    this.owner.telephone = this.ownerForm.value.telephone;

    if (this.id != -1) {
      this.ownerDetailsService.editOwner(this.owner, this.id)
        .subscribe(
          data => {
            this.router.navigate(['owner/' + this.owner.user.id]);
          }
        );
    } else {
      console.log('Error');
    }
  }
}
