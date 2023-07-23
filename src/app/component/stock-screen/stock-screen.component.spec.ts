import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockScreenComponent } from './stock-screen.component';

describe('StockScreenComponent', () => {
  let component: StockScreenComponent;
  let fixture: ComponentFixture<StockScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
