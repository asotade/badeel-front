# Use Node.js 18 as the base image to build the app
FROM node:18-alpine as builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the Vite project files to the container
COPY . .

# Build the Vite project for production
RUN npm run build

# Stage 2: Use Nginx to serve the production build
FROM nginx:latest

# Copy the built Vite app from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 (Nginx's default port)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
