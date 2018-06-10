(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{299:function(e,l,t){"use strict";t.r(l);var n=t(0);l.default=n.createElement("div",{className:"markdown-body"},n.createElement("div",null,n.createElement("h1",null,"Build"),n.createElement("p",null,"You can control build behaviors."),n.createElement("h2",null,"pipeConfig"),n.createElement("p",null,"Change webpack config by using ",n.createElement("code",null,"pipeConfig"),":"),n.createElement("pre",null,n.createElement("code",{className:"language-typescript"},n.createElement("span",{className:"hljs-keyword"},"import")," ","{"," pri ","}"," ",n.createElement("span",{className:"hljs-keyword"},"from")," ",n.createElement("span",{className:"hljs-string"},"'pri'"),";","\n","\n",n.createElement("span",{className:"hljs-keyword"},"export")," ",n.createElement("span",{className:"hljs-keyword"},"default")," (instance: ",n.createElement("span",{className:"hljs-keyword"},"typeof")," pri) => ","{","\n","  ","instance.build.pipeConfig(",n.createElement("span",{className:"hljs-function"},"(",n.createElement("span",{className:"hljs-params"},"env, config"),") =>")," ","{","\n","    ",n.createElement("span",{className:"hljs-keyword"},"return")," ","{","\n","      ","...config","\n","      ",n.createElement("span",{className:"hljs-comment"},"// your custom options.."),"\n","    ","}",";","\n","  ","}",");","\n","}",";","\n")),n.createElement("h2",null,"Other configuration modification"),n.createElement("p",null,"Some times, we want to modified some loader’s options instead of the hold config, so we provide some other methods to do this."),n.createElement("h3",null,"pipeStyleLoaderOptions"),n.createElement("p",null,n.createElement("code",null,".build.pipeStyleLoaderOptions")," allow you to modify the options of ",n.createElement("code",null,"style-loader"),"."),n.createElement("p",null,"For example:"),n.createElement("pre",null,n.createElement("code",{className:"language-typescript"},n.createElement("span",{className:"hljs-keyword"},"import")," ","{"," pri ","}"," ",n.createElement("span",{className:"hljs-keyword"},"from")," ",n.createElement("span",{className:"hljs-string"},"'pri'"),";","\n","\n",n.createElement("span",{className:"hljs-keyword"},"export")," ",n.createElement("span",{className:"hljs-keyword"},"default")," (instance: ",n.createElement("span",{className:"hljs-keyword"},"typeof")," pri) => ","{","\n","  ","instance.build.pipeStyleLoaderOptions(",n.createElement("span",{className:"hljs-function"},"(",n.createElement("span",{className:"hljs-params"},"env, options"),") =>")," ","{","\n","    ",n.createElement("span",{className:"hljs-keyword"},"return")," ","{","\n","      ","...options","\n","      ",n.createElement("span",{className:"hljs-comment"},"// your custom options.."),"\n","    ","}",";","\n","  ","}",");","\n","}",";","\n")),n.createElement("h3",null,"pipeCssLoaderOptions"),n.createElement("p",null,n.createElement("code",null,".build.pipeCssLoaderOptions")," allow you to modify the options of ",n.createElement("code",null,"css-loader"),"."),n.createElement("h3",null,"pipeSassLoaderOptions"),n.createElement("p",null,n.createElement("code",null,".build.pipeSassLoaderOptions")," allow you to modify the options of ",n.createElement("code",null,"sass-loader"),"."),n.createElement("h3",null,"pipeLessLoaderOptions"),n.createElement("p",null,n.createElement("code",null,".build.pipeLessLoaderOptions")," allow you to modify the options of ",n.createElement("code",null,"less-loader"),"."),n.createElement("h3",null,"pipeBabelLoaderOptions"),n.createElement("p",null,n.createElement("code",null,".build.pipeBabelLoaderOptions")," allow you to modify the options of ",n.createElement("code",null,"babel-loader"),"."),n.createElement("h3",null,"pipeTsLoaderOptions"),n.createElement("p",null,n.createElement("code",null,".build.pipeTsLoaderOptions")," allow you to modify the options of ",n.createElement("code",null,"ts-loader"),"."),n.createElement("h3",null,"pipeTsInclude"),n.createElement("p",null,n.createElement("code",null,".build.pipeTsInclude")," allow you to modify the ",n.createElement("code",null,"include")," setting for ts files."),n.createElement("p",null,"For example:"),n.createElement("pre",null,n.createElement("code",{className:"language-typescript"},n.createElement("span",{className:"hljs-keyword"},"import")," ","{"," pri ","}"," ",n.createElement("span",{className:"hljs-keyword"},"from")," ",n.createElement("span",{className:"hljs-string"},"'pri'"),";","\n","\n",n.createElement("span",{className:"hljs-keyword"},"export")," ",n.createElement("span",{className:"hljs-keyword"},"default")," (instance: ",n.createElement("span",{className:"hljs-keyword"},"typeof")," pri) => ","{","\n","  ","instance.build.pipeTsInclude(",n.createElement("span",{className:"hljs-function"},"(",n.createElement("span",{className:"hljs-params"},"env, includePaths"),") =>")," ","{","\n","    ",n.createElement("span",{className:"hljs-keyword"},"return")," [","\n","      ","...includePaths","\n","      ",n.createElement("span",{className:"hljs-string"},"'some/path/'"),"\n","    ","];","\n","  ","}",");","\n","}",";","\n")),n.createElement("h3",null,"pipeSassInclude"),n.createElement("p",null,n.createElement("code",null,".build.pipeSassInclude")," allow you to modify the ",n.createElement("code",null,"include")," setting for scss files."),n.createElement("h3",null,"pipeLessInclude"),n.createElement("p",null,n.createElement("code",null,".build.pipeLessInclude")," allow you to modify the ",n.createElement("code",null,"include")," setting for essfiles."),n.createElement("h3",null,"pipeTsExclude"),n.createElement("p",null,n.createElement("code",null,".build.pipeTsExclude")," allow you to modify the ",n.createElement("code",null,"exclude")," setting for ts files."),n.createElement("h3",null,"pipeSassExclude"),n.createElement("p",null,n.createElement("code",null,".build.pipeSassExclude")," allow you to modify the ",n.createElement("code",null,"exclude")," setting for scss files."),n.createElement("h3",null,"pipeLessExclude"),n.createElement("p",null,n.createElement("code",null,".build.pipeLessExclude")," allow you to modify the ",n.createElement("code",null,"exclude")," setting for essfiles."),n.createElement("h2",null,"afterProdBuild"),n.createElement("p",null,"You can assets all the chunk file list or get caches after prod build by using ",n.createElement("code",null,"afterProdBuild"),". For example:"),n.createElement("pre",null,n.createElement("code",{className:"language-typescript"},n.createElement("span",{className:"hljs-keyword"},"import")," ","{"," pri ","}"," ",n.createElement("span",{className:"hljs-keyword"},"from")," ",n.createElement("span",{className:"hljs-string"},"'pri'"),";","\n","\n",n.createElement("span",{className:"hljs-keyword"},"export")," ",n.createElement("span",{className:"hljs-keyword"},"default")," (instance: ",n.createElement("span",{className:"hljs-keyword"},"typeof")," pri) => ","{","\n","  ","instance.build.afterProdBuild(",n.createElement("span",{className:"hljs-function"},n.createElement("span",{className:"hljs-params"},"stats")," =>")," ","{","\n","    ",n.createElement("span",{className:"hljs-built_in"},"console"),".log(stats.hash); ",n.createElement("span",{className:"hljs-comment"},"// Get hash name."),"\n","    ",n.createElement("span",{className:"hljs-built_in"},"console"),".log(stats.assetsByChunkName); ",n.createElement("span",{className:"hljs-comment"},"// Get thunks list."),"\n","  ","}",");","\n","}",";","\n")),n.createElement("p",null,"For more about ",n.createElement("code",null,"stats"),", please see ",n.createElement("a",{href:"https://webpack.js.org/api/stats/#structure"},"webpack docs"),"."),n.createElement("h2",null,"pipeDevDllList"),n.createElement("p",null,"You can modify dlls list while running ",n.createElement("code",null,"npm start"),":"),n.createElement("pre",null,n.createElement("code",{className:"language-typescript"},n.createElement("span",{className:"hljs-keyword"},"import")," ","{"," pri ","}"," ",n.createElement("span",{className:"hljs-keyword"},"from")," ",n.createElement("span",{className:"hljs-string"},"'pri'"),";","\n","\n",n.createElement("span",{className:"hljs-keyword"},"export")," ",n.createElement("span",{className:"hljs-keyword"},"default")," (instance: ",n.createElement("span",{className:"hljs-keyword"},"typeof")," pri) => ","{","\n","  ","instance.build.pipeDevDllList(",n.createElement("span",{className:"hljs-function"},n.createElement("span",{className:"hljs-params"},"list")," =>")," ","{","\n","    ","list.push(",n.createElement("span",{className:"hljs-string"},"'moment'"),");","\n","    ",n.createElement("span",{className:"hljs-keyword"},"return")," list;","\n","  ","}",");","\n","}",";","\n"))))}}]);