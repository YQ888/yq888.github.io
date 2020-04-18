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

var precacheConfig = [["C:/Users/高冷的男神/Desktop/blog/public/archives/1462361889.html","2c3502eef46fb92f610844477b1a2d88"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1517358039.html","017be0d1f676809872e4191d48d3eabd"],["C:/Users/高冷的男神/Desktop/blog/public/archives/154867527.html","ee553f947eff857a3264b6adc775f5ad"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1856597008.html","4ad40de9789d7710dd7f4fcb52792d28"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1973821148.html","3891c009f95f10f33b10685f25b8aff9"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1988406376.html","d60a44be83e8839d291175ead75478c4"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/02/index.html","e9e7afa90ca5f5a2403171dba0d92a0c"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/03/index.html","533e9990a4e2d0d9b74324c965774bdf"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/04/index.html","c3aadfc7395c05aee4f9a06f150bf7d7"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/04/page/2/index.html","ee6e2f0be2a814e436e8a14d283d87ad"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/04/page/3/index.html","be5d11d0a4f6718792037f5946fae629"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/index.html","4271571646e1e6e4b4ac7b5d9d6b7637"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/page/2/index.html","4d8c8e05547a6c4bce41ad90bcfab627"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/page/3/index.html","d5d7d0d3899d83e44a52c42071c9db45"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/page/4/index.html","7305f9fdcea8c61d2970cbe10e745d95"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2202648686.html","9cd9cbb05af65644e0849a9fff436391"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2447437047.html","1e5f1a7ba19d8aa035daa16c36243c0e"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2617511586.html","f4d8e0867f42f08c64054d5d07c74b26"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2669297123.html","7dda03dd821dd43fde72942083f3d4ea"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2900021104.html","f0327bee40a44c6b834fa87327569403"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3020691415.html","cf3db95e3826d2401a065703d6962429"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3116909338.html","0b8708112309148a79524891ae3961f9"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3137458103.html","eb7b171665e73479ce9fd354e1acd0d5"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3139128020.html","cb00ff74018e20e2a1553a33f7261ef7"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3278015703.html","172946c3a05dea5fcba81cac754ccde4"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3292414775.html","59ffa01ff26759f18c2f637c9045a94a"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3306406959.html","ebf8ecf51560d0c1ed77ed2c2939999c"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3583131316.html","1f68c50fca7d5df9bdd52793fddb6f6c"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3679495888.html","be2414a69f11f836b0870c5f2c9ccf45"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3740815078.html","7f9147acbf4602ea92172d921416b79c"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3740815079.html","d899ef0136f0833ea8b9d519d1ce74d5"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3740815080.html","d0cbf34f5b820b08475e13c89b20e5f8"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4045953268.html","378f8e06f6833b0f6b868908516a3383"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4070222742.html","7a96f7a90283d5831fefd73feaae16fc"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4086565940.html","92d88b5b8b168a6aeea63c70e9139643"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4167823285.html","80551c1a760bf39244f39724228f0f7d"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4257653461.html","e929c9845d760e8d666ec8a2e8eff15c"],["C:/Users/高冷的男神/Desktop/blog/public/archives/599829822.html","eda67b54ecb810158b6376942c42c7e7"],["C:/Users/高冷的男神/Desktop/blog/public/archives/643733303.html","61235ee9b9e075ffdb7a75e93966edc6"],["C:/Users/高冷的男神/Desktop/blog/public/archives/648391965.html","f92d0c5cf2d27e3c17a9cddaabe934f1"],["C:/Users/高冷的男神/Desktop/blog/public/archives/657161319.html","3a07b3d31f1f170263a61a943f8d0f4f"],["C:/Users/高冷的男神/Desktop/blog/public/archives/743675268.html","f4f5bca6676777e8713b6158765bcbe3"],["C:/Users/高冷的男神/Desktop/blog/public/archives/815832981.html","34461f2052db5ab20da69ad0fac999b9"],["C:/Users/高冷的男神/Desktop/blog/public/archives/845073791.html","f0daa1fb84d1c987bdd3dba875d0510b"],["C:/Users/高冷的男神/Desktop/blog/public/archives/index.html","55420d00d65143a4f9d3b753862d9840"],["C:/Users/高冷的男神/Desktop/blog/public/archives/page/2/index.html","464a46bf7adfbb69fffe588a89e25c53"],["C:/Users/高冷的男神/Desktop/blog/public/archives/page/3/index.html","2cae638029f59b2c7361dddd185bfe6a"],["C:/Users/高冷的男神/Desktop/blog/public/archives/page/4/index.html","554058965e8d7d2f60c23d49705b3a61"],["C:/Users/高冷的男神/Desktop/blog/public/categories/C语言学习笔记/index.html","0310bfb3e7fb02515aaaa335dea728ce"],["C:/Users/高冷的男神/Desktop/blog/public/categories/Hexo/index.html","c144a3af96432d453aecdd4a5531a255"],["C:/Users/高冷的男神/Desktop/blog/public/categories/Java学习笔记/index.html","5e5ad266091c909db9a37df8cb937dae"],["C:/Users/高冷的男神/Desktop/blog/public/categories/Linux学习笔记/index.html","0a83cbc45e79e58e6de3bba23c3ab1f0"],["C:/Users/高冷的男神/Desktop/blog/public/categories/index.html","457b993156f55e61e01f02bdba8122c0"],["C:/Users/高冷的男神/Desktop/blog/public/categories/yilia/index.html","8de7368f9f403458ef8d04e03e2f8a90"],["C:/Users/高冷的男神/Desktop/blog/public/categories/常见bug/index.html","0ab87f40a233dc8c31285c3889568da0"],["C:/Users/高冷的男神/Desktop/blog/public/categories/计算机/index.html","80e4277527a13ffece072ce0514f1003"],["C:/Users/高冷的男神/Desktop/blog/public/categories/软件工具/index.html","87a0cd11853374e32994a47d903f8cd9"],["C:/Users/高冷的男神/Desktop/blog/public/css/index.css","56cc863d39863078d48a06a7bd920b6e"],["C:/Users/高冷的男神/Desktop/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/高冷的男神/Desktop/blog/public/img/2.png","a707c97c1f534c24ae638d8026f78267"],["C:/Users/高冷的男神/Desktop/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/Users/高冷的男神/Desktop/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/高冷的男神/Desktop/blog/public/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["C:/Users/高冷的男神/Desktop/blog/public/img/bq.jpg","19bbadd8563123dd6e0fa72e47f4b8b6"],["C:/Users/高冷的男神/Desktop/blog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/高冷的男神/Desktop/blog/public/img/fenlei.jpg","84c493067ed7500cc5680da64d35a611"],["C:/Users/高冷的男神/Desktop/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/高冷的男神/Desktop/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/高冷的男神/Desktop/blog/public/img/index.jpg","9ab35940d1851a6d593490f48d450290"],["C:/Users/高冷的男神/Desktop/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/高冷的男神/Desktop/blog/public/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["C:/Users/高冷的男神/Desktop/blog/public/img/post2.jpg","d9183e4b5310574e687eac94c0a96a6e"],["C:/Users/高冷的男神/Desktop/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Users/高冷的男神/Desktop/blog/public/img/wc.png","920e8c5f7cecf5d16623757f80857bf0"],["C:/Users/高冷的男神/Desktop/blog/public/img/zfb.png","b37c5d5292744a25f067ee010cb7d92c"],["C:/Users/高冷的男神/Desktop/blog/public/index.html","d194a67ee94cb8b162d126a7748befbd"],["C:/Users/高冷的男神/Desktop/blog/public/js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["C:/Users/高冷的男神/Desktop/blog/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["C:/Users/高冷的男神/Desktop/blog/public/js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["C:/Users/高冷的男神/Desktop/blog/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["C:/Users/高冷的男神/Desktop/blog/public/js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["C:/Users/高冷的男神/Desktop/blog/public/link/index.html","b2b1f49521dc51dacc69fb1531be044e"],["C:/Users/高冷的男神/Desktop/blog/public/live2dw/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["C:/Users/高冷的男神/Desktop/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["C:/Users/高冷的男神/Desktop/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["C:/Users/高冷的男神/Desktop/blog/public/movies/index.html","55c41a9bed0e62dd28541fb0024dffcf"],["C:/Users/高冷的男神/Desktop/blog/public/music/index.html","616fc5753c6694de12a0888fbe20db17"],["C:/Users/高冷的男神/Desktop/blog/public/page/2/index.html","d8ef1de42f5de00a2c7b3bfb4baa9efc"],["C:/Users/高冷的男神/Desktop/blog/public/page/3/index.html","6054a6b9ed282b57c7313c5c9db321ff"],["C:/Users/高冷的男神/Desktop/blog/public/page/4/index.html","26e882fea69c1e564d8211a603d5050d"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Centos/index.html","0430a9673f29251eb305f59b0fbcfb68"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Class类/index.html","fe1e3750311f8213f441101ab856a8e8"],["C:/Users/高冷的男神/Desktop/blog/public/tags/C语言基础/index.html","9d5b82b945d0d3bb0e99857ce3d56b53"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Hexo搭建/index.html","d322e92c57329ac4dd4cab116058c5cd"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Java基础/index.html","01f923b6f11fab2d09ce045b20b8856e"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Linux/index.html","517a4412377860f5a3947ed65af67dca"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Linux基本命令/index.html","dbde75444b32207de8a94eccff9fa00b"],["C:/Users/高冷的男神/Desktop/blog/public/tags/TCP/index.html","15989eb2a70bd23b1760eec4f55f330e"],["C:/Users/高冷的男神/Desktop/blog/public/tags/ViscualC-6-0工具/index.html","04466b806af06c76cb4da84ea6c17a52"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Vmware15/index.html","5098c485a0ead4b6f040a471ae0ec716"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Win系统安装/index.html","e2024f8197f746bf025da4308d822dfa"],["C:/Users/高冷的男神/Desktop/blog/public/tags/butterfly/index.html","cdf0c4d2483a72306da15b97b6d9b7c3"],["C:/Users/高冷的男神/Desktop/blog/public/tags/idea全家桶激活码/index.html","0c6186dcb590f4ec3fc0ea08743273e9"],["C:/Users/高冷的男神/Desktop/blog/public/tags/index.html","f3e0c93ab7d1393ace9d43db236bbf0a"],["C:/Users/高冷的男神/Desktop/blog/public/tags/office/index.html","6d2b83ae41428011d381aace30c94782"],["C:/Users/高冷的男神/Desktop/blog/public/tags/ssh/index.html","2ccf2c79991f7979942d419900127871"],["C:/Users/高冷的男神/Desktop/blog/public/tags/tomcat/index.html","453150595b4e2faea262c9f1181ebca4"],["C:/Users/高冷的男神/Desktop/blog/public/tags/令牌/index.html","402ad90c01258fbf995c48c4cfa1241e"],["C:/Users/高冷的男神/Desktop/blog/public/tags/公钥/index.html","3ba84181841baba38ad1c2a07502dcab"],["C:/Users/高冷的男神/Desktop/blog/public/tags/分类（categories）/index.html","2b5892120726f1ad2a775fe172b5c9ff"],["C:/Users/高冷的男神/Desktop/blog/public/tags/反射/index.html","dc0b1dcc8c92c52d281411e3fdfdca4c"],["C:/Users/高冷的男神/Desktop/blog/public/tags/多线程/index.html","00b6cb0f959b4d4dfa3c4b31da808baf"],["C:/Users/高冷的男神/Desktop/blog/public/tags/数据类型/index.html","ead939076cad0af18b65148c256125da"],["C:/Users/高冷的男神/Desktop/blog/public/tags/枚举/index.html","9fc84569fa89b2211dbe295482882fcd"],["C:/Users/高冷的男神/Desktop/blog/public/tags/标签（tags）/index.html","107e5cb04aa6cf43e9ea990996d93e5f"],["C:/Users/高冷的男神/Desktop/blog/public/tags/标识符/index.html","4241e6b413ac2438078dfa376bb00e17"],["C:/Users/高冷的男神/Desktop/blog/public/tags/汉化/index.html","af038dc10ae3369d6cc276a405b16703"],["C:/Users/高冷的男神/Desktop/blog/public/tags/注解/index.html","2035b82a18b814154c83fc68465bc923"],["C:/Users/高冷的男神/Desktop/blog/public/tags/看板娘/index.html","5484641d0044b2ec8ab1513c8b6b88e4"],["C:/Users/高冷的男神/Desktop/blog/public/tags/端口冲突/index.html","46ac4a80e8c520f88e73619d184930e3"],["C:/Users/高冷的男神/Desktop/blog/public/tags/系统激活/index.html","9d611dcb3533829b86de570b794c8916"],["C:/Users/高冷的男神/Desktop/blog/public/tags/网络编程/index.html","b50382716c458031079bc5f29d19439d"],["C:/Users/高冷的男神/Desktop/blog/public/tags/网络通讯/index.html","736dbaf17ad40309170d82676168bd9e"],["C:/Users/高冷的男神/Desktop/blog/public/tags/部署/index.html","327be5c197d955c46c493cd8d434e726"],["C:/Users/高冷的男神/Desktop/blog/public/tags/铭飞cms/index.html","9cecf46668ce28095440a2e3bb0e6a97"],["C:/Users/高冷的男神/Desktop/blog/public/tags/防火墙/index.html","4e0a6159486065ef0efe447283a08d5a"],["C:/Users/高冷的男神/Desktop/blog/public/tags/随笔/index.html","bef1da54f20c558c2fb1cdcce6b83e49"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
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

var createCacheKey = function(originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
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







