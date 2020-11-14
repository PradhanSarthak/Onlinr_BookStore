/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { SectionHeaderComponent } from './section-header.component';

let component: SectionHeaderComponent;
let fixture: ComponentFixture<SectionHeaderComponent>;

describe('section-header component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SectionHeaderComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(SectionHeaderComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});