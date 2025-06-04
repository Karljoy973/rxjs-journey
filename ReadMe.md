# Roadmap RxJS - 10 Projets Progressifs
## Niveau Débutant
> Compteur Interactif 
    Start/Stop/Reset avec interval
    Gestion d'état simple avec scan

> Recherche en Temps Réel
    Input avec debounceTime et distinctUntilChanged
    Simulation d'API avec delay
    Affichage de résultats filtés

> Slider de Couleurs
    3 sliders RGB avec fromEvent
    combineLatest pour mixer les couleurs
    Mise à jour en temps réel du background

## Niveau Intermédiaire

> Chat en Temps Réel (Simulé)
    Messages avec timestamps
    merge de plusieurs observables
    Scroll automatique et animations CSS

> Drag & Drop Avancé
    mouseDown, mouseMove, mouseUp
    switchMap et takeUntil
    Animations CSS fluides avec RxJS

> Dashboard Météo Animé
    Multiples sources de données (timer + API simulée)
    forkJoin et retry
    Animations CSS synchronisées

## Niveau Avancé
> Jeu Snake Réactif
    Contrôles clavier avec fromEvent
    Logique de jeu avec scan et map
    Collision detection et game over

> Visualiseur Audio Interactif
    Web Audio API + RxJS
    animationFrameScheduler
    Canvas + CSS pour les effets visuels

> Éditeur de Code Collaboratif
    Opérateurs de transformation complexes
    Gestion d'état sophistiquée
    Highlighting syntax en temps réel

> Mini IDE avec Terminal
    Architecture complète avec Subject
    Communication entre composants
    File system simulé avec observables



## Projet 11 : Visualiseur 3D Collaboratif en Temps Réel

### Concept
Un environnement 3D partagé où plusieurs utilisateurs peuvent manipuler des objets 3D simultanément, avec synchronisation en temps réel.

### Stack Technique
- **Frontend** : RxJS + Three.js + HTML/CSS
- **Backend** : Express.js + WebSockets (Socket.io)
- **Base de données** : MongoDB (pour flexibilité des objets 3D) ou MySQL (pour structure relationnelle)

### Fonctionnalités RxJS + Three.js
- **Contrôles 3D réactifs** : fromEvent sur mouse/keyboard → Three.js camera/objects
- **Animations fluides** : animationFrameScheduler pour render loop
- **Physics simulation** : interval + scan pour gravity/collision
- **Multi-user sync** : WebSocket observable + merge des actions utilisateurs

### Fonctionnalités Avancées
- Drag & drop 3D avec raycasting
- Chat 3D avec bulles flottantes
- Sauvegarde/chargement de scènes
- Système de permissions (qui peut modifier quoi)

### Défis RxJS
- Gestion d'état complexe multi-utilisateurs
- Synchronisation réseau avec retry/reconnection
- Performance avec throttle sur les mouvements 3D
- Memory management (unsubscribe sur destruction d'objets)

