FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

RUN npm start

CMD ['echo', 'APP START !']
