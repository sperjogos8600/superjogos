import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChavePage } from './chave.page';

describe('ChavePage', () => {
  let component: ChavePage;
  let fixture: ComponentFixture<ChavePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
