# ============================
# 🌟 Stage 1: Build React App
# ============================
FROM node:20-alpine AS build
WORKDIR /app

# Optimize caching by copying only package files first
COPY package.json package-lock.json ./

# Set memory limits to prevent crashes
ENV NODE_OPTIONS="--max-old-space-size=512"

# Install dependencies (faster, no audit, offline mode)
RUN npm ci --prefer-offline --no-audit

# Copy the rest of the project files
COPY . .

# Build React app (disable CI warnings for AWS Free Tier)
RUN CI=false npm run build

# ============================
# 🌟 Stage 2: Final Image (Nginx)
# ============================
FROM nginx:alpine

# Remove default Nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy built React app from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
