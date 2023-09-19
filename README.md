# 3.5e D&D Spell Manager  [![Netlify Status](https://api.netlify.com/api/v1/badges/856ba4bc-a47a-4a64-a753-65e680d5dc82/deploy-status)](https://app.netlify.com/sites/dnd-3-5e-spellbook/deploys)

This application allows the user to easly Manage their 3.5e D&D character's spells and spell slots.

- [View App](dnd-3-5e-spellbook.netlify.app)
- [Checkout my Loom Video](https://www.loom.com/share/f1ef94f7b4344fdc874305c47dd5fb69?sid=1973c351-84d3-4a33-87f1-08827628e71f)


## About the User <!-- This is a scaled down user persona -->
- The ideal user for this application is a 3.5e D&D player
- They play a Spellcaster and need to manage thats characters spell and spell slots
- The problem this app solves for them is that 3.5e D&D has hundreds of spells per class. This app allows the user to filter through the spells and prepare(favorite) what spells they use, as well as manage all their spell slots.

## Features <!-- List your app features using bullets! Do NOT use a paragraph. No one will read that! -->
- The user can create the character choosing their name, level, class, and spell casting ability
- Each character has their own Prepared spells screen which shows all of their Prepared/favorite spells
- Each character has their own Known spells screen which only shows the user spells their character can cast based on class and level
- Each character has their own Spell Manager which shows the characters spell slots and how many they have. The Spell slots are based on their class, level, and spell casting ability
- All Spells screen which shows all the spells in my database and allows the user to filter through all the spells.
- The app contains a physics based dice roller

## To get the App setup

1. Set up a [Firebase](https://firebase.google.com/) project - Here's how: [Firebase Setup & Authentication](https://www.loom.com/share/163ffe1539bb482196efa713ed6231e9)

2. Clone Plated to your local machine
``` bash
git@github.com:Mason-Austin/3.5e-SpellBook.git
```

2. Move into directory
``` bash
cd 3.5e-SpellBook
```

3. Once in Plated's code, create a .env file at the root of the project and paste the following keys into the .env file:
``` bash
NEXT_PUBLIC_FIREBASE_API_KEY=""
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=""
NEXT_PUBLIC_FIREBASE_DATABASE_URL=""
NEXT_PUBLIC_FIREBASE_PROJECT_ID=""
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=""
NEXT_PUBLIC_FIREBASE_APP_ID=""
```

4. The last portion of the Firebase walkthrough from step 1 highlights where to find the values to put in the empty strings in the code snippet of step 4. From Firebase, copy the values and paste them into the empty strings of the respective keys located in the .env file.

5. Be in the root directory and from your command line, run
``` bash
npm install or npm i
```
6. Now from your command line, run
``` bash
npm run prepare
```
7. To start the app, run
``` bash
npm run dev
```
8. Click http://localhost:3000 in the terminal to open the browser

9. Enjoy 3.5e Spell Manager

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Checkout my Loom Video](https://www.loom.com/share/f1ef94f7b4344fdc874305c47dd5fb69?sid=1973c351-84d3-4a33-87f1-08827628e71f)
- [Check out the deployed site](dnd-3-5e-spellbook.netlify.app)
- [Wireframes](https://www.figma.com/file/svGZ43BBtw5uhmCspc6kDY/3.5e-Spell-book?type=design&node-id=0%3A1&mode=design&t=kcYstrhlOxDXDu8d-1)
- [Project Board](https://github.com/users/Mason-Austin/projects/2/views/1)

<!-- ## Project Screenshots These can be inside of your project. Look at the repos from class and see how the images are included in the readme <img width="1148" alt="Your Alt" src="your-link.png"> -->

## Contributors
- [Mason Austin](https://github.com/Mason-Austin)
