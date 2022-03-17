# Base on offical Node.js Alpine image
FROM node:14 as build-stage

# Set working directory
WORKDIR /app

# Install PM2 globally
#RUN npm install --global pm2

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

# Install dependencies
RUN npm install --force
#RUN npm install --production

# Copy all files
COPY ./ ./

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 3000 80

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

FROM nginx:stable-alpine as production-stage
COPY  ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/.next /usr/share/nginx/html

# Run npm start script with PM2 when container starts
CMD [ "-g", "daemon off;", "nginx", "npm", "--", "start" ]
