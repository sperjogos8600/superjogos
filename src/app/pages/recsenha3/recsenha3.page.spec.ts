import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Recsenha3Page } from './recsenha3.page';

describe('Recsenha3Page', () => {
  let component: Recsenha3Page;
  let fixture: ComponentFixture<Recsenha3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Recsenha3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
