# Flask libraries
from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

# File paths
import os

# ENV variables
from dotenv import load_dotenv

# Loading the env variables 
APP_ROOT = os.path.join(os.path.dirname(__file__), '..')
dotenv_path = os.path.join(APP_ROOT, '.env')
load_dotenv(dotenv_path)

# Initiating the application
gameInstance = Flask(__name__)
gameInstance.config.from_object(f'config.config.{os.getenv("CONF")}')
db = SQLAlchemy(gameInstance)

# Enabling CORS
CORS(gameInstance)

# Enabling migrations
migrate = Migrate(gameInstance, db)

# Importing views
import app.views

# Importing models 
from .models import Results