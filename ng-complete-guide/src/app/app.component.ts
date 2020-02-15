import { Component } from '@angular/core';
import { AuthenticationService } from 'core-lib';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  loadedFeature =  'recipe' ;

  constructor(private auth:AuthenticationService) {

  }

  ngOnInit(): void {

  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }





}
