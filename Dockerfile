# Step 1: Use an official Node.js v20.18.2 image as the base image
FROM node:20.18.2 as build

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy the package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Step 4: Copy the entire source code to the container
COPY . .

# Step 5: Build the React app (or your front-end)
RUN npm run build

# Step 6: Serve the app using a lightweight web server (e.g., Nginx)
FROM nginx:alpine

# Step 7: Copy the build files from the previous stage to the Nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Step 8: Expose the port that Nginx is running on
EXPOSE 80

# Step 9: Start Nginx
CMD ["nginx", "-g", "daemon off;"]
