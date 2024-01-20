FROM node:lts
WORKDIR /app
RUN npm install -g @angular/cli
EXPOSE 4200
CMD ["npm", "start"]
# CMD ["ng", "serve", "--host", "0.0.0.0"]
