import os 

# ENV variables
from dotenv import load_dotenv

# Loading the dotenv file
APP_ROOT = os.path.join(os.path.dirname(__file__) + "/..")
dotenv_path = os.path.join(APP_ROOT, '.env')
load_dotenv(dotenv_path)

port = os.getenv('PORT')
host = os.getenv('HOST')

bind = f"{host}:{port}"