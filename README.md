# Coding with Johan

## Development Setup

### SSL certificates

SSL certificates can be created with [mkcert](https://github.com/FiloSottile/mkcert).

1. Follow the installation instructions on their GitHub repo (if this is not done yet)
1. Create a new local CA (if this is not done yet)
   ```shell
   mkcert -install
   ```
1. Create the folder to store the certificate and key
   ```shell
   cd <coding with johan root dir>
   mkdir ssl
   cd ssl
   ```
1. Generate the certificate and key
   ```shell
   mkcert localhost
   ```

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## SEO and social media display

The blog is optimized as much as possible for SEO purposes and display on social media.

The following links give more information on these topics:

- [Change your search apprearance (Google Search Central)](https://developers.google.com/search/docs/advanced/appearance/overview)
- [The Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [applinks.org](http://applinks.org/documentation/)
