# import package for api docs
from apispec import APISpec # for generate openapi standard swagger doc
from flask_apispec import FlaskApiSpec # bind apispec with flask
from apispec.ext.marshmallow import MarshmallowPlugin

from app.main import app
from app.core.config import settings


# self defined authenticate method (not used)
security_definitions = {
    "bearer": {
        "type": "oauth2",
        "flow": "password",
        "tokenUrl": f"{settings.API_V1_STR}/login/access-token", # Url for access the token
    }
}


# update and add config for app
app.config.update(
    {
        "APISPEC_SPEC": APISpec(
            title=settings.PROJECT_NAME,
            version="v1",
            openapi_version="3.0.3",
            plugins=[MarshmallowPlugin()],
      #      securityDefinitions=security_definitions,
        ),
        "APISPEC_SWAGGER_URL": f"{settings.API_V1_STR}/swagger/", # url access path for swagger docs
        "APISPEC_SWAGGER_UI_URL": "/swagger-ui/",  # Swagger UI url
    }
)

# Can use @docs.register to register the api to docs
docs = FlaskApiSpec(app)

# API routing requires the use of the bearer type authentication method and without other authority limitation.
security_params = [{"bearer": []}]