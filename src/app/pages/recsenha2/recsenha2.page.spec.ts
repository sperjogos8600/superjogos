import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Recsenha2Page } from './recsenha2.page';

describe('Recsenha2Page', () => {
  let component: Recsenha2Page;
  let fixture: ComponentFixture<Recsenha2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Recsenha2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
