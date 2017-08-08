import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  onNavigate(feature: string){
    this.loadedFeature = feature; 
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDySJV4VTANd525TjcyD604FWLwG19p4eA",
      authDomain: "ek-angular4-recipe-book.firebaseapp.com",
    });
  }
}
