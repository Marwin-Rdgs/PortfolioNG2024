import { Component, OnInit, ElementRef } from '@angular/core';
// import { app-card-project } from './card-project/card-project.component';
import '../../../vantajs/dist/vanta.globe.min'
import { Client } from '../models/card-client.model';
import { Project } from '../models/card-project.model';
// import ''
declare var VANTA: any; // Déclaration de la variable VANTA
declare var AOS: any; // Déclaration de la variable AOS

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  clientChooseMe!: Client;
  clientAlternance!: Client;

  clientJadyss!: Client;
  clientAntoine!: Client;

  clientChatonnay!: Client;
  clientDany!: Client;

  // ===============

  projectEmorphoz!: Project;

  
  constructor(private el: ElementRef) {}

  ngOnInit() {

    this.clientChooseMe = new Client('Johan GRANDMOUGIN', 'Directeur Commercial', 'MDJ (Soon)', 'google.com','../../assets/clients/JohanGrandMougin.jpg','Nous avons demandé à Marwin de créer notre projets Nous lui avons expliqué ce que nous voulions, il a été à l’écoute, nous a poser des questions, ensuite il se projetait en incluant des options auxquels nous avions pas pensé ce qui répondait à nos attentes de plus améliorait notre projet et nous lui avons approuvé le prototype. Nous sommes content de Marwin');
    this.clientAlternance = new Client('Andréa LOPES', 'Chef de projet', 'Forvia', 'google.com','../../assets/clients/AndréaLopes.jpeg','Bsahtek le tipeu');
  
    this.clientJadyss = new Client('Julien VISSAULT', 'Administrateur', 'Jadyss', 'google.com','../../assets/clients/JulienVissault.jpeg','trop bien');
    this.clientAntoine = new Client('Antoine BELUCHE', 'Auto-entrepreneur', 'MTouFer', 'google.com','../../assets/clients/AntoineBeluche.jpg',"Marwin a été très compétent et il a répondu à mes attentes qui m'ont permis de me concentrer totalement sur mon activité d'auto-entreprise.");
    
    this.clientChatonnay = new Client('Pascal CHATONNAY', 'Ensaignant', 'MMI Montbéliard', 'google.com','../../assets/clients/pascalChatonnay.jpg','trop bien');
    this.clientDany = new Client('Dany GALMICHE', 'Auto-entrepreneur', 'Dany Galmiche Design', 'google.com','../../assets/clients/danyGalmiche.jpeg',"J'adore zebi");
    
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