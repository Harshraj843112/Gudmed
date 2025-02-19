#  Step 1: Build t he React app  
FROM node:21 AS build
WORKDIR /app

# Copy package.json and package--lock.json for better caching
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

# Copy the built files from the previous stage
COPY --from=build /app/build /app/build

# Expose port 3000
EXPOSE 3000

# Start the app using "serve"
CMD ["serve", "-s", "build", "-l", "3000"]
