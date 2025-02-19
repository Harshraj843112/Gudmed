# Use latest stable Node.js version
FROM node:20 

# Set working directory
WORKDIR /app/

# Copy package.json first to cache dependencies
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy remaining files
COPY . . 

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
