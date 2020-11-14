/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ServerErrorComponent } from './server-error.component';

let component: ServerErrorComponent;
let fixture: ComponentFixture<ServerErrorComponent>;

describe('server-error component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ServerErrorComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ServerErrorComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});