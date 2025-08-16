import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input-output-dat-binding',
  imports: [],
  templateUrl: './input-output-dat-binding.html',
  styleUrl: './input-output-dat-binding.css',
})
export class InputOutputDatBinding {
  fromParent = input<string>();
  sendToParent=output<string>()
  sendParent(data:string) {
    this.sendToParent.emit(data+' but amake abar child theke pathano hoise')
  }
}
