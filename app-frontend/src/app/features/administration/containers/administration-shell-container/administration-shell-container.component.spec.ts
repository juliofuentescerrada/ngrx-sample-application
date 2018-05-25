// tslint:disable-next-line:max-line-length
import { AdministrationShellContainerComponent } from '@administration/containers/administration-shell-container/administration-shell-container.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@shared/shared.module';

describe('AdministrationShellContainerComponent', () => {
  let component: AdministrationShellContainerComponent;
  let fixture: ComponentFixture<AdministrationShellContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NoopAnimationsModule, SharedModule],
      declarations: [AdministrationShellContainerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationShellContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
