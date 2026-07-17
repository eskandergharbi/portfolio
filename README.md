# Portfolio — Eskander Gharbi

Site vitrine one-page pour un profil Développeur Fullstack Java & Angular : hero avec schéma d'architecture animé (Angular → API → Spring Boot → Kafka → DB), timeline d'expérience, stack technique, contact.

Fichiers :
- `index.html`, `style.css`, `script.js` → le site
- `server.js` → petit serveur Express qui sert ces fichiers (nécessaire pour Heroku)
- `package.json`, `Procfile` → configuration pour Node.js / Heroku

## 1. Lancer en local

Prérequis : [Node.js](https://nodejs.org) installé (version 18 ou plus).

```bash
# Se placer dans le dossier du projet
cd portfolio

# Installer les dépendances (juste Express)
npm install

# Démarrer le serveur
npm start
```

Puis ouvre **http://localhost:3000** dans ton navigateur.

Pour arrêter le serveur : `Ctrl + C` dans le terminal.

> Astuce : pendant que tu modifies `index.html` / `style.css`, recharge simplement la page dans le navigateur après chaque sauvegarde (pas de build à lancer, c'est du HTML/CSS/JS pur).

## 2. Déployer sur Heroku

### Étape 0 — Prérequis
- Un compte [Heroku](https://signup.heroku.com/) (gratuit pour démarrer, une carte peut être demandée selon le plan actuel)
- La [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installée
- [Git](https://git-scm.com/) installé

### Étape 1 — Initialiser Git dans le projet
```bash
cd portfolio
git init
git add .
git commit -m "Premier commit - portfolio"
```

### Étape 2 — Se connecter à Heroku
```bash
heroku login
```
Une fenêtre de navigateur s'ouvre pour te connecter.

### Étape 3 — Créer l'application Heroku
```bash
heroku create eskander-gharbi-portfolio
```
Remplace `eskander-gharbi-portfolio` par le nom que tu veux (doit être unique sur Heroku). Si tu ne mets pas de nom, Heroku en génère un automatiquement.

Cette commande ajoute automatiquement un remote Git nommé `heroku`.

### Étape 4 — Déployer
```bash
git push heroku main
```
> Si ta branche locale s'appelle `master` au lieu de `main`, utilise :
> ```bash
> git push heroku master
> ```

Heroku détecte automatiquement le `package.json`, installe Express, puis démarre l'app avec la commande du `Procfile` (`node server.js`).

### Étape 5 — Ouvrir le site en ligne
```bash
heroku open
```
Ou va directement sur `https://eskander-gharbi-portfolio.herokuapp.com` (avec le nom que tu as choisi).

### Mettre à jour le site plus tard
Après avoir modifié un fichier :
```bash
git add .
git commit -m "Mise à jour du contenu"
git push heroku main
```

### Voir les logs (utile en cas d'erreur)
```bash
heroku logs --tail
```

## 3. Personnalisation rapide

- **LinkedIn** : dans `index.html`, remplace l'URL du lien LinkedIn (actuellement un lien générique `linkedin.com/in/eskander-gharbi`) par ton URL exacte de profil.
- **Couleurs / polices** : tout est centralisé en haut de `style.css` dans le bloc `:root` (variables `--ink`, `--cyan`, `--amber`, etc.).
- **Contenu** (expériences, stack, texte) : directement dans `index.html`, sections bien commentées (`<!-- HERO -->`, `<!-- EXPERIENCE -->`, etc.).
- **Nom de domaine personnalisé** : Heroku permet d'ajouter un domaine perso via `heroku domains:add www.tondomaine.com` (nécessite un plan payant Eco ou supérieur, les plans Heroku ayant évolué — vérifie les tarifs actuels sur heroku.com avant de t'engager).
