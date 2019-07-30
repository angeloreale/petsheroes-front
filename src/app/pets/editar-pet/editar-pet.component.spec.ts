import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPetComponent } from './editar-pet.component';

describe('EditarPetComponent', () => {
  let component: EditarPetComponent;
  let fixture: ComponentFixture<EditarPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
