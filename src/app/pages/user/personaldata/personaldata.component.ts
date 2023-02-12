import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-personaldata',
  templateUrl: './personaldata.component.html',
  styleUrls: ['./personaldata.component.scss']
})
export class PersonaldataComponent  implements OnInit{
  public userForm!: FormGroup;
  public user!: any;

  constructor(
      private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.initUserForm();
    this.takeUserInfo();

  }
  initUserForm(): void {
    this.userForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
    });
  }

  takeUserInfo(): void {
    if(localStorage.length > 0 && localStorage.getItem('currentUser')) {
      this.user = JSON.parse(localStorage.getItem('currentUser') as string);
      this.userForm.patchValue({
        email: this.user.email,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        phoneNumber: this.user.phoneNumber,
      });
    }
  }
}
