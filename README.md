# consume_API-REST

Introduction and Consume an API REST. Communication in Frontend and Backend.

# Platzi

[Platzi](https://platzi.com/home)

## API ( Aplication Programming Interface )

> ¿ Qué es una API ?

API: Interfaz de Programación de aplicaciones. Permite que dos o más programas se comuniquen entre si.

Nos permite que un software ofrezca un servicio a otro software.

La "API", no son usadas directamente por el usuario sino por el programador que usa la "API", para implementar su programa.

Normalmente usamos el formato "JSON".

[MDN_API](https://developer.mozilla.org/es/docs/Mozilla/Add-ons/WebExtensions/API)

[MDN_Referencia_API_Web](https://developer.mozilla.org/es/docs/Web/API)

> API REST (Representation State Transfer)

Estilo de arquitectura de software para sistemas hepermedia distribuidos como la "World Wide Web".

> API RESTFul

RESTFul API: Es una "API", basada en "REST".

![](https://camo.githubusercontent.com/8c900222ad248e60af30b1b40594df08d9a10db89987b1037a8aac29112ab8e9/68747470733a2f2f7374617469632e706c61747a692e636f6d2f6d656469612f757365725f75706c6f61642f436170747572612d64333336616232652d386532642d343061342d383038612d6565336461316662646165662e6a7067)

> FETCH

La API Fetch proporciona una interfaz para recuperar recursos (incluso a través de la red).

[API_Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

> CRUD (Create, Read, Update, Delete)

(Crear, Leer, Actualizar, Eliminar) Operaciones básicas que se pueden realizar con la información almacenada.

> CRUD & HTTP

CRUD & HTTP (Method) => Create == POST, Read == GET, Update == PUT, Delete == DELETE.

> CRUD & API (Application Programming Interface)

API: Interfaz de Programación de aplicaciones. Permite que dos o más programas se comuniquen entre si.

Nos permite que un software ofrezca un servicio a otro software.

La "API", no son usadas directamente por el usuario sino por el programador que usa la "API", para implementar su programa.

Normalmente usamos el formato "JSON".

> Endpoints

Los endpoints son las URLs de un API o un backend que responden a una petición. Los mismos entrypoints tienen que calzar con un endpoint para existir. Algo debe responder para que se renderice un sitio con sentido para el visitante.

> Endpoints Params (Parámetros ":")

```javascript


app.get('/products', (req, res) => {
  res.json([
    {
      name: 'player soccer',
      price: 1750,
    },
    {
      name: 'Shoes soccer',
      price: 3500,
    },
  ]);
});

app.get('/categories/:categoriesId/products/:productsId', (req, res) => {
  const { categoriesId, productsId } = req.params;

  res.json({
    categoriesId,
    productsId,
  });
});


```

> Query Parameters (GET:parámetros query) => Filtrar ("?", "size", "limit", "ofset")

Los endpoints especificos deben declararsen antes de los endpoints dinamicos. Uno de los mandamientos.

```javascript

/*
"?", "size", "limit", "ofset"
*/

// api.example.com/products
// api.example.com/products?page=1
// api.example.com/products?limit=10&offset=0
// api.example.com/products?region=USA
// api.example.com/products?region=USA&brand=XYZ


```

```javascript

// === Query Params

app.get("/users", (req, res) => {
 const { limit, offset } = req.query;

 if(limit && offset) {
  res.json({
    limit,
    offset
  });
 } else {
  res.send("Sorry! Not exist params");
 }
});

```

> Todo lo que sea "específico", debe de ir antes de lo que es "dinámico".

```javascript

//app.get('/products/filter', (req, res) =>

//app.get('/products/:id', (req, res) => {};

```

## API REST Tools

> Rapid API Hub

[Rapid_API](https://rapidapi.com/hub)

> API Public GitHub

[API_GitHub_Public](https://github.com/public-apis/public-apis)

### Model Client & Server

> ExpressJs

[ExpressJs](https://expressjs.com/es/)

```javascript

const express = require(`express`);
const app = express();
const port = process.env.port || 3000;
//*? === Routing ===*/
app.get('/', (req, res) => {
  res.send('Hello World');
});
//*? === Listen Port ===*/
app.listen(port, () => {
  console.log(`Server is running in Port http://localhost:${port}...`);
});

```

> NPM

[npm](https://www.npmjs.com/)

> NodeJs

[NodeJs](https://nodejs.org/en/docs/)

> Nodemon

[Nodemon](https://nodemon.io/)

```javascript


// => Install Global
npm install -g nodemon

// => Install Development Dependency
npm install --save-dev nodemon

//nodemon ./server.js  ==> (localhost 8080 / 3000)


```

> Run Dev (Desarrollo)

```javascript

run server
npm run => "dev": "nodemon app.js",


```

Run Production

```javascript

run server
npm run =>  "start": "node app.js",


```

> Config Good Practice (Project ESlint & Prettier & Nodemon)

```

npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D

```

> GitIgnore

[gitignore_io](https://www.toptal.com/developers/gitignore/)

## Model Client & Server

> Model Client & Server

> ( HTTP,HTTPS,APi REST)

> HTTP & HTTPS ( Hypertext Transfer Protocol )

Protocolo de Transferencia de Hipertexto.

Modelo que usamos para acceder a Internet y obtener recursos e información.

> El protocolo HTTP, define el formato de los mensajes (request).

Un protocolo, es un conjunto de reglas que permiten transmitir información entre dispositivos de una red.

> Client (Cliente)

El Navegador desde el cual se realizan solicitudes a un servidor.

> Server (Servidor)

Programa que se ejecuta en un servidor físico para ofrecer un servicio al cliente. Envía información.

El servidor conoce el formato esperado del mensaje que envía el cliente. Además, el cliente, conoce el formato esperado del mensaje que recibe del servidor.

> Solicitud (Request) HTTP

- Métodos HTTP
- Caminos (Path)
- Versiones HTTP
- Cabeceras (Headers)
- Curpo (body)

> Headers (Cabeceras)

Proveen información adicional sobre la solicitud.

> Body (Cuerpo)

Contiene la información que debe ser enviada al servidor para procesar la solicitud. Formato JSON. No se incluye en todas las solicitudes (requieren enviar información como: POST y PUT).

> HTTPS (Hypertext Transfer Protocol (HTTP))

Le agrega una capa extra de seguridad.

> Método (Method) HTTP

Verbo ("verbos HTTP") o solicitud que indica la intención de la solicitud.

- GET (para Solicitar un recurso específico).
- POST (Para Crear un recurso específico. Agregar ususarios nuevos a una base de datos).
- PUT (Para Modificar un recurso específico. Hacer un cambio en una base de datos.)
- DELETE (Para Eliminar un recurso específico).

![](https://camo.githubusercontent.com/4ad9422890b3ac7843530ecd7822fc0acf48021bc7b0674f6db5f2b4a135de62/68747470733a2f2f7374617469632e706c61747a692e636f6d2f6d656469612f757365725f75706c6f61642f524553542d36356534323430662d363632622d343036652d393163392d3537643862306464353666342e6a7067)

> Respuesta (Response) HTTP / Código de Estado HTTP

[MDN_HTTP_State](https://developer.mozilla.org/es/docs/Web/HTTP/Status)

[HTTP_Cat](https://http.cat/)

- Código de estado (200, 404...etc).
- Texto de Estado.
- Texto de Estado.
- Cabeceras (Headers).
- Cuerpo (Body).

> Números que indican si se han completado exitosamente o no, las solicitudes HTTP.

- Respuestas informativas (100–199),
- Respuestas satisfactorias (200–299),
- Redirecciones (300–399),
- Errores de los clientes (400–499),
- Errores de los servidores (500–599).

> Estados Más comunes:

- 200 OK: La respuesta fue exitosa.
- 400 Bad Request: El servidor no pudo interpretar la solicitud.
- 404 Not Found: El mservidor no pudo encontrar el recurso solicitado.
- 500 Internal Server Error: El servidor encontró una situación que no sabe cómo manejar.

![](https://camo.githubusercontent.com/0294f63543e7574885567ce08f9cea150b0972e0dbfa682d5e0b07e2423b3e62/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f464452304f4d6d57514141486364573f666f726d61743d6a7067266e616d653d343039367834303936)

### AUTH & CORS

> AUTH (Autentication or Autenticación) & CORS (Intercambio de Recursos de Origen Cruzado)

[MDN_CORS](https://developer.mozilla.org/es/docs/Web/HTTP/CORS)

[AUTH_Docs](https://auth0.com/docs#introduction)

#### API REST

> Image Create for: Juan Espinola in Course With Platzi

![](https://i.ibb.co/MSW3V2W/dark-800-2200-px-1.png)

> Endpoints and Query Parameters

![](https://i.imgur.com/gAYHTI0.png)

> API Keys

![](https://i.imgur.com/Zo66y0B.png)

### Headers API REST

> Header Content-Type

[Common MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)

> FormData

[FormData](https://developer.mozilla.org/es/docs/Web/API/FormData)

[FormData-Fetch](https://muffinman.io/blog/uploading-files-using-fetch-multipart-form-data/)

#### AXIOS (Librerías para consumir APIs)

> Cliente HTTP basado en Promesas para el navegador y node.js

[AXIOS](https://axios-http.com/es/)

```javascript
// NPM 
npm install axios

// CDN JS
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

```

```javascript
// Axios Config
axios(config)

// Enviar una petición POST
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});

// Petición GET para una imagen remota en node.js
const api = axios.create({
  method: 'get',
  api_url: 'http://bit.ly/2mTM3nY',
  responseType: 'stream'
});
api.default.headers.common[`X-API-KEY`] = API_KEY;

  .then(function (response) {
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  });

// Enviar petición GET (método por defecto)
axios('/user/12345');

//
async function save() {
  const response = await api.post(`/endpoint`, {
   image_id: id;
  });
}
save(); 

// ==> Ya no es necesario poner res.json(); >> Ya lo trae.
// ==> Ya trae data e status >> Ya no es necesario poner  (res.status === 200)

```

#### CORS, caché, redirect y tu propio clon de

> Mode

- CORS
- NO-CORS
- same-origin

> Caché

- Default
- no-store
- reload
- no-cache
- force-cache
- only-if-cached

> Redirect

- Follow
- error
- manual

> Request.cache

[Request.cache](https://developer.mozilla.org/en-US/docs/Web/API/Request/cache)

> Fetch()-Web APIs

[Fetch()-Web APIs](https://developer.mozilla.org/en-US/docs/Web/API/fetch)

> Request-Web APIs

[Request-Web APIs](https://developer.mozilla.org/en-US/docs/Web/API/Request)

> HTTP caching

[HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#freshness)

> Headers-Web APIs

[Headers-Web APIs](https://developer.mozilla.org/en-US/docs/Web/API/Headers)

> HTTP caching

[HTTP caching](https://developer.mozilla.org/es/docs/Web/HTTP/Caching#actualizaci%C3%B3n)

> Response-Web APIs

[Response-Web APIs](https://developer.mozilla.org/en-US/docs/Web/API/Response)

#### GraphQL, Web Sockets y Web 3.0: el mundo más allá de REST

> Qué es GraphQL

[Qué es GraphQL](https://platzi.com/blog/introduccion-a-graphql/)

> ¿REST o GraphQL?, he ahí el dilema

[¿REST o GraphQL](https://platzi.com/blog/rest-o-graphql/)

> WebSockets en NodeJS

[WebSockets en NodeJS](https://platzi.com/blog/websockets-en-nodejs/)

> El rey ha muerto, larga vida a GraphQL

[El rey ha muerto, larga vida a GraphQL](https://platzi.com/blog/el-rey-ha-muerto-larga-vida-a-graphql/)

> Web 3.0: ¿por qué está transformando internet?

[Web 3.0: ¿por qué está transformando internet?](https://platzi.com/blog/web3/)
