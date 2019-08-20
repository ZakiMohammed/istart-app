import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

    users: User[] = [];

    constructor(
        private userService: UserService,
        private toastController: ToastController) {
    }

    ngOnInit() {
        this.userService.getUsers().subscribe(response => {
            this.users = response.results;
        });
    }

    async toast(message: string) {
        const toast = await this.toastController.create({
            message: message,
            duration: 2000,
            buttons: [
                {
                    text: 'Close',
                    role: 'cancel'
                }
            ]
        });
        toast.present();
    }

    onUserClick($event: any, user: User) {
        this.toast(user.email);
    }
}
