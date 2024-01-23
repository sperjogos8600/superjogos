import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pix2Page } from './pix2.page';

describe('Pix2Page', () => {
  let component: Pix2Page;
  let fixture: ComponentFixture<Pix2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pix2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
