(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var ii,B,xd,yn,Zc,Sd,Id,Ad,Da,js,Us,Cd,$r={},Pd=[],Em=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,oi=Array.isArray;function mt(t,e){for(var n in e)t[n]=e[n];return t}function Oa(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function re(t,e,n){var r,i,o,s={};for(o in e)o=="key"?r=e[o]:o=="ref"?i=e[o]:s[o]=e[o];if(arguments.length>2&&(s.children=arguments.length>3?ii.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)s[o]===void 0&&(s[o]=t.defaultProps[o]);return Ir(t,s,r,i,null)}function Ir(t,e,n,r,i){var o={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++xd,__i:-1,__u:0};return i==null&&B.vnode!=null&&B.vnode(o),o}function Rd(){return{current:null}}function ce(t){return t.children}function ot(t,e){this.props=t,this.context=e}function er(t,e){if(e==null)return t.__?er(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?er(t):null}function Dd(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Dd(t)}}function zs(t){(!t.__d&&(t.__d=!0)&&yn.push(t)&&!Ji.__r++||Zc!=B.debounceRendering)&&((Zc=B.debounceRendering)||Sd)(Ji)}function Ji(){for(var t,e,n,r,i,o,s,a=1;yn.length;)yn.length>a&&yn.sort(Id),t=yn.shift(),a=yn.length,t.__d&&(n=void 0,r=void 0,i=(r=(e=t).__v).__e,o=[],s=[],e.__P&&((n=mt({},r)).__v=r.__v+1,B.vnode&&B.vnode(n),Na(e.__P,n,r,e.__n,e.__P.namespaceURI,32&r.__u?[i]:null,o,i??er(r),!!(32&r.__u),s),n.__v=r.__v,n.__.__k[n.__i]=n,Md(o,n,s),r.__e=r.__=null,n.__e!=i&&Dd(n)));Ji.__r=0}function Od(t,e,n,r,i,o,s,a,c,l,d){var u,h,y,E,S,k,x,T=r&&r.__k||Pd,I=e.length;for(c=Tm(n,e,T,c,I),u=0;u<I;u++)(y=n.__k[u])!=null&&(h=y.__i==-1?$r:T[y.__i]||$r,y.__i=u,k=Na(t,y,h,i,o,s,a,c,l,d),E=y.__e,y.ref&&h.ref!=y.ref&&(h.ref&&Ma(h.ref,null,y),d.push(y.ref,y.__c||E,y)),S==null&&E!=null&&(S=E),(x=!!(4&y.__u))||h.__k===y.__k?c=Nd(y,c,t,x):typeof y.type=="function"&&k!==void 0?c=k:E&&(c=E.nextSibling),y.__u&=-7);return n.__e=S,c}function Tm(t,e,n,r,i){var o,s,a,c,l,d=n.length,u=d,h=0;for(t.__k=new Array(i),o=0;o<i;o++)(s=e[o])!=null&&typeof s!="boolean"&&typeof s!="function"?(c=o+h,(s=t.__k[o]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?Ir(null,s,null,null,null):oi(s)?Ir(ce,{children:s},null,null,null):s.constructor==null&&s.__b>0?Ir(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=t,s.__b=t.__b+1,a=null,(l=s.__i=xm(s,n,c,u))!=-1&&(u--,(a=n[l])&&(a.__u|=2)),a==null||a.__v==null?(l==-1&&(i>d?h--:i<d&&h++),typeof s.type!="function"&&(s.__u|=4)):l!=c&&(l==c-1?h--:l==c+1?h++:(l>c?h--:h++,s.__u|=4))):t.__k[o]=null;if(u)for(o=0;o<d;o++)(a=n[o])!=null&&(2&a.__u)==0&&(a.__e==r&&(r=er(a)),Vd(a,a));return r}function Nd(t,e,n,r){var i,o;if(typeof t.type=="function"){for(i=t.__k,o=0;i&&o<i.length;o++)i[o]&&(i[o].__=t,e=Nd(i[o],e,n,r));return e}t.__e!=e&&(r&&(e&&t.type&&!e.parentNode&&(e=er(t)),n.insertBefore(t.__e,e||null)),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function yt(t,e){return e=e||[],t==null||typeof t=="boolean"||(oi(t)?t.some(function(n){yt(n,e)}):e.push(t)),e}function xm(t,e,n,r){var i,o,s,a=t.key,c=t.type,l=e[n],d=l!=null&&(2&l.__u)==0;if(l===null&&t.key==null||d&&a==l.key&&c==l.type)return n;if(r>(d?1:0)){for(i=n-1,o=n+1;i>=0||o<e.length;)if((l=e[s=i>=0?i--:o++])!=null&&(2&l.__u)==0&&a==l.key&&c==l.type)return s}return-1}function el(t,e,n){e[0]=="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||Em.test(e)?n:n+"px"}function Ci(t,e,n,r,i){var o,s;e:if(e=="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||el(t.style,e,"");if(n)for(e in n)r&&n[e]==r[e]||el(t.style,e,n[e])}else if(e[0]=="o"&&e[1]=="n")o=e!=(e=e.replace(Ad,"$1")),s=e.toLowerCase(),e=s in t||e=="onFocusOut"||e=="onFocusIn"?s.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?r?n.u=r.u:(n.u=Da,t.addEventListener(e,o?Us:js,o)):t.removeEventListener(e,o?Us:js,o);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&n==1?"":n))}}function tl(t){return function(e){if(this.l){var n=this.l[e.type+t];if(e.t==null)e.t=Da++;else if(e.t<n.u)return;return n(B.event?B.event(e):e)}}}function Na(t,e,n,r,i,o,s,a,c,l){var d,u,h,y,E,S,k,x,T,I,C,P,R,g,p,m,v,b=e.type;if(e.constructor!=null)return null;128&n.__u&&(c=!!(32&n.__u),o=[a=e.__e=n.__e]),(d=B.__b)&&d(e);e:if(typeof b=="function")try{if(x=e.props,T="prototype"in b&&b.prototype.render,I=(d=b.contextType)&&r[d.__c],C=d?I?I.props.value:d.__:r,n.__c?k=(u=e.__c=n.__c).__=u.__E:(T?e.__c=u=new b(x,C):(e.__c=u=new ot(x,C),u.constructor=b,u.render=Im),I&&I.sub(u),u.props=x,u.state||(u.state={}),u.context=C,u.__n=r,h=u.__d=!0,u.__h=[],u._sb=[]),T&&u.__s==null&&(u.__s=u.state),T&&b.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=mt({},u.__s)),mt(u.__s,b.getDerivedStateFromProps(x,u.__s))),y=u.props,E=u.state,u.__v=e,h)T&&b.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),T&&u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(T&&b.getDerivedStateFromProps==null&&x!==y&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(x,C),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(x,u.__s,C)===!1||e.__v==n.__v){for(e.__v!=n.__v&&(u.props=x,u.state=u.__s,u.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.some(function(w){w&&(w.__=e)}),P=0;P<u._sb.length;P++)u.__h.push(u._sb[P]);u._sb=[],u.__h.length&&s.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(x,u.__s,C),T&&u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(y,E,S)})}if(u.context=C,u.props=x,u.__P=t,u.__e=!1,R=B.__r,g=0,T){for(u.state=u.__s,u.__d=!1,R&&R(e),d=u.render(u.props,u.state,u.context),p=0;p<u._sb.length;p++)u.__h.push(u._sb[p]);u._sb=[]}else do u.__d=!1,R&&R(e),d=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++g<25);u.state=u.__s,u.getChildContext!=null&&(r=mt(mt({},r),u.getChildContext())),T&&!h&&u.getSnapshotBeforeUpdate!=null&&(S=u.getSnapshotBeforeUpdate(y,E)),m=d,d!=null&&d.type===ce&&d.key==null&&(m=Ld(d.props.children)),a=Od(t,oi(m)?m:[m],e,n,r,i,o,s,a,c,l),u.base=e.__e,e.__u&=-161,u.__h.length&&s.push(u),k&&(u.__E=u.__=null)}catch(w){if(e.__v=null,c||o!=null)if(w.then){for(e.__u|=c?160:128;a&&a.nodeType==8&&a.nextSibling;)a=a.nextSibling;o[o.indexOf(a)]=null,e.__e=a}else{for(v=o.length;v--;)Oa(o[v]);Bs(e)}else e.__e=n.__e,e.__k=n.__k,w.then||Bs(e);B.__e(w,e,n)}else o==null&&e.__v==n.__v?(e.__k=n.__k,e.__e=n.__e):a=e.__e=Sm(n.__e,e,n,r,i,o,s,c,l);return(d=B.diffed)&&d(e),128&e.__u?void 0:a}function Bs(t){t&&t.__c&&(t.__c.__e=!0),t&&t.__k&&t.__k.forEach(Bs)}function Md(t,e,n){for(var r=0;r<n.length;r++)Ma(n[r],n[++r],n[++r]);B.__c&&B.__c(e,t),t.some(function(i){try{t=i.__h,i.__h=[],t.some(function(o){o.call(i)})}catch(o){B.__e(o,i.__v)}})}function Ld(t){return typeof t!="object"||t==null||t.__b&&t.__b>0?t:oi(t)?t.map(Ld):mt({},t)}function Sm(t,e,n,r,i,o,s,a,c){var l,d,u,h,y,E,S,k=n.props,x=e.props,T=e.type;if(T=="svg"?i="http://www.w3.org/2000/svg":T=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),o!=null){for(l=0;l<o.length;l++)if((y=o[l])&&"setAttribute"in y==!!T&&(T?y.localName==T:y.nodeType==3)){t=y,o[l]=null;break}}if(t==null){if(T==null)return document.createTextNode(x);t=document.createElementNS(i,T,x.is&&x),a&&(B.__m&&B.__m(e,o),a=!1),o=null}if(T==null)k===x||a&&t.data==x||(t.data=x);else{if(o=o&&ii.call(t.childNodes),k=n.props||$r,!a&&o!=null)for(k={},l=0;l<t.attributes.length;l++)k[(y=t.attributes[l]).name]=y.value;for(l in k)if(y=k[l],l!="children"){if(l=="dangerouslySetInnerHTML")u=y;else if(!(l in x)){if(l=="value"&&"defaultValue"in x||l=="checked"&&"defaultChecked"in x)continue;Ci(t,l,null,y,i)}}for(l in x)y=x[l],l=="children"?h=y:l=="dangerouslySetInnerHTML"?d=y:l=="value"?E=y:l=="checked"?S=y:a&&typeof y!="function"||k[l]===y||Ci(t,l,y,k[l],i);if(d)a||u&&(d.__html==u.__html||d.__html==t.innerHTML)||(t.innerHTML=d.__html),e.__k=[];else if(u&&(t.innerHTML=""),Od(e.type=="template"?t.content:t,oi(h)?h:[h],e,n,r,T=="foreignObject"?"http://www.w3.org/1999/xhtml":i,o,s,o?o[0]:n.__k&&er(n,0),a,c),o!=null)for(l=o.length;l--;)Oa(o[l]);a||(l="value",T=="progress"&&E==null?t.removeAttribute("value"):E!=null&&(E!==t[l]||T=="progress"&&!E||T=="option"&&E!=k[l])&&Ci(t,l,E,k[l],i),l="checked",S!=null&&S!=t[l]&&Ci(t,l,S,k[l],i))}return t}function Ma(t,e,n){try{if(typeof t=="function"){var r=typeof t.__u=="function";r&&t.__u(),r&&e==null||(t.__u=t(e))}else t.current=e}catch(i){B.__e(i,n)}}function Vd(t,e,n){var r,i;if(B.unmount&&B.unmount(t),(r=t.ref)&&(r.current&&r.current!=t.__e||Ma(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){B.__e(o,e)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&Vd(r[i],e,n||typeof t.type!="function");n||Oa(t.__e),t.__c=t.__=t.__e=void 0}function Im(t,e,n){return this.constructor(t,n)}function tr(t,e,n){var r,i,o,s;e==document&&(e=document.documentElement),B.__&&B.__(t,e),i=(r=typeof n=="function")?null:n&&n.__k||e.__k,o=[],s=[],Na(e,t=(!r&&n||e).__k=re(ce,null,[t]),i||$r,$r,e.namespaceURI,!r&&n?[n]:i?null:e.firstChild?ii.call(e.childNodes):null,o,!r&&n?n:i?i.__e:e.firstChild,r,s),Md(o,t,s)}function Fd(t,e){tr(t,e,Fd)}function Am(t,e,n){var r,i,o,s,a=mt({},t.props);for(o in t.type&&t.type.defaultProps&&(s=t.type.defaultProps),e)o=="key"?r=e[o]:o=="ref"?i=e[o]:a[o]=e[o]===void 0&&s!=null?s[o]:e[o];return arguments.length>2&&(a.children=arguments.length>3?ii.call(arguments,2):n),Ir(t.type,a,r||t.key,i||t.ref,null)}function Je(t){function e(n){var r,i;return this.getChildContext||(r=new Set,(i={})[e.__c]=this,this.getChildContext=function(){return i},this.componentWillUnmount=function(){r=null},this.shouldComponentUpdate=function(o){this.props.value!=o.value&&r.forEach(function(s){s.__e=!0,zs(s)})},this.sub=function(o){r.add(o);var s=o.componentWillUnmount;o.componentWillUnmount=function(){r&&r.delete(o),s&&s.call(o)}}),n.children}return e.__c="__cC"+Cd++,e.__=t,e.Provider=e.__l=(e.Consumer=function(n,r){return n.children(r)}).contextType=e,e}ii=Pd.slice,B={__e:function(t,e,n,r){for(var i,o,s;e=e.__;)if((i=e.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(t)),s=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,r||{}),s=i.__d),s)return i.__E=i}catch(a){t=a}throw t}},xd=0,ot.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=mt({},this.state),typeof t=="function"&&(t=t(mt({},n),this.props)),t&&mt(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),zs(this))},ot.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),zs(this))},ot.prototype.render=ce,yn=[],Sd=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Id=function(t,e){return t.__v.__b-e.__v.__b},Ji.__r=0,Ad=/(PointerCapture)$|Capture$/i,Da=0,js=tl(!1),Us=tl(!0),Cd=0;var Cm=0;function _(t,e,n,r,i,o){e||(e={});var s,a,c=e;if("ref"in c)for(a in c={},e)a=="ref"?s=e[a]:c[a]=e[a];var l={type:t,props:c,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Cm,__i:-1,__u:0,__source:i,__self:o};if(typeof t=="function"&&(s=t.defaultProps))for(a in s)c[a]===void 0&&(c[a]=s[a]);return B.vnode&&B.vnode(l),l}let Ar;function La(t){return[...t.v,(t.i?"!":"")+t.n].join(":")}function Pm(t,e=","){return t.map(La).join(e)}let $d=typeof CSS<"u"&&CSS.escape||(t=>t.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function Xi(t){for(var e=9,n=t.length;n--;)e=Math.imul(e^t.charCodeAt(n),1597334677);return"#"+((e^e>>>9)>>>0).toString(36)}function Va(t,e="@media "){return e+se(t).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function se(t=[]){return Array.isArray(t)?t:t==null?[]:[t]}function nl(t){return t}function si(){}let Pe={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function jd(t){return t.match(/[-=:;]/g)?.length||0}function Ws(t){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(t)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(jd(t),15)<<18}let Rm=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function Fa({n:t,i:e,v:n=[]},r,i,o){t&&(t=La({n:t,i:e,v:n})),o=[...se(o)];for(let a of n){let c=r.theme("screens",a);for(let l of se(c&&Va(c)||r.v(a))){var s;o.push(l),i|=c?67108864|Ws(l):a=="dark"?1073741824:l[0]=="@"?Ws(l):(s=l,1<<~(/:([a-z-]+)/.test(s)&&~Rm.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:t,p:i,r:o,i:e}}let Ud=new Map;function Hs(t){if(t.d){let e=[],n=us(t.r.reduce((r,i)=>i[0]=="@"?(e.push(i),r):i?us(r,o=>us(i,s=>{let a=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(s);if(a){let c=o.indexOf(a[1]);return~c?o.slice(0,c)+a[0]+o.slice(c+a[1].length):ds(o,s)}return ds(s,o)})):r,"&"),r=>ds(r,t.n?"."+$d(t.n):""));return n&&e.push(n.replace(/:merge\((.+?)\)/g,"$1")),e.reduceRight((r,i)=>i+"{"+r+"}",t.d)}}function us(t,e){return t.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,i)=>e(r)+i)}function ds(t,e){return t.replace(/&/g,e)}let rl=new Intl.Collator("en",{numeric:!0});function zd(t,e){for(var n=0,r=t.length;n<r;){let i=r+n>>1;0>=Bd(t[i],e)?n=i+1:r=i}return r}function Bd(t,e){let n=t.p&Pe.o;return n==(e.p&Pe.o)&&(n==Pe.b||n==Pe.o)?0:t.p-e.p||t.o-e.o||rl.compare(il(t.n),il(e.n))||rl.compare(ol(t.n),ol(e.n))}function il(t){return(t||"").split(/:/).pop().split("/").pop()||"\0"}function ol(t){return(t||"").replace(/\W/g,e=>String.fromCharCode(127+e.charCodeAt(0)))+"\0"}function fs(t,e){return Math.round(parseInt(t,16)*e)}function rn(t,e={}){if(typeof t=="function")return t(e);let{opacityValue:n="1",opacityVariable:r}=e,i=r?`var(${r})`:n;if(t.includes("<alpha-value>"))return t.replace("<alpha-value>",i);if(t[0]=="#"&&(t.length==4||t.length==7)){let o=(t.length-1)/3,s=[17,1,.062272][o-1];return`rgba(${[fs(t.substr(1,o),s),fs(t.substr(1+o,o),s),fs(t.substr(1+2*o,o),s),i]})`}return i=="1"?t:i=="0"?"#0000":t.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${i})`)}function Wd(t,e,n,r,i=[]){return(function o(s,{n:a,p:c,r:l=[],i:d},u){let h=[],y="",E=0,S=0;for(let T in s||{}){var k,x;let I=s[T];if(T[0]=="@"){if(!I)continue;if(T[1]=="a"){h.push(...ja(a,c,Zi(""+I),u,c,l,d,!0));continue}if(T[1]=="l"){for(let C of se(I))h.push(...o(C,{n:a,p:(k=Pe[T[7]],c&-939524097|k),r:T[7]=="d"?[]:l,i:d},u));continue}if(T[1]=="i"){h.push(...se(I).map(C=>({p:-1,o:0,r:[],d:T+" "+C})));continue}if(T[1]=="k"){h.push({p:Pe.d,o:0,r:[T],d:o(I,{p:Pe.d},u).map(Hs).join("")});continue}if(T[1]=="f"){h.push(...se(I).map(C=>({p:Pe.d,o:0,r:[T],d:o(C,{p:Pe.d},u).map(Hs).join("")})));continue}}if(typeof I!="object"||Array.isArray(I))T=="label"&&I?a=I+Xi(JSON.stringify([c,d,s])):(I||I===0)&&(T=T.replace(/[A-Z]/g,C=>"-"+C.toLowerCase()),S+=1,E=Math.max(E,(x=T)[0]=="-"?0:jd(x)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(x)?+!!RegExp.$1||-!!RegExp.$2:0)+1),y+=(y?";":"")+se(I).map(C=>u.s(T,$a(""+C,u.theme)+(d?" !important":""))).join(";"));else if(T[0]=="@"||T.includes("&")){let C=c;T[0]=="@"&&(T=T.replace(/\bscreen\(([^)]+)\)/g,(P,R)=>{let g=u.theme("screens",R);return g?(C|=67108864,Va(g,"")):P}),C|=Ws(T)),h.push(...o(I,{n:a,p:C,r:[...l,T],i:d},u))}else h.push(...o(I,{p:c,r:[...l,T]},u))}return h.unshift({n:a,p:c,o:Math.max(0,15-S)+1.5*Math.min(E||15,15),r:l,d:y}),h.sort(Bd)})(t,Fa(e,n,r,i),n)}function $a(t,e){return t.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,i,o,s="")=>{let a=e(i,s);return typeof a=="function"&&/color|fill|stroke/i.test(i)?rn(a):""+se(a).filter(c=>Object(c)!==c)})}function Hd(t,e){let n,r=[];for(let i of t)i.d&&i.n?n?.p==i.p&&""+n.r==""+i.r?(n.c=[n.c,i.c].filter(Boolean).join(" "),n.d=n.d+";"+i.d):r.push(n={...i,n:i.n&&e}):r.push({...i,n:i.n&&e});return r}function Qi(t,e,n=Pe.u,r,i){let o=[];for(let s of t)for(let a of(function(c,l,d,u,h){c={...c,i:c.i||h};let y=(function(E,S){let k=Ud.get(E.n);return k?k(E,S):S.r(E.n,E.v[0]=="dark")})(c,l);return y?typeof y=="string"?({r:u,p:d}=Fa(c,l,d,u),Hd(Qi(Zi(y),l,d,u,c.i),c.n)):Array.isArray(y)?y.map(E=>{var S,k;return{o:0,...E,r:[...se(u),...se(E.r)],p:(S=d,k=E.p??d,S&-939524097|k)}}):Wd(y,c,l,d,u):[{c:La(c),p:0,o:0,r:[]}]})(s,e,n,r,i))o.splice(zd(o,a),0,a);return o}function ja(t,e,n,r,i,o,s,a){return Hd((a?n.flatMap(c=>Qi([c],r,i,o,s)):Qi(n,r,i,o,s)).map(c=>c.p&Pe.o&&(c.n||e==Pe.b)?{...c,p:c.p&-939524097|e,o:0}:c),t)}function Dm(t,e,n,r){var i;return i=(o,s)=>{let{n:a,p:c,r:l,i:d}=Fa(o,s,e);return n&&ja(a,e,n,s,c,l,d,r)},Ud.set(t,i),t}function hs(t,e,n){if(t[t.length-1]!="("){let r=[],i=!1,o=!1,s="";for(let a of t)if(!(a=="("||/[~@]$/.test(a))){if(a[0]=="!"&&(a=a.slice(1),i=!i),a.endsWith(":")){r[a=="dark:"?"unshift":"push"](a.slice(0,-1));continue}a[0]=="-"&&(a=a.slice(1),o=!o),a.endsWith("-")&&(a=a.slice(0,-1)),a&&a!="&"&&(s+=(s&&"-")+a)}s&&(o&&(s="-"+s),e[0].push({n:s,v:r.filter(Om),i}))}}function Om(t,e,n){return n.indexOf(t)==e}let sl=new Map;function Zi(t){let e=sl.get(t);if(!e){let n=[],r=[[]],i=0,o=0,s=null,a=0,c=(l,d=0)=>{i!=a&&(n.push(t.slice(i,a+d)),l&&hs(n,r)),i=a+1};for(;a<t.length;a++){let l=t[a];if(o)t[a-1]!="\\"&&(o+=+(l=="[")||-(l=="]"));else if(l=="[")o+=1;else if(s)t[a-1]!="\\"&&s.test(t.slice(a))&&(s=null,i=a+RegExp.lastMatch.length);else if(l=="/"&&t[a-1]!="\\"&&(t[a+1]=="*"||t[a+1]=="/"))s=t[a+1]=="*"?/^\*\//:/^[\r\n]/;else if(l=="(")c(),n.push(l);else if(l==":")t[a+1]!=":"&&c(!1,1);else if(/[\s,)]/.test(l)){c(!0);let d=n.lastIndexOf("(");if(l==")"){let u=n[d-1];if(/[~@]$/.test(u)){let h=r.shift();n.length=d,hs([...n,"#"],r);let{v:y}=r[0].pop();for(let E of h)E.v.splice(+(E.v[0]=="dark")-+(y[0]=="dark"),y.length);hs([...n,Dm(u.length>1?u.slice(0,-1)+Xi(JSON.stringify([u,h])):u+"("+Pm(h)+")",Pe.a,h,/@$/.test(u))],r)}d=n.lastIndexOf("(",d-1)}n.length=d+1}else/[~@]/.test(l)&&t[a+1]=="("&&r.unshift([])}c(!0),sl.set(t,e=r[0])}return e}function D(t,e,n){return[t,qs(e,n)]}function qs(t,e){return typeof t=="function"?t:typeof t=="string"&&/^[\w-]+$/.test(t)?((n,r)=>({[t]:e?e(n,r):Gs(n,1)})):n=>t||{[n[1]]:Gs(n,2)}}function Gs(t,e,n=t.slice(e).find(Boolean)||t.$$||t.input){return t.input[0]=="-"?`calc(${n} * -1)`:n}function O(t,e,n,r){return[t,Nm(e,n,r)]}function Nm(t,e,n){let r=typeof e=="string"?(i,o)=>({[e]:n?n(i,o):i._}):e||(({1:i,_:o},s,a)=>({[i||a]:o}));return(i,o)=>{let s=qd(t||i[1]),a=o.theme(s,i.$$)??on(i.$$,s,o);if(a!=null)return i._=Gs(i,0,a),r(i,o,s)}}function ve(t,e={},n){return[t,Mm(e,n)]}function Mm(t={},e){return(n,r)=>{let{section:i=qd(n[0]).replace("-","")+"Color"}=t,[o,s]=Lm(n.$$);if(!o)return;let a=r.theme(i,o)||on(o,i,r);if(!a||typeof a=="object")return;let{opacityVariable:c=`--tw-${n[0].replace(/-$/,"")}-opacity`,opacitySection:l=i.replace("Color","Opacity"),property:d=i,selector:u}=t,h=r.theme(l,s||"DEFAULT")||s&&on(s,l,r),y=e||(({_:S})=>{let k=zi(d,S);return u?{[u]:k}:k});n._={value:rn(a,{opacityVariable:c||void 0,opacityValue:h||void 0}),color:S=>rn(a,S),opacityVariable:c||void 0,opacityValue:h||void 0};let E=y(n,r);if(!n.dark){let S=r.d(i,o,a);S&&S!==a&&(n._={value:rn(S,{opacityVariable:c||void 0,opacityValue:h||"1"}),color:k=>rn(S,k),opacityVariable:c||void 0,opacityValue:h||void 0},E={"&":E,[r.v("dark")]:y(n,r)})}return E}}function Lm(t){return(t.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function zi(t,e){let n={};return typeof e=="string"?n[t]=e:(e.opacityVariable&&e.value.includes(e.opacityVariable)&&(n[e.opacityVariable]=e.opacityValue||"1"),n[t]=e.value),n}function on(t,e,n){if(t[0]=="["&&t.slice(-1)=="]"){if(t=jr($a(t.slice(1,-1),n.theme)),!e)return t;if(!(/color|fill|stroke/i.test(e)&&!(/^color:/.test(t)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(t))||/image/i.test(e)&&!(/^image:/.test(t)||/^[a-z-]+\(/.test(t))||/weight/i.test(e)&&!(/^(number|any):/.test(t)||/^\d+$/.test(t))||/position/i.test(e)&&/^(length|size):/.test(t)))return t.replace(/^[a-z-]+:/,"")}}function qd(t){return t.replace(/-./g,e=>e[1].toUpperCase())}function jr(t){return t.includes("url(")?t.replace(/(.*?)(url\(.*?\))(.*?)/g,(e,n="",r,i="")=>jr(n)+r+jr(i)):t.replace(/(^|[^\\])_+/g,(e,n)=>n+" ".repeat(e.length-n.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,e=>e.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}function Ua({presets:t=[],...e}){let n={darkMode:void 0,darkColor:void 0,preflight:e.preflight!==!1&&[],theme:{},variants:se(e.variants),rules:se(e.rules),ignorelist:se(e.ignorelist),hash:void 0,stringify:(r,i)=>r+":"+i,finalize:[]};for(let r of se([...t,{darkMode:e.darkMode,darkColor:e.darkColor,preflight:e.preflight!==!1&&se(e.preflight),theme:e.theme,hash:e.hash,stringify:e.stringify,finalize:e.finalize}])){let{preflight:i,darkMode:o=n.darkMode,darkColor:s=n.darkColor,theme:a,variants:c,rules:l,ignorelist:d,hash:u=n.hash,stringify:h=n.stringify,finalize:y}=typeof r=="function"?r(n):r;n={preflight:n.preflight!==!1&&i!==!1&&[...n.preflight,...se(i)],darkMode:o,darkColor:s,theme:{...n.theme,...a,extend:{...n.theme.extend,...a?.extend}},variants:[...n.variants,...se(c)],rules:[...n.rules,...se(l)],ignorelist:[...n.ignorelist,...se(d)],hash:u,stringify:h,finalize:[...n.finalize,...se(y)]}}return n}function al(t,e,n,r,i,o){for(let s of e){let a=n.get(s);a||n.set(s,a=r(s));let c=a(t,i,o);if(c)return c}}function Vm(t){var e;return Ks(t[0],typeof(e=t[1])=="function"?e:()=>e)}function Fm(t){var e,n;return Array.isArray(t)?Ks(t[0],qs(t[1],t[2])):Ks(t,qs(e,n))}function Ks(t,e){return Gd(t,(n,r,i,o)=>{let s=r.exec(n);if(s)return s.$$=n.slice(s[0].length),s.dark=o,e(s,i)})}function Gd(t,e){let n=se(t).map($m);return(r,i,o)=>{for(let s of n){let a=e(r,s,i,o);if(a)return a}}}function $m(t){return typeof t=="string"?RegExp("^"+t+(t.includes("$")||t.slice(-1)=="-"?"":"$")):t}function jm(t,e){let n=Ua(t),r=(function({theme:c,darkMode:l,darkColor:d=si,variants:u,rules:h,hash:y,stringify:E,ignorelist:S,finalize:k}){let x=new Map,T=new Map,I=new Map,C=new Map,P=Gd(S,(p,m)=>m.test(p));u.push(["dark",Array.isArray(l)||l=="class"?`${se(l)[1]||".dark"} &`:typeof l=="string"&&l!="media"?l:"@media (prefers-color-scheme:dark)"]);let R=typeof y=="function"?p=>y(p,Xi):y?Xi:nl;R!==nl&&k.push(p=>({...p,n:p.n&&R(p.n),d:p.d?.replace(/--(tw(?:-[\w-]+)?)\b/g,(m,v)=>"--"+R(v).replace("#",""))}));let g={theme:(function({extend:p={},...m}){let v={},b={get colors(){return w("colors")},theme:w,negative(){return{}},breakpoints(A){let N={};for(let V in A)typeof A[V]=="string"&&(N["screen-"+V]=A[V]);return N}};return w;function w(A,N,V,F){if(A){if({1:A,2:F}=/^(\S+?)(?:\s*\/\s*([^/]+))?$/.exec(A)||[,A],/[.[]/.test(A)){let J=[];A.replace(/\[([^\]]+)\]|([^.[]+)/g,(te,le,be=le)=>J.push(be)),A=J.shift(),V=N,N=J.join("-")}let L=v[A]||Object.assign(Object.assign(v[A]={},f(m,A)),f(p,A));if(N==null)return L;N||(N="DEFAULT");let Y=L[N]??N.split("-").reduce((J,te)=>J?.[te],L)??V;return F?rn(Y,{opacityValue:$a(F,w)}):Y}let G={};for(let L of[...Object.keys(m),...Object.keys(p)])G[L]=w(L);return G}function f(A,N){let V=A[N];return typeof V=="function"&&(V=V(b)),V&&/color|fill|stroke/i.test(N)?(function F(G,L=[]){let Y={};for(let J in G){let te=G[J],le=[...L,J];Y[le.join("-")]=te,J=="DEFAULT"&&(le=L,Y[L.join("-")]=te),typeof te=="object"&&Object.assign(Y,F(te,le))}return Y})(V):V}})(c),e:$d,h:R,s(p,m){return E(p,m,g)},d(p,m,v){return d(p,m,g,v)},v(p){return x.has(p)||x.set(p,al(p,u,T,Vm,g)||"&:"+p),x.get(p)},r(p,m){let v=JSON.stringify([p,m]);return I.has(v)||I.set(v,!P(p,g)&&al(p,h,C,Fm,g,m)),I.get(v)},f(p){return k.reduce((m,v)=>v(m,g),p)}};return g})(n),i=new Map,o=[],s=new Set;e.resume(c=>i.set(c,c),(c,l)=>{e.insert(c,o.length,l),o.push(l),s.add(c)});function a(c){let l=r.f(c),d=Hs(l);if(d&&!s.has(d)){s.add(d);let u=zd(o,c);e.insert(d,u,c),o.splice(u,0,c)}return l.n}return Object.defineProperties(function(l){if(!i.size)for(let u of se(n.preflight))typeof u=="function"&&(u=u(r)),u&&(typeof u=="string"?ja("",Pe.b,Zi(u),r,Pe.b,[],!1,!0):Wd(u,{},r,Pe.b)).forEach(a);l=""+l;let d=i.get(l);if(!d){let u=new Set;for(let h of Qi(Zi(l),r))u.add(h.c).add(a(h));d=[...u].filter(Boolean).join(" "),i.set(l,d).set(d,d)}return d},Object.getOwnPropertyDescriptors({get target(){return e.target},theme:r.theme,config:n,snapshot(){let c=e.snapshot(),l=new Set(s),d=new Map(i),u=[...o];return()=>{c(),s=l,i=d,o=u}},clear(){e.clear(),s=new Set,i=new Map,o=[]},destroy(){this.clear(),e.destroy()}}))}function Um(t,e){return t!=e&&""+t.split(" ").sort()!=""+e.split(" ").sort()}function zm(t){let e=new MutationObserver(n);return{observe(i){e.observe(i,{attributeFilter:["class"],subtree:!0,childList:!0}),r(i),n([{target:i,type:""}])},disconnect(){e.disconnect()}};function n(i){for(let{type:o,target:s}of i)if(o[0]=="a")r(s);else for(let a of s.querySelectorAll("[class]"))r(a);e.takeRecords()}function r(i){let o,s=i.getAttribute?.("class");s&&Um(s,o=t(s))&&i.setAttribute("class",o)}}function Bm(t=Ym,e=typeof document<"u"&&document.documentElement){if(e){let n=zm(t);n.observe(e);let{destroy:r}=t;t.destroy=()=>{n.disconnect(),r.call(t)}}return t}function Kd(t){let e=document.querySelector('style[data-twind=""]');return(!e||e.tagName!="STYLE")&&(e=document.createElement("style"),document.head.prepend(e)),e.dataset.twind="claimed",e}function Wm(t){let e=t?.cssRules?t:(t&&typeof t!="string"?t:Kd()).sheet;return{target:e,snapshot(){let n=Array.from(e.cssRules,r=>r.cssText);return()=>{this.clear(),n.forEach(this.insert)}},clear(){for(let n=e.cssRules.length;n--;)e.deleteRule(n)},destroy(){e.ownerNode?.remove()},insert(n,r){try{e.insertRule(n,r)}catch{e.insertRule(":root{}",r)}},resume:si}}function Hm(t){let e=t&&typeof t!="string"?t:Kd();return{target:e,snapshot(){let n=Array.from(e.childNodes,r=>r.textContent);return()=>{this.clear(),n.forEach(this.insert)}},clear(){e.textContent=""},destroy(){e.remove()},insert(n,r){e.insertBefore(document.createTextNode(n),e.childNodes[r]||null)},resume:si}}function qm(t){let e=[];return{target:e,snapshot(){let n=[...e];return()=>{e.splice(0,e.length,...n)}},clear(){e.length=0},destroy(){this.clear()},insert(n,r,i){e.splice(r,0,t?`/*!${i.p.toString(36)},${(2*i.o).toString(36)}${i.n?","+i.n:""}*/${n}`:n)},resume:si}}function Yd(t,e){let n=typeof document>"u"?qm(!e):t?Hm():Wm();return e||(n.resume=Km),n}function Gm(t){return(t.ownerNode||t).textContent||(t.cssRules?Array.from(t.cssRules,e=>e.cssText):se(t)).join("")}function Km(t,e){let n=Gm(this.target),r=/\/\*!([\da-z]+),([\da-z]+)(?:,(.+?))?\*\//g;if(r.test(n)){var i;let o;if(r.lastIndex=0,this.clear(),typeof document<"u")for(let s of document.querySelectorAll("[class]"))t(s.getAttribute("class"));for(;i=r.exec(n),o&&e(n.slice(o.index+o[0].length,i?.index),{p:parseInt(o[1],36),o:parseInt(o[2],36)/2,n:o[3]}),o=i;);}}let Ym=new Proxy(si,{apply(t,e,n){return Ar(n[0])},get(t,e){let n=Ar[e];return typeof n=="function"?function(){return n.apply(Ar,arguments)}:n}});function Jm(t={},e=Yd,n){return Ar?.destroy(),Ar=Bm(jm(t,typeof e=="function"?e():e),n)}function Xm(t,e=!0){let n=Ua(t);return Jm({...n,hash:n.hash??e},()=>Yd(!e))}function Qm(t,e=!0){return Xm(t,e)}var Nt,oe,ps,cl,nr=0,Jd=[],ae=B,ll=ae.__b,ul=ae.__r,dl=ae.diffed,fl=ae.__c,hl=ae.unmount,pl=ae.__;function On(t,e){ae.__h&&ae.__h(oe,t,nr||e),nr=0;var n=oe.__H||(oe.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function W(t){return nr=1,ai(Xd,t)}function ai(t,e,n){var r=On(Nt++,2);if(r.t=t,!r.__c&&(r.__=[n?n(e):Xd(void 0,e),function(a){var c=r.__N?r.__N[0]:r.__[0],l=r.t(c,a);c!==l&&(r.__N=[l,r.__[1]],r.__c.setState({}))}],r.__c=oe,!oe.__f)){var i=function(a,c,l){if(!r.__c.__H)return!0;var d=r.__c.__H.__.filter(function(h){return!!h.__c});if(d.every(function(h){return!h.__N}))return!o||o.call(this,a,c,l);var u=r.__c.props!==a;return d.forEach(function(h){if(h.__N){var y=h.__[0];h.__=h.__N,h.__N=void 0,y!==h.__[0]&&(u=!0)}}),o&&o.call(this,a,c,l)||u};oe.__f=!0;var o=oe.shouldComponentUpdate,s=oe.componentWillUpdate;oe.componentWillUpdate=function(a,c,l){if(this.__e){var d=o;o=void 0,i(a,c,l),o=d}s&&s.call(this,a,c,l)},oe.shouldComponentUpdate=i}return r.__N||r.__}function j(t,e){var n=On(Nt++,3);!ae.__s&&Wa(n.__H,e)&&(n.__=t,n.u=e,oe.__H.__h.push(n))}function dn(t,e){var n=On(Nt++,4);!ae.__s&&Wa(n.__H,e)&&(n.__=t,n.u=e,oe.__h.push(n))}function q(t){return nr=5,ee(function(){return{current:t}},[])}function za(t,e,n){nr=6,dn(function(){if(typeof t=="function"){var r=t(e());return function(){t(null),r&&typeof r=="function"&&r()}}if(t)return t.current=e(),function(){return t.current=null}},n==null?n:n.concat(t))}function ee(t,e){var n=On(Nt++,7);return Wa(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function H(t,e){return nr=8,ee(function(){return t},e)}function ze(t){var e=oe.context[t.__c],n=On(Nt++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(oe)),e.props.value):t.__}function Vo(t,e){ae.useDebugValue&&ae.useDebugValue(e?e(t):t)}function Zm(t){var e=On(Nt++,10),n=W();return e.__=t,oe.componentDidCatch||(oe.componentDidCatch=function(r,i){e.__&&e.__(r,i),n[1](r)}),[n[0],function(){n[1](void 0)}]}function Ba(){var t=On(Nt++,11);if(!t.__){for(var e=oe.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var n=e.__m||(e.__m=[0,0]);t.__="P"+n[0]+"-"+n[1]++}return t.__}function eg(){for(var t;t=Jd.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Bi),t.__H.__h.forEach(Ys),t.__H.__h=[]}catch(e){t.__H.__h=[],ae.__e(e,t.__v)}}ae.__b=function(t){oe=null,ll&&ll(t)},ae.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),pl&&pl(t,e)},ae.__r=function(t){ul&&ul(t),Nt=0;var e=(oe=t.__c).__H;e&&(ps===oe?(e.__h=[],oe.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(e.__h.forEach(Bi),e.__h.forEach(Ys),e.__h=[],Nt=0)),ps=oe},ae.diffed=function(t){dl&&dl(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Jd.push(e)!==1&&cl===ae.requestAnimationFrame||((cl=ae.requestAnimationFrame)||tg)(eg)),e.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),ps=oe=null},ae.__c=function(t,e){e.some(function(n){try{n.__h.forEach(Bi),n.__h=n.__h.filter(function(r){return!r.__||Ys(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],ae.__e(r,n.__v)}}),fl&&fl(t,e)},ae.unmount=function(t){hl&&hl(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Bi(r)}catch(i){e=i}}),n.__H=void 0,e&&ae.__e(e,n.__v))};var ml=typeof requestAnimationFrame=="function";function tg(t){var e,n=function(){clearTimeout(r),ml&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,35);ml&&(e=requestAnimationFrame(n))}function Bi(t){var e=oe,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),oe=e}function Ys(t){var e=oe;t.__c=t.__(),oe=e}function Wa(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function Xd(t,e){return typeof e=="function"?e(t):e}function Qd(t,e){for(var n in e)t[n]=e[n];return t}function Js(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&t[r]!==e[r])return!0;return!1}function Ha(t,e){var n=e(),r=W({t:{__:n,u:e}}),i=r[0].t,o=r[1];return dn(function(){i.__=n,i.u=e,ms(i)&&o({t:i})},[t,n,e]),j(function(){return ms(i)&&o({t:i}),t(function(){ms(i)&&o({t:i})})},[t]),n}function ms(t){var e,n,r=t.u,i=t.__;try{var o=r();return!((e=i)===(n=o)&&(e!==0||1/e==1/n)||e!=e&&n!=n)}catch{return!0}}function qa(t){t()}function Ga(t){return t}function Ka(){return[!1,qa]}var Ya=dn;function eo(t,e){this.props=t,this.context=e}function Fo(t,e){function n(i){var o=this.props.ref,s=o==i.ref;return!s&&o&&(o.call?o(null):o.current=null),e?!e(this.props,i)||!s:Js(this.props,i)}function r(i){return this.shouldComponentUpdate=n,re(t,i)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r.type=t,r}(eo.prototype=new ot).isPureReactComponent=!0,eo.prototype.shouldComponentUpdate=function(t,e){return Js(this.props,t)||Js(this.state,e)};var gl=B.__b;B.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),gl&&gl(t)};var ng=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Zd(t){function e(n){var r=Qd({},n);return delete r.ref,t(r,n.ref||null)}return e.$$typeof=ng,e.render=t,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}var yl=function(t,e){return t==null?null:yt(yt(t).map(e))},ef={map:yl,forEach:yl,count:function(t){return t?yt(t).length:0},only:function(t){var e=yt(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:yt},rg=B.__e;B.__e=function(t,e,n,r){if(t.then){for(var i,o=e;o=o.__;)if((i=o.__c)&&i.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),i.__c(t,e)}rg(t,e,n,r)};var _l=B.unmount;function tf(t,e,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),t.__c.__H=null),(t=Qd({},t)).__c!=null&&(t.__c.__P===n&&(t.__c.__P=e),t.__c.__e=!0,t.__c=null),t.__k=t.__k&&t.__k.map(function(r){return tf(r,e,n)})),t}function nf(t,e,n){return t&&n&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(r){return nf(r,e,n)}),t.__c&&t.__c.__P===e&&(t.__e&&n.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=n)),t}function Cr(){this.__u=0,this.o=null,this.__b=null}function rf(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function of(t){var e,n,r;function i(o){if(e||(e=t()).then(function(s){n=s.default||s},function(s){r=s}),r)throw r;if(!n)throw e;return re(n,o)}return i.displayName="Lazy",i.__f=!0,i}function qn(){this.i=null,this.l=null}B.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&32&t.__u&&(t.type=null),_l&&_l(t)},(Cr.prototype=new ot).__c=function(t,e){var n=e.__c,r=this;r.o==null&&(r.o=[]),r.o.push(n);var i=rf(r.__v),o=!1,s=function(){o||(o=!0,n.__R=null,i?i(a):a())};n.__R=s;var a=function(){if(!--r.__u){if(r.state.__a){var c=r.state.__a;r.__v.__k[0]=nf(c,c.__c.__P,c.__c.__O)}var l;for(r.setState({__a:r.__b=null});l=r.o.pop();)l.forceUpdate()}};r.__u++||32&e.__u||r.setState({__a:r.__b=r.__v.__k[0]}),t.then(s,s)},Cr.prototype.componentWillUnmount=function(){this.o=[]},Cr.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=tf(this.__b,n,r.__O=r.__P)}this.__b=null}var i=e.__a&&re(ce,null,t.fallback);return i&&(i.__u&=-33),[re(ce,null,e.__a?null:t.children),i]};var bl=function(t,e,n){if(++n[1]===n[0]&&t.l.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.l.size))for(n=t.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.i=n=n[2]}};function ig(t){return this.getChildContext=function(){return t.context},t.children}function og(t){var e=this,n=t.h;if(e.componentWillUnmount=function(){tr(null,e.v),e.v=null,e.h=null},e.h&&e.h!==n&&e.componentWillUnmount(),!e.v){for(var r=e.__v;r!==null&&!r.__m&&r.__!==null;)r=r.__;e.h=n,e.v={nodeType:1,parentNode:n,childNodes:[],__k:{__m:r.__m},contains:function(){return!0},insertBefore:function(i,o){this.childNodes.push(i),e.h.insertBefore(i,o)},removeChild:function(i){this.childNodes.splice(this.childNodes.indexOf(i)>>>1,1),e.h.removeChild(i)}}}tr(re(ig,{context:e.context},t.__v),e.v)}function Ja(t,e){var n=re(og,{__v:t,h:e});return n.containerInfo=e,n}(qn.prototype=new ot).__a=function(t){var e=this,n=rf(e.__v),r=e.l.get(t);return r[0]++,function(i){var o=function(){e.props.revealOrder?(r.push(i),bl(e,t,r)):i()};n?n(o):o()}},qn.prototype.render=function(t){this.i=null,this.l=new Map;var e=yt(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.l.set(e[n],this.i=[1,0,this.i]);return t.children},qn.prototype.componentDidUpdate=qn.prototype.componentDidMount=function(){var t=this;this.l.forEach(function(e,n){bl(t,n,e)})};var sf=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,sg=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ag=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,cg=/[A-Z0-9]/g,lg=typeof document<"u",ug=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};function af(t,e,n){return e.__k==null&&(e.textContent=""),tr(t,e),typeof n=="function"&&n(),t?t.__c:null}function cf(t,e,n){return Fd(t,e),typeof n=="function"&&n(),t?t.__c:null}ot.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(ot.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var vl=B.event;function dg(){}function fg(){return this.cancelBubble}function hg(){return this.defaultPrevented}B.event=function(t){return vl&&(t=vl(t)),t.persist=dg,t.isPropagationStopped=fg,t.isDefaultPrevented=hg,t.nativeEvent=t};var Xa,pg={enumerable:!1,configurable:!0,get:function(){return this.class}},wl=B.vnode;B.vnode=function(t){typeof t.type=="string"&&(function(e){var n=e.props,r=e.type,i={},o=r.indexOf("-")===-1;for(var s in n){var a=n[s];if(!(s==="value"&&"defaultValue"in n&&a==null||lg&&s==="children"&&r==="noscript"||s==="class"||s==="className")){var c=s.toLowerCase();s==="defaultValue"&&"value"in n&&n.value==null?s="value":s==="download"&&a===!0?a="":c==="translate"&&a==="no"?a=!1:c[0]==="o"&&c[1]==="n"?c==="ondoubleclick"?s="ondblclick":c!=="onchange"||r!=="input"&&r!=="textarea"||ug(n.type)?c==="onfocus"?s="onfocusin":c==="onblur"?s="onfocusout":ag.test(s)&&(s=c):c=s="oninput":o&&sg.test(s)?s=s.replace(cg,"-$&").toLowerCase():a===null&&(a=void 0),c==="oninput"&&i[s=c]&&(s="oninputCapture"),i[s]=a}}r=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=yt(n.children).forEach(function(l){l.props.selected=i.value.indexOf(l.props.value)!=-1})),r=="select"&&i.defaultValue!=null&&(i.value=yt(n.children).forEach(function(l){l.props.selected=i.multiple?i.defaultValue.indexOf(l.props.value)!=-1:i.defaultValue==l.props.value})),n.class&&!n.className?(i.class=n.class,Object.defineProperty(i,"className",pg)):(n.className&&!n.class||n.class&&n.className)&&(i.class=i.className=n.className),e.props=i})(t),t.$$typeof=sf,wl&&wl(t)};var kl=B.__r;B.__r=function(t){kl&&kl(t),Xa=t.__c};var El=B.diffed;B.diffed=function(t){El&&El(t);var e=t.props,n=t.__e;n!=null&&t.type==="textarea"&&"value"in e&&e.value!==n.value&&(n.value=e.value==null?"":e.value),Xa=null};var lf={ReactCurrentDispatcher:{current:{readContext:function(t){return Xa.__n[t.__c].props.value},useCallback:H,useContext:ze,useDebugValue:Vo,useDeferredValue:Ga,useEffect:j,useId:Ba,useImperativeHandle:za,useInsertionEffect:Ya,useLayoutEffect:dn,useMemo:ee,useReducer:ai,useRef:q,useState:W,useSyncExternalStore:Ha,useTransition:Ka}}},mg="18.3.1";function uf(t){return re.bind(null,t)}function ci(t){return!!t&&t.$$typeof===sf}function df(t){return ci(t)&&t.type===ce}function ff(t){return!!t&&!!t.displayName&&(typeof t.displayName=="string"||t.displayName instanceof String)&&t.displayName.startsWith("Memo(")}function hf(t){return ci(t)?Am.apply(null,arguments):t}function pf(t){return!!t.__k&&(tr(null,t),!0)}function mf(t){return t&&(t.base||t.nodeType===1&&t)||null}var Gn=function(t,e){return t(e)},gf=function(t,e){return t(e)},yf=ce,_f=ci,De={useState:W,useId:Ba,useReducer:ai,useEffect:j,useLayoutEffect:dn,useInsertionEffect:Ya,useTransition:Ka,useDeferredValue:Ga,useSyncExternalStore:Ha,startTransition:qa,useRef:q,useImperativeHandle:za,useMemo:ee,useCallback:H,useContext:ze,useDebugValue:Vo,version:"18.3.1",Children:ef,render:af,hydrate:cf,unmountComponentAtNode:pf,createPortal:Ja,createElement:re,createContext:Je,createFactory:uf,cloneElement:hf,createRef:Rd,Fragment:ce,isValidElement:ci,isElement:_f,isFragment:df,isMemo:ff,findDOMNode:mf,Component:ot,PureComponent:eo,memo:Fo,forwardRef:Zd,flushSync:gf,unstable_batchedUpdates:Gn,StrictMode:yf,Suspense:Cr,SuspenseList:qn,lazy:of,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:lf};const gg=Object.freeze(Object.defineProperty({__proto__:null,Children:ef,Component:ot,Fragment:ce,PureComponent:eo,StrictMode:yf,Suspense:Cr,SuspenseList:qn,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:lf,cloneElement:hf,createContext:Je,createElement:re,createFactory:uf,createPortal:Ja,createRef:Rd,default:De,findDOMNode:mf,flushSync:gf,forwardRef:Zd,hydrate:cf,isElement:_f,isFragment:df,isMemo:ff,isValidElement:ci,lazy:of,memo:Fo,render:af,startTransition:qa,unmountComponentAtNode:pf,unstable_batchedUpdates:Gn,useCallback:H,useContext:ze,useDebugValue:Vo,useDeferredValue:Ga,useEffect:j,useErrorBoundary:Zm,useId:Ba,useImperativeHandle:za,useInsertionEffect:Ya,useLayoutEffect:dn,useMemo:ee,useReducer:ai,useRef:q,useState:W,useSyncExternalStore:Ha,useTransition:Ka,version:mg},Symbol.toStringTag,{value:"Module"}));function yg(t){if(Object.prototype.hasOwnProperty.call(t,"__esModule"))return t;var e=t.default;if(typeof e=="function"){var n=function r(){var i=!1;try{i=this instanceof r}catch{}return i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var gs={exports:{}},ys={};const _g=yg(gg);/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tl;function bg(){if(Tl)return ys;Tl=1;var t=_g;function e(c,l){return c===l&&(c!==0||1/c===1/l)||c!==c&&l!==l}var n=typeof Object.is=="function"?Object.is:e,r=t.useSyncExternalStore,i=t.useRef,o=t.useEffect,s=t.useMemo,a=t.useDebugValue;return ys.useSyncExternalStoreWithSelector=function(c,l,d,u,h){var y=i(null);if(y.current===null){var E={hasValue:!1,value:null};y.current=E}else E=y.current;y=s(function(){function k(P){if(!x){if(x=!0,T=P,P=u(P),h!==void 0&&E.hasValue){var R=E.value;if(h(R,P))return I=R}return I=P}if(R=I,n(T,P))return R;var g=u(P);return h!==void 0&&h(R,g)?(T=P,R):(T=P,I=g)}var x=!1,T,I,C=d===void 0?null:d;return[function(){return k(l())},C===null?void 0:function(){return k(C())}]},[l,d,u,h]);var S=r(c,y[0],y[1]);return o(function(){E.hasValue=!0,E.value=S},[S]),a(S),S},ys}var xl;function vg(){return xl||(xl=1,gs.exports=bg()),gs.exports}var wg=vg();function kg(t){t()}function Eg(){let t=null,e=null;return{clear(){t=null,e=null},notify(){kg(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var Sl={notify(){},get:()=>[]};function Tg(t,e){let n,r=Sl,i=0,o=!1;function s(S){d();const k=r.subscribe(S);let x=!1;return()=>{x||(x=!0,k(),u())}}function a(){r.notify()}function c(){E.onStateChange&&E.onStateChange()}function l(){return o}function d(){i++,n||(n=t.subscribe(c),r=Eg())}function u(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Sl)}function h(){o||(o=!0,d())}function y(){o&&(o=!1,u())}const E={addNestedSub:s,notifyNestedSubs:a,handleChangeWrapper:c,isSubscribed:l,trySubscribe:h,tryUnsubscribe:y,getListeners:()=>r};return E}var xg=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Sg=xg(),Ig=()=>typeof navigator<"u"&&navigator.product==="ReactNative",Ag=Ig(),Cg=()=>Sg||Ag?dn:j,Pg=Cg(),Rg=Symbol.for("react-redux-context"),Dg=typeof globalThis<"u"?globalThis:{};function Og(){if(!Je)return{};const t=Dg[Rg]??=new Map;let e=t.get(Je);return e||(e=Je(null),t.set(Je,e)),e}var ln=Og();function Ng(t){const{children:e,context:n,serverState:r,store:i}=t,o=ee(()=>{const c=Tg(i);return{store:i,subscription:c,getServerState:r?()=>r:void 0}},[i,r]),s=ee(()=>i.getState(),[i]);return Pg(()=>{const{subscription:c}=o;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),s!==i.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[o,s]),re((n||ln).Provider,{value:o},e)}var Mg=Ng;function Qa(t=ln){return function(){return ze(t)}}var bf=Qa();function vf(t=ln){const e=t===ln?bf:Qa(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var Lg=vf();function Vg(t=ln){const e=t===ln?Lg:vf(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Fg=Vg(),$g=(t,e)=>t===e;function jg(t=ln){const e=t===ln?bf:Qa(t),n=(r,i={})=>{const{equalityFn:o=$g}=typeof i=="function"?{equalityFn:i}:i,s=e(),{store:a,subscription:c,getServerState:l}=s;q(!0);const d=H({[r.name](h){return r(h)}}[r.name],[r]),u=wg.useSyncExternalStoreWithSelector(c.addNestedSub,a.getState,l||a.getState,d,o);return Vo(u),u};return Object.assign(n,{withTypes:()=>n}),n}var Ug=jg(),zg=new Map([["align-self","-ms-grid-row-align"],["color-adjust","-webkit-print-color-adjust"],["column-gap","grid-column-gap"],["forced-color-adjust","-ms-high-contrast-adjust"],["gap","grid-gap"],["grid-template-columns","-ms-grid-columns"],["grid-template-rows","-ms-grid-rows"],["justify-self","-ms-grid-column-align"],["margin-inline-end","-webkit-margin-end"],["margin-inline-start","-webkit-margin-start"],["mask-border","-webkit-mask-box-image"],["mask-border-outset","-webkit-mask-box-image-outset"],["mask-border-slice","-webkit-mask-box-image-slice"],["mask-border-source","-webkit-mask-box-image-source"],["mask-border-repeat","-webkit-mask-box-image-repeat"],["mask-border-width","-webkit-mask-box-image-width"],["overflow-wrap","word-wrap"],["padding-inline-end","-webkit-padding-end"],["padding-inline-start","-webkit-padding-start"],["print-color-adjust","color-adjust"],["row-gap","grid-row-gap"],["scroll-margin-bottom","scroll-snap-margin-bottom"],["scroll-margin-left","scroll-snap-margin-left"],["scroll-margin-right","scroll-snap-margin-right"],["scroll-margin-top","scroll-snap-margin-top"],["scroll-margin","scroll-snap-margin"],["text-combine-upright","-ms-text-combine-horizontal"]]);function Bg(t){return zg.get(t)}function Wg(t){var e=/^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i.exec(t);return e?e[1]?1:e[2]?2:e[3]?3:5:0}function Hg(t,e){var n=/^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i.exec(t);return n?n[1]?/^sti/i.test(e)?1:0:n[2]?/^pat/i.test(e)?1:0:n[3]?/^image-/i.test(e)?1:0:n[4]?e[3]==="-"?2:0:/^(?:inline-)?grid$/i.test(e)?4:0:0}let qg=[["-webkit-",1],["-moz-",2],["-ms-",4]];function Gg(){return({stringify:t})=>({stringify(e,n,r){let i="",o=Bg(e);o&&(i+=t(o,n,r)+";");let s=Wg(e),a=Hg(e,n);for(let c of qg)s&c[1]&&(i+=t(c[0]+e,n,r)+";"),a&c[1]&&(i+=t(e,c[0]+n,r)+";");return i+t(e,n,r)}})}let Xs={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...Ue(4,"rem",4,.5,.5),...Ue(12,"rem",4,5),14:"3.5rem",...Ue(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:X("blur"),backdropBrightness:X("brightness"),backdropContrast:X("contrast"),backdropGrayscale:X("grayscale"),backdropHueRotate:X("hueRotate"),backdropInvert:X("invert"),backdropOpacity:X("opacity"),backdropSaturate:X("saturate"),backdropSepia:X("sepia"),backgroundColor:X("colors"),backgroundImage:{none:"none"},backgroundOpacity:X("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...Ue(200,"",100,0,50),...Ue(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:t})=>({DEFAULT:t("colors.gray.200","currentColor"),...t("colors")}),borderOpacity:X("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:X("spacing"),borderWidth:{DEFAULT:"1px",...qe(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:X("colors"),caretColor:X("colors"),accentColor:({theme:t})=>({auto:"auto",...t("colors")}),contrast:{...Ue(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:X("borderColor"),divideOpacity:X("borderOpacity"),divideWidth:X("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:({theme:t})=>({...t("colors"),none:"none"}),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:t})=>({...t("spacing"),...kr(2,6),...kr(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:X("spacing"),gradientColorStops:X("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:t})=>({...t("spacing"),...kr(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:t})=>({...t("spacing"),...kr(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...Ue(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:t})=>({auto:"auto",...t("spacing")}),maxHeight:({theme:t})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...t("spacing")}),maxWidth:({theme:t,breakpoints:e})=>({...e(t("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...Ue(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:X("spacing"),placeholderColor:X("colors"),placeholderOpacity:X("opacity"),outlineColor:X("colors"),outlineOffset:qe(8,"px"),outlineWidth:qe(8,"px"),ringColor:({theme:t})=>({...t("colors"),DEFAULT:"#3b82f6"}),ringOffsetColor:X("colors"),ringOffsetWidth:qe(8,"px"),ringOpacity:({theme:t})=>({...t("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...qe(8,"px")},rotate:{...qe(2,"deg"),...qe(12,"deg",3),...qe(180,"deg",45)},saturate:Ue(200,"",100,0,50),scale:{...Ue(150,"",100,0,50),...Ue(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:X("spacing"),scrollPadding:X("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...qe(2,"deg"),...qe(12,"deg",3)},space:X("spacing"),stroke:({theme:t})=>({...t("colors"),none:"none"}),strokeWidth:Ue(2),textColor:X("colors"),textDecorationColor:X("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...qe(8,"px")},textUnderlineOffset:{auto:"auto",...qe(8,"px")},textIndent:X("spacing"),textOpacity:X("opacity"),transitionDuration:({theme:t})=>({...t("durations"),DEFAULT:"150ms"}),transitionDelay:X("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:t})=>({...t("spacing"),...kr(2,4),full:"100%"}),width:({theme:t})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...t("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...Ue(50,"",1,0,10),auto:"auto"}};function kr(t,e){let n={};do for(var r=1;r<t;r++)n[`${r}/${t}`]=Number((r/t*100).toFixed(6))+"%";while(++t<=e);return n}function qe(t,e,n=0){let r={};for(;n<=t;n=2*n||1)r[n]=n+e;return r}function Ue(t,e="",n=1,r=0,i=1,o={}){for(;r<=t;r+=i)o[r]=r/n+e;return o}function X(t){return({theme:e})=>e(t)}let Kg={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${Xs.fontFamily.sans})`,fontFeatureSettings:"theme(fontFamily.sans[1].fontFeatureSettings, normal)"},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${Xs.fontFamily.mono})`,fontFeatureSettings:"theme(fontFamily.mono[1].fontFeatureSettings, normal)",fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}},Yg=[D("\\[([-\\w]+):(.+)]",({1:t,2:e},n)=>({"@layer overrides":{"&":{[t]:on(`[${e}]`,"",n)}}})),D("(group|peer)([~/][^-[]+)?",({input:t},{h:e})=>[{c:e(t)}]),O("aspect-","aspectRatio"),D("container",(t,{theme:e})=>{let{screens:n=e("screens"),center:r,padding:i}=e("container"),o={width:"100%",marginRight:r&&"auto",marginLeft:r&&"auto",...s("xs")};for(let a in n){let c=n[a];typeof c=="string"&&(o[Va(c)]={"&":{maxWidth:c,...s(a)}})}return o;function s(a){let c=i&&(typeof i=="string"?i:i[a]||i.DEFAULT);if(c)return{paddingRight:c,paddingLeft:c}}}),O("content-","content",({_:t})=>({"--tw-content":t,content:"var(--tw-content)"})),D("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),D("box-(border|content)","boxSizing",({1:t})=>t+"-box"),D("hidden",{display:"none"}),D("table-(auto|fixed)","tableLayout"),D(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",D("isolate","isolation"),D("object-(contain|cover|fill|none|scale-down)","objectFit"),O("object-","objectPosition"),D("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",Pi),D("overscroll(-[xy])?-(auto|contain|none)",({1:t="",2:e})=>({["overscroll-behavior"+t]:e})),D("(static|fixed|absolute|relative|sticky)","position"),O("-?inset(-[xy])?(?:$|-)","inset",({1:t,_:e})=>({top:t!="-x"&&e,right:t!="-y"&&e,bottom:t!="-x"&&e,left:t!="-y"&&e})),O("-?(top|bottom|left|right)(?:$|-)","inset"),D("(visible|collapse)","visibility"),D("invisible",{visibility:"hidden"}),O("-?z-","zIndex"),D("flex-((row|col)(-reverse)?)","flexDirection",Il),D("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),O("(flex-(?:grow|shrink))(?:$|-)"),O("(flex)-"),O("grow(?:$|-)","flexGrow"),O("shrink(?:$|-)","flexShrink"),O("basis-","flexBasis"),O("-?(order)-"),"-?(order)-(\\d+)",O("grid-cols-","gridTemplateColumns"),D("grid-cols-(\\d+)","gridTemplateColumns",Rl),O("col-","gridColumn"),D("col-(span)-(\\d+)","gridColumn",Pl),O("col-start-","gridColumnStart"),D("col-start-(auto|\\d+)","gridColumnStart"),O("col-end-","gridColumnEnd"),D("col-end-(auto|\\d+)","gridColumnEnd"),O("grid-rows-","gridTemplateRows"),D("grid-rows-(\\d+)","gridTemplateRows",Rl),O("row-","gridRow"),D("row-(span)-(\\d+)","gridRow",Pl),O("row-start-","gridRowStart"),D("row-start-(auto|\\d+)","gridRowStart"),O("row-end-","gridRowEnd"),D("row-end-(auto|\\d+)","gridRowEnd"),D("grid-flow-((row|col)(-dense)?)","gridAutoFlow",t=>Pi(Il(t))),D("grid-flow-(dense)","gridAutoFlow"),O("auto-cols-","gridAutoColumns"),O("auto-rows-","gridAutoRows"),O("gap-x(?:$|-)","gap","columnGap"),O("gap-y(?:$|-)","gap","rowGap"),O("gap(?:$|-)","gap"),"(justify-(?:items|self))-",D("justify-","justifyContent",Al),D("(content|items|self)-",t=>({["align-"+t[1]]:Al(t)})),D("(place-(content|items|self))-",({1:t,$$:e})=>({[t]:("wun".includes(e[3])?"space-":"")+e})),O("p([xytrbl])?(?:$|-)","padding",zn("padding")),O("-?m([xytrbl])?(?:$|-)","margin",zn("margin")),O("-?space-(x|y)(?:$|-)","space",({1:t,_:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${t}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[t]]:`calc(${e} * calc(1 - var(--tw-space-${t}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[t]]:`calc(${e} * var(--tw-space-${t}-reverse))`}})),D("space-(x|y)-reverse",({1:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${t}-reverse`]:"1"}})),O("w-","width"),O("min-w-","minWidth"),O("max-w-","maxWidth"),O("h-","height"),O("min-h-","minHeight"),O("max-h-","maxHeight"),O("font-","fontWeight"),O("font-","fontFamily",({_:t})=>typeof(t=se(t))[1]=="string"?{fontFamily:tt(t)}:{fontFamily:tt(t[0]),...t[1]}),D("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),D("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),D("italic","fontStyle"),D("not-italic",{fontStyle:"normal"}),D("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:t,2:e="",3:n})=>e=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(n?"numeric-fraction":"pt".includes(e[0])?"numeric-spacing":e?"numeric-figure":t)]:t,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)",...Jt({"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"})}),O("tracking-","letterSpacing"),O("leading-","lineHeight"),D("list-(inside|outside)","listStylePosition"),O("list-","listStyleType"),D("list-","listStyleType"),O("placeholder-opacity-","placeholderOpacity",({_:t})=>({"&::placeholder":{"--tw-placeholder-opacity":t}})),ve("placeholder-",{property:"color",selector:"&::placeholder"}),D("text-(left|center|right|justify|start|end)","textAlign"),D("text-(ellipsis|clip)","textOverflow"),O("text-opacity-","textOpacity","--tw-text-opacity"),ve("text-",{property:"color"}),O("text-","fontSize",({_:t})=>typeof t=="string"?{fontSize:t}:{fontSize:t[0],...typeof t[1]=="string"?{lineHeight:t[1]}:t[1]}),O("indent-","textIndent"),D("(overline|underline|line-through)","textDecorationLine"),D("no-underline",{textDecorationLine:"none"}),O("underline-offset-","textUnderlineOffset"),ve("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),O("decoration-","textDecorationThickness"),D("decoration-","textDecorationStyle"),D("(uppercase|lowercase|capitalize)","textTransform"),D("normal-case",{textTransform:"none"}),D("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),D("align-","verticalAlign"),D("whitespace-","whiteSpace"),D("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),D("break-words",{overflowWrap:"break-word"}),D("break-all",{wordBreak:"break-all"}),D("break-keep",{wordBreak:"keep-all"}),ve("caret-",{opacityVariable:!1,opacitySection:"opacity"}),ve("accent-",{opacityVariable:!1,opacitySection:"opacity"}),D("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:t})=>`linear-gradient(to ${_n(t," ")},var(--tw-gradient-stops))`),ve("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:t})=>({"--tw-gradient-from":t.value,"--tw-gradient-to":t.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),ve("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:t})=>({"--tw-gradient-to":t.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${t.value},var(--tw-gradient-to)`})),ve("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),D("bg-(fixed|local|scroll)","backgroundAttachment"),D("bg-origin-(border|padding|content)","backgroundOrigin",({1:t})=>t+"-box"),D(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),D("bg-blend-","backgroundBlendMode"),D("bg-clip-(border|padding|content|text)","backgroundClip",({1:t})=>t+(t=="text"?"":"-box")),O("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),ve("bg-",{section:"backgroundColor"}),O("bg-","backgroundImage"),O("bg-","backgroundPosition"),D("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",Pi),O("bg-","backgroundSize"),O("rounded(?:$|-)","borderRadius"),O("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:t,_:e})=>{let n={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[t]||[t,t];return{[`border-${_n(n[0])}-radius`]:e,[`border-${_n(n[1])}-radius`]:e}}),D("border-(collapse|separate)","borderCollapse"),O("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),D("border-(solid|dashed|dotted|double|none)","borderStyle"),O("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:t,_:e})=>({...Jt({"--tw-border-spacing-x":"0","--tw-border-spacing-y":"0"}),["--tw-border-spacing"+(t||"-x")]:e,["--tw-border-spacing"+(t||"-y")]:e,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),ve("border-([xytrbl])-",{section:"borderColor"},zn("border","Color")),ve("border-"),O("border-([xytrbl])(?:$|-)","borderWidth",zn("border","Width")),O("border(?:$|-)","borderWidth"),O("divide-opacity(?:$|-)","divideOpacity",({_:t})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":t}})),D("divide-(solid|dashed|dotted|double|none)",({1:t})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:t}})),D("divide-([xy]-reverse)",({1:t})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+t]:"1"}})),O("divide-([xy])(?:$|-)","divideWidth",({1:t,_:e})=>{let n={x:"lr",y:"tb"}[t];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${t}-reverse`]:"0",[`border-${_n(n[0])}Width`]:`calc(${e} * calc(1 - var(--tw-divide-${t}-reverse)))`,[`border-${_n(n[1])}Width`]:`calc(${e} * var(--tw-divide-${t}-reverse))`}}}),ve("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),O("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),ve("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),O("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),D("ring-inset",{"--tw-ring-inset":"inset"}),ve("ring-",{property:"--tw-ring-color"}),O("ring(?:$|-)","ringWidth",({_:t},{theme:e})=>({...Jt({"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":e("ringOffsetWidth","","0px"),"--tw-ring-offset-color":rn(e("ringOffsetColor","","#fff")),"--tw-ring-color":rn(e("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":e("ringOpacity","","0.5")}}),"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${t} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"})),ve("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:t})=>({"--tw-shadow-color":t.value,"--tw-shadow":"var(--tw-shadow-colored)"})),O("shadow(?:$|-)","boxShadow",({_:t})=>({...Jt({"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}),"--tw-shadow":tt(t),"--tw-shadow-colored":tt(t).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"})),O("(opacity)-"),D("mix-blend-","mixBlendMode"),...Cl(),...Cl("backdrop-"),O("transition(?:$|-)","transitionProperty",(t,{theme:e})=>({transitionProperty:tt(t),transitionTimingFunction:t._=="none"?void 0:tt(e("transitionTimingFunction","")),transitionDuration:t._=="none"?void 0:tt(e("transitionDuration",""))})),O("duration(?:$|-)","transitionDuration","transitionDuration",tt),O("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",tt),O("delay(?:$|-)","transitionDelay","transitionDelay",tt),O("animate(?:$|-)","animation",(t,{theme:e,h:n,e:r})=>{let i=tt(t),o=i.split(" "),s=e("keyframes",o[0]);return s?{["@keyframes "+(o[0]=r(n(o[0])))]:s,animation:o.join(" ")}:{animation:i}}),"(transform)-(none)",D("transform",Qs),D("transform-(cpu|gpu)",({1:t})=>({"--tw-transform":wf(t=="gpu")})),O("scale(-[xy])?-","scale",({1:t,_:e})=>({["--tw-scale"+(t||"-x")]:e,["--tw-scale"+(t||"-y")]:e,...Qs()})),O("-?(rotate)-","rotate",_s),O("-?(translate-[xy])-","translate",_s),O("-?(skew-[xy])-","skew",_s),D("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",Pi),"(appearance)-",O("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",O("(cursor)-"),"(cursor)-",D("snap-(none)","scroll-snap-type"),D("snap-(x|y|both)",({1:t})=>({...Jt({"--tw-scroll-snap-strictness":"proximity"}),"scroll-snap-type":t+" var(--tw-scroll-snap-strictness)"})),D("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),D("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),D("snap-(normal|always)","scroll-snap-stop"),D("scroll-(auto|smooth)","scroll-behavior"),O("scroll-p([xytrbl])?(?:$|-)","padding",zn("scroll-padding")),O("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",zn("scroll-margin")),D("touch-(auto|none|manipulation)","touch-action"),D("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:t,2:e,3:n})=>({...Jt({"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}),[`--tw-${e?"pan-x":n?"pan-y":t}`]:t,"touch-action":"var(--tw-touch-action)"})),D("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),D("outline",{outlineStyle:"solid"}),D("outline-(dashed|dotted|double)","outlineStyle"),O("-?(outline-offset)-"),ve("outline-",{opacityVariable:!1,opacitySection:"opacity"}),O("outline-","outlineWidth"),"(pointer-events)-",O("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:t})=>({x:"horizontal",y:"vertical"})[t]||t||"both"],D("select-(none|text|all|auto)","userSelect"),ve("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),ve("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),O("stroke-","strokeWidth"),D("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),D("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function Pi(t){return(typeof t=="string"?t:t[1]).replace(/-/g," ").trim()}function Il(t){return(typeof t=="string"?t:t[1]).replace("col","column")}function _n(t,e="-"){let n=[];for(let r of t)n.push({t:"top",r:"right",b:"bottom",l:"left"}[r]);return n.join(e)}function tt(t){return t&&""+(t._||t)}function Al({$$:t}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[t[3]||""]||"")+t}function zn(t,e=""){return({1:n,_:r})=>{let i={x:"lr",y:"tb"}[n]||n+n;return i?{...zi(t+"-"+_n(i[0])+e,r),...zi(t+"-"+_n(i[1])+e,r)}:zi(t+e,r)}}function Cl(t=""){let e=["blur","brightness","contrast","grayscale","hue-rotate","invert",t&&"opacity","saturate","sepia",!t&&"drop-shadow"].filter(Boolean),n={};for(let r of e)n[`--tw-${t}${r}`]="var(--tw-empty,/*!*/ /*!*/)";return n={...Jt(n),[`${t}filter`]:e.map(r=>`var(--tw-${t}${r})`).join(" ")},[`(${t}filter)-(none)`,D(`${t}filter`,n),...e.map(r=>O(`${r[0]=="h"?"-?":""}(${t}${r})(?:$|-)`,r,({1:i,_:o})=>({[`--tw-${i}`]:se(o).map(s=>`${r}(${s})`).join(" "),...n})))]}function _s({1:t,_:e}){return{["--tw-"+t]:e,...Qs()}}function Qs(){return{...Jt({"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":wf()}),transform:"var(--tw-transform)"}}function wf(t){return[t?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function Pl({1:t,2:e}){return`${t} ${e} / ${t} ${e}`}function Rl({1:t}){return`repeat(${t},minmax(0,1fr))`}function Jt(t){return{"@layer defaults":{"*,::before,::after":t,"::backdrop":t}}}let Jg=[["sticky","@supports ((position: -webkit-sticky) or (position:sticky))"],["motion-reduce","@media (prefers-reduced-motion:reduce)"],["motion-safe","@media (prefers-reduced-motion:no-preference)"],["print","@media print"],["(portrait|landscape)",({1:t})=>`@media (orientation:${t})`],["contrast-(more|less)",({1:t})=>`@media (prefers-contrast:${t})`],["(first-(letter|line)|placeholder|backdrop|before|after)",({1:t})=>`&::${t}`],["(marker|selection)",({1:t})=>`& *::${t},&::${t}`],["file","&::file-selector-button"],["(first|last|only)",({1:t})=>`&:${t}-child`],["even","&:nth-child(2n)"],["odd","&:nth-child(odd)"],["open","&[open]"],["(aria|data)-",({1:t,$$:e},n)=>e&&`&[${t}-${n.theme(t,e)||on(e,"",n)||`${e}="true"`}]`],["((group|peer)(~[^-[]+)?)(-\\[(.+)]|[-[].+?)(\\/.+)?",({2:t,3:e="",4:n,5:r="",6:i=e},{e:o,h:s,v:a})=>{let c=jr(r)||(n[0]=="["?n:a(n.slice(1)));return`${(c.includes("&")?c:"&"+c).replace(/&/g,`:merge(.${o(s(t+i))})`)}${t[0]=="p"?"~":" "}&`}],["(ltr|rtl)",({1:t})=>`[dir="${t}"] &`],["supports-",({$$:t},e)=>{if(t&&(t=e.theme("supports",t)||on(t,"",e)),t)return t.includes(":")||(t+=":var(--tw)"),/^\w*\s*\(/.test(t)||(t=`(${t})`),`@supports ${t.replace(/\b(and|or|not)\b/g," $1 ").trim()}`}],["max-",({$$:t},e)=>{if(t&&(t=e.theme("screens",t)||on(t,"",e)),typeof t=="string")return`@media not all and (min-width:${t})`}],["min-",({$$:t},e)=>(t&&(t=on(t,"",e)),t&&`@media (min-width:${t})`)],[/^\[(.+)]$/,({1:t})=>/[&@]/.test(t)&&jr(t).replace(/[}]+$/,"").split("{")]];function Xg({colors:t,disablePreflight:e}={}){return{preflight:e?void 0:Kg,theme:{...Xs,colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000",white:"#fff",...t}},variants:Jg,rules:Yg,finalize(n){return n.n&&n.d&&n.r.some(r=>/^&::(before|after)$/.test(r))&&!/(^|;)content:/.test(n.d)?{...n,d:"content:var(--tw-content);"+n.d}:n}}}let Qg={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},Zg={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},e0={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},t0={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},n0={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},r0={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},i0={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},o0={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},s0={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},a0={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},c0={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},l0={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},u0={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},d0={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},f0={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},h0={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},p0={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},m0={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},g0={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},y0={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},_0={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},b0={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},v0={__proto__:null,slate:Qg,gray:Zg,zinc:e0,neutral:t0,stone:n0,red:r0,orange:i0,amber:o0,yellow:s0,lime:a0,green:c0,emerald:l0,teal:u0,cyan:d0,sky:f0,blue:h0,indigo:p0,violet:m0,purple:g0,fuchsia:y0,pink:_0,rose:b0};function w0({disablePreflight:t}={}){return Xg({colors:v0,disablePreflight:t})}const k0=Ua({presets:[Gg(),w0()],darkMode:"class",theme:{extend:{fontFamily:{main:"Inter, sans"}}},preflight:{"@font-face":[{fontFamily:"Inter",fontDisplay:"swap",src:'url("Inter.woff2") format("woff2")'}]}});/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),E0=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),Ol=t=>{const e=E0(t);return e.charAt(0).toUpperCase()+e.slice(1)},T0=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var x0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,children:i,iconNode:o,class:s="",...a})=>re("svg",{...x0,width:String(e),height:e,stroke:t,"stroke-width":r?Number(n)*24/Number(e):n,class:["lucide",s].join(" "),...a},[...o.map(([c,l])=>re(c,l)),...yt(i)]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=(t,e)=>{const n=({class:r="",children:i,...o})=>re(S0,{...o,iconNode:e,class:T0(`lucide-${Dl(Ol(t))}`,`lucide-${Dl(t)}`,r)},i);return n.displayName=Ol(t),n};/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=z("arrow-down-0-1",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=z("arrow-down-a-z",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=z("arrow-down-narrow-wide",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=z("arrow-up-1-0",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=z("arrow-up-wide-narrow",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h4",key:"1krc32"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=z("arrow-up-z-a",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=z("backpack",[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",key:"1ol0lm"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}],["path",{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6",key:"1fr6do"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=z("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=z("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=z("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=z("circle-dollar-sign",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=z("circle-question-mark",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=z("circle-user-round",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=z("dumbbell",[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=z("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=z("gamepad-2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=z("gavel",[["path",{d:"m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381",key:"pgg06f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m21.5 10.5-8-8",key:"a17d9x"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m8.5 7.5 8 8",key:"1oyaui"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=z("gem",[["path",{d:"M10.5 3 8 9l4 13 4-13-2.5-6",key:"b3dvk1"}],["path",{d:"M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z",key:"7w4byz"}],["path",{d:"M2 9h20",key:"16fsjt"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=z("gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=z("github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=z("grip-vertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=z("heart",[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=z("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=z("laptop-minimal",[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2",key:"1qhy41"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20",key:"ni3hll"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=z("leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=z("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=z("menu",[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=z("moon",[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=z("music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=z("pen-tool",[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=z("pizza",[["path",{d:"m12 14-1 1",key:"11onhr"}],["path",{d:"m13.75 18.25-1.25 1.42",key:"1yisr3"}],["path",{d:"M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12",key:"1qtqk6"}],["path",{d:"M18.8 9.3a1 1 0 0 0 2.1 7.7",key:"fbbbr2"}],["path",{d:"M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z",key:"1hyfdd"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=z("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=z("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=z("shopping-cart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=z("square-pen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=z("star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=z("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=z("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=z("user-round-check",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=z("user-round",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=z("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=z("wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]]);/**
 * @license lucide-preact v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=z("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),fy=()=>_("footer",{class:"lg:(items-start, px-6) dark:(bg-slate-800, text-pink-400, border-slate-700) flex flex-col items-center justify-center gap-1.5 border-t border-slate-200 bg-slate-100 p-4 text-lg font-semibold text-violet-900 transition-all select-none xl:text-xl",children:[_("p",{id:"author",class:"flex gap-2",children:["© 2023 - 2025",_("a",{class:"flex items-center gap-0.5 rounded text-indigo-800 transition-transform hover:scale-105 xl:gap-1 dark:text-indigo-300",title:"Source",target:"_blank",type:"text/html",rel:"noreferrer external author",href:"https://github.com/eldarlrd/todo-list",children:[_(q0,{"aria-label":"GitHub Octocat",size:"20",class:"transition-transform xl:scale-110"}),"eldarlrd"]})]}),_("p",{id:"curriculum",class:"flex gap-2",children:["for",_("a",{class:"flex items-center gap-1 rounded text-yellow-800 transition-transform hover:scale-105 xl:gap-1.5 dark:text-yellow-500",title:"Task",target:"_blank",type:"text/html",rel:"noreferrer external",href:"https://theodinproject.com/lessons/node-path-javascript-todo-list",children:[_(B0,{"aria-label":"Hammer",size:"20",class:"transition-transform xl:scale-110"}),"The Odin Project"]})]})]}),hy="/todo-list/assets/logo-BK-47Qgk.webp",At=document.documentElement,py=()=>{localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(At.style.colorScheme="dark",At.classList.add("dark")):(At.style.colorScheme="light",At.classList.remove("dark"))},Sf=({identifier:t})=>{const[e,n]=W();return j(()=>{n(At.classList.contains("dark"))},[]),_("button",{type:"button",title:"Toggle Theme",id:t,onClick:()=>{localStorage.theme=e?"light":"dark",At.style.colorScheme==="dark"?At.style.colorScheme="light":At.style.colorScheme="dark",At.classList.toggle("dark"),n(!e)},class:"hover:(bg-slate-200, active:bg-slate-300, dark:(bg-slate-700, active:bg-slate-600)) lg:(w-14, px-4, py-3) xl:(w-16, px-5, py-4) w-12 rounded px-3 py-2 leading-4 transition-colors",children:e?_(ay,{"aria-label":"Sun",strokeWidth:"2.25",class:"scale-110 transition-transform lg:scale-125 xl:scale-150"}):_(ey,{"aria-label":"Moon",strokeWidth:"2.25",class:"scale-110 transition-transform lg:scale-125 xl:scale-150"})})};py();/*!
* tabbable 6.3.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var If=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],to=If.join(","),Af=typeof Element>"u",En=Af?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,no=!Af&&Element.prototype.getRootNode?function(t){var e;return t==null||(e=t.getRootNode)===null||e===void 0?void 0:e.call(t)}:function(t){return t?.ownerDocument},Ur=function(e,n){var r;n===void 0&&(n=!0);var i=e==null||(r=e.getAttribute)===null||r===void 0?void 0:r.call(e,"inert"),o=i===""||i==="true",s=o||n&&e&&Ur(e.parentNode);return s},my=function(e){var n,r=e==null||(n=e.getAttribute)===null||n===void 0?void 0:n.call(e,"contenteditable");return r===""||r==="true"},Cf=function(e,n,r){if(Ur(e))return[];var i=Array.prototype.slice.apply(e.querySelectorAll(to));return n&&En.call(e,to)&&i.unshift(e),i=i.filter(r),i},ro=function(e,n,r){for(var i=[],o=Array.from(e);o.length;){var s=o.shift();if(!Ur(s,!1))if(s.tagName==="SLOT"){var a=s.assignedElements(),c=a.length?a:s.children,l=ro(c,!0,r);r.flatten?i.push.apply(i,l):i.push({scopeParent:s,candidates:l})}else{var d=En.call(s,to);d&&r.filter(s)&&(n||!e.includes(s))&&i.push(s);var u=s.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(s),h=!Ur(u,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(s));if(u&&h){var y=ro(u===!0?s.children:u.children,!0,r);r.flatten?i.push.apply(i,y):i.push({scopeParent:s,candidates:y})}else o.unshift.apply(o,s.children)}}return i},Pf=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},bn=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||my(e))&&!Pf(e)?0:e.tabIndex},gy=function(e,n){var r=bn(e);return r<0&&n&&!Pf(e)?0:r},yy=function(e,n){return e.tabIndex===n.tabIndex?e.documentOrder-n.documentOrder:e.tabIndex-n.tabIndex},Rf=function(e){return e.tagName==="INPUT"},_y=function(e){return Rf(e)&&e.type==="hidden"},by=function(e){var n=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(r){return r.tagName==="SUMMARY"});return n},vy=function(e,n){for(var r=0;r<e.length;r++)if(e[r].checked&&e[r].form===n)return e[r]},wy=function(e){if(!e.name)return!0;var n=e.form||no(e),r=function(a){return n.querySelectorAll('input[type="radio"][name="'+a+'"]')},i;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")i=r(window.CSS.escape(e.name));else try{i=r(e.name)}catch(s){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",s.message),!1}var o=vy(i,e.form);return!o||o===e},ky=function(e){return Rf(e)&&e.type==="radio"},Ey=function(e){return ky(e)&&!wy(e)},Ty=function(e){var n,r=e&&no(e),i=(n=r)===null||n===void 0?void 0:n.host,o=!1;if(r&&r!==e){var s,a,c;for(o=!!((s=i)!==null&&s!==void 0&&(a=s.ownerDocument)!==null&&a!==void 0&&a.contains(i)||e!=null&&(c=e.ownerDocument)!==null&&c!==void 0&&c.contains(e));!o&&i;){var l,d,u;r=no(i),i=(l=r)===null||l===void 0?void 0:l.host,o=!!((d=i)!==null&&d!==void 0&&(u=d.ownerDocument)!==null&&u!==void 0&&u.contains(i))}}return o},Nl=function(e){var n=e.getBoundingClientRect(),r=n.width,i=n.height;return r===0&&i===0},xy=function(e,n){var r=n.displayCheck,i=n.getShadowRoot;if(r==="full-native"&&"checkVisibility"in e){var o=e.checkVisibility({checkOpacity:!1,opacityProperty:!1,contentVisibilityAuto:!0,visibilityProperty:!0,checkVisibilityCSS:!0});return!o}if(getComputedStyle(e).visibility==="hidden")return!0;var s=En.call(e,"details>summary:first-of-type"),a=s?e.parentElement:e;if(En.call(a,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="full-native"||r==="legacy-full"){if(typeof i=="function"){for(var c=e;e;){var l=e.parentElement,d=no(e);if(l&&!l.shadowRoot&&i(l)===!0)return Nl(e);e.assignedSlot?e=e.assignedSlot:!l&&d!==e.ownerDocument?e=d.host:e=l}e=c}if(Ty(e))return!e.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return Nl(e);return!1},Sy=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var n=e.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r=0;r<n.children.length;r++){var i=n.children.item(r);if(i.tagName==="LEGEND")return En.call(n,"fieldset[disabled] *")?!0:!i.contains(e)}return!0}n=n.parentElement}return!1},io=function(e,n){return!(n.disabled||Ur(n)||_y(n)||xy(n,e)||by(n)||Sy(n))},Zs=function(e,n){return!(Ey(n)||bn(n)<0||!io(e,n))},Iy=function(e){var n=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},Df=function(e){var n=[],r=[];return e.forEach(function(i,o){var s=!!i.scopeParent,a=s?i.scopeParent:i,c=gy(a,s),l=s?Df(i.candidates):a;c===0?s?n.push.apply(n,l):n.push(a):r.push({documentOrder:o,tabIndex:c,item:i,isScope:s,content:l})}),r.sort(yy).reduce(function(i,o){return o.isScope?i.push.apply(i,o.content):i.push(o.content),i},[]).concat(n)},Ay=function(e,n){n=n||{};var r;return n.getShadowRoot?r=ro([e],n.includeContainer,{filter:Zs.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:Iy}):r=Cf(e,n.includeContainer,Zs.bind(null,n)),Df(r)},Cy=function(e,n){n=n||{};var r;return n.getShadowRoot?r=ro([e],n.includeContainer,{filter:io.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):r=Cf(e,n.includeContainer,io.bind(null,n)),r},Bn=function(e,n){if(n=n||{},!e)throw new Error("No node provided");return En.call(e,to)===!1?!1:Zs(n,e)},Py=If.concat("iframe").join(","),bs=function(e,n){if(n=n||{},!e)throw new Error("No node provided");return En.call(e,Py)===!1?!1:io(n,e)};/*!
* focus-trap 7.6.6
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function ea(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Ry(t){if(Array.isArray(t))return ea(t)}function Dy(t,e,n){return(e=Vy(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Oy(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ny(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ml(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ll(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ml(Object(n),!0).forEach(function(r){Dy(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ml(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function My(t){return Ry(t)||Oy(t)||Fy(t)||Ny()}function Ly(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Vy(t){var e=Ly(t,"string");return typeof e=="symbol"?e:e+""}function Fy(t,e){if(t){if(typeof t=="string")return ea(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ea(t,e):void 0}}var Vl={activateTrap:function(e,n){if(e.length>0){var r=e[e.length-1];r!==n&&r._setPausedState(!0)}var i=e.indexOf(n);i===-1||e.splice(i,1),e.push(n)},deactivateTrap:function(e,n){var r=e.indexOf(n);r!==-1&&e.splice(r,1),e.length>0&&!e[e.length-1]._isManuallyPaused()&&e[e.length-1]._setPausedState(!1)}},$y=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},jy=function(e){return e?.key==="Escape"||e?.key==="Esc"||e?.keyCode===27},Pr=function(e){return e?.key==="Tab"||e?.keyCode===9},Uy=function(e){return Pr(e)&&!e.shiftKey},zy=function(e){return Pr(e)&&e.shiftKey},Fl=function(e){return setTimeout(e,0)},Er=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return typeof e=="function"?e.apply(void 0,r):e},Ri=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},By=[],Of=function(e,n){var r=n?.document||document,i=n?.trapStack||By,o=Ll({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:Uy,isKeyBackward:zy},n),s={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,manuallyPaused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},a,c=function(f,A,N){return f&&f[A]!==void 0?f[A]:o[N||A]},l=function(f,A){var N=typeof A?.composedPath=="function"?A.composedPath():void 0;return s.containerGroups.findIndex(function(V){var F=V.container,G=V.tabbableNodes;return F.contains(f)||N?.includes(F)||G.find(function(L){return L===f})})},d=function(f){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},N=A.hasFallback,V=N===void 0?!1:N,F=A.params,G=F===void 0?[]:F,L=o[f];if(typeof L=="function"&&(L=L.apply(void 0,My(G))),L===!0&&(L=void 0),!L){if(L===void 0||L===!1)return L;throw new Error("`".concat(f,"` was specified but was not a node, or did not return a node"))}var Y=L;if(typeof L=="string"){try{Y=r.querySelector(L)}catch(J){throw new Error("`".concat(f,'` appears to be an invalid selector; error="').concat(J.message,'"'))}if(!Y&&!V)throw new Error("`".concat(f,"` as selector refers to no known node"))}return Y},u=function(){var f=d("initialFocus",{hasFallback:!0});if(f===!1)return!1;if(f===void 0||f&&!bs(f,o.tabbableOptions))if(l(r.activeElement)>=0)f=r.activeElement;else{var A=s.tabbableGroups[0],N=A&&A.firstTabbableNode;f=N||d("fallbackFocus")}else f===null&&(f=d("fallbackFocus"));if(!f)throw new Error("Your focus-trap needs to have at least one focusable element");return f},h=function(){if(s.containerGroups=s.containers.map(function(f){var A=Ay(f,o.tabbableOptions),N=Cy(f,o.tabbableOptions),V=A.length>0?A[0]:void 0,F=A.length>0?A[A.length-1]:void 0,G=N.find(function(J){return Bn(J)}),L=N.slice().reverse().find(function(J){return Bn(J)}),Y=!!A.find(function(J){return bn(J)>0});return{container:f,tabbableNodes:A,focusableNodes:N,posTabIndexesFound:Y,firstTabbableNode:V,lastTabbableNode:F,firstDomTabbableNode:G,lastDomTabbableNode:L,nextTabbableNode:function(te){var le=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,be=A.indexOf(te);return be<0?le?N.slice(N.indexOf(te)+1).find(function(et){return Bn(et)}):N.slice(0,N.indexOf(te)).reverse().find(function(et){return Bn(et)}):A[be+(le?1:-1)]}}}),s.tabbableGroups=s.containerGroups.filter(function(f){return f.tabbableNodes.length>0}),s.tabbableGroups.length<=0&&!d("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(s.containerGroups.find(function(f){return f.posTabIndexesFound})&&s.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},y=function(f){var A=f.activeElement;if(A)return A.shadowRoot&&A.shadowRoot.activeElement!==null?y(A.shadowRoot):A},E=function(f){if(f!==!1&&f!==y(document)){if(!f||!f.focus){E(u());return}f.focus({preventScroll:!!o.preventScroll}),s.mostRecentlyFocusedNode=f,$y(f)&&f.select()}},S=function(f){var A=d("setReturnFocus",{params:[f]});return A||(A===!1?!1:f)},k=function(f){var A=f.target,N=f.event,V=f.isBackward,F=V===void 0?!1:V;A=A||Ri(N),h();var G=null;if(s.tabbableGroups.length>0){var L=l(A,N),Y=L>=0?s.containerGroups[L]:void 0;if(L<0)F?G=s.tabbableGroups[s.tabbableGroups.length-1].lastTabbableNode:G=s.tabbableGroups[0].firstTabbableNode;else if(F){var J=s.tabbableGroups.findIndex(function(zt){var We=zt.firstTabbableNode;return A===We});if(J<0&&(Y.container===A||bs(A,o.tabbableOptions)&&!Bn(A,o.tabbableOptions)&&!Y.nextTabbableNode(A,!1))&&(J=L),J>=0){var te=J===0?s.tabbableGroups.length-1:J-1,le=s.tabbableGroups[te];G=bn(A)>=0?le.lastTabbableNode:le.lastDomTabbableNode}else Pr(N)||(G=Y.nextTabbableNode(A,!1))}else{var be=s.tabbableGroups.findIndex(function(zt){var We=zt.lastTabbableNode;return A===We});if(be<0&&(Y.container===A||bs(A,o.tabbableOptions)&&!Bn(A,o.tabbableOptions)&&!Y.nextTabbableNode(A))&&(be=L),be>=0){var et=be===s.tabbableGroups.length-1?0:be+1,Re=s.tabbableGroups[et];G=bn(A)>=0?Re.firstTabbableNode:Re.firstDomTabbableNode}else Pr(N)||(G=Y.nextTabbableNode(A))}}else G=d("fallbackFocus");return G},x=function(f){var A=Ri(f);if(!(l(A,f)>=0)){if(Er(o.clickOutsideDeactivates,f)){a.deactivate({returnFocus:o.returnFocusOnDeactivate});return}Er(o.allowOutsideClick,f)||f.preventDefault()}},T=function(f){var A=Ri(f),N=l(A,f)>=0;if(N||A instanceof Document)N&&(s.mostRecentlyFocusedNode=A);else{f.stopImmediatePropagation();var V,F=!0;if(s.mostRecentlyFocusedNode)if(bn(s.mostRecentlyFocusedNode)>0){var G=l(s.mostRecentlyFocusedNode),L=s.containerGroups[G].tabbableNodes;if(L.length>0){var Y=L.findIndex(function(J){return J===s.mostRecentlyFocusedNode});Y>=0&&(o.isKeyForward(s.recentNavEvent)?Y+1<L.length&&(V=L[Y+1],F=!1):Y-1>=0&&(V=L[Y-1],F=!1))}}else s.containerGroups.some(function(J){return J.tabbableNodes.some(function(te){return bn(te)>0})})||(F=!1);else F=!1;F&&(V=k({target:s.mostRecentlyFocusedNode,isBackward:o.isKeyBackward(s.recentNavEvent)})),E(V||s.mostRecentlyFocusedNode||u())}s.recentNavEvent=void 0},I=function(f){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;s.recentNavEvent=f;var N=k({event:f,isBackward:A});N&&(Pr(f)&&f.preventDefault(),E(N))},C=function(f){(o.isKeyForward(f)||o.isKeyBackward(f))&&I(f,o.isKeyBackward(f))},P=function(f){jy(f)&&Er(o.escapeDeactivates,f)!==!1&&(f.preventDefault(),a.deactivate())},R=function(f){var A=Ri(f);l(A,f)>=0||Er(o.clickOutsideDeactivates,f)||Er(o.allowOutsideClick,f)||(f.preventDefault(),f.stopImmediatePropagation())},g=function(){if(s.active)return Vl.activateTrap(i,a),s.delayInitialFocusTimer=o.delayInitialFocus?Fl(function(){E(u())}):E(u()),r.addEventListener("focusin",T,!0),r.addEventListener("mousedown",x,{capture:!0,passive:!1}),r.addEventListener("touchstart",x,{capture:!0,passive:!1}),r.addEventListener("click",R,{capture:!0,passive:!1}),r.addEventListener("keydown",C,{capture:!0,passive:!1}),r.addEventListener("keydown",P),a},p=function(){if(s.active)return r.removeEventListener("focusin",T,!0),r.removeEventListener("mousedown",x,!0),r.removeEventListener("touchstart",x,!0),r.removeEventListener("click",R,!0),r.removeEventListener("keydown",C,!0),r.removeEventListener("keydown",P),a},m=function(f){var A=f.some(function(N){var V=Array.from(N.removedNodes);return V.some(function(F){return F===s.mostRecentlyFocusedNode})});A&&E(u())},v=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(m):void 0,b=function(){v&&(v.disconnect(),s.active&&!s.paused&&s.containers.map(function(f){v.observe(f,{subtree:!0,childList:!0})}))};return a={get active(){return s.active},get paused(){return s.paused},activate:function(f){if(s.active)return this;var A=c(f,"onActivate"),N=c(f,"onPostActivate"),V=c(f,"checkCanFocusTrap");V||h(),s.active=!0,s.paused=!1,s.nodeFocusedBeforeActivation=y(r),A?.();var F=function(){V&&h(),g(),b(),N?.()};return V?(V(s.containers.concat()).then(F,F),this):(F(),this)},deactivate:function(f){if(!s.active)return this;var A=Ll({onDeactivate:o.onDeactivate,onPostDeactivate:o.onPostDeactivate,checkCanReturnFocus:o.checkCanReturnFocus},f);clearTimeout(s.delayInitialFocusTimer),s.delayInitialFocusTimer=void 0,p(),s.active=!1,s.paused=!1,b(),Vl.deactivateTrap(i,a);var N=c(A,"onDeactivate"),V=c(A,"onPostDeactivate"),F=c(A,"checkCanReturnFocus"),G=c(A,"returnFocus","returnFocusOnDeactivate");N?.();var L=function(){Fl(function(){G&&E(S(s.nodeFocusedBeforeActivation)),V?.()})};return G&&F?(F(S(s.nodeFocusedBeforeActivation)).then(L,L),this):(L(),this)},pause:function(f){return s.active?(s.manuallyPaused=!0,this._setPausedState(!0,f)):this},unpause:function(f){return s.active?(s.manuallyPaused=!1,i[i.length-1]!==this?this:this._setPausedState(!1,f)):this},updateContainerElements:function(f){var A=[].concat(f).filter(Boolean);return s.containers=A.map(function(N){return typeof N=="string"?r.querySelector(N):N}),s.active&&h(),b(),this}},Object.defineProperties(a,{_isManuallyPaused:{value:function(){return s.manuallyPaused}},_setPausedState:{value:function(f,A){if(s.paused===f)return this;if(s.paused=f,f){var N=c(A,"onPause"),V=c(A,"onPostPause");N?.(),p(),b(),V?.()}else{var F=c(A,"onUnpause"),G=c(A,"onPostUnpause");F?.(),h(),g(),b(),G?.()}return this}}}),a.updateContainerElements(e),a};const Za=Je(!1),li=({modalContent:t,setIsVisible:e,isVisible:n,refer:r})=>{const[i,o]=W();return j(()=>{r.current&&o(Of(r.current))},[r]),j(()=>{n?i?.activate():i?.deactivate()},[n,i]),_("div",{role:"presentation",id:"overlay",class:n?"fixed inset-0 z-20 flex items-center justify-center bg-slate-50/70 backdrop-blur-[1px] transition-opacity duration-200 dark:bg-slate-900/70":"h-0 w-0 opacity-0",onKeyDown:s=>{s.key==="Escape"&&e(!1)},children:_("div",{id:"modal-window",ref:r,class:n?"dark:(bg-slate-600, shadow-slate-700) flex w-80 flex-col rounded bg-slate-300 shadow-sm shadow-slate-200 transition-all sm:w-96 md:w-[28rem] lg:w-[32rem] xl:w-[36rem] 2xl:w-[40rem]":"hidden",children:[_("div",{class:"mx-4 my-2 flex justify-between text-xl font-semibold text-violet-900 transition-all select-none xl:text-2xl dark:text-pink-300",children:[t?.key,_("button",{type:"button",id:"close-modal",class:"hover:(bg-slate-200, active:bg-slate-100, dark:(bg-slate-700, active:bg-slate-800)) rounded px-1 leading-4 transition-colors xl:px-2",onClick:()=>{e(!1)},children:_(xf,{"aria-label":"X",strokeWidth:"2.5",class:"scale-105 transition-transform xl:scale-125"})})]}),_("div",{id:"modal-content",class:"dark:(bg-slate-700, text-slate-50) mx-px mb-px grow rounded-b bg-slate-200 px-4 py-3 text-slate-900",children:_(Za.Provider,{value:n,children:t})})]})})},$o=({id:t,handleCancel:e})=>_("button",{type:"button",id:t,class:"hover:(bg-slate-100, active:(bg-slate-50), dark:(bg-slate-800, active:bg-slate-900)) md:(w-24, py-2) xl:(w-32, py-2.5, text-xl) max-h-[3rem] w-20 rounded py-1.5 text-lg font-medium transition-all lg:w-28",onClick:e,children:"Cancel"}),jo=({id:t,action:e,styleClass:n,isDisabled:r=!1,isLoading:i=!1,handleConfirm:o})=>_("button",{type:"button",id:t,class:`${n} ${r||i?"cursor-not-allowed !bg-slate-500":""} md:(w-24, py-2) xl:(w-32, py-2.5, text-xl) max-h-[3rem] w-20 rounded py-1.5 text-lg font-medium text-white transition-all lg:w-28`,disabled:r||i,onClick:()=>void o(),children:i?_(Q0,{"aria-label":"Loader Circle",strokeWidth:"2.25",class:"inline-block scale-110 animate-spin"}):e}),Wy="Service Worker Register failed.",$l="Sort failed.",oo="Project Add failed.",jl="Project Save failed.",Ul="Project Delete failed.",zl="Todo Add failed.",Bl="Todo Save failed.",Wl="Todo Delete failed.",Hl="Login failed.",ql="Logout failed.",so="Sync failed.",Nf="Project Added!",Hy="Project Saved!",qy="Project Deleted!",Gy="Todo Added!",Ky="Todo Saved!",Yy="Todo Deleted!",Jy="You're Logged In!",Xy="You're Logged Out!",Mf="Data Synced!",jt=Fg,Ee=Ug;/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=()=>{};var Gl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Zy=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},Vf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,d=o>>2,u=(o&3)<<4|a>>4;let h=(a&15)<<2|l>>6,y=l&63;c||(y=64,s||(h=64)),r.push(n[d],n[u],n[h],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Lf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||l==null||u==null)throw new e_;const h=o<<2|a>>4;if(r.push(h),l!==64){const y=a<<4&240|l>>2;if(r.push(y),u!==64){const E=l<<6&192|u;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class e_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const t_=function(t){const e=Lf(t);return Vf.encodeByteArray(e,!0)},ao=function(t){return t_(t).replace(/\./g,"")},Ff=function(t){try{return Vf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=()=>n_().__FIREBASE_DEFAULTS__,i_=()=>{if(typeof process>"u"||typeof Gl>"u")return;const t=Gl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},o_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ff(t[1]);return e&&JSON.parse(e)},ec=()=>{try{return Qy()||r_()||i_()||o_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$f=t=>ec()?.emulatorHosts?.[t],s_=t=>{const e=$f(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},jf=()=>ec()?.config,Uf=t=>ec()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function zf(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ao(JSON.stringify(n)),ao(JSON.stringify(s)),""].join(".")}const Rr={};function l_(){const t={prod:[],emulator:[]};for(const e of Object.keys(Rr))Rr[e]?t.emulator.push(e):t.prod.push(e);return t}function u_(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Kl=!1;function Bf(t,e){if(typeof window>"u"||typeof document>"u"||!sr(window.location.host)||Rr[t]===e||Rr[t]||Kl)return;Rr[t]=e;function n(h){return`__firebase__banner__${h}`}const r="__firebase__banner",o=l_().prod.length>0;function s(){const h=document.getElementById(r);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function c(h,y){h.setAttribute("width","24"),h.setAttribute("id",y),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function l(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{Kl=!0,s()},h}function d(h,y){h.setAttribute("id",y),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function u(){const h=u_(r),y=n("text"),E=document.getElementById(y)||document.createElement("span"),S=n("learnmore"),k=document.getElementById(S)||document.createElement("a"),x=n("preprendIcon"),T=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const I=h.element;a(I),d(k,S);const C=l();c(T,x),I.append(T,E,k,C),document.body.appendChild(I)}o?(E.innerText="Preview backend disconnected.",T.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(T.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,E.innerText="Preview backend running in this workspace."),E.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",u):u()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function d_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function f_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function h_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function p_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function m_(){const t=Ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g_(){try{return typeof indexedDB=="object"}catch{return!1}}function y_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __="FirebaseError";class Ut extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=__,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ui.prototype.create)}}class ui{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?b_(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Ut(i,a,r)}}function b_(t,e){return t.replace(v_,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const v_=/\{\$([^}]+)}/g;function w_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Tn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(Yl(o)&&Yl(s)){if(!Tn(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Yl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function k_(t,e){const n=new E_(t,e);return n.subscribe.bind(n)}class E_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");T_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=vs),i.error===void 0&&(i.error=vs),i.complete===void 0&&(i.complete=vs);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function T_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(t){return t&&t._delegate?t._delegate:t}class xn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new a_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(I_(e))try{this.getOrInitializeService({instanceIdentifier:pn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pn){return this.instances.has(e)}getOptions(e=pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:S_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pn){return this.component?this.component.multipleInstances?e:pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function S_(t){return t===pn?void 0:t}function I_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new x_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const C_={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},P_=ne.INFO,R_={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},D_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=R_[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tc{constructor(e){this.name=e,this._logLevel=P_,this._logHandler=D_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?C_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const O_=(t,e)=>e.some(n=>t instanceof n);let Jl,Xl;function N_(){return Jl||(Jl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function M_(){return Xl||(Xl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wf=new WeakMap,ta=new WeakMap,Hf=new WeakMap,ws=new WeakMap,nc=new WeakMap;function L_(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(sn(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Wf.set(n,t)}).catch(()=>{}),nc.set(e,t),e}function V_(t){if(ta.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});ta.set(t,e)}let na={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ta.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function F_(t){na=t(na)}function $_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ks(this),e,...n);return Hf.set(r,e.sort?e.sort():[e]),sn(r)}:M_().includes(t)?function(...e){return t.apply(ks(this),e),sn(Wf.get(this))}:function(...e){return sn(t.apply(ks(this),e))}}function j_(t){return typeof t=="function"?$_(t):(t instanceof IDBTransaction&&V_(t),O_(t,N_())?new Proxy(t,na):t)}function sn(t){if(t instanceof IDBRequest)return L_(t);if(ws.has(t))return ws.get(t);const e=j_(t);return e!==t&&(ws.set(t,e),nc.set(e,t)),e}const ks=t=>nc.get(t);function U_(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=sn(s);return r&&s.addEventListener("upgradeneeded",c=>{r(sn(s.result),c.oldVersion,c.newVersion,sn(s.transaction),c)}),n&&s.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{o&&c.addEventListener("close",()=>o()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const z_=["get","getKey","getAll","getAllKeys","count"],B_=["put","add","delete","clear"],Es=new Map;function Ql(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Es.get(e))return Es.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=B_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||z_.includes(n)))return;const o=async function(s,...a){const c=this.transaction(s,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Es.set(e,o),o}F_(t=>({...t,get:(e,n,r)=>Ql(e,n)||t.get(e,n,r),has:(e,n)=>!!Ql(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(H_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function H_(t){return t.getComponent()?.type==="VERSION"}const ra="@firebase/app",Zl="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new tc("@firebase/app"),q_="@firebase/app-compat",G_="@firebase/analytics-compat",K_="@firebase/analytics",Y_="@firebase/app-check-compat",J_="@firebase/app-check",X_="@firebase/auth",Q_="@firebase/auth-compat",Z_="@firebase/database",eb="@firebase/data-connect",tb="@firebase/database-compat",nb="@firebase/functions",rb="@firebase/functions-compat",ib="@firebase/installations",ob="@firebase/installations-compat",sb="@firebase/messaging",ab="@firebase/messaging-compat",cb="@firebase/performance",lb="@firebase/performance-compat",ub="@firebase/remote-config",db="@firebase/remote-config-compat",fb="@firebase/storage",hb="@firebase/storage-compat",pb="@firebase/firestore",mb="@firebase/ai",gb="@firebase/firestore-compat",yb="firebase",_b="12.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="[DEFAULT]",bb={[ra]:"fire-core",[q_]:"fire-core-compat",[K_]:"fire-analytics",[G_]:"fire-analytics-compat",[J_]:"fire-app-check",[Y_]:"fire-app-check-compat",[X_]:"fire-auth",[Q_]:"fire-auth-compat",[Z_]:"fire-rtdb",[eb]:"fire-data-connect",[tb]:"fire-rtdb-compat",[nb]:"fire-fn",[rb]:"fire-fn-compat",[ib]:"fire-iid",[ob]:"fire-iid-compat",[sb]:"fire-fcm",[ab]:"fire-fcm-compat",[cb]:"fire-perf",[lb]:"fire-perf-compat",[ub]:"fire-rc",[db]:"fire-rc-compat",[fb]:"fire-gcs",[hb]:"fire-gcs-compat",[pb]:"fire-fst",[gb]:"fire-fst-compat",[mb]:"fire-vertex","fire-js":"fire-js",[yb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=new Map,vb=new Map,oa=new Map;function eu(t,e){try{t.container.addComponent(e)}catch(n){Mt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rr(t){const e=t.name;if(oa.has(e))return Mt.debug(`There were multiple attempts to register component ${e}.`),!1;oa.set(e,t);for(const n of co.values())eu(n,t);for(const n of vb.values())eu(n,t);return!0}function rc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function nt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},an=new ui("app","Firebase",wb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=_b;function qf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ia,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw an.create("bad-app-name",{appName:String(i)});if(n||(n=jf()),!n)throw an.create("no-options");const o=co.get(i);if(o){if(Tn(n,o.options)&&Tn(r,o.config))return o;throw an.create("duplicate-app",{appName:i})}const s=new A_(i);for(const c of oa.values())s.addComponent(c);const a=new kb(n,r,s);return co.set(i,a),a}function Gf(t=ia){const e=co.get(t);if(!e&&t===ia&&jf())return qf();if(!e)throw an.create("no-app",{appName:t});return e}function cn(t,e,n){let r=bb[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const s=[`Unable to register library "${r}" with version "${e}":`];i&&s.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&s.push("and"),o&&s.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mt.warn(s.join(" "));return}rr(new xn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="firebase-heartbeat-database",Tb=1,zr="firebase-heartbeat-store";let Ts=null;function Kf(){return Ts||(Ts=U_(Eb,Tb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(zr)}catch(n){console.warn(n)}}}}).catch(t=>{throw an.create("idb-open",{originalErrorMessage:t.message})})),Ts}async function xb(t){try{const n=(await Kf()).transaction(zr),r=await n.objectStore(zr).get(Yf(t));return await n.done,r}catch(e){if(e instanceof Ut)Mt.warn(e.message);else{const n=an.create("idb-get",{originalErrorMessage:e?.message});Mt.warn(n.message)}}}async function tu(t,e){try{const r=(await Kf()).transaction(zr,"readwrite");await r.objectStore(zr).put(e,Yf(t)),await r.done}catch(n){if(n instanceof Ut)Mt.warn(n.message);else{const r=an.create("idb-set",{originalErrorMessage:n?.message});Mt.warn(r.message)}}}function Yf(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb=1024,Ib=30;class Ab{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=nu();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>Ib){const i=Rb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Mt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nu(),{heartbeatsToSend:n,unsentEntries:r}=Cb(this._heartbeatsCache.heartbeats),i=ao(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Mt.warn(e),""}}}function nu(){return new Date().toISOString().substring(0,10)}function Cb(t,e=Sb){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),ru(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ru(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return g_()?y_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xb(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return tu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return tu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ru(t){return ao(JSON.stringify({version:2,heartbeats:t})).length}function Rb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(t){rr(new xn("platform-logger",e=>new W_(e),"PRIVATE")),rr(new xn("heartbeat",e=>new Ab(e),"PRIVATE")),cn(ra,Zl,t),cn(ra,Zl,"esm2020"),cn("fire-js","")}Db("");var iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jf;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,p){function m(){}m.prototype=p.prototype,g.F=p.prototype,g.prototype=new m,g.prototype.constructor=g,g.D=function(v,b,w){for(var f=Array(arguments.length-2),A=2;A<arguments.length;A++)f[A-2]=arguments[A];return p.prototype[b].apply(v,f)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(g,p,m){m||(m=0);const v=Array(16);if(typeof p=="string")for(var b=0;b<16;++b)v[b]=p.charCodeAt(m++)|p.charCodeAt(m++)<<8|p.charCodeAt(m++)<<16|p.charCodeAt(m++)<<24;else for(b=0;b<16;++b)v[b]=p[m++]|p[m++]<<8|p[m++]<<16|p[m++]<<24;p=g.g[0],m=g.g[1],b=g.g[2];let w=g.g[3],f;f=p+(w^m&(b^w))+v[0]+3614090360&4294967295,p=m+(f<<7&4294967295|f>>>25),f=w+(b^p&(m^b))+v[1]+3905402710&4294967295,w=p+(f<<12&4294967295|f>>>20),f=b+(m^w&(p^m))+v[2]+606105819&4294967295,b=w+(f<<17&4294967295|f>>>15),f=m+(p^b&(w^p))+v[3]+3250441966&4294967295,m=b+(f<<22&4294967295|f>>>10),f=p+(w^m&(b^w))+v[4]+4118548399&4294967295,p=m+(f<<7&4294967295|f>>>25),f=w+(b^p&(m^b))+v[5]+1200080426&4294967295,w=p+(f<<12&4294967295|f>>>20),f=b+(m^w&(p^m))+v[6]+2821735955&4294967295,b=w+(f<<17&4294967295|f>>>15),f=m+(p^b&(w^p))+v[7]+4249261313&4294967295,m=b+(f<<22&4294967295|f>>>10),f=p+(w^m&(b^w))+v[8]+1770035416&4294967295,p=m+(f<<7&4294967295|f>>>25),f=w+(b^p&(m^b))+v[9]+2336552879&4294967295,w=p+(f<<12&4294967295|f>>>20),f=b+(m^w&(p^m))+v[10]+4294925233&4294967295,b=w+(f<<17&4294967295|f>>>15),f=m+(p^b&(w^p))+v[11]+2304563134&4294967295,m=b+(f<<22&4294967295|f>>>10),f=p+(w^m&(b^w))+v[12]+1804603682&4294967295,p=m+(f<<7&4294967295|f>>>25),f=w+(b^p&(m^b))+v[13]+4254626195&4294967295,w=p+(f<<12&4294967295|f>>>20),f=b+(m^w&(p^m))+v[14]+2792965006&4294967295,b=w+(f<<17&4294967295|f>>>15),f=m+(p^b&(w^p))+v[15]+1236535329&4294967295,m=b+(f<<22&4294967295|f>>>10),f=p+(b^w&(m^b))+v[1]+4129170786&4294967295,p=m+(f<<5&4294967295|f>>>27),f=w+(m^b&(p^m))+v[6]+3225465664&4294967295,w=p+(f<<9&4294967295|f>>>23),f=b+(p^m&(w^p))+v[11]+643717713&4294967295,b=w+(f<<14&4294967295|f>>>18),f=m+(w^p&(b^w))+v[0]+3921069994&4294967295,m=b+(f<<20&4294967295|f>>>12),f=p+(b^w&(m^b))+v[5]+3593408605&4294967295,p=m+(f<<5&4294967295|f>>>27),f=w+(m^b&(p^m))+v[10]+38016083&4294967295,w=p+(f<<9&4294967295|f>>>23),f=b+(p^m&(w^p))+v[15]+3634488961&4294967295,b=w+(f<<14&4294967295|f>>>18),f=m+(w^p&(b^w))+v[4]+3889429448&4294967295,m=b+(f<<20&4294967295|f>>>12),f=p+(b^w&(m^b))+v[9]+568446438&4294967295,p=m+(f<<5&4294967295|f>>>27),f=w+(m^b&(p^m))+v[14]+3275163606&4294967295,w=p+(f<<9&4294967295|f>>>23),f=b+(p^m&(w^p))+v[3]+4107603335&4294967295,b=w+(f<<14&4294967295|f>>>18),f=m+(w^p&(b^w))+v[8]+1163531501&4294967295,m=b+(f<<20&4294967295|f>>>12),f=p+(b^w&(m^b))+v[13]+2850285829&4294967295,p=m+(f<<5&4294967295|f>>>27),f=w+(m^b&(p^m))+v[2]+4243563512&4294967295,w=p+(f<<9&4294967295|f>>>23),f=b+(p^m&(w^p))+v[7]+1735328473&4294967295,b=w+(f<<14&4294967295|f>>>18),f=m+(w^p&(b^w))+v[12]+2368359562&4294967295,m=b+(f<<20&4294967295|f>>>12),f=p+(m^b^w)+v[5]+4294588738&4294967295,p=m+(f<<4&4294967295|f>>>28),f=w+(p^m^b)+v[8]+2272392833&4294967295,w=p+(f<<11&4294967295|f>>>21),f=b+(w^p^m)+v[11]+1839030562&4294967295,b=w+(f<<16&4294967295|f>>>16),f=m+(b^w^p)+v[14]+4259657740&4294967295,m=b+(f<<23&4294967295|f>>>9),f=p+(m^b^w)+v[1]+2763975236&4294967295,p=m+(f<<4&4294967295|f>>>28),f=w+(p^m^b)+v[4]+1272893353&4294967295,w=p+(f<<11&4294967295|f>>>21),f=b+(w^p^m)+v[7]+4139469664&4294967295,b=w+(f<<16&4294967295|f>>>16),f=m+(b^w^p)+v[10]+3200236656&4294967295,m=b+(f<<23&4294967295|f>>>9),f=p+(m^b^w)+v[13]+681279174&4294967295,p=m+(f<<4&4294967295|f>>>28),f=w+(p^m^b)+v[0]+3936430074&4294967295,w=p+(f<<11&4294967295|f>>>21),f=b+(w^p^m)+v[3]+3572445317&4294967295,b=w+(f<<16&4294967295|f>>>16),f=m+(b^w^p)+v[6]+76029189&4294967295,m=b+(f<<23&4294967295|f>>>9),f=p+(m^b^w)+v[9]+3654602809&4294967295,p=m+(f<<4&4294967295|f>>>28),f=w+(p^m^b)+v[12]+3873151461&4294967295,w=p+(f<<11&4294967295|f>>>21),f=b+(w^p^m)+v[15]+530742520&4294967295,b=w+(f<<16&4294967295|f>>>16),f=m+(b^w^p)+v[2]+3299628645&4294967295,m=b+(f<<23&4294967295|f>>>9),f=p+(b^(m|~w))+v[0]+4096336452&4294967295,p=m+(f<<6&4294967295|f>>>26),f=w+(m^(p|~b))+v[7]+1126891415&4294967295,w=p+(f<<10&4294967295|f>>>22),f=b+(p^(w|~m))+v[14]+2878612391&4294967295,b=w+(f<<15&4294967295|f>>>17),f=m+(w^(b|~p))+v[5]+4237533241&4294967295,m=b+(f<<21&4294967295|f>>>11),f=p+(b^(m|~w))+v[12]+1700485571&4294967295,p=m+(f<<6&4294967295|f>>>26),f=w+(m^(p|~b))+v[3]+2399980690&4294967295,w=p+(f<<10&4294967295|f>>>22),f=b+(p^(w|~m))+v[10]+4293915773&4294967295,b=w+(f<<15&4294967295|f>>>17),f=m+(w^(b|~p))+v[1]+2240044497&4294967295,m=b+(f<<21&4294967295|f>>>11),f=p+(b^(m|~w))+v[8]+1873313359&4294967295,p=m+(f<<6&4294967295|f>>>26),f=w+(m^(p|~b))+v[15]+4264355552&4294967295,w=p+(f<<10&4294967295|f>>>22),f=b+(p^(w|~m))+v[6]+2734768916&4294967295,b=w+(f<<15&4294967295|f>>>17),f=m+(w^(b|~p))+v[13]+1309151649&4294967295,m=b+(f<<21&4294967295|f>>>11),f=p+(b^(m|~w))+v[4]+4149444226&4294967295,p=m+(f<<6&4294967295|f>>>26),f=w+(m^(p|~b))+v[11]+3174756917&4294967295,w=p+(f<<10&4294967295|f>>>22),f=b+(p^(w|~m))+v[2]+718787259&4294967295,b=w+(f<<15&4294967295|f>>>17),f=m+(w^(b|~p))+v[9]+3951481745&4294967295,g.g[0]=g.g[0]+p&4294967295,g.g[1]=g.g[1]+(b+(f<<21&4294967295|f>>>11))&4294967295,g.g[2]=g.g[2]+b&4294967295,g.g[3]=g.g[3]+w&4294967295}r.prototype.v=function(g,p){p===void 0&&(p=g.length);const m=p-this.blockSize,v=this.C;let b=this.h,w=0;for(;w<p;){if(b==0)for(;w<=m;)i(this,g,w),w+=this.blockSize;if(typeof g=="string"){for(;w<p;)if(v[b++]=g.charCodeAt(w++),b==this.blockSize){i(this,v),b=0;break}}else for(;w<p;)if(v[b++]=g[w++],b==this.blockSize){i(this,v),b=0;break}}this.h=b,this.o+=p},r.prototype.A=function(){var g=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);g[0]=128;for(var p=1;p<g.length-8;++p)g[p]=0;p=this.o*8;for(var m=g.length-8;m<g.length;++m)g[m]=p&255,p/=256;for(this.v(g),g=Array(16),p=0,m=0;m<4;++m)for(let v=0;v<32;v+=8)g[p++]=this.g[m]>>>v&255;return g};function o(g,p){var m=a;return Object.prototype.hasOwnProperty.call(m,g)?m[g]:m[g]=p(g)}function s(g,p){this.h=p;const m=[];let v=!0;for(let b=g.length-1;b>=0;b--){const w=g[b]|0;v&&w==p||(m[b]=w,v=!1)}this.g=m}var a={};function c(g){return-128<=g&&g<128?o(g,function(p){return new s([p|0],p<0?-1:0)}):new s([g|0],g<0?-1:0)}function l(g){if(isNaN(g)||!isFinite(g))return u;if(g<0)return k(l(-g));const p=[];let m=1;for(let v=0;g>=m;v++)p[v]=g/m|0,m*=4294967296;return new s(p,0)}function d(g,p){if(g.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(g.charAt(0)=="-")return k(d(g.substring(1),p));if(g.indexOf("-")>=0)throw Error('number format error: interior "-" character');const m=l(Math.pow(p,8));let v=u;for(let w=0;w<g.length;w+=8){var b=Math.min(8,g.length-w);const f=parseInt(g.substring(w,w+b),p);b<8?(b=l(Math.pow(p,b)),v=v.j(b).add(l(f))):(v=v.j(m),v=v.add(l(f)))}return v}var u=c(0),h=c(1),y=c(16777216);t=s.prototype,t.m=function(){if(S(this))return-k(this).m();let g=0,p=1;for(let m=0;m<this.g.length;m++){const v=this.i(m);g+=(v>=0?v:4294967296+v)*p,p*=4294967296}return g},t.toString=function(g){if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(E(this))return"0";if(S(this))return"-"+k(this).toString(g);const p=l(Math.pow(g,6));var m=this;let v="";for(;;){const b=C(m,p).g;m=x(m,b.j(p));let w=((m.g.length>0?m.g[0]:m.h)>>>0).toString(g);if(m=b,E(m))return w+v;for(;w.length<6;)w="0"+w;v=w+v}},t.i=function(g){return g<0?0:g<this.g.length?this.g[g]:this.h};function E(g){if(g.h!=0)return!1;for(let p=0;p<g.g.length;p++)if(g.g[p]!=0)return!1;return!0}function S(g){return g.h==-1}t.l=function(g){return g=x(this,g),S(g)?-1:E(g)?0:1};function k(g){const p=g.g.length,m=[];for(let v=0;v<p;v++)m[v]=~g.g[v];return new s(m,~g.h).add(h)}t.abs=function(){return S(this)?k(this):this},t.add=function(g){const p=Math.max(this.g.length,g.g.length),m=[];let v=0;for(let b=0;b<=p;b++){let w=v+(this.i(b)&65535)+(g.i(b)&65535),f=(w>>>16)+(this.i(b)>>>16)+(g.i(b)>>>16);v=f>>>16,w&=65535,f&=65535,m[b]=f<<16|w}return new s(m,m[m.length-1]&-2147483648?-1:0)};function x(g,p){return g.add(k(p))}t.j=function(g){if(E(this)||E(g))return u;if(S(this))return S(g)?k(this).j(k(g)):k(k(this).j(g));if(S(g))return k(this.j(k(g)));if(this.l(y)<0&&g.l(y)<0)return l(this.m()*g.m());const p=this.g.length+g.g.length,m=[];for(var v=0;v<2*p;v++)m[v]=0;for(v=0;v<this.g.length;v++)for(let b=0;b<g.g.length;b++){const w=this.i(v)>>>16,f=this.i(v)&65535,A=g.i(b)>>>16,N=g.i(b)&65535;m[2*v+2*b]+=f*N,T(m,2*v+2*b),m[2*v+2*b+1]+=w*N,T(m,2*v+2*b+1),m[2*v+2*b+1]+=f*A,T(m,2*v+2*b+1),m[2*v+2*b+2]+=w*A,T(m,2*v+2*b+2)}for(g=0;g<p;g++)m[g]=m[2*g+1]<<16|m[2*g];for(g=p;g<2*p;g++)m[g]=0;return new s(m,0)};function T(g,p){for(;(g[p]&65535)!=g[p];)g[p+1]+=g[p]>>>16,g[p]&=65535,p++}function I(g,p){this.g=g,this.h=p}function C(g,p){if(E(p))throw Error("division by zero");if(E(g))return new I(u,u);if(S(g))return p=C(k(g),p),new I(k(p.g),k(p.h));if(S(p))return p=C(g,k(p)),new I(k(p.g),p.h);if(g.g.length>30){if(S(g)||S(p))throw Error("slowDivide_ only works with positive integers.");for(var m=h,v=p;v.l(g)<=0;)m=P(m),v=P(v);var b=R(m,1),w=R(v,1);for(v=R(v,2),m=R(m,2);!E(v);){var f=w.add(v);f.l(g)<=0&&(b=b.add(m),w=f),v=R(v,1),m=R(m,1)}return p=x(g,b.j(p)),new I(b,p)}for(b=u;g.l(p)>=0;){for(m=Math.max(1,Math.floor(g.m()/p.m())),v=Math.ceil(Math.log(m)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),w=l(m),f=w.j(p);S(f)||f.l(g)>0;)m-=v,w=l(m),f=w.j(p);E(w)&&(w=h),b=b.add(w),g=x(g,f)}return new I(b,g)}t.B=function(g){return C(this,g).h},t.and=function(g){const p=Math.max(this.g.length,g.g.length),m=[];for(let v=0;v<p;v++)m[v]=this.i(v)&g.i(v);return new s(m,this.h&g.h)},t.or=function(g){const p=Math.max(this.g.length,g.g.length),m=[];for(let v=0;v<p;v++)m[v]=this.i(v)|g.i(v);return new s(m,this.h|g.h)},t.xor=function(g){const p=Math.max(this.g.length,g.g.length),m=[];for(let v=0;v<p;v++)m[v]=this.i(v)^g.i(v);return new s(m,this.h^g.h)};function P(g){const p=g.g.length+1,m=[];for(let v=0;v<p;v++)m[v]=g.i(v)<<1|g.i(v-1)>>>31;return new s(m,g.h)}function R(g,p){const m=p>>5;p%=32;const v=g.g.length-m,b=[];for(let w=0;w<v;w++)b[w]=p>0?g.i(w+m)>>>p|g.i(w+m+1)<<32-p:g.i(w+m);return new s(b,g.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.B,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=l,s.fromString=d,Jf=s}).apply(typeof iu<"u"?iu:typeof self<"u"?self:typeof window<"u"?window:{});const ou="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Me.UNAUTHENTICATED=new Me(null),Me.GOOGLE_CREDENTIALS=new Me("google-credentials-uid"),Me.FIRST_PARTY=new Me("first-party-uid"),Me.MOCK_USER=new Me("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cr="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new tc("@firebase/firestore");function lo(t,...e){if(ir.logLevel<=ne.DEBUG){const n=e.map(oc);ir.debug(`Firestore (${cr}): ${t}`,...n)}}function ic(t,...e){if(ir.logLevel<=ne.ERROR){const n=e.map(oc);ir.error(`Firestore (${cr}): ${t}`,...n)}}function Xf(t,...e){if(ir.logLevel<=ne.WARN){const n=e.map(oc);ir.warn(`Firestore (${cr}): ${t}`,...n)}}function oc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Qf(t,r,n)}function Qf(t,e,n){let r=`FIRESTORE (${cr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw ic(r),new Error(r)}function un(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||Qf(e,i,r)}function Uo(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="ok",Ob="cancelled",Dr="unknown",$="invalid-argument",Nb="deadline-exceeded",Mb="not-found",Lb="permission-denied",sa="unauthenticated",Vb="resource-exhausted",Sn="failed-precondition",Fb="aborted",$b="out-of-range",Zf="unimplemented",jb="internal",Ub="unavailable";class M extends Ut{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Me.UNAUTHENTICATED)))}shutdown(){}}class Bb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class Wb{constructor(e){this.auth=null,e.onInit((n=>{this.auth=n}))}getToken(){return this.auth?this.auth.getToken().then((e=>e?(un(typeof e.accessToken=="string",42297,{t:e}),new eh(e.accessToken,new Me(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class Hb{constructor(e,n,r){this.i=e,this.o=n,this.u=r,this.type="FirstParty",this.user=Me.FIRST_PARTY,this.l=new Map}h(){return this.u?this.u():null}get headers(){this.l.set("X-Goog-AuthUser",this.i);const e=this.h();return e&&this.l.set("Authorization",e),this.o&&this.l.set("X-Goog-Iam-Authorization-Token",this.o),this.l}}class qb{constructor(e,n,r){this.i=e,this.o=n,this.u=r}getToken(){return Promise.resolve(new Hb(this.i,this.o,this.u))}start(e,n){e.enqueueRetryable((()=>n(Me.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class au{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Gb{constructor(e,n){this.m=n,this.appCheck=null,this.T=null,nt(e)&&e.settings.appCheckToken&&(this.T=e.settings.appCheckToken),n.onInit((r=>{this.appCheck=r}))}getToken(){return this.T?Promise.resolve(new au(this.T)):this.appCheck?this.appCheck.getToken().then((e=>e?(un(typeof e.token=="string",3470,{tokenResult:e}),new au(e.token)):null)):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n,r,i,o,s,a,c,l,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l,this.isUsingEmulator=d}}const aa="(default)";class Br{constructor(e,n){this.projectId=e,this.database=n||aa}static empty(){return new Br("","")}get isDefaultDatabase(){return this.database===aa}isEqual(e){return e instanceof Br&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Yb(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%62))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function ca(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),o=e.charAt(r);if(i!==o)return xs(i)===xs(o)?de(i,o):xs(i)?1:-1}return de(t.length,e.length)}const Xb=55296,Qb=57343;function xs(t){const e=t.charCodeAt(0);return e>=Xb&&e<=Qb}function th(t,e,n){return t.length===e.length&&t.every(((r,i)=>n(r,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu="__name__";class pt{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ue(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return pt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pt?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=pt.compareSegments(e.get(i),n.get(i));if(o!==0)return o}return de(e.length,n.length)}static compareSegments(e,n){const r=pt.isNumericId(e),i=pt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?pt.extractNumericId(e).compare(pt.extractNumericId(n)):ca(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Jf.fromString(e.substring(4,e.length-2))}}class he extends pt{construct(e,n,r){return new he(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M($,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((i=>i.length>0)))}return new he(n)}static emptyPath(){return new he([])}}const Zb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Le extends pt{construct(e,n,r){return new Le(e,n,r)}static isValidIdentifier(e){return Zb.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Le.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===cu}static keyField(){return new Le([cu])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new M($,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new M($,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M($,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new M($,"Unterminated ` in path: "+e);return new Le(n)}static emptyPath(){return new Le([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.path=e}static fromPath(e){return new ke(he.fromString(e))}static fromName(e){return new ke(he.fromString(e).popFirst(5))}static empty(){return new ke(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return he.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ke(new he(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(t,e,n){if(!n)throw new M($,`Function ${t}() cannot be called with an empty ${e}.`)}function lu(t){if(!ke.isDocumentKey(t))throw new M($,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function uu(t){if(ke.isDocumentKey(t))throw new M($,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function rh(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function zo(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue(12329,{type:typeof t})}function lr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M($,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zo(t);throw new M($,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di=null;function ev(){return Di===null?Di=(function(){return 268435456+Math.round(2147483648*Math.random())})():Di++,"0x"+Di.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(t){return t==null}function uo(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss="RestConnection",nv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class rv{get P(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.A=n+"://"+e.host,this.R=`projects/${r}/databases/${i}`,this.V=this.databaseId.database===aa?`project_id=${r}`:`project_id=${r}&database_id=${i}`}I(e,n,r,i,o){const s=ev(),a=this.p(e,n.toUriEncodedString());lo(Ss,`Sending RPC '${e}' ${s}:`,a,r);const c={"google-cloud-resource-prefix":this.R,"x-goog-request-params":this.V};this.F(c,i,o);const{host:l}=new URL(a),d=sr(l);return this.v(e,a,c,r,d).then((u=>(lo(Ss,`Received RPC '${e}' ${s}: `,u),u)),(u=>{throw Xf(Ss,`RPC '${e}' ${s} failed with error: `,u,"url: ",a,"request:",r),u}))}D(e,n,r,i,o,s){return this.I(e,n,r,i,o)}F(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+cr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((i,o)=>e[o]=i)),r&&r.headers.forEach(((i,o)=>e[o]=i))}p(e,n){const r=nv[e];return`${this.A}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var du,K;function fu(t){if(t===void 0)return ic("RPC_ERROR","HTTP error has no status"),Dr;switch(t){case 200:return su;case 400:return Sn;case 401:return sa;case 403:return Lb;case 404:return Mb;case 409:return Fb;case 416:return $b;case 429:return Vb;case 499:return Ob;case 500:return Dr;case 501:return Zf;case 503:return Ub;case 504:return Nb;default:return t>=200&&t<300?su:t>=400&&t<500?Sn:t>=500&&t<600?jb:Dr}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(K=du||(du={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";class iv extends rv{S(e,n){throw new Error("Not supported by FetchConnection")}async v(e,n,r,i,o){const s=JSON.stringify(i);let a;try{const c={method:"POST",headers:r,body:s};o&&(c.credentials="include"),a=await fetch(n,c)}catch(c){const l=c;throw new M(fu(l.status),"Request failed with error: "+l.statusText)}if(!a.ok){let c=await a.json();Array.isArray(c)&&(c=c[0]);const l=c?.error?.message;throw new M(fu(a.status),`Request failed with error: ${l??a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ov("Invalid base64 string: "+o):o}})(e);return new Lt(n)}static fromUint8Array(e){const n=(function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o})(e);return new Lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Lt.EMPTY_BYTE_STRING=new Lt("");const sv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function In(t){if(un(!!t,39018),typeof t=="string"){let e=0;const n=sv.exec(t);if(un(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:fe(t.seconds),nanos:fe(t.nanos)}}function fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Wr(t){return typeof t=="string"?Lt.fromBase64String(t):Lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(t,e){const n={typeString:t};return e&&(n.value=e),n}function hi(t,e){if(!rh(t))throw new M($,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const s=t[r];if(i&&typeof s!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&s!==o.value){n=`Expected '${r}' field to equal '${o.value}'`;break}}if(n)throw new M($,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu=-62135596800,mu=1e6;class ye{static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*mu);return new ye(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M($,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M($,"Timestamp nanoseconds out of range: "+n);if(e<pu)throw new M($,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M($,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/mu}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(hi(e,ye._jsonSchema))return new ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-pu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ye._jsonSchemaVersion="firestore/timestamp/1.0",ye._jsonSchema={type:Xe("string",ye._jsonSchemaVersion),seconds:Xe("number"),nanoseconds:Xe("number")};function oh(t){return(t?.mapValue?.fields||{}).__type__?.stringValue==="server_timestamp"}function sh(t){const e=t.mapValue.fields.__previous_value__;return oh(e)?sh(e):e}function Hr(t){const e=In(t.mapValue.fields.__local_write_time__.timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="__type__",av="__max__",Oi={},ch="__vector__",fo="value";function An(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?oh(t)?4:(function(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===av})(t)?9007199254740991:(function(n){return(n?.mapValue?.fields||{})[ah]?.stringValue===ch})(t)?10:11:ue(28295,{value:t})}function ho(t,e){if(t===e)return!0;const n=An(t);if(n!==An(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hr(t).isEqual(Hr(e));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=In(i.timestampValue),a=In(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(i,o){return Wr(i.bytesValue).isEqual(Wr(o.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(i,o){return fe(i.geoPointValue.latitude)===fe(o.geoPointValue.latitude)&&fe(i.geoPointValue.longitude)===fe(o.geoPointValue.longitude)})(t,e);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return fe(i.integerValue)===fe(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=fe(i.doubleValue),a=fe(o.doubleValue);return s===a?uo(s)===uo(a):isNaN(s)&&isNaN(a)}return!1})(t,e);case 9:return th(t.arrayValue.values||[],e.arrayValue.values||[],ho);case 10:case 11:return(function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(hu(s)!==hu(a))return!1;for(const c in s)if(s.hasOwnProperty(c)&&(a[c]===void 0||!ho(s[c],a[c])))return!1;return!0})(t,e);default:return ue(52216,{left:t})}}function qr(t,e){return(t.values||[]).find((n=>ho(n,e)))!==void 0}function po(t,e){if(t===e)return 0;const n=An(t),r=An(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return(function(o,s){const a=fe(o.integerValue||o.doubleValue),c=fe(s.integerValue||s.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1})(t,e);case 3:return gu(t.timestampValue,e.timestampValue);case 4:return gu(Hr(t),Hr(e));case 5:return ca(t.stringValue,e.stringValue);case 6:return(function(o,s){const a=Wr(o),c=Wr(s);return a.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(o,s){const a=o.split("/"),c=s.split("/");for(let l=0;l<a.length&&l<c.length;l++){const d=de(a[l],c[l]);if(d!==0)return d}return de(a.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(o,s){const a=de(fe(o.latitude),fe(s.latitude));return a!==0?a:de(fe(o.longitude),fe(s.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return yu(t.arrayValue,e.arrayValue);case 10:return(function(o,s){const a=o.fields||{},c=s.fields||{},l=a[fo]?.arrayValue,d=c[fo]?.arrayValue,u=de(l?.values?.length||0,d?.values?.length||0);return u!==0?u:yu(l,d)})(t.mapValue,e.mapValue);case 11:return(function(o,s){if(o===Oi&&s===Oi)return 0;if(o===Oi)return 1;if(s===Oi)return-1;const a=o.fields||{},c=Object.keys(a),l=s.fields||{},d=Object.keys(l);c.sort(),d.sort();for(let u=0;u<c.length&&u<d.length;++u){const h=ca(c[u],d[u]);if(h!==0)return h;const y=po(a[c[u]],l[d[u]]);if(y!==0)return y}return de(c.length,d.length)})(t.mapValue,e.mapValue);default:throw ue(23264,{C:n})}}function gu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=In(t),r=In(e),i=de(n.seconds,r.seconds);return i!==0?i:de(n.nanos,r.nanos)}function yu(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const o=po(n[i],r[i]);if(o)return o}return de(n.length,r.length)}function _u(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function lh(t){return!!t&&"arrayValue"in t}function bu(t){return!!t&&"nullValue"in t}function vu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Is(t){return!!t&&"mapValue"in t}function Or(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return fi(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Or(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Or(t.arrayValue.values[n]);return e}return{...t}}class wu{constructor(e,n){this.position=e,this.inclusive=n}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{}class ut extends uh{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new cv(e,n,r):n==="array-contains"?new dv(e,r):n==="in"?new fv(e,r):n==="not-in"?new hv(e,r):n==="array-contains-any"?new pv(e,r):new ut(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new lv(e,r):new uv(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(po(n,this.value)):n!==null&&An(this.value)===An(n)&&this.matchesComparison(po(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pi extends uh{constructor(e,n){super(),this.filters=e,this.op=n,this.N=null}static create(e,n){return new pi(e,n)}matches(e){return(function(r){return r.op==="and"})(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.N!==null||(this.N=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.N}getFilters(){return Object.assign([],this.filters)}}class cv extends ut{constructor(e,n,r){super(e,n,r),this.key=ke.fromName(r.referenceValue)}matches(e){const n=ke.comparator(e.key,this.key);return this.matchesComparison(n)}}class lv extends ut{constructor(e,n){super(e,"in",n),this.keys=dh("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class uv extends ut{constructor(e,n){super(e,"not-in",n),this.keys=dh("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function dh(t,e){return(e.arrayValue?.values||[]).map((n=>ke.fromName(n.referenceValue)))}class dv extends ut{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return lh(n)&&qr(n.arrayValue,this.value)}}class fv extends ut{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&qr(this.value.arrayValue,n)}}class hv extends ut{constructor(e,n){super(e,"not-in",n)}matches(e){if(qr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!qr(this.value.arrayValue,n)}}class pv extends ut{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!lh(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>qr(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{static fromTimestamp(e){return new Ce(e)}static min(){return new Ce(new ye(0,0))}static max(){return new Ce(new ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n){this.comparator=e,this.root=n||Se.EMPTY}insert(e,n){return new go(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Se.BLACK,null,null))}remove(e){return new go(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Se.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ni(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ni(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ni(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ni(this.root,e,this.comparator,!0)}}class Ni{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Se{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??Se.RED,this.left=i??Se.EMPTY,this.right=o??Se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new Se(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Se.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ue(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ue(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ue(27949);return e+(this.isRed()?0:1)}}Se.EMPTY=null,Se.RED=!0,Se.BLACK=!1;Se.EMPTY=new class{constructor(){this.size=0}get key(){throw ue(57766)}get value(){throw ue(16141)}get color(){throw ue(16727)}get left(){throw ue(29726)}get right(){throw ue(36894)}copy(e,n,r,i,o){return this}insert(e,n,r){return new Se(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.comparator=e,this.data=new go(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ku(this.data.getIterator())}getIteratorFrom(e){return new ku(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Gr)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Gr(this.comparator);return n.data=e,n}}class ku{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.fields=e,e.sort(Le.comparator)}static empty(){return new Cn([])}unionWith(e){let n=new Gr(Le.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Cn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return th(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.value=e}static empty(){return new Ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Is(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Or(n)}setAll(e){let n=Le.emptyPath(),r={},i=[];e.forEach(((s,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=Or(s):i.push(a.lastSegment())}));const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());Is(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ho(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Is(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){fi(n,((i,o)=>e[i]=o));for(const i of r)delete e[i]}clone(){return new Ke(Or(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new Xt(e,0,Ce.min(),Ce.min(),Ce.min(),Ke.empty(),0)}static newFoundDocument(e,n,r,i){return new Xt(e,1,n,Ce.min(),r,i,0)}static newNoDocument(e,n){return new Xt(e,2,n,Ce.min(),Ce.min(),Ke.empty(),0)}static newUnknownDocument(e,n){return new Xt(e,3,n,Ce.min(),Ce.min(),Ke.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.O=null}}function Eu(t,e=null,n=[],r=[],i=null,o=null,s=null){return new mv(t,e,n,r,i,o,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=c,this.q=null,this.B=null,this.$=null,this.startAt,this.endAt}}function gv(t){return t.collectionGroup!==null}function yv(t){const e=Uo(t);if(e.q===null){e.q=[];const n=new Set;for(const o of e.explicitOrderBy)e.q.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new Gr(Le.comparator);return s.filters.forEach((c=>{c.getFlattenedFilters().forEach((l=>{l.isInequality()&&(a=a.add(l.field))}))})),a})(e).forEach((o=>{n.has(o.canonicalString())||o.isKeyField()||e.q.push(new mo(o,r))})),n.has(Le.keyField().canonicalString())||e.q.push(new mo(Le.keyField(),r))}return e.q}function _v(t){const e=Uo(t);return e.B||(e.B=bv(e,yv(t))),e.B}function bv(t,e){if(t.limitType==="F")return Eu(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new mo(i.field,o)}));const n=t.endAt?new wu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new wu(t.startAt.position,t.startAt.inclusive):null;return Eu(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function la(t,e){const n=t.filters.concat([e]);return new sc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uo(e)?"-0":e}}function vv(t,e){return(function(r){return typeof r=="number"&&Number.isInteger(r)&&!uo(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER})(e)?(function(r){return{integerValue:""+r}})(e):fh(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(){this._=void 0}}class wv extends Bo{}class kv extends Bo{constructor(e){super(),this.elements=e}}class Ev extends Bo{constructor(e){super(),this.elements=e}}class Tv extends Bo{constructor(e,n){super(),this.serializer=e,this.k=n}}class _t{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _t}static exists(e){return new _t(void 0,e)}static updateTime(e){return new _t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Wo{}class hh extends Wo{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ac extends Wo{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}class cc extends Wo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xv extends Wo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv={asc:"ASCENDING",desc:"DESCENDING"},Iv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Av={and:"AND",or:"OR"};class Cv{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ua(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Pv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Rv(t,e){return ua(t,e.toTimestamp())}function Tu(t){return un(!!t,49232),Ce.fromTimestamp((function(n){const r=In(n);return new ye(r.seconds,r.nanos)})(t))}function lc(t,e){return da(t,e).canonicalString()}function da(t,e){const n=(function(i){return new he(["projects",i.projectId,"databases",i.database])})(t).child("documents");return e===void 0?n:n.child(e)}function fa(t,e){return lc(t.databaseId,e.path)}function Dv(t,e){const n=(function(i){const o=he.fromString(i);return un(mh(o),10190,{key:o.toString()}),o})(e);if(n.get(1)!==t.databaseId.projectId)throw new M($,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M($,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ke((function(i){return un(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)})(n))}function xu(t,e,n){return{name:fa(t,e),fields:n.value.mapValue.fields}}function Ov(t,e){let n;if(e instanceof hh)n={update:xu(t,e.key,e.value)};else if(e instanceof cc)n={delete:fa(t,e.key)};else if(e instanceof ac)n={update:xu(t,e.key,e.data),updateMask:Fv(e.fieldMask)};else{if(!(e instanceof xv))return ue(16599,{L:e.type});n={verify:fa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(o,s){const a=s.transform;if(a instanceof wv)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof kv)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ev)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Tv)return{fieldPath:s.field.canonicalString(),increment:a.k};throw ue(20930,{transform:s.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(i,o){return o.updateTime!==void 0?{updateTime:Rv(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:ue(27497)})(t,e.precondition)),n}function Nv(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=(function(l,d){return lc(l.databaseId,d)})(t,i);const o=(function(l){if(l.length!==0)return ph(pi.create(l,"and"))})(e.filters);o&&(n.structuredQuery.where=o);const s=(function(l){if(l.length!==0)return l.map((d=>(function(h){return{field:Hn(h.field),direction:Mv(h.dir)}})(d)))})(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=(function(l,d){return l.useProto3Json||tv(d)?d:{value:d}})(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=(function(l){return{before:l.inclusive,values:l.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(l){return{before:!l.inclusive,values:l.position}})(e.endAt)),{M:n,parent:i}}function Mv(t){return Sv[t]}function Lv(t){return Iv[t]}function Vv(t){return Av[t]}function Hn(t){return{fieldPath:t.canonicalString()}}function ph(t){return t instanceof ut?(function(n){if(n.op==="=="){if(vu(n.value))return{unaryFilter:{field:Hn(n.field),op:"IS_NAN"}};if(bu(n.value))return{unaryFilter:{field:Hn(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(vu(n.value))return{unaryFilter:{field:Hn(n.field),op:"IS_NOT_NAN"}};if(bu(n.value))return{unaryFilter:{field:Hn(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hn(n.field),op:Lv(n.op),value:n.value}}})(t):t instanceof pi?(function(n){const r=n.getFilters().map((i=>ph(i)));return r.length===1?r[0]:{compositeFilter:{op:Vv(n.op),filters:r}}})(t):ue(54877,{filter:t})}function Fv(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function mh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(t){return new Cv(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{}class jv extends $v{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.et=!1}rt(){if(this.et)throw new M(Sn,"The client has already been terminated.")}I(e,n,r,i){return this.rt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,s])=>this.connection.I(e,da(n,r),i,o,s))).catch((o=>{throw o.name==="FirebaseError"?(o.code===sa&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(Dr,o.toString())}))}D(e,n,r,i,o){return this.rt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,a])=>this.connection.D(e,da(n,r),i,s,a,o))).catch((s=>{throw s.name==="FirebaseError"?(s.code===sa&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(Dr,s.toString())}))}terminate(){this.et=!0,this.connection.terminate()}}async function Ho(t,e){const n=Uo(t),r={writes:e.map((i=>Ov(n.serializer,i)))};await n.I("Commit",n.serializer.databaseId,he.emptyPath(),r)}async function Uv(t,e){const n=Uo(t),{M:r,parent:i}=Nv(n.serializer,_v(e));return(await n.D("RunQuery",n.serializer.databaseId,i,{structuredQuery:r.structuredQuery})).filter((o=>!!o.document)).map((o=>(function(a,c,l){const d=Dv(a,c.name),u=Tu(c.updateTime),h=c.createTime?Tu(c.createTime):Ce.min(),y=new Ke({mapValue:{fields:c.fields}}),E=Xt.newFoundDocument(d,u,h,y);return l?E.setHasCommittedMutations():E})(n.serializer,o.document,void 0)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh="ComponentProvider",Nr=new Map;function mi(t){if(t._terminated)throw new M(Sn,"The client has already been terminated.");if(!Nr.has(t)){lo(gh,"Initializing Datastore");const e=(function(o){return new iv(o)})((function(o,s,a,c){return new Kb(o,s,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,ih(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(t._databaseId,t.app.options.appId||"",t._persistenceKey,t._freezeSettings())),n=uc(t._databaseId),r=(function(o,s,a,c){return new jv(o,s,a,c)})(t._authCredentials,t._appCheckCredentials,e,n);Nr.set(t,r)}return Nr.get(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=1048576,yh="firestore.googleapis.com",Su=!0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new M($,"Can't provide ssl option if host option is not set");this.host=yh,this.ssl=Su}else this.host=e.host,this.ssl=e.ssl??Su;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<zv)throw new M($,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(r,i,o,s){if(i===!0&&s===!0)throw new M($,`${r} and ${o} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ih(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new M($,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new M($,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new M($,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gi{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Iu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(Sn,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new M(Sn,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Iu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new zb;switch(r.type){case"firstParty":return new qb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M($,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Nr.get(n);r&&(lo(gh,"Removing Datastore"),Nr.delete(n),r.terminate())})(this),Promise.resolve()}}function Bv(t,e){const n=typeof t=="object"?t:Gf(),r=typeof t=="string"?t:"(default)",i=rc(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const o=s_("firestore");o&&Wv(i,...o)}return i}function Wv(t,e,n,r={}){t=lr(t,gi);const i=sr(e),o=t._getSettings(),s={...o,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;i&&(zf(`https://${a}`),Bf("Firestore",!0)),o.host!==yh&&o.host!==a&&Xf("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...o,host:a,ssl:i,emulatorOptions:r};if(!Tn(c,s)&&(t._setSettings(c),r.mockUserToken)){let l,d;if(typeof r.mockUserToken=="string")l=r.mockUserToken,d=Me.MOCK_USER;else{l=c_(r.mockUserToken,t._app?.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new M($,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Me(u)}t._authCredentials=new Bb(new eh(l,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Nn(this.firestore,e,this._query)}}class me{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new me(this.firestore,e,this._key)}toJSON(){return{type:me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(hi(n,me._jsonSchema))return new me(e,r||null,new ke(he.fromString(n.referencePath)))}}me._jsonSchemaVersion="firestore/documentReference/1.0",me._jsonSchema={type:Xe("string",me._jsonSchemaVersion),referencePath:Xe("string")};class Dt extends Nn{constructor(e,n,r){super(e,n,(function(o){return new sc(o)})(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new me(this.firestore,null,new ke(e))}withConverter(e){return new Dt(this.firestore,e,this._path)}}function Kr(t,e,...n){if(t=_e(t),nh("collection","path",e),t instanceof gi){const r=he.fromString(e,...n);return uu(r),new Dt(t,null,r)}{if(!(t instanceof me||t instanceof Dt))throw new M($,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return uu(r),new Dt(t.firestore,null,r)}}function fn(t,e,...n){if(t=_e(t),arguments.length===1&&(e=Jb.newId()),nh("doc","path",e),t instanceof gi){const r=he.fromString(e,...n);return lu(r),new me(t,null,new ke(r))}{if(!(t instanceof me||t instanceof Dt))throw new M($,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return lu(r),new me(t.firestore,t instanceof Dt?t.converter:null,new ke(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ye(Lt.fromBase64String(e))}catch(n){throw new M($,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ye(Lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ye._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(hi(e,Ye._jsonSchema))return Ye.fromBase64String(e.bytes)}}Ye._jsonSchemaVersion="firestore/bytes/1.0",Ye._jsonSchema={type:Xe("string",Ye._jsonSchemaVersion),bytes:Xe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M($,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M($,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M($,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:bt._jsonSchemaVersion}}static fromJSON(e){if(hi(e,bt._jsonSchema))return new bt(e.latitude,e.longitude)}}bt._jsonSchemaVersion="firestore/geoPoint/1.0",bt._jsonSchema={type:Xe("string",bt._jsonSchemaVersion),latitude:Xe("number"),longitude:Xe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:vt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(hi(e,vt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new vt(e.vectorValues);throw new M($,"Expected 'vectorValues' field to be a number array")}}}vt._jsonSchemaVersion="firestore/vectorValue/1.0",vt._jsonSchema={type:Xe("string",vt._jsonSchemaVersion),vectorValues:Xe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=/^__.*__$/;class qv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ac(e,this.data,this.fieldMask,n,this.fieldTransforms):new hh(e,this.data,n,this.fieldTransforms)}}class _h{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ac(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function bh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue(40011,{it:t})}}class fc{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.st(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get it(){return this.settings.it}ot(e){return new fc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ut(e){const n=this.path?.child(e),r=this.ot({path:n,_t:!1});return r.ct(e),r}lt(e){const n=this.path?.child(e),r=this.ot({path:n,_t:!1});return r.st(),r}ht(e){return this.ot({path:void 0,_t:!0})}ft(e){return yo(e,this.settings.methodName,this.settings.dt||!1,this.path,this.settings.Et)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}st(){if(this.path)for(let e=0;e<this.path.length;e++)this.ct(this.path.get(e))}ct(e){if(e.length===0)throw this.ft("Document fields must not be empty");if(bh(this.it)&&Hv.test(e))throw this.ft('Document fields cannot begin and end with "__"')}}class Gv{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||uc(e)}Tt(e,n,r,i=!1){return new fc({it:e,methodName:n,Et:r,path:Le.emptyPath(),_t:!1,dt:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qo(t){const e=t._freezeSettings(),n=uc(t._databaseId);return new Gv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vh(t,e,n,r,i,o={}){const s=t.Tt(o.merge||o.mergeFields?2:0,e,n,i);hc("Data must be an object, but it was:",s,r);const a=Eh(r,s);let c,l;if(o.merge)c=new Cn(s.fieldMask),l=s.fieldTransforms;else if(o.mergeFields){const d=[];for(const u of o.mergeFields){const h=ha(e,u,n);if(!s.contains(h))throw new M($,`Field '${h}' is specified in your field mask but missing from your input data.`);xh(d,h)||d.push(h)}c=new Cn(d),l=s.fieldTransforms.filter((u=>c.covers(u.field)))}else c=null,l=s.fieldTransforms;return new qv(new Ke(a),c,l)}class Go extends dc{_toFieldTransform(e){if(e.it!==2)throw e.it===1?e.ft(`${this._methodName}() can only appear at the top level of your update data`):e.ft(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Go}}function wh(t,e,n,r){const i=t.Tt(1,e,n);hc("Data must be an object, but it was:",i,r);const o=[],s=Ke.empty();fi(r,((c,l)=>{const d=pc(e,c,n);l=_e(l);const u=i.lt(d);if(l instanceof Go)o.push(d);else{const h=_i(l,u);h!=null&&(o.push(d),s.set(d,h))}}));const a=new Cn(o);return new _h(s,a,i.fieldTransforms)}function kh(t,e,n,r,i,o){const s=t.Tt(1,e,n),a=[ha(e,r,n)],c=[i];if(o.length%2!=0)throw new M($,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<o.length;h+=2)a.push(ha(e,o[h])),c.push(o[h+1]);const l=[],d=Ke.empty();for(let h=a.length-1;h>=0;--h)if(!xh(l,a[h])){const y=a[h];let E=c[h];E=_e(E);const S=s.lt(y);if(E instanceof Go)l.push(y);else{const k=_i(E,S);k!=null&&(l.push(y),d.set(y,k))}}const u=new Cn(l);return new _h(d,u,s.fieldTransforms)}function Kv(t,e,n,r=!1){return _i(n,t.Tt(r?4:3,e))}function _i(t,e){if(Th(t=_e(t)))return hc("Unsupported field value:",e,t),Eh(t,e);if(t instanceof dc)return(function(r,i){if(!bh(i.it))throw i.ft(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ft(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings._t&&e.it!==4)throw e.ft("Nested arrays are not supported");return(function(r,i){const o=[];let s=0;for(const a of r){let c=_i(a,i.ht(s));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),s++}return{arrayValue:{values:o}}})(t,e)}return(function(r,i){if((r=_e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return vv(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ye.fromDate(r);return{timestampValue:ua(i.serializer,o)}}if(r instanceof ye){const o=new ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ua(i.serializer,o)}}if(r instanceof bt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ye)return{bytesValue:Pv(i.serializer,r._byteString)};if(r instanceof me){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.ft(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:lc(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof vt)return(function(s,a){return{mapValue:{fields:{[ah]:{stringValue:ch},[fo]:{arrayValue:{values:s.toArray().map((l=>{if(typeof l!="number")throw a.ft("VectorValues must only contain numeric values.");return fh(a.serializer,l)}))}}}}}})(r,i);throw i.ft(`Unsupported field value: ${zo(r)}`)})(t,e)}function Eh(t,e){const n={};return(function(i){for(const o in i)if(Object.prototype.hasOwnProperty.call(i,o))return!1;return!0})(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fi(t,((r,i)=>{const o=_i(i,e.ut(r));o!=null&&(n[r]=o)})),{mapValue:{fields:n}}}function Th(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ye||t instanceof bt||t instanceof Ye||t instanceof me||t instanceof dc||t instanceof vt)}function hc(t,e,n){if(!Th(n)||!rh(n)){const r=zo(n);throw r==="an object"?e.ft(t+" a custom object"):e.ft(t+" "+r)}}function ha(t,e,n){if((e=_e(e))instanceof yi)return e._internalPath;if(typeof e=="string")return pc(t,e);throw yo("Field path arguments must be of type string or ",t,!1,void 0,n)}const Yv=new RegExp("[~\\*/\\[\\]]");function pc(t,e,n){if(e.search(Yv)>=0)throw yo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yi(...e.split("."))._internalPath}catch{throw yo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yo(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=` in field ${r}`),s&&(c+=` in document ${i}`),c+=")"),new M($,a+t+c)}function xh(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Sh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Sh extends Jv{data(){return super.data()}}class Xv{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function mc(t,e){return typeof e=="string"?pc(t,e):e instanceof yi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{}class Ih extends gc{}function Ah(t,e,...n){let r=[];e instanceof gc&&r.push(e),r=r.concat(n),(function(o){const s=o.filter((c=>c instanceof yc)).length,a=o.filter((c=>c instanceof Ko)).length;if(s>1||s>0&&a>0)throw new M($,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)t=i._apply(t);return t}class Ko extends Ih{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ko(e,n,r)}_apply(e){const n=this._parse(e);return Ch(e._query,n),new Nn(e.firestore,e.converter,la(e._query,n))}_parse(e){const n=qo(e.firestore);return(function(o,s,a,c,l,d,u){let h;if(l.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new M($,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Cu(u,d);const E=[];for(const S of u)E.push(Au(c,o,S));h={arrayValue:{values:E}}}else h=Au(c,o,u)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Cu(u,d),h=Kv(a,s,u,d==="in"||d==="not-in");return ut.create(l,d,h)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Qv(t,e,n){const r=e,i=mc("where",t);return Ko._create(i,r,n)}class yc extends gc{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new yc(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:pi.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(i,o){let s=i;const a=o.getFlattenedFilters();for(const c of a)Ch(s,c),s=la(s,c)})(e._query,n),new Nn(e.firestore,e.converter,la(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _c extends Ih{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new _c(e,n)}_apply(e){const n=(function(i,o,s){if(i.startAt!==null)throw new M($,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new M($,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new mo(o,s)})(e._query,this._field,this._direction);return new Nn(e.firestore,e.converter,(function(i,o){const s=i.explicitOrderBy.concat([o]);return new sc(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)})(e._query,n))}}function Zv(t,e="asc"){const n=e,r=mc("orderBy",t);return _c._create(r,n)}function Au(t,e,n){if(typeof(n=_e(n))=="string"){if(n==="")throw new M($,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gv(e)&&n.indexOf("/")!==-1)throw new M($,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(he.fromString(n));if(!ke.isDocumentKey(r))throw new M($,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return _u(t,new ke(r))}if(n instanceof me)return _u(t,n._key);throw new M($,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zo(n)}.`)}function Cu(t,e){if(!Array.isArray(t)||t.length===0)throw new M($,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ch(t,e){const n=(function(i,o){for(const s of i)for(const a of s.getFlattenedFilters())if(o.indexOf(a.op)>=0)return a.op;return null})(t.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new M($,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M($,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class e1{convertValue(e,n="none"){switch(An(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return fi(e,((i,o)=>{r[i]=this.convertValue(o,n)})),r}convertVectorValue(e){const n=e.fields?.[fo].arrayValue?.values?.map((r=>fe(r.doubleValue)));return new vt(n)}convertGeoPoint(e){return new bt(fe(e.latitude),fe(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=sh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Hr(e));default:return null}}convertTimestamp(e){const n=In(e);return new ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=he.fromString(e);un(mh(r),9688,{name:e});const i=new Br(r.get(1),r.get(3)),o=new ke(r.popFirst(5));return i.isEqual(n)||ic(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class t1 extends e1{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ye(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new me(this.firestore,null,n)}}function pa(t){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new M(Zf,"limitToLast() queries require specifying at least one orderBy() clause")})((t=lr(t,Nn))._query);const e=mi(t.firestore),n=new t1(t.firestore);return Uv(e,t._query).then((r=>{const i=r.map((o=>new Sh(t.firestore,n,o.key,o,t.converter)));return t._query.limitType==="L"&&i.reverse(),new Xv(t,i)}))}function bc(t,e,n,...r){const i=qo((t=lr(t,me)).firestore);let o;return o=typeof(e=_e(e))=="string"||e instanceof yi?kh(i,"updateDoc",t._key,e,n,r):wh(i,"updateDoc",t._key,e),Ho(mi(t.firestore),[o.toMutation(t._key,_t.exists(!0))])}function n1(t){return Ho(mi((t=lr(t,me)).firestore),[new cc(t._key,_t.none())])}function Rh(t,e){const n=fn(t=lr(t,Dt)),r=Ph(t.converter,e),i=vh(qo(t.firestore),"addDoc",n._key,r,n.converter!==null,{});return Ho(mi(t.firestore),[i.toMutation(n._key,_t.exists(!1))]).then((()=>n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=qo(e)}set(e,n,r){this._verifyNotCommitted();const i=As(e,this._firestore),o=Ph(i.converter,n,r),s=vh(this._dataReader,"WriteBatch.set",i._key,o,i.converter!==null,r);return this._mutations.push(s.toMutation(i._key,_t.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const o=As(e,this._firestore);let s;return s=typeof(n=_e(n))=="string"||n instanceof yi?kh(this._dataReader,"WriteBatch.update",o._key,n,r,i):wh(this._dataReader,"WriteBatch.update",o._key,n),this._mutations.push(s.toMutation(o._key,_t.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=As(e,this._firestore);return this._mutations=this._mutations.concat(new cc(n._key,_t.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new M(Sn,"A write batch can no longer be used after commit() has been called.")}}function As(t,e){if((t=_e(t)).firestore!==e)throw new M($,"Provided document reference is from a different Firestore instance.");return t}function vc(t){const e=mi(t=lr(t,gi));return new r1(t,(n=>Ho(e,n)))}(function(){(function(n){cr=n})(`${ar}_lite`),rr(new xn("firestore/lite",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),o=new gi(new Wb(e.getProvider("auth-internal")),new Gb(i,e.getProvider("app-check-internal")),(function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new M($,'"projectId" not provided in firebase.initializeApp.');return new Br(a.options.projectId,c)})(i,n),i);return r&&o._setSettings(r),o}),"PUBLIC").setMultipleInstances(!0)),cn("firestore-lite",ou,""),cn("firestore-lite",ou,"esm2020")})();const i1=2,Qe=["Todo","In Progress","Done"],Yr=["All","Todo","In Progress","Done"],Kn={Title:[_(A0,{"aria-label":"Sort by Title Descending",size:"22",class:"md:scale-110"},"Title Descending"),_(D0,{"aria-label":"Sort by Title Ascending",size:"22",class:"md:scale-110"},"Title Ascending")],Priority:[_(I0,{"aria-label":"Sort by Priority Descending",size:"22",class:"md:scale-110"},"Priority Descending"),_(P0,{"aria-label":"Sort by Priority Ascending",size:"22",class:"md:scale-110"},"Priority Ascending")],"Due Date":[_(C0,{"aria-label":"Sort by Due Date Descending",size:"22",class:"md:scale-110"},"Due Date Descending"),_(R0,{"aria-label":"Sort by Priority Ascending",size:"22",class:"md:scale-110"},"Due Date Ascending")]};var o1="firebase",s1="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn(o1,s1,"app");function Dh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const a1=Dh,Oh=new ui("auth","Firebase",Dh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=new tc("@firebase/auth");function c1(t,...e){_o.logLevel<=ne.WARN&&_o.warn(`Auth (${ar}): ${t}`,...e)}function Wi(t,...e){_o.logLevel<=ne.ERROR&&_o.error(`Auth (${ar}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,...e){throw kc(t,...e)}function st(t,...e){return kc(t,...e)}function wc(t,e,n){const r={...a1(),[e]:n};return new ui("auth","Firebase",r).create(e,{appName:t.name})}function kn(t){return wc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function l1(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&kt(t,"argument-error"),wc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function kc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Oh.create(t,...e)}function U(t,e,...n){if(!t)throw kc(e,...n)}function Pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wi(e),new Error(e)}function Vt(t,e){t||Pt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(){return typeof self<"u"&&self.location?.href||""}function u1(){return Pu()==="http:"||Pu()==="https:"}function Pu(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(u1()||h_()||"connection"in navigator)?navigator.onLine:!0}function f1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vt(n>e,"Short delay should be less than long delay!"),this.isMobile=d_()||p_()}get(){return d1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(t,e){Vt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],m1=new bi(3e4,6e4);function Tc(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ur(t,e,n,r,i={}){return Mh(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=di({key:t.config.apiKey,...s}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l={method:e,headers:c,...o};return f_()||(l.referrerPolicy="no-referrer"),t.emulatorConfig&&sr(t.emulatorConfig.host)&&(l.credentials="include"),Nh.fetch()(await Lh(t,t.config.apiHost,n,a),l)})}async function Mh(t,e,n){t._canInitEmulator=!1;const r={...h1,...e};try{const i=new y1(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Mi(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mi(t,"credential-already-in-use",s);if(c==="EMAIL_EXISTS")throw Mi(t,"email-already-in-use",s);if(c==="USER_DISABLED")throw Mi(t,"user-disabled",s);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw wc(t,d,l);kt(t,d)}}catch(i){if(i instanceof Ut)throw i;kt(t,"network-request-failed",{message:String(i)})}}async function g1(t,e,n,r,i={}){const o=await ur(t,e,n,r,i);return"mfaPendingCredential"in o&&kt(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function Lh(t,e,n,r){const i=`${e}${n}?${r}`,o=t,s=o.config.emulator?Ec(t.config,i):`${t.config.apiScheme}://${i}`;return p1.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(s).toString():s}class y1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(st(this.auth,"network-request-failed")),m1.get())})}}function Mi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=st(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _1(t,e){return ur(t,"POST","/v1/accounts:delete",e)}async function bo(t,e){return ur(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function b1(t,e=!1){const n=_e(t),r=await n.getIdToken(e),i=xc(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o?.sign_in_provider;return{claims:i,token:r,authTime:Mr(Cs(i.auth_time)),issuedAtTime:Mr(Cs(i.iat)),expirationTime:Mr(Cs(i.exp)),signInProvider:s||null,signInSecondFactor:o?.sign_in_second_factor||null}}function Cs(t){return Number(t)*1e3}function xc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ff(n);return i?JSON.parse(i):(Wi("Failed to decode base64 JWT payload"),null)}catch(i){return Wi("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Ru(t){const e=xc(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ut&&v1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function v1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mr(this.lastLoginAt),this.creationTime=Mr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(t){const e=t.auth,n=await t.getIdToken(),r=await Jr(t,bo(e,{idToken:n}));U(r?.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=i.providerUserInfo?.length?Vh(i.providerUserInfo):[],s=E1(t.providerData,o),a=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!s?.length,l=a?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ga(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,d)}async function k1(t){const e=_e(t);await vo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function E1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Vh(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T1(t,e){const n=await Mh(t,{},async()=>{const r=di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=await Lh(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return t.emulatorConfig&&sr(t.emulatorConfig.host)&&(c.credentials="include"),Nh.fetch()(s,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function x1(t,e){return ur(t,"POST","/v2/accounts:revokeToken",Tc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ru(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){U(e.length!==0,"internal-error");const n=Ru(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await T1(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Yn;return r&&(U(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(U(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yn,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class it{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new w1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ga(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Jr(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return b1(this,e)}reload(){return k1(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new it({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await vo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nt(this.auth.app))return Promise.reject(kn(this.auth));const e=await this.getIdToken();return await Jr(this,_1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,o=n.phoneNumber??void 0,s=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:u,emailVerified:h,isAnonymous:y,providerData:E,stsTokenManager:S}=n;U(u&&S,e,"internal-error");const k=Yn.fromJSON(this.name,S);U(typeof u=="string",e,"internal-error"),Kt(r,e.name),Kt(i,e.name),U(typeof h=="boolean",e,"internal-error"),U(typeof y=="boolean",e,"internal-error"),Kt(o,e.name),Kt(s,e.name),Kt(a,e.name),Kt(c,e.name),Kt(l,e.name),Kt(d,e.name);const x=new it({uid:u,auth:e,email:i,emailVerified:h,displayName:r,isAnonymous:y,photoURL:s,phoneNumber:o,tenantId:a,stsTokenManager:k,createdAt:l,lastLoginAt:d});return E&&Array.isArray(E)&&(x.providerData=E.map(T=>({...T}))),c&&(x._redirectEventId=c),x}static async _fromIdTokenResponse(e,n,r=!1){const i=new Yn;i.updateFromServerResponse(n);const o=new it({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await vo(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];U(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Vh(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!o?.length,a=new Yn;a.updateFromIdToken(r);const c=new it({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ga(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!o?.length};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=new Map;function Rt(t){Vt(t instanceof Function,"Expected a class definition");let e=Du.get(t);return e?(Vt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Du.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fh.type="NONE";const Ou=Fh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t,e,n){return`firebase:${t}:${e}:${n}`}class Jn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Hi(this.userKey,i.apiKey,o),this.fullPersistenceKey=Hi("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await bo(this.auth,{idToken:e}).catch(()=>{});return n?it._fromGetAccountInfoResponse(this.auth,n,e):null}return it._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Jn(Rt(Ou),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let o=i[0]||Rt(Ou);const s=Hi(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const d=await l._get(s);if(d){let u;if(typeof d=="string"){const h=await bo(e,{idToken:d}).catch(()=>{});if(!h)break;u=await it._fromGetAccountInfoResponse(e,h,d)}else u=it._fromJSON(e,d);l!==o&&(a=u),o=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!o._shouldAllowMigration||!c.length?new Jn(o,e,r):(o=c[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==o)try{await l._remove(s)}catch{}})),new Jn(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($h(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wh(e))return"Blackberry";if(Hh(e))return"Webos";if(jh(e))return"Safari";if((e.includes("chrome/")||Uh(e))&&!e.includes("edge/"))return"Chrome";if(Bh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function $h(t=Ne()){return/firefox\//i.test(t)}function jh(t=Ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Uh(t=Ne()){return/crios\//i.test(t)}function zh(t=Ne()){return/iemobile/i.test(t)}function Bh(t=Ne()){return/android/i.test(t)}function Wh(t=Ne()){return/blackberry/i.test(t)}function Hh(t=Ne()){return/webos/i.test(t)}function Sc(t=Ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function S1(t=Ne()){return Sc(t)&&!!window.navigator?.standalone}function I1(){return m_()&&document.documentMode===10}function qh(t=Ne()){return Sc(t)||Bh(t)||Hh(t)||Wh(t)||/windows phone/i.test(t)||zh(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(t,e=[]){let n;switch(t){case"Browser":n=Nu(Ne());break;case"Worker":n=`${Nu(Ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ar}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const c=e(o);s(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C1(t,e={}){return ur(t,"GET","/v2/passwordPolicy",Tc(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1=6;class R1{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??P1,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mu(this),this.idTokenSubscription=new Mu(this),this.beforeStateQueue=new A1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Oh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rt(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Jn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await bo(this,{idToken:e}),r=await it._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(nt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(s=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(s,s))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=this.redirectUser?._redirectEventId,s=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===s)&&a?.user&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vo(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=f1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nt(this.app))return Promise.reject(kn(this));const n=e?_e(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nt(this.app)?Promise.reject(kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nt(this.app)?Promise.reject(kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await C1(this),n=new R1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ui("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await x1(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rt(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await Jn.create(this,[Rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{s=!0,c()}}else{const c=e.addObserver(n);return()=>{s=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(nt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&c1(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Yo(t){return _e(t)}class Mu{constructor(e){this.auth=e,this.observer=null,this.addObserver=k_(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ic={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function O1(t){Ic=t}function N1(t){return Ic.loadJS(t)}function M1(){return Ic.gapiScript}function L1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(t,e){const n=rc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Tn(o,e??{}))return i;kt(i,"already-initialized")}return n.initialize({options:e})}function F1(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Rt);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function $1(t,e,n){const r=Yo(t);U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Kh(e),{host:s,port:a}=j1(e),c=a===null?"":`:${a}`,l={url:`${o}//${s}${c}/`},d=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){U(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),U(Tn(l,r.config.emulator)&&Tn(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,sr(s)?(zf(`${o}//${s}${c}`),Bf("Auth",!0)):U1()}function Kh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function j1(t){const e=Kh(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Lu(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Lu(s)}}}function Lu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function U1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,n){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xn(t,e){return g1(t,"POST","/v1/accounts:signInWithIdp",Tc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1="http://localhost";class Pn extends Yh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...o}=n;if(!r||!i)return null;const s=new Pn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Xn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xn(e,n)}buildRequest(){const e={requestUri:z1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=di(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends Ac{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends vi{constructor(){super("facebook.com")}static credential(e){return Pn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zt.credential(e.oauthAccessToken)}catch{return null}}}Zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends vi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ct.credential(n,r)}catch{return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com";Ct.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends vi{constructor(){super("github.com")}static credential(e){return Pn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.GITHUB_SIGN_IN_METHOD="github.com";en.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends vi{constructor(){super("twitter.com")}static credential(e,n){return Pn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tn.credential(n,r)}catch{return null}}}tn.TWITTER_SIGN_IN_METHOD="twitter.com";tn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await it._fromIdTokenResponse(e,r,i),s=Vu(r);return new or({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Vu(r);return new or({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Vu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo extends Ut{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new wo(e,n,r,i)}}function Jh(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?wo._fromErrorAndOperation(t,o,e,r):o})}async function B1(t,e,n=!1){const r=await Jr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return or._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W1(t,e,n=!1){const{auth:r}=t;if(nt(r.app))return Promise.reject(kn(r));const i="reauthenticate";try{const o=await Jr(t,Jh(r,i,e,t),n);U(o.idToken,r,"internal-error");const s=xc(o.idToken);U(s,r,"internal-error");const{sub:a}=s;return U(t.uid===a,r,"user-mismatch"),or._forOperation(t,i,o)}catch(o){throw o?.code==="auth/user-not-found"&&kt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H1(t,e,n=!1){if(nt(t.app))return Promise.reject(kn(t));const r="signIn",i=await Jh(t,r,e),o=await or._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}function q1(t,e,n,r){return _e(t).onIdTokenChanged(e,n,r)}function G1(t,e,n){return _e(t).beforeAuthStateChanged(e,n)}function K1(t,e,n,r){return _e(t).onAuthStateChanged(e,n,r)}function Y1(t){return _e(t).signOut()}const ko="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ko,"1"),this.storage.removeItem(ko),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=1e3,X1=10;class Qh extends Xh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,c)=>{this.notifyListeners(s,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);I1()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,X1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},J1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qh.type="LOCAL";const Q1=Qh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh extends Xh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Zh.type="SESSION";const ep=Zh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Jo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!s?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async l=>l(n.origin,o)),c=await Z1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,c)=>{const l=Cc("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(u){const h=u;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(h.data.response);break;default:clearTimeout(d),clearTimeout(o),c(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return window}function tw(t){wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function nw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rw(){return navigator?.serviceWorker?.controller||null}function iw(){return tp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="firebaseLocalStorageDb",ow=1,Eo="firebaseLocalStorage",rp="fbase_key";class wi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xo(t,e){return t.transaction([Eo],e?"readwrite":"readonly").objectStore(Eo)}function sw(){const t=indexedDB.deleteDatabase(np);return new wi(t).toPromise()}function ya(){const t=indexedDB.open(np,ow);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Eo,{keyPath:rp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Eo)?e(r):(r.close(),await sw(),e(await ya()))})})}async function Fu(t,e,n){const r=Xo(t,!0).put({[rp]:e,value:n});return new wi(r).toPromise()}async function aw(t,e){const n=Xo(t,!1).get(e),r=await new wi(n).toPromise();return r===void 0?null:r.value}function $u(t,e){const n=Xo(t,!0).delete(e);return new wi(n).toPromise()}const cw=800,lw=3;class ip{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ya(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>lw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jo._getInstance(iw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await nw(),!this.activeServiceWorker)return;this.sender=new ew(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ya();return await Fu(e,ko,"1"),await $u(e,ko),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Fu(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$u(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Xo(i,!1).getAll();return new wi(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ip.type="LOCAL";const uw=ip;new bi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t,e){return e?Rt(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc extends Yh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dw(t){return H1(t.auth,new Pc(t),t.bypassAuthState)}function fw(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),W1(n,new Pc(t),t.bypassAuthState)}async function hw(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),B1(n,new Pc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dw;case"linkViaPopup":case"linkViaRedirect":return hw;case"reauthViaPopup":case"reauthViaRedirect":return fw;default:kt(this.auth,"internal-error")}}resolve(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=new bi(2e3,1e4);async function mw(t,e,n){if(nt(t.app))return Promise.reject(st(t,"operation-not-supported-in-this-environment"));const r=Yo(t);l1(t,e,Ac);const i=op(r,n);return new vn(r,"signInViaPopup",e,i).executeNotNull()}class vn extends sp{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,vn.currentPopupAction&&vn.currentPopupAction.cancel(),vn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const e=Cc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(st(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(st(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vn.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(st(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pw.get())};e()}}vn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw="pendingRedirect",qi=new Map;class yw extends sp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=qi.get(this.auth._key());if(!e){try{const r=await _w(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}qi.set(this.auth._key(),e)}return this.bypassAuthState||qi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _w(t,e){const n=ww(e),r=vw(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function bw(t,e){qi.set(t._key(),e)}function vw(t){return Rt(t._redirectPersistence)}function ww(t){return Hi(gw,t.config.apiKey,t.name)}async function kw(t,e,n=!1){if(nt(t.app))return Promise.reject(kn(t));const r=Yo(t),i=op(r,e),s=await new yw(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=600*1e3;class Tw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!ap(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(st(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ew&&this.cachedEventUids.clear(),this.cachedEventUids.has(ju(e))}saveEventToCache(e){this.cachedEventUids.add(ju(e)),this.lastProcessedEventTime=Date.now()}}function ju(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ap({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function xw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ap(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sw(t,e={}){return ur(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Aw=/^https?/;async function Cw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Sw(t);for(const n of e)try{if(Pw(n))return}catch{}kt(t,"unauthorized-domain")}function Pw(t){const e=ma(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!Aw.test(n))return!1;if(Iw.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=new bi(3e4,6e4);function Uu(){const t=wt().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Dw(t){return new Promise((e,n)=>{function r(){Uu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uu(),n(st(t,"network-request-failed"))},timeout:Rw.get()})}if(wt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(wt().gapi?.load)r();else{const i=L1("iframefcb");return wt()[i]=()=>{gapi.load?r():n(st(t,"network-request-failed"))},N1(`${M1()}?onload=${i}`).catch(o=>n(o))}}).catch(e=>{throw Gi=null,e})}let Gi=null;function Ow(t){return Gi=Gi||Dw(t),Gi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=new bi(5e3,15e3),Mw="__/auth/iframe",Lw="emulator/auth/iframe",Vw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $w(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ec(e,Lw):`https://${t.config.authDomain}/${Mw}`,r={apiKey:e.apiKey,appName:t.name,v:ar},i=Fw.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${di(r).slice(1)}`}async function jw(t){const e=await Ow(t),n=wt().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:$w(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vw,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=st(t,"network-request-failed"),a=wt().setTimeout(()=>{o(s)},Nw.get());function c(){wt().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zw=500,Bw=600,Ww="_blank",Hw="http://localhost";class zu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qw(t,e,n,r=zw,i=Bw){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c={...Uw,width:r.toString(),height:i.toString(),top:o,left:s},l=Ne().toLowerCase();n&&(a=Uh(l)?Ww:n),$h(l)&&(e=e||Hw,c.scrollbars="yes");const d=Object.entries(c).reduce((h,[y,E])=>`${h}${y}=${E},`,"");if(S1(l)&&a!=="_self")return Gw(e||"",a),new zu(null);const u=window.open(e||"",a,d);U(u,t,"popup-blocked");try{u.focus()}catch{}return new zu(u)}function Gw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw="__/auth/handler",Yw="emulator/auth/handler",Jw=encodeURIComponent("fac");async function Bu(t,e,n,r,i,o){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ar,eventId:i};if(e instanceof Ac){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",w_(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))s[d]=u}if(e instanceof vi){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(s.scopes=d.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await t._getAppCheckToken(),l=c?`#${Jw}=${encodeURIComponent(c)}`:"";return`${Xw(t)}?${di(a).slice(1)}${l}`}function Xw({config:t}){return t.emulator?Ec(t,Yw):`https://${t.authDomain}/${Kw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps="webStorageSupport";class Qw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ep,this._completeRedirectFn=kw,this._overrideRedirectResult=bw}async _openPopup(e,n,r,i){Vt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const o=await Bu(e,n,r,ma(),i);return qw(e,o,Cc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await Bu(e,n,r,ma(),i);return tw(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Vt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jw(e),r=new Tw(e);return n.register("authEvent",i=>(U(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ps,{type:Ps},i=>{const o=i?.[0]?.[Ps];o!==void 0&&n(!!o),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Cw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qh()||jh()||Sc()}}const Zw=Qw;var Wu="@firebase/auth",Hu="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function n2(t){rr(new xn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;U(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gh(t)},l=new D1(r,i,o,c);return F1(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),rr(new xn("auth-internal",e=>{const n=Yo(e.getProvider("auth").getImmediate());return(r=>new e2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cn(Wu,Hu,t2(t)),cn(Wu,Hu,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2=300,i2=Uf("authIdTokenMaxAge")||r2;let qu=null;const o2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>i2)return;const i=n?.token;qu!==i&&(qu=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function s2(t=Gf()){const e=rc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=V1(t,{popupRedirectResolver:Zw,persistence:[uw,Q1,ep]}),r=Uf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=o2(o.toString());G1(n,s,()=>s(n.currentUser)),q1(n,a=>s(a))}}const i=$f("auth");return i&&$1(n,`http://${i}`),n}function a2(){return document.getElementsByTagName("head")?.[0]??document}O1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=st("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",a2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});n2("Browser");const c2={apiKey:"AIzaSyApXay-wf4g_HIlYjt1PEOXsmlZIZO9Ro4",authDomain:"todo-list-eldarlrd-gh.firebaseapp.com",projectId:"todo-list-eldarlrd-gh",storageBucket:"todo-list-eldarlrd-gh.firebasestorage.app",messagingSenderId:"970197828766",appId:"1:970197828766:web:efbb7c54735c0b6572e78f"},cp=qf(c2),Rc=s2(cp),Oe=Bv(cp),l2=new Ct,To=500,u2=async t=>{const e=Kr(Oe,"users",t,"projects"),n=Kr(Oe,"users",t,"todos"),r=Ah(e,Zv("order","asc")),[i,o]=await Promise.all([pa(r),pa(n)]),s=i.docs.map(c=>({id:c.id,...c.data()})),a=o.docs.map(c=>({id:c.id,...c.data()}));return{projects:s,todos:a}},lp=async(t,e)=>{for(let n=0;n<e.length;n+=To){const r=e.slice(n,n+To),i=vc(Oe);r.forEach(o=>{const{id:s,...a}=o,c=fn(Oe,"users",t,"projects",s);i.set(c,a)}),await i.commit()}},d2=async(t,e)=>{const n=Kr(Oe,"users",t,"projects");return(await Rh(n,e)).id},f2=async(t,e,n)=>{const r=fn(Oe,"users",t,"projects",e);await bc(r,n)},h2=async(t,e)=>{const n=vc(Oe),r=fn(Oe,"users",t,"projects",e);n.delete(r);const i=Kr(Oe,"users",t,"todos"),o=Ah(i,Qv("project","==",e));(await pa(o)).docs.forEach(a=>{n.delete(a.ref)}),await n.commit()},p2=async(t,e)=>{for(let n=0;n<e.length;n+=To){const r=e.slice(n,n+To),i=vc(Oe);r.forEach(o=>{const{id:s,...a}=o,c=fn(Oe,"users",t,"todos",s);i.set(c,a)}),await i.commit()}},m2=async(t,e)=>{const n=Kr(Oe,"users",t,"todos");return(await Rh(n,e)).id},g2=async(t,e,n)=>{const r=fn(Oe,"users",t,"todos",e),i=n?Qe[2]:Qe[1];await bc(r,{isDone:n,stage:i})},y2=async(t,e,n)=>{const r=fn(Oe,"users",t,"todos",e);await bc(r,n)},_2=async(t,e)=>{const n=fn(Oe,"users",t,"todos",e);await n1(n)},up=async({uid:t,localProjects:e,localTodos:n})=>{try{const{projects:r,todos:i}=await u2(t),o=new Map(r.map(h=>[h.id,h])),s=new Map(i.map(h=>[h.id,h])),a=[...r];e.forEach(h=>{o.has(h.id)||a.push(h)});const c=a.map((h,y)=>({...h,order:y})),l=[...i];n.forEach(h=>{s.has(h.id)||l.push(h)});const d=e.filter(h=>!o.has(h.id)),u=n.filter(h=>!s.has(h.id));return(d.length>0||u.length>0)&&await Promise.all([d.length>0?lp(t,d):Promise.resolve(),u.length>0?p2(t,u):Promise.resolve()]),[c,l]}catch(r){if(r instanceof Error)throw r;return[]}};let b2={data:""},v2=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||b2},w2=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,k2=/\/\*[^]*?\*\/|  +/g,Gu=/\n+/g,nn=(t,e)=>{let n="",r="",i="";for(let o in t){let s=t[o];o[0]=="@"?o[1]=="i"?n=o+" "+s+";":r+=o[1]=="f"?nn(s,o):o+"{"+nn(s,o[1]=="k"?"":e)+"}":typeof s=="object"?r+=nn(s,e?e.replace(/([^,])+/g,a=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,a):a?a+" "+c:c)):o):s!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=nn.p?nn.p(o,s):o+":"+s+";")}return n+(e&&i?e+"{"+i+"}":i)+r},It={},dp=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+dp(t[n]);return e}return t},E2=(t,e,n,r,i)=>{let o=dp(t),s=It[o]||(It[o]=(c=>{let l=0,d=11;for(;l<c.length;)d=101*d+c.charCodeAt(l++)>>>0;return"go"+d})(o));if(!It[s]){let c=o!==t?t:(l=>{let d,u,h=[{}];for(;d=w2.exec(l.replace(k2,""));)d[4]?h.shift():d[3]?(u=d[3].replace(Gu," ").trim(),h.unshift(h[0][u]=h[0][u]||{})):h[0][d[1]]=d[2].replace(Gu," ").trim();return h[0]})(t);It[s]=nn(i?{["@keyframes "+s]:c}:c,n?"":"."+s)}let a=n&&It.g?It.g:null;return n&&(It.g=It[s]),((c,l,d,u)=>{u?l.data=l.data.replace(u,c):l.data.indexOf(c)===-1&&(l.data=d?c+l.data:l.data+c)})(It[s],e,r,a),s},T2=(t,e,n)=>t.reduce((r,i,o)=>{let s=e[o];if(s&&s.call){let a=s(n),c=a&&a.props&&a.props.className||/^go/.test(a)&&a;s=c?"."+c:a&&typeof a=="object"?a.props?"":nn(a,""):a===!1?"":a}return r+i+(s??"")},"");function Qo(t){let e=this||{},n=t.call?t(e.p):t;return E2(n.unshift?n.raw?T2(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,v2(e.target),e.g,e.o,e.k)}let fp,_a,ba;Qo.bind({g:1});let Ft=Qo.bind({k:1});function x2(t,e,n,r){nn.p=e,fp=t,_a=n,ba=r}function hn(t,e){let n=this||{};return function(){let r=arguments;function i(o,s){let a=Object.assign({},o),c=a.className||i.className;n.p=Object.assign({theme:_a&&_a()},a),n.o=/ *go\d+/.test(c),a.className=Qo.apply(n,r)+(c?" "+c:"");let l=t;return t[0]&&(l=a.as||t,delete a.as),ba&&l[0]&&ba(a),fp(l,a)}return i}}var S2=t=>typeof t=="function",xo=(t,e)=>S2(t)?t(e):t,I2=(()=>{let t=0;return()=>(++t).toString()})(),hp=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),A2=20,Dc="default",pp=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:r}=e;return pp(t,{type:t.toasts.find(s=>s.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(s=>s.id===i||i===void 0?{...s,dismissed:!0,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let o=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+o}))}}},Ki=[],mp={toasts:[],pausedAt:void 0,settings:{toastLimit:A2}},gt={},gp=(t,e=Dc)=>{gt[e]=pp(gt[e]||mp,t),Ki.forEach(([n,r])=>{n===e&&r(gt[e])})},yp=t=>Object.keys(gt).forEach(e=>gp(t,e)),C2=t=>Object.keys(gt).find(e=>gt[e].toasts.some(n=>n.id===t)),Zo=(t=Dc)=>e=>{gp(e,t)},P2={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},_p=(t={},e=Dc)=>{let[n,r]=W(gt[e]||mp),i=q(gt[e]);j(()=>(i.current!==gt[e]&&r(gt[e]),Ki.push([e,r]),()=>{let s=Ki.findIndex(([a])=>a===e);s>-1&&Ki.splice(s,1)}),[e]);let o=n.toasts.map(s=>{var a,c,l;return{...t,...t[s.type],...s,removeDelay:s.removeDelay||((a=t[s.type])==null?void 0:a.removeDelay)||t?.removeDelay,duration:s.duration||((c=t[s.type])==null?void 0:c.duration)||t?.duration||P2[s.type],style:{...t.style,...(l=t[s.type])==null?void 0:l.style,...s.style}}});return{...n,toasts:o}},R2=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:n?.id||I2()}),ki=t=>(e,n)=>{let r=R2(e,t,n);return Zo(r.toasterId||C2(r.id))({type:2,toast:r}),r.id},pe=(t,e)=>ki("blank")(t,e);pe.error=ki("error");pe.success=ki("success");pe.loading=ki("loading");pe.custom=ki("custom");pe.dismiss=(t,e)=>{let n={type:3,toastId:t};e?Zo(e)(n):yp(n)};pe.dismissAll=t=>pe.dismiss(void 0,t);pe.remove=(t,e)=>{let n={type:4,toastId:t};e?Zo(e)(n):yp(n)};pe.removeAll=t=>pe.remove(void 0,t);pe.promise=(t,e,n)=>{let r=pe.loading(e.loading,{...n,...n?.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let o=e.success?xo(e.success,i):void 0;return o?pe.success(o,{id:r,...n,...n?.success}):pe.dismiss(r),i}).catch(i=>{let o=e.error?xo(e.error,i):void 0;o?pe.error(o,{id:r,...n,...n?.error}):pe.dismiss(r)}),t};var D2=1e3,O2=(t,e="default")=>{let{toasts:n,pausedAt:r}=_p(t,e),i=q(new Map).current,o=H((u,h=D2)=>{if(i.has(u))return;let y=setTimeout(()=>{i.delete(u),s({type:4,toastId:u})},h);i.set(u,y)},[]);j(()=>{if(r)return;let u=Date.now(),h=n.map(y=>{if(y.duration===1/0)return;let E=(y.duration||0)+y.pauseDuration-(u-y.createdAt);if(E<0){y.visible&&pe.dismiss(y.id);return}return setTimeout(()=>pe.dismiss(y.id,e),E)});return()=>{h.forEach(y=>y&&clearTimeout(y))}},[n,r,e]);let s=H(Zo(e),[e]),a=H(()=>{s({type:5,time:Date.now()})},[s]),c=H((u,h)=>{s({type:1,toast:{id:u,height:h}})},[s]),l=H(()=>{r&&s({type:6,time:Date.now()})},[r,s]),d=H((u,h)=>{let{reverseOrder:y=!1,gutter:E=8,defaultPosition:S}=h||{},k=n.filter(I=>(I.position||S)===(u.position||S)&&I.height),x=k.findIndex(I=>I.id===u.id),T=k.filter((I,C)=>C<x&&I.visible).length;return k.filter(I=>I.visible).slice(...y?[T+1]:[0,T]).reduce((I,C)=>I+(C.height||0)+E,0)},[n]);return j(()=>{n.forEach(u=>{if(u.dismissed)o(u.id,u.removeDelay);else{let h=i.get(u.id);h&&(clearTimeout(h),i.delete(u.id))}})},[n,o]),{toasts:n,handlers:{updateHeight:c,startPause:a,endPause:l,calculateOffset:d}}},N2=Ft`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,M2=Ft`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,L2=Ft`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,V2=hn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${N2} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${M2} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${L2} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,F2=Ft`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,$2=hn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${F2} 1s linear infinite;
`,j2=Ft`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,U2=Ft`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,z2=hn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${j2} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${U2} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,B2=hn("div")`
  position: absolute;
`,W2=hn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,H2=Ft`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,q2=hn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${H2} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,G2=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?re(q2,null,e):e:n==="blank"?null:re(W2,null,re($2,{...r}),n!=="loading"&&re(B2,null,n==="error"?re(V2,{...r}):re(z2,{...r})))},K2=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Y2=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,J2="0%{opacity:0;} 100%{opacity:1;}",X2="0%{opacity:1;} 100%{opacity:0;}",Q2=hn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Z2=hn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ek=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=hp()?[J2,X2]:[K2(n),Y2(n)];return{animation:e?`${Ft(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Ft(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},tk=Fo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?ek(t.position||e||"top-center",t.visible):{opacity:0},o=re(G2,{toast:t}),s=re(Z2,{...t.ariaProps},xo(t.message,t));return re(Q2,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:o,message:s}):re(ce,null,o,s))});x2(re);var nk=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let o=H(s=>{if(s){let a=()=>{let c=s.getBoundingClientRect().height;r(t,c)};a(),new MutationObserver(a).observe(s,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return re("div",{ref:o,className:e,style:n},i)},rk=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:hp()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},ik=Qo`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Li=16,ok=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:o,containerStyle:s,containerClassName:a})=>{let{toasts:c,handlers:l}=O2(n,o);return re("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:Li,left:Li,right:Li,bottom:Li,pointerEvents:"none",...s},className:a,onMouseEnter:l.startPause,onMouseLeave:l.endPause},c.map(d=>{let u=d.position||e,h=l.calculateOffset(d,{reverseOrder:t,gutter:r,defaultPosition:e}),y=rk(u,h);return re(nk,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?ik:"",style:y},d.type==="custom"?xo(d.message,d):i?i(d):re(tk,{toast:d,position:u}))}))},bp=pe;const Ze=t=>bp.error(t),at=t=>bp.success(t);function xe(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var sk=typeof Symbol=="function"&&Symbol.observable||"@@observable",Ku=sk,Rs=()=>Math.random().toString(36).substring(7).split("").join("."),ak={INIT:`@@redux/INIT${Rs()}`,REPLACE:`@@redux/REPLACE${Rs()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Rs()}`},So=ak;function Oc(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function vp(t,e,n){if(typeof t!="function")throw new Error(xe(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(xe(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(xe(1));return n(vp)(t,e)}let r=t,i=e,o=new Map,s=o,a=0,c=!1;function l(){s===o&&(s=new Map,o.forEach((k,x)=>{s.set(x,k)}))}function d(){if(c)throw new Error(xe(3));return i}function u(k){if(typeof k!="function")throw new Error(xe(4));if(c)throw new Error(xe(5));let x=!0;l();const T=a++;return s.set(T,k),function(){if(x){if(c)throw new Error(xe(6));x=!1,l(),s.delete(T),o=null}}}function h(k){if(!Oc(k))throw new Error(xe(7));if(typeof k.type>"u")throw new Error(xe(8));if(typeof k.type!="string")throw new Error(xe(17));if(c)throw new Error(xe(9));try{c=!0,i=r(i,k)}finally{c=!1}return(o=s).forEach(T=>{T()}),k}function y(k){if(typeof k!="function")throw new Error(xe(10));r=k,h({type:So.REPLACE})}function E(){const k=u;return{subscribe(x){if(typeof x!="object"||x===null)throw new Error(xe(11));function T(){const C=x;C.next&&C.next(d())}return T(),{unsubscribe:k(T)}},[Ku](){return this}}}return h({type:So.INIT}),{dispatch:h,subscribe:u,getState:d,replaceReducer:y,[Ku]:E}}function ck(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:So.INIT})>"u")throw new Error(xe(12));if(typeof n(void 0,{type:So.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(xe(13))})}function lk(t){const e=Object.keys(t),n={};for(let o=0;o<e.length;o++){const s=e[o];typeof t[s]=="function"&&(n[s]=t[s])}const r=Object.keys(n);let i;try{ck(n)}catch(o){i=o}return function(s={},a){if(i)throw i;let c=!1;const l={};for(let d=0;d<r.length;d++){const u=r[d],h=n[u],y=s[u],E=h(y,a);if(typeof E>"u")throw a&&a.type,new Error(xe(14));l[u]=E,c=c||E!==y}return c=c||r.length!==Object.keys(s).length,c?l:s}}function Io(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function uk(...t){return e=>(n,r)=>{const i=e(n,r);let o=()=>{throw new Error(xe(15))};const s={getState:i.getState,dispatch:(c,...l)=>o(c,...l)},a=t.map(c=>c(s));return o=Io(...a)(i.dispatch),{...i,dispatch:o}}}function dk(t){return Oc(t)&&"type"in t&&typeof t.type=="string"}var wp=Symbol.for("immer-nothing"),Yu=Symbol.for("immer-draftable"),Be=Symbol.for("immer-state");function rt(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var Xr=Object.getPrototypeOf;function Rn(t){return!!t&&!!t[Be]}function $t(t){return t?kp(t)||Array.isArray(t)||!!t[Yu]||!!t.constructor?.[Yu]||Ei(t)||ts(t):!1}var fk=Object.prototype.constructor.toString(),Ju=new WeakMap;function kp(t){if(!t||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);if(e===null||e===Object.prototype)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;if(n===Object)return!0;if(typeof n!="function")return!1;let r=Ju.get(n);return r===void 0&&(r=Function.toString.call(n),Ju.set(n,r)),r===fk}function Ao(t,e,n=!0){es(t)===0?(n?Reflect.ownKeys(t):Object.keys(t)).forEach(i=>{e(i,t[i],t)}):t.forEach((r,i)=>e(i,r,t))}function es(t){const e=t[Be];return e?e.type_:Array.isArray(t)?1:Ei(t)?2:ts(t)?3:0}function va(t,e){return es(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function Ep(t,e,n){const r=es(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function hk(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function Ei(t){return t instanceof Map}function ts(t){return t instanceof Set}function mn(t){return t.copy_||t.base_}function wa(t,e){if(Ei(t))return new Map(t);if(ts(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const n=kp(t);if(e===!0||e==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(t);delete r[Be];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const s=i[o],a=r[s];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(r[s]={configurable:!0,writable:!0,enumerable:a.enumerable,value:t[s]})}return Object.create(Xr(t),r)}else{const r=Xr(t);if(r!==null&&n)return{...t};const i=Object.create(r);return Object.assign(i,t)}}function Nc(t,e=!1){return ns(t)||Rn(t)||!$t(t)||(es(t)>1&&Object.defineProperties(t,{set:Vi,add:Vi,clear:Vi,delete:Vi}),Object.freeze(t),e&&Object.values(t).forEach(n=>Nc(n,!0))),t}function pk(){rt(2)}var Vi={value:pk};function ns(t){return t===null||typeof t!="object"?!0:Object.isFrozen(t)}var mk={};function Dn(t){const e=mk[t];return e||rt(0,t),e}var Qr;function Tp(){return Qr}function gk(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Xu(t,e){e&&(Dn("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function ka(t){Ea(t),t.drafts_.forEach(yk),t.drafts_=null}function Ea(t){t===Qr&&(Qr=t.parent_)}function Qu(t){return Qr=gk(Qr,t)}function yk(t){const e=t[Be];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function Zu(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[Be].modified_&&(ka(e),rt(4)),$t(t)&&(t=Co(e,t),e.parent_||Po(e,t)),e.patches_&&Dn("Patches").generateReplacementPatches_(n[Be].base_,t,e.patches_,e.inversePatches_)):t=Co(e,n,[]),ka(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==wp?t:void 0}function Co(t,e,n){if(ns(e))return e;const r=t.immer_.shouldUseStrictIteration(),i=e[Be];if(!i)return Ao(e,(o,s)=>ed(t,i,e,o,s,n),r),e;if(i.scope_!==t)return e;if(!i.modified_)return Po(t,i.base_,!0),i.base_;if(!i.finalized_){i.finalized_=!0,i.scope_.unfinalizedDrafts_--;const o=i.copy_;let s=o,a=!1;i.type_===3&&(s=new Set(o),o.clear(),a=!0),Ao(s,(c,l)=>ed(t,i,o,c,l,n,a),r),Po(t,o,!1),n&&t.patches_&&Dn("Patches").generatePatches_(i,n,t.patches_,t.inversePatches_)}return i.copy_}function ed(t,e,n,r,i,o,s){if(i==null||typeof i!="object"&&!s)return;const a=ns(i);if(!(a&&!s)){if(Rn(i)){const c=o&&e&&e.type_!==3&&!va(e.assigned_,r)?o.concat(r):void 0,l=Co(t,i,c);if(Ep(n,r,l),Rn(l))t.canAutoFreeze_=!1;else return}else s&&n.add(i);if($t(i)&&!a){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1||e&&e.base_&&e.base_[r]===i&&a)return;Co(t,i),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&(Ei(n)?n.has(r):Object.prototype.propertyIsEnumerable.call(n,r))&&Po(t,i)}}}function Po(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&Nc(e,n)}function _k(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:Tp(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,o=Mc;n&&(i=[r],o=Zr);const{revoke:s,proxy:a}=Proxy.revocable(i,o);return r.draft_=a,r.revoke_=s,a}var Mc={get(t,e){if(e===Be)return t;const n=mn(t);if(!va(n,e))return bk(t,n,e);const r=n[e];return t.finalized_||!$t(r)?r:r===Ds(t.base_,e)?(Os(t),t.copy_[e]=xa(r,t)):r},has(t,e){return e in mn(t)},ownKeys(t){return Reflect.ownKeys(mn(t))},set(t,e,n){const r=xp(mn(t),e);if(r?.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=Ds(mn(t),e),o=i?.[Be];if(o&&o.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(hk(n,i)&&(n!==void 0||va(t.base_,e)))return!0;Os(t),Ta(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return Ds(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,Os(t),Ta(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=mn(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){rt(11)},getPrototypeOf(t){return Xr(t.base_)},setPrototypeOf(){rt(12)}},Zr={};Ao(Mc,(t,e)=>{Zr[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});Zr.deleteProperty=function(t,e){return Zr.set.call(this,t,e,void 0)};Zr.set=function(t,e,n){return Mc.set.call(this,t[0],e,n,t[0])};function Ds(t,e){const n=t[Be];return(n?mn(n):t)[e]}function bk(t,e,n){const r=xp(e,n);return r?"value"in r?r.value:r.get?.call(t.draft_):void 0}function xp(t,e){if(!(e in t))return;let n=Xr(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Xr(n)}}function Ta(t){t.modified_||(t.modified_=!0,t.parent_&&Ta(t.parent_))}function Os(t){t.copy_||(t.copy_=wa(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var vk=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const o=n;n=e;const s=this;return function(c=o,...l){return s.produce(c,d=>n.call(this,d,...l))}}typeof n!="function"&&rt(6),r!==void 0&&typeof r!="function"&&rt(7);let i;if($t(e)){const o=Qu(this),s=xa(e,void 0);let a=!0;try{i=n(s),a=!1}finally{a?ka(o):Ea(o)}return Xu(o,r),Zu(i,o)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===wp&&(i=void 0),this.autoFreeze_&&Nc(i,!0),r){const o=[],s=[];Dn("Patches").generateReplacementPatches_(e,i,o,s),r(o,s)}return i}else rt(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(s,...a)=>this.produceWithPatches(s,c=>e(c,...a));let r,i;return[this.produce(e,n,(s,a)=>{r=s,i=a}),r,i]},typeof t?.autoFreeze=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof t?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy),typeof t?.useStrictIteration=="boolean"&&this.setUseStrictIteration(t.useStrictIteration)}createDraft(t){$t(t)||rt(8),Rn(t)&&(t=wk(t));const e=Qu(this),n=xa(t,void 0);return n[Be].isManual_=!0,Ea(e),n}finishDraft(t,e){const n=t&&t[Be];(!n||!n.isManual_)&&rt(9);const{scope_:r}=n;return Xu(r,e),Zu(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}setUseStrictIteration(t){this.useStrictIteration_=t}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=Dn("Patches").applyPatches_;return Rn(t)?r(t,e):this.produce(t,i=>r(i,e))}};function xa(t,e){const n=Ei(t)?Dn("MapSet").proxyMap_(t,e):ts(t)?Dn("MapSet").proxySet_(t,e):_k(t,e);return(e?e.scope_:Tp()).drafts_.push(n),n}function wk(t){return Rn(t)||rt(10,t),Sp(t)}function Sp(t){if(!$t(t)||ns(t))return t;const e=t[Be];let n,r=!0;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=wa(t,e.scope_.immer_.useStrictShallowCopy_),r=e.scope_.immer_.shouldUseStrictIteration()}else n=wa(t,!0);return Ao(n,(i,o)=>{Ep(n,i,Sp(o))},r),e&&(e.finalized_=!1),n}var kk=new vk,Ip=kk.produce;function Ap(t){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,t):i(o)}var Ek=Ap(),Tk=Ap,xk=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Io:Io.apply(null,arguments)};function td(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(Ot(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>dk(r)&&r.type===t,n}var Cp=class Sr extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Sr.prototype)}static get[Symbol.species](){return Sr}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Sr(...e[0].concat(this)):new Sr(...e.concat(this))}};function nd(t){return $t(t)?Ip(t,()=>{}):t}function Fi(t,e,n){return t.has(e)?t.get(e):t.set(e,n(e)).get(e)}function Sk(t){return typeof t=="boolean"}var Ik=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=e??{};let s=new Cp;return n&&(Sk(n)?s.push(Ek):s.push(Tk(n.extraArgument))),s},Ak="RTK_autoBatch",rd=t=>e=>{setTimeout(e,t)},Ck=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,o=!1,s=!1;const a=new Set,c=t.type==="tick"?queueMicrotask:t.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:rd(10):t.type==="callback"?t.queueNotification:rd(t.timeout),l=()=>{s=!1,o&&(o=!1,a.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const u=()=>i&&d(),h=r.subscribe(u);return a.add(d),()=>{h(),a.delete(d)}},dispatch(d){try{return i=!d?.meta?.[Ak],o=!i,o&&(s||(s=!0,c(l))),r.dispatch(d)}finally{i=!0}}})},Pk=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new Cp(t);return r&&i.push(Ck(typeof r=="object"?r:void 0)),i};function Rk(t){const e=Ik(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:o=void 0,enhancers:s=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(Oc(n))a=lk(n);else throw new Error(Ot(1));let c;typeof r=="function"?c=r(e):c=e();let l=Io;i&&(l=xk({trace:!1,...typeof i=="object"&&i}));const d=uk(...c),u=Pk(d);let h=typeof s=="function"?s(u):u();const y=l(...h);return vp(a,o,y)}function Pp(t){const e={},n=[];let r;const i={addCase(o,s){const a=typeof o=="string"?o:o.type;if(!a)throw new Error(Ot(28));if(a in e)throw new Error(Ot(29));return e[a]=s,i},addAsyncThunk(o,s){return s.pending&&(e[o.pending.type]=s.pending),s.rejected&&(e[o.rejected.type]=s.rejected),s.fulfilled&&(e[o.fulfilled.type]=s.fulfilled),s.settled&&n.push({matcher:o.settled,reducer:s.settled}),i},addMatcher(o,s){return n.push({matcher:o,reducer:s}),i},addDefaultCase(o){return r=o,i}};return t(i),[e,n,r]}function Dk(t){return typeof t=="function"}function Ok(t,e){let[n,r,i]=Pp(e),o;if(Dk(t))o=()=>nd(t());else{const a=nd(t);o=()=>a}function s(a=o(),c){let l=[n[c.type],...r.filter(({matcher:d})=>d(c)).map(({reducer:d})=>d)];return l.filter(d=>!!d).length===0&&(l=[i]),l.reduce((d,u)=>{if(u)if(Rn(d)){const y=u(d,c);return y===void 0?d:y}else{if($t(d))return Ip(d,h=>u(h,c));{const h=u(d,c);if(h===void 0){if(d===null)return d;throw Error("A case reducer on a non-draftable value must not return undefined")}return h}}return d},a)}return s.getInitialState=o,s}var Nk=Symbol.for("rtk-slice-createasyncthunk");function Mk(t,e){return`${t}/${e}`}function Lk({creators:t}={}){const e=t?.asyncThunk?.[Nk];return function(r){const{name:i,reducerPath:o=i}=r;if(!i)throw new Error(Ot(11));const s=(typeof r.reducers=="function"?r.reducers(Fk()):r.reducers)||{},a=Object.keys(s),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},l={addCase(I,C){const P=typeof I=="string"?I:I.type;if(!P)throw new Error(Ot(12));if(P in c.sliceCaseReducersByType)throw new Error(Ot(13));return c.sliceCaseReducersByType[P]=C,l},addMatcher(I,C){return c.sliceMatchers.push({matcher:I,reducer:C}),l},exposeAction(I,C){return c.actionCreators[I]=C,l},exposeCaseReducer(I,C){return c.sliceCaseReducersByName[I]=C,l}};a.forEach(I=>{const C=s[I],P={reducerName:I,type:Mk(i,I),createNotation:typeof r.reducers=="function"};jk(C)?zk(P,C,l,e):$k(P,C,l)});function d(){const[I={},C=[],P=void 0]=typeof r.extraReducers=="function"?Pp(r.extraReducers):[r.extraReducers],R={...I,...c.sliceCaseReducersByType};return Ok(r.initialState,g=>{for(let p in R)g.addCase(p,R[p]);for(let p of c.sliceMatchers)g.addMatcher(p.matcher,p.reducer);for(let p of C)g.addMatcher(p.matcher,p.reducer);P&&g.addDefaultCase(P)})}const u=I=>I,h=new Map,y=new WeakMap;let E;function S(I,C){return E||(E=d()),E(I,C)}function k(){return E||(E=d()),E.getInitialState()}function x(I,C=!1){function P(g){let p=g[I];return typeof p>"u"&&C&&(p=Fi(y,P,k)),p}function R(g=u){const p=Fi(h,C,()=>new WeakMap);return Fi(p,g,()=>{const m={};for(const[v,b]of Object.entries(r.selectors??{}))m[v]=Vk(b,g,()=>Fi(y,g,k),C);return m})}return{reducerPath:I,getSelectors:R,get selectors(){return R(P)},selectSlice:P}}const T={name:i,reducer:S,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:k,...x(o),injectInto(I,{reducerPath:C,...P}={}){const R=C??o;return I.inject({reducerPath:R,reducer:S},P),{...T,...x(R,!0)}}};return T}}function Vk(t,e,n,r){function i(o,...s){let a=e(o);return typeof a>"u"&&r&&(a=n()),t(a,...s)}return i.unwrapped=t,i}var Lc=Lk();function Fk(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function $k({type:t,reducerName:e,createNotation:n},r,i){let o,s;if("reducer"in r){if(n&&!Uk(r))throw new Error(Ot(17));o=r.reducer,s=r.prepare}else o=r;i.addCase(t,o).exposeCaseReducer(e,o).exposeAction(e,s?td(t,s):td(t))}function jk(t){return t._reducerDefinitionType==="asyncThunk"}function Uk(t){return t._reducerDefinitionType==="reducerWithPrepare"}function zk({type:t,reducerName:e},n,r,i){if(!i)throw new Error(Ot(18));const{payloadCreator:o,fulfilled:s,pending:a,rejected:c,settled:l,options:d}=n,u=i(t,o,d);r.exposeAction(e,u),s&&r.addCase(u.fulfilled,s),a&&r.addCase(u.pending,a),c&&r.addCase(u.rejected,c),l&&r.addMatcher(u.settled,l),r.exposeCaseReducer(e,{fulfilled:s||$i,pending:a||$i,rejected:c||$i,settled:l||$i})}function $i(){}function Ot(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const Bk={projectList:[],selectedProject:""},Rp=Lc({name:"projects",initialState:Bk,reducers:{setProjects(t,e){t.projectList=e.payload},addNewProject(t,e){t.projectList.push(e.payload)},setSelectedProject(t,e){t.selectedProject=e.payload},editProject(t,e){const{id:n,title:r,iconKey:i}=e.payload,o=t.projectList.find(s=>s.id===n);o&&(o.title=r,o.iconKey=i)},deleteProject(t,e){t.projectList=t.projectList.filter(n=>n.id!==e.payload)}}}),dr=Rp.actions,Wk=Rp.reducer,Hk={todoList:[],viewMode:Yr[0],sortMode:Object.keys(Kn)[0],sortAscending:0},Dp=Lc({name:"todos",initialState:Hk,reducers:{setTodos(t,e){t.todoList=e.payload},setViewMode(t,e){t.viewMode=e.payload},setSortMode(t,e){t.sortMode=e.payload},setSortAscending(t,e){t.sortAscending=e.payload},addNewTodo(t,e){t.todoList.push(e.payload)},checkTodo(t,e){const{id:n,isDone:r}=e.payload,i=t.todoList.find(o=>o.id===n);i&&(i.isDone=r,r?i.stage=Qe[2]:i.stage=Qe[1])},editTodo(t,e){const{id:n,project:r,title:i,description:o,dueDate:s,priority:a,stage:c}=e.payload,l=t.todoList.find(d=>d.id===n);l&&(l.project=r,l.title=i,l.description=o,l.dueDate=s,l.priority=a,l.stage=c,l.isDone=c===Qe[2])},deleteTodo(t,e){t.todoList=t.todoList.filter(n=>n.id!==e.payload)},deleteProjectTodos(t,e){t.todoList=t.todoList.filter(n=>n.project!==e.payload)}}}),fr=Dp.actions,qk=Dp.reducer,Gk=()=>{const[t,e]=W(!1),{user:n}=Ee(d=>d.authReducer),{projectList:r}=Ee(d=>d.projectReducer),{todoList:i}=Ee(d=>d.todoReducer),o=jt(),{setProjects:s,setSelectedProject:a}=dr,{setTodos:c}=fr;return _("button",{type:"button",title:"Sync",id:"user-sync",onClick:async()=>{if(n)try{e(!0);const[d,u]=await up({uid:n.uid,localProjects:r,localTodos:i});r.length||o(a(d[0]?.id)),o(s(d)),o(c(u)),at(Mf)}catch(d){d instanceof Error&&(Ze(so),console.error(so,d))}finally{e(!1)}},disabled:t,class:`${t?"cursor-not-allowed":""} hover:(bg-slate-100, active:(bg-slate-50), dark:(bg-slate-800, active:bg-slate-900)) lg:(w-14, px-4) xl:(w-16, px-5, py-2.5) max-h-[3rem] w-12 rounded px-3 py-1.5 leading-4 transition-colors md:py-2`,children:_(iy,{"aria-label":"Refresh",strokeWidth:"2",class:`transform transition md:scale-110 ${t?"animate-spin":""}`})})},Kk=async()=>(await mw(Rc,l2)).user,Yk=()=>Y1(Rc),Jk={user:null},Op=Lc({name:"auth",initialState:Jk,reducers:{setUser:(t,e)=>{t.user=e.payload},clearUser:t=>{t.user=null}}}),Np=Op.actions,Xk=Op.reducer,Qk=({setIsVisible:t})=>{const{user:e}=Ee(d=>d.authReducer),[n,r]=W(!1),i=jt(),{setUser:o,clearUser:s}=Np,a=async()=>{try{r(!0);const{displayName:d,photoURL:u,email:h,uid:y}=await Kk();i(o({displayName:d,photoURL:u,email:h,uid:y})),t(!1),at(Jy)}catch(d){d instanceof Error&&(Ze(Hl),console.error(Hl,d))}finally{r(!1)}},c=async()=>{try{r(!0),await Yk(),i(s()),t(!1),at(Xy)}catch(d){d instanceof Error&&(Ze(ql),console.error(ql,d))}finally{r(!1)}},l=e?"hover:(bg-rose-700, active:bg-rose-600, dark:(bg-rose-700, active:bg-rose-800)) bg-rose-800 dark:bg-rose-600":"hover:(bg-emerald-700, active:bg-emerald-600, dark:(bg-sky-700, active:bg-sky-800)) bg-emerald-800 dark:bg-sky-600";return _("div",{class:"flex flex-col gap-1.5 text-center text-base break-words select-none xl:text-lg",children:[e?_(ce,{children:[_("p",{class:"font-medium",children:[_("span",{children:[e.photoURL?_("img",{class:"pointer-events-none mr-1.5 inline h-8 w-8 rounded-full text-sm transition-all",alt:"User Avatar",src:e.photoURL}):_($0,{"aria-label":"Circle User",strokeWidth:"2",class:"mr-1.5 inline h-8 w-8"}),e.displayName," "]}),_("span",{class:"inline-block font-light",children:["(",e.email,")"]})]}),_("p",{children:"Logout if you no longer wish to store projects & todos online."})]}):_(ce,{children:[_("p",{children:["Login using your"," ",_("span",{class:"font-semibold",children:[_("span",{class:"text-blue-500",children:"G"}),_("span",{class:"text-red-500",children:"o"}),_("span",{class:"text-amber-500",children:"o"}),_("span",{class:"text-blue-500",children:"g"}),_("span",{class:"text-green-600",children:"l"}),_("span",{class:"text-red-500",children:"e"})]})," ","Account"]}),_("p",{children:"to store projects & todos online for remote access."})]}),_("span",{class:"mt-4 flex justify-end gap-2",children:[_($o,{id:"user-cancel",handleCancel:()=>{t(!1)}}),_(jo,{id:"user-action",action:e?"Logout":"Login",styleClass:l,isLoading:n,handleConfirm:()=>e?void c():void a()})," ",e&&_(Gk,{})]})]})},Mn=t=>{const[e,n]=W(t),r=q(null),i=o=>{r.current&&!r.current.contains(o.target)&&n(!1)};return j(()=>(document.addEventListener("click",i,!0),()=>{document.removeEventListener("click",i,!0)}),[]),{refer:r,isVisible:e,setIsVisible:n}},id=[_(ly,{"aria-label":"User",strokeWidth:"2.25",class:"lg:(scale-125, -ml-px) scale-110 transition-transform xl:scale-150"},"user"),_(cy,{"aria-label":"User Check",strokeWidth:"2.25",class:"ml-0.5 scale-110 transition-transform lg:scale-125 xl:scale-150"},"user-check")],Mp=()=>{const{refer:t,isVisible:e,setIsVisible:n}=Mn(!1),{user:r}=Ee(i=>i.authReducer);return _("div",{children:[_("button",{type:"button",title:"User Account",id:"user-auth",onClick:()=>{n(!0)},class:"hover:(bg-slate-200, active:bg-slate-300, dark:(bg-slate-700, active:bg-slate-600)) lg:(w-14, px-4, py-3) xl:(w-16, px-5, py-4) w-12 rounded px-3 py-2 leading-4 transition-colors",children:r?id[1]:id[0]}),_(li,{modalContent:_(Qk,{setIsVisible:n},"User Account"),setIsVisible:n,isVisible:e,refer:t})]})},Zk=()=>_("header",{class:"lg:(flex-row, justify-between, gap-4, px-6, py-4) dark:(bg-slate-800, text-pink-500) xl:(py-2, text-4xl) flex items-center justify-center bg-slate-100 p-4 pt-16 text-3xl font-bold text-violet-800 transition-all select-none",children:[_("span",{id:"logo",class:"md:(flex-row, gap-3) z-10 flex flex-col items-center justify-center gap-2",children:[_("img",{class:"xl:(h-24, w-24, text-base) dark:(text-violet-400, hue-rotate-60, brightness-125) pointer-events-none h-20 w-20 text-center text-sm transition-all",alt:"Check icon originally by HJ Studio",src:hy}),_("h1",{class:"-skew-x-6",children:"Todo List"})]}),_("span",{class:"hidden gap-2 font-normal not-italic lg:flex",children:[_(Sf,{identifier:"theme-toggle"}),_(Mp,{})]})]}),eE=()=>{const{toasts:t}=_p();return j(()=>{t.filter(e=>e.visible).filter((e,n)=>n>=i1).forEach(e=>{pe.dismiss(e.id)})},[t]),_(ok,{reverseOrder:!0,position:"bottom-center",toastOptions:{duration:3e3,removeDelay:500,className:"w-56 select-none ring-slate-300 ring-1 !shadow-none !rounded dark:(bg-slate-900, accent-sky-600,text-slate-50, ring-slate-600 selection:bg-sky-600) selection:bg-emerald-400 bg-slate-50 accent-emerald-400 text-slate-900"}})};function tE(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return ee(()=>r=>{e.forEach(i=>i(r))},e)}const rs=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function hr(t){const e=Object.prototype.toString.call(t);return e==="[object Window]"||e==="[object global]"}function Vc(t){return"nodeType"in t}function Ve(t){var e,n;return t?hr(t)?t:Vc(t)&&(e=(n=t.ownerDocument)==null?void 0:n.defaultView)!=null?e:window:window}function Fc(t){const{Document:e}=Ve(t);return t instanceof e}function Ti(t){return hr(t)?!1:t instanceof Ve(t).HTMLElement}function Lp(t){return t instanceof Ve(t).SVGElement}function pr(t){return t?hr(t)?t.document:Vc(t)?Fc(t)?t:Ti(t)||Lp(t)?t.ownerDocument:document:document:document}const Et=rs?dn:j;function $c(t){const e=q(t);return Et(()=>{e.current=t}),H(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current==null?void 0:e.current(...r)},[])}function nE(){const t=q(null),e=H((r,i)=>{t.current=setInterval(r,i)},[]),n=H(()=>{t.current!==null&&(clearInterval(t.current),t.current=null)},[]);return[e,n]}function ei(t,e){e===void 0&&(e=[t]);const n=q(t);return Et(()=>{n.current!==t&&(n.current=t)},e),n}function xi(t,e){const n=q();return ee(()=>{const r=t(n.current);return n.current=r,r},[...e])}function Ro(t){const e=$c(t),n=q(null),r=H(i=>{i!==n.current&&e?.(i,n.current),n.current=i},[]);return[n,r]}function Sa(t){const e=q();return j(()=>{e.current=t},[t]),e.current}let Ns={};function Si(t,e){return ee(()=>{if(e)return e;const n=Ns[t]==null?0:Ns[t]+1;return Ns[t]=n,t+"-"+n},[t,e])}function Vp(t){return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce((o,s)=>{const a=Object.entries(s);for(const[c,l]of a){const d=o[c];d!=null&&(o[c]=d+t*l)}return o},{...e})}}const Qn=Vp(1),Do=Vp(-1);function rE(t){return"clientX"in t&&"clientY"in t}function jc(t){if(!t)return!1;const{KeyboardEvent:e}=Ve(t.target);return e&&t instanceof e}function iE(t){if(!t)return!1;const{TouchEvent:e}=Ve(t.target);return e&&t instanceof e}function Ia(t){if(iE(t)){if(t.touches&&t.touches.length){const{clientX:e,clientY:n}=t.touches[0];return{x:e,y:n}}else if(t.changedTouches&&t.changedTouches.length){const{clientX:e,clientY:n}=t.changedTouches[0];return{x:e,y:n}}}return rE(t)?{x:t.clientX,y:t.clientY}:null}const ti=Object.freeze({Translate:{toString(t){if(!t)return;const{x:e,y:n}=t;return"translate3d("+(e?Math.round(e):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(t){if(!t)return;const{scaleX:e,scaleY:n}=t;return"scaleX("+e+") scaleY("+n+")"}},Transform:{toString(t){if(t)return[ti.Translate.toString(t),ti.Scale.toString(t)].join(" ")}},Transition:{toString(t){let{property:e,duration:n,easing:r}=t;return e+" "+n+"ms "+r}}}),od="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function oE(t){return t.matches(od)?t:t.querySelector(od)}const sE={display:"none"};function aE(t){let{id:e,value:n}=t;return De.createElement("div",{id:e,style:sE},n)}function cE(t){let{id:e,announcement:n,ariaLiveType:r="assertive"}=t;const i={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return De.createElement("div",{id:e,style:i,role:"status","aria-live":r,"aria-atomic":!0},n)}function lE(){const[t,e]=W("");return{announce:H(r=>{r!=null&&e(r)},[]),announcement:t}}const Fp=Je(null);function uE(t){const e=ze(Fp);j(()=>{if(!e)throw new Error("useDndMonitor must be used within a children of <DndContext>");return e(t)},[t,e])}function dE(){const[t]=W(()=>new Set),e=H(r=>(t.add(r),()=>t.delete(r)),[t]);return[H(r=>{let{type:i,event:o}=r;t.forEach(s=>{var a;return(a=s[i])==null?void 0:a.call(s,o)})},[t]),e]}const fE={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},hE={onDragStart(t){let{active:e}=t;return"Picked up draggable item "+e.id+"."},onDragOver(t){let{active:e,over:n}=t;return n?"Draggable item "+e.id+" was moved over droppable area "+n.id+".":"Draggable item "+e.id+" is no longer over a droppable area."},onDragEnd(t){let{active:e,over:n}=t;return n?"Draggable item "+e.id+" was dropped over droppable area "+n.id:"Draggable item "+e.id+" was dropped."},onDragCancel(t){let{active:e}=t;return"Dragging was cancelled. Draggable item "+e.id+" was dropped."}};function pE(t){let{announcements:e=hE,container:n,hiddenTextDescribedById:r,screenReaderInstructions:i=fE}=t;const{announce:o,announcement:s}=lE(),a=Si("DndLiveRegion"),[c,l]=W(!1);if(j(()=>{l(!0)},[]),uE(ee(()=>({onDragStart(u){let{active:h}=u;o(e.onDragStart({active:h}))},onDragMove(u){let{active:h,over:y}=u;e.onDragMove&&o(e.onDragMove({active:h,over:y}))},onDragOver(u){let{active:h,over:y}=u;o(e.onDragOver({active:h,over:y}))},onDragEnd(u){let{active:h,over:y}=u;o(e.onDragEnd({active:h,over:y}))},onDragCancel(u){let{active:h,over:y}=u;o(e.onDragCancel({active:h,over:y}))}}),[o,e])),!c)return null;const d=De.createElement(De.Fragment,null,De.createElement(aE,{id:r,value:i.draggable}),De.createElement(cE,{id:a,announcement:s}));return n?Ja(d,n):d}var ge;(function(t){t.DragStart="dragStart",t.DragMove="dragMove",t.DragEnd="dragEnd",t.DragCancel="dragCancel",t.DragOver="dragOver",t.RegisterDroppable="registerDroppable",t.SetDroppableDisabled="setDroppableDisabled",t.UnregisterDroppable="unregisterDroppable"})(ge||(ge={}));function Oo(){}const ct=Object.freeze({x:0,y:0});function mE(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function gE(t,e){let{data:{value:n}}=t,{data:{value:r}}=e;return n-r}function yE(t,e){let{data:{value:n}}=t,{data:{value:r}}=e;return r-n}function _E(t,e){if(!t||t.length===0)return null;const[n]=t;return n[e]}function sd(t,e,n){return e===void 0&&(e=t.left),n===void 0&&(n=t.top),{x:e+t.width*.5,y:n+t.height*.5}}const bE=t=>{let{collisionRect:e,droppableRects:n,droppableContainers:r}=t;const i=sd(e,e.left,e.top),o=[];for(const s of r){const{id:a}=s,c=n.get(a);if(c){const l=mE(sd(c),i);o.push({id:a,data:{droppableContainer:s,value:l}})}}return o.sort(gE)};function vE(t,e){const n=Math.max(e.top,t.top),r=Math.max(e.left,t.left),i=Math.min(e.left+e.width,t.left+t.width),o=Math.min(e.top+e.height,t.top+t.height),s=i-r,a=o-n;if(r<i&&n<o){const c=e.width*e.height,l=t.width*t.height,d=s*a,u=d/(c+l-d);return Number(u.toFixed(4))}return 0}const wE=t=>{let{collisionRect:e,droppableRects:n,droppableContainers:r}=t;const i=[];for(const o of r){const{id:s}=o,a=n.get(s);if(a){const c=vE(a,e);c>0&&i.push({id:s,data:{droppableContainer:o,value:c}})}}return i.sort(yE)};function kE(t,e,n){return{...t,scaleX:e&&n?e.width/n.width:1,scaleY:e&&n?e.height/n.height:1}}function $p(t,e){return t&&e?{x:t.left-e.left,y:t.top-e.top}:ct}function EE(t){return function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return i.reduce((s,a)=>({...s,top:s.top+t*a.y,bottom:s.bottom+t*a.y,left:s.left+t*a.x,right:s.right+t*a.x}),{...n})}}const TE=EE(1);function xE(t){if(t.startsWith("matrix3d(")){const e=t.slice(9,-1).split(/, /);return{x:+e[12],y:+e[13],scaleX:+e[0],scaleY:+e[5]}}else if(t.startsWith("matrix(")){const e=t.slice(7,-1).split(/, /);return{x:+e[4],y:+e[5],scaleX:+e[0],scaleY:+e[3]}}return null}function SE(t,e,n){const r=xE(e);if(!r)return t;const{scaleX:i,scaleY:o,x:s,y:a}=r,c=t.left-s-(1-i)*parseFloat(n),l=t.top-a-(1-o)*parseFloat(n.slice(n.indexOf(" ")+1)),d=i?t.width/i:t.width,u=o?t.height/o:t.height;return{width:d,height:u,top:l,right:c+d,bottom:l+u,left:c}}const IE={ignoreTransform:!1};function mr(t,e){e===void 0&&(e=IE);let n=t.getBoundingClientRect();if(e.ignoreTransform){const{transform:l,transformOrigin:d}=Ve(t).getComputedStyle(t);l&&(n=SE(n,l,d))}const{top:r,left:i,width:o,height:s,bottom:a,right:c}=n;return{top:r,left:i,width:o,height:s,bottom:a,right:c}}function ad(t){return mr(t,{ignoreTransform:!0})}function AE(t){const e=t.innerWidth,n=t.innerHeight;return{top:0,left:0,right:e,bottom:n,width:e,height:n}}function CE(t,e){return e===void 0&&(e=Ve(t).getComputedStyle(t)),e.position==="fixed"}function PE(t,e){e===void 0&&(e=Ve(t).getComputedStyle(t));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(i=>{const o=e[i];return typeof o=="string"?n.test(o):!1})}function Uc(t,e){const n=[];function r(i){if(e!=null&&n.length>=e||!i)return n;if(Fc(i)&&i.scrollingElement!=null&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!Ti(i)||Lp(i)||n.includes(i))return n;const o=Ve(t).getComputedStyle(i);return i!==t&&PE(i,o)&&n.push(i),CE(i,o)?n:r(i.parentNode)}return t?r(t):n}function jp(t){const[e]=Uc(t,1);return e??null}function Ms(t){return!rs||!t?null:hr(t)?t:Vc(t)?Fc(t)||t===pr(t).scrollingElement?window:Ti(t)?t:null:null}function Up(t){return hr(t)?t.scrollX:t.scrollLeft}function zp(t){return hr(t)?t.scrollY:t.scrollTop}function Aa(t){return{x:Up(t),y:zp(t)}}var we;(function(t){t[t.Forward=1]="Forward",t[t.Backward=-1]="Backward"})(we||(we={}));function Bp(t){return!rs||!t?!1:t===document.scrollingElement}function Wp(t){const e={x:0,y:0},n=Bp(t)?{height:window.innerHeight,width:window.innerWidth}:{height:t.clientHeight,width:t.clientWidth},r={x:t.scrollWidth-n.width,y:t.scrollHeight-n.height},i=t.scrollTop<=e.y,o=t.scrollLeft<=e.x,s=t.scrollTop>=r.y,a=t.scrollLeft>=r.x;return{isTop:i,isLeft:o,isBottom:s,isRight:a,maxScroll:r,minScroll:e}}const RE={x:.2,y:.2};function DE(t,e,n,r,i){let{top:o,left:s,right:a,bottom:c}=n;r===void 0&&(r=10),i===void 0&&(i=RE);const{isTop:l,isBottom:d,isLeft:u,isRight:h}=Wp(t),y={x:0,y:0},E={x:0,y:0},S={height:e.height*i.y,width:e.width*i.x};return!l&&o<=e.top+S.height?(y.y=we.Backward,E.y=r*Math.abs((e.top+S.height-o)/S.height)):!d&&c>=e.bottom-S.height&&(y.y=we.Forward,E.y=r*Math.abs((e.bottom-S.height-c)/S.height)),!h&&a>=e.right-S.width?(y.x=we.Forward,E.x=r*Math.abs((e.right-S.width-a)/S.width)):!u&&s<=e.left+S.width&&(y.x=we.Backward,E.x=r*Math.abs((e.left+S.width-s)/S.width)),{direction:y,speed:E}}function OE(t){if(t===document.scrollingElement){const{innerWidth:o,innerHeight:s}=window;return{top:0,left:0,right:o,bottom:s,width:o,height:s}}const{top:e,left:n,right:r,bottom:i}=t.getBoundingClientRect();return{top:e,left:n,right:r,bottom:i,width:t.clientWidth,height:t.clientHeight}}function Hp(t){return t.reduce((e,n)=>Qn(e,Aa(n)),ct)}function NE(t){return t.reduce((e,n)=>e+Up(n),0)}function ME(t){return t.reduce((e,n)=>e+zp(n),0)}function LE(t,e){if(e===void 0&&(e=mr),!t)return;const{top:n,left:r,bottom:i,right:o}=e(t);jp(t)&&(i<=0||o<=0||n>=window.innerHeight||r>=window.innerWidth)&&t.scrollIntoView({block:"center",inline:"center"})}const VE=[["x",["left","right"],NE],["y",["top","bottom"],ME]];class zc{constructor(e,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=Uc(n),i=Hp(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[o,s,a]of VE)for(const c of s)Object.defineProperty(this,c,{get:()=>{const l=a(r),d=i[o]-l;return this.rect[c]+d},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Lr{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...n)})},this.target=e}add(e,n,r){var i;(i=this.target)==null||i.addEventListener(e,n,r),this.listeners.push([e,n,r])}}function FE(t){const{EventTarget:e}=Ve(t);return t instanceof e?t:pr(t)}function Ls(t,e){const n=Math.abs(t.x),r=Math.abs(t.y);return typeof e=="number"?Math.sqrt(n**2+r**2)>e:"x"in e&&"y"in e?n>e.x&&r>e.y:"x"in e?n>e.x:"y"in e?r>e.y:!1}var Ge;(function(t){t.Click="click",t.DragStart="dragstart",t.Keydown="keydown",t.ContextMenu="contextmenu",t.Resize="resize",t.SelectionChange="selectionchange",t.VisibilityChange="visibilitychange"})(Ge||(Ge={}));function cd(t){t.preventDefault()}function $E(t){t.stopPropagation()}var Z;(function(t){t.Space="Space",t.Down="ArrowDown",t.Right="ArrowRight",t.Left="ArrowLeft",t.Up="ArrowUp",t.Esc="Escape",t.Enter="Enter",t.Tab="Tab"})(Z||(Z={}));const qp={start:[Z.Space,Z.Enter],cancel:[Z.Esc],end:[Z.Space,Z.Enter,Z.Tab]},jE=(t,e)=>{let{currentCoordinates:n}=e;switch(t.code){case Z.Right:return{...n,x:n.x+25};case Z.Left:return{...n,x:n.x-25};case Z.Down:return{...n,y:n.y+25};case Z.Up:return{...n,y:n.y-25}}};class Gp{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:n}}=e;this.props=e,this.listeners=new Lr(pr(n)),this.windowListeners=new Lr(Ve(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Ge.Resize,this.handleCancel),this.windowListeners.add(Ge.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Ge.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:e,onStart:n}=this.props,r=e.node.current;r&&LE(r),n(ct)}handleKeyDown(e){if(jc(e)){const{active:n,context:r,options:i}=this.props,{keyboardCodes:o=qp,coordinateGetter:s=jE,scrollBehavior:a="smooth"}=i,{code:c}=e;if(o.end.includes(c)){this.handleEnd(e);return}if(o.cancel.includes(c)){this.handleCancel(e);return}const{collisionRect:l}=r.current,d=l?{x:l.left,y:l.top}:ct;this.referenceCoordinates||(this.referenceCoordinates=d);const u=s(e,{active:n,context:r.current,currentCoordinates:d});if(u){const h=Do(u,d),y={x:0,y:0},{scrollableAncestors:E}=r.current;for(const S of E){const k=e.code,{isTop:x,isRight:T,isLeft:I,isBottom:C,maxScroll:P,minScroll:R}=Wp(S),g=OE(S),p={x:Math.min(k===Z.Right?g.right-g.width/2:g.right,Math.max(k===Z.Right?g.left:g.left+g.width/2,u.x)),y:Math.min(k===Z.Down?g.bottom-g.height/2:g.bottom,Math.max(k===Z.Down?g.top:g.top+g.height/2,u.y))},m=k===Z.Right&&!T||k===Z.Left&&!I,v=k===Z.Down&&!C||k===Z.Up&&!x;if(m&&p.x!==u.x){const b=S.scrollLeft+h.x,w=k===Z.Right&&b<=P.x||k===Z.Left&&b>=R.x;if(w&&!h.y){S.scrollTo({left:b,behavior:a});return}w?y.x=S.scrollLeft-b:y.x=k===Z.Right?S.scrollLeft-P.x:S.scrollLeft-R.x,y.x&&S.scrollBy({left:-y.x,behavior:a});break}else if(v&&p.y!==u.y){const b=S.scrollTop+h.y,w=k===Z.Down&&b<=P.y||k===Z.Up&&b>=R.y;if(w&&!h.x){S.scrollTo({top:b,behavior:a});return}w?y.y=S.scrollTop-b:y.y=k===Z.Down?S.scrollTop-P.y:S.scrollTop-R.y,y.y&&S.scrollBy({top:-y.y,behavior:a});break}}this.handleMove(e,Qn(Do(u,this.referenceCoordinates),y))}}}handleMove(e,n){const{onMove:r}=this.props;e.preventDefault(),r(n)}handleEnd(e){const{onEnd:n}=this.props;e.preventDefault(),this.detach(),n()}handleCancel(e){const{onCancel:n}=this.props;e.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}Gp.activators=[{eventName:"onKeyDown",handler:(t,e,n)=>{let{keyboardCodes:r=qp,onActivation:i}=e,{active:o}=n;const{code:s}=t.nativeEvent;if(r.start.includes(s)){const a=o.activatorNode.current;return a&&t.target!==a?!1:(t.preventDefault(),i?.({event:t.nativeEvent}),!0)}return!1}}];function ld(t){return!!(t&&"distance"in t)}function ud(t){return!!(t&&"delay"in t)}class Bc{constructor(e,n,r){var i;r===void 0&&(r=FE(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=n;const{event:o}=e,{target:s}=o;this.props=e,this.events=n,this.document=pr(s),this.documentListeners=new Lr(this.document),this.listeners=new Lr(r),this.windowListeners=new Lr(Ve(s)),this.initialCoordinates=(i=Ia(o))!=null?i:ct,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:n,bypassActivationConstraint:r}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(Ge.Resize,this.handleCancel),this.windowListeners.add(Ge.DragStart,cd),this.windowListeners.add(Ge.VisibilityChange,this.handleCancel),this.windowListeners.add(Ge.ContextMenu,cd),this.documentListeners.add(Ge.Keydown,this.handleKeydown),n){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(ud(n)){this.timeoutId=setTimeout(this.handleStart,n.delay),this.handlePending(n);return}if(ld(n)){this.handlePending(n);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,n){const{active:r,onPending:i}=this.props;i(r,e,this.initialCoordinates,n)}handleStart(){const{initialCoordinates:e}=this,{onStart:n}=this.props;e&&(this.activated=!0,this.documentListeners.add(Ge.Click,$E,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Ge.SelectionChange,this.removeTextSelection),n(e))}handleMove(e){var n;const{activated:r,initialCoordinates:i,props:o}=this,{onMove:s,options:{activationConstraint:a}}=o;if(!i)return;const c=(n=Ia(e))!=null?n:ct,l=Do(i,c);if(!r&&a){if(ld(a)){if(a.tolerance!=null&&Ls(l,a.tolerance))return this.handleCancel();if(Ls(l,a.distance))return this.handleStart()}if(ud(a)&&Ls(l,a.tolerance))return this.handleCancel();this.handlePending(a,l);return}e.cancelable&&e.preventDefault(),s(c)}handleEnd(){const{onAbort:e,onEnd:n}=this.props;this.detach(),this.activated||e(this.props.active),n()}handleCancel(){const{onAbort:e,onCancel:n}=this.props;this.detach(),this.activated||e(this.props.active),n()}handleKeydown(e){e.code===Z.Esc&&this.handleCancel()}removeTextSelection(){var e;(e=this.document.getSelection())==null||e.removeAllRanges()}}const UE={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class Kp extends Bc{constructor(e){const{event:n}=e,r=pr(n.target);super(e,UE,r)}}Kp.activators=[{eventName:"onPointerDown",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;return!n.isPrimary||n.button!==0?!1:(r?.({event:n}),!0)}}];const zE={move:{name:"mousemove"},end:{name:"mouseup"}};var Ca;(function(t){t[t.RightClick=2]="RightClick"})(Ca||(Ca={}));class BE extends Bc{constructor(e){super(e,zE,pr(e.event.target))}}BE.activators=[{eventName:"onMouseDown",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;return n.button===Ca.RightClick?!1:(r?.({event:n}),!0)}}];const Vs={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class WE extends Bc{constructor(e){super(e,Vs)}static setup(){return window.addEventListener(Vs.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Vs.move.name,e)};function e(){}}}WE.activators=[{eventName:"onTouchStart",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;const{touches:i}=n;return i.length>1?!1:(r?.({event:n}),!0)}}];var Vr;(function(t){t[t.Pointer=0]="Pointer",t[t.DraggableRect=1]="DraggableRect"})(Vr||(Vr={}));var No;(function(t){t[t.TreeOrder=0]="TreeOrder",t[t.ReversedTreeOrder=1]="ReversedTreeOrder"})(No||(No={}));function HE(t){let{acceleration:e,activator:n=Vr.Pointer,canScroll:r,draggingRect:i,enabled:o,interval:s=5,order:a=No.TreeOrder,pointerCoordinates:c,scrollableAncestors:l,scrollableAncestorRects:d,delta:u,threshold:h}=t;const y=GE({delta:u,disabled:!o}),[E,S]=nE(),k=q({x:0,y:0}),x=q({x:0,y:0}),T=ee(()=>{switch(n){case Vr.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case Vr.DraggableRect:return i}},[n,i,c]),I=q(null),C=H(()=>{const R=I.current;if(!R)return;const g=k.current.x*x.current.x,p=k.current.y*x.current.y;R.scrollBy(g,p)},[]),P=ee(()=>a===No.TreeOrder?[...l].reverse():l,[a,l]);j(()=>{if(!o||!l.length||!T){S();return}for(const R of P){if(r?.(R)===!1)continue;const g=l.indexOf(R),p=d[g];if(!p)continue;const{direction:m,speed:v}=DE(R,p,T,e,h);for(const b of["x","y"])y[b][m[b]]||(v[b]=0,m[b]=0);if(v.x>0||v.y>0){S(),I.current=R,E(C,s),k.current=v,x.current=m;return}}k.current={x:0,y:0},x.current={x:0,y:0},S()},[e,C,r,S,o,s,JSON.stringify(T),JSON.stringify(y),E,l,P,d,JSON.stringify(h)])}const qE={x:{[we.Backward]:!1,[we.Forward]:!1},y:{[we.Backward]:!1,[we.Forward]:!1}};function GE(t){let{delta:e,disabled:n}=t;const r=Sa(e);return xi(i=>{if(n||!r||!i)return qE;const o={x:Math.sign(e.x-r.x),y:Math.sign(e.y-r.y)};return{x:{[we.Backward]:i.x[we.Backward]||o.x===-1,[we.Forward]:i.x[we.Forward]||o.x===1},y:{[we.Backward]:i.y[we.Backward]||o.y===-1,[we.Forward]:i.y[we.Forward]||o.y===1}}},[n,e,r])}function KE(t,e){const n=e!=null?t.get(e):void 0,r=n?n.node.current:null;return xi(i=>{var o;return e==null?null:(o=r??i)!=null?o:null},[r,e])}function YE(t,e){return ee(()=>t.reduce((n,r)=>{const{sensor:i}=r,o=i.activators.map(s=>({eventName:s.eventName,handler:e(s.handler,r)}));return[...n,...o]},[]),[t,e])}var ni;(function(t){t[t.Always=0]="Always",t[t.BeforeDragging=1]="BeforeDragging",t[t.WhileDragging=2]="WhileDragging"})(ni||(ni={}));var Pa;(function(t){t.Optimized="optimized"})(Pa||(Pa={}));const dd=new Map;function JE(t,e){let{dragging:n,dependencies:r,config:i}=e;const[o,s]=W(null),{frequency:a,measure:c,strategy:l}=i,d=q(t),u=k(),h=ei(u),y=H(function(x){x===void 0&&(x=[]),!h.current&&s(T=>T===null?x:T.concat(x.filter(I=>!T.includes(I))))},[h]),E=q(null),S=xi(x=>{if(u&&!n)return dd;if(!x||x===dd||d.current!==t||o!=null){const T=new Map;for(let I of t){if(!I)continue;if(o&&o.length>0&&!o.includes(I.id)&&I.rect.current){T.set(I.id,I.rect.current);continue}const C=I.node.current,P=C?new zc(c(C),C):null;I.rect.current=P,P&&T.set(I.id,P)}return T}return x},[t,o,n,u,c]);return j(()=>{d.current=t},[t]),j(()=>{u||y()},[n,u]),j(()=>{o&&o.length>0&&s(null)},[JSON.stringify(o)]),j(()=>{u||typeof a!="number"||E.current!==null||(E.current=setTimeout(()=>{y(),E.current=null},a))},[a,u,y,...r]),{droppableRects:S,measureDroppableContainers:y,measuringScheduled:o!=null};function k(){switch(l){case ni.Always:return!1;case ni.BeforeDragging:return n;default:return!n}}}function Yp(t,e){return xi(n=>t?n||(typeof e=="function"?e(t):t):null,[e,t])}function XE(t,e){return Yp(t,e)}function QE(t){let{callback:e,disabled:n}=t;const r=$c(e),i=ee(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:o}=window;return new o(r)},[r,n]);return j(()=>()=>i?.disconnect(),[i]),i}function is(t){let{callback:e,disabled:n}=t;const r=$c(e),i=ee(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:o}=window;return new o(r)},[n]);return j(()=>()=>i?.disconnect(),[i]),i}function ZE(t){return new zc(mr(t),t)}function fd(t,e,n){e===void 0&&(e=ZE);const[r,i]=W(null);function o(){i(c=>{if(!t)return null;if(t.isConnected===!1){var l;return(l=c??n)!=null?l:null}const d=e(t);return JSON.stringify(c)===JSON.stringify(d)?c:d})}const s=QE({callback(c){if(t)for(const l of c){const{type:d,target:u}=l;if(d==="childList"&&u instanceof HTMLElement&&u.contains(t)){o();break}}}}),a=is({callback:o});return Et(()=>{o(),t?(a?.observe(t),s?.observe(document.body,{childList:!0,subtree:!0})):(a?.disconnect(),s?.disconnect())},[t]),r}function eT(t){const e=Yp(t);return $p(t,e)}const hd=[];function tT(t){const e=q(t),n=xi(r=>t?r&&r!==hd&&t&&e.current&&t.parentNode===e.current.parentNode?r:Uc(t):hd,[t]);return j(()=>{e.current=t},[t]),n}function nT(t){const[e,n]=W(null),r=q(t),i=H(o=>{const s=Ms(o.target);s&&n(a=>a?(a.set(s,Aa(s)),new Map(a)):null)},[]);return j(()=>{const o=r.current;if(t!==o){s(o);const a=t.map(c=>{const l=Ms(c);return l?(l.addEventListener("scroll",i,{passive:!0}),[l,Aa(l)]):null}).filter(c=>c!=null);n(a.length?new Map(a):null),r.current=t}return()=>{s(t),s(o)};function s(a){a.forEach(c=>{const l=Ms(c);l?.removeEventListener("scroll",i)})}},[i,t]),ee(()=>t.length?e?Array.from(e.values()).reduce((o,s)=>Qn(o,s),ct):Hp(t):ct,[t,e])}function pd(t,e){e===void 0&&(e=[]);const n=q(null);return j(()=>{n.current=null},e),j(()=>{const r=t!==ct;r&&!n.current&&(n.current=t),!r&&n.current&&(n.current=null)},[t]),n.current?Do(t,n.current):ct}function rT(t){j(()=>{if(!rs)return;const e=t.map(n=>{let{sensor:r}=n;return r.setup==null?void 0:r.setup()});return()=>{for(const n of e)n?.()}},t.map(e=>{let{sensor:n}=e;return n}))}function iT(t,e){return ee(()=>t.reduce((n,r)=>{let{eventName:i,handler:o}=r;return n[i]=s=>{o(s,e)},n},{}),[t,e])}function Jp(t){return ee(()=>t?AE(t):null,[t])}const md=[];function oT(t,e){e===void 0&&(e=mr);const[n]=t,r=Jp(n?Ve(n):null),[i,o]=W(md);function s(){o(()=>t.length?t.map(c=>Bp(c)?r:new zc(e(c),c)):md)}const a=is({callback:s});return Et(()=>{a?.disconnect(),s(),t.forEach(c=>a?.observe(c))},[t]),i}function sT(t){if(!t)return null;if(t.children.length>1)return t;const e=t.children[0];return Ti(e)?e:t}function aT(t){let{measure:e}=t;const[n,r]=W(null),i=H(l=>{for(const{target:d}of l)if(Ti(d)){r(u=>{const h=e(d);return u?{...u,width:h.width,height:h.height}:h});break}},[e]),o=is({callback:i}),s=H(l=>{const d=sT(l);o?.disconnect(),d&&o?.observe(d),r(d?e(d):null)},[e,o]),[a,c]=Ro(s);return ee(()=>({nodeRef:a,rect:n,setRef:c}),[n,a,c])}const cT=[{sensor:Kp,options:{}},{sensor:Gp,options:{}}],lT={current:{}},Yi={draggable:{measure:ad},droppable:{measure:ad,strategy:ni.WhileDragging,frequency:Pa.Optimized},dragOverlay:{measure:mr}};class Fr extends Map{get(e){var n;return e!=null&&(n=super.get(e))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:n}=e;return!n})}getNodeFor(e){var n,r;return(n=(r=this.get(e))==null?void 0:r.node.current)!=null?n:void 0}}const uT={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Fr,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Oo},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Yi,measureDroppableContainers:Oo,windowRect:null,measuringScheduled:!1},dT={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Oo,draggableNodes:new Map,over:null,measureDroppableContainers:Oo},os=Je(dT),Xp=Je(uT);function fT(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Fr}}}function hT(t,e){switch(e.type){case ge.DragStart:return{...t,draggable:{...t.draggable,initialCoordinates:e.initialCoordinates,active:e.active}};case ge.DragMove:return t.draggable.active==null?t:{...t,draggable:{...t.draggable,translate:{x:e.coordinates.x-t.draggable.initialCoordinates.x,y:e.coordinates.y-t.draggable.initialCoordinates.y}}};case ge.DragEnd:case ge.DragCancel:return{...t,draggable:{...t.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case ge.RegisterDroppable:{const{element:n}=e,{id:r}=n,i=new Fr(t.droppable.containers);return i.set(r,n),{...t,droppable:{...t.droppable,containers:i}}}case ge.SetDroppableDisabled:{const{id:n,key:r,disabled:i}=e,o=t.droppable.containers.get(n);if(!o||r!==o.key)return t;const s=new Fr(t.droppable.containers);return s.set(n,{...o,disabled:i}),{...t,droppable:{...t.droppable,containers:s}}}case ge.UnregisterDroppable:{const{id:n,key:r}=e,i=t.droppable.containers.get(n);if(!i||r!==i.key)return t;const o=new Fr(t.droppable.containers);return o.delete(n),{...t,droppable:{...t.droppable,containers:o}}}default:return t}}function pT(t){let{disabled:e}=t;const{active:n,activatorEvent:r,draggableNodes:i}=ze(os),o=Sa(r),s=Sa(n?.id);return j(()=>{if(!e&&!r&&o&&s!=null){if(!jc(o)||document.activeElement===o.target)return;const a=i.get(s);if(!a)return;const{activatorNode:c,node:l}=a;if(!c.current&&!l.current)return;requestAnimationFrame(()=>{for(const d of[c.current,l.current]){if(!d)continue;const u=oE(d);if(u){u.focus();break}}})}},[r,e,i,s,o]),null}function mT(t,e){let{transform:n,...r}=e;return t!=null&&t.length?t.reduce((i,o)=>o({transform:i,...r}),n):n}function gT(t){return ee(()=>({draggable:{...Yi.draggable,...t?.draggable},droppable:{...Yi.droppable,...t?.droppable},dragOverlay:{...Yi.dragOverlay,...t?.dragOverlay}}),[t?.draggable,t?.droppable,t?.dragOverlay])}function yT(t){let{activeNode:e,measure:n,initialRect:r,config:i=!0}=t;const o=q(!1),{x:s,y:a}=typeof i=="boolean"?{x:i,y:i}:i;Et(()=>{if(!s&&!a||!e){o.current=!1;return}if(o.current||!r)return;const l=e?.node.current;if(!l||l.isConnected===!1)return;const d=n(l),u=$p(d,r);if(s||(u.x=0),a||(u.y=0),o.current=!0,Math.abs(u.x)>0||Math.abs(u.y)>0){const h=jp(l);h&&h.scrollBy({top:u.y,left:u.x})}},[e,s,a,r,n])}const Qp=Je({...ct,scaleX:1,scaleY:1});var Qt;(function(t){t[t.Uninitialized=0]="Uninitialized",t[t.Initializing=1]="Initializing",t[t.Initialized=2]="Initialized"})(Qt||(Qt={}));const _T=Fo(function(e){var n,r,i,o;let{id:s,accessibility:a,autoScroll:c=!0,children:l,sensors:d=cT,collisionDetection:u=wE,measuring:h,modifiers:y,...E}=e;const S=ai(hT,void 0,fT),[k,x]=S,[T,I]=dE(),[C,P]=W(Qt.Uninitialized),R=C===Qt.Initialized,{draggable:{active:g,nodes:p,translate:m},droppable:{containers:v}}=k,b=g!=null?p.get(g):null,w=q({initial:null,translated:null}),f=ee(()=>{var Ae;return g!=null?{id:g,data:(Ae=b?.data)!=null?Ae:lT,rect:w}:null},[g,b]),A=q(null),[N,V]=W(null),[F,G]=W(null),L=ei(E,Object.values(E)),Y=Si("DndDescribedBy",s),J=ee(()=>v.getEnabled(),[v]),te=gT(h),{droppableRects:le,measureDroppableContainers:be,measuringScheduled:et}=JE(J,{dragging:R,dependencies:[m.x,m.y],config:te.droppable}),Re=KE(p,g),zt=ee(()=>F?Ia(F):null,[F]),We=km(),Tt=XE(Re,te.draggable.measure);yT({activeNode:g!=null?p.get(g):null,config:We.layoutShiftCompensation,initialRect:Tt,measure:te.draggable.measure});const ie=fd(Re,te.draggable.measure,Tt),yr=fd(Re?Re.parentElement:null),dt=q({activatorEvent:null,active:null,activeNode:Re,collisionRect:null,collisions:null,droppableRects:le,draggableNodes:p,draggingNode:null,draggingNodeRect:null,droppableContainers:v,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Ln=v.getNodeFor((n=dt.current.over)==null?void 0:n.id),xt=aT({measure:te.dragOverlay.measure}),Vn=(r=xt.nodeRef.current)!=null?r:Re,Fn=R?(i=xt.rect)!=null?i:ie:null,Hc=!!(xt.nodeRef.current&&xt.rect),qc=eT(Hc?null:ie),as=Jp(Vn?Ve(Vn):null),Bt=tT(R?Ln??Re:null),Ii=oT(Bt),Ai=mT(y,{transform:{x:m.x-qc.x,y:m.y-qc.y,scaleX:1,scaleY:1},activatorEvent:F,active:f,activeNodeRect:ie,containerNodeRect:yr,draggingNodeRect:Fn,over:dt.current.over,overlayNodeRect:xt.rect,scrollableAncestors:Bt,scrollableAncestorRects:Ii,windowRect:as}),Gc=zt?Qn(zt,m):null,Kc=nT(Bt),mm=pd(Kc),gm=pd(Kc,[ie]),$n=Qn(Ai,mm),jn=Fn?TE(Fn,Ai):null,_r=f&&jn?u({active:f,collisionRect:jn,droppableRects:le,droppableContainers:J,pointerCoordinates:Gc}):null,Yc=_E(_r,"id"),[Wt,Jc]=W(null),ym=Hc?Ai:Qn(Ai,gm),_m=kE(ym,(o=Wt?.rect)!=null?o:null,ie),cs=q(null),Xc=H((Ae,Fe)=>{let{sensor:$e,options:Ht}=Fe;if(A.current==null)return;const He=p.get(A.current);if(!He)return;const je=Ae.nativeEvent,ft=new $e({active:A.current,activeNode:He,event:je,options:Ht,context:dt,onAbort(Te){if(!p.get(Te))return;const{onDragAbort:ht}=L.current,St={id:Te};ht?.(St),T({type:"onDragAbort",event:St})},onPending(Te,qt,ht,St){if(!p.get(Te))return;const{onDragPending:vr}=L.current,Gt={id:Te,constraint:qt,initialCoordinates:ht,offset:St};vr?.(Gt),T({type:"onDragPending",event:Gt})},onStart(Te){const qt=A.current;if(qt==null)return;const ht=p.get(qt);if(!ht)return;const{onDragStart:St}=L.current,br={activatorEvent:je,active:{id:qt,data:ht.data,rect:w}};Gn(()=>{St?.(br),P(Qt.Initializing),x({type:ge.DragStart,initialCoordinates:Te,active:qt}),T({type:"onDragStart",event:br}),V(cs.current),G(je)})},onMove(Te){x({type:ge.DragMove,coordinates:Te})},onEnd:Un(ge.DragEnd),onCancel:Un(ge.DragCancel)});cs.current=ft;function Un(Te){return async function(){const{active:ht,collisions:St,over:br,scrollAdjustedTranslate:vr}=dt.current;let Gt=null;if(ht&&vr){const{cancelDrop:wr}=L.current;Gt={activatorEvent:je,active:ht,collisions:St,delta:vr,over:br},Te===ge.DragEnd&&typeof wr=="function"&&await Promise.resolve(wr(Gt))&&(Te=ge.DragCancel)}A.current=null,Gn(()=>{x({type:Te}),P(Qt.Uninitialized),Jc(null),V(null),G(null),cs.current=null;const wr=Te===ge.DragEnd?"onDragEnd":"onDragCancel";if(Gt){const ls=L.current[wr];ls?.(Gt),T({type:wr,event:Gt})}})}}},[p]),bm=H((Ae,Fe)=>($e,Ht)=>{const He=$e.nativeEvent,je=p.get(Ht);if(A.current!==null||!je||He.dndKit||He.defaultPrevented)return;const ft={active:je};Ae($e,Fe.options,ft)===!0&&(He.dndKit={capturedBy:Fe.sensor},A.current=Ht,Xc($e,Fe))},[p,Xc]),Qc=YE(d,bm);rT(d),Et(()=>{ie&&C===Qt.Initializing&&P(Qt.Initialized)},[ie,C]),j(()=>{const{onDragMove:Ae}=L.current,{active:Fe,activatorEvent:$e,collisions:Ht,over:He}=dt.current;if(!Fe||!$e)return;const je={active:Fe,activatorEvent:$e,collisions:Ht,delta:{x:$n.x,y:$n.y},over:He};Gn(()=>{Ae?.(je),T({type:"onDragMove",event:je})})},[$n.x,$n.y]),j(()=>{const{active:Ae,activatorEvent:Fe,collisions:$e,droppableContainers:Ht,scrollAdjustedTranslate:He}=dt.current;if(!Ae||A.current==null||!Fe||!He)return;const{onDragOver:je}=L.current,ft=Ht.get(Yc),Un=ft&&ft.rect.current?{id:ft.id,rect:ft.rect.current,data:ft.data,disabled:ft.disabled}:null,Te={active:Ae,activatorEvent:Fe,collisions:$e,delta:{x:He.x,y:He.y},over:Un};Gn(()=>{Jc(Un),je?.(Te),T({type:"onDragOver",event:Te})})},[Yc]),Et(()=>{dt.current={activatorEvent:F,active:f,activeNode:Re,collisionRect:jn,collisions:_r,droppableRects:le,draggableNodes:p,draggingNode:Vn,draggingNodeRect:Fn,droppableContainers:v,over:Wt,scrollableAncestors:Bt,scrollAdjustedTranslate:$n},w.current={initial:Fn,translated:jn}},[f,Re,_r,jn,p,Vn,Fn,le,v,Wt,Bt,$n]),HE({...We,delta:m,draggingRect:jn,pointerCoordinates:Gc,scrollableAncestors:Bt,scrollableAncestorRects:Ii});const vm=ee(()=>({active:f,activeNode:Re,activeNodeRect:ie,activatorEvent:F,collisions:_r,containerNodeRect:yr,dragOverlay:xt,draggableNodes:p,droppableContainers:v,droppableRects:le,over:Wt,measureDroppableContainers:be,scrollableAncestors:Bt,scrollableAncestorRects:Ii,measuringConfiguration:te,measuringScheduled:et,windowRect:as}),[f,Re,ie,F,_r,yr,xt,p,v,le,Wt,be,Bt,Ii,te,et,as]),wm=ee(()=>({activatorEvent:F,activators:Qc,active:f,activeNodeRect:ie,ariaDescribedById:{draggable:Y},dispatch:x,draggableNodes:p,over:Wt,measureDroppableContainers:be}),[F,Qc,f,ie,x,Y,p,Wt,be]);return De.createElement(Fp.Provider,{value:I},De.createElement(os.Provider,{value:wm},De.createElement(Xp.Provider,{value:vm},De.createElement(Qp.Provider,{value:_m},l)),De.createElement(pT,{disabled:a?.restoreFocus===!1})),De.createElement(pE,{...a,hiddenTextDescribedById:Y}));function km(){const Ae=N?.autoScrollEnabled===!1,Fe=typeof c=="object"?c.enabled===!1:c===!1,$e=R&&!Ae&&!Fe;return typeof c=="object"?{...c,enabled:$e}:{enabled:$e}}}),bT=Je(null),gd="button",vT="Draggable";function wT(t){let{id:e,data:n,disabled:r=!1,attributes:i}=t;const o=Si(vT),{activators:s,activatorEvent:a,active:c,activeNodeRect:l,ariaDescribedById:d,draggableNodes:u,over:h}=ze(os),{role:y=gd,roleDescription:E="draggable",tabIndex:S=0}=i??{},k=c?.id===e,x=ze(k?Qp:bT),[T,I]=Ro(),[C,P]=Ro(),R=iT(s,e),g=ei(n);Et(()=>(u.set(e,{id:e,key:o,node:T,activatorNode:C,data:g}),()=>{const m=u.get(e);m&&m.key===o&&u.delete(e)}),[u,e]);const p=ee(()=>({role:y,tabIndex:S,"aria-disabled":r,"aria-pressed":k&&y===gd?!0:void 0,"aria-roledescription":E,"aria-describedby":d.draggable}),[r,y,S,k,E,d.draggable]);return{active:c,activatorEvent:a,activeNodeRect:l,attributes:p,isDragging:k,listeners:r?void 0:R,node:T,over:h,setNodeRef:I,setActivatorNodeRef:P,transform:x}}function kT(){return ze(Xp)}const ET="Droppable",TT={timeout:25};function xT(t){let{data:e,disabled:n=!1,id:r,resizeObserverConfig:i}=t;const o=Si(ET),{active:s,dispatch:a,over:c,measureDroppableContainers:l}=ze(os),d=q({disabled:n}),u=q(!1),h=q(null),y=q(null),{disabled:E,updateMeasurementsFor:S,timeout:k}={...TT,...i},x=ei(S??r),T=H(()=>{if(!u.current){u.current=!0;return}y.current!=null&&clearTimeout(y.current),y.current=setTimeout(()=>{l(Array.isArray(x.current)?x.current:[x.current]),y.current=null},k)},[k]),I=is({callback:T,disabled:E||!s}),C=H((p,m)=>{I&&(m&&(I.unobserve(m),u.current=!1),p&&I.observe(p))},[I]),[P,R]=Ro(C),g=ei(e);return j(()=>{!I||!P.current||(I.disconnect(),u.current=!1,I.observe(P.current))},[P,I]),j(()=>(a({type:ge.RegisterDroppable,element:{id:r,key:o,disabled:n,node:P,rect:h,data:g}}),()=>a({type:ge.UnregisterDroppable,key:o,id:r})),[r]),j(()=>{n!==d.current.disabled&&(a({type:ge.SetDroppableDisabled,id:r,key:o,disabled:n}),d.current.disabled=n)},[r,o,n,a]),{active:s,rect:h,isOver:c?.id===r,node:P,over:c,setNodeRef:R}}function ST(t,e,n){const r={...t};return e.top+t.y<=n.top?r.y=n.top-e.top:e.bottom+t.y>=n.top+n.height&&(r.y=n.top+n.height-e.bottom),e.left+t.x<=n.left?r.x=n.left-e.left:e.right+t.x>=n.left+n.width&&(r.x=n.left+n.width-e.right),r}const IT=t=>{let{containerNodeRect:e,draggingNodeRect:n,transform:r}=t;return!n||!e?r:ST(r,n,e)},AT=t=>{let{transform:e}=t;return{...e,x:0}};function Wc(t,e,n){const r=t.slice();return r.splice(n<0?r.length+n:n,0,r.splice(e,1)[0]),r}function CT(t,e){return t.reduce((n,r,i)=>{const o=e.get(r);return o&&(n[i]=o),n},Array(t.length))}function ji(t){return t!==null&&t>=0}function PT(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function RT(t){return typeof t=="boolean"?{draggable:t,droppable:t}:t}const Zp=t=>{let{rects:e,activeIndex:n,overIndex:r,index:i}=t;const o=Wc(e,r,n),s=e[i],a=o[i];return!a||!s?null:{x:a.left-s.left,y:a.top-s.top,scaleX:a.width/s.width,scaleY:a.height/s.height}},Ui={scaleX:1,scaleY:1},DT=t=>{var e;let{activeIndex:n,activeNodeRect:r,index:i,rects:o,overIndex:s}=t;const a=(e=o[n])!=null?e:r;if(!a)return null;if(i===n){const l=o[s];return l?{x:0,y:n<s?l.top+l.height-(a.top+a.height):l.top-a.top,...Ui}:null}const c=OT(o,i,n);return i>n&&i<=s?{x:0,y:-a.height-c,...Ui}:i<n&&i>=s?{x:0,y:a.height+c,...Ui}:{x:0,y:0,...Ui}};function OT(t,e,n){const r=t[e],i=t[e-1],o=t[e+1];return r?n<e?i?r.top-(i.top+i.height):o?o.top-(r.top+r.height):0:o?o.top-(r.top+r.height):i?r.top-(i.top+i.height):0:0}const em="Sortable",tm=De.createContext({activeIndex:-1,containerId:em,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Zp,disabled:{draggable:!1,droppable:!1}});function NT(t){let{children:e,id:n,items:r,strategy:i=Zp,disabled:o=!1}=t;const{active:s,dragOverlay:a,droppableRects:c,over:l,measureDroppableContainers:d}=kT(),u=Si(em,n),h=a.rect!==null,y=ee(()=>r.map(R=>typeof R=="object"&&"id"in R?R.id:R),[r]),E=s!=null,S=s?y.indexOf(s.id):-1,k=l?y.indexOf(l.id):-1,x=q(y),T=!PT(y,x.current),I=k!==-1&&S===-1||T,C=RT(o);Et(()=>{T&&E&&d(y)},[T,y,E,d]),j(()=>{x.current=y},[y]);const P=ee(()=>({activeIndex:S,containerId:u,disabled:C,disableTransforms:I,items:y,overIndex:k,useDragOverlay:h,sortedRects:CT(y,c),strategy:i}),[S,u,C.draggable,C.droppable,I,y,k,c,h,i]);return De.createElement(tm.Provider,{value:P},e)}const MT=t=>{let{id:e,items:n,activeIndex:r,overIndex:i}=t;return Wc(n,r,i).indexOf(e)},LT=t=>{let{containerId:e,isSorting:n,wasDragging:r,index:i,items:o,newIndex:s,previousItems:a,previousContainerId:c,transition:l}=t;return!l||!r||a!==o&&i===s?!1:n?!0:s!==i&&e===c},VT={duration:200,easing:"ease"},nm="transform",FT=ti.Transition.toString({property:nm,duration:0,easing:"linear"}),$T={roleDescription:"sortable"};function jT(t){let{disabled:e,index:n,node:r,rect:i}=t;const[o,s]=W(null),a=q(n);return Et(()=>{if(!e&&n!==a.current&&r.current){const c=i.current;if(c){const l=mr(r.current,{ignoreTransform:!0}),d={x:c.left-l.left,y:c.top-l.top,scaleX:c.width/l.width,scaleY:c.height/l.height};(d.x||d.y)&&s(d)}}n!==a.current&&(a.current=n)},[e,n,r,i]),j(()=>{o&&s(null)},[o]),o}function UT(t){let{animateLayoutChanges:e=LT,attributes:n,disabled:r,data:i,getNewIndex:o=MT,id:s,strategy:a,resizeObserverConfig:c,transition:l=VT}=t;const{items:d,containerId:u,activeIndex:h,disabled:y,disableTransforms:E,sortedRects:S,overIndex:k,useDragOverlay:x,strategy:T}=ze(tm),I=zT(r,y),C=d.indexOf(s),P=ee(()=>({sortable:{containerId:u,index:C,items:d},...i}),[u,i,C,d]),R=ee(()=>d.slice(d.indexOf(s)),[d,s]),{rect:g,node:p,isOver:m,setNodeRef:v}=xT({id:s,data:P,disabled:I.droppable,resizeObserverConfig:{updateMeasurementsFor:R,...c}}),{active:b,activatorEvent:w,activeNodeRect:f,attributes:A,setNodeRef:N,listeners:V,isDragging:F,over:G,setActivatorNodeRef:L,transform:Y}=wT({id:s,data:P,attributes:{...$T,...n},disabled:I.draggable}),J=tE(v,N),te=!!b,le=te&&!E&&ji(h)&&ji(k),be=!x&&F,et=be&&le?Y:null,zt=le?et??(a??T)({rects:S,activeNodeRect:f,activeIndex:h,overIndex:k,index:C}):null,We=ji(h)&&ji(k)?o({id:s,items:d,activeIndex:h,overIndex:k}):C,Tt=b?.id,ie=q({activeId:Tt,items:d,newIndex:We,containerId:u}),yr=d!==ie.current.items,dt=e({active:b,containerId:u,isDragging:F,isSorting:te,id:s,index:C,items:d,newIndex:ie.current.newIndex,previousItems:ie.current.items,previousContainerId:ie.current.containerId,transition:l,wasDragging:ie.current.activeId!=null}),Ln=jT({disabled:!dt,index:C,node:p,rect:g});return j(()=>{te&&ie.current.newIndex!==We&&(ie.current.newIndex=We),u!==ie.current.containerId&&(ie.current.containerId=u),d!==ie.current.items&&(ie.current.items=d)},[te,We,u,d]),j(()=>{if(Tt===ie.current.activeId)return;if(Tt!=null&&ie.current.activeId==null){ie.current.activeId=Tt;return}const Vn=setTimeout(()=>{ie.current.activeId=Tt},50);return()=>clearTimeout(Vn)},[Tt]),{active:b,activeIndex:h,attributes:A,data:P,rect:g,index:C,newIndex:We,items:d,isOver:m,isSorting:te,isDragging:F,listeners:V,node:p,overIndex:k,over:G,setNodeRef:J,setActivatorNodeRef:L,setDroppableNodeRef:v,setDraggableNodeRef:N,transform:Ln??zt,transition:xt()};function xt(){if(Ln||yr&&ie.current.newIndex===C)return FT;if(!(be&&!jc(w)||!l)&&(te||dt))return ti.Transition.toString({...l,property:nm})}}function zT(t,e){var n,r;return typeof t=="boolean"?{draggable:t,droppable:!1}:{draggable:(n=t?.draggable)!=null?n:e.draggable,droppable:(r=t?.droppable)!=null?r:e.droppable}}Z.Down,Z.Right,Z.Up,Z.Left;const Zn=[{key:"star",icon:_(sy,{"aria-label":"Star",class:"xl:scale-110"})},{key:"book",icon:_(N0,{"aria-label":"Book",class:"xl:scale-110"})},{key:"laptop",icon:_(J0,{"aria-label":"Laptop",class:"xl:scale-110"})},{key:"leaf",icon:_(X0,{"aria-label":"Leaf",class:"xl:scale-110"})},{key:"wrench",icon:_(dy,{"aria-label":"Wrench",class:"xl:scale-110"})},{key:"home",icon:_(Y0,{"aria-label":"Home",class:"xl:scale-110"})},{key:"pizza",icon:_(ry,{"aria-label":"Pizza",class:"xl:scale-110"})},{key:"cart",icon:_(oy,{"aria-label":"Shopping Cart",class:"xl:scale-110"})},{key:"backpack",icon:_(O0,{"aria-label":"Backpack",class:"xl:scale-110"})},{key:"heart",icon:_(K0,{"aria-label":"Heart",class:"xl:scale-110"})},{key:"gem",icon:_(W0,{"aria-label":"Gem",class:"xl:scale-110"})},{key:"gift",icon:_(H0,{"aria-label":"Gift",class:"xl:scale-110"})},{key:"pen",icon:_(ny,{"aria-label":"Pen",class:"xl:scale-110"})},{key:"dumbbell",icon:_(j0,{"aria-label":"Dumbbell",class:"xl:scale-110"})},{key:"music",icon:_(ty,{"aria-label":"Music",class:"xl:scale-110"})},{key:"gamepad",icon:_(z0,{"aria-label":"Gamepad",class:"xl:scale-110"})},{key:"dollar",icon:_(V0,{"aria-label":"Dollar",class:"xl:scale-110"})},{key:"users",icon:_(uy,{"aria-label":"Users",class:"xl:scale-110"})}],rm=({actionMode:t,setIsVisible:e,handleAction:n,isLoading:r,currentTitle:i,currentIcon:o})=>{const[s,a]=W(""),[c,l]=W(Zn[0].key),[d,u]=W(!0),h=ze(Za);return j(()=>{i&&o?(a(i),l(o)):(a(""),l(Zn[0].key))},[h,o,i]),j(()=>{u(!s.trim().length)},[s]),_("form",{class:"flex h-full flex-col gap-3",onSubmit:y=>{y.preventDefault()},children:[_("label",{class:"flex flex-col gap-1.5 xl:text-lg",children:[_("legend",{class:"font-medium",children:["Title",_("span",{class:"text-violet-900 dark:text-pink-300",children:"*"})]}),_("input",{title:"",type:"text",name:"project-title",class:"dark:(bg-slate-800, caret-pink-300) focus:(outline-violet-900, dark:outline-pink-400) rounded bg-slate-50 px-2 py-1.5 caret-violet-900 outline outline-1 outline-transparent duration-150 hover:outline-slate-500",minLength:1,maxLength:140,value:s,required:!0,onInput:y=>{a(y.target.value)}})]}),_("div",{class:"flex flex-col gap-1.5 xl:text-lg",children:[_("legend",{class:"font-medium",children:"Icon"}),_("span",{id:"project-icons",class:"flex flex-wrap items-center justify-center gap-1.5 lg:gap-2 2xl:gap-2.5",children:Zn.map(y=>_("button",{type:"button",id:y.key,class:`${y.key===c?"border-transparent bg-violet-800 text-slate-50 dark:bg-pink-600":"hover:(bg-slate-50, dark:bg-slate-800) border-current text-violet-900 dark:text-pink-300"} rounded border p-2 transition-all xl:p-2.5 2xl:p-3`,onClick:()=>{l(y.key)},children:y.icon},y.key))})]}),_("span",{class:"mt-4 flex justify-end gap-2",children:[_($o,{id:"project-cancel",handleCancel:()=>{e(!1)}}),_(jo,{id:"project-confirm",action:t,styleClass:"hover:(bg-emerald-700, active:bg-emerald-600, dark:(bg-sky-700, active:bg-sky-800)) bg-emerald-800 dark:bg-sky-600",isDisabled:d,isLoading:r,handleConfirm:()=>{n({projectTitle:s.trim(),projectIcon:c}),e(!1)}})]})]})},im=({setIsVisible:t,taskTitle:e,taskMode:n,isLoading:r,handleDelete:i})=>_("div",{class:"flex flex-col gap-1.5 text-center break-words select-none xl:text-lg",children:[_("p",{children:"Are you sure?"}),_("p",{children:[n," ",_("span",{class:"font-semibold",children:e})," will be deleted permanently."]}),_("div",{class:"mt-4 flex justify-end gap-2",children:[_($o,{id:"delete-cancel",handleCancel:()=>{t(!1)}}),_(jo,{id:"delete-item",action:"Delete",styleClass:"hover:(bg-rose-700, active:bg-rose-600, dark:(bg-rose-700, active:bg-rose-800)) bg-rose-800 dark:bg-rose-600",isLoading:r,handleConfirm:()=>{i(),t(!1)}})]})]}),BT="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let yd=(t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t|=0));for(;t--;)e+=BT[n[t]&63];return e};const gr=()=>{const t=jt(),{user:e}=Ee(P=>P.authReducer),{setProjects:n,addNewProject:r,editProject:i,deleteProject:o}=dr,{addNewTodo:s,editTodo:a,checkTodo:c,deleteTodo:l,deleteProjectTodos:d}=fr,u=e?.uid,h=H(async(P,R)=>{const g=P();return u&&R&&await R(),g},[u]),y=H(async P=>{await h(()=>t(n(P)),()=>lp(u,P))},[t,n,u,h]),E=H(async P=>{const R=u?await d2(u,P):yd();return t(r({...P,id:R})),R},[u,t,r]),S=H(async P=>{await h(()=>t(i(P)),()=>{const{id:R,...g}=P;return f2(u,R,g)})},[u,t,i,h]),k=H(async P=>{await h(()=>{t(o(P)),t(d(P))},()=>h2(u,P))},[u,t,o,d,h]),x=H(async P=>{const R=u?await m2(u,P):yd();t(s({...P,id:R}))},[u,t,s]),T=H(async(P,R)=>{await h(()=>t(c({id:P,isDone:R})),()=>g2(u,P,R))},[u,t,c,h]),I=H(async P=>{await h(()=>t(a(P)),()=>{const{id:R,...g}=P,p={...g,isDone:P.stage===Qe[2]};return y2(u,R,p)})},[u,t,a,h]),C=H(async P=>{await h(()=>t(l(P)),()=>_2(u,P))},[u,t,l,h]);return{syncProjects:y,createProject:E,modifyProject:S,removeProject:k,createTodo:x,toggleTodo:T,modifyTodo:I,removeTodo:C}},WT=({id:t,title:e,order:n,iconKey:r,panelTabIndex:i,setIsVisible:o,setModalContent:s})=>{const a=jt(),{setSelectedProject:c}=dr,[l,d]=W(!1),[u,h]=W(!1),{modifyProject:y,removeProject:E}=gr(),{projectList:S,selectedProject:k}=Ee(m=>m.projectReducer),x=async({projectTitle:m,projectIcon:v})=>{try{d(!0),await y({id:t,order:n,title:m,iconKey:v}),at(Hy)}catch(b){b instanceof Error&&(Ze(jl),console.error(jl,b))}finally{d(!1)}},T=async()=>{try{h(!0);const m=S.filter(v=>v.id!==t);a(c(m[0]?.id)),await E(t),at(qy)}catch(m){m instanceof Error&&(Ze(Ul),console.error(Ul,m))}finally{h(!1)}},{setNodeRef:I,listeners:C,transition:P,transform:R,isDragging:g}=UT({id:t}),p={transition:P,transform:ti.Translate.toString(R)};return _("button",{type:"button",id:t,tabIndex:i,ref:I,style:p,class:`${t===k?"!border-slate-500 bg-slate-50 dark:bg-slate-800":"bg-slate-200 dark:bg-slate-700"} ${g?"z-10 !transition-none":""} flex items-start justify-between gap-1.5 rounded border border-transparent px-3 py-2 text-xl text-slate-900 transition-colors hover:border-slate-500 active:border-slate-500 dark:text-slate-50`,onClick:()=>{a(c(t))},children:[_("span",{class:"flex max-w-full grow gap-1.5 leading-6 break-all",children:[_("span",{children:Zn.find(m=>m.key===r)?.icon}),e]}),_("span",{class:"flex gap-2",children:[_("button",{type:"button",title:"Edit Project",tabIndex:i,class:"hover:(text-violet-900, dark:text-pink-400) rounded duration-150",onClick:()=>{o(!0),s(_(rm,{actionMode:"Edit",setIsVisible:o,handleAction:x,currentTitle:e,currentIcon:r,isLoading:l},"Edit Project"))},children:_(Ef,{"aria-label":"Pen"})}),_("button",{type:"button",title:"Delete Project",tabIndex:i,class:"hover:(text-rose-900, dark:text-rose-400) rounded duration-150",onClick:()=>{o(!0),s(_(im,{setIsVisible:o,taskTitle:e,taskMode:"Project",isLoading:u,handleDelete:T},"Delete Project"))},children:_(Tf,{"aria-label":"Trash"})}),_("button",{...C,type:"button",title:"Drag Project",tabIndex:i,class:"cursor-grab touch-none rounded duration-150 active:cursor-grabbing",children:_(G0,{"aria-label":"Drag"})})]})]},t)},HT=({panelTabIndex:t})=>{const{refer:e,isVisible:n,setIsVisible:r}=Mn(!1),[i,o]=W(),{projectList:s}=Ee(d=>d.projectReducer),{syncProjects:a}=gr(),c=async d=>{try{await a(d)}catch(u){u instanceof Error&&(Ze($l),console.error($l,u))}};return _(ce,{children:[_("div",{id:"project-list",class:"-mt-2 flex h-full min-w-full flex-col gap-1 overflow-y-auto px-3 py-1.5",children:_(_T,{collisionDetection:bE,onDragEnd:d=>{const{active:u,over:h}=d;if(u.id!==h?.id){const y=s.findIndex(k=>k.id===u.id),E=s.findIndex(k=>k.id===h?.id),S=Wc(s,y,E).map((k,x)=>({...k,order:x}));c(S)}},modifiers:[AT,IT],children:_(NT,{items:s,strategy:DT,children:s.length?s.map(d=>_(WT,{id:d.id,order:d.order,title:d.title,iconKey:d.iconKey,panelTabIndex:t,setIsVisible:r,setModalContent:o},d.id)):_("p",{class:"flex justify-center text-xl text-slate-700 dark:text-slate-300",children:"Empty"})})})}),_(li,{modalContent:i,setIsVisible:r,isVisible:n,refer:e})]})},qT=({setIsDrawerOpen:t,setPanelTabIndex:e})=>(j(()=>{window.addEventListener("resize",()=>{window.innerWidth>=1024?(t(!1),e(0)):e(-1)})},[t,e]),_("nav",{id:"mobile-bar",class:"dark:(bg-slate-800, text-pink-500) absolute top-0 flex min-w-full justify-between gap-2 bg-slate-100 p-3 text-2xl text-violet-800 transition-colors select-none lg:hidden",children:[_("span",{class:"flex gap-2",children:[_("button",{type:"button",title:"Open Drawer",id:"hamburger-menu",class:"hover:(bg-slate-200, active:bg-slate-300, dark:(bg-slate-700, active:bg-slate-600)) w-12 rounded px-3 py-2 leading-4 transition-colors",onClick:()=>{t(!0)},children:_(Z0,{"aria-label":"Bars",strokeWidth:"2.25",class:"scale-125"})}),_(Sf,{identifier:"mobile-theme-toggle"})]}),_(Mp,{})]})),GT=({isDrawerOpen:t,panelTabIndex:e,setIsDrawerOpen:n,setPanelTabIndex:r})=>{const{refer:i,isVisible:o,setIsVisible:s}=Mn(!1),[a,c]=W(),[l,d]=W(!1),u=q(null),{createProject:h}=gr(),y=q(window.innerWidth),E=jt(),{projectList:S}=Ee(T=>T.projectReducer),{setSelectedProject:k}=dr,x=async({projectTitle:T,projectIcon:I})=>{try{d(!0);const C=S.reduce((R,g)=>g.order>R?g.order:R,0),P=await h({order:C+1,title:T,iconKey:I});E(k(P)),at(Nf)}catch(C){C instanceof Error&&(Ze(oo),console.error(oo,C))}finally{d(!1)}};return j(()=>{y.current>=1024&&r(0)},[r]),j(()=>{u.current&&c(Of(u.current,{escapeDeactivates:!1}))},[u]),j(()=>{t?(r(0),a?.activate()):a?.deactivate()},[t,a,r]),_("nav",{id:"sidebar",ref:u,class:`${t?"lg:(relative, min-w-0) fixed min-h-full w-full transition-all duration-500":"lg:(ml-0, transition-all) -ml-72"} dark:(bg-slate-700, text-pink-400) lg:(flex, pb-0) inset-0 z-10 w-72 flex-col items-start bg-slate-200 py-1.5 text-violet-900 select-none xl:w-80 2xl:w-96`,children:[_("div",{class:"after:(border-b, border-slate-300, transition-colors, dark:border-slate-600) mb-2 flex min-w-full flex-col gap-1.5 px-3 text-2xl",children:_("span",{class:"flex gap-2",children:[_("button",{type:"button",id:"add-project",tabIndex:e,class:"hover:(bg-violet-700, active:bg-violet-600, dark:(bg-pink-700, active:bg-pink-800)) flex grow items-center gap-1.5 rounded bg-violet-800 p-3 leading-4 font-medium break-all text-slate-50 transition-colors dark:bg-pink-600",onClick:()=>{s(!0)},children:[_(kf,{"aria-label":"Plus Sign",strokeWidth:"2.25",class:"scale-110"}),"Add Project"]}),t?_("button",{type:"button",title:"Close Drawer",id:"mobile-close-drawer",class:"hover:(bg-slate-100, active:bg-slate-50, dark:(bg-slate-800, active:bg-slate-900)) w-12 rounded p-3 leading-4 transition-colors lg:hidden",onClick:()=>{r(-1),n(!1)},children:_(xf,{"aria-label":"X",strokeWidth:"2.25",class:"scale-110"})}):null]})}),_(HT,{panelTabIndex:e}),_(li,{modalContent:_(rm,{actionMode:"Add",setIsVisible:s,handleAction:x,isLoading:l},"Add Project"),setIsVisible:s,isVisible:o,refer:i})]})},KT=()=>{const[t,e]=W(!1),[n,r]=W(-1);return _(ce,{children:[_(qT,{setIsDrawerOpen:e,setPanelTabIndex:r}),_(GT,{isDrawerOpen:t,panelTabIndex:n,setIsDrawerOpen:e,setPanelTabIndex:r})]})},om=6048e5,YT=864e5,_d=Symbol.for("constructDateFrom");function lt(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&_d in t?t[_d](e):t instanceof Date?new t.constructor(e):new Date(e)}function Ie(t,e){return lt(e||t,t)}function JT(t,e,n){const r=Ie(t,n?.in);return isNaN(e)?lt(t,NaN):(r.setDate(r.getDate()+e),r)}let XT={};function ss(){return XT}function ri(t,e){const n=ss(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=Ie(t,e?.in),o=i.getDay(),s=(o<r?7:0)+o-r;return i.setDate(i.getDate()-s),i.setHours(0,0,0,0),i}function Mo(t,e){return ri(t,{...e,weekStartsOn:1})}function sm(t,e){const n=Ie(t,e?.in),r=n.getFullYear(),i=lt(n,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);const o=Mo(i),s=lt(n,0);s.setFullYear(r,0,4),s.setHours(0,0,0,0);const a=Mo(s);return n.getTime()>=o.getTime()?r+1:n.getTime()>=a.getTime()?r:r-1}function bd(t){const e=Ie(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function am(t,...e){const n=lt.bind(null,e.find(r=>typeof r=="object"));return e.map(n)}function Lo(t,e){const n=Ie(t,e?.in);return n.setHours(0,0,0,0),n}function QT(t,e,n){const[r,i]=am(n?.in,t,e),o=Lo(r),s=Lo(i),a=+o-bd(o),c=+s-bd(s);return Math.round((a-c)/YT)}function ZT(t,e){const n=sm(t,e),r=lt(t,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),Mo(r)}function cm(t){return lt(t,Date.now())}function lm(t,e,n){const[r,i]=am(n?.in,t,e);return+Lo(r)==+Lo(i)}function ex(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function um(t){return!(!ex(t)&&typeof t!="number"||isNaN(+Ie(t)))}function tx(t,e){const n=Ie(t,e?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}const nx={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},rx=(t,e,n)=>{let r;const i=nx[t];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Fs(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const ix={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ox={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},sx={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ax={date:Fs({formats:ix,defaultWidth:"full"}),time:Fs({formats:ox,defaultWidth:"full"}),dateTime:Fs({formats:sx,defaultWidth:"full"})},cx={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},lx=(t,e,n,r)=>cx[t];function Tr(t){return(e,n)=>{const r=n?.context?String(n.context):"standalone";let i;if(r==="formatting"&&t.formattingValues){const s=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):s;i=t.formattingValues[a]||t.formattingValues[s]}else{const s=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;i=t.values[a]||t.values[s]}const o=t.argumentCallback?t.argumentCallback(e):e;return i[o]}}const ux={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},dx={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},fx={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},hx={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},px={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},mx={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},gx=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},yx={ordinalNumber:gx,era:Tr({values:ux,defaultWidth:"wide"}),quarter:Tr({values:dx,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Tr({values:fx,defaultWidth:"wide"}),day:Tr({values:hx,defaultWidth:"wide"}),dayPeriod:Tr({values:px,defaultWidth:"wide",formattingValues:mx,defaultFormattingWidth:"wide"})};function xr(t){return(e,n={})=>{const r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(i);if(!o)return null;const s=o[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(a)?bx(a,u=>u.test(s)):_x(a,u=>u.test(s));let l;l=t.valueCallback?t.valueCallback(c):c,l=n.valueCallback?n.valueCallback(l):l;const d=e.slice(s.length);return{value:l,rest:d}}}function _x(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function bx(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function vx(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const i=r[0],o=e.match(t.parsePattern);if(!o)return null;let s=t.valueCallback?t.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;const a=e.slice(i.length);return{value:s,rest:a}}}const wx=/^(\d+)(th|st|nd|rd)?/i,kx=/\d+/i,Ex={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Tx={any:[/^b/i,/^(a|c)/i]},xx={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Sx={any:[/1/i,/2/i,/3/i,/4/i]},Ix={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ax={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Cx={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Px={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Rx={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Dx={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ox={ordinalNumber:vx({matchPattern:wx,parsePattern:kx,valueCallback:t=>parseInt(t,10)}),era:xr({matchPatterns:Ex,defaultMatchWidth:"wide",parsePatterns:Tx,defaultParseWidth:"any"}),quarter:xr({matchPatterns:xx,defaultMatchWidth:"wide",parsePatterns:Sx,defaultParseWidth:"any",valueCallback:t=>t+1}),month:xr({matchPatterns:Ix,defaultMatchWidth:"wide",parsePatterns:Ax,defaultParseWidth:"any"}),day:xr({matchPatterns:Cx,defaultMatchWidth:"wide",parsePatterns:Px,defaultParseWidth:"any"}),dayPeriod:xr({matchPatterns:Rx,defaultMatchWidth:"any",parsePatterns:Dx,defaultParseWidth:"any"})},Nx={code:"en-US",formatDistance:rx,formatLong:ax,formatRelative:lx,localize:yx,match:Ox,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Mx(t,e){const n=Ie(t,e?.in);return QT(n,tx(n))+1}function Lx(t,e){const n=Ie(t,e?.in),r=+Mo(n)-+ZT(n);return Math.round(r/om)+1}function dm(t,e){const n=Ie(t,e?.in),r=n.getFullYear(),i=ss(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,s=lt(e?.in||t,0);s.setFullYear(r+1,0,o),s.setHours(0,0,0,0);const a=ri(s,e),c=lt(e?.in||t,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const l=ri(c,e);return+n>=+a?r+1:+n>=+l?r:r-1}function Vx(t,e){const n=ss(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,i=dm(t,e),o=lt(e?.in||t,0);return o.setFullYear(i,0,r),o.setHours(0,0,0,0),ri(o,e)}function Fx(t,e){const n=Ie(t,e?.in),r=+ri(n,e)-+Vx(n,e);return Math.round(r/om)+1}function Q(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const Yt={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return Q(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):Q(n+1,2)},d(t,e){return Q(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return Q(t.getHours()%12||12,e.length)},H(t,e){return Q(t.getHours(),e.length)},m(t,e){return Q(t.getMinutes(),e.length)},s(t,e){return Q(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),i=Math.trunc(r*Math.pow(10,n-3));return Q(i,e.length)}},Wn={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},vd={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return Yt.y(t,e)},Y:function(t,e,n,r){const i=dm(t,r),o=i>0?i:1-i;if(e==="YY"){const s=o%100;return Q(s,2)}return e==="Yo"?n.ordinalNumber(o,{unit:"year"}):Q(o,e.length)},R:function(t,e){const n=sm(t);return Q(n,e.length)},u:function(t,e){const n=t.getFullYear();return Q(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return Q(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return Q(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return Yt.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return Q(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const i=Fx(t,r);return e==="wo"?n.ordinalNumber(i,{unit:"week"}):Q(i,e.length)},I:function(t,e,n){const r=Lx(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):Q(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):Yt.d(t,e)},D:function(t,e,n){const r=Mx(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):Q(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const i=t.getDay(),o=(i-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return Q(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const i=t.getDay(),o=(i-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return Q(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),i=r===0?7:r;switch(e){case"i":return String(i);case"ii":return Q(i,e.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const i=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let i;switch(r===12?i=Wn.noon:r===0?i=Wn.midnight:i=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let i;switch(r>=17?i=Wn.evening:r>=12?i=Wn.afternoon:r>=4?i=Wn.morning:i=Wn.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Yt.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):Yt.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):Q(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):Q(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):Yt.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):Yt.s(t,e)},S:function(t,e){return Yt.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return kd(r);case"XXXX":case"XX":return gn(r);case"XXXXX":case"XXX":default:return gn(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return kd(r);case"xxxx":case"xx":return gn(r);case"xxxxx":case"xxx":default:return gn(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+wd(r,":");case"OOOO":default:return"GMT"+gn(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+wd(r,":");case"zzzz":default:return"GMT"+gn(r,":")}},t:function(t,e,n){const r=Math.trunc(+t/1e3);return Q(r,e.length)},T:function(t,e,n){return Q(+t,e.length)}};function wd(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),i=Math.trunc(r/60),o=r%60;return o===0?n+String(i):n+String(i)+e+Q(o,2)}function kd(t,e){return t%60===0?(t>0?"-":"+")+Q(Math.abs(t)/60,2):gn(t,e)}function gn(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),i=Q(Math.trunc(r/60),2),o=Q(r%60,2);return n+i+e+o}const Ed=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},fm=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},$x=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return Ed(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",Ed(r,e)).replace("{{time}}",fm(i,e))},jx={p:fm,P:$x},Ux=/^D+$/,zx=/^Y+$/,Bx=["D","DD","YY","YYYY"];function Wx(t){return Ux.test(t)}function Hx(t){return zx.test(t)}function qx(t,e,n){const r=Gx(t,e,n);if(console.warn(r),Bx.includes(t))throw new RangeError(r)}function Gx(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Kx=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Yx=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Jx=/^'([^]*?)'?$/,Xx=/''/g,Qx=/[a-zA-Z]/;function Zx(t,e,n){const r=ss(),i=r.locale??Nx,o=r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,s=r.weekStartsOn??r.locale?.options?.weekStartsOn??0,a=Ie(t,n?.in);if(!um(a))throw new RangeError("Invalid time value");let c=e.match(Yx).map(d=>{const u=d[0];if(u==="p"||u==="P"){const h=jx[u];return h(d,i.formatLong)}return d}).join("").match(Kx).map(d=>{if(d==="''")return{isToken:!1,value:"'"};const u=d[0];if(u==="'")return{isToken:!1,value:eS(d)};if(vd[u])return{isToken:!0,value:d};if(u.match(Qx))throw new RangeError("Format string contains an unescaped latin alphabet character `"+u+"`");return{isToken:!1,value:d}});i.localize.preprocessor&&(c=i.localize.preprocessor(a,c));const l={firstWeekContainsDate:o,weekStartsOn:s,locale:i};return c.map(d=>{if(!d.isToken)return d.value;const u=d.value;(Hx(u)||Wx(u))&&qx(u,e,String(t));const h=vd[u[0]];return h(a,u,i.localize,l)}).join("")}function eS(t){const e=t.match(Jx);return e?e[1].replace(Xx,"'"):t}function tS(t,e){const n=Ie(t,e?.in);if(isNaN(+n))throw new RangeError("Invalid time value");const r=e?.format??"extended";let i="";const o=r==="extended"?"-":"";{const s=Q(n.getDate(),2),a=Q(n.getMonth()+1,2);i=`${Q(n.getFullYear(),4)}${o}${a}${o}${s}`}return i}function Td(t,e){return+Ie(t)<+Ie(e)}function nS(t){return+Ie(t)>Date.now()}function rS(t){return+Ie(t)<Date.now()}function hm(t,e){return lm(lt(t,t),cm(t))}function iS(t,e){return lm(t,JT(cm(t),1),e)}const oS=()=>{const{refer:t,isVisible:e,setIsVisible:n}=Mn(!1),r=jt(),{setSortMode:i,setSortAscending:o}=fr,{sortMode:s,sortAscending:a}=Ee(d=>d.todoReducer),c=d=>{n(!1),r(i(d))},l=d=>{r(o(d))};return _("div",{class:"flex",ref:t,children:[s?_("button",{type:"button",title:"Toggle Order",id:"toggle-order",class:"hover:(bg-slate-200, active:bg-slate-100, dark:(bg-slate-700, active:bg-slate-800)) md:(max-w-[8rem], text-base, gap-1.5, pl-3.5, pr-3, py-2) flex max-w-[7rem] items-center justify-end gap-1 rounded-l py-1 pr-2 pl-2.5 text-sm font-medium whitespace-nowrap duration-150",onClick:()=>{l(a===0?1:0)},children:Kn[s][a]}):null,_("button",{type:"button",title:"Switch Sort",id:"sort-menu",class:`${e?"bg-slate-200 dark:bg-slate-700":""} hover:(bg-slate-200, active:bg-slate-100, dark:(bg-slate-700, active:bg-slate-800)) md:(max-w-[8rem], text-base, gap-1.5, px-2.5, py-2) flex max-w-[7rem] items-center justify-end gap-1 rounded-r px-1.5 py-1 text-sm font-medium whitespace-nowrap duration-150`,onClick:()=>{n(!e)},children:s?_(M0,{"aria-label":"Chevron Down",size:"22",class:"md:scale-110"}):null}),e&&_("div",{id:"sort-dropdown",class:"dark:(bg-slate-700, shadow-slate-600) absolute z-10 mt-[2.35rem] -ml-[1.4rem] flex flex-col items-end justify-center overflow-clip rounded bg-slate-200 shadow-sm shadow-slate-300 md:mt-12",children:Object.keys(Kn).map(d=>_("button",{type:"button",class:"hover:(bg-slate-300 dark:(bg-slate-600 active:bg-slate-500)) flex w-24 min-w-fit justify-end px-2 py-[3px] font-medium select-none active:bg-slate-400 md:w-28",onClick:u=>{c(u.target.innerText)},children:d},d))})]})},sS=()=>{const{refer:t,isVisible:e,setIsVisible:n}=Mn(!1),r=jt(),{setViewMode:i}=fr,{viewMode:o}=Ee(a=>a.todoReducer),s=a=>{n(!1),r(i(a))};return _("div",{ref:t,children:[_("button",{type:"button",title:"Switch View",id:"view-menu",class:`${e?"bg-slate-200 dark:bg-slate-700":""} hover:(bg-slate-200, active:bg-slate-100, dark:(bg-slate-700, active:bg-slate-800)) md:(max-w-[8rem], text-base, gap-1.5, px-2, py-2) flex max-w-[7rem] items-center justify-end gap-1 rounded py-1.5 pr-2 pl-1.5 text-sm font-medium whitespace-nowrap duration-150`,onClick:()=>{n(!e)},children:o?_(ce,{children:[_(U0,{"aria-label":"Eye",size:"20"}),o]}):null}),e&&_("div",{id:"view-dropdown",class:"dark:(bg-slate-700, shadow-slate-600) absolute right-3 z-10 mt-1.5 flex flex-col items-end justify-center overflow-clip rounded bg-slate-200 shadow-sm shadow-slate-300 md:mt-2",children:Yr.map(a=>_("button",{type:"button",class:"hover:(bg-slate-300 dark:(bg-slate-600 active:bg-slate-500)) flex w-28 min-w-fit justify-end px-2 py-[3px] font-medium select-none active:bg-slate-400 md:w-32",onClick:c=>{s(c.target.innerText)},children:a},a))})]})},wn=[{value:"Low",color:"teal-500"},{value:"Medium",color:"amber-500"},{value:"High",color:"rose-400"}],$s={id:"",project:"",title:"",description:"",dueDate:tS(new Date,{}),priority:wn[0].value,stage:Qe[0],isDone:!1},pm=({actionMode:t,setIsVisible:e,handleAction:n,isLoading:r,currentTodo:i})=>{const[o,s]=W($s),[a,c]=W(!0),l=ze(Za),{createProject:d}=gr(),{setSelectedProject:u}=dr,{selectedProject:h}=Ee(x=>x.projectReducer),y=jt(),{setViewMode:E}=fr,{viewMode:S}=Ee(x=>x.todoReducer),k=(x,T)=>{s(I=>({...I,[T]:x.target.value}))};return j(()=>{s(x=>({...x,isDone:o.stage===Qe[2]}))},[o.stage]),j(()=>{const x=async()=>{try{const T=await d({order:0,title:"Default",iconKey:Zn[0].key});y(u(T)),at(Nf)}catch(T){T instanceof Error&&(Ze(oo),console.error(oo,T))}};i?.title?s(i):(s($s),l&&!h&&x())},[d,i,y,l,h,u]),j(()=>{const x=new Date(o.dueDate);o.title.trim().length&&um(x)&&(hm(x)||nS(x))?c(!1):c(!0)},[o.title,o.dueDate]),_("form",{class:"flex h-full flex-col gap-3 select-none",onSubmit:x=>{x.preventDefault()},children:[_("label",{class:"flex flex-col gap-1.5 xl:text-lg",children:[_("legend",{class:"font-medium",children:["Title",_("span",{class:"text-violet-900 dark:text-pink-300",children:"*"})]}),_("input",{title:"",type:"text",name:"todo-title",class:"dark:(bg-slate-800, caret-pink-300) focus:(outline-violet-900, dark:outline-pink-400) rounded bg-slate-50 px-2 py-1.5 caret-violet-900 outline outline-1 outline-transparent duration-150 hover:outline-slate-500",minLength:1,maxLength:140,value:o.title,required:!0,onInput:x=>{k(x,"title")}})]}),_("label",{class:"flex flex-col gap-1.5 xl:text-lg",children:[_("legend",{class:"font-medium",children:"Description"}),_("input",{title:"",type:"text",name:"todo-description",class:"dark:(bg-slate-800, caret-pink-300) focus:(outline-violet-900, dark:outline-pink-400) rounded bg-slate-50 px-2 py-1.5 caret-violet-900 outline outline-1 outline-transparent duration-150 hover:outline-slate-500",maxLength:280,value:o.description,onInput:x=>{k(x,"description")}})]}),_("label",{class:"flex flex-col gap-1.5 xl:text-lg",children:[_("legend",{class:"font-medium",children:"Due Date"}),_("input",{title:"",type:"date",name:"todo-date",class:"dark:(bg-slate-800, caret-pink-300) focus:(outline-violet-900, dark:outline-pink-400) rounded bg-slate-50 px-2 py-1.5 caret-violet-900 outline outline-1 outline-transparent duration-150 hover:outline-slate-500",max:"9999-12-31",min:$s.dueDate,value:o.dueDate,onInput:x=>{k(x,"dueDate")}})]}),_("fieldset",{class:"flex flex-col xl:text-lg",children:[_("legend",{class:"mb-1.5 font-medium",children:"Priority"}),_("span",{class:"flex items-center justify-evenly",children:wn.map(x=>_("label",{class:"flex gap-1.5",children:[_("input",{title:"",type:"radio",name:"todo-priority",class:`accent-${x.color} dark:(bg-slate-800, caret-pink-300) w-5 bg-slate-50 caret-violet-900`,checked:x.value===o.priority,value:x.value,required:!0,onInput:T=>{k(T,"priority")}}),x.value]},x.value))})]}),_("fieldset",{class:"flex flex-col xl:text-lg",children:[_("legend",{class:"mb-1.5 font-medium",children:"Stage"}),_("span",{class:"flex items-center justify-evenly",children:Qe.map(x=>_("label",{class:"flex gap-1.5",children:[_("input",{title:"",type:"radio",name:"todo-stage",class:"dark:(bg-slate-800, accent-pink-300, caret-pink-300) w-5 bg-slate-50 caret-violet-900 accent-violet-400",checked:x===o.stage,value:x,required:!0,onInput:T=>{k(T,"stage")}}),x]},x))})]}),_("span",{class:"mt-4 flex justify-end gap-2",children:[_($o,{id:"todo-cancel",handleCancel:()=>{e(!1)}}),_(jo,{id:"todo-add",action:t,styleClass:"hover:(bg-emerald-700, active:bg-emerald-600, dark:(bg-sky-700, active:bg-sky-800)) bg-emerald-800 dark:bg-sky-600",isDisabled:a,isLoading:r,handleConfirm:async()=>{o.project=h,o.title=o.title.trim(),o.description=o.description.trim(),S!==Yr[0]&&y(E(o.stage));try{await n(o)}finally{e(!1)}}})]})]})},aS=()=>{const{refer:t,isVisible:e,setIsVisible:n}=Mn(!1),[r,i]=W(!1),{createTodo:o}=gr();return _(ce,{children:[_("div",{id:"control-panel",class:"md:(py-1.5, min-h-[3.25rem]) flex min-h-[2.5rem] items-center justify-between bg-slate-300 px-3 py-1 transition-all dark:bg-slate-600",children:[_("button",{type:"button",id:"add-todo",class:"hover:(bg-violet-700, active:bg-violet-600, dark:(bg-pink-700, active:bg-pink-800)) md:(max-w-[8.5rem], text-lg, gap-1, pl-3, pr-4, py-1.5) flex max-w-[7.25rem] items-center gap-0.5 rounded bg-violet-800 py-1 pr-3 pl-2 leading-4 font-medium break-all whitespace-nowrap text-white transition-all dark:bg-pink-600",onClick:()=>{n(!0)},children:[_(kf,{"aria-label":"Plus Sign",strokeWidth:"2.25",size:"22",class:"md:scale-110"}),"Add Todo"]}),_("div",{class:"flex gap-2",children:[_(oS,{}),_(sS,{})]})]}),_(li,{modalContent:_(pm,{actionMode:"Add",setIsVisible:n,handleAction:async({project:a,title:c,description:l,dueDate:d,priority:u,stage:h,isDone:y})=>{try{i(!0),await o({project:a,title:c,description:l,dueDate:d,priority:u,stage:h,isDone:y}),n(!1),at(Gy)}catch(E){E instanceof Error&&(Ze(zl),console.error(zl,E))}finally{i(!1)}},isLoading:r},"Add Todo"),setIsVisible:n,isVisible:e,refer:t})]})},cS=({id:t,project:e,title:n,description:r,dueDate:i,priority:o,stage:s,isDone:a,setIsVisible:c,setModalContent:l})=>{const[d,u]=W(!1),[h,y]=W(!1),{toggleTodo:E,modifyTodo:S,removeTodo:k}=gr(),{projectList:x}=Ee(R=>R.projectReducer),T=x.find(R=>R.id===e),I=new Date(i),C=async({project:R,title:g,description:p,dueDate:m,priority:v,stage:b})=>{try{u(!0),await S({id:t,project:R,title:g,description:p,dueDate:m,priority:v,stage:b,isDone:a}),c(!1),at(Ky)}catch(w){w instanceof Error&&(Ze(Bl),console.error(Bl,w))}finally{u(!1)}},P=async()=>{try{y(!0),await k(t),at(Yy)}catch(R){R instanceof Error&&(Ze(Wl),console.error(Wl,R))}finally{y(!1)}};return _(ce,{children:_("div",{id:t,class:`${a?"dark:(bg-sky-900) bg-emerald-100":"dark:(bg-slate-800) bg-slate-100"} mt-3.5 flex justify-between gap-6 rounded px-4 py-3 drop-shadow-sm duration-150 xl:text-lg`,children:[_("div",{class:"flex flex-col gap-1.5 break-all",children:[_("p",{class:"flex -skew-x-6 items-center gap-0.5 text-slate-600 dark:text-slate-400",children:[_("span",{class:"scale-75",children:Zn.find(R=>R.key===T?.iconKey)?.icon}),T?.title]}),_("p",{class:`${a?"line-through":""} -my-1 font-medium decoration-2`,children:n}),_("p",{children:r}),_("p",{class:"mt-1 -mb-1",children:[Zx(I,"eee, d MMM ’yy"),iS(I)?" • Tomorrow":hm(I)?" • Today":rS(I)?" • Overdue":""]}),_("p",{class:"flex items-center gap-1.5",children:[_("span",{class:`bg-${wn.find(R=>R.value===o)?.color??""} block aspect-square w-4 rounded-full`}),o]})]}),_("div",{class:"flex flex-col items-end justify-between",children:[_("span",{class:"flex gap-2 sm:gap-3",children:[_("button",{type:"button",title:"Edit Todo",class:"hover:(text-violet-900, dark:text-pink-400) flex scale-105 items-center gap-1.5 rounded font-medium duration-150",onClick:()=>{c(!0),l(_(pm,{actionMode:"Edit",setIsVisible:c,isLoading:d,handleAction:C,currentTodo:{id:t,project:e,title:n,description:r,dueDate:i,priority:o,stage:s,isDone:a}},"Edit Todo"))},children:[_(Ef,{"aria-label":"Pen"}),_("span",{class:"hidden sm:inline xl:text-lg",children:"Edit"})]}),_("button",{type:"button",title:"Delete Todo",class:"hover:(text-rose-900, dark:text-rose-400) flex scale-105 items-center gap-1.5 rounded font-medium duration-150",onClick:()=>{c(!0),l(_(im,{setIsVisible:c,taskTitle:n,taskMode:"Todo",isLoading:h,handleDelete:P},"Delete Todo"))},children:[_(Tf,{"aria-label":"Trash"}),_("span",{class:"hidden sm:inline xl:text-lg",children:"Delete"})]})]}),_("button",{type:"button",title:"Check Done",class:"hover:(text-emerald-900, dark:text-sky-400) flex scale-110 items-center gap-1.5 rounded font-medium duration-150",onClick:()=>{E(t,!a)},children:[a?_(L0,{"aria-label":"Check Mark"}):_(F0,{"aria-label":"Question Mark"}),_("span",{class:"hidden sm:inline xl:text-lg",children:a?"Done":"Working"})]})]})]})})},lS=(t,e,n,r)=>{const i=(c,l)=>{const d=c.title.toLowerCase(),u=l.title.toLowerCase();return d<u?r===0?-1:1:d>u?r===0?1:-1:0},o=(c,l)=>{const d=c.priority===wn[0].value?0:c.priority===wn[1].value?1:2,u=l.priority===wn[0].value?0:l.priority===wn[1].value?1:2;return d>u?r===0?-1:1:d<u?r===0?1:-1:0},s=(c,l)=>{const d=new Date(c.dueDate),u=new Date(l.dueDate);return Td(d,u)?r===0?-1:1:Td(u,d)?r===0?1:-1:0},a=t.filter(c=>c.project===e);switch(n){case Object.keys(Kn)[0]:return a.sort(i);case Object.keys(Kn)[1]:return a.sort(o);case Object.keys(Kn)[2]:return a.sort(s);default:return a}},uS=()=>{const{refer:t,isVisible:e,setIsVisible:n}=Mn(!1),[r,i]=W(),{selectedProject:o}=Ee(S=>S.projectReducer),{todoList:s,viewMode:a,sortMode:c,sortAscending:l}=Ee(S=>S.todoReducer),d=lS(s,o,c,l),u=d.filter(S=>S.stage===Qe[0]),h=d.filter(S=>S.stage===Qe[1]),y=d.filter(S=>S.stage===Qe[2]);return _(ce,{children:[_("section",{id:"list",class:"flex max-w-full grow flex-col bg-slate-50 transition-colors dark:bg-slate-900",children:[_(aS,{}),_("div",{tabIndex:-1,style:"scrollbar-width:thin",class:"overflow-y-auto px-3 pb-3.5",children:[_("p",{class:"only-child:flex mt-4 hidden justify-center text-lg text-slate-600 select-none xl:text-xl dark:text-slate-400",children:"Empty"}),[["Todo",u],["In Progress",h],["Done",y]].map(([S,k],x)=>_(ce,{children:k.length&&(a===Yr[0]||a===Yr[x+1])?_(ce,{children:[_("p",{class:"mx-2 mt-3.5 -skew-x-6 text-xl font-bold select-none xl:text-2xl",children:S}),k.map(T=>_(cS,{id:T.id,project:T.project,title:T.title,description:T.description,dueDate:T.dueDate,priority:T.priority,stage:T.stage,isDone:T.isDone,setIsVisible:n,setModalContent:i},T.id))]}):_(ce,{})},S))]})]}),_(li,{modalContent:r,setIsVisible:n,isVisible:e,refer:t})]})},dS=()=>{const{projectList:t}=Ee(c=>c.projectReducer),{todoList:e}=Ee(c=>c.todoReducer),n=jt(),{clearUser:r}=Np,{setProjects:i,setSelectedProject:o}=dr,{setTodos:s}=fr,a=q(!1);j(()=>{const c=K1(Rc,async l=>{if(l){if(a.current)return;a.current=!0;try{const{uid:d}=l,[u,h]=await up({uid:d,localProjects:t,localTodos:e});t.length||n(o(u[0]?.id)),n(i(u)),n(s(h)),at(Mf)}catch(d){d instanceof Error&&(Ze(so),console.error(so,d))}}else n(r()),a.current=!1});return()=>{c()}},[n,t,e,i,s,r,o])},fS=()=>(dS(),_("div",{id:"app",class:"font-main dark:(bg-slate-900, accent-sky-600, selection:bg-sky-600) flex min-h-[100dvh] flex-col justify-between bg-slate-50 accent-emerald-400 selection:bg-emerald-400",children:[_(Zk,{}),_("main",{class:"flex max-h-screen grow",children:[_(eE,{}),_(KT,{}),_(uS,{})]}),_(fy,{})]}));console.log(`"Give me six hours to chop down a tree & I will
spend the first four sharpening the axe." - Abraham Lincoln`);const hS=localStorage.state?JSON.parse(localStorage.state):{},Ra=Rk({reducer:{authReducer:Xk,projectReducer:Wk,todoReducer:qk},preloadedState:hS});Ra.subscribe(()=>{localStorage.setItem("state",JSON.stringify(Ra.getState()))});Qm(k0,!0);tr(_(Mg,{store:Ra,children:_(fS,{})}),document.body);const pS=()=>{"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/todo-list/sw.js",{scope:"/todo-list/"}).catch(t=>{t instanceof Error&&console.error(Wy,t)})})};pS();
