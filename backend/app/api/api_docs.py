# import package for api docs
from apispec import APISpec # for generate openapi standard swagger doc
from flask_apispec import FlaskApiSpec # bind apispec with flask
from apispec.ext.marshmallow import MarshmallowPlugin

from app.main import app
from app.core.config import settings


# update and add config for app
app.config.update(
    {
        "APISPEC_SPEC": APISpec(
            title=settings.PROJECT_NAME,
            version="1.0.0",
            openapi_version="2.0",
            plugins=[MarshmallowPlugin()],
      #      securityDefinitions=security_definitions,
        ),
        "APISPEC_SWAGGER_URL": f"{settings.API_V1_STR}/swagger/", # url access path for swagger docs
        "APISPEC_SWAGGER_UI_URL": "/swagger-ui/",  # Swagger UI url
    }
)

# Can use @docs.register to register the api to docs
docs = FlaskApiSpec(app)

