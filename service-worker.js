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

var precacheConfig = [["/2016/06/20/开始/index.html","9c0dd59f9b154d7b361ff7b88a5dbf71"],["/2016/06/27/20160627/index.html","874d7ca58b3fc2d323bc1c45efec7bfd"],["/2016/06/30/做饭这件小事/index.html","ca347b192e08fe999863a8324ae9c77f"],["/2016/07/01/20160701/index.html","acff18065ad0440dcf6f96c6fc1fa122"],["/2016/07/01/Liferay-70-学习笔记/index.html","8cd445e4764326b673c725cad78d344f"],["/2016/07/05/20160705/index.html","a78a670ad33932fdcbac653022c65aa1"],["/2016/07/06/warriorjs，只能感叹城会玩/index.html","17a3f38442218b6a00b4284822d6b95f"],["/2016/07/11/20160711/index.html","021852a4922688e62a70f15330402e5c"],["/2016/07/15/liferay-smile-face/index.html","d7ba44835c24787c487ea740fb56a0ac"],["/2016/07/19/liferay-forward-proxy/index.html","c777b74c7d5fb98a8e06a8d65aec52b2"],["/2016/07/22/liferay-progress-bar/index.html","c2ca6612515a9d4088ae7664e66d6500"],["/2016/07/26/liferay-portlet-container/index.html","5051ca067008827440c888cf7dff6113"],["/2016/08/10/HTML-is-about-meaning/index.html","069aacd7e3385494c288ce180cf2beb8"],["/2016/08/22/interview-record-20160822/index.html","225420e218a81cd6574cc058586629ba"],["/2016/09/06/angular学习笔记/index.html","9f92063147127b18c28675c913148462"],["/2016/09/14/7-tips-for-cooking/index.html","cac4fb5c59faef632addf172a972744d"],["/2016/09/21/vscode-typings配置/index.html","c552124b0cc8cfc472f2ce34e8c704ac"],["/2016/09/26/我为什么离开了Liferay/index.html","fd7ba44211d0addb121e17595b466b0a"],["/2016/10/14/当开发一周了/index.html","1e3561a98ba6538a6849a17897dca19b"],["/2016/11/28/async-for-js/index.html","4dbd61ca4cd2c51500e2ec5a5f94aace"],["/2017/02/07/codereview-s8/index.html","68e67cad1bbb2ded45a4682c47be673b"],["/2017/04/24/es6中的混合器模式/index.html","21d49b87aebb38605cc983c03cd9caae"],["/2017/05/31/在-redux-中集成-angular-di-机制/index.html","c43cd2ed27ed69943c695917909925d6"],["/2017/07/21/ng2-关于NgModule的简易归纳/index.html","63ef4796557792475737826bcf6e81d6"],["/2017/12/18/多维数组取值问题/index.html","6a0aed4619af1b792e09a2879997a891"],["/2018/01/10/aacp-1/index.html","747d79f9eafe3df5c8d80742983bbb82"],["/2018/01/10/aacp-2/index.html","afe207f88a74e75802bd48c226598f9c"],["/2018/01/10/aacp-3a/index.html","c542d91ef01c876b8619e1164650fa7c"],["/2018/01/10/aacp-3b/index.html","e1895fe598bdcc9eef9b5e474ae440c6"],["/2018/01/16/workerize/index.html","dd674498276446b106f8eed89c14cba0"],["/2018/01/22/SOLID-d/index.html","281e088ab114b71777c1c777c013a27f"],["/2018/02/02/SOLID-s/index.html","08a349732d08ef0e1007cc510d2f6d76"],["/2018/02/04/SOLID-o/index.html","d90938509a18c08a0b0ba0143e846310"],["/2018/02/08/SOLID-i/index.html","aaa4ac591409088065b251fce9b5d366"],["/2018/02/08/SOLID-l/index.html","07eee8c7e1864e030295cd3ce3641651"],["/2018/02/08/javascript原型链review/index.html","519afc1dbb2af574f024e8681dc17c8e"],["/2018/02/17/aacp-4/index.html","ec52bd32c8a36228ea7de02ca0009633"],["/2018/02/17/aacp-5/index.html","6572a60ab994758639e973189db01ec3"],["/2018/03/24/rpc-reset-graphql/index.html","a5ff50d904b2ec28e82ba44bcc408e96"],["/2018/04/02/30-minutes-graphql/index.html","0c40365776b8c3b5a016a79795b834e2"],["/angular/index.html","145ac7e547115ab4c0c9170a62c44d50"],["/archives/2016/06/index.html","ced46b8e64f0235e7d9d7737a1880b48"],["/archives/2016/07/index.html","7815ad3d8be694fd48211839cf241ed0"],["/archives/2016/08/index.html","25705ca442830fb43b8c36dc27994b11"],["/archives/2016/09/index.html","c1f1ce3ffafee08a8e09fa40529a5124"],["/archives/2016/10/index.html","d1d3b805017fa178fa4b194eaf11bfeb"],["/archives/2016/11/index.html","f1d70416b20bde880db1e51abf5c7e98"],["/archives/2016/index.html","c393804ead12c2ee36c822f81d5bdfb1"],["/archives/2016/page/2/index.html","b83a34b1aee9b3f60752b6f6cad1c471"],["/archives/2017/02/index.html","fd23563bcf7727440378a6ef531fed6a"],["/archives/2017/04/index.html","75eba1002421909629ea7a42ce89fb85"],["/archives/2017/05/index.html","5d9f1f5bdc95eb38facef4c073dcace5"],["/archives/2017/07/index.html","f3655a06d26e0a75bc245338869b65d1"],["/archives/2017/12/index.html","67fe6eb5fb60d8a0d487a8bc53f99377"],["/archives/2017/index.html","2306127df44ed6269ce528ddaf5c6c77"],["/archives/2018/01/index.html","00b04d3f8d6d6cf3c573cd2d83296609"],["/archives/2018/02/index.html","36e273d6ebd8bb59cd351fd1c3e36789"],["/archives/2018/03/index.html","32f0def62361e383ab4ac5d04647eaea"],["/archives/2018/04/index.html","58d203011ea5b76a1bc0688480296366"],["/archives/2018/index.html","d3ac290e35b417286fb267f19a415670"],["/archives/2018/page/2/index.html","e008e14f9141a74b1245fd4ed9802160"],["/archives/index.html","8d0ed145b8ecbcd840752d8f3988cd19"],["/archives/page/2/index.html","0cbd1550478bf865c17a09223c4c42db"],["/archives/page/3/index.html","937a9a01749b76af938b88856f708e6a"],["/archives/page/4/index.html","333ac225248173d94e71196464e92e5d"],["/css/apollo.css","4522f9b4b4a9c46b60e861f7b3a0f93e"],["/css/base/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["/css/base/normalize.css","849bd17d56ee28b33f218d3f51ce373c"],["/css/base/reset.css","43b09c33c051a39cd12401cbc548f894"],["/css/components/archive.css","919aa0407753d356593a79d5b4839a32"],["/css/components/article.css","249513e9c0a9a0ba2fda7b4fabe7e4df"],["/css/components/categories.css","8ad809048c610c0403389d04db75092f"],["/css/components/footer.css","287e82250729de8f3212076a841d43d9"],["/css/components/header.css","0a1c5a08bdbfd89ef1525c9a892bc2da"],["/css/components/icon.css","278490e940c6ca7331b1ff376c4624bf"],["/css/components/layout.css","ba66046eecabea1b0bfab5608bb052da"],["/css/components/pagination.css","9544dbaf6ab1d7cfee8acaebcff8e724"],["/css/components/responsive.css","84983828b65403ff5d6a228344fd18ce"],["/css/components/search.css","a3b88d0de0ebabdfefab34ae0f8d9d7e"],["/css/components/sidebar.css","85f8550a7d5a370d213782f19dbbbfe2"],["/css/components/syntax.css","df0b792eb8cb3d04c750cbdfa357f061"],["/css/components/tags.css","af36db8e3eab94617cc00471a343c931"],["/css/components/toc.css","747edd0c249bd01bc89c196d55746fad"],["/css/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/css/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/css/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/css/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/css/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/css/style.css","1157d9675dc2e97b86b553f771eca0d1"],["/images/bg.jpg","403dea8ec58af59de6e3411f05a86ae2"],["/images/blog-bg.jpg","7e06fa1ee6470b827f07ffa538e3e806"],["/images/blog-bg1.jpg","ef3b12051b4e240ed112d15b0e5fd38e"],["/images/icon-heart.svg","e80fd14ed816091e9bb0ac9a8f353077"],["/images/lofter.png","c06168eb26f5e48d7ea44b1de28aacbd"],["/images/top-active.png","02e0be375bd990075ae7984107e541de"],["/images/top.png","b825d3b3aa4236f6f36c10cbcefce55c"],["/images/zhihu0.png","ccf19cffa4e138ed30b021ecec393bbe"],["/img/e83bca5f1d1e6bf359d1f75727968c11_hd.jpg","e4815bc5d515f8d6bc4c5c8217c397ee"],["/img/func_explosion.png","336fc0b11bdf95e0d89f4b1133d9ce34"],["/img/happy_new_content_right.gif","4f08a960b553d2f7e920d4bc11e3d095"],["/img/new_start.jpg","3cd275c982782860d599a7d27e44b3fc"],["/img/rpc_rest_graphql.png","38f7757db70dda72be3a5a69f3e19caa"],["/img/stars.jpg","e36395857272810b7046569e010defec"],["/img/sub-tasks.png","e14b8269b914dfe37d3a75d95ace6f6b"],["/img/vscode_typings_angular.png","931be17f713a6e0d5587c75ce56f427d"],["/index.html","f5547a669b13bf817f64099e860aeca8"],["/js/index.js","1ab9a61c7a11df4f2d970c206d1cfc9c"],["/js/search.js","69d32a01547e94351cf8bbe3de1e7551"],["/js/web-pinyin.js","4f2b569d95a00edc9f24e4d7866e4638"],["/liferay/Fundamentals.html","1082901df468d975e8f815367839f482"],["/liferay/index.html","8bf0fe6e6150f68114cc3aa2d72182cf"],["/page/2/index.html","605fb24cad6498aca6b7b4146ff93647"],["/page/3/index.html","95a6ed5e0bb7f72e41cc27e42d547758"],["/page/4/index.html","423203d3fc3a78ba1c5625afe538f48f"],["/pages/index.html","5559bd2a2b490722825049fdebffcd76"],["/recipes/index.html","9048f73c72344415512fb57f4a1bdb9b"],["/recipes/蚝油生菜.html","2beefb9a936037c69d091ba6ef293753"],["/tags/GraphQL/index.html","e90c7721426ba3dd6ebb81ab29e8db22"],["/tags/angular/index.html","60392048a898815ecda27800aefdff08"],["/tags/api/index.html","27010b0d5dd771e9e101b1b28f979a27"],["/tags/css/index.html","d6e07258e5f7430cae0664b92416603b"],["/tags/es6/index.html","d3bc6e1eb22884a28a1571ee1ea60746"],["/tags/html/index.html","3e8a4f44885111eac92c3a7952a13338"],["/tags/interview/index.html","84bd93efdbc38647451b4fad9e8d340f"],["/tags/js/index.html","456955d8ef0aec36bae12abba3a1a69b"],["/tags/js/page/2/index.html","2e5c298b03d7d0b1e900b4b7b0655e7d"],["/tags/js/page/3/index.html","a5f018dc441ce71576ba43e9c21e7db8"],["/tags/kata/index.html","96a0b19802ae07b70f3376de3ad714d8"],["/tags/liferay/index.html","31569237f94a2a08abc673668dbc091a"],["/tags/liferay，工作/index.html","267869919d71e5a64e519013714cc5a6"],["/tags/mvvm/index.html","cb21974c9bff7e5e5d172d0cd2d8ac8c"],["/tags/ng2/index.html","b2125dba1edbc1cc27810b36c193a042"],["/tags/ngx/index.html","9457d3e1b82f02a526156511ab2808e1"],["/tags/redux/index.html","bd5610fc9b1f74ee821ccf37d7b5d7b3"],["/tags/web-worker/index.html","2ae3074e8f7f305e3a649d96ed39218c"],["/tags/其他，心情/index.html","31da9a28fb70631e2dbb43da225c8736"],["/tags/其他，话题/index.html","28846ca8b2e4eb11b47e0f66d91fb6e8"],["/tags/学习/index.html","eea9791dbb522819af67f79337b9496c"],["/tags/心情/index.html","35d87a66caec8f74541912283d9ea1d9"],["/tags/接口设计/index.html","80764ae6a911a6892f9f9decb68735aa"],["/tags/源码/index.html","0af2abe52cbf0140c790fc382d6fa49f"],["/tags/编程思想/index.html","4e46acbcc2992476236367136e8800ec"],["/tags/翻译/index.html","21160a22c03cb951a0ae7e12745aaa37"],["/tags/翻译/page/2/index.html","488b5451cc1bd0b0489f829212ac50dc"],["/tags/英语/index.html","7502cdcf380bbeb509f9e79a828a5978"],["/tags/设计模式/index.html","6214af03485a34e636a007ce566b0a45"],["/前端学习分享/index.html","59806086090eac1df8f45139386d0696"]];
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







