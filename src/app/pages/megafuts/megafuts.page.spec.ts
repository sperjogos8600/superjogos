import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MegafutsPage } from './megafuts.page';

describe('MegafutsPage', () => {
  let component: MegafutsPage;
  let fixture: ComponentFixture<MegafutsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MegafutsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
