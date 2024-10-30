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
  projectiutNFCTV!: Project;

  
  constructor(private el: ElementRef) {}

  ngOnInit() {

    this.clientChooseMe = new Client('Johan GRANDMOUGIN', 'Directeur Commercial', 'MDJ (Soon)', '#','../../assets/clients/JohanGrandMougin.jpg','Nous avons demandé à Marwin de créer notre projets Nous lui avons expliqué ce que nous voulions, il a été à l’écoute, nous a poser des questions, ensuite il se projetait en incluant des options auxquels nous avions pas pensé ce qui répondait à nos attentes de plus améliorait notre projet et nous lui avons approuvé le prototype. Nous sommes content de Marwin');
    this.clientAlternance = new Client('Andréa LOPES', 'Chef de projet', 'Forvia', 'https://www.faurecia.com/','../../assets/clients/AndréaLopes.jpeg','Marwin a été mon alternant entre septembre 2022 et août 2024 au sein de Forvia. Il a été très efficace et a su prendre en compte les conseils et remarques tout au long de cette période, il a beaucoup évolué et est aujourd’hui plus que jamais prêt à relever des défis. Très polyvalent et toujours volontaire, il sera une force pour votre entreprise !');
  
    this.clientJadyss = new Client('Julien VISSAULT', 'Administrateur', 'Jadyss (Soon)', '#','../../assets/clients/JulienVissault.jpeg','Marwin est très professionnel dans son travail, on lui a confié la responsabilité du projet de développement de notre site internet. Nous sommes entièrement satisfait sur tous les aspects de ce projet que ce soit sur la partie technique ou gestion de projet.');
    this.clientAntoine = new Client('Antoine BELUCHE', 'Auto-entrepreneur', 'MTouFer', 'https://www.facebook.com/profile.php?id=61554891526976&locale=fr_FR','../../assets/clients/AntoineBeluche.jpg',"Marwin a été très compétent et il a répondu à mes attentes qui m'ont permis de me concentrer totalement sur mon activité d'auto-entreprise.");
    
    this.clientChatonnay = new Client('Pascal CHATONNAY', 'Enseignant', 'MMI Montbéliard', 'https://www.linkedin.com/school/mmimontbeliard/?originalSubdomain=fr','../../assets/clients/pascalChatonnay.jpg',"Marwin s'est distingué par son implication et son enthousiasme. Son engagement en alternance chez Forvia lui a permis de développer un savoir-faire technique solide, tout en appliquant de manière pratique les compétences acquises au département MMI de Montbéliard. Sa capacité à jongler entre les exigences académiques et professionnelles témoigne de sa rigueur, de son sens de l'organisation et de sa passion pour le développement tout en étant à l'aise avec la communication et le design. Outre ses compétences professionnelles, Marwin est toujours d'une compagnie agréable.");
    this.clientDany = new Client('Dany GALMICHE', 'Auto-entrepreneur', 'Dany Galmiche Design', 'https://www.instagram.com/danyg_design/','../../assets/clients/danyGalmiche.jpeg',"Efficace et professionnel c'est un très bon collaborateur.");
    
    this.projectiutNFCTV = new Project('iutNFCTV', 'School', "Site répertoriant l’ensemble des contenus multimédias de l’Institut Universitaire et Technologique de Nord Franche-Comté.", 'https://github.com/Beaurain-Hugo/themeWPIUTNFC', 'https://iutnfctv.beaurain-hugo.fr/', 'https://drive.google.com/file/d/1Vjzd0XLQN38mQEAPULErYO-k6uOO6Hbu/view?usp=sharing', '../../assets/img/iutNFCTV.gif');
    this.projectEmorphoz = new Project('Emorphoz', 'School', 'E-morphoz est un générateur de NFT collaboratif où vous participez à la création de votre NFT en y ajoutant des accessoires. La température extérieure d’où vous êtes influe aussi sur le rendu final de la NFT. Une fois généré, une partie des bénéfices de la NFT vous sera reversée à vous et à une association à chaque revente. ', 'https://github.com/emorphoz/emorphoz.net', 'https://emorphoz.marwin-rodrigues.fr/', 'https://drive.google.com/file/d/1V8l1vpnRiYibO4J6oVFJy24BSQvJjsK9/view?usp=sharing', '../../assets/img/emorphoz.gif');


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