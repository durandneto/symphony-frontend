
self.addEventListener('fetch', e => {
  // Parse the URL
  const requestURL = new URL(e.request.url)

  // Handle Package request
  const regexPictures = RegExp('/search/')
  if (regexPictures.test(requestURL.pathname)) {
    e.respondWith(
      caches.match(e.request).then(r => {
        return r || fetch(e.request).then(response => {
          return caches.open(`symphony-package-request-cache`).then(cache => {
            cache.put(e.request, response.clone())
            return response
          })
        })
      })
    )
    return
  }

})
