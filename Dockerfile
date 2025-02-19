# Step 1: Build the React app
FROM node:21-alpine AS build
WORKDIR /app

# Copy package.json and package-lock.json for caching
COPY package*.json ./

# Install dependencies with clean cache to reduce image size
RUN npm install --production && npm cache clean --force

# Copy the rest of the application files
COPY . .

# Build the React app with increased memory allocation
RUN npm run build -- --max-old-space-size=4096

# Step 2: Serve the app using a lightweight server
FROM nginx:alpine
WORKDIR /app

# Copy the built files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the container
EXPOSE 80

# Start the app using Nginx
CMD ["nginx", "-g", "daemon off;"]
