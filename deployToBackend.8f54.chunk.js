(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{152:function(e,a,t){"use strict";t.r(a);var l=t(0);a.default=l.createElement("div",{className:"markdown-body"},l.createElement("div",null,l.createElement("h1",null,"Deploy to backend"),l.createElement("p",null,"If the HTML page is controlled by the backend, you need to adjust the output name of ",l.createElement("code",null,"js")," and ",l.createElement("code",null,"css"),", and the output ",l.createElement("code",null,"html")," will be ignored."),l.createElement("p",null,"For example, here is a fixed template response:"),l.createElement("pre",null,l.createElement("code",{className:"language-html"},l.createElement("span",{className:"hljs-tag"},"<",l.createElement("span",{className:"hljs-name"},"link")," ",l.createElement("span",{className:"hljs-attr"},"href"),"=",l.createElement("span",{className:"hljs-string"},'"https://cdn.demo.com/app/static/bundle.css"'),">"),"\n",l.createElement("span",{className:"hljs-tag"},"<",l.createElement("span",{className:"hljs-name"},"script")," ",l.createElement("span",{className:"hljs-attr"},"src"),"=",l.createElement("span",{className:"hljs-string"},'"https://cdn.demo.com/app/static/bundle.js"'),">"),l.createElement("span",{className:"undefined"}),l.createElement("span",{className:"hljs-tag"},"</",l.createElement("span",{className:"hljs-name"},"script"),">"),"\n")),l.createElement("p",null,"and when publish, if files in ",l.createElement("code",null,"build")," will upload to ",l.createElement("code",null,"https://cdn.demo.com/app")," path, we should use ",l.createElement("strong",null,l.createElement("code",null,"distDir"))," + ",l.createElement("strong",null,l.createElement("code",null,"outFileName"))," to fit this path."),l.createElement("p",null,"You can set ",l.createElement("strong",null,l.createElement("code",null,"./config/config.prod.ts")),":"),l.createElement("pre",null,l.createElement("code",{className:"language-typescript"},l.createElement("span",{className:"hljs-keyword"},"import")," ","{"," ProjectConfig ","}"," ",l.createElement("span",{className:"hljs-keyword"},"from")," ",l.createElement("span",{className:"hljs-string"},"'pri'"),";","\n","\n",l.createElement("span",{className:"hljs-keyword"},"export")," ",l.createElement("span",{className:"hljs-keyword"},"default")," ","{","\n","  ",l.createElement("span",{className:"hljs-attr"},"distDir"),": ",l.createElement("span",{className:"hljs-string"},"'build/static'"),",","\n","  ",l.createElement("span",{className:"hljs-attr"},"outFileName"),": ",l.createElement("span",{className:"hljs-string"},"'bundle.js'"),",","\n","  ",l.createElement("span",{className:"hljs-attr"},"outCssFileName"),": ",l.createElement("span",{className:"hljs-string"},"'bundle.css'"),"\n","}"," ",l.createElement("span",{className:"hljs-keyword"},"as")," ProjectConfig;","\n"))))}}]);