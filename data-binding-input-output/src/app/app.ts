import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputOutputDatBinding } from './input-output-dat-binding/input-output-dat-binding';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,InputOutputDatBinding,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('data-binding-input-output');
  welcomeTitle='Welcome to data binding practice code'
  fromInput!:string
  parentData='Iam from parent'
  childData!:string
  fromChild(data:string){
    this.childData=data
  }
}
