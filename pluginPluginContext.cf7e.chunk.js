(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{178:function(n,s){n.exports='\n                  <div class="markdown-body">\n                    <h1>Context</h1>\n<p>Using <code>.context</code> can help you share data between plugins.</p>\n<p>For example, <code>pri-plugin-login</code> get user info, and <code>pri-plugin-track</code> want to get it.</p>\n<h2>pipe</h2>\n<p><strong><code>pri-plugin-login/src/index.tsx</code></strong></p>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> { pri } <span class="hljs-keyword">from</span> <span class="hljs-string">"pri"</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> (instance: <span class="hljs-keyword">typeof</span> pri) =&gt; {\n  <span class="hljs-keyword">const</span> currentUser = getCurrentUser() <span class="hljs-comment">// You can also cache user information in some files.</span>\n\n  instance.context.pipe(<span class="hljs-function"><span class="hljs-params">context</span> =&gt;</span> {\n    ...context,\n    currentUser\n  })\n}\n</code></pre>\n<h2>get</h2>\n<p><strong><code>pri-plugin-track/src/index.tsx</code></strong></p>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> { pri } <span class="hljs-keyword">from</span> <span class="hljs-string">"pri"</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> (instance: <span class="hljs-keyword">typeof</span> pri) =&gt; {\n  instance.context.get().currentUser\n}\n</code></pre>\n<p>Don’t forget to set dependence in <code>pri-plugin-track/package.json</code>:</p>\n<pre><code class="language-json">"pri": {\n  "dependencies": [\n    "pri-plugin-login"\n  ]\n}\n</code></pre>\n\n                  </div>\n              '}}]);