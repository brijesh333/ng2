import { Component, OnInit } from '@angular/core';
//import { cribs } from './../data/cribs';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/map'; //because we have implement map operaions in services
import { CribsService } from './../services/cribs.service';
import { UtilService } from './../services/util.service';

@Component({
    selector: 'app-crib-listing',
    templateUrl: './crib-listing.component.html',
    styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

    cribs: Array<any>;
    error: string;
    sortField:string='price';
    sortDirection :String='asc';    
    sortFields:Array<string>=[
        'address',
        'area',
        'bathrooms',
        'bedrooms',
        'price',
        'type'
    ];


    constructor(
        private http: Http, 
        private cribService: CribsService,
        private utilService:UtilService,
    ) { }

    
    ngOnInit() {
        this.cribService.getAllCribs()
        .subscribe(
            data => this.cribs = data,
            error => this.error = error.statusText
        );
        //     this.http.get('/data/cribs.json')
        //         .map(res => res.json())
        //         .subscribe(
        //         data => this.cribs = data,
        //         error => this.error = error
        //   );
        this.cribService.newCirbSubject.subscribe(
            //data => console.log(data)
            //data => this.cribs.push(data) // insert data in last
            data => this.cribs=[data,...this.cribs] //insert into the starting of list
        )
    }

}
