import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public formLogin:FormGroup;

  constructor(private fb:FormBuilder) {
    this.formLogin=this.fb.group({
      code:["",Validators.required,Validators.pattern("[0-9]*")],
      pass:["",Validators.required]
    });
   }

  ngOnInit() {
  }

}
