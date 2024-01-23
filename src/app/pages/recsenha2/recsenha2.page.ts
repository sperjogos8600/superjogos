import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';


@Component({
  selector: 'app-recsenha2',
  templateUrl: './recsenha2.page.html',
  styleUrls: ['./recsenha2.page.scss'],
})
export class Recsenha2Page implements OnInit {
  @ViewChild('input1', { static: false }) input1?: IonInput;
  @ViewChild('input2', { static: false }) input2?: IonInput;
  @ViewChild('input3', { static: false }) input3?: IonInput;
  @ViewChild('input4', { static: false }) input4?: IonInput;

  handleInput(currentInput: IonInput | null, nextInput: IonInput | null) {
    if (currentInput?.value && currentInput.value.toString().length === 1 && nextInput) {
      nextInput.setFocus();
    }
  }

  isAllInputsFilled() {
    const value1 = this.input1?.value;
    const value2 = this.input2?.value;
    const value3 = this.input3?.value;
    const value4 = this.input4?.value;

    return (
      typeof value1 === 'string' && value1.length === 1 &&
      typeof value2 === 'string' && value2.length === 1 &&
      typeof value3 === 'string' && value3.length === 1 &&
      typeof value4 === 'string' && value4.length === 1
    );
  }


  constructor(private route: Router) { }


  recsenha3() {
    this.route.navigate(['/recsenha3']);
  }
  ngOnInit() {

  }

}
