import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCoisasListComponent } from './produtos-lista.component';

describe('MultiCoisasListComponent', () => {
  let component: MultiCoisasListComponent;
  let fixture: ComponentFixture<MultiCoisasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiCoisasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiCoisasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
