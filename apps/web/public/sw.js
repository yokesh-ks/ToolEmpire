if (!self.define) {
  let e,
    s = {}
  const t = (t, a) => (
    (t = new URL(t + '.js', a).href),
    s[t] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = t), (e.onload = s), document.head.appendChild(e)
        } else (e = t), importScripts(t), s()
      }).then(() => {
        let e = s[t]
        if (!e) throw new Error(`Module ${t} didn’t register its module`)
        return e
      })
  )
  self.define = (a, n) => {
    const i =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[i]) return
    let r = {}
    const c = (e) => t(e, i),
      o = { module: { uri: i }, exports: r, require: c }
    s[i] = Promise.all(a.map((e) => o[e] || c(e))).then((e) => (n(...e), r))
  }
}
define(['./workbox-50de5c5d'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/app-build-manifest.json',
          revision: '434af078512000203212119bf342c673',
        },
        {
          url: '/_next/static/JRrkFrwq03DOEdaTVnALN/_buildManifest.js',
          revision: '33683e4c1646f585bf0d9311b0b0301e',
        },
        {
          url: '/_next/static/JRrkFrwq03DOEdaTVnALN/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/45995eb6.92672b3a0960d4f8.js',
          revision: '92672b3a0960d4f8',
        },
        {
          url: '/_next/static/chunks/494-d5c72d118d81daad.js',
          revision: 'JRrkFrwq03DOEdaTVnALN',
        },
        {
          url: '/_next/static/chunks/522-730b6b0a78463c53.js',
          revision: 'JRrkFrwq03DOEdaTVnALN',
        },
        {
          url: '/_next/static/chunks/612-51698f565989cd72.js',
          revision: 'JRrkFrwq03DOEdaTVnALN',
        },
        {
          url: '/_next/static/chunks/80788eae-29a1932c2c1c53b2.js',
          revision: 'JRrkFrwq03DOEdaTVnALN',
        },
        {
          url: '/_next/static/chunks/97-55e9f3a9a7a13683.js',
          revision: 'JRrkFrwq03DOEdaTVnALN',
        },
        {
          url: '/_next/static/chunks/fd9d1056-96749284ca17ebf5.js',
          revision: 'JRrkFrwq03DOEdaTVnALN',
        },
        {
          url: '/_next/static/chunks/framework-c4cd31af00a4e516.js',
          revision: 'JRrkFrwq03DOEdaTVnALN',
        },
        {
          url: '/_next/static/chunks/main-44191c813d6a92db.js',
          revision: 'JRrkFrwq03DOEdaTVnALN',
        },
        {
          url: '/_next/static/chunks/main-app-f5c948ee9afe2c2d.js',
          revision: 'JRrkFrwq03DOEdaTVnALN',
        },
        {
          url: '/_next/static/chunks/pages/404-2ffa55f4ff7b1d63.js',
          revision: 'JRrkFrwq03DOEdaTVnALN',
        },
        {
          url: '/_next/static/chunks/pages/_app-08563ec6098143aa.js',
          revision: 'JRrkFrwq03DOEdaTVnALN',
        },
        {
          url: '/_next/static/chunks/pages/_error-b233bc0ad79e7591.js',
          revision: 'JRrkFrwq03DOEdaTVnALN',
        },
        {
          url: '/_next/static/chunks/pages/code-glow-0d7d2933f95b0aaf.js',
          revision: 'JRrkFrwq03DOEdaTVnALN',
        },
        {
          url: '/_next/static/chunks/pages/color-magic-63420886ce5bbf75.js',
          revision: 'JRrkFrwq03DOEdaTVnALN',
        },
        {
          url: '/_next/static/chunks/pages/contact-64d68a09722e9cc7.js',
          revision: 'JRrkFrwq03DOEdaTVnALN',
        },
        {
          url: '/_next/static/chunks/pages/font-wise-bedbcc5c898124de.js',
          revision: 'JRrkFrwq03DOEdaTVnALN',
        },
        {
          url: '/_next/static/chunks/pages/index-79db98594be377a4.js',
          revision: 'JRrkFrwq03DOEdaTVnALN',
        },
        {
          url: '/_next/static/chunks/pages/pdf-to-word-7fc6fe07c3b4f55e.js',
          revision: 'JRrkFrwq03DOEdaTVnALN',
        },
        {
          url: '/_next/static/chunks/pages/readme-editor-334ffec23789a7c9.js',
          revision: 'JRrkFrwq03DOEdaTVnALN',
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0',
        },
        {
          url: '/_next/static/chunks/webpack-b54cac59f7bedf54.js',
          revision: 'JRrkFrwq03DOEdaTVnALN',
        },
        {
          url: '/_next/static/css/b437ff780e1806bb.css',
          revision: 'b437ff780e1806bb',
        },
        {
          url: '/_next/static/media/05a31a2ca4975f99-s.woff2',
          revision: 'f1b44860c66554b91f3b1c81556f73ca',
        },
        {
          url: '/_next/static/media/513657b02c5c193f-s.woff2',
          revision: 'c4eb7f37bc4206c901ab08601f21f0f2',
        },
        {
          url: '/_next/static/media/51ed15f9841b9f9d-s.woff2',
          revision: 'bb9d99fb9bbc695be80777ca2c1c2bee',
        },
        {
          url: '/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2',
          revision: '74c3556b9dad12fb76f84af53ba69410',
        },
        {
          url: '/_next/static/media/d6b16ce4a6175f26-s.woff2',
          revision: 'dd930bafc6297347be3213f22cc53d3e',
        },
        {
          url: '/_next/static/media/ec159349637c90ad-s.woff2',
          revision: '0e89df9522084290e01e4127495fae99',
        },
        {
          url: '/_next/static/media/fd4db3eb5472fc27-s.woff2',
          revision: '71f3fcaf22131c3368d9ec28ef839831',
        },
        { url: '/color.png', revision: '91c932da813ebfce809221fd90262b31' },
        {
          url: '/construction.png',
          revision: '3cae21e0bd00181f432059b8c4ab67f9',
        },
        { url: '/favicon.png', revision: '451ff94bc2a62831123c82bdcf8303b1' },
        { url: '/fontimage.png', revision: '5089f64459227a1b38ffe6cf81705c35' },
        {
          url: '/fonts/Montserrat-Black.ttf',
          revision: '9c1278c56276b018109f295c1a751a69',
        },
        {
          url: '/fonts/Montserrat-BlackItalic.ttf',
          revision: 'a943ff860cf7bda5ce3722cad5c1dc06',
        },
        {
          url: '/fonts/Montserrat-Bold.ttf',
          revision: '1f023b349af1d79a72740f4cc881a310',
        },
        {
          url: '/fonts/Montserrat-BoldItalic.ttf',
          revision: '9d216a715551da3b92a4a9b0e8994868',
        },
        {
          url: '/fonts/Montserrat-ExtraBold.ttf',
          revision: 'bd8fb30c6473177cfb9a5544c9ad8fdb',
        },
        {
          url: '/fonts/Montserrat-ExtraBoldItalic.ttf',
          revision: 'e07b3f35e3e0073b2cde4c5a951cc24e',
        },
        {
          url: '/fonts/Montserrat-ExtraLight.ttf',
          revision: 'fca7947b08333e5ffcb80c069755b5c9',
        },
        {
          url: '/fonts/Montserrat-ExtraLightItalic.ttf',
          revision: 'e4d0c1f4d67a7f3d23a1f2f78d24ea57',
        },
        {
          url: '/fonts/Montserrat-Italic.ttf',
          revision: '761177c558bb3a0084aa85704315b990',
        },
        {
          url: '/fonts/Montserrat-Light.ttf',
          revision: 'e65ae7ed560da1a63db603bd8584cfdb',
        },
        {
          url: '/fonts/Montserrat-LightItalic.ttf',
          revision: 'e70e5d8d5129f35418fe2cfaa6132c1d',
        },
        {
          url: '/fonts/Montserrat-Medium.ttf',
          revision: 'b3ba703c591edd4aad57f8f4561a287b',
        },
        {
          url: '/fonts/Montserrat-MediumItalic.ttf',
          revision: '2e7c02a0a4a5fd318b0625d120ad2033',
        },
        {
          url: '/fonts/Montserrat-Regular.ttf',
          revision: '3fe868a1a9930b59d94d2c1d79461e3c',
        },
        {
          url: '/fonts/Montserrat-SemiBold.ttf',
          revision: 'fb428a00b04d4e93deb4d7180814848b',
        },
        {
          url: '/fonts/Montserrat-SemiBoldItalic.ttf',
          revision: 'd41c0a341637c2e35ae019730b2d45a5',
        },
        {
          url: '/fonts/Montserrat-Thin.ttf',
          revision: '4b73d125bab54f94ed2510590c237f73',
        },
        {
          url: '/fonts/Montserrat-ThinItalic.ttf',
          revision: '59cdce8fbd384a39ab0fd14b9f693de5',
        },
        { url: '/logo/192.png', revision: '280fb023a0fcc4230350033eab8293ca' },
        { url: '/logo/256.png', revision: '8d7ba7476b7e5b3b8c78e54a0c90e37b' },
        { url: '/logo/512.png', revision: '8ee388242881cac47153eb70daf40bf0' },
        { url: '/logo1.png', revision: '9ab01760b08e2bfbd67821e69588fe2f' },
        { url: '/logo2.png', revision: 'bfcf05a1cbc3b0009ba4b28143663f5f' },
        { url: '/manifest.json', revision: 'bdb204d3fec535b464720a20501f6eed' },
        { url: '/preview.png', revision: '148fd02fff093a47c8c17d54bc67924a' },
        { url: '/robots.txt', revision: '439beafdb757536f666c2bad02ed1ada' },
        {
          url: '/screenshot.png',
          revision: '6b4117aa2d67a9b8e048291fbc84d3d5',
        },
        { url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: t,
              state: a,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET',
    )
})
