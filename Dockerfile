
FROM ghcr.io/littlehorse-enterprises/alpine-nginx-nodejs/nginx-nodejs:main as runner
ENV NODE_ENV production

RUN apk add --no-cache uuidgen

RUN mkdir /app
WORKDIR /app
RUN mkdir .next



# Copy the entire .next folder
# COPY ./.next ./.next

# Copy the public folder if you have static assets there
COPY ./public ./public

# Copy package.json and install only production dependencies
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

COPY ./entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

ENTRYPOINT [ "./entrypoint.sh" ]