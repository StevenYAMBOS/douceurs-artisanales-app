# Contexte de mon application

## Structure de l'application

```shell
├── package.json
├── package-lock.json
├── PROMPT.md
├── README.md
├── src
│   ├── app.d.ts
│   ├── app.html
│   ├── global.css
│   ├── lib
│   │   ├── components
│   │   │   ├── Footer.svelte
│   │   │   ├── Header.svelte
│   │   │   ├── NavBar.svelte
│   │   │   └── SearchBar.svelte
│   │   └── index.ts
│   └── routes
│       ├── +layout.svelte
│       ├── login
│       │   ├── +layout.svelte
│       │   └── +page.svelte
│       └── +page.svelte
├── static
│   ├── bakery_anime.jpg
│   └── favicon.png
├── svelte.config.js
├── tsconfig.json
└── vite.config.ts
```

## Technologies

- Typescript
- SvelteJS
- Docker (intégré plus tard)
- Swagger (intégré plus tard)

## Ma demande

Je débute en SvelteJS, corrige mes erreurs et explique-moi tes décisions :

- j'ai cette structure de projet (cf : ## Structure de l'application)

Je vais créer une page profile pour mon utilisateur en SvelteJS.
Est-ce que je peux faire un `GET` des informations de l'utilisateur connecté lors de la connexion pour pouvoir les utiliser à tout moment partout dans l'application ?

- ADMIN : Développeurs de la plateforme, détient tout les droits sur l'application (`role="ADMIN"`)
- OWNER : Artisan boulanger, peut créer/modifier/récupérer/supprimer sa boulangerie (`role=OWNER`)
- USER : Utilisateur lambda qui consulte simplement l'application (`role=USER`)

La page du profile est dynamique selon l'utilisateur qui est connecté.
Je vais te partager ce qui doit être afficher pour chaque role.
Nous allons commencer avec les ADMIN.

ADMIN :

- un menu à gauche et les informations à droite
- le menu à gauche contient les sections suivantes -> Utilisateurs (liste de tous les utilisateurs de l'application), Boulangeries (liste de toutes les boulangeries de l'application), 

USER :

- un menu à gauche et les informations à droite
- le menu à gauche contient les sections suivantes -> Profil, Favoris, Commentaires, Changement de statut
- le menu à droite contient les éléments suivant -> Profil : Image de profil, Nom, Prénom, Changer de mot de passe

<!-- --------------------------------------------------------------------------------------- -->

La connexion n'est pas stable sur mon application :

- quand il y a une erreur l'utilisateur connecté est automatiquement déconnecté de l'application pourtant son token de connexion est toujours dans le `local storage`
- où dois-je modifier mon code pour que la connexion de l'utilisateur soit stable et qu'il ne soit déconnecté qu'uniquement si le token de connexion n'est plus dans le `local storage` côté Front-End ?
- comment mieux gérer la persistence de connexion de l'utilisateur dans l'application, est-t-il bien appelé dans les autres composants ?

<!-- --------------------------------------------------------------------------------------- -->

Le champ password doit :

- quand on clique sur l'icône `visibility` on doit afficher le mot de passe et quand on re-clique dessus on peut le cacher (l'icône doit devenir `visibility_off`)
- l'input password a une bordure en focus, supprime-là

<!-- --------------------------------------------------------------------------------------- -->

J'ai un composant dans `routes/bakeries` qui récupère et affiche les boulangeries en base de données dans des cards.
Je veux que lorsqu'on clique sur la card d'une boulangerie ça redirige vers la page de cette boulangerie, comment faire ?

Structure du projet :

```
```

FRONT-END

```
```

```
```

BACK-END

```
```

<!-- --------------------------------------------------------------------------------------- -->

Je veux intégrer une carte Google Maps qui pointe la localisation de l'adresse de la boulangerie dessus.
Je veux l'intérer dans mon composant `bakery/[id]`, comment faire ?

_____________________________________________________________________________________________________________

Rédige un commit en bullet-points des tâches que j'ai réalisé aujourd'hui :

- un titre
- un sous titre -> feat : exemple de sous titre
- les tâches en bullet-point
- sois concis, ne va pas dans les détails

---

Je vais te partager plusieurs fichiers 1 par 1. Je veux que tu les gardes en mémoire. Lorsque j'aurai  formulé ma demande tu pourras me partager ta réponse détaillé.

Garde en mémoire le fichier, comme expliqué précédemment, tu me fourniras une réponse au moment de ma demande.

---

J'aimerais que tu respectes ces consignes dans tes prochaines réponses :

- Explique où ajouter le code que tu as partagé
- Corrige le code existant si c'est nécessaire
- Ajoute des commentaires claires et concis si tu partages du code (sois descriptif dans le ton)
- N'invente rien, si tu n'as pas de solution à mon problème dis-le
