(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{318:function(e,l,a){"use strict";a.r(l);var n=a(0);l.default=n.createElement("div",{className:"markdown-body"},n.createElement("div",null,n.createElement("h1",null,"Deploy to github pages"),n.createElement("p",null,"Set up ",n.createElement("code",null,"publicPath"),", ",n.createElement("code",null,"baseHref")," in the ",n.createElement("strong",null,"Custom config"),"."),n.createElement("pre",null,n.createElement("code",{className:"language-typescript"},n.createElement("span",{className:"hljs-keyword"},"import")," ","{"," ProjectConfig ","}"," ",n.createElement("span",{className:"hljs-keyword"},"from")," ",n.createElement("span",{className:"hljs-string"},"'pri/client'"),";","\n","\n",n.createElement("span",{className:"hljs-keyword"},"export")," ",n.createElement("span",{className:"hljs-keyword"},"default")," ","{","\n","  ",n.createElement("span",{className:"hljs-attr"},"publicPath"),": ",n.createElement("span",{className:"hljs-string"},"'/<your-repo-name>'"),",","\n","  ",n.createElement("span",{className:"hljs-attr"},"baseHref"),": ",n.createElement("span",{className:"hljs-string"},"'/<your-repo-name>'"),"\n","}"," ",n.createElement("span",{className:"hljs-keyword"},"as")," ProjectConfig;","\n")),n.createElement("p",null,"Then, execute ",n.createElement("code",null,"npm i gh-pages --save-dev"),", and add npm scripts:"),n.createElement("pre",null,n.createElement("code",{className:"language-json"},'"deploy": "pri build && gh-pages -d dist"',"\n")),n.createElement("p",null,"Finally, execute ",n.createElement("code",null,"npm run deploy"),"!"),n.createElement("blockquote",null,n.createElement("p",null,"This is because js files will be served from ",n.createElement("code",null,"/<your-repo-name>")," and the root path changed to ",n.createElement("code",null,"/<your-repo-name>")," on github-pages."))))}}]);