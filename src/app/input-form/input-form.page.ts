import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-input-form',
    templateUrl: './input-form.page.html',
    styleUrls: ['./input-form.page.scss'],
})
export class InputFormPage implements OnInit {

    frm: FormGroup;

    constructor(private builder: FormBuilder) { 
        this.builder = new FormBuilder();
    }

    get f(): { [key: string] : AbstractControl } {
        return this.frm.controls;
    }

    ngOnInit() {
        this.frm = this.builder.group({
            mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
            name: ['', [Validators.required, Validators.minLength(3)]],
            count: ['', [Validators.required, Validators.min(1)]],
            purpose: ['', [Validators.required, Validators.minLength(3)]],
            meetName: ['', [Validators.required, Validators.minLength(3)]],
            flat: ['', [Validators.required]],
            otp: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^[0-9]*$/)]],
        });
    }

    onSubmit($event: any) {
        console.log('🌊', this.frm.value);
    }

}
