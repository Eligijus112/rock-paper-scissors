# Base image
FROM python:3.7 

# Setting the working directory inside the container
WORKDIR /app 

# Copying everything to the working directory
COPY . . 

# Installing the dependencies
RUN pip install -r requirements.txt

# Running the command 
CMD ["gunicorn", "-c", "python:config.gunicorn", "wsgi:gameInstance"]