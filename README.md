# Projet CALM

Dans le cadre des projets ADICODE menés à l'ISEN Lille en M1-M2, la start-up Care Analysis Lab (on) Mobile (CALM) nous a proposé un projet d’innovation dans le domaine de la santé.
 

### Présentation de l'entreprise 
Sébastien BONTE est le porteur du projet CALM (Care Analysis Lab on Mobile) en incubation à Euratechnologies. L’activité du projet CALM repose sur un constat simple : le gaspillage croissant et les mauvaises prises de médicaments qui peuvent être préjudiciables pour les patients.  
Dans cette optique, le projet CALM vise à développer et commercialiser la machine Medspresso, un distributeur multi-doses qui délivrera « la juste dose, de la bonne molécule, à la bonne personne ».  
Lors du développement du concept « Medspresso », il est apparu nécessaire de connecter l’ensemble des parties-prenantes :  l’usager (le patient), le personnel soignant, les aidants, les autorités de santé, les laboratoires pharmaceutiques, les familles…


### Présentation de l'application web

Les objectifs détaillés de l’application sont : 
- Centralisation des données de santé : création d’un dossier médical collaboratif 
- Sécurisation des données et système d'autorisation : respect du secret médical 
- Analyse des données collectées afin d'en dégager de l'information : Big Data  
- Simplification de l'accès aux soins : dossier médical consultable en ligne, démarches administratives en ligne (procédures de remboursement), etc… 
- Connexion à la Medspresso : identifier le patient pour délivrer le bon médicament 

L’architecture du projet a été conçue sur la base du « Mean Stack » avec les 4 technologies suivantes : 
- Angular 2  
- NodeJS 
- Express 
- MongoDB

### Quickstart

Notre configuration :
- IDE de développement : WebStorm développé par JetBrains (WebStorm 2016.3.4, Build #WS-163.13906.20)
- Version de MongoDB 3.4.2 (ne pas oublier de l'ajouter au path dans les variables d’environnement)
- Robomongo (outil de visualisation de la BDD)

Installation de l’environnement :
- Cloner le projet depuis Gitlab ou récupérer le projet zip
- Ouvrir une invite de commande à la racine du projet
- Installer les dépendances du fichier package.json en tapant : `npm install`
- Ouvrir une autre invite de commande
- Lancer le serveur MongoDB en tapant : `mongod`
- Lancer une instance client en tapant : `mongo` dans une autre invite de commande ou utiliser Robomongo
- Dans l’instance client, créer une nouvelle base de données en tapant : `use userdb` (nous avons choisi de l’appeler ainsi mais il est possible de changer de nom)
- Lancer l’application depuis la première invite de commande en tapant : `npm start`
- Lancer un navigateur et se connecter à l’URL : https://localhost:3000


### Infos
Le login s'appuie sur le protocole Oauth avec le module passport
La prise de rendez-vous et la géolocalisation utilise l'api google map
La partie traitement utilise la base de données publiques de médicaments (https://open-medicaments.fr/#/home)
Un fichier (structure.png) contient un aperçu (très rapide) de la structure de l'application.


### Contributeurs
M1 (début 2017)
Romain VANMARCKE  
Julien VERMEIL

M2 (fin 2017)
Hongchang Xu
Quentin Drumez
Pierre Barre