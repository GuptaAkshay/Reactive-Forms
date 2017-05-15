import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { states } from '../data-model';

@Component({
  selector: 'hero-detail1',
  templateUrl: './hero-detail1.component.html',
  styleUrls: ['./hero-detail1.component.css']
})
  
export class HeroDetail1Component {

  heroForm : FormGroup;
  states = states;
  
  createForm(){
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      address : this.fb.group({
        street: '',
        city: '',
        state: '',
        zip: ''
      }),
      power: '',
      sidekick: ''
  
    });
  }
  
  constructor(private fb:FormBuilder) {
    this.createForm();
  }

}
