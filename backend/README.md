# Flask Project - Backend

## Flask-Migrate
By using flask-migrate to init the database, you may need set the env variable to tell flask where is your start python file:

(Windows)
```console
$ $env:FLASK_APP = "app.main"
```

Then go to the `/backend` and running the flask-migrate command:

```console
$ flask db init
```

This will craete the folder `/backend/migrations`, you can check and edit the migrate file in `/migrations/versions` for different version of database structure. 

To genereate the migrate file in `versions` based on sqlarchemy code, run command:

```console
$ flask db migrate -m "your description"
```

To apply or update the new migrate file to database, run command:

```console
$ flask db upgrade
```

## Adminer

To visualize the database, you can access adminer: (http://localhost:8080). In log page, you can enter the varialble based in `.env` file.