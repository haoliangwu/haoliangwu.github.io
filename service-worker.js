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

var precacheConfig = [["/2016/06/20/开始/index.html","e403ab93e30b5e169809d48eb742ce9e"],["/2016/07/15/liferay-smile-face/index.html","08960d280e0e7865ddc5bb07f4f3f657"],["/2016/07/19/liferay-forward-proxy/index.html","0aeb67c0608414bac83a94e667020524"],["/2016/07/22/liferay-progress-bar/index.html","d39e11709b2fe6d3306e9108ba5bfdaf"],["/2016/07/26/liferay-portlet-container/index.html","0ba7145e7111662812d860627a478e6d"],["/2016/08/10/HTML-is-about-meaning/index.html","ea124fa012f0f7d421917fc06e52e0e8"],["/2016/08/22/interview-record-20160822/index.html","b9f1fd0a913cf3532d9634d2f4f25a7c"],["/2016/09/21/vscode-typings配置/index.html","03c30d2eae754eba60748a23707dbe66"],["/2016/09/26/我为什么离开了Liferay/index.html","13daaccc13a2d1374b371bd6c0470230"],["/2016/10/14/当开发一周了/index.html","6e193160d90637e83bdb47dd1da76506"],["/2016/11/28/async-for-js/index.html","f28dd50c18d3d57494491fa736fa171b"],["/2017/02/07/codereview-s8/index.html","88c2cfb65d2714affb9614eec4d33e7f"],["/2017/04/24/es6中的混合器模式/index.html","70c556dcdd7c7dec8a8058395213cdf6"],["/2017/05/31/在-redux-中集成-angular-di-机制/index.html","6b4363015edc2c6790f6664a8e7b0304"],["/2017/07/21/ng2-关于NgModule的简易归纳/index.html","f5e3f98e1d39ea09d9697b8dc9ea0ce2"],["/2017/12/18/多维数组取值问题/index.html","dd1dc04a11cb22b02c934d854d5f28ce"],["/2018/01/10/aacp-1/index.html","f4b9e02fda910039bdb0f92d876c099d"],["/2018/01/10/aacp-2/index.html","b32ab30454402e1c655bb6f6d4309af2"],["/2018/01/10/aacp-3a/index.html","d76bbe9f4769445a577319b906286383"],["/2018/01/10/aacp-3b/index.html","053455b5c4d7afe0032d9363677db99b"],["/2018/01/16/workerize/index.html","eb260a78205dcb4c880f683a8dd4f243"],["/2018/01/22/SOLID-d/index.html","604da99ccab7e69925f586cd07d4908c"],["/2018/02/02/SOLID-s/index.html","08191264a46f83956d12b7d71ff364e2"],["/2018/02/04/SOLID-o/index.html","37b964b8eca76df52b5255f7da9b9fb9"],["/2018/02/08/SOLID-i/index.html","77968c4b68d1f9ba50c1db1ce7e4fb4c"],["/2018/02/08/SOLID-l/index.html","aa9014c66ed745fa7efed9cfaaba2548"],["/2018/02/08/javascript原型链review/index.html","e28c1d6e5894edd3365f7d789254e3c7"],["/2018/02/17/aacp-4/index.html","377fd86309c623e374fc65d094b3b8a0"],["/2018/02/17/aacp-5/index.html","3f87419a79738e1a604bb0fb862a3898"],["/2018/03/24/rpc-reset-graphql/index.html","f9fe2002a22447554dacb8dc8db49559"],["/2018/04/02/30-minutes-graphql/index.html","487f92b984cb95538a3d3921d9ffa6db"],["/archives/2016/06/index.html","31432580bab170540262cd364ba0536a"],["/archives/2016/07/index.html","6dec0b275abb7f07769e2c630d40a23b"],["/archives/2016/08/index.html","dc6c8100b2f952395c0df9f0e72cd482"],["/archives/2016/09/index.html","94465ee3fd4f7f60c1166e61dfa1c6f4"],["/archives/2016/10/index.html","7d8133595544739673d94ffa6a5c2fa4"],["/archives/2016/11/index.html","e2895882985f960b325ce0959dfb8c0a"],["/archives/2016/index.html","02ce0b74c8b17fca35e930f82c7725fd"],["/archives/2016/page/2/index.html","d01c242367bd20592d09d4b4f906b8de"],["/archives/2017/02/index.html","2c642cfa123d400576ed088def6f1ca4"],["/archives/2017/04/index.html","d6a66bec75fa0ce16e7b8c23d75e0aa1"],["/archives/2017/05/index.html","6b92343f5b36593ac249739202516bd9"],["/archives/2017/07/index.html","efa867eb3f52145c1d5919f4392628f9"],["/archives/2017/12/index.html","2ac16ff0cca83414ebbb5e6c17b04beb"],["/archives/2017/index.html","352bc0eaa7ae2dc8e45e3928031b69e8"],["/archives/2018/01/index.html","01cce25e2094b7d89d34da59ae377654"],["/archives/2018/02/index.html","f7f6829f41a35d73a5765f65f23e9517"],["/archives/2018/03/index.html","286da2bece3449bbbca033cc986f2abe"],["/archives/2018/04/index.html","a1c54cd3421b6033f703334978f966f4"],["/archives/2018/index.html","84bf3c522943d5c708bc9390d99d88c7"],["/archives/2018/page/2/index.html","fcdf9018ae99c9317a9165712ac30e67"],["/archives/index.html","727a18329a92d27444d45d0aed2f9785"],["/archives/page/2/index.html","3635366bb3f1f419f3cc4445b6a558ec"],["/archives/page/3/index.html","5e6c1ff0a91013a8403bcdbfa077a567"],["/archives/page/4/index.html","06585df7074c8472ead9d8b509914051"],["/categories/原创/index.html","561554217e4df88b1d862809f6dd84ac"],["/categories/心情/index.html","1bb8583a725ed0abcc9b146883acd8ad"],["/categories/源码分析/index.html","f94547901f33685fd53d598c56fe9e83"],["/categories/翻译/index.html","960c8ac73ee9c369cbbcaccc03d74e1f"],["/categories/翻译/page/2/index.html","b7fb22eb646a5f4b89a9cfe4cfc810a2"],["/css/base/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["/css/base/normalize.css","849bd17d56ee28b33f218d3f51ce373c"],["/css/base/reset.css","43b09c33c051a39cd12401cbc548f894"],["/css/components/archive.css","919aa0407753d356593a79d5b4839a32"],["/css/components/article.css","249513e9c0a9a0ba2fda7b4fabe7e4df"],["/css/components/categories.css","8ad809048c610c0403389d04db75092f"],["/css/components/footer.css","287e82250729de8f3212076a841d43d9"],["/css/components/header.css","0a1c5a08bdbfd89ef1525c9a892bc2da"],["/css/components/icon.css","278490e940c6ca7331b1ff376c4624bf"],["/css/components/layout.css","ba66046eecabea1b0bfab5608bb052da"],["/css/components/pagination.css","9544dbaf6ab1d7cfee8acaebcff8e724"],["/css/components/responsive.css","84983828b65403ff5d6a228344fd18ce"],["/css/components/search.css","a3b88d0de0ebabdfefab34ae0f8d9d7e"],["/css/components/sidebar.css","85f8550a7d5a370d213782f19dbbbfe2"],["/css/components/syntax.css","df0b792eb8cb3d04c750cbdfa357f061"],["/css/components/tags.css","af36db8e3eab94617cc00471a343c931"],["/css/components/toc.css","747edd0c249bd01bc89c196d55746fad"],["/css/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/css/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/css/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/css/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/css/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/css/style.css","1157d9675dc2e97b86b553f771eca0d1"],["/images/bg.jpg","403dea8ec58af59de6e3411f05a86ae2"],["/images/blog-bg.jpg","7e06fa1ee6470b827f07ffa538e3e806"],["/images/blog-bg1.jpg","ef3b12051b4e240ed112d15b0e5fd38e"],["/images/icon-heart.svg","e80fd14ed816091e9bb0ac9a8f353077"],["/images/lofter.png","c06168eb26f5e48d7ea44b1de28aacbd"],["/images/magic_cube_loading_spinner.gif","b3419887896f982b4f2a1dcd83ef81bf"],["/images/top-active.png","02e0be375bd990075ae7984107e541de"],["/images/top.png","b825d3b3aa4236f6f36c10cbcefce55c"],["/images/zhihu0.png","ccf19cffa4e138ed30b021ecec393bbe"],["/img/e83bca5f1d1e6bf359d1f75727968c11_hd.jpg","e4815bc5d515f8d6bc4c5c8217c397ee"],["/img/func_explosion.png","336fc0b11bdf95e0d89f4b1133d9ce34"],["/img/happy_new_content_right.gif","4f08a960b553d2f7e920d4bc11e3d095"],["/img/new_start.jpg","3cd275c982782860d599a7d27e44b3fc"],["/img/rpc_rest_graphql.png","38f7757db70dda72be3a5a69f3e19caa"],["/img/stars.jpg","e36395857272810b7046569e010defec"],["/img/sub-tasks.png","e14b8269b914dfe37d3a75d95ace6f6b"],["/img/vscode_typings_angular.png","931be17f713a6e0d5587c75ce56f427d"],["/index.html","9ce8298c25efaafa599e000b484a021b"],["/js/index.js","1ab9a61c7a11df4f2d970c206d1cfc9c"],["/js/search.js","69d32a01547e94351cf8bbe3de1e7551"],["/js/web-pinyin.js","4f2b569d95a00edc9f24e4d7866e4638"],["/page/2/index.html","96402bcb7a690bc03af44ee939a2cb00"],["/page/3/index.html","dc66088c41397069594bb16b73fd2ebe"],["/page/4/index.html","92eddcd98514321005dbbbecf6dc96d7"],["/tags/angular/index.html","ff0f91512cafaa69709d7e9f13824c91"],["/tags/api/index.html","1ea377b8087703d2a8e54b5e741f47b7"],["/tags/css/index.html","7e989b4979290ab32a2e76d0e91d3e9c"],["/tags/es6/index.html","c3eb88a415cff9219bbf24aef7a57b84"],["/tags/graphql/index.html","c4db6b243af920ec1c7df76e162056b9"],["/tags/html/index.html","59070a4991b8202cd244eda031a7584c"],["/tags/interview/index.html","ada22aeca0fc3ec9f9bb74aad36865a3"],["/tags/js/index.html","737476298c8a6351bd71b7e4f8015fef"],["/tags/js/page/2/index.html","81ca2a770336f396732ae402cc8301fb"],["/tags/kata/index.html","285126657023854d19ea85dad7ab5f36"],["/tags/liferay/index.html","39a74fc352bc2f47b8bae652b521e064"],["/tags/principle/index.html","80d6ec90bafb05b761e7ae83ecb012a8"],["/tags/redux/index.html","e961ab3632c8c537dc8e571d994fe5d9"],["/tags/web-worker/index.html","7fa71bdf930e3e8a6ffdd76276e8099f"]];
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







