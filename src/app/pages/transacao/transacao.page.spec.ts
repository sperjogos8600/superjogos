import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransacaoPage } from './transacao.page';

describe('TransacaoPage', () => {
  let component: TransacaoPage;
  let fixture: ComponentFixture<TransacaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TransacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
