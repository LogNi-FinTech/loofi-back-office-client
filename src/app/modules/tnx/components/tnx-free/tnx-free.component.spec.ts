import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnxFreeComponent } from './tnx-free.component';

describe('TnxFreeComponent', () => {
  let component: TnxFreeComponent;
  let fixture: ComponentFixture<TnxFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TnxFreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TnxFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
