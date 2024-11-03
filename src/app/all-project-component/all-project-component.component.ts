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
  projectiutNFCTV!: Project;
  projectgoMatch!: Project;
  projectcitadelle!: Project;
  projectfooterWave!: Project;
  projectStweaming!: Project;
  projectTroisCentTeam!: Project;
  projectProdSquad!: Project;
  projectDevred!: Project;
  projectMToutFer!: Project;
  projectTony!: Project;

  
  constructor(private el: ElementRef) {}

  ngOnInit() {
    
    this.projectiutNFCTV = new Project('iutNFCTV', 'School', "Site répertoriant l’ensemble des contenus multimédias de l’Institut Universitaire et Technologique de Nord Franche-Comté.", 'https://github.com/Beaurain-Hugo/themeWPIUTNFC', 'https://iutnfctv.beaurain-hugo.fr/', 'https://drive.google.com/file/d/1Vjzd0XLQN38mQEAPULErYO-k6uOO6Hbu/view?usp=sharing', '../../assets/img/iutNFCTV.gif');
    this.projectEmorphoz = new Project('Emorphoz', 'School', 'E-morphoz est un générateur de NFT collaboratif où vous participez à la création de votre NFT en y ajoutant des accessoires. La température extérieure d’où vous êtes influe aussi sur le rendu final de la NFT. Une fois généré, une partie des bénéfices de la NFT vous sera reversée à vous et à une association à chaque revente. ', 'https://github.com/emorphoz/emorphoz.net', 'https://emorphoz.marwin-rodrigues.fr/', 'https://drive.google.com/file/d/1V8l1vpnRiYibO4J6oVFJy24BSQvJjsK9/view?usp=sharing', '../../assets/img/emorphoz.gif');
    this.projectgoMatch = new Project('GoMatch', 'School', 'Site ayant pour objectif de regrouper les utilisateurs sur des terrains multisports enregistrés sur notre plateforme.', 'https://github.com/Marwin-Rdgs/GoMatch.fr', 'https://gomatch.marwin-rodrigues.fr/', '#', '../../assets/img/gomatch.gif');
    this.projectcitadelle = new Project('Citadelle de Besançon', 'School', "Illustration animée de la Citadelle de Besançon, réalisé sur Illustrator et exporté en SVG afin d'être entièrrement animée en CSS natif", '#', 'https://citadelle-besancon.marwin-rodrigues.fr/', '#', '../../assets/img/citadelle.jpg');
    this.projectfooterWave = new Project('Template Footer', 'Personel', "Template d'un bas de page (footer) animé tels des vagues d'eau. Possibilité d'éditer la liste des pages, des icônes la partie basse de ce dernier.", 'https://github.com/Marwin-Rdgs/Animated_Footer-Template', '#Footer', '#', '../../assets/img/footer_wave.jpg');
    this.projectStweaming = new Project('Stweaming', 'Personel', "Projet personnel ayant pour objectif de regrouper l'ensemble des dessins animés, films, séries, animés d'internet sur une seule plateforme tout en ayant un système d'organisation, trie et d'utilisateur.", 'https://github.com/Marwin-Rdgs/Stweaming', '#', '#', '../../assets/img/stweaming.jpg');
    this.projectTroisCentTeam = new Project('Trois Cent Team', 'School', "Exercice pédagogique effectué durant mon année de seconde où l'ont découvrait le monde robotique et les bases de l'HTML avec Wix.", '#', 'https://marwin-rdgs25.wixsite.com/no-aim', '#', '../../assets/img/troiscentteam.jpg');
    this.projectProdSquad = new Project("Prod'Squad", 'Prestation', "Création d'un site internet dans l'objectif de faire la promotion d'une communauté autour d'un jeu vidéo nommé 'Minecraft'.", '#', 'https://marwin-rdgs25.wixsite.com/prodsquad', '#', '../../assets/img/prodsquad.png');
    this.projectDevred = new Project("Devred", 'Prestation', "Réalisation d'un flyer pour promouvoir un défilé de mode privé mettant en avant des collections estivales", '#', 'https://www.linkedin.com/posts/marwin-rodrigues_mode-daezfilaez-aeztaez2024-activity-7201152078403043328-audW?utm_source=share&utm_medium=member_desktop', 'https://www.linkedin.com/feed/update/urn:li:activity:7204045444274925568', '../../assets/img/Com-Devred.jpeg');
    this.projectMToutFer = new Project("MToutFer", 'Prestation', "Création de supports de communication print (cartes de visite, panneaux publicitaires, flyers) pour promouvoir MToutFer, entreprise spécialisée dans la récupération de ferraille et débarras.", '#', '#', 'https://www.linkedin.com/feed/update/urn:li:activity:7206218494026100736', '../../assets/img/Com-MToutFer.jpeg');
    this.projectTony = new Project("MToutFer", 'Prestation', "Création de flyers pour promouvoir les services de nettoyage de véhicules et de tissus de Tony Rodrigues.", '#', '#', 'https://www.linkedin.com/feed/update/urn:li:activity:7251883261268750336', '../../assets/img/Com-Tony.jpeg');
}
}