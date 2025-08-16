import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputOutputDatBinding } from './input-output-dat-binding/input-output-dat-binding';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,InputOutputDatBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('data-binding-input-output');
  welcomeTitle='Welcome to data binding practice code'
  parentData='Iam from parent'
  childData!:string
  fromChild(data:string){
    this.childData=data
  }
}
