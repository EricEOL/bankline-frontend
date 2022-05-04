import { Component, OnInit } from '@angular/core';
import { MovementService } from '../../services/movement.service';

@Component({
  selector: 'app-movement-list',
  templateUrl: './movement-list.component.html',
  styleUrls: ['./movement-list.component.css']
})
export class MovementListComponent implements OnInit {

  movements: any;

  constructor(private movementService: MovementService) { }

  ngOnInit(): void {
    this.all();
  }

  all(): void {
    this.movementService.all()
    .subscribe(
    data => {
      this.movements = data;
    },
    error => console.log(error)
    )
  }
}
