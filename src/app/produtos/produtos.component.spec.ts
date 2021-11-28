import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCoisasComponent } from './produtos.component';

describe('MultiCoisasComponent', () => {
  let component: MultiCoisasComponent;
  let fixture: ComponentFixture<MultiCoisasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiCoisasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiCoisasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
