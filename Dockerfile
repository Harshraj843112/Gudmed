# Step 1: Build the React app
FROM node:21-alpine AS build
WORKDIR /app

# Copy package.json and package-lock.json for caching
COPY package*.json ./

# Set registry (optional) and install all dependencies with an increased network timeout
RUN npm config set registry https://registry.npmjs.org/ \
    && npm install --network-timeout=600000 \
    && npm cache clean --force

# Copy the rest of the application files
COPY . .

# Build the React app with increased memory allocation
RUN npm run build -- --max-old-space-size=4096

# Step 2: Serve the app using Nginx
FROM nginx:alpine
WORKDIR /app

# Copy the built files from the previous stage into Nginx’s html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (Nginx default)
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
