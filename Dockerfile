# Use official Node.js image (Debian Trixie based)
FROM node:trixie

# Set working directory
WORKDIR /node

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm run test

# Copy remaining app files
COPY . .

# Expose app port (change if needed)
EXPOSE 5000

# Start the app
CMD ["node", "app.js"]
