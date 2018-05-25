import { reducers } from '@administration/state';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { StoreModule, combineReducers } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';
import { RolesContainerComponent } from './roles-container.component';

describe('The roles container', () => {
  let component: RolesContainerComponent;
  let fixture: ComponentFixture<RolesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, StoreModule.forRoot({ administration: combineReducers(reducers) })],
      declarations: [RolesContainerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created:', () => {
    expect(component).toBeTruthy();
  });
});
