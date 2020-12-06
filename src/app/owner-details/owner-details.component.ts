import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Owner} from './owner';
import {OwnerDetailsService} from '../services/owner-details.service';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css']
})
export class OwnerDetailsComponent implements OnInit {
  id: number;
  public owner: Owner;
  title = 'Owner\'s details';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private ownerDetailsService: OwnerDetailsService) {
  }

  ngOnInit(): void {
    this.refreshOwnerDetails();
  }

  refreshOwnerDetails(): void {
    this.id = this.route.snapshot.params['id'];
    this.ownerDetailsService.getOwnerById(this.id).subscribe(data => {
        this.owner = data;
      },
      err => {
        this.owner = JSON.parse(err.error).message;
      });
  }

  editOwner(ownerId): void {
    this.router.navigate(['owner-edit', ownerId]);
  }

  addPet(ownerId): void {
    this.router.navigate(['pet-form', ownerId, -1]);
  }

  editPet(ownerId, petId): void {
    this.router.navigate(['pet-form', ownerId, petId]);
  }
}
