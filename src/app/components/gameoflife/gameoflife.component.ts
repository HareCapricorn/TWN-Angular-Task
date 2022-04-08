import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { checkNeighbors } from 'src/app/helpers/checkNeighbors';
import { countLives } from 'src/app/helpers/countLives';
import { createGrid } from 'src/app/helpers/createGrid';
import { GameOfLifeOptions } from 'src/app/interfaces/gameoflifeoptions';
import { Lives } from 'src/app/interfaces/lives';

@Component({
  selector: 'app-gameoflife',
  templateUrl: './gameoflife.component.html',
  styleUrls: ['./gameoflife.component.css']
})
export class GameOfLifeComponent implements OnInit, OnDestroy {
  private intervalId: number = 0;
  isRunning: boolean = false;
  grid: Array<Array<number | null>> = [[]];
  gameOptions: GameOfLifeOptions = {
    gridWidth: 70,
    gridHeight: 30,
    speed: 60,
    probability: 50
  }
  lives: Lives = {
      maxLives: 0,
      currentLives: 0
    };

  ngOnInit(): void {
    this.initializeGame();
    this.toggleRunning();
  }

  ngOnDestroy(): void {
    if (this.isRunning) {
      this.toggleRunning();
    }
  }

  initializeGame(): void {
    this.grid = createGrid(
      this.gameOptions.gridHeight,
      this.gameOptions.gridWidth,
      this.gameOptions.probability
      );
    this.lives.maxLives = this.gameOptions.gridHeight * this.gameOptions.gridWidth;
  }

  gameOptionsForm = new FormGroup({
    gridWidth: new FormControl(this.gameOptions.gridWidth),
    gridHeight: new FormControl(this.gameOptions.gridHeight),
    speed: new FormControl(this.gameOptions.speed),
    probability: new FormControl(this.gameOptions.probability)
  })
  
  runSimulation(): void {
    const newGrid = this.grid.map(arr => arr.slice());
    
    for (let i = 0; i < this.gameOptions.gridHeight; i++) {
      for (let j = 0; j < this.gameOptions.gridWidth; j++) {
        const neighbors = checkNeighbors(
          i,
          j,
          this.grid,
          this.gameOptions
        );
        // Kill cell if it was alive and matched conditions
        if ((neighbors < 2 || neighbors > 3) && this.grid[i][j]) {
          newGrid[i][j] = 0;
        } else if (!this.grid[i][j] && neighbors === 3) {
          newGrid[i][j] = 1;
        }
      }
    }
    this.grid = newGrid;
    this.lives.currentLives = countLives(newGrid);
  }
  

  toggleRunning(): void {
    if (this.isRunning) {
      clearInterval(this.intervalId);
      this.isRunning = false;
    } else {
      this.intervalId = window.setInterval(() => this.runSimulation(), this.gameOptions.speed);
      this.isRunning = true;
    }
  }

  generateSelectOptionsArray(start: number, end: number): Array<number> {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(i * 10);
    }
    return options;
  }

  getLivesPercentage(): string {
    return (this.lives.currentLives / this.lives.maxLives * 100).toFixed(1) + '%';
  }

  handleApply(): void {
    this.gameOptions = this.gameOptionsForm.value
    this.initializeGame();
    clearInterval(this.intervalId);
    this.isRunning = false;
    this.toggleRunning();
  }

}
