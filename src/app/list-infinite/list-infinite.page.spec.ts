import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInfinitePage } from './list-infinite.page';

describe('ListInfinitePage', () => {
  let component: ListInfinitePage;
  let fixture: ComponentFixture<ListInfinitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInfinitePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInfinitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
