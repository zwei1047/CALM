import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../shared/services/authentication.service';
import {User} from "../shared/models/user";
import {Address} from "../shared/models/address";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new User(null);
  submitted: boolean = true;

  lat: number = 50.6315144;
  lng: number = 3.056218;
  zoom: number = 8;
  //private base64textString:string;

  constructor(private router: Router, private authentication: AuthenticationService) { }

  ngOnInit() {
  }

  /*handleFileSelect(evt){
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();
      reader.onload =this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
      console.log(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString= btoa(binaryString);
  }*/

  // signin the new user if signup successfully
  login(email: string, password: string){
    this.user.password = password;
    this.user.email = email;
    this.authentication.login(this.user)
      .subscribe(
        res => {
          this.submitted = true;
          this.authentication.saveToken(res.token);
          this.router.navigate(['/profile']);
          location.reload();
        }
      )
  }

  // create the new user
  register() {
    this.authentication.register(this.user)
      .subscribe(
        res => {
          this.submitted = true;
          this.login(this.user.email, this.user.password);
          this.router.navigate(['/profile']);
          location.reload();
        }
      );
    this.submitted = false;
  }
}









