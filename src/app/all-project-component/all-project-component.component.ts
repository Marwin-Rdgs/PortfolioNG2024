import { Component, OnInit, ElementRef } from '@angular/core';
import '../../../vantajs/dist/vanta.globe.min'
import { Project } from '../models/card-project.model';
// import ''

@Component({
  selector: 'app-all-project-component',
  templateUrl: './all-project-component.component.html',
  styleUrls: ['./all-project-component.component.scss']
})
export class AllProjectComponentComponent implements OnInit {

  projectEmorphoz!: Project;

  
  constructor(private el: ElementRef) {}

  ngOnInit() {
    
    this.projectEmorphoz = new Project('Emorphoz', 'School', 'ouais ouais ça arrive', '#', '#', '#', '../../assets/img/emorphoz.gif');
}
}