import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginContainerComponent } from './login-container.component';
import { SharedModule } from '@shared/shared.module';

describe('LoginContainerComponent', () => {
  let component: LoginContainerComponent;
  let fixture: ComponentFixture<LoginContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [LoginContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
