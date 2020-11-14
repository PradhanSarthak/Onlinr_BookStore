/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ProductDetailsComponent } from './product-details.component';

let component: ProductDetailsComponent;
let fixture: ComponentFixture<ProductDetailsComponent>;

describe('product-details component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ProductDetailsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ProductDetailsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});