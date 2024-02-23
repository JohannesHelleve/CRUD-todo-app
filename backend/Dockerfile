# Use the official Node.js 14 image as base
FROM node:20


# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

COPY tsconfig.json ./

# Install dependencies
RUN npm install

ENV NODE_ENV=production


# Copy the rest of the application code
COPY . .



# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD npm start
