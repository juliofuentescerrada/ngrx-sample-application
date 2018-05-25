import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@shared/shared.module';
import { TopMenuComponent } from './top-menu.component';

describe('The top menu component:', () => {
  let component: TopMenuComponent;
  let fixture: ComponentFixture<TopMenuComponent>;
  let page: TopMenuPageObject;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ imports: [NoopAnimationsModule, RouterTestingModule, SharedModule] }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenuComponent);
    page = new TopMenuPageObject(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(page.dashboardLink.text).toBe('DASHBOARD');
    expect(page.reportsLink.text).toBe('REPORTS');
    expect(page.administrationLink.text).toBe('ADMINISTRATION');
  });
});

class TopMenuPageObject {

  get dashboardLink() { return this.query<HTMLAnchorElement>('#dashboard-link'); }
  get reportsLink() { return this.query<HTMLAnchorElement>('#reports-link'); }
  get administrationLink() { return this.query<HTMLAnchorElement>('#administration-link'); }

  constructor(private fixture: ComponentFixture<TopMenuComponent>) { }

  private query<T>(selector: string): T {
    return this.fixture.nativeElement.querySelector(selector);
  }
}
