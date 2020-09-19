from app import gameInstance

# ENV variables
from dotenv import load_dotenv

# Importing os 
import os 

# Loading the dotenv file
APP_ROOT = os.path.join(os.path.dirname(__file__))
dotenv_path = os.path.join(APP_ROOT, '.env')
load_dotenv(dotenv_path)

if __name__ == '__main__':
    gameInstance.run(
        host = os.environ.get('HOST'),
        port = os.environ.get('PORT')
    )