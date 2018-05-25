import { reducers } from '@administration/state';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { StoreModule, combineReducers } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';
import { UsersContainerComponent } from './users-container.component';

describe('The users container', () => {
  let component: UsersContainerComponent;
  let fixture: ComponentFixture<UsersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, StoreModule.forRoot({ administration: combineReducers(reducers) })],
      declarations: [UsersContainerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created:', () => {
    expect(component).toBeTruthy();
  });
});
