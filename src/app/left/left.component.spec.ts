import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftComponent } from './left.component';
import {DataService} from '../core/data.service';

describe('LeftComponent', () => {
  let component: LeftComponent;
  let fixture: ComponentFixture<LeftComponent>;
  let service: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
