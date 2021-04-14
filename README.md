# Nest api server

* How to use 
```bash
$ docker run -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin -e MONGO_INITDB_DATABASE=nest --name mongo mongo:4.4.5
$ npm i
$ npm run start:dev
```
Access `http://localhost:3000/docs/#/` to see all endpoint
