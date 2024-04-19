import { Component, OnInit, ElementRef } from '@angular/core';
// import { app-card-project } from './card-project/card-project.component';
import '../../vantajs/dist/vanta.globe.min'
import { Client } from './models/card-client.model';
import { Project } from './models/card-project.model';
// import ''
declare var VANTA: any; // Déclaration de la variable VANTA
declare var AOS: any; // Déclaration de la variable AOS

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  clientJadyss!: Client;
  clientChooseMe!: Client;


  projectEmorphoz!: Project;

  
  constructor(private el: ElementRef) {}

  ngOnInit() {

    this.clientJadyss = new Client('Marwin RODRIGUES', 'WebMaster', 'Chez Marwin-Web', 'google.com','../../assets/Me.png','trop bien');
    this.clientChooseMe = new Client('Johan GRANDMOUGIN', 'Directeur Commercial', 'XXXXXX', 'google.com','../../assets/Marwin.png','yeaaaaaah');
    
    this.projectEmorphoz = new Project('Emorphoz', 'School', 'ouais ouais ça arrive', '#', '#', '#', '../../assets/img/emorphoz.gif');


    this.initGlobe(); // Appel de la fonction d'initialisation de l'animation
    this.AOSinit(); // Appel de la fonction d'initialisation de l'animation de scroll
  }

AOSinit() {
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js'

  script.onload = () => {
    AOS.init();
  }
}


  initGlobe() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js';
    script.onload = () => {
    VANTA.GLOBE({
      el: "#vantajs", // Élément HTML dans lequel l'animation sera rendue
      // Options de configuration de l'animation GLOBE
      // backgroundColor: 0x0 // Couleur de fond
      color: 0xffa03f,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      // Ajoutez d'autres options selon vos besoins
    });
  }
  document.body.appendChild(script);
}}

const menuVisible = true;

let english = false;