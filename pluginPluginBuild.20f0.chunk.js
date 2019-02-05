(("undefined"!=typeof self?self:this).webpackJsonp=("undefined"!=typeof self?self:this).webpackJsonp||[]).push([[3],{179:function(s,e){s.exports='\n                  <div class="markdown-body">\n                    <h1>Build</h1>\n<p>You can control build behaviors.</p>\n<h2>pipeConfig</h2>\n<p>Change webpack config by using <code>pipeConfig</code>:</p>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> { pri } <span class="hljs-keyword">from</span> <span class="hljs-string">\'pri\'</span>;\n\npri.build.pipeConfig(<span class="hljs-function"><span class="hljs-params">config</span> =&gt;</span> {\n  <span class="hljs-keyword">return</span> {\n    ...config\n    <span class="hljs-comment">// your custom options..</span>\n  };\n});\n</code></pre>\n<h2>pipeBundleConfig</h2>\n<p>Change webpack config when run <code>npm run bundle</code>. The same usage as <code>pipeConfig</code>.</p>\n<h2>Other configuration modification</h2>\n<p>Some times, we want to modified some loader’s options instead of the hold config, so we provide some other methods to do this.</p>\n<h3>pipeStyleLoaderOptions</h3>\n<p><code>.build.pipeStyleLoaderOptions</code> allow you to modify the options of <code>style-loader</code>.</p>\n<p>For example:</p>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> { pri } <span class="hljs-keyword">from</span> <span class="hljs-string">\'pri\'</span>;\n\npri.build.pipeStyleLoaderOptions(<span class="hljs-function"><span class="hljs-params">options</span> =&gt;</span> {\n  <span class="hljs-keyword">return</span> {\n    ...options\n    <span class="hljs-comment">// your custom options..</span>\n  };\n});\n</code></pre>\n<h3>pipeCssLoaderOptions</h3>\n<p><code>.build.pipeCssLoaderOptions</code> allow you to modify the options of <code>css-loader</code>.</p>\n<h3>pipeSassLoaderOptions</h3>\n<p><code>.build.pipeSassLoaderOptions</code> allow you to modify the options of <code>sass-loader</code>.</p>\n<h3>pipeLessLoaderOptions</h3>\n<p><code>.build.pipeLessLoaderOptions</code> allow you to modify the options of <code>less-loader</code>.</p>\n<h3>pipeBabelLoaderOptions</h3>\n<p><code>.build.pipeBabelLoaderOptions</code> allow you to modify the options of <code>babel-loader</code>.</p>\n<h3>pipeTsLoaderOptions</h3>\n<p><code>.build.pipeTsLoaderOptions</code> allow you to modify the options of <code>ts-loader</code>.</p>\n<h3>pipeTsInclude</h3>\n<p><code>.build.pipeTsInclude</code> allow you to modify the <code>include</code> setting for ts files.</p>\n<p>For example:</p>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> { pri } <span class="hljs-keyword">from</span> <span class="hljs-string">\'pri\'</span>;\n\npri.build.pipeTsInclude(<span class="hljs-function"><span class="hljs-params">includePaths</span> =&gt;</span> {\n  <span class="hljs-keyword">return</span> [\n    ...includePaths\n    <span class="hljs-string">\'some/path/\'</span>\n  ];\n});\n</code></pre>\n<h3>pipeSassInclude</h3>\n<p><code>.build.pipeSassInclude</code> allow you to modify the <code>include</code> setting for scss files.</p>\n<h3>pipeLessInclude</h3>\n<p><code>.build.pipeLessInclude</code> allow you to modify the <code>include</code> setting for essfiles.</p>\n<h3>pipeTsExclude</h3>\n<p><code>.build.pipeTsExclude</code> allow you to modify the <code>exclude</code> setting for ts files.</p>\n<h3>pipeSassExclude</h3>\n<p><code>.build.pipeSassExclude</code> allow you to modify the <code>exclude</code> setting for scss files.</p>\n<h3>pipeLessExclude</h3>\n<p><code>.build.pipeLessExclude</code> allow you to modify the <code>exclude</code> setting for essfiles.</p>\n<h2>afterProdBuild</h2>\n<p>You can assets all the chunk file list or get caches after prod build by using <code>afterProdBuild</code>. For example:</p>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> { pri } <span class="hljs-keyword">from</span> <span class="hljs-string">\'pri\'</span>;\n\npri.build.afterProdBuild(<span class="hljs-function"><span class="hljs-params">stats</span> =&gt;</span> {\n  <span class="hljs-built_in">console</span>.log(stats.hash); <span class="hljs-comment">// Get hash name.</span>\n  <span class="hljs-built_in">console</span>.log(stats.assetsByChunkName); <span class="hljs-comment">// Get thunks list.</span>\n});\n</code></pre>\n<p>For more about <code>stats</code>, please see <a href="https://webpack.js.org/api/stats/#structure">webpack docs</a>.</p>\n<h2>pipeDevDllList</h2>\n<p>You can modify dlls list while running <code>npm start</code>:</p>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> { pri } <span class="hljs-keyword">from</span> <span class="hljs-string">\'pri\'</span>;\n\npri.build.pipeDevDllList(<span class="hljs-function"><span class="hljs-params">list</span> =&gt;</span> {\n  list.push(<span class="hljs-string">\'moment\'</span>);\n  <span class="hljs-keyword">return</span> list;\n});\n</code></pre>\n\n                  </div>\n              '}}]);