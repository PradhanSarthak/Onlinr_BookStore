/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { CheckoutComponent } from './checkout.component';

let component: CheckoutComponent;
let fixture: ComponentFixture<CheckoutComponent>;

describe('checkout component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CheckoutComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(CheckoutComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});