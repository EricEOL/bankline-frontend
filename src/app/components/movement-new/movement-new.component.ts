import { Component, OnInit } from '@angular/core';
import { Holder, HoldersService } from 'src/app/services/holders.service';
import { MovementService } from 'src/app/services/movement.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movement-new',
  templateUrl: './movement-new.component.html',
  styleUrls: ['./movement-new.component.css']
})
export class MovementNewComponent implements OnInit {

  holders: Holder[] = [];

  movementForm: FormGroup;

  constructor
  (
    private holdersService: HoldersService, 
    private movementService: MovementService,
    private formBuilder: FormBuilder
  ) 
  { 
    this.movementForm = this.formBuilder.group(
      {
        description: "",
        value: 0,
        movementType: "",
        accountId: 0,
      }
    )
  }

  ngOnInit(): void {
    this.all();
  }

  all(): void {
    this.holdersService.all()
    .subscribe(
      data => this.holders = data,
      error => console.log(error)
    );
  }

  create(): void {
    this.movementService.create(this.movementForm.value)
    .subscribe(
      response => console.log(response),
      error => console.log(error)
    )
  }
}
