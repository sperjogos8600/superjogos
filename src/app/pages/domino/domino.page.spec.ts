import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DominoPage } from './domino.page';

describe('DominoPage', () => {
  let component: DominoPage;
  let fixture: ComponentFixture<DominoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DominoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
