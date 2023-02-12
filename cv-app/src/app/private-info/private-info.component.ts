import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { privateInfo } from './private-info.model';
import { User } from './private-info.model';

@Component({
  selector: 'app-private-info',
  templateUrl: './private-info.component.html',
  styleUrls: ['./private-info.component.css','./styles/header.css','./styles/fnameLname.css','./styles/uploadButton.css','./styles/resume.css']
})



export class PrivateInfoComponent implements OnInit{
  

  user: User = new User();


  updateLocalStorage() {
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  ngOnInit() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
  }

  submitForm() {
    console.log(this.user);
  }



  fileUpload: File;
  showMessage = false;
  message = '';
  imageUrl: string | ArrayBuffer;
  
  uploadFile() {
    if (this.fileUpload) {
      this.message = 'ფოტო აიტვირთა.';
      this.showMessage = true;
      
      // Create a URL for the uploaded image
      this.imageUrl = URL.createObjectURL(this.fileUpload);
    } else {
      // Your code to handle file upload here
      this.message = 'ფოტო არ არის ატვირთულია.';
      this.showMessage = true;
    }
  }

  fileSelected(event) {
    this.fileUpload = event.target.files[0];
    this.imageUrl = URL.createObjectURL(this.fileUpload);
    this.message = `ფოტო "${this.fileUpload.name}" აიტვირთა.`;
    this.showMessage = true;
  }
}