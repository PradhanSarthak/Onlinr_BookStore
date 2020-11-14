/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { OrderTotalsComponent } from './order-totals.component';

let component: OrderTotalsComponent;
let fixture: ComponentFixture<OrderTotalsComponent>;

describe('order-totals component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ OrderTotalsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(OrderTotalsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});