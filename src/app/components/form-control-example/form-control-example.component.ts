import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-form-control-example',
  templateUrl: './form-control-example.component.html',
  styleUrls: ['./form-control-example.component.css']
})
export class FormControlExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
  }
  button(){
      console.log("button click");
  }
  

}