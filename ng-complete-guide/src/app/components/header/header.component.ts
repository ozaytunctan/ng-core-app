import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { AuthenticationService } from 'core-lib';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: "app-header",
    templateUrl: './header.component.html',
    styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit ,OnDestroy{

    collapsed = true;
    loggedIn: boolean = false;

    changedLoggedInSubscription:Subscription;

    constructor(private auth: AuthenticationService,
                private route:ActivatedRoute,
                private router:Router
    ) {
    }
    
    ngOnInit() {
        this.loggedIn=this.auth.isLoggedIn();
       this.changedLoggedInSubscription= this.auth.changedLoggedIn.subscribe((authenticated: boolean) => {
            this.loggedIn = authenticated;
        });
    }
    onLogout() {
        this.loggedIn = false;
        this.auth.logout();
    }

    ngOnDestroy(){
        this.changedLoggedInSubscription.unsubscribe();
    }

    onProfileDetaile(){
        this.router.navigate(['/user-profile']);
    }

}
