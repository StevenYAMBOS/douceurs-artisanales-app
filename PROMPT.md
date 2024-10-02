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

Je vais te partager des fichiers un par un, contente-toi de les garder en mémoire sans me donner de réponse.

Garde-en mémoire ce fichier, ne me donne de réponse que lorsque je te formulai clairement ma demande.

 J'aimerais que tu respectes ces consignes dans tes prochaines réponses :

- Partages uniquement le code à modifier/ajouter
- Explique où ajouter le code
- Propose un code flexible
- Ajoute des commentaires claires et concis si tu partages du code (sois descriptif dans le ton)
- N'invente rien, si tu n'as pas de solution explicites le