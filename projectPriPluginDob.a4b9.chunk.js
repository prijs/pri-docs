(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{320:function(s,a){s.exports='\n                  <div class="markdown-body">\n                    <h1>pri-plugin-dob · <a href="https://www.npmjs.com/package/pri-plugin-dob"><img src="https://img.shields.io/npm/v/pri-plugin-dob.svg?style=flat-square" alt="npm version"></a></h1>\n<p><a href="https://github.com/dobjs/dob">dob</a> is a tool for monitoring object changes, and <a href="https://github.com/dobjs/dob-react">dob-react</a> can help you manage stores in react.</p>\n<p>We provide a pri-plugin for <a href="https://github.com/dobjs/dob">dob</a>!</p>\n<h2>Usage</h2>\n<pre><code class="language-bash">npm i pri-plugin-dob\n</code></pre>\n<h2>Features</h2>\n<ul>\n<li>Extend webui for store operates.</li>\n<li>Allow files in path <code>src/stores/**</code>, and automatic binding stores into entry.</li>\n</ul>\n<p>Let’s try it! For example, create a store named <code>application</code>:</p>\n<p><strong>src/stores/application.tsx</strong></p>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> { Action, inject, observable } <span class="hljs-keyword">from</span> <span class="hljs-string">\'dob\'</span>;\n\n@observable\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">ApplicationStore</span> </span>{\n  public testValue = <span class="hljs-number">1</span>;\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">ApplicationAction</span> </span>{\n  @inject(ApplicationStore) public applicationStore: ApplicationStore;\n\n  @Action\n  public test() {\n    <span class="hljs-keyword">this</span>.applicationStore.testValue++;\n  }\n}\n</code></pre>\n<p><code>pri-plugin-dob</code> will automatic create <code>pri/stores</code> for ts defintion, then you can use it like this:</p>\n<p><strong>src/pages/index.tsx</strong></p>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">\'react\'</span>;\n<span class="hljs-keyword">import</span> { stores } <span class="hljs-keyword">from</span> <span class="hljs-string">\'pri/stores\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">View</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">PureComponent</span>&lt;<span class="hljs-title">typeof</span> <span class="hljs-title">stores</span>, <span class="hljs-title">any</span>&gt; </span>{\n  render() {\n    <span class="hljs-comment">// this.props.ApplicationStore.testValue</span>\n    <span class="hljs-comment">// this.props.ApplicationAction.test()</span>\n  }\n}\n</code></pre>\n<p>For more skills about using dob in pri, please see <a href="https://github.com/dobjs/dob">dob docs</a>.</p>\n\n                  </div>\n              '}}]);