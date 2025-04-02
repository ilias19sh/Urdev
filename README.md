# Urdev - Agence Web à Lille

Site web de l'agence Urdev, spécialisée dans la création de sites internet professionnels à Lille.

## Fonctionnalités

- Design moderne et responsive
- Navigation fluide par ancrage
- Optimisation SEO
- Support PWA
- Performance optimisée
- Images optimisées
- Chargement progressif

## Optimisations de Performance

- **Code Splitting** : Séparation du code en chunks pour un chargement optimisé
- **Lazy Loading** : Chargement différé des images et composants
- **Minification** : Réduction de la taille des fichiers CSS et JavaScript
- **PWA** : Support des Progressive Web Apps pour une expérience native
- **Cache** : Mise en cache des ressources statiques
- **Compression** : Compression des assets pour un chargement plus rapide

## Optimisations SEO

- **Meta Tags** : Balises meta optimisées pour les moteurs de recherche
- **Structured Data** : Données structurées pour une meilleure visibilité
- **Sitemap** : Plan du site pour une meilleure indexation
- **Robots.txt** : Instructions pour les robots des moteurs de recherche
- **URLs** : Structure d'URLs optimisée pour le SEO
- **Contenu** : Contenu optimisé pour les mots-clés cibles

## Technologies Utilisées

- React 18
- TypeScript
- Vite
- TailwindCSS
- PWA
- Lighthouse

## Installation

```bash
# Cloner le repository
git clone https://github.com/urdev/website.git

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## Scripts Disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Compile le projet pour la production
- `npm run preview` : Prévisualise la version de production
- `npm run lint` : Vérifie le code avec ESLint
- `npm run analyze` : Analyse la taille du bundle
- `npm run lighthouse` : Lance un audit de performance
- `npm run test:perf` : Teste les performances après build

## Mesures de Performance

- First Contentful Paint (FCP) : < 1.8s
- Largest Contentful Paint (LCP) : < 2.5s
- First Input Delay (FID) : < 100ms
- Cumulative Layout Shift (CLS) : < 0.1
- Time to Interactive (TTI) : < 3.8s

## Structure du Projet

```
src/
  ├── components/     # Composants React
  ├── media/         # Images et assets
  ├── styles/        # Styles CSS
  ├── App.tsx        # Composant principal
  └── main.tsx       # Point d'entrée
public/
  ├── robots.txt     # Instructions pour les robots
  └── sitemap.xml    # Plan du site
```

## Contribution

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## Licence

MIT 