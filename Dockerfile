# Use an official Node.js runtime as the base image
FROM node:16.16.0

# Set the working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the Vue.js application (modify the command as needed)
RUN npm run build

# Expose the port on which the Vue.js app will run (adjust as needed)
EXPOSE 8080

# Define the command to start the Vue.js app (modify the command as needed)
CMD [ "npm", "run", "serve" ]
