//Caching URLs
let cacheName = 'restaurant-review-v1';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then (cache => {
    	console.log('it worked');
		return cache.addAll([
			'/',
			'js/main.js',
			'js/dbhelper.js',
			'js/restaurant_info.js',
			'js/register.js',
			'data/restaurants.json',
			'css/styles.css',
			'css/responsive.css',
			'img/1.jpg',
			'img/2.jpg',
			'img/3.jpg',
			'img/4.jpg',
			'img/5.jpg',
			'img/6.jpg',
			'img/7.jpg',
			'img/8.jpg',
			'img/9.jpg',
			'img/10.jpg',
			'https://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff',
			'https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOD8E0i7KZn-EPnyo3HZu7kw.woff'
		])
		.catch(error => {
			console.log(error);
		})
    })
  );
});

//Returning cached urls when offline
self.addEventListener('fetch', function(event) {
  event.respondWith(
	caches.match(event.request).then(function(response){
		if(response) return response;
		return fetch(event.request);
	})
	);
});

