 # Step 1: Build the React app
FROM node:20 AS build
WORKDIR /app

# Copy dependencies first (for caching)
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy source code and build
COPY . .
RUN npm run build

# Step 2: Serve the built files using Nginx
FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
