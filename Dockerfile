# -------------------------
# Stage 1: Build the React App
# ---------------------------
FROM node:20 AS build
WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the project files
COPY . .

# Build the React app
RUN npm run build

# -------------------------
# Stage 2: Serve the App with Nginx
# -------------------------
FROM nginx:alpine

# Remove default Nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy built React app from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
