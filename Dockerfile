FROM node:17 AS build

WORKDIR /app

RUN npm install -g @angular/cli@13.2.3
RUN npm install -g @ionic/cli@6.0.0

RUN rm -rf node_modules
RUN rm -rf www

COPY package*.json ./

RUN npm install --force

COPY . .
RUN ionic build --prod


# ==============================
# FINAL IMAGE 
# ==============================
FROM node:17 AS final

# Create non-root user
RUN useradd -m appuser

WORKDIR /usr/src/app

# Copy build output with ownership
COPY --from=build --chown=appuser:appuser /app/www ./www

# Install serve globally (must be root)
RUN npm install -g serve

# Ensure appuser owns the folder
RUN chown -R appuser:appuser /usr/src/app

# Switch to non-root user
USER appuser

EXPOSE 7601

CMD ["serve", "-s", "www", "-p", "7601"]
