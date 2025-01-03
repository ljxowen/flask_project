# Flask Project - Backend

## Backend development

### Docker Compose
Start the local stack with Docker Compose, go to `\backend` run:

```console
docker compose up -d
```

this will create and start the Docker compose file based on `docker-compose.yml`.

Other useful command, like Start, Stop, Delete, Logs the Dcoker Compose:

```console
docker compose start
```

```console
docker compose stop
```

```console
docker compose down
```

```console
docker compose Logs
```


### Flask-Migrate
By using flask-migrate to init the database, you may need set the env variable to tell flask where is your start python file:

(Windows)
```console
$env:FLASK_APP = "app.main"
```

(Mac)
```console
export FLASK_APP=app.main
```

Then go to the `/backend` and running the flask-migrate command:

```console
flask db init
```

This will create the folder `/backend/migrations`, you can check and edit the migrate file in `/migrations/versions` for different version of database structure. 

To genereate the migrate file in `versions` based on sqlarchemy code, run command:

```console
flask db migrate -m "your description"
```

To apply or update the new migrate file to database, run command:

```console
flask db upgrade
```

### Adminer

To visualize the database, you can access adminer: (http://localhost:8080). In log page, you can enter the varialble based in `.env` file.


### Docs

Swagger-UI Docs : (http://127.0.0.1:5001/swagger-ui/)

OpenApi Json: (http://127.0.0.1:5001/api/swagger/)