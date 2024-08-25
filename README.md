# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).


---



1. Index (Accueil)
Enzo Cordovana
Développeur Web & Étudiant en Informatique

Bienvenue sur mon portfolio. Je suis Enzo Cordovana, étudiant en première année de BUT Informatique à l'IUT d'Aix. Passionné par le développement web, je crée des sites web pour m'exercer et approfondir mes compétences. Actuellement, je me concentre sur l'amélioration de mes compétences et sur l'intégration d'API comme GitHub pour enrichir mes projets.

Projets principaux :
(Note : Tu pourras ici afficher des vignettes cliquables pour tes projets une fois qu'ils seront disponibles.)

Projet 1 : ...
Projet 2 : ...
Projet 3 : ...
2. About (À propos)
À propos de moi

Je m'appelle Enzo Cordovana, et je suis actuellement étudiant en première année de BUT Informatique à l'IUT d'Aix. Avant d'intégrer ce programme, j'ai obtenu un BAC STI2D avec une option en Systèmes d'Information et Numérique (SIN), ce qui m'a permis de développer une solide base en informatique.

Mon parcours universitaire actuel me permet de me spécialiser en développement web, un domaine qui me passionne particulièrement. J'aime concevoir des sites web et explorer de nouvelles technologies pour créer des solutions innovantes.

Compétences :

Langages de programmation : (ex. : HTML, CSS, JavaScript, etc. à préciser selon ton expérience)
Outils/Logiciels : VSCode, Obsidian
Autres compétences : (à préciser si besoin)
Je m'efforce constamment de m'améliorer et de découvrir de nouveaux outils et méthodes pour optimiser mes projets. Actuellement, je travaille sur l'intégration de l'API GitHub pour enrichir mes projets web.

3. Projets (Portfolio)
(Une fois que tu auras des projets à partager, tu pourras les présenter ici.)

Projet 1 : ...

Client/Entreprise : (si applicable)
Date :
Mon rôle :
Objectifs du projet :
Solutions apportées :
Résultats obtenus :
Visuels associés : (captures d'écran, maquettes, etc.)
(Tu pourras répéter ce format pour chaque projet que tu souhaites mettre en avant.)

4. Contact
Si tu souhaites discuter ou simplement me suivre, voici comment me contacter :

Email : enzo.cordovana@etu.univ-amu.fr
Réseaux sociaux :
[LinkedIn](ton lien LinkedIn)
[Instagram](ton lien Instagram)




colors: {
				'text': 'rgb(var(--text))',
				'background': 'rgb(var(--background))',
				'primary': 'rgb(var(--primary))',
				'secondary': 'rgb(var(--secondary))',
				'accent': 'rgb(var(--accent))',
			},
			fontSize: {
				sm: '0.800rem',
				base: '1rem',
				xl: '1.250rem',
				'2xl': '1.563rem',
				'3xl': '1.954rem',
				'4xl': '2.442rem',
				'5xl': '3.053rem',
			},
			fontFamily: {
				heading: 'Bebas Neue',
				body: 'Poppins',
			},
			fontWeight: {
				normal: '400',
				bold: '700',
			},