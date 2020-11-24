import {Component, OnInit} from '@angular/core';
import {Vet} from './vet';
import {VetsService} from '../services/vets.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.css']
})
export class VetsComponent implements OnInit {

  vets: Vet[];
  title = 'Our Vet';

  constructor(private vetsService: VetsService, private router: Router) {
  }

  ngOnInit(): void {
    this.vetsService.getVets().subscribe(data => {
        this.vets = data;
      },
      err => {
        this.vets = JSON.parse(err.error).message;
      });
  }

}
