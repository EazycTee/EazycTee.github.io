import{_ as t,c as e,a as s,e as a,o as n,r as p}from"./app.38d14d4e.js";const c="/assets/js-object-layout.wps.15ee3d80.jpg",j=JSON.parse('{"title":"图解 JavaScript 的对象设计、构造函数与原型链","description":"","frontmatter":{"title":"图解 JavaScript 的对象设计、构造函数与原型链","date":"2018-01-13T00:00:00.000Z","author":"Eazyc","tags":["programming"]},"headers":[{"level":2,"title":"Object.prototype","slug":"object-prototype","link":"#object-prototype","children":[]},{"level":2,"title":"Object.prototype.constructor","slug":"object-prototype-constructor","link":"#object-prototype-constructor","children":[]},{"level":2,"title":"Object.prototype.__proto__","slug":"object-prototype-proto","link":"#object-prototype-proto","children":[]}],"relativePath":"posts/2018/JavaScript-object-layout/index.md"}'),r={name:"posts/2018/JavaScript-object-layout/index.md"},l=a('<h1 id="图解-javascript-的对象设计、构造函数与原型链" tabindex="-1">图解 JavaScript 的对象设计、构造函数与原型链 <a class="header-anchor" href="#图解-javascript-的对象设计、构造函数与原型链" aria-hidden="true">#</a></h1><p>曾经迷惑于 js 的原型链问题，后来找了一张图—— <a href="http://www.mollypages.org/tutorials/js.mp" target="_blank" rel="noreferrer">JavaScript Object Layout</a>，事情马上就变得清晰开朗啦。根据原图，我补充了 constructor 的指向，挪动了里面一些元素的位置，把 <code>__proto__</code> 属性换成了 <code>Object.getPrototypeOf()</code> 方法，绘制出了下面的图：</p><p><img src="'+c+`" alt="js-object-layout"></p><h2 id="object-prototype" tabindex="-1"><code>Object.prototype</code> <a class="header-anchor" href="#object-prototype" aria-hidden="true">#</a></h2><p><code>Object.prototype</code> 是原型链的顶端，所有的对象都会继承它的属性和方法。</p><h2 id="object-prototype-constructor" tabindex="-1"><code>Object.prototype.constructor</code> <a class="header-anchor" href="#object-prototype-constructor" aria-hidden="true">#</a></h2><p>所有对象都继承了这个属性，属性值指向生成这个对象的构造函数，即 constructor。</p><p>所有函数（包括构造函数）的构造函数都是 Function （函数的构造函数），Function 的构造函数是它本身：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> Function </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> Function </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">Number</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> Function </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">Function</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> Function </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Foo</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">Foo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> Function </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre></div><h2 id="object-prototype-proto" tabindex="-1"><code>Object.prototype.__proto__</code> <a class="header-anchor" href="#object-prototype-proto" aria-hidden="true">#</a></h2><p>所有对象都继承了这个属性，属性值指向这个对象的原型（限于浏览器环境）。</p><p>其实，将 <code>__proto__</code> 的指向连接起来，就是 JavaScript 的原型链。</p><blockquote><p>注意：虽然 <code>__proto__</code> 在如今的浏览器环境中得到普遍支持，但直至今天它仍然没有完全标准化。想要获取一个对象的原型，建议使用 <code>Object.getPrototypeOf()</code> 方法。另外，也要尽量避免对 <code>__proto__</code> 赋值，而应该使用 <code>Object.create()</code> 方法来实现继承。</p></blockquote><hr><p>参考资料</p><ul><li><a href="http://www.mollypages.org/tutorials/js.mp" target="_blank" rel="noreferrer">JavaScript Object Layout</a> by Hursh Jain</li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" target="_blank" rel="noreferrer">MDN web docs - JavaScript Object</a></li></ul>`,16);function i(y,d,u,_,b,D){const o=p("Comment");return n(),e("div",null,[l,s(o)])}const C=t(r,[["render",i]]);export{j as __pageData,C as default};
