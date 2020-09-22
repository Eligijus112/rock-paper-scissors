# Getting the node image 
FROM node:alpine as builder

# set working directory
WORKDIR /app

# install app dependencies
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install 

# add app
COPY . .

# Building the production version
RUN npm run build 

# Getting the nginx image
FROM nginx 

# Copying everything from the previous step 
COPY --from=builder /app/build/ /usr/share/nginx/html
