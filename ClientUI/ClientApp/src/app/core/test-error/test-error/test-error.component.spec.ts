/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { TestErrorComponent } from './test-error.component';

let component: TestErrorComponent;
let fixture: ComponentFixture<TestErrorComponent>;

describe('test-error component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TestErrorComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(TestErrorComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});