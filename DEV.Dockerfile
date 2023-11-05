# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm ci

# Expose the port your Vite development server will run on
EXPOSE 3000

# Start the Vite development server
CMD ["npm", "run", "dev"]
