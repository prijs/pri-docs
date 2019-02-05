(("undefined"!=typeof self?self:this).webpackJsonp=("undefined"!=typeof self?self:this).webpackJsonp||[]).push([[41],{142:function(s,a){s.exports='\n                  <div class="markdown-body">\n                    <h1>Test</h1>\n<p>Execute <code>npm test</code> in your project, and you will get a code coverage reporter!</p>\n<pre><code>.\n├── src\n├── tests             # Test files here\n│   ├── ui.tsx\n│   └── function.ts\n└── priconfig.json\n</code></pre>\n<h2>Write test</h2>\n<p>We use <a href="https://github.com/facebook/jest">jest</a> test runner. Create any file in <code>./tests</code>:</p>\n<p><strong><code>./tests/project.ts</code></strong></p>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> { shallow } <span class="hljs-keyword">from</span> <span class="hljs-string">\'enzyme\'</span>;\n\n<span class="hljs-keyword">const</span> Foo = <span class="hljs-function">(<span class="hljs-params">{ children }</span>) =&gt;</span> (\n  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"Foo"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"bar"</span>&gt;</span>bar<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    {children}\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"bar"</span>&gt;</span>bar<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n);\n\ntest(<span class="hljs-string">\'has a .Foo class name\'</span>, () =&gt; {\n  <span class="hljs-keyword">const</span> wrapper = shallow(<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Foo</span> /&gt;</span>);\n  expect(wrapper.hasClass(\'Foo\')).toBe(true);\n});\n</span></code></pre>\n\n                  </div>\n              '}}]);