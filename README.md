# Digitale Identiteit - IRMA Demo site

This project provides the source code of the Amsterdam IRMA demo website.
It consists of a React frontend and NodeJS backend which is in charge of communicating with an IRMA server. 
This project does not provide a locally running IRMA server.

- PROD: [https://id.amsterdam.nl](https://id.amsterdam.nl)
- ACC: [https://acc.id.amsterdam.nl](https://acc.id.amsterdam.nl)

## Configure

Make sure to configure the backend properly. By default it is configured to connect to the Amsterdam IRMA server on the Acceptance environment. To be able to connect locally you will need to obtain the PRIVATE key.

Open ```/server/config/config.json```.

```javascript
{
    /* The requestor defined in the configuration of the IRMA server */
    "requestorname": "irma-demo",

    /* URL of the IRMA server */
    "irma": "https://attr.auth.amsterdam.nl",

    /* Port number the Node server listens to */
    "port": 8000,

    /* Document root of frontend to serve, only for demo */
    "docroot": "../client",
}
```
## Run with docker-copmose

```shell
docker-compose up
```

