import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PixPage } from './pix.page';

describe('PixPage', () => {
  let component: PixPage;
  let fixture: ComponentFixture<PixPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
