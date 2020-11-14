/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ProductItemComponent } from './product-item.component';

let component: ProductItemComponent;
let fixture: ComponentFixture<ProductItemComponent>;

describe('product-item component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ProductItemComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ProductItemComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});