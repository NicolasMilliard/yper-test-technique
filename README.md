# Yper

<img src="src/application/constants/images/logo/yper-logo.svg" alt="Yper" />

Test technique réalisé pour Yper.

## Sommaire

1. [Description du projet](#project-description)
2. [Technologies utilisées](#technologies)
3. [Installation](#installation)

---

<a name="project-description"></a>

## Description du projet

Ce test technique permet à un utilisateur de rechercher des magasins enregistrés chez Yper autour de lui. Les magasins trouvés sont afficher sous forme d'une liste et via une map interactive. L'utilisateur peut obtenir davantage d'informations sur la page dédiée au magasin comme son adresse exacte et ses horaires d'ouvertures.

Fonctionnalités à venir :

✔️ Pré-remplir l'adresse de l'utilisateur avec sa position actuelle<br>
✔️ Pagination de l'API Yper

- Rendre dynamique la taille de la zone de recherche via un slider
- Map interactive sur la page du magasin pour proposer un itinéraire depuis Google Maps
- Optimiser le SCSS via l'utilisation de constantes

---

<a name="technologies"></a>

## Technologies

Outils utilisés à travers ce projet :

- React JS
- Bootstrap
- React Router DOM
- SDK Google Maps (places-autocomplete)
- Google Maps React Markers
- React Geolocated
- Dotenv
- Axios
- Redux
- React Testing Library
- Jest
- TypeScript
- SASS

---

<a name="installation"></a>

## Installation

**Etape 1 :**

```sh
# Clone the repo
git clone https://github.com/NicolasMilliard/yper-test-technique.git

# Install dependencies
cd yper-test-technique
npm install
```

**Etape 2 :**

Vous devez être en possession d'une clé API Google ainsi que d'une clé API Yper. Une fois ces deux clés obtenues, créez un fichier `.env` à la racine du projet en suivant les indications du fichier `.env.example`.

**Etape 3 :**

```sh
# Start the project
npm start
```
