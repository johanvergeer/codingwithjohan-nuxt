import path from 'path'
import fs from 'fs'
import {
  setDefaultAuthor,
  setReadingTime,
  warnWhenDescriptionOver200Chars,
  warnWhenMissingDescription,
} from './utils/hooks'
import quantcast from './utils/quantcast'

const headingAnchor = {
  type: 'element',
  tagName: 'svg',
  properties: {
    className: ['octicon', 'octicon-link'],
    viewBox: '0 0 16 16',
    version: '1.1',
    width: 16,
    height: 16,
    ariaHidden: true,
  },
  children: [
    {
      type: 'element',
      tagName: 'path',
      properties: {
        fillRule: 'evenodd',
        d: 'M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z',
      },
    },
  ],
}

const createSitemapRoutes = async () => {
  const { $content } = require('@nuxt/content')

  const posts = await $content('blog').fetch()
  const routes = []

  for (const post of posts) {
    routes.push(`blog/${post.slug}`)
  }

  return routes
}

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  ssr: true,

  server:
    process.env.NODE_ENV !== 'production'
      ? {
          // SSL Certificate and key for local development
          // See README.md on how to create the certificate and key
          https: {
            key: fs.readFileSync(
              path.resolve(__dirname, 'ssl', 'localhost-key.pem')
            ),
            cert: fs.readFileSync(
              path.resolve(__dirname, 'ssl', 'localhost.pem')
            ),
          },
        }
      : {},

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Coding with Johan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Coding with Johan',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    script: [quantcast],
    __dangerouslyDisableSanitizers: ['script'],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/github-markdown.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/formatDate.ts'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: {
    dirs: [
      '~/components',
      '~/components/header',
      '~/components/footer',
      '~/components/blog',
      '~/components/molecules',
    ],
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],

  // Hooks https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-hooks
  // For Nuxt Content: https://content.nuxtjs.org/advanced#hooks
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        setDefaultAuthor(document)
        setReadingTime(document)
        warnWhenDescriptionOver200Chars(document)
        warnWhenMissingDescription(document)
      }
    },
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      remarkPlugins: [
        'remark-squeeze-paragraphs',
        'remark-slug',
        [
          'remark-autolink-headings',
          {
            behavior: 'prepend',
            linkProperties: {
              className: ['anchor'],
            },
            content: headingAnchor,
          },
        ],
        'remark-external-links',
        'remark-footnotes',
      ],
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },

  sitemap: {
    hostname: process.env.URL ? process.env.URL : 'http://localhost:3000',
    gzip: true,
    routes: createSitemapRoutes,
    exclude: ['/404'],
  },

  env: {
    CONTEXT: process.env.CONTEXT || 'development',
    DEPLOY_PRIME_URL: process.env.DEPLOY_PRIME_URL || false,
    URL: process.env.URL || false,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
