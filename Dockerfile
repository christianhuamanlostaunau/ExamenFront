# Usa una imagen base con Node.js
FROM node:14-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de la aplicación al contenedor
COPY package.json .
COPY package-lock.json .
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila la aplicación React
RUN npm run build

# Expone el puerto 3000 para la aplicación React
EXPOSE 3000

# Comando para ejecutar la aplicación cuando se inicie el contenedor
CMD ["npm", "start"]