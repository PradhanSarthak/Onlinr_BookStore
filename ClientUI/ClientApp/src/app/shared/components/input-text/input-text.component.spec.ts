/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { InputTextComponent } from './input-text.component';

let component: InputTextComponent;
let fixture: ComponentFixture<InputTextComponent>;

describe('input-text component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ InputTextComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(InputTextComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});