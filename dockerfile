# Utilisez une image Node.js comme base pour la phase de build
FROM node:20 as build

WORKDIR /app

# Copiez les fichiers package.json et package-lock.json
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers du projet
COPY . .

# Construisez l'application Angular pour la production
RUN npm run build --prod

# Utilisez une image Nginx comme base pour la phase finale
FROM nginx:alpine

# Créez le répertoire de log
RUN mkdir -p /var/log/nginx

# Définissez les permissions pour le répertoire de log
RUN chown -R nginx:nginx /var/log/nginx

COPY mime.types /etc/nginx/mime.types
COPY proxy.conf /etc/nginx/proxy.conf

# Copiez les fichiers de build de votre projet Angular dans le répertoire html de Nginx
COPY --from=build /app/dist/presence/browser /usr/share/nginx/html

# Copiez la configuration Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Exposez le port 80
EXPOSE 8082

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
