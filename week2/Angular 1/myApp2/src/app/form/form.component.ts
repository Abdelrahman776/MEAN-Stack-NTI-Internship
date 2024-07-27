import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  postData(myForm: NgForm) {

    // if (myForm.valid) {
    // }
    
    // changeusername(myForm:NgForm){
    //   myForm.form.patchValue({username:'ahmed',age:10})

    // }
      
    // myForm.setValue({
    //   about: "",
    //   age: "",
    //   birthDate: "",
    //   cv: "",
    //   email: "",
    //   gender: "",
    //   LinkedInURL: "",
    //   password: "",
    //   phone: "",
    //   retypePassword: "",
    //   status: "",
    //   terms: "",
    //   username: "my new name",
      
    // })
      console.log(myForm.value)
      console.log(myForm.value.username)
      console.log(myForm.controls['username'])
}
}
