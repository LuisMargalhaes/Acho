import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirprofileComponent } from './exibirprofile.component';

describe('ExibirprofileComponent', () => {
  let component: ExibirprofileComponent;
  let fixture: ComponentFixture<ExibirprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExibirprofileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibirprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
