import { Component, OnInit } from '@angular/core';
import { Movement, MovementService } from '../../services/movement.service';
import { Holder, HoldersService } from 'src/app/services/holders.service';

@Component({
  selector: 'app-movement-list',
  templateUrl: './movement-list.component.html',
  styleUrls: ['./movement-list.component.css']
})
export class MovementListComponent implements OnInit {

  holders: Holder[] = [];

  holder: any;

  movements: Movement[] = [];

  constructor
  (
    private movementService: MovementService,
    private holderService: HoldersService
  ) { }

  ngOnInit(): void {
    this.allHolders();
  }

  all(): void {
    this.movementService.all(this.holder)
    .subscribe(
    data => {
      this.movements = data;
    },
    error => console.log(error)
    )
  }

  allHolders(): void {
    this.holderService.all()
    .subscribe(
      data => this.holders = data,
      error => console.log(error)
    )
  }
}
