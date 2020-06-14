FROM node
WORKDIR C:/Users/Acer/Desktop/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "start"]