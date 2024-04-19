import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/card-project.model';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent {

  @Input() project!: Project;
  
  name!: string;
  theme!: string;
  bio!: string;

  repos!: string;
  site!: string;
  doc!: string;

  img!: string;

}
