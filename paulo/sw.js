if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let l={};const o=e=>n(e,a),u={module:{uri:a},exports:l,require:o};s[a]=Promise.all(i.map((e=>u[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"7b7571846cf73e7a7e7f722417846790"},{url:"assets/bot_1-BBsj2pSf.png",revision:null},{url:"assets/bot_2-BXjlqQG_.png",revision:null},{url:"assets/bot_3-Ba1kqyFn.png",revision:null},{url:"assets/bot_4-CHAUhyiT.png",revision:null},{url:"assets/bot_6-CMcndAIx.png",revision:null},{url:"assets/group-Daf3sxXH.png",revision:null},{url:"assets/index-eWc0QGv3.css",revision:null},{url:"assets/index-ZIcbVUCr.js",revision:null},{url:"assets/loading-FA2QPDcT.mp3",revision:null},{url:"assets/logo-6wQaHN_c.webp",revision:null},{url:"assets/message-Cw_HCFpH.mp3",revision:null},{url:"assets/player-DYUlI64K.png",revision:null},{url:"assets/video1-B9VgryyM.mp4",revision:null},{url:"favicon.ico",revision:"4296cdf14fc1a65e9616bf63e0fa385f"},{url:"index.html",revision:"1f468e6bd95458343f5060f2a6f4df65"},{url:"logo.webp",revision:"3d3bc344b5579d8d05c2ed3cbf36ac70"},{url:"maskable-icon-512x512.png",revision:"0e358eadf105f7ac188abd22229c1537"},{url:"pwa-192x192.png",revision:"1de9025b0c6a009bf6daf359aa8739fa"},{url:"pwa-512x512.png",revision:"e8786d641cfa6e0d3710adad328aa1af"},{url:"pwa-64x64.png",revision:"22d08a7fe9214678a0dfa9571bd2cbaa"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"pwa-64x64.png",revision:"22d08a7fe9214678a0dfa9571bd2cbaa"},{url:"pwa-192x192.png",revision:"1de9025b0c6a009bf6daf359aa8739fa"},{url:"pwa-512x512.png",revision:"e8786d641cfa6e0d3710adad328aa1af"},{url:"maskable-icon-512x512.png",revision:"0e358eadf105f7ac188abd22229c1537"},{url:"manifest.webmanifest",revision:"c3cefe3b9c0f1de2d8fb14711f82029b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
