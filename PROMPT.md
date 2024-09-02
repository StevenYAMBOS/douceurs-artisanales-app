# Contexte de mon application

## Structure de l'application

```shell
├── package.json
├── package-lock.json
├── PROMPT.md
├── README.md
├── src
│   ├── app.d.ts
│   ├── app.html
│   ├── lib
│   │   ├── components
│   │   │   └── NavBar.svelte
│   │   └── index.ts
│   └── routes
│       └── +page.svelte
├── static
│   └── favicon.png
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

- le dossier `components` est-il au bon endroit ? Si non, où se place-t-il ?
- les composants `Header.svelte` et `Footer.svelte` doivent apparaîtrent dans chaque pages de l'application, où dois-je les appeler pour ça ?
- crée le fichier `layout.svelte` et intègre-le à mon projet.
- ajoute un menu burger dans mon composant `NavBar.svelte`, je veux qu'il apparaisse en responsive (ajoute les breakpoint nécessaires et qui respectent les tailles à suivre aujourd'hui).
- si mon HTML est incorrect dans mes composants corrige-le/améliore-le.

Je vais te partager des fichiers un par un, contente-toi de les garder en mémoire sans me donner de réponse.

Garde-en mémoire ce fichier, ne me donne de réponse que lorsque je te formulai clairement ma demande.

<!-- --------------------------------------------------------------------------------------- -->

Partage-moi dans ta réponse uniquement les codes à modifier.
