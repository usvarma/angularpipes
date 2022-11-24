import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: string = '';

  onNameChange(event: any){
    this.name = (event.target as HTMLInputElement).value;
  }

  onDateChange(event:any){
    this.date = (event.target as HTMLInputElement).value;
  }

  onAmountChange(event:any){
    this.amount = (event.target as HTMLInputElement).value;
  }
}
