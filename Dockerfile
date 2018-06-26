FROM node


WORKDIR /usr/src/app

# If we have any dependency
#COPY package.json .
#else Copy everything to working Directory
COPY . .

# Install app dependencies
# RUN npm install

EXPOSE 8000

# Run when docker is started
CMD ["node" , "store.js list"]