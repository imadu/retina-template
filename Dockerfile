# Use an official Node.js runtime based on Alpine Linux as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /usr/dist

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install --production

# Bundle app source
COPY . .

# Build TypeScript code
RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run your app using Node
CMD ["npm", "start"]
