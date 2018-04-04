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

var precacheConfig = [["/2016/06/20/开始/index.html","603f890571674ad035d5e373c5644e2c"],["/2016/07/15/liferay-smile-face/index.html","5327389005d74dbcf57961a3d3892c0e"],["/2016/07/19/liferay-forward-proxy/index.html","758450fbb0d103a2ffb53cedc79e8d34"],["/2016/07/22/liferay-progress-bar/index.html","2156ddbd2fe217eb6a8f400c8a79abb3"],["/2016/07/26/liferay-portlet-container/index.html","a794c66835a4229ba4a94bf6c7c00c85"],["/2016/08/10/HTML-is-about-meaning/index.html","0abd02f9e7633a48c2c033b84e3d7ec0"],["/2016/08/22/interview-record-20160822/index.html","9eaef693387970315a2617c44f135cf5"],["/2016/09/21/vscode-typings配置/index.html","9ff0a3577c4040feebf4d3a0a4bb8658"],["/2016/09/26/我为什么离开了Liferay/index.html","94fd08a6a7d6eee71d7ca0a09fb9209f"],["/2016/10/14/当开发一周了/index.html","6b41beb4224078cf791fa05e0bcdaa6e"],["/2016/11/28/async-for-js/index.html","09a05ca4e22c479e27e38f56b8c81a65"],["/2017/02/07/codereview-s8/index.html","2b401093b4904ad465143bca4525d1e0"],["/2017/04/24/es6中的混合器模式/index.html","8b49757b8f3f01da8342997009111abc"],["/2017/05/31/在-redux-中集成-angular-di-机制/index.html","4651345a7fb82c3e89bc76709cb43cf4"],["/2017/07/21/ng2-关于NgModule的简易归纳/index.html","1a61431e1f281dee5b618f2df14afae3"],["/2017/12/18/多维数组取值问题/index.html","edf11ffdeefbc5c9976a528cc50baec7"],["/2018/01/10/aacp-1/index.html","9c3c26937e92d5e45f287dacdf79d5b1"],["/2018/01/10/aacp-2/index.html","19c6f44eaed42d07eca15143d66a8d00"],["/2018/01/10/aacp-3a/index.html","4ccab072eae55b8cc4b4ad9d3c935be3"],["/2018/01/10/aacp-3b/index.html","e2ba289355d6ca995e57fe3b11efd6a6"],["/2018/01/16/workerize/index.html","4b8d792b2a552a54f19b05406ccdb44f"],["/2018/01/22/SOLID-d/index.html","0a94ac51a5a82ca4147be05325497656"],["/2018/02/02/SOLID-s/index.html","76a75d0c23541031b8a1bf28ca21e07e"],["/2018/02/04/SOLID-o/index.html","4ff0ba46bbb20331aeeae96f0834db63"],["/2018/02/08/SOLID-i/index.html","5e156bde6bfafb543d18a8ef169facbe"],["/2018/02/08/SOLID-l/index.html","bf311fcce68e59ed06e20508e1cbe312"],["/2018/02/08/javascript原型链review/index.html","3baf5d6148acd5bfc0ea1c9201283f57"],["/2018/02/17/aacp-4/index.html","ef20f676777271b592640cdfcdd9dc48"],["/2018/02/17/aacp-5/index.html","f2fae6ef988e6706685f5f59e983001f"],["/2018/03/24/rpc-reset-graphql/index.html","a17c78275cf424f890431a833ca079ee"],["/2018/04/02/30-minutes-graphql/index.html","9be0da1d37cc2552e53122ec5cb05a07"],["/archives/2016/06/index.html","341057274e39401bb696a3b3ddaa97e4"],["/archives/2016/07/index.html","7f448100699e1b15a5b4e6acd84f66fa"],["/archives/2016/08/index.html","a5847f46c3b7d2c3b2cc618426f87891"],["/archives/2016/09/index.html","6b64a21c9116ab1bf6ab68780f9e350b"],["/archives/2016/10/index.html","3e5c8284509ebee2a50f61ed89c5af32"],["/archives/2016/11/index.html","76b065484df8e560a503c9f8befc6106"],["/archives/2016/index.html","69bb2bb89b2d179c8483195449cf44de"],["/archives/2016/page/2/index.html","2732fee8cf9c21905c0734dcc8b338d3"],["/archives/2017/02/index.html","ea5e97130025a322f4d3e5383b323de2"],["/archives/2017/04/index.html","d53d43a5f8ccb4843e569163c1bbf7ab"],["/archives/2017/05/index.html","6c898de8ae1d278f5017a14a83885a9e"],["/archives/2017/07/index.html","e69aae06e0515d24d69f8bb2b792b86c"],["/archives/2017/12/index.html","c26da1a473b0b9eb8570d10c2bdefe54"],["/archives/2017/index.html","c373f808b0e0fa7abba0b989809e22d0"],["/archives/2018/01/index.html","37e84fb8d2e7ae8c355985131e716c71"],["/archives/2018/02/index.html","e005c11af42e7dc9ef351d97a90a60d8"],["/archives/2018/03/index.html","3280cd71979caae3c912475c2a95c19b"],["/archives/2018/04/index.html","6542b06f5a48a591ae326e29ed073b0e"],["/archives/2018/index.html","616e4978638352be7c0b96f6005c02be"],["/archives/2018/page/2/index.html","d07a4a9c93ab136b01228cc1d94d9316"],["/archives/index.html","9351c179fdfc47d5c587d679a092c563"],["/archives/page/2/index.html","cf7d542a3e830676e8c0c4b562b76537"],["/archives/page/3/index.html","a5685c49d536fdb945922946ce42952a"],["/archives/page/4/index.html","d1ecc893e52a9a0b9bc6c163c8a04a5c"],["/categories/原创/index.html","6df2ca58b285cca7e50a2b492685db97"],["/categories/心情/index.html","068d2cd3fae962e8ede781bfc7ce740f"],["/categories/源码分析/index.html","0976713454cdc36c4a95d14c3635a52e"],["/categories/翻译/index.html","c3509a39ec206588a9466fc1170a5766"],["/categories/翻译/page/2/index.html","0fd5ab5e5cddf727c57646e9ea314651"],["/css/base/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["/css/base/normalize.css","849bd17d56ee28b33f218d3f51ce373c"],["/css/base/reset.css","43b09c33c051a39cd12401cbc548f894"],["/css/components/archive.css","919aa0407753d356593a79d5b4839a32"],["/css/components/article.css","249513e9c0a9a0ba2fda7b4fabe7e4df"],["/css/components/categories.css","8ad809048c610c0403389d04db75092f"],["/css/components/footer.css","287e82250729de8f3212076a841d43d9"],["/css/components/header.css","0a1c5a08bdbfd89ef1525c9a892bc2da"],["/css/components/icon.css","278490e940c6ca7331b1ff376c4624bf"],["/css/components/layout.css","ba66046eecabea1b0bfab5608bb052da"],["/css/components/pagination.css","9544dbaf6ab1d7cfee8acaebcff8e724"],["/css/components/responsive.css","84983828b65403ff5d6a228344fd18ce"],["/css/components/search.css","a3b88d0de0ebabdfefab34ae0f8d9d7e"],["/css/components/sidebar.css","85f8550a7d5a370d213782f19dbbbfe2"],["/css/components/syntax.css","df0b792eb8cb3d04c750cbdfa357f061"],["/css/components/tags.css","af36db8e3eab94617cc00471a343c931"],["/css/components/toc.css","747edd0c249bd01bc89c196d55746fad"],["/css/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/css/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/css/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/css/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/css/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/css/style.css","1157d9675dc2e97b86b553f771eca0d1"],["/images/bg.jpg","403dea8ec58af59de6e3411f05a86ae2"],["/images/blog-bg.jpg","7e06fa1ee6470b827f07ffa538e3e806"],["/images/blog-bg1.jpg","ef3b12051b4e240ed112d15b0e5fd38e"],["/images/icon-heart.svg","e80fd14ed816091e9bb0ac9a8f353077"],["/images/lofter.png","c06168eb26f5e48d7ea44b1de28aacbd"],["/images/top-active.png","02e0be375bd990075ae7984107e541de"],["/images/top.png","b825d3b3aa4236f6f36c10cbcefce55c"],["/images/zhihu0.png","ccf19cffa4e138ed30b021ecec393bbe"],["/img/e83bca5f1d1e6bf359d1f75727968c11_hd.jpg","e4815bc5d515f8d6bc4c5c8217c397ee"],["/img/func_explosion.png","336fc0b11bdf95e0d89f4b1133d9ce34"],["/img/happy_new_content_right.gif","4f08a960b553d2f7e920d4bc11e3d095"],["/img/new_start.jpg","3cd275c982782860d599a7d27e44b3fc"],["/img/rpc_rest_graphql.png","38f7757db70dda72be3a5a69f3e19caa"],["/img/stars.jpg","e36395857272810b7046569e010defec"],["/img/sub-tasks.png","e14b8269b914dfe37d3a75d95ace6f6b"],["/img/vscode_typings_angular.png","931be17f713a6e0d5587c75ce56f427d"],["/index.html","4366000906424651e9b5f45cb90a39d7"],["/js/index.js","1ab9a61c7a11df4f2d970c206d1cfc9c"],["/js/search.js","69d32a01547e94351cf8bbe3de1e7551"],["/js/web-pinyin.js","4f2b569d95a00edc9f24e4d7866e4638"],["/page/2/index.html","8705e3f4d175cfe82471bbab648570b9"],["/page/3/index.html","8bc96e2cc1c3af8ff4833572694139fa"],["/page/4/index.html","a3ba69b923ac6f7eff6af41a72781c58"],["/tags/angular/index.html","52daaa5822368c234d96034a2fb3d7d0"],["/tags/api/index.html","ae54bb77a4fb54a9890b3e518facee06"],["/tags/css/index.html","c99951637b9e3147fd4b33914bb42bf6"],["/tags/es6/index.html","b54d235cfac76dd10f0dbab5be1137f0"],["/tags/graphql/index.html","5ffbc31ea8c56d33e0aa7a9c7a17a870"],["/tags/html/index.html","0637322291f3429be680ae247822d271"],["/tags/interview/index.html","d2cd2485f22e83c752b10f26ed8f4352"],["/tags/js/index.html","828a3a422185f5ab27517c49afd67d70"],["/tags/js/page/2/index.html","55096880b6b10a3da1c27dd2d4700c41"],["/tags/kata/index.html","7d6978a78ec9873f9a90941939b0d404"],["/tags/liferay/index.html","8bdbaab76a144b02f50391a2f67de6c5"],["/tags/principle/index.html","f843d5cbc452b74bf20c71bb8dabe9d1"],["/tags/redux/index.html","703bce55cafa9f9887f4972809bb072e"],["/tags/web-worker/index.html","dbaca1b4d569efd661198c61e398f356"]];
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







