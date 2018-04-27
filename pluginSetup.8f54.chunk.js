(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{167:function(e,l,n){"use strict";n.r(l);var t=n(0);l.default=t.createElement("div",{className:"markdown-body"},t.createElement("div",null,t.createElement("h1",null,"Plugin setup"),t.createElement("p",null,"It’s easy to expand the commander, analyse project files, and modifying the generated entry file by plugins."),t.createElement("h2",null,"Install"),t.createElement("p",null,"First, create an empty folder:"),t.createElement("pre",null,t.createElement("code",{className:"language-bash"},"mkdir ",t.createElement("span",{className:"hljs-built_in"},"test"),"; ",t.createElement("span",{className:"hljs-built_in"},"cd")," ",t.createElement("span",{className:"hljs-built_in"},"test"),"\n","npm init","\n","npm install pri","\n")),t.createElement("p",null,"Then, init the pri plugin:"),t.createElement("pre",null,t.createElement("code",{className:"language-bash"},"npx pri plugin-init","\n")),t.createElement("p",null,"No ",t.createElement("code",null,"npx"),"? Run ",t.createElement("code",null,"./node_modules/.bin/pri plugin-init")),t.createElement("h2",null,"Plug-in loading mode"),t.createElement("p",null,"All the pri-plugin should be named like ",t.createElement("code",null,"pri-plugin-*")," or ",t.createElement("code",null,"@ali/pri-plugin-*"),", for example:"),t.createElement("ul",null,t.createElement("li",null,t.createElement("code",null,"pri-plugin-test")),t.createElement("li",null,t.createElement("code",null,"pri-plugin-command-deploy"))),t.createElement("p",null,"And when you installed ",t.createElement("code",null,"pri"),", ",t.createElement("code",null,"pri-plugin-test")," at the same time in your project , the plug-in will be automatically loaded when any ",t.createElement("code",null,"pri")," scripts are executed."),t.createElement("blockquote",null,t.createElement("p",null,"You can also install pri-plugins in pri-plugin! This is a way to merge plug-in.")),t.createElement("h2",null,"Debug plug-in"),t.createElement("p",null,"Change your npm path from project ",t.createElement("code",null,"package.json"),":"),t.createElement("pre",null,t.createElement("code",{className:"language-json"},"{","\n","  ",t.createElement("span",{className:"hljs-attr"},'"dependencies"'),": ","{","\n","    ",t.createElement("span",{className:"hljs-attr"},'"pri"'),": ",t.createElement("span",{className:"hljs-string"},'"*"'),",","\n","    ",t.createElement("span",{className:"hljs-attr"},'"pri-plugin-test"'),": ",t.createElement("span",{className:"hljs-string"},'"^1.0.0"'),"\n","  ","}","\n","}","\n")),t.createElement("p",null,"To"),t.createElement("pre",null,t.createElement("code",{className:"language-json"},"{","\n","  ",t.createElement("span",{className:"hljs-attr"},'"dependencies"'),": ","{","\n","    ",t.createElement("span",{className:"hljs-attr"},'"pri"'),": ",t.createElement("span",{className:"hljs-string"},'"*"'),",","\n","    ",t.createElement("span",{className:"hljs-attr"},'"pri-plugin-test"'),": ",t.createElement("span",{className:"hljs-string"},'"file:../pri-plugin-test"'),"\n","  ","}","\n","}","\n")),t.createElement("p",null,"And run ",t.createElement("code",null,"npm start")," in plugin root.")))}}]);