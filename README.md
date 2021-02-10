# Docker Workshop

1. Clone this repository: `git clone https://github.com/DylanBulmer/Docker-Workshop.git`

2. Create a file `Dockerfile` in the root directroy of the repository. 

```Docker
# Base image with the appropriate tools.
FROM node:13

# Identify the code location in the image.
WORKDIR /usr/src/

# Install the dependencies.
COPY package*.json .
RUN npm ci

# Copy the code into the image.
COPY . .

# Add the environment variable(s).
ARG NODE_ENV="production"
ENV NODE_ENV $NODE_ENV

# Expose production port.
EXPOSE 80 

# Setup command to execute the image.
CMD npm start
```

3. Build the docker image: `docker build -t express-app .`

4. Run the docker image: `docker run -dp 80:80 express-app`