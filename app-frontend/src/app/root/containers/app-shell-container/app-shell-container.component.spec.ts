import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppShellContainerComponent } from './app-shell-container.component';
import { SharedModule } from '@shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppShellContainerComponent', () => {
  let component: AppShellContainerComponent;
  let fixture: ComponentFixture<AppShellContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule, SharedModule], declarations: [AppShellContainerComponent] })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppShellContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
