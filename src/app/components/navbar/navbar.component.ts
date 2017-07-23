import { Component, OnInit } from '@angular/core';
import {GreetingService} from '../../services/greeting.service';

//TODO: Check why we need providers

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  providers: [GreetingService]

})
export class NavbarComponent implements OnInit {

  constructor(private greetingService: GreetingService) { }

  ngOnInit() {
    this.greetingService.getGreetin();
    }
}
