import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormArray,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  form!: FormGroup;
  users: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      passwordCheck: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.users.push(this.form.value);
    console.log(this.users);
    this.form.reset();
  }
}
