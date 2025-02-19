# Step 1: Build the React app
FROM node:21 AS build
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Increase memory limit & clean cache before installing
RUN npm cache clean --force && NODE_OPTIONS="--max-old-space-size=4096" npm install --legacy-peer-deps

# Copy rest of the app
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve the app
FROM node:21
WORKDIR /app

# Install 'serve' to serve the built React app
RUN npm install -g serve

# Copy built files
COPY --from=build /app/build /app/build

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "build", "-l", "3000"]
