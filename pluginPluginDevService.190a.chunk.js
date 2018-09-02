(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{214:function(n,s){n.exports='\n                  <div class="markdown-body">\n                    <h1>Dev Service</h1>\n<p>Use <code>.devService</code> to extend dev service in your plugin.</p>\n<p><strong><code>./src/index.tsx</code></strong></p>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> { pri } <span class="hljs-keyword">from</span> <span class="hljs-string">\'pri\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> (instance: <span class="hljs-keyword">typeof</span> pri) =&gt; {\n  instance.devService.on(<span class="hljs-string">\'createCard\'</span>, () =&gt; {\n    <span class="hljs-comment">// fs.writeFile ...</span>\n  });\n};\n</code></pre>\n<p>Every thing is done, you can add service socket api by using <code>devService.on</code>, then you can change project files or do anything you want!</p>\n\n                  </div>\n              '}}]);