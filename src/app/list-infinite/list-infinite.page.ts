import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-list-infinite',
  templateUrl: './list-infinite.page.html',
  styleUrls: ['./list-infinite.page.scss'],
})
export class ListInfinitePage implements OnInit {

    users: User[] = [];
    page: number = 1;
    totalPage: number = 5;

    constructor(
        private userService: UserService,
        private toastController: ToastController) {
    }

    ngOnInit() {
        this.userService.getUserPagination(this.page).subscribe(response => {
            this.users = response.results;
        });
    }

    onUserClick($event: any, user: User) {
        this.toast(user.email);
    }

    loadData($event: any) {
        this.page++;
        console.log('😆', 'loaded ' + this.page);
        this.userService.getUserPagination(this.page).subscribe(response => {
            this.users = this.users.concat(response.results);
            if ($event) {
                $event.target.complete();
            }
        });
        if (this.page >= this.totalPage) {
            $event.target.disabled = true;
        }
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

}
