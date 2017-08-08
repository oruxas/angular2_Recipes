import * as firebase from 'firebase';
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable() //to inject other service
export class AuthService {
    token: string;

    constructor(private router: Router){

    }

    sugnupUser(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            );
    }

    signinUser(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    //we are signed in
                    this.router.navigate(['/']);
                    console.log(response)
                    firebase.auth().currentUser.getToken()
                        .then(
                           //waiting for token here
                           (token: string)  => this.token = token
                        )
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    logout(){
        firebase.auth().signOut();
        this.token = null;
    }

    getToken(){
        firebase.auth().currentUser.getToken()
            .then(
                //waiting for token here
                (token: string)  => this.token = token
            ); 
            return this.token; //danger of returning expired token
    }

    isAuthenticated(){
        return this.token != null;
    }
}