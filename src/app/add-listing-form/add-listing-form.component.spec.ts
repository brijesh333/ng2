import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListingFormComponent } from './add-listing-form.component';

describe('AddListingFormComponent', () => {
    let component: AddListingFormComponent;
    let fixture: ComponentFixture<AddListingFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddListingFormComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddListingFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
