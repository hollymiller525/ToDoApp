import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // this was a check on a service but now being called in the html as it will be ran constantly than just the once which if it was in this ts file it would be loaded in page refresh
  // isUserLoggedIn: boolean = false;

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
    // this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}
