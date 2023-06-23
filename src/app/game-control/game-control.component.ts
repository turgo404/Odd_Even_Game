import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;
  @ViewChild('startGameButton', { static: true }) startGameButton;


  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
    this.startGameButton.nativeElement.disabled = true;
  }

  onPauseGame() {
    clearInterval(this.interval);
    this.startGameButton.nativeElement.disabled = false;
  }


}
