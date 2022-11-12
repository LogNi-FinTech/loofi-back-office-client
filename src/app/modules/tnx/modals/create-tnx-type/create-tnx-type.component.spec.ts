import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTnxTypeComponent } from './create-tnx-type.component';

describe('CreateTnxTypeComponent', () => {
  let component: CreateTnxTypeComponent;
  let fixture: ComponentFixture<CreateTnxTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTnxTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTnxTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
