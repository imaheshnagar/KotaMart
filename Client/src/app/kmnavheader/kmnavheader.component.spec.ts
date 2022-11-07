import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmnavheaderComponent } from './kmnavheader.component';

describe('KmnavheaderComponent', () => {
  let component: KmnavheaderComponent;
  let fixture: ComponentFixture<KmnavheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KmnavheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KmnavheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
