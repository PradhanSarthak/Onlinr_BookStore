/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { NavBarComponent } from './nav-bar.component';

let component: NavBarComponent;
let fixture: ComponentFixture<NavBarComponent>;

describe('nav-bar component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ NavBarComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(NavBarComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});