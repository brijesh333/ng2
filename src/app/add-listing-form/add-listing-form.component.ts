import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-add-listing-form',
    templateUrl: './add-listing-form.component.html',
    styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

    propertyTypes:Array<string>=['House','condo','Duplex'];

    constructor() { }

    ngOnInit() {
    }
    onCribSubmit(data) {
        console.log(data);
    }

}
