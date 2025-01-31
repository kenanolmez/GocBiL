import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTwoComponent } from './contact-two.component';

describe('ContactTwoComponent', () => {
  let component: ContactTwoComponent;
  let fixture: ComponentFixture<ContactTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
