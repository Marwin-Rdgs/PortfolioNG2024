import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../models/card-client.model';


@Component({
  selector: 'app-card-client',
  templateUrl: './card-client.component.html',
  styleUrls: ['./card-client.component.scss']
})
export class CardClientComponent {

  @Input() client!: Client;
  
  name!: string;
  poste!: string;
  projet!: string;
  url!: string;
  photo!: string;
  avis!: string;
}
