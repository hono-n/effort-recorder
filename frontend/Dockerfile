FROM node:18.16.1

RUN mkdir /react_app
WORKDIR /react_app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

# コンテナが勝手に終了してしまわないようにする設定
ENV CI=true