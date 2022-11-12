import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnxTypeComponent } from './tnx-type.component';

describe('TnxTypeComponent', () => {
  let component: TnxTypeComponent;
  let fixture: ComponentFixture<TnxTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TnxTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TnxTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
