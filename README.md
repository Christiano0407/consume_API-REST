# consume_API-REST

Introduction and Consume an API REST. Communication in Frontend and Backend.

# Platzi

[Platzi](https://platzi.com/home)

## API REST

> API REST

![](https://i.ibb.co/MSW3V2W/dark-800-2200-px-1.png)

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

### API REST Tools

> Rapid API Hub

[Rapid_API](https://rapidapi.com/hub)

### Model Client & Server

> ExpressJs

[ExpressJs](https://expressjs.com/es/)

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
