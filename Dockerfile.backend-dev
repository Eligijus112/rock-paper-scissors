# Base image
FROM python:3.7 

# Setting the working directory inside the container
WORKDIR /app 

# Copying everything to the working directory
COPY ./backend-python . 

# Installing the dependencies
RUN pip install -r requirements.txt

# Overriding the default command
CMD ["python", "app.py"]