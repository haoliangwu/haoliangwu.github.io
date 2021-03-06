/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2016/06/20/开始/index.html","6b8a44dfe680eba48c4a75978d4c0274"],["/2016/07/15/liferay-smile-face/index.html","52cd56617e2ff708caa70a5d1658666d"],["/2016/07/19/liferay-forward-proxy/index.html","abc3640f04bb573ecc327cd2ae77d416"],["/2016/07/22/liferay-progress-bar/index.html","ea151c3ef1a2429dd919e14f44a61fa0"],["/2016/07/26/liferay-portlet-container/index.html","8d857ba4e1362c96ea51a7492bdccd25"],["/2016/08/10/HTML-is-about-meaning/index.html","fed808287ff0a85f7765d929e020b501"],["/2016/08/22/interview-record-20160822/index.html","59528b7d800a3fd2e7c21a0423c15139"],["/2016/09/21/vscode-typings配置/index.html","7775e318d9f1a1c2d1f64a4d725d06bc"],["/2016/09/26/我为什么离开了Liferay/index.html","9d5972fd00a86f6a63810d811962dc52"],["/2016/10/14/当开发一周了/index.html","e41ff26164e40057626025babb745d4e"],["/2016/11/28/async-for-js/index.html","130394e0092572237c9e824116d5379c"],["/2017/02/07/codereview-s8/index.html","57c2ab718a091faa3dfbd6ebae9fc26d"],["/2017/04/24/es6中的混合器模式/index.html","13588d51f7bc91c6177ecdebdd7b8f7f"],["/2017/05/31/在-redux-中集成-angular-di-机制/index.html","fe2ccadc8d257496d5d82011468ac2a6"],["/2017/07/21/ng2-关于NgModule的简易归纳/index.html","89ec20f7eb8f0f5e4ebdc0bb82a19663"],["/2017/12/18/多维数组取值问题/index.html","6d6b443ec74d605c5fa6eacfcaec58a1"],["/2018/01/10/aacp-1/index.html","2c6a2cdbb6c0af09822cdbfad17a8933"],["/2018/01/10/aacp-2/index.html","9e699922d62c028a5efd96f2892c9e24"],["/2018/01/10/aacp-3a/index.html","a1aa014f3291ccb9f990b2ebe5be9c99"],["/2018/01/10/aacp-3b/index.html","a87d8e3e2448e87f16a1eca8ed3b9ea9"],["/2018/01/16/workerize/index.html","6dfff261b88abb25a60091b3a7c0b312"],["/2018/01/22/SOLID-d/index.html","40bc708bf044b06e7d35493a5e9984d4"],["/2018/02/02/SOLID-s/index.html","2be15e9c5576a2eb6ab41f95afd076d8"],["/2018/02/04/SOLID-o/index.html","dfa2f04a644b65697248d0b52a66ac36"],["/2018/02/08/SOLID-i/index.html","e5b896099dd3aeab4b78bea7a83a1b9a"],["/2018/02/08/SOLID-l/index.html","be2d3007119d326d4804547540b96ff1"],["/2018/02/08/javascript原型链review/index.html","cd75b5b97aa609a9f27e1b124eba3393"],["/2018/02/17/aacp-4/index.html","dadd70145aecc2952b0da9fc0bc0aa56"],["/2018/02/17/aacp-5/index.html","18bbf6bdf85e9f0d0dab55e9523a1f05"],["/2018/03/24/rpc-reset-graphql/index.html","2063ab68ae4ce2915d33249d53014d15"],["/2018/04/02/30-minutes-graphql/index.html","50407013e97178697a0773dd479a5d57"],["/2018/04/27/angular-services-do-not-have-to-be-singletons/index.html","13b7002a4f94871e3e0a94e711fff551"],["/2018/05/30/aacp-6/index.html","479d71607cf622f24f485099721e71d4"],["/archives/2016/06/index.html","31432580bab170540262cd364ba0536a"],["/archives/2016/07/index.html","6dec0b275abb7f07769e2c630d40a23b"],["/archives/2016/08/index.html","dc6c8100b2f952395c0df9f0e72cd482"],["/archives/2016/09/index.html","94465ee3fd4f7f60c1166e61dfa1c6f4"],["/archives/2016/10/index.html","7d8133595544739673d94ffa6a5c2fa4"],["/archives/2016/11/index.html","e2895882985f960b325ce0959dfb8c0a"],["/archives/2016/index.html","02ce0b74c8b17fca35e930f82c7725fd"],["/archives/2016/page/2/index.html","d01c242367bd20592d09d4b4f906b8de"],["/archives/2017/02/index.html","2c642cfa123d400576ed088def6f1ca4"],["/archives/2017/04/index.html","d6a66bec75fa0ce16e7b8c23d75e0aa1"],["/archives/2017/05/index.html","6b92343f5b36593ac249739202516bd9"],["/archives/2017/07/index.html","efa867eb3f52145c1d5919f4392628f9"],["/archives/2017/12/index.html","2ac16ff0cca83414ebbb5e6c17b04beb"],["/archives/2017/index.html","352bc0eaa7ae2dc8e45e3928031b69e8"],["/archives/2018/01/index.html","755b33eb4155385c472ff9684500e43b"],["/archives/2018/02/index.html","f7f6829f41a35d73a5765f65f23e9517"],["/archives/2018/03/index.html","286da2bece3449bbbca033cc986f2abe"],["/archives/2018/04/index.html","4dcc5e6427cc3192e0e644c6e78db0f8"],["/archives/2018/05/index.html","30bb5018f112d82a8a46e6249ffd9ae8"],["/archives/2018/index.html","a91ae19150e2d5bda36fcd776039522b"],["/archives/2018/page/2/index.html","58462233d61424bac858af47bb3e4665"],["/archives/index.html","51da854facd8da0fcfed8585e7486a68"],["/archives/page/2/index.html","f4a106a331202206736084691726d09c"],["/archives/page/3/index.html","8fefbc284a8e3f39c1886a3e11527249"],["/archives/page/4/index.html","d12d365f463e44d09f6774cb01171834"],["/categories/原创/index.html","1063d200d37bcd738b4e842f72bffe0a"],["/categories/心情/index.html","54787334b5b8f25eb550b6ab00227d98"],["/categories/源码分析/index.html","28c6f60971b6c703bad6f2daaf9c60f1"],["/categories/翻译/index.html","3e28a163f67d30a9ef870a9439b1d38e"],["/categories/翻译/page/2/index.html","b2c5e23169fb795edea6d4481e5655e1"],["/css/base/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["/css/base/normalize.css","849bd17d56ee28b33f218d3f51ce373c"],["/css/base/reset.css","43b09c33c051a39cd12401cbc548f894"],["/css/components/archive.css","919aa0407753d356593a79d5b4839a32"],["/css/components/article.css","249513e9c0a9a0ba2fda7b4fabe7e4df"],["/css/components/categories.css","8ad809048c610c0403389d04db75092f"],["/css/components/footer.css","287e82250729de8f3212076a841d43d9"],["/css/components/header.css","0a1c5a08bdbfd89ef1525c9a892bc2da"],["/css/components/icon.css","278490e940c6ca7331b1ff376c4624bf"],["/css/components/layout.css","ba66046eecabea1b0bfab5608bb052da"],["/css/components/pagination.css","9544dbaf6ab1d7cfee8acaebcff8e724"],["/css/components/responsive.css","84983828b65403ff5d6a228344fd18ce"],["/css/components/search.css","a3b88d0de0ebabdfefab34ae0f8d9d7e"],["/css/components/sidebar.css","85f8550a7d5a370d213782f19dbbbfe2"],["/css/components/syntax.css","df0b792eb8cb3d04c750cbdfa357f061"],["/css/components/tags.css","af36db8e3eab94617cc00471a343c931"],["/css/components/toc.css","747edd0c249bd01bc89c196d55746fad"],["/css/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/css/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/css/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/css/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/css/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/css/style.css","1157d9675dc2e97b86b553f771eca0d1"],["/images/bg.jpg","403dea8ec58af59de6e3411f05a86ae2"],["/images/blog-bg.jpg","7e06fa1ee6470b827f07ffa538e3e806"],["/images/blog-bg1.jpg","ef3b12051b4e240ed112d15b0e5fd38e"],["/images/icon-heart.svg","e80fd14ed816091e9bb0ac9a8f353077"],["/images/lofter.png","c06168eb26f5e48d7ea44b1de28aacbd"],["/images/magic_cube_loading_spinner.gif","b3419887896f982b4f2a1dcd83ef81bf"],["/images/top-active.png","02e0be375bd990075ae7984107e541de"],["/images/top.png","b825d3b3aa4236f6f36c10cbcefce55c"],["/images/zhihu0.png","ccf19cffa4e138ed30b021ecec393bbe"],["/img/e83bca5f1d1e6bf359d1f75727968c11_hd.jpg","e4815bc5d515f8d6bc4c5c8217c397ee"],["/img/func_explosion.png","336fc0b11bdf95e0d89f4b1133d9ce34"],["/img/happy_new_content_right.gif","4f08a960b553d2f7e920d4bc11e3d095"],["/img/new_start.jpg","3cd275c982782860d599a7d27e44b3fc"],["/img/rpc_rest_graphql.png","38f7757db70dda72be3a5a69f3e19caa"],["/img/stars.jpg","e36395857272810b7046569e010defec"],["/img/sub-tasks.png","e14b8269b914dfe37d3a75d95ace6f6b"],["/img/vscode_typings_angular.png","931be17f713a6e0d5587c75ce56f427d"],["/index.html","9fd887b7a03163ed374b41cd10e8c88c"],["/js/index.js","1ab9a61c7a11df4f2d970c206d1cfc9c"],["/js/search.js","69d32a01547e94351cf8bbe3de1e7551"],["/js/web-pinyin.js","4f2b569d95a00edc9f24e4d7866e4638"],["/page/2/index.html","0cebd18beb709334f99b836f7d036f76"],["/page/3/index.html","a0379a7550bc733bea9d37ba47b185ad"],["/page/4/index.html","e901b62bc025736b1eb784e62a5f9f21"],["/tags/angular/index.html","ef4b339e4c88d76a445ee10f39205693"],["/tags/api/index.html","1ea377b8087703d2a8e54b5e741f47b7"],["/tags/css/index.html","7e989b4979290ab32a2e76d0e91d3e9c"],["/tags/es6/index.html","c3eb88a415cff9219bbf24aef7a57b84"],["/tags/graphql/index.html","c4db6b243af920ec1c7df76e162056b9"],["/tags/html/index.html","59070a4991b8202cd244eda031a7584c"],["/tags/interview/index.html","ada22aeca0fc3ec9f9bb74aad36865a3"],["/tags/js/index.html","b5bbc2092787848c38a5528ad20f945a"],["/tags/js/page/2/index.html","ac380126059528a2a1c3efac16d886a0"],["/tags/kata/index.html","285126657023854d19ea85dad7ab5f36"],["/tags/liferay/index.html","39a74fc352bc2f47b8bae652b521e064"],["/tags/principle/index.html","80d6ec90bafb05b761e7ae83ecb012a8"],["/tags/redux/index.html","e961ab3632c8c537dc8e571d994fe5d9"],["/tags/web-worker/index.html","7fa71bdf930e3e8a6ffdd76276e8099f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







