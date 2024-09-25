import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  file:string = '';

  constructor(private http: HttpClient) {}
  reset(){
    this.name = '';
    this.email = '';
    this.message = '';
    this.file = ''
  }

  register(event: Event) {
    this.reset();

    const formData = {
      name: this.name,
      email: this.email,
      message: this.message,
      file: this.file
    };

    // HTTP POST request to the backend server
    this.http.post('http://localhost:5000/api/sendMail', formData)
      .subscribe(
        (response: any) => {
          console.log('Email sent successfully', response);
        },
        (error: any) => {
          console.error('Error sending email', error);
        }
      );
  }
}
