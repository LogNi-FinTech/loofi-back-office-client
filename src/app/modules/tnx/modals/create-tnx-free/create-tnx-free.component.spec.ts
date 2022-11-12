import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTnxFreeComponent } from './create-tnx-free.component';

describe('CreateTnxFreeComponent', () => {
  let component: CreateTnxFreeComponent;
  let fixture: ComponentFixture<CreateTnxFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTnxFreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTnxFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
