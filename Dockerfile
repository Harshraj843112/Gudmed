# ---------------------------
# Stage 1: Build the React App
# ---------------------------
FROM node:20 AS build
WORKDIR /app

# Copy only package files first to leverage Docker cache
COPY package*.json ./

# Install dependencies (using legacy peer deps if needed)
RUN npm install --legacy-peer-deps

# Copy the rest of the source code
COPY . .

# Build the React app (ensure your package.json has a build script)
RUN npm run build

# ---------------------------
# Stage 2: Serve with Nginx
# ---------------------------
FROM nginx:latest

# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from the build stage to Nginx's html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
