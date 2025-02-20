# Base image (Lightweight)
FROM node:20-alpine AS build
WORKDIR /app

# Copy only necessary files first (Leverage Docker Cache)
COPY package*.json ./

# Install dependencies (Use `npm ci` for faster install)
RUN npm ci --prefer-offline --no-audit

# Copy the rest of the project files
COPY . .

# Build the React app
RUN npm run build

# Serve with Nginx (Optimized for AWS Free Tier)
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
