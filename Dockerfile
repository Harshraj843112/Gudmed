FROM node:21 AS build
WORKDIR /app

# Copy package.json  and package--lock.json for better caching
COPY package*.json ./

# Install dependencies using npm install (temporary workaround)
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app with increased memory allocation
RUN npm run build -- --max-old-space-size=4096

# Step 2: Serve the app using Node.js
FROM node:21

WORKDIR /app

# Install a lightweight static file server (serve)
RUN npm install -g serve
