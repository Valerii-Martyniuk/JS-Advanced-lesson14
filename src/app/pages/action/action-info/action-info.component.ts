import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionResponse } from 'src/app/shared/interfaces/action.interface';

@Component({
  selector: 'app-action-info',
  templateUrl: './action-info.component.html',
  styleUrls: ['./action-info.component.scss'],
})
export class ActionInfoComponent implements OnInit {
  public action : ActionResponse = {
    date: 'string',
    name: 'string',
    title: 'string',
    description: 'string',
    imagePath: 'string',
    id:1,
  }
  public description: Array<string>=['q','q']

  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response) => {
      this.action = response['actionInfo'];
    });
    if(this.action){
      this.description = this.action.description.split('<br>');
    }
  }
}
