import { Component, OnInit } from '@angular/core';
import { Holder, HoldersService } from 'src/app/services/holders.service';

@Component({
  selector: 'app-holder',
  templateUrl: './holder.component.html',
  styleUrls: ['./holder.component.css']
})
export class HolderComponent implements OnInit {

  cpf: any;
  name: any;
  holders: Holder[] = [];

  constructor(private holderService: HoldersService) { }

  ngOnInit(): void {
    this.all();
  }

  all(): void {
    this.holderService.all()
    .subscribe(
      data => this.holders = data,
      error => console.log(error)
    )
  }

  create() {
    const holder = {
      cpf: this.cpf,
      name: this.name
    };

    this.holderService.create(holder)
    .subscribe(
      response => {
        console.log(response);
        this.all();
      },
      error => console.log(error)
    )
  }

}
