/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { PagingHeaderComponent } from './paging-header.component';

let component: PagingHeaderComponent;
let fixture: ComponentFixture<PagingHeaderComponent>;

describe('paging-header component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PagingHeaderComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(PagingHeaderComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});