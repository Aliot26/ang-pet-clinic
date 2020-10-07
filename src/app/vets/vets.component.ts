import { Component, OnInit } from '@angular/core';
import { Vets } from './vets';
import {VetsService} from '../services/vets.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.css']
})
export class VetsComponent implements OnInit {

  vets: Vets[];

  constructor(private vetsService: VetsService, private router: Router) { }

  ngOnInit(): void {
    this.vetsService.getVets().subscribe(response => {
      console.log(response);
      this.vets = response;
    });
  }

}
