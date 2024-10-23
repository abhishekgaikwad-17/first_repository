import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertynavbarComponent } from './propertynavbar.component';

describe('PropertynavbarComponent', () => {
  let component: PropertynavbarComponent;
  let fixture: ComponentFixture<PropertynavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertynavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertynavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
