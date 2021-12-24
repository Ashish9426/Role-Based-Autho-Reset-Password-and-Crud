import { Component } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { AccountService } from './_services';
import { Account, Role } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    Role = Role;
    account: Account;
    faSignOutAlt = faSignOutAlt
    
    constructor(private accountService: AccountService) {
        this.accountService.account.subscribe(x => this.account = x);
    }

    ngOnInit(): void {
        this.account = this.accountService.accountValue;
    }

    logout() {   
        this.accountService.logout();
    }
}