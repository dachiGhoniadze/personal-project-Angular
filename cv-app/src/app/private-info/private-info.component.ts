import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-private-info',
  templateUrl: './private-info.component.html',
  styleUrls: ['./private-info.component.css','./styles/header.css','./styles/fnameLname.css','./styles/uploadButton.css']
})
export class PrivateInfoComponent {
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
  }
}