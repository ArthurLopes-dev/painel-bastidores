var Mn=typeof window<"u",qn=Mn?window:null,Ee=Mn?document:null,ge={OBJECT:0,ATTRIBUTE:1,CSS:2,TRANSFORM:3,CSS_VAR:4},Kt={NUMBER:0,UNIT:1,COLOR:2,COMPLEX:3},Oe={NONE:0,AUTO:1,FORCE:2},we={replace:0,none:1,blend:2},zl=Symbol(),bn=Symbol(),uo=Symbol(),Ci=Symbol(),Wh=Symbol(),zt=1e-11,lr=1e12,Ge=1e3,cr=240,Tn="",Xh="var(",hr=[],fo=(()=>{let i=new Map;return i.set("x","translateX"),i.set("y","translateY"),i.set("z","translateZ"),i})(),_s=["perspective","translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY"],qh=_s.reduce((i,t)=>({...i,[t]:t+"("}),{}),de=()=>{},Yh=i=>i,$h=/\)\s*[-.\d]/,Zh=/(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i,Jh=/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i,Kh=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,Qh=/hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i,jh=/hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,Vl=/[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi,po=/^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i,tu=/([a-z])([A-Z])/g,mo=/(\*=|\+=|-=)/,eu=/var\(\s*(--[\w-]+)(?:\s*,\s*([^)]+))?\s*\)/;var xs={id:null,keyframes:null,playbackEase:null,playbackRate:1,frameRate:cr,loop:0,reversed:!1,alternate:!1,autoplay:!0,persist:!1,duration:Ge,delay:0,loopDelay:0,ease:"out(2)",composition:we.replace,modifier:Yh,onBegin:de,onBeforeUpdate:de,onUpdate:de,onLoop:de,onPause:de,onComplete:de,onRender:de},Ri={current:null,root:Ee},Nt={defaults:xs,precision:4,timeScale:1,tickThreshold:200,editor:null},kl={version:"4.5.0",engine:null};Mn&&(qn.AnimeJS||(qn.AnimeJS=[]),qn.AnimeJS.push(kl));var Gl=i=>i.replace(tu,"$1-$2").toLowerCase(),fn=(i,t)=>i.indexOf(t)===0,ci=Date.now,wn=Array.isArray,Yn=i=>i&&i.constructor===Object,Be=i=>typeof i=="number"&&!isNaN(i),ze=i=>typeof i=="string",qe=i=>typeof i=="function",vt=i=>typeof i>"u",$n=i=>vt(i)||i===null,go=i=>Mn&&i instanceof SVGElement,Hl=i=>Zh.test(i),Wl=i=>fn(i,"rgb"),Xl=i=>fn(i,"hsl"),iu=i=>Hl(i)||(Wl(i)||Xl(i))&&(i[i.length-1]===")"||!$h.test(i)),ur=i=>!Nt.defaults.hasOwnProperty(i),Rf=["opacity","rotate","overflow","color"],su=(i,t)=>{if(Rf.includes(t))return!1;if(i.getAttribute(t)||t in i){if(t==="scale"){let e=i.parentNode;return e&&e.tagName==="filter"}return!0}},_o=i=>ze(i)?parseFloat(i):i,hi=Math.pow,An=Math.sqrt,xo=Math.sin,vo=Math.cos,ji=Math.abs,dr=Math.exp;var ts=Math.floor,ru=Math.asin;var En=Math.PI,nu=Math.round,fe=(i,t,e)=>i<t?t:i>e?e:i,Wt=(i,t)=>{if(t<0)return i;if(!t)return nu(i);let e=10**t;return nu(i*e)/e};var ui=(i,t,e)=>e===1?t:e===0?i:i+(t-i)*e,es=i=>i===1/0?lr:i===-1/0?-lr:i,di=i=>i<=zt?zt:es(Wt(i,11)),Ne=i=>wn(i)?[...i]:i,yo=(i,t)=>{let e={...i};for(let n in t){let s=i[n];e[n]=vt(s)?t[n]:s}return e},le=(i,t,e,n="_prev",s="_next")=>{let r=i._head,o=s;for(e&&(r=i._tail,o=n);r;){let a=r[o];t(r),r=a}},Fn=(i,t,e="_prev",n="_next")=>{let s=t[e],r=t[n];s?s[n]=r:i._head=r,r?r[e]=s:i._tail=s,t[e]=null,t[n]=null},pn=(i,t,e,n="_prev",s="_next")=>{let r=i._tail;for(;r&&e&&e(r,t);)r=r[n];let o=r?r[s]:i._head;r?r[s]=t:i._head=t,o?o[n]=t:i._tail=t,t[n]=r,t[s]=o};var ou=(i,t,e)=>{let n=i.style.transform;if(n){let s=i[Ci],r=0,o=n.length,a;for(;r<o;){for(;r<o&&n.charCodeAt(r)===32;)r++;if(r>=o)break;let c=r;for(;r<o&&n.charCodeAt(r)!==40;)r++;if(r>=o)break;let h=n.substring(c,r),d=1,u=r+1,f=-1,_=-1;for(r++;r<o&&d>0;){let m=n.charCodeAt(r);m===40?d++:m===41?d--:m===44&&d===1&&(f===-1?f=r:_===-1&&(_=r)),r++}let v=r-1;h==="translate"||h==="translate3d"?(f===-1?s.translateX=n.substring(u,v).trim():(s.translateX=n.substring(u,f).trim(),_===-1?s.translateY=n.substring(f+1,v).trim():(s.translateY=n.substring(f+1,_).trim(),s.translateZ=n.substring(_+1,v).trim())),a=n.substring(u,v)):h==="scale"||h==="scale3d"?f===-1?s.scale=n.substring(u,v).trim():(s.scaleX=n.substring(u,f).trim(),_===-1?s.scaleY=n.substring(f+1,v).trim():(s.scaleY=n.substring(f+1,_).trim(),s.scaleZ=n.substring(_+1,v).trim())):s[h]=n.substring(u,v)}if(t==="translate3d"&&a)return e&&(e[t]=a),a;let l=s[t];if(!vt(l))return e&&(e[t]=l),l}return t==="translate3d"?"0px, 0px, 0px":t==="rotate3d"?"0, 0, 0, 0deg":fn(t,"scale")?"1":fn(t,"rotate")||fn(t,"skew")?"0deg":"0px"},So=i=>{let t=Tn;for(let e=0,n=_s.length;e<n;e++){let s=_s[e],r=i[s];if(r!==void 0){if(s==="translateX"){let o=i.translateY;if(o!==void 0){let a=i.translateZ;a!==void 0?(t+=`translate3d(${r},${o},${a}) `,e+=2):(t+=`translate(${r},${o}) `,e+=1);continue}}if(s==="scaleX"&&i.scale===void 0){let o=i.scaleY;if(o!==void 0){let a=i.scaleZ;a!==void 0?(t+=`scale3d(${r},${o},${a}) `,e+=2):(t+=`scale(${r},${o}) `,e+=1);continue}}t+=`${qh[s]}${r}) `}s==="rotateZ"&&i.rotate3d!==void 0&&(t+=`rotate3d(${i.rotate3d}) `)}return i.matrix!==void 0&&(t+=`matrix(${i.matrix}) `),i.matrix3d!==void 0&&(t+=`matrix3d(${i.matrix3d}) `),t};var ql=[];function Mo(i,t){if(!i)return null;let e=ql.length;t:for(let n=0;n<e;n++){let s=ql[n];if(s.detect&&!s.detect(i))continue;let r=s.targetAdapters;for(let o=0,a=r.length;o<a;o++){let l=r[o];if(l.detect(i)){let c=l.props[t];if(c&&(!c.gate||c.gate(i)))return c;break t}}}for(let n=0;n<e;n++){let s=ql[n];if(s.detect&&!s.detect(i))continue;let r=s.propertyResolvers;for(let o=0,a=r.length;o<a;o++){let l=r[o](i,t);if(l)return l}}return null}var If=i=>{let t=Jh.exec(i)||Kh.exec(i),e=vt(t[4])?1:+t[4];return[+t[1],+t[2],+t[3],e]},Pf=i=>{let t=i.length,e=t===4||t===5;return[+("0x"+i[1]+i[e?1:2]),+("0x"+i[e?2:3]+i[e?2:4]),+("0x"+i[e?3:5]+i[e?3:6]),t===5||t===9?+(+("0x"+i[e?4:7]+i[e?4:8])/255).toFixed(3):1]},Yl=(i,t,e)=>(e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*(2/3-e)*6:i),Lf=i=>{let t=Qh.exec(i)||jh.exec(i),e=+t[1]/360,n=+t[2]/100,s=+t[3]/100,r=vt(t[4])?1:+t[4],o,a,l;if(n===0)o=a=l=s;else{let c=s<.5?s*(1+n):s+n-s*n,h=2*s-c;o=Wt(Yl(h,c,e+1/3)*255,0),a=Wt(Yl(h,c,e)*255,0),l=Wt(Yl(h,c,e-1/3)*255,0)}return[o,a,l,r]},au=i=>Wl(i)?If(i):Hl(i)?Pf(i):Xl(i)?Lf(i):[0,0,0,1];var Qt=(i,t)=>vt(i)?t:i,lu=(i,t)=>{let e=i.match(eu),n=t[bn]?t:document.documentElement,s=getComputedStyle(n)?.getPropertyValue(e[1]);return(!s||s.trim()===Tn)&&e[2]&&(s=e[2].trim()),s||0},Zn=(i,t,e,n,s,r)=>{if(qe(i)){if(!s){let a=i(t,e,n,r);return isNaN(+a)?a||0:+a}let o=()=>{let a=i(t,e,n,r);return isNaN(+a)?a||0:+a};return s.func=o,o()}if(ze(i)&&fn(i,Xh)){if(!s)return lu(i,t);let o=()=>lu(i,t);return s.func=o,o()}return i},fr=(i,t)=>i[bn]?i[uo]&&su(i,t)?ge.ATTRIBUTE:_s.includes(t)||fo.get(t)?ge.TRANSFORM:fn(t,"--")?ge.CSS_VAR:t in i.style?ge.CSS:t in i?ge.OBJECT:ge.ATTRIBUTE:ge.OBJECT,cu=(i,t,e)=>{let n=i.style[t];n&&e&&(e[t]=n);let s=n||getComputedStyle(i[Wh]||i).getPropertyValue(t);return s==="auto"?"0":s},Jn=(i,t,e,n)=>{let s=vt(e)?fr(i,t):e,r=Mo(i,t);if(r){let o=r.get(i);return o&&n&&(n[t]=o),o??0}if(s===ge.OBJECT){let o=i[t];return o&&n&&(n[t]=o),o||0}if(s===ge.ATTRIBUTE){let o=i.getAttribute(t);return o&&n&&(n[t]=o),o}return s===ge.TRANSFORM?ou(i,t,n):s===ge.CSS_VAR?cu(i,t,n).trimStart():cu(i,t,n)},Kn=(i,t,e)=>e==="-"?i-t:e==="+"?i+t:i*t,bo=()=>({t:Kt.NUMBER,n:0,u:null,o:null,d:null,s:null}),He=(i,t)=>{if(t.t=Kt.NUMBER,t.n=0,t.u=null,t.o=null,t.d=null,t.s=null,!i)return t;let e=+i;if(!isNaN(e))return t.n=e,t;let n=i;n[1]==="="&&(t.o=n[0],n=n.slice(2));let s=n.includes(" ")?!1:po.exec(n);if(s)return t.t=Kt.UNIT,t.n=+s[1],t.u=s[2],t;if(t.o)return t.n=+n,t;if(iu(n))return t.t=Kt.COLOR,t.d=au(n),t;{let r=n.match(Vl);return t.t=Kt.COMPLEX,t.d=r?r.map(Number):[],t.s=n.split(Vl)||[],t}},$l=(i,t)=>(t.t=i._valueType,t.n=i._toNumber,t.u=i._unit,t.o=null,t.d=Ne(i._toNumbers),t.s=Ne(i._strings),t),Re=bo(),To=(i,t,e)=>{let n=i._modifier,s=i._fromNumbers,r=i._toNumbers,o=i._strings,a=o[0];for(let l=0,c=r.length;l<c;l++){let h=n(Wt(ui(s[l],r[l],t),e)),d=o[l+1];a+=`${d?h+d:h}`,i._numbers[l]=h}return a};var pr=(i,t,e,n,s)=>{let r=i.parent,o=i.duration,a=i.completed,l=i.iterationDuration,c=i.iterationCount,h=i._currentIteration,d=i._loopDelay,u=i._reversed,f=i._alternate,_=i._hasChildren,v=i._delay,m=i._currentTime,p=v+l,b=t-v,I=fe(m,-v,o),S=fe(b,-v,o),T=b-m,M=S>0,E=S>=o,x=o<=zt,A=s===Oe.FORCE,L=0,R=b,D=0;if(c>1){let X=l+(E?0:d),tt=~~(S/X);i._currentIteration=fe(tt,0,c),E&&i._currentIteration--,L=i._currentIteration%2,R=S-tt*X||0}let N=u^(f&&L),C=i._ease,z=E?N?0:o:N?l-R:R;C&&(z=l*C(z/l)||0);let W=(r?r.backwards:b<m)?!N:!!N;if(i._currentTime=b,i._iterationTime=z,i.backwards=W,M&&!i.began?(i.began=!0,!e&&!(r&&(W||!r.began))&&i.onBegin(i)):b<=0&&(i.began=!1),!e&&!_&&M&&i._currentIteration!==h&&i.onLoop(i),A||s===Oe.AUTO&&(t>=(r&&v>0?0:v)&&t<=p||t<=v&&I>v||t>=p&&I!==o)||z>=p&&I!==o||z<=v&&I>0&&!E||t<=I&&I===o&&a||E&&!a&&x){if(M&&(i.computeDeltaTime(I),e||i.onBeforeUpdate(i)),!_){let X=A||(W?T*-1:T)>=Nt.tickThreshold,tt=Wt(i._offset+(r?r._offset:0)+v+z,12),U=i._head,Y,Q,_t,Mt,oe=0;for(;U;){let kt=U._composition,bt=U._currentTime,$=U._changeDuration,K=U._absoluteStartTime+U._changeDuration,it=U._nextRep,Et=U._prevRep,ot=kt!==we.none,ut=Et?Et._absoluteStartTime+Et._changeDuration:0,Ht=Et&&Et.parent!==U.parent,Ut=!it||it._isOverridden?K:it.parent===U.parent?K+it._delay:it._absoluteStartTime<it._absoluteUpdateStartTime?it._absoluteStartTime:it._absoluteUpdateStartTime;if((X||(bt!==$||tt<=Ut||Et&&!Ht&&(!it||it.parent!==U.parent))&&(bt!==0||tt>=U._absoluteStartTime||Ht&&!U._hasFromValue&&!Et._isOverridden&&tt>=ut||it&&!it._isOverridden&&it.parent===U.parent&&it._currentTime!==0&&z<it._startTime))&&(!Et||Ht||z>=U._startTime)&&(!ot||!U._isOverridden&&(!U._isOverlapped||tt<=K)&&(!it||it._isOverridden||tt<=Ut)&&(!Et||Et._isOverridden||(Ht?tt>=U._absoluteStartTime||!U._hasFromValue&&tt>=ut:tt>=ut+U._delay)))){let Vt=U._currentTime=fe(z-U._startTime,0,$),Ft=U._ease(Vt/U._updateDuration),It=U._modifier,Jt=U._valueType,re=U._tweenType,xe=re===ge.OBJECT,$t=Jt===Kt.NUMBER,ne=$t&&xe||Ft===0||Ft===1?-1:Nt.precision,P,te;if($t)P=te=It(Wt(ui(U._fromNumber,U._toNumber,Ft),ne));else if(Jt===Kt.UNIT)te=It(Wt(ui(U._fromNumber,U._toNumber,Ft),ne)),P=`${te}${U._unit}`;else if(Jt===Kt.COLOR){let Ct=U._numbers,w=U._fromNumbers,g=U._toNumbers,B=1-Ft,k=w[0],Z=w[1],st=w[2],rt=g[0],J=g[1],j=g[2];Ct[0]=It(Math.sqrt(k*k*B+rt*rt*Ft)),Ct[1]=It(Math.sqrt(Z*Z*B+J*J*Ft)),Ct[2]=It(Math.sqrt(st*st*B+j*j*Ft)),Ct[3]=It(ui(w[3],g[3],Ft)),(!U._setter||n)&&(P=`rgba(${Wt(Ct[0],0)},${Wt(Ct[1],0)},${Wt(Ct[2],0)},${Ct[3]})`)}else Jt===Kt.COMPLEX&&(P=To(U,Ft,ne));if(ot&&(U._number=te),!n&&kt!==we.blend){let Ct=U.property;Y=U.target,U._setter?U._setter(Y,te,U):xe?Y[Ct]=P:re===ge.ATTRIBUTE?Y.setAttribute(Ct,P):(Q=Y.style,re===ge.TRANSFORM?(Y!==_t&&(_t=Y,Mt=Y[Ci]),Mt[Ct]=P,oe=1):re===ge.CSS?Q[Ct]=P:re===ge.CSS_VAR&&Q.setProperty(Ct,P)),M&&(D=1)}else U._value=P}else bt&&Et&&!Ht&&z<U._startTime&&(U._currentTime=0);oe&&U._renderTransforms&&(Q.transform=So(Mt),oe=0),U=U._next}!e&&D&&i.onRender(i)}!e&&M&&i.onUpdate(i)}return r&&x?!e&&(r.began&&!W&&b>0&&!a||W&&b<=zt&&a)&&(i.onComplete(i),i.completed=!W):M&&E?c===1/0?i._startTime+=i.duration:i._currentIteration>=c-1&&(i.paused=!0,!a&&!_&&(i.completed=!0,!e&&!(r&&(W||!r.began))&&(i.onComplete(i),i._resolve(i)))):i.completed=!1,D},Qn=(i,t,e,n,s)=>{let r=i._currentIteration;if(pr(i,t,e,n,s),i._hasChildren){let o=i,a=o.backwards,l=n?t:o._iterationTime,c=ci(),h=0,d=!0;if(!n&&o._currentIteration!==r){let u=o.iterationDuration;le(o,f=>{if(!a)!f.completed&&!f.backwards&&f._currentTime<f.iterationDuration&&pr(f,u,e,1,Oe.FORCE),f.began=!1,f.completed=!1;else{let _=f.duration,v=f._offset+f._delay,m=v+_;!e&&_<=zt&&(!v||m===u)&&f.onComplete(f)}}),e||o.onLoop(o)}le(o,u=>{let f=Wt((l-u._offset)*u._speed,12);if(a&&f>u._delay+u.duration)return;let _=u._fps<o._fps?u.requestTick(c):s;h+=pr(u,f,e,n,_),!u.completed&&d&&(d=!1)},a),!e&&h&&o.onRender(o),(d||a)&&o._currentTime>=o.duration&&(o.paused=!0,o.completed||(o.completed=!0,e||(o.onComplete(o),o._resolve(o))))}};var hu={},vs=(i,t,e)=>{if(e===ge.TRANSFORM){let n=fo.get(i);return n||i}else if(e===ge.CSS||e===ge.ATTRIBUTE&&go(t)&&i in t.style){let n=hu[i];if(n)return n;{let s=i&&Gl(i);return hu[i]=s,s}}else return i},mr=(i,t=!1)=>{if(i._hasChildren)le(i,e=>mr(e,t),!0);else{let e=i;e.pause(),le(e,n=>{let s=n.property,r=n.target,o=n._tweenType,a=n._inlineValue,l=$n(a)||a===Tn;if(n._setter){if(!t&&!l){if(He(a,Re),Re.d){let c=Re.d,h=n._numbers;for(let d=0,u=c.length;d<u;d++)h[d]=c[d]}else n._number=Re.n;n._setter(n.target,n._number,n)}}else if(o===ge.OBJECT)!t&&!l&&(r[s]=a);else if(r[bn])if(o===ge.ATTRIBUTE)t||(l?r.removeAttribute(s):r.setAttribute(s,a));else{let c=r.style;if(o===ge.TRANSFORM){let h=r[Ci];l?delete h[s]:h[s]=a,n._renderTransforms&&(Object.keys(h).length?c.transform=So(h):c.removeProperty("transform"))}else l?c.removeProperty(Gl(s)):c[s]=a}r[bn]&&e._tail===n&&e.targets.forEach(c=>{c.getAttribute&&c.getAttribute("style")===Tn&&c.removeAttribute("style")})})}return i};var ys=class{constructor(t=0){this.deltaTime=0,this._currentTime=t,this._lastTickTime=t,this._startTime=t,this._lastTime=t,this._frameDuration=Ge/cr,this._fps=cr,this._speed=1,this._hasChildren=!1,this._head=null,this._tail=null}get fps(){return this._fps}set fps(t){let e=+t,n=e<zt?zt:e,s=Ge/n;n>xs.frameRate&&(xs.frameRate=n),this._fps=n,this._frameDuration=s}get speed(){return this._speed}set speed(t){let e=+t;this._speed=e<zt?zt:e}requestTick(t){let e=this._frameDuration,n=t-this._lastTickTime,s=e*.25,r=s<4?s:4;return n+r<e?Oe.NONE:(this._lastTickTime=n>=e?t-n%e:t,Oe.AUTO)}computeDeltaTime(t){let e=t-this._lastTime;return this.deltaTime=e,this._lastTime=t,e}};var fi={animation:null,update:de},uu=i=>{let t=fi.animation;return t||(t={duration:zt,computeDeltaTime:de,_offset:0,_delay:0,_head:null,_tail:null},fi.animation=t,fi.update=()=>{i.forEach(e=>{for(let n in e){let s=e[n],r=s._head;if(r){let o=r._valueType,a=o===Kt.COMPLEX||o===Kt.COLOR?Ne(r._fromNumbers):null,l=r._fromNumber,c=s._tail;for(;c&&c!==r;){if(a)for(let h=0,d=c._numbers.length;h<d;h++)a[h]+=c._numbers[h];else l+=c._number;c=c._prevAdd}r._toNumber=l,r._toNumbers=a}}}),pr(t,1,1,0,Oe.FORCE)}),t};var du=Mn?requestAnimationFrame:setImmediate,Df=Mn?cancelAnimationFrame:clearImmediate,Zl=class extends ys{constructor(t){super(t),this.useDefaultMainLoop=!0,this.pauseOnDocumentHidden=!0,this.defaults=xs,this.paused=!0,this.reqId=0}update(){let t=this._currentTime=ci();if(this.requestTick(t)){this.computeDeltaTime(t);let e=this._speed,n=this._fps,s=this._head;for(;s;){let r=s._next;s.paused?(Fn(this,s),this._hasChildren=!!this._tail,s._running=!1,s.completed&&!s._cancelled&&s.cancel()):Qn(s,(t-s._startTime)*s._speed*e,0,0,s._fps<n?s.requestTick(t):Oe.AUTO),s=r}fi.update()}}wake(){return this.useDefaultMainLoop&&!this.reqId&&(this.requestTick(ci()),this.reqId=du(fu)),this}pause(){if(this.reqId)return this.paused=!0,Nf()}resume(){if(this.paused)return this.paused=!1,le(this,t=>t.resetTime()),this.wake()}get speed(){return this._speed*(Nt.timeScale===1?1:Ge)}set speed(t){let e=t*Nt.timeScale;this._speed!==e&&(this._speed=e,le(this,n=>n.speed=n._speed))}get timeUnit(){return Nt.timeScale===1?"ms":"s"}set timeUnit(t){let n=t==="s",s=n?.001:1;if(Nt.timeScale!==s){Nt.timeScale=s,Nt.tickThreshold=200*s;let r=n?.001:Ge;this.defaults.duration*=r,this._speed*=r}}get precision(){return Nt.precision}set precision(t){Nt.precision=t}},Ce=(()=>{let i=new Zl(ci());return Mn&&(kl.engine=i,Ee.addEventListener("visibilitychange",()=>{i.pauseOnDocumentHidden&&(Ee.hidden?i.pause():i.resume())})),i})(),fu=()=>{Ce._head?(Ce.reqId=du(fu),Ce.update()):Ce.reqId=0},Nf=()=>(Df(Ce.reqId),Ce.reqId=0,Ce);var wo={_rep:new WeakMap,_add:new Map},_r=(i,t,e="_rep")=>{let n=wo[e],s=n.get(i);return s||(s={},n.set(i,s)),s[t]?s[t]:s[t]={_head:null,_tail:null}},Uf=(i,t)=>i._isOverridden||i._absoluteStartTime>t._absoluteStartTime,gr=i=>{i._isOverlapped=1,i._isOverridden=1,i._changeDuration=zt,i._currentTime=zt},Ao=(i,t)=>{let e=i._composition;if(e===we.replace){let n=i._absoluteStartTime;pn(t,i,Uf,"_prevRep","_nextRep");let s=i._prevRep;if(s){let r=s.parent,o=s._absoluteEndTime;if(i.parent.id!==r.id&&r.iterationCount>1&&o+(r.duration-r.iterationDuration)>n){gr(s);let c=s._prevRep;for(;c&&c.parent.id===r.id;)gr(c),c=c._prevRep}let a=i._absoluteUpdateStartTime;if(o>a){let c=s._startTime,h=o-(c+s._updateDuration),d=Wt(a-h-c,12);s._changeDuration=d,s._currentTime=d,s._isOverlapped=1,d<zt&&gr(s)}let l=i.parent.parent;if(!l||l!==r.parent){let c=!0;if(le(r,h=>{h._isOverlapped||(c=!1)}),c){let h=r.parent;if(h){let d=!0;le(h,u=>{u!==r&&le(u,f=>{f._isOverlapped||(d=!1)})}),d&&h.cancel()}else r.cancel()}}}}else if(e===we.blend){let n=_r(i.target,i.property,"_add"),s=uu(wo._add),r=n._head;r||(r={...i},r._composition=we.replace,r._updateDuration=zt,r._startTime=0,r._numbers=Ne(i._fromNumbers),r._number=0,r._next=null,r._prev=null,pn(n,r),pn(s,r));let o=i._toNumber;if(i._fromNumber=r._fromNumber-o,i._toNumber=0,i._numbers=Ne(i._fromNumbers),i._number=0,r._fromNumber=o,i._toNumbers.length){let a=Ne(i._toNumbers);a.forEach((l,c)=>{i._fromNumbers[c]=r._fromNumbers[c]-l,i._toNumbers[c]=0}),r._fromNumbers=a}pn(n,i,null,"_prevAdd","_nextAdd")}return i},Jl=i=>{let t=i._composition;if(t!==we.none){let e=i.target,n=i.property,o=wo._rep.get(e)[n];if(Fn(o,i,"_prevRep","_nextRep"),t===we.blend){let a=wo._add,l=a.get(e);if(!l)return;let c=l[n],h=fi.animation;Fn(c,i,"_prevAdd","_nextAdd");let d=c._head;if(d&&d===c._tail){Fn(c,d,"_prevAdd","_nextAdd"),Fn(h,d);let u=!0;for(let f in l)if(l[f]._head){u=!1;break}u&&a.delete(e)}}}return i},pu=(i,t,e)=>{let n=!1;return le(t,s=>{let r=s.target;if(i.includes(r)){let o=s.property,a=s._tweenType,l=vs(e,r,a);(!l||l&&l===o)&&(s.parent._tail===s&&s._tweenType===ge.TRANSFORM&&s._prev&&s._prev._tweenType===ge.TRANSFORM&&(s._prev._renderTransforms=1),Fn(t,s),Jl(s),n=!0)}},!0),n},Kl=(i,t,e)=>{let n=t||Ce,s;if(n._hasChildren){let r=0;le(n,o=>{if(!o._hasChildren)if(s=pu(i,o,e),s&&!o._head)o.cancel(),Fn(n,o);else{let l=o._offset+o._delay+o.duration;l>r&&(r=l)}o._head?Kl(i,o,e):o._hasChildren=!1},!0),vt(n.iterationDuration)||(n.iterationDuration=r)}else s=pu(i,n,e);s&&!n._head&&(n._hasChildren=!1,n.cancel&&n.cancel())};var mu=i=>(i.paused=!0,i.began=!1,i.completed=!1,i),Ql=i=>(i._cancelled&&(i._hasChildren?le(i,Ql):le(i,t=>{t._composition!==we.none&&Ao(t,_r(t.target,t.property))}),i._cancelled=0),i),gu=0,Ff=(i,t)=>i._priority>t._priority,on=class extends ys{constructor(t={},e=null,n=0){super(0),++gu;let{id:s,delay:r,duration:o,reversed:a,alternate:l,loop:c,loopDelay:h,autoplay:d,frameRate:u,playbackRate:f,priority:_,onComplete:v,onLoop:m,onPause:p,onBegin:b,onBeforeUpdate:I,onUpdate:S}=t;Ri.current&&Ri.current.register(this);let T=e?0:Ce._lastTickTime,M=e?e.defaults:Nt.defaults,E=qe(r)||vt(r)?M.delay:+r,x=qe(o)||vt(o)?1/0:+o,A=Qt(c,M.loop),L=Qt(h,M.loopDelay),R=A===!0||A===1/0||A<0?1/0:A+1,D=0;e?D=n:(Ce.reqId||Ce.requestTick(ci()),D=(Ce._lastTickTime-Ce._startTime)*Nt.timeScale),this.id=vt(s)?gu:s,this.parent=e,this.duration=es((x+L)*R-L)||zt,this.backwards=!1,this.paused=!0,this.began=!1,this.completed=!1,this.onBegin=b||M.onBegin,this.onBeforeUpdate=I||M.onBeforeUpdate,this.onUpdate=S||M.onUpdate,this.onLoop=m||M.onLoop,this.onPause=p||M.onPause,this.onComplete=v||M.onComplete,this.iterationDuration=x,this.iterationCount=R,this._autoplay=e?!1:Qt(d,M.autoplay),this._offset=D,this._delay=E,this._loopDelay=L,this._iterationTime=0,this._currentIteration=0,this._resolve=de,this._running=!1,this._reversed=+Qt(a,M.reversed),this._reverse=this._reversed,this._cancelled=0,this._alternate=Qt(l,M.alternate),this._prev=null,this._next=null,this._lastTickTime=T,this._startTime=T,this._lastTime=T,this._fps=Qt(u,M.frameRate),this._speed=Qt(f,M.playbackRate),this._priority=+Qt(_,1)}get cancelled(){return!!this._cancelled}set cancelled(t){t?this.cancel():this.reset(!0).play()}get currentTime(){return fe(Wt(this._currentTime,Nt.precision),-this._delay,this.duration)}set currentTime(t){let e=this.paused;this.pause().seek(+t),e||this.resume()}get iterationCurrentTime(){return fe(Wt(this._iterationTime,Nt.precision),0,this.iterationDuration)}set iterationCurrentTime(t){this.currentTime=this.iterationDuration*this._currentIteration+t}get progress(){return fe(Wt(this._currentTime/this.duration,10),0,1)}set progress(t){this.currentTime=this.duration*t}get iterationProgress(){return fe(Wt(this._iterationTime/this.iterationDuration,10),0,1)}set iterationProgress(t){let e=this.iterationDuration;this.currentTime=e*this._currentIteration+e*t}get currentIteration(){return this._currentIteration}set currentIteration(t){this.currentTime=this.iterationDuration*fe(+t,0,this.iterationCount-1)}get reversed(){return!!this._reversed}set reversed(t){t?this.reverse():this.play()}get speed(){return super.speed}set speed(t){super.speed=t,this.resetTime()}reset(t=!1){return Ql(this),this._reversed&&!this._reverse&&(this.reversed=!1),this._iterationTime=this.iterationDuration,Qn(this,0,1,~~t,Oe.FORCE),mu(this),this._hasChildren&&le(this,mu),this}init(t=!1){this.fps=this._fps,this.speed=this._speed,!t&&this._hasChildren&&Qn(this,this.duration,1,~~t,Oe.FORCE),this.reset(t);let e=this._autoplay;return e===!0?this.resume():e&&!vt(e.linked)&&e.link(this),this}resetTime(){let t=1/(this._speed*Ce._speed);return this._startTime=ci()-(this._currentTime+this._delay)*t,this}pause(){return this.paused?this:(this.paused=!0,this.onPause(this),this)}resume(){return this.paused?(this.paused=!1,this.duration<=zt&&!this._hasChildren?Qn(this,zt,0,0,Oe.FORCE):(this._running||(pn(Ce,this,Ff),Ce._hasChildren=!0,this._running=!0),this.resetTime(),this._startTime-=12,Ce.wake()),this):this}restart(){return this.reset().resume()}seek(t,e=0,n=0){Ql(this),this.completed=!1;let s=this.paused;return this.paused=!0,Qn(this,t+this._delay,~~e,~~n,Oe.AUTO),s?this:this.resume()}alternate(){let t=this._reversed,e=this.iterationCount,n=this.iterationDuration,s=e===1/0?ts(lr/n):e;return this._reversed=+(this._alternate&&!(s%2)?t:!t),e===1/0?this.iterationProgress=this._reversed?1-this.iterationProgress:this.iterationProgress:this.seek(n*s-this._currentTime),this.resetTime(),this}play(){return this._reversed&&this.alternate(),this.resume()}reverse(){return this._reversed||this.alternate(),this.resume()}cancel(){return this._hasChildren?le(this,t=>t.cancel(),!0):le(this,Jl),this._cancelled=1,this.pause()}stretch(t){let e=this.duration,n=di(t);if(e===n)return this;let s=t/e,r=t<=zt;return this.duration=r?zt:n,this.iterationDuration=r?zt:di(this.iterationDuration*s),this._offset*=s,this._delay*=s,this._loopDelay*=s,this}revert(){Qn(this,0,1,0,Oe.AUTO);let t=this._autoplay;return t&&t.linked&&t.linked===this&&t.revert(),this.cancel()}complete(t=0){return this.seek(this.duration,t).cancel()}then(t=de){let e=this.then,n=()=>{this.then=null,t(this),this.then=e,this._resolve=de};return new Promise(s=>(this._resolve=()=>s(n()),this.completed&&this._resolve(),this))}};function _u(i){let t=ze(i)?Ri.root.querySelectorAll(i):i;if(t instanceof NodeList||t instanceof HTMLCollection)return t}function Ii(i){if($n(i))return[];if(!Mn)return wn(i)&&i.flat(1/0)||[i];if(wn(i)){let e=i.flat(1/0),n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];if(!$n(o)){let a=_u(o);if(a)for(let l=0,c=a.length;l<c;l++){let h=a[l];if(!$n(h)){let d=!1;for(let u=0,f=n.length;u<f;u++)if(n[u]===h){d=!0;break}d||n.push(h)}}else{let l=!1;for(let c=0,h=n.length;c<h;c++)if(n[c]===o){l=!0;break}l||n.push(o)}}}return n}let t=_u(i);return t?Array.from(t):[i]}function Ss(i){let t=Ii(i),e=t.length;for(let n=0;n<e;n++){let s=t[n];if(!s[zl]){s[zl]=!0;let r=go(s);(s.nodeType||r)&&(s[bn]=!0,s[uo]=r,s[Ci]={})}}return t}var jl={deg:1,rad:180/En,turn:360},xu={},ns=(i,t,e,n=!1)=>{let s=t.u,r=t.n;if(t.t===Kt.UNIT&&s===e)return t;let o=r+s+e,a=xu[o];if(!vt(a)&&!n)t.n=a;else{let l;if(s in jl)l=r*jl[s]/jl[e];else{let h=i.cloneNode(),d=i.parentNode,u=d&&d!==Ee?d:Ee.body;u.appendChild(h);let f=h.style;f.width=100+s;let _=h.offsetWidth||100;f.width=100+e;let v=h.offsetWidth||100,m=_/v;u.removeChild(h),l=m*r}t.n=l,xu[o]=l}return t.t,Kt.UNIT,t.u=e,t};var Cn=i=>i;var xr=(i=1.68)=>t=>hi(t,+i),ec={in:i=>t=>i(t),out:i=>t=>1-i(1-t),inOut:i=>t=>t<.5?i(t*2)/2:1-i(t*-2+2)/2,outIn:i=>t=>t<.5?(1-i(1-t*2))/2:(i(t*2-1)+1)/2},Of=En/2,vu=En*2,yu={[Tn]:xr,Quad:xr(2),Cubic:xr(3),Quart:xr(4),Quint:xr(5),Sine:i=>1-vo(i*Of),Circ:i=>1-An(1-i*i),Expo:i=>i?hi(2,10*i-10):0,Bounce:i=>{let t,e=4;for(;i<((t=hi(2,--e))-1)/11;);return 1/hi(4,3-e)-7.5625*hi((t*3-2)/22-i,2)},Back:(i=1.7)=>t=>(+i+1)*t*t*t-+i*t*t,Elastic:(i=1,t=.3)=>{let e=fe(+i,1,10),n=fe(+t,zt,2),s=n/vu*ru(1/e),r=vu/n;return o=>o===0||o===1?o:-e*hi(2,-10*(1-o))*xo((1-o-s)*r)}},tc=(()=>{let i={linear:Cn,none:Cn};for(let t in ec)for(let e in yu){let n=yu[e],s=ec[t];i[t+e]=e===Tn||e==="Back"||e==="Elastic"?(r,o)=>s(n(r,o)):s(n)}return i})(),Eo={linear:Cn,none:Cn},Bf=i=>{if(Eo[i])return Eo[i];if(i.indexOf("(")<=-1){let e=ec[i]||i.includes("Back")||i.includes("Elastic")?tc[i]():tc[i];return e?Eo[i]=e:Cn}else{let t=i.slice(0,-1).split("("),e=tc[t[0]];return e?Eo[i]=e(...t[1].split(",")):Cn}},Su=["steps(","irregular(","linear(","cubicBezier("],pi=i=>{if(ze(i)){for(let e=0,n=Su.length;e<n;e++)if(fn(i,Su[e]))return console.warn(`String syntax for \`ease: "${i}"\` has been removed from the core and replaced by importing and passing the easing function directly: \`ease: ${i}\``),Cn}return qe(i)?i:ze(i)?Bf(i):Cn};var qt=bo(),ee=bo(),Ms={},Co={func:null},Ro={func:null},Io=[null],bs=[null,null],Po={to:null},zf=0,Mu=0,Pi,jn,Vf=(i,t)=>{let e={};if(wn(i)){let n=[].concat(...i.map(s=>Object.keys(s))).filter(ur);for(let s=0,r=n.length;s<r;s++){let o=n[s],a=i.map(l=>{let c={};for(let h in l){let d=l[h];ur(h)?h===o&&(c.to=d):c[h]=d}return c});e[o]=a}}else{let n=Qt(t.duration,Nt.defaults.duration);Object.keys(i).map(r=>({o:parseFloat(r)/100,p:i[r]})).sort((r,o)=>r.o-o.o).forEach(r=>{let o=r.o,a=r.p;for(let l in a)if(ur(l)){let c=e[l];c||(c=e[l]=[]);let h=o*n,d=c.length,u=c[d-1],f={to:a[l]},_=0;for(let v=0;v<d;v++)_+=c[v].duration;d===1&&(f.from=u.to),a.ease&&(f.ease=a.ease),f.duration=h-(d?_:0),c.push(f)}return r});for(let r in e){let o=e[r],a;for(let l=0,c=o.length;l<c;l++){let h=o[l],d=h.ease;h.ease=a||void 0,a=d}o[0].duration||o.shift()}}return e},Li=class extends on{constructor(t,e,n,s,r=!1,o=0,a){super(e,n,s),this._head,this._tail,++Mu;let l=Ss(t),c=l.length,h=e.keyframes,d=h?yo(Vf(h,e),e):e,{id:u,delay:f,duration:_,ease:v,playbackEase:m,modifier:p,composition:b,onRender:I}=d,S=n?n.defaults:Nt.defaults,T=Qt(v,S.ease),M=Qt(m,S.playbackEase),E=M?pi(M):null,x=!vt(T.ease),A=x?T.ease:Qt(v,E?"linear":S.ease),L=x?T.settlingDuration:Qt(_,S.duration),R=Qt(f,S.delay),D=p||S.modifier,N=vt(b)&&c>=Ge?we.none:vt(b)?S.composition:b,C=this._offset+(n?n._offset:0);x&&(T.parent=this);let z=NaN,W=NaN,X=0,tt=0;for(let U=0;U<c;U++){let Y=l[U],Q=o||U,_t=a||l,Mt=NaN,oe=NaN;for(let kt in d)if(ur(kt)){let bt=fr(Y,kt),$=Mo(Y,kt),K=vs(kt,Y,bt),it=d[kt],Et=wn(it);if(r&&!Et&&(bs[0]=it,bs[1]=it,it=bs),Et){let Ft=it.length,It=!Yn(it[0]);Ft===2&&It?(Po.to=it,Io[0]=Po,Pi=Io):Ft>2&&It?(Pi=[],it.forEach((Jt,re)=>{re?re===1?(bs[1]=Jt,Pi.push(bs)):Pi.push(Jt):bs[0]=Jt})):Pi=it}else Io[0]=it,Pi=Io;let ot=null,ut=null,Ht=NaN,Ut=0,Vt=0;for(let Ft=Pi.length;Vt<Ft;Vt++){let It=Pi[Vt];Yn(It)?jn=It:(Po.to=It,jn=Po),Co.func=null,Ro.func=null;let Jt=Zn(Qt(jn.composition,N),Y,Q,_t,null,null),re=Be(Jt)?Jt:we[Jt];!ot&&re!==we.none&&(ot=_r(Y,K));let xe=ot?ot._tail:null,$t=n&&xe&&xe.parent.parent===n?xe:ut,ne=Zn(jn.to,Y,Q,_t,Co,$t),P;Yn(ne)&&!vt(ne.to)?(jn=ne,P=ne.to):P=ne;let te=Zn(jn.from,Y,Q,_t,Ro,$t),Ct=jn.ease||A,w=Zn(Ct,Y,Q,_t,null,$t),g=qe(w)||ze(w)?w:Ct,B=!vt(g)&&!vt(g.ease),k=B?g.ease:g,Z=B?g.settlingDuration:Zn(Qt(jn.duration,Ft>1?Zn(L,Y,Q,_t,null,$t)/Ft:L),Y,Q,_t,null,$t),st=Zn(Qt(jn.delay,Vt?0:R),Y,Q,_t,null,$t),rt=jn.modifier||D,J=!vt(te),j=!vt(P),at=wn(P),Lt=at||J&&j,dt=ut?Ut:0,ct=ut?Ut+st:st,Rt=Wt(C+ct,12),Bt=Wt(C+dt,12);!tt&&(J||at)&&(tt=1);let Ot=ut;if(re!==we.none){let Pt=ot._head;for(;Pt&&Pt._absoluteStartTime<=Rt;)if(Pt._isOverridden||(Ot=Pt),Pt=Pt._nextRep,Pt&&Pt._absoluteStartTime>=Rt)for(;Pt;)gr(Pt),Pt=Pt._nextRep}if(Lt){He(at?Zn(P[0],Y,Q,_t,Ro,$t):te,qt),He(at?Zn(P[1],Y,Q,_t,Co,$t):P,ee);let Pt=Jn(Y,K,bt,Ms);qt.t===Kt.NUMBER&&(Ot?Ot._valueType===Kt.UNIT&&(qt.t=Kt.UNIT,qt.u=Ot._unit):(He(Pt,Re),Re.t===Kt.UNIT&&(qt.t=Kt.UNIT,qt.u=Re.u)))}else j?He(P,ee):ut?$l(ut,ee):He(n&&Ot&&Ot.parent.parent===n?Ot._value:Jn(Y,K,bt,Ms),ee),J?He(te,qt):ut?$l(ut,qt):He(n&&Ot&&Ot.parent.parent===n?Ot._value:Jn(Y,K,bt,Ms),qt);if(qt.o&&(qt.n=Kn(Ot?Ot._toNumber:He(Jn(Y,K,bt,Ms),Re).n,qt.n,qt.o)),ee.o&&(ee.n=Kn(qt.n,ee.n,ee.o)),qt.t!==ee.t){if(qt.t===Kt.COMPLEX||ee.t===Kt.COMPLEX){let Pt=qt.t===Kt.COMPLEX?qt:ee,Yt=qt.t===Kt.COMPLEX?ee:qt;Yt.t=Kt.COMPLEX,Yt.s=Ne(Pt.s),Yt.d=Pt.d.map(()=>Yt.n)}else if(qt.t===Kt.UNIT||ee.t===Kt.UNIT){let Pt=qt.t===Kt.UNIT?qt:ee,Yt=qt.t===Kt.UNIT?ee:qt;Yt.t=Kt.UNIT,Yt.u=Pt.u}else if(qt.t===Kt.COLOR||ee.t===Kt.COLOR){let Pt=qt.t===Kt.COLOR?qt:ee,Yt=qt.t===Kt.COLOR?ee:qt;Yt.t=Kt.COLOR,Yt.d=Pt.d.map(()=>0)}}if(qt.u!==ee.u){let Pt=ee.u?qt:ee;Pt=ns(Y,Pt,ee.u?ee.u:qt.u,!1)}if(ee.d&&qt.d&&ee.d.length!==qt.d.length){let Pt=qt.d.length>ee.d.length?qt:ee,Yt=Pt===qt?ee:qt;Yt.d=Pt.d.map((yn,dn)=>vt(Yt.d[dn])?0:Yt.d[dn]),Yt.s=Ne(Pt.s)}let O=Wt(+Z||zt,12),ht=Ms[K];$n(ht)||(Ms[K]=null);let et=$?$.set:null;Ut=Wt(ct+O,12);let lt=qt.d,pt=ee.d,nt=ee.s,xt={parent:this,id:zf++,property:K,target:Y,_value:null,_toFunc:Co.func,_fromFunc:Ro.func,_ease:pi(k),_fromNumbers:lt?Ne(lt):hr,_toNumbers:pt?Ne(pt):hr,_strings:nt?Ne(nt):hr,_fromNumber:qt.n,_toNumber:ee.n,_numbers:lt?Ne(lt):hr,_number:qt.n,_unit:ee.u,_modifier:rt,_currentTime:0,_startTime:ct,_delay:+st,_updateDuration:O,_changeDuration:O,_absoluteStartTime:Rt,_absoluteUpdateStartTime:Bt,_absoluteEndTime:Wt(C+Ut,12),_hasFromValue:J||at?1:0,_tweenType:bt,_setter:et,_valueType:ee.t,_composition:re,_isOverlapped:0,_isOverridden:0,_renderTransforms:0,_inlineValue:ht,_prevRep:null,_nextRep:null,_prevAdd:null,_nextAdd:null,_prev:null,_next:null};re!==we.none&&Ao(xt,ot);let Tt=xt._valueType;if(Tt===Kt.COMPLEX)xt._value=To(xt,1,-1);else if(Tt===Kt.UNIT)xt._value=`${rt(xt._toNumber)}${xt._unit}`;else if(Tt===Kt.COLOR){let Pt=ee.d;xt._value=`rgba(${Wt(Pt[0],0)},${Wt(Pt[1],0)},${Wt(Pt[2],0)},${Pt[3]})`}else xt._value=rt(xt._toNumber);isNaN(Ht)&&(Ht=xt._startTime),ut=xt,X++,pn(this,xt)}(isNaN(W)||Ht<W)&&(W=Ht),(isNaN(z)||Ut>z)&&(z=Ut),bt===ge.TRANSFORM&&(Mt=X-Vt,oe=X)}if(!isNaN(Mt)){let kt=0;le(this,bt=>{kt>=Mt&&kt<oe&&(bt._renderTransforms=1,bt._composition===we.blend&&le(fi.animation,$=>{$.id===bt.id&&($._renderTransforms=1)})),kt++})}}c||console.warn("No target found. Make sure the element you're trying to animate is accessible before creating your animation."),W?(le(this,U=>{U._startTime-U._delay||(U._delay-=W),U._startTime-=W}),z-=W):W=0,z||(z=zt,this.iterationCount=0),this.targets=l,this.id=vt(u)?Mu:u,this.duration=z===zt?zt:es((z+this._loopDelay)*this.iterationCount-this._loopDelay)||zt,this.onRender=I||S.onRender,this._ease=E,this._delay=W,this.iterationDuration=z,!this._autoplay&&tt&&this.onRender(this)}stretch(t){let e=this.duration;if(e===di(t))return this;let n=t/e;return le(this,s=>{s._updateDuration=di(s._updateDuration*n),s._changeDuration=di(s._changeDuration*n),s._currentTime*=n,s._delay*=n,s._startTime*=n,s._absoluteStartTime*=n,s._absoluteUpdateStartTime*=n,s._absoluteEndTime*=n}),super.stretch(t)}refresh(){return le(this,t=>{let e=t._toFunc,n=t._fromFunc;(e||n)&&(n?(He(n(),qt),qt.u!==t._unit&&t.target[bn]&&ns(t.target,qt,t._unit,!0),t._fromNumbers=Ne(qt.d),t._fromNumber=qt.n):e&&(He(Jn(t.target,t.property,t._tweenType),Re),t._fromNumbers=Ne(Re.d),t._fromNumber=Re.n),e&&(He(e(),ee),t._toNumbers=Ne(ee.d),t._strings=Ne(ee.s),t._toNumber=ee.o?Kn(t._fromNumber,ee.n,ee.o):ee.n))}),this.duration===zt&&this.restart(),this}revert(){return super.revert(),mr(this)}then(t){return super.then(t)}},nc=(i,t)=>Nt.editor?Nt.editor.addAnimation(i,t):new Li(i,t,null,0,!1).init();var kf=(i,t)=>{if(fn(t,"<")){let e=t[1]==="<",n=i._tail,s=n?n._offset+n._delay:0;return e?s:s+n.duration}},is=(i,t)=>{let e=i.iterationDuration;if(e===zt&&(e=0),vt(t))return e;if(Be(+t))return+t;let n=t,s=i?i.labels:null,r=!$n(s),o=kf(i,n),a=!vt(o),l=mo.exec(n);if(l){let c=l[0],h=n.split(c),d=r&&h[0]?s[h[0]]:e,u=a?o:r?d:e,f=+h[1];return Kn(u,f,c[0])}else return a?o:r?vt(s[n])?e:s[n]:e};function Gf(i){return es((i.iterationDuration+i._loopDelay)*i.iterationCount-i._loopDelay)||zt}function ic(i,t,e,n,s,r){let a=Be(i.duration)&&i.duration<=zt?e-zt:e;t.composition&&Qn(t,a,1,1,Oe.AUTO);let l=n?new Li(n,i,t,a,!1,s,r):new on(i,t,a);return t.composition&&l.init(!0),pn(t,l),le(t,c=>{let d=c._offset+c._delay+c.duration;d>t.iterationDuration&&(t.iterationDuration=d)}),t.duration=Gf(t),t}var bu=0,Lo=class extends on{constructor(t={}){super(t,null,0),++bu,this.id=vt(t.id)?bu:t.id,this.duration=0,this.labels={};let e=t.defaults,n=Nt.defaults;this.defaults=e?yo(e,n):n,this.composition=Qt(t.composition,!0),this.onRender=t.onRender||n.onRender;let s=Qt(t.playbackEase,n.playbackEase);this._ease=s?pi(s):null,this.iterationDuration=0}add(t,e,n){let s=Yn(e),r=Yn(t);if(s||r){if(this._hasChildren=!0,s){let o=e,a=Nt.editor&&Nt.editor.addTimelineChild,l=n&&n.type==="Stagger"&&Nt.editor,c=qe(n)?n:null;if(c||l){let h=Ii(t),d=this.duration,u=this.iterationDuration,f=o.id,_=0,v=h.length,m=a?a(t,o,this.id,n,v):null,p=c||Nt.editor.resolveStagger(n.defaultValue);h.forEach(b=>{let I={...m||o};this.duration=d,this.iterationDuration=u,vt(f)||(I.id=f+"-"+_);let S=is(this,p(b,_,h,null,this));ic(I,this,S,b,_,h),_++})}else{let h=a?a(t,o,this.id,n):o,d=n&&n.type?n.defaultValue:n;ic(h,this,is(this,d),t)}}else ic(t,this,is(this,e));return this.composition&&this.init(!0),this}}sync(t,e){if(vt(t)||t&&vt(t.pause))return this;t.pause();let n=+(t.effect?t.effect.getTiming().duration:t.duration);!vt(t)&&!vt(t.persist)&&(t.persist=!0);let s=Nt.editor,r=s&&s.addTimelineChild;s&&s.addTimelineSync&&(e=s.addTimelineSync(t,e,this.id),s.addTimelineChild=null);let o=this.add(t,{currentTime:[0,n],duration:n,delay:0,ease:"linear",playbackEase:"linear"},e);return s&&(s.addTimelineChild=r),o}set(t,e,n){return vt(e)?this:(e.duration=zt,e.composition=we.replace,this.add(t,e,n))}call(t,e){return vt(t)||t&&!qe(t)?this:(Nt.editor&&Nt.editor.addTimelineCall&&(e=Nt.editor.addTimelineCall(t,e,this.id)),this.add({duration:0,delay:0,onComplete:()=>t(this)},e))}label(t,e){return vt(t)||t&&!ze(t)?this:(Nt.editor&&Nt.editor.addTimelineLabel&&(e=Nt.editor.addTimelineLabel(t,e,this.id)),this.labels[t]=is(this,e),this)}remove(t,e){return Kl(Ii(t),this,e),this}stretch(t){let e=this.duration;if(e===di(t))return this;let n=t/e,s=this.labels;le(this,r=>r.stretch(r.duration*n));for(let r in s)s[r]*=n;return super.stretch(t)}refresh(){return le(this,t=>{t.refresh&&t.refresh()}),this}revert(){return super.revert(),le(this,t=>t.revert,!0),mr(this)}then(t){return super.then(t)}},Do=i=>Nt.editor?Nt.editor.addTimeline(i):new Lo(i).init();var an=Ge*10,No=class{constructor(t={}){let e=!vt(t.bounce)||!vt(t.duration);this.timeStep=.02,this.restThreshold=5e-4,this.restDuration=200,this.maxDuration=6e4,this.maxRestSteps=this.restDuration/this.timeStep/Ge,this.maxIterations=this.maxDuration/this.timeStep/Ge,this.bn=fe(Qt(t.bounce,.5),-1,1),this.pd=fe(Qt(t.duration,628),10*Nt.timeScale,an*Nt.timeScale),this.m=fe(Qt(t.mass,1),1,an),this.s=fe(Qt(t.stiffness,100),zt,an),this.d=fe(Qt(t.damping,10),zt,an),this.v=fe(Qt(t.velocity,0),-an,an),this.w0=0,this.zeta=0,this.wd=0,this.b=0,this.completed=!1,this.solverDuration=0,this.settlingDuration=0,this.parent=null,this.onComplete=t.onComplete||de,e&&this.calculateSDFromBD(),this.compute(),this.ease=n=>{let s=n*this.settlingDuration,r=this.completed,o=this.pd;return s>=o&&!r&&(this.completed=!0,this.onComplete(this.parent)),s<o&&r&&(this.completed=!1),n===0||n===1?n:this.solve(n*this.solverDuration)}}solve(t){let{zeta:e,w0:n,wd:s,b:r}=this,o=t;return e<1?o=dr(-o*e*n)*(1*vo(s*o)+r*xo(s*o)):e===1?o=(1+r*o)*dr(-o*n):o=((1+r)*dr((-e*n+s)*o)+(1-r)*dr((-e*n-s)*o))/2,1-o}calculateSDFromBD(){let t=Nt.timeScale===1?this.pd/Ge:this.pd;this.m=1,this.v=0,this.s=hi(2*En/t,2),this.bn>=0?this.d=(1-this.bn)*4*En/t:this.d=4*En/(t*(1+this.bn)),this.s=Wt(fe(this.s,zt,an),3),this.d=Wt(fe(this.d,zt,300),3)}calculateBDFromSD(){let t=2*En/An(this.s);this.pd=t*(Nt.timeScale===1?Ge:1),this.d/(2*An(this.s))<=1?this.bn=1-this.d*t/(4*En):this.bn=4*En/(this.d*t)-1,this.bn=Wt(fe(this.bn,-1,1),3),this.pd=Wt(fe(this.pd,10*Nt.timeScale,an*Nt.timeScale),3)}compute(){let{maxRestSteps:t,maxIterations:e,restThreshold:n,timeStep:s,m:r,d:o,s:a,v:l}=this,c=this.w0=fe(An(a/r),zt,Ge),h=this.zeta=o/(2*An(a*r));h<1?(this.wd=c*An(1-h*h),this.b=(h*c+-l)/this.wd):h===1?(this.wd=0,this.b=-l+c):(this.wd=c*An(h*h-1),this.b=(h*c+-l)/this.wd);let d=0,u=0,f=0;for(;u<=t&&f<=e;)ji(1-this.solve(d))<n?u++:u=0,this.solverDuration=d,d+=s,f++;this.settlingDuration=Wt(this.solverDuration*Ge,0)*Nt.timeScale}get bounce(){return this.bn}set bounce(t){this.bn=fe(Qt(t,1),-1,1),this.calculateSDFromBD(),this.compute()}get duration(){return this.pd}set duration(t){this.pd=fe(Qt(t,1),10*Nt.timeScale,an*Nt.timeScale),this.calculateSDFromBD(),this.compute()}get stiffness(){return this.s}set stiffness(t){this.s=fe(Qt(t,100),zt,an),this.calculateBDFromSD(),this.compute()}get damping(){return this.d}set damping(t){this.d=fe(Qt(t,10),zt,an),this.calculateBDFromSD(),this.compute()}get mass(){return this.m}set mass(t){this.m=fe(Qt(t,1),1,an),this.compute()}get velocity(){return this.v}set velocity(t){this.v=fe(Qt(t,0),-an,an),this.compute()}},Uo=i=>new No(i);function sc(i,t,e){let n=Ss(i);if(!n.length)return;let[s]=n,r=fr(s,t),o=vs(t,s,r),a=Jn(s,o);if(vt(e))return a;if(He(a,Re),Re.t===Kt.NUMBER||Re.t===Kt.UNIT){if(e===!1)return Re.n;{let l=ns(s,Re,e,!1);return`${Wt(l.n,Nt.precision)}${l.u}`}}}var rc=(i,t)=>{if(!vt(t))return Nt.editor&&Nt.editor.addSet?Nt.editor.addSet(i,t):(t.duration=zt,t.composition=Qt(t.composition,we.none),new Li(i,t,null,0,!0).resume())};var Tu=(i=de)=>new on({duration:1*Nt.timeScale,onComplete:i},null,0).resume();var Hf=()=>{let i=Ee.createElement("div");Ee.body.appendChild(i),i.style.height="100lvh";let t=i.offsetHeight;return Ee.body.removeChild(i),t},Fo=(i,t)=>i&&qe(i)?i(t):i,Bo=new Map,oc=class{constructor(t){this.element=t,this.useWin=this.element===Ee.body,this.winWidth=0,this.winHeight=0,this.width=0,this.height=0,this.left=0,this.top=0,this.scale=1,this.zIndex=0,this.scrollX=0,this.scrollY=0,this.prevScrollX=0,this.prevScrollY=0,this.scrollWidth=0,this.scrollHeight=0,this.velocity=0,this.backwardX=!1,this.backwardY=!1,this.scrollTicker=new on({autoplay:!1,onBegin:()=>this.dataTimer.resume(),onUpdate:()=>{let e=this.backwardX||this.backwardY;le(this,n=>n.handleScroll(),e)},onComplete:()=>this.dataTimer.pause()}).init(),this.dataTimer=new on({autoplay:!1,frameRate:30,onUpdate:e=>{let n=e.deltaTime,s=this.prevScrollX,r=this.prevScrollY,o=this.scrollX,a=this.scrollY,l=s-o,c=r-a;this.prevScrollX=o,this.prevScrollY=a,l&&(this.backwardX=s>o),c&&(this.backwardY=r>a),this.velocity=Wt(n>0?Math.sqrt(l*l+c*c)/n:0,5)}}).init(),this.resizeTicker=new on({autoplay:!1,duration:250*Nt.timeScale,onComplete:()=>{this.updateWindowBounds(),this.refreshScrollObservers(),this.handleScroll()}}).init(),this.wakeTicker=new on({autoplay:!1,duration:500*Nt.timeScale,onBegin:()=>{this.scrollTicker.resume()},onComplete:()=>{this.scrollTicker.pause()}}).init(),this._head=null,this._tail=null,this.updateScrollCoords(),this.updateWindowBounds(),this.updateBounds(),this.refreshScrollObservers(),this.handleScroll(),this.resizeObserver=new ResizeObserver(()=>this.resizeTicker.restart()),this.resizeObserver.observe(this.element),(this.useWin?qn:this.element).addEventListener("scroll",this,!1)}updateScrollCoords(){let t=this.useWin,e=this.element;this.scrollX=Wt(t?qn.scrollX:e.scrollLeft,0),this.scrollY=Wt(t?qn.scrollY:e.scrollTop,0)}updateWindowBounds(){this.winWidth=qn.innerWidth,this.winHeight=Hf()}updateBounds(){let t=getComputedStyle(this.element),e=this.element;this.scrollWidth=e.scrollWidth+parseFloat(t.marginLeft)+parseFloat(t.marginRight),this.scrollHeight=e.scrollHeight+parseFloat(t.marginTop)+parseFloat(t.marginBottom),this.updateWindowBounds();let n,s;if(this.useWin)n=this.winWidth,s=this.winHeight;else{let r=e.getBoundingClientRect();n=e.clientWidth,s=e.clientHeight,this.top=r.top,this.left=r.left,this.scale=r.width?n/r.width:r.height?s/r.height:1}this.width=n,this.height=s}refreshScrollObservers(){le(this,t=>{t.ready&&t._debug&&t.removeDebug()}),this.updateBounds(),le(this,t=>{t.ready&&(t.refresh(),t.onResize(t),t._debug&&t.debug())})}refresh(){this.updateWindowBounds(),this.updateBounds(),this.refreshScrollObservers(),this.handleScroll()}handleScroll(){this.updateScrollCoords(),this.wakeTicker.restart()}handleEvent(t){t.type==="scroll"&&this.handleScroll()}revert(){this.scrollTicker.cancel(),this.dataTimer.cancel(),this.resizeTicker.cancel(),this.wakeTicker.cancel(),this.resizeObserver.disconnect(),(this.useWin?qn:this.element).removeEventListener("scroll",this),Bo.delete(this.element)}},Wf=i=>{let t=i?Ii(i)[0]||Ee.body:Ee.body,e=Bo.get(t);return e||(e=new oc(t),Bo.set(t,e)),e},vr=(i,t,e,n,s)=>{let r=t==="min",o=t==="max",a=t==="top"||t==="left"||t==="start"||r?0:t==="bottom"||t==="right"||t==="end"||o?"100%":t==="center"?"50%":t,{n:l,u:c}=He(a,Re),h=l;return c==="%"?h=l/100*e:c&&(h=ns(i,Re,"px",!0).n),o&&n<0&&(h+=n),r&&s>0&&(h+=s),h},Oo=(i,t,e,n,s)=>{let r;if(ze(t)){let o=mo.exec(t);if(o){let a=o[0],l=a[0],c=t.split(a),h=c[0]==="min",d=c[0]==="max",u=vr(i,c[0],e,n,s),f=vr(i,c[1],e,n,s);if(h){let _=Kn(vr(i,"min",e),f,l);r=_<u?u:_}else if(d){let _=Kn(vr(i,"max",e),f,l);r=_>u?u:_}else r=Kn(u,f,l)}else r=vr(i,t,e,n,s)}else r=t;return Wt(r,0)},wu=i=>{let t,e=i.targets;for(let n=0,s=e.length;n<s;n++){let r=e[n];if(r[bn]){t=r;break}}return t},Xf=0,Au=["#FF4B4B","#FF971B","#FFC730","#F9F640","#7AFF5A","#18FF74","#17E09B","#3CFFEC","#05DBE9","#33B3F1","#638CF9","#C563FE","#FF4FCF","#F93F8A"],zo=class{constructor(t={}){Ri.current&&Ri.current.register(this);let e=Qt(t.sync,"play pause"),n=e?pi(e):null,s=e&&(e==="linear"||e===Cn),r=e&&!(n===Cn&&!s),o=e&&(Be(e)||e===!0||s),a=e&&ze(e)&&!r&&!o,l=a?e.split(" ").map(h=>()=>{let d=this.linked;return d&&d[h]?d[h]():null}):null,c=a&&l.length>2;this.index=Xf++,this.id=vt(t.id)?this.index:t.id,this.container=Wf(t.container),this.target=null,this.linked=null,this.repeat=null,this.horizontal=null,this.enter=null,this.leave=null,this.sync=r||o||!!l,this.syncEase=r?n:null,this.syncSmooth=o?e===!0||s?1:e:null,this.onSyncEnter=l&&!c&&l[0]?l[0]:de,this.onSyncLeave=l&&!c&&l[1]?l[1]:de,this.onSyncEnterForward=l&&c&&l[0]?l[0]:de,this.onSyncLeaveForward=l&&c&&l[1]?l[1]:de,this.onSyncEnterBackward=l&&c&&l[2]?l[2]:de,this.onSyncLeaveBackward=l&&c&&l[3]?l[3]:de,this.onEnter=t.onEnter||de,this.onLeave=t.onLeave||de,this.onEnterForward=t.onEnterForward||de,this.onLeaveForward=t.onLeaveForward||de,this.onEnterBackward=t.onEnterBackward||de,this.onLeaveBackward=t.onLeaveBackward||de,this.onUpdate=t.onUpdate||de,this.onResize=t.onResize||de,this.onSyncComplete=t.onSyncComplete||de,this.reverted=!1,this.ready=!1,this.completed=!1,this.began=!1,this.isInView=!1,this.forceEnter=!1,this.hasEntered=!1,this.offset=0,this.offsetStart=0,this.offsetEnd=0,this.distance=0,this.prevProgress=0,this.thresholds=["start","end","end","start"],this.coords=[0,0,0,0],this.debugStyles=null,this.$debug=null,this._params=t,this._debug=Qt(t.debug,!1),this._next=null,this._prev=null,pn(this.container,this),Tu(()=>{if(!this.reverted){if(!this.target){let h=Ii(t.target)[0];this.target=h||Ee.body,this.refresh()}this._debug&&this.debug()}})}link(t){if(t&&(t.pause(),this.linked=t,!vt(t)&&!vt(t.persist)&&(t.persist=!0),!this._params.target)){let e;vt(t.targets)?le(t,n=>{n.targets&&!e&&(e=wu(n))}):e=wu(t),this.target=e||Ee.body,this.refresh()}return this}get velocity(){return this.container.velocity}get backward(){return this.horizontal?this.container.backwardX:this.container.backwardY}get scroll(){return this.horizontal?this.container.scrollX:this.container.scrollY}get progress(){let t=(this.scroll-this.offsetStart)/this.distance;return t===1/0||isNaN(t)?0:Wt(fe(t,0,1),6)}refresh(){this.ready=!0,this.reverted=!1;let t=this._params;return this.repeat=Qt(Fo(t.repeat,this),!0),this.horizontal=Qt(Fo(t.axis,this),"y")==="x",this.enter=Qt(Fo(t.enter,this),"end start"),this.leave=Qt(Fo(t.leave,this),"start end"),this.updateBounds(),this.handleScroll(),this}removeDebug(){return this.$debug&&(this.$debug.parentNode.removeChild(this.$debug),this.$debug=null),this.debugStyles&&(this.debugStyles.revert(),this.$debug=null),this}debug(){this.removeDebug();let t=this.container,e=this.horizontal,n=t.element.querySelector(":scope > .animejs-onscroll-debug"),s=Ee.createElement("div"),r=Ee.createElement("div"),o=Ee.createElement("div"),a=Au[this.index%Au.length],l=t.useWin,c=l?t.winWidth:t.width,h=l?t.winHeight:t.height,d=t.scrollWidth,u=t.scrollHeight,f=this.container.width>360?320:260,_=e?0:10,v=e?10:0,m=e?24:f/2,p=e?m:15,b=e?60:m,I=e?b:p,S=e?"repeat-x":"repeat-y",T=L=>e?"0px "+L+"px":L+"px 2px",M=L=>`linear-gradient(${e?90:0}deg, ${L} 2px, transparent 1px)`,E=(L,R,D,N,C)=>`position:${L};left:${R}px;top:${D}px;width:${N}px;height:${C}px;`;s.style.cssText=`${E("absolute",_,v,e?d:f,e?f:u)}
      pointer-events: none;
      z-index: ${this.container.zIndex++};
      display: flex;
      flex-direction: ${e?"column":"row"};
      filter: drop-shadow(0px 1px 0px rgba(0,0,0,.75));
    `,r.style.cssText=`${E("sticky",0,0,e?c:m,e?m:h)}`,n||(r.style.cssText+=`background:
        ${M("#FFFF")}${T(m-10)} / 100px 100px ${S},
        ${M("#FFF8")}${T(m-10)} / 10px 10px ${S};
      `),o.style.cssText=`${E("relative",0,0,e?d:m,e?m:u)}`,n||(o.style.cssText+=`background:
        ${M("#FFFF")}${T(0)} / ${e?"100px 10px":"10px 100px"} ${S},
        ${M("#FFF8")}${T(0)} / ${e?"10px 0px":"0px 10px"} ${S};
      `);let x=[" enter: "," leave: "];this.coords.forEach((L,R)=>{let D=R>1,N=(D?0:this.offset)+L,C=R%2,z=N<I,W=N>(D?e?c:h:e?d:u)-I,X=(D?C&&!z:!C&&!z)||W,tt=Ee.createElement("div"),U=Ee.createElement("div"),Y=e?X?"right":"left":X?"bottom":"top",Q=X?(e?b:p)+(D?e?-1:W?0:-2:e?-1:-2):e?1:0;U.innerHTML=`${this.id}${x[C]}${this.thresholds[R]}`,tt.style.cssText=`${E("absolute",0,0,b,p)}
        display: flex;
        flex-direction: ${e?"column":"row"};
        justify-content: flex-${D?"start":"end"};
        align-items: flex-${X?"end":"start"};
        border-${Y}: 2px solid ${a};
      `,U.style.cssText=`
        overflow: hidden;
        max-width: ${f/2-10}px;
        height: ${p};
        margin-${e?X?"right":"left":X?"bottom":"top"}: -2px;
        padding: 1px;
        font-family: ui-monospace, monospace;
        font-size: 10px;
        letter-spacing: -.025em;
        line-height: 9px;
        font-weight: 600;
        text-align: ${e&&X||!e&&!D?"right":"left"};
        white-space: pre;
        text-overflow: ellipsis;
        color: ${C?a:"rgba(0,0,0,.75)"};
        background-color: ${C?"rgba(0,0,0,.65)":a};
        border: 2px solid ${C?a:"transparent"};
        border-${e?X?"top-left":"top-right":X?"top-left":"bottom-left"}-radius: 5px;
        border-${e?X?"bottom-left":"bottom-right":X?"top-right":"bottom-right"}-radius: 5px;
      `,tt.appendChild(U);let _t=N-Q+(e?1:0);tt.style[e?"left":"top"]=`${_t}px`,(D?r:o).appendChild(tt)}),s.appendChild(r),s.appendChild(o),t.element.appendChild(s),n||s.classList.add("animejs-onscroll-debug"),this.$debug=s,sc(t.element,"position")==="static"&&(this.debugStyles=rc(t.element,{position:"relative "}))}updateBounds(){this._debug&&this.removeDebug();let t,e=this.target,n=this.container,s=this.horizontal,r=this.linked,o,a=e;for(r&&(o=r.currentTime,r.seek(0,!0));a&&a!==n.element&&a!==Ee.body;){let C=sc(a,"position")==="sticky"?rc(a,{position:"static"}):!1;a=a.parentElement,C&&(t||(t=[]),t.push(C))}let l=e.getBoundingClientRect(),c=n.scale,h=(s?l.left+n.scrollX-n.left:l.top+n.scrollY-n.top)*c,d=(s?l.width:l.height)*c,u=s?n.width:n.height,_=(s?n.scrollWidth:n.scrollHeight)-u,v=this.enter,m=this.leave,p="start",b="end",I="end",S="start";if(ze(v)){let C=v.split(" ");I=C[0],p=C.length>1?C[1]:p}else if(Yn(v)){let C=v;vt(C.container)||(I=C.container),vt(C.target)||(p=C.target)}else Be(v)&&(I=v);if(ze(m)){let C=m.split(" ");S=C[0],b=C.length>1?C[1]:b}else if(Yn(m)){let C=m;vt(C.container)||(S=C.container),vt(C.target)||(b=C.target)}else Be(m)&&(S=m);let T=Oo(e,p,d),M=Oo(e,b,d),E=T+h-u,x=M+h-_,A=Oo(e,I,u,E,x),L=Oo(e,S,u,E,x),R=T+h-A,D=M+h-L,N=D-R;this.offset=h,this.offsetStart=R,this.offsetEnd=D,this.distance=N<=0?0:N,this.thresholds=[p,b,I,S],this.coords=[T,M,A,L],t&&t.forEach(C=>C.revert()),r&&r.seek(o,!0),this._debug&&this.debug()}handleScroll(){if(!this.ready)return;let t=this.linked,e=this.sync,n=this.syncEase,s=this.syncSmooth,r=t&&(n||s),o=this.horizontal,a=this.container,l=this.scroll,c=l<=this.offsetStart,h=l>=this.offsetEnd,d=!c&&!h,u=l===this.offsetStart||l===this.offsetEnd,f=!this.hasEntered&&u,_=this._debug&&this.$debug,v=!1,m=!1,p=this.progress;if(c&&this.began&&(this.began=!1),p>0&&!this.began&&(this.began=!0),r){let b=t.progress;if(s&&Be(s)){if(s<1){let S=b<p&&p===1?1e-4:b>p&&!p?-1e-4:0;p=Wt(ui(b,p,ui(.01,.2,s))+S,6)}}else n&&(p=n(p));v=p!==this.prevProgress,m=b===1,v&&!m&&s&&b&&a.wakeTicker.restart()}if(_){let b=o?a.scrollY:a.scrollX;_.style[o?"top":"left"]=b+10+"px"}(d&&!this.isInView||f&&!this.forceEnter&&!this.hasEntered)&&(d&&(this.isInView=!0),!this.forceEnter||!this.hasEntered?(_&&d&&(_.style.zIndex=`${this.container.zIndex++}`),this.onSyncEnter(this),this.onEnter(this),this.backward?(this.onSyncEnterBackward(this),this.onEnterBackward(this)):(this.onSyncEnterForward(this),this.onEnterForward(this)),this.hasEntered=!0,f&&(this.forceEnter=!0)):d&&(this.forceEnter=!1)),(d||!d&&this.isInView)&&(v=!0),v&&(r&&t.seek(t.duration*p),this.onUpdate(this)),!d&&this.isInView&&(this.isInView=!1,this.onSyncLeave(this),this.onLeave(this),this.backward?(this.onSyncLeaveBackward(this),this.onLeaveBackward(this)):(this.onSyncLeaveForward(this),this.onLeaveForward(this)),e&&!s&&(m=!0)),p>=1&&this.began&&!this.completed&&(e&&m||!e)&&(e&&this.onSyncComplete(this),this.completed=!0,(!this.repeat&&!t||!this.repeat&&t&&t.completed)&&this.revert()),p<1&&this.completed&&(this.completed=!1),this.prevProgress=p}revert(){if(this.reverted)return;let t=this.container;return Fn(t,this),t._head||t.revert(),this._debug&&this.removeDebug(),this.reverted=!0,this.ready=!1,this}},ac=(i={})=>new zo(i);var lc=(i=0,t=1,e=0)=>{let n=10**e;return Math.floor((Math.random()*(t-i+1/n)+i)*n)/n},qf=0,Eu=(i,t=0,e=1,n=0)=>{let s=i===void 0?qf++:i;return(r=t,o=e,a=n)=>{s+=1831565813,s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61);let l=10**a;return Math.floor((((s^s>>>14)>>>0)/4294967296*(o-r+1/l)+r)*l)/l}};var Cu=(i,t=lc)=>{let e=i.length,n,s;for(;e;)s=t(0,--e),n=i[e],i[e]=i[s],i[s]=n;return i};var Ts=(i,t={})=>{let e=[],n=0,s,r=null,o=t.from,a=t.reversed,l=t.ease,c=!vt(l),d=c&&!vt(l.ease)?l.ease:c?pi(l):null,u=t.grid,f=u===!0,_=t.axis,v=t.total,m=vt(o)||o===0||o==="first",p=o==="center",b=o==="last",I=o==="random",S=wn(o),T=wn(i),M=t.use,E=T?_o(i[0]):_o(i),x=T?_o(i[1]):0,A=po.exec((T?i[1]:i)+Tn),L=t.start||0+(T?E:0),R=t.seed,N=!vt(R)&&R!==!1?Eu(R===!0?0:R):lc,C=t.jitter,z=!vt(C),W=wn(C),X=W?C[0]:C||0,tt=W?C[1]:C||0,U=m?0:Be(o)?o:0;return(Y,Q,_t,Mt,oe)=>{let[kt]=Ss(Y),bt=vt(v)?_t.length:v,$=vt(M)?!1:qe(M)?M(kt,Q,bt):Jn(kt,M),K=Be($)||ze($)&&Be(+$)?+$:Q,it=K>=0&&K<bt?K:Q;if(p&&(U=(bt-1)/2),b&&(U=bt-1),!e.length){if(f){let ut=!0,Ht=!1,Ut=1/0,Vt=1/0,Ft=1/0,It=-1/0,Jt=-1/0,re=-1/0,xe=[],$t=[],ne=[];for(let P=0;P<bt;P++){let te=_t[P],Ct=0,w=0,g=0,B=!1;if(te&&qe(te.getBoundingClientRect)){let k=te.getBoundingClientRect();Ct=k.left+k.width/2,w=k.top+k.height/2,B=!0}else{let k=te;k&&Be(k.x)&&Be(k.y)&&(Ct=k.x,w=k.y,Be(k.z)&&(g=k.z,Ht=!0),B=!0)}if(!B){ut=!1;break}xe.push(Ct),$t.push(w),ne.push(g),Ct<Ut&&(Ut=Ct),w<Vt&&(Vt=w),g<Ft&&(Ft=g),Ct>It&&(It=Ct),w>Jt&&(Jt=w),g>re&&(re=g)}if(ut){let P=xe[0],te=$t[0],Ct=ne[0];S?(P=Ut+o[0]*(It-Ut),te=Vt+o[1]*(Jt-Vt),Ct=Ht?Ft+(o.length>=3?o[2]:.5)*(re-Ft):0):p?(P=(Ut+It)/2,te=(Vt+Jt)/2,Ct=(Ft+re)/2):b?(P=xe[bt-1],te=$t[bt-1],Ct=ne[bt-1]):Be(o)&&(P=xe[o],te=$t[o],Ct=ne[o]);for(let g=0;g<bt;g++){let B=P-xe[g],k=te-$t[g],Z=Ct-ne[g],st=An(B*B+k*k+(Ht?Z*Z:0));_==="x"&&(st=-B),_==="y"&&(st=-k),_==="z"&&(st=-Z),e.push(st)}let w=1/0;for(let g=0;g<bt;g++){let B=ji(e[g]);B>0&&B<w&&(w=B)}if(w>0&&w<1/0)for(let g=0;g<bt;g++)e[g]=e[g]/w}else for(let P=0;P<bt;P++)e.push(ji(U-P))}else for(let ut=0;ut<bt;ut++)if(!u)e.push(ji(U-ut));else{let Ht=u.length,Ut=u[0]*u[1],Vt,Ft,It;S?(Vt=o[0]*(u[0]-1),Ft=o[1]*(u[1]-1),It=Ht===3?(o.length>=3?o[2]:.5)*(u[2]-1):0):p?(Vt=(u[0]-1)/2,Ft=(u[1]-1)/2,It=Ht===3?(u[2]-1)/2:0):(Vt=U%u[0],Ft=ts(U/u[0])%u[1],It=Ht===3?ts(U/Ut):0);let Jt=ut%u[0],re=ts(ut/u[0])%u[1],xe=Ht===3?ts(ut/Ut):0,$t=Vt-Jt,ne=Ft-re,P=It-xe,te=An($t*$t+ne*ne+(Ht===3?P*P:0));_==="x"&&(te=-$t),_==="y"&&(te=-ne),_==="z"&&(te=-P),e.push(te)}n=e[0];for(let ut=1;ut<bt;ut++)e[ut]>n&&(n=e[ut]);if(d||a)for(let ut=0;ut<bt;ut++){let Ht=e[ut];d&&(Ht=d(Ht/n)*n),a&&(Ht=_?-Ht:ji(n-Ht)),e[ut]=Ht}if(z){r=new Array(bt);for(let ut=0;ut<bt;ut++)r[ut]=N(-1,1,4)}I&&(e=Cu(e,N))}let Et=T?(x-E)/n:E;vt(s)&&(s=oe?is(oe,vt(t.start)?oe.iterationDuration:L):L);let ot=s+(Et*Wt(e[it],2)||0);if(z){let ut=n?e[it]/n:0,Ht=X+(tt-X)*ut;ot=ot+r[it]*Ht}return t.modifier&&(ot=t.modifier(ot)),A&&(ot=`${ot}${A[2]}`),ot}};var ju=0,Oc=1,td=2;var qr=1,ed=2,js=3,Yi=0,rn=1,Ln=2,ri=0,tr=1,Bc=2,zc=3,Vc=4,nd=5;var us=100,id=101,sd=102,rd=103,od=104,ad=200,ld=201,cd=202,hd=203,kc=204,Gc=205,ud=206,dd=207,fd=208,pd=209,md=210,gd=211,_d=212,xd=213,vd=214,la=0,ca=1,ha=2,ks=3,ua=4,da=5,fa=6,pa=7,Hc=0,yd=1,Sd=2,Gn=0,Wc=1,Xc=2,qc=3,Yr=4,Yc=5,$c=6,Zc=7;var Jc=300,$i=301,ds=302,za=303,Va=304,$r=306,Gs=1e3,ei=1001,ma=1002,Xe=1003,Md=1004;var Zr=1005;var Ye=1006,ka=1007;var Zi=1008;var un=1009,Kc=1010,Qc=1011,er=1012,Ga=1013,Hn=1014,Dn=1015,Wn=1016,Ha=1017,Wa=1018,nr=1020,jc=35902,th=35899,eh=1021,nh=1022,Nn=1023,ni=1026,Ji=1027,Xa=1028,qa=1029,Ki=1030,Ya=1031;var $a=1033,Jr=33776,Kr=33777,Qr=33778,jr=33779,Za=35840,Ja=35841,Ka=35842,Qa=35843,ja=36196,tl=37492,el=37496,nl=37488,il=37489,to=37490,sl=37491,rl=37808,ol=37809,al=37810,ll=37811,cl=37812,hl=37813,ul=37814,dl=37815,fl=37816,pl=37817,ml=37818,gl=37819,_l=37820,xl=37821,vl=36492,yl=36494,Sl=36495,Ml=36283,bl=36284,eo=36285,Tl=36286;var Cr=2300,ga=2301,oa=2302,Ic=2303,Pc=2400,Lc=2401,Dc=2402;var bd=3200;var wl=0,Td=1,bi="",en="srgb",Rr="srgb-linear",Ir="linear",_e="srgb";var aa=7680;var wd=519,Ad=512,Ed=513,Cd=514,Al=515,Rd=516,Id=517,El=518,Pd=519,Ld=35044;var ih="300 es",kn=2e3,Hs=2001;function Yf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function $f(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dd(){let i=Pr("canvas");return i.style.display="block",i}var Ru={},Ws=null;function sh(...i){let t="THREE."+i.shift();Ws?Ws("log",t,...i):console.log(t,...i)}function Nd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Gt(...i){i=Nd(i);let t="THREE."+i.shift();if(Ws)Ws("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Xt(...i){i=Nd(i);let t="THREE."+i.shift();if(Ws)Ws("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ls(...i){let t=i.join(" ");t in Ru||(Ru[t]=!0,Gt(...i))}function Ud(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Fd={[la]:ca,[ha]:fa,[ua]:pa,[ks]:da,[ca]:la,[fa]:ha,[pa]:ua,[da]:ks},ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Iu=1234567,Ar=Math.PI/180,Xs=180/Math.PI;function ir(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function ce(i,t,e){return Math.max(t,Math.min(e,i))}function rh(i,t){return(i%t+t)%t}function Zf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Jf(i,t,e){return i!==t?(e-i)/(t-i):0}function Er(i,t,e){return(1-e)*i+e*t}function Kf(i,t,e,n){return Er(i,t,1-Math.exp(-e*n))}function Qf(i,t=1){return t-Math.abs(rh(i,t*2)-t)}function jf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function tp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ep(i,t){return i+Math.floor(Math.random()*(t-i+1))}function np(i,t){return i+Math.random()*(t-i)}function ip(i){return i*(.5-Math.random())}function sp(i){i!==void 0&&(Iu=i);let t=Iu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rp(i){return i*Ar}function op(i){return i*Xs}function ap(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function lp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*_,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*_,a*c);break;case"ZYZ":i.set(l*_,l*f,a*h,a*c);break;default:Gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var no={DEG2RAD:Ar,RAD2DEG:Xs,generateUUID:ir,clamp:ce,euclideanModulo:rh,mapLinear:Zf,inverseLerp:Jf,lerp:Er,damp:Kf,pingpong:Qf,smoothstep:jf,smootherstep:tp,randInt:ep,randFloat:np,randFloatSpread:ip,seededRandom:sp,degToRad:rp,radToDeg:op,isPowerOfTwo:ap,ceilPowerOfTwo:lp,floorPowerOfTwo:cp,setQuaternionFromProperEuler:hp,normalize:tn,denormalize:zs},hh=class hh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hh.prototype.isVector2=!0;var he=hh,_n=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],_=r[o+2],v=r[o+3];if(d!==v||l!==u||c!==f||h!==_){let m=l*u+c*f+h*_+d*v;m<0&&(u=-u,f=-f,_=-_,v=-v,m=-m);let p=1-a;if(m<.9995){let b=Math.acos(m),I=Math.sin(b);p=Math.sin(p*b)/I,a=Math.sin(a*b)/I,l=l*p+u*a,c=c*p+f*a,h=h*p+_*a,d=d*p+v*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+_*a,d=d*p+v*a;let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+h*d+l*f-c*u,t[e+1]=l*_+h*u+c*d-a*f,t[e+2]=c*_+h*f+a*u-l*d,t[e+3]=h*_-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"YZX":this._x=u*h*d+c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d-u*f*_;break;case"XZY":this._x=u*h*d-c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d+u*f*_;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},uh=class uh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return cc.copy(this).projectOnVector(t),this.sub(cc)}reflect(t){return this.sub(cc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uh.prototype.isVector3=!0;var V=uh,cc=new V,Pu=new _n,dh=class dh{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],_=n[8],v=s[0],m=s[3],p=s[6],b=s[1],I=s[4],S=s[7],T=s[2],M=s[5],E=s[8];return r[0]=o*v+a*b+l*T,r[3]=o*m+a*I+l*M,r[6]=o*p+a*S+l*E,r[1]=c*v+h*b+d*T,r[4]=c*m+h*I+d*M,r[7]=c*p+h*S+d*E,r[2]=u*v+f*b+_*T,r[5]=u*m+f*I+_*M,r[8]=u*p+f*S+_*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,_=e*d+n*u+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return t[0]=d*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hc.makeScale(t,e)),this}rotate(t){return ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hc.makeRotation(-t)),this}translate(t,e){return ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};dh.prototype.isMatrix3=!0;var Zt=dh,hc=new Zt,Lu=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Du=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function up(){let i={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(s.r=yi(s.r),s.g=yi(s.g),s.b=yi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(s.r=Vs(s.r),s.g=Vs(s.g),s.b=Vs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?Ir:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Rr]:{primaries:t,whitePoint:n,transfer:Ir,toXYZ:Lu,fromXYZ:Du,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:Lu,fromXYZ:Du,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),i}var ue=up();function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ws,_a=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ws===void 0&&(ws=Pr("canvas")),ws.width=t.width,ws.height=t.height;let s=ws.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ws}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Pr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yi(e[n]/255)*255):e[n]=yi(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},dp=0,qs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=ir(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(uc(s[o].image)):r.push(uc(s[o]))}else r=uc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function uc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_a.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}var fp=0,dc=new V,sn=class i extends ii{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ei,s=ei,r=Ye,o=Zi,a=Nn,l=un,c=i.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=ir(),this.name="",this.source=new qs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(dc).x}get height(){return this.source.getSize(dc).y}get depth(){return this.source.getSize(dc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gs:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gs:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Jc;sn.DEFAULT_ANISOTROPY=1;var fh=class fh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],_=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(c+1)/2,S=(f+1)/2,T=(p+1)/2,M=(h+u)/4,E=(d+v)/4,x=(_+m)/4;return I>S&&I>T?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=M/n,r=E/n):S>T?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=M/s,r=x/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=E/r,s=x/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(d-v)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fh.prototype.isVector4=!0;var Ae=fh,xa=class extends ii{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new sn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new qs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends xa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Lr=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var va=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ba=class Ba{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,_,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,_,v,m)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,_,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ba().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/As.setFromMatrixColumn(t,0).length(),r=1/As.setFromMatrixColumn(t,1).length(),o=1/As.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,_=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+_*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=_+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,_=c*h,v=c*d;e[0]=u+v*a,e[4]=_*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-_,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,_=c*h,v=c*d;e[0]=u-v*a,e[4]=-o*d,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,_=a*h,v=a*d;e[0]=l*h,e[4]=_*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=v-u*d,e[8]=_*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+_,e[10]=u-v*d}else if(t.order==="XZY"){let u=o*l,f=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=o*h,e[9]=f*d-_,e[2]=_*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pp,t,mp)}lookAt(t,e,n){let s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Di.crossVectors(n,mn),Di.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Di.crossVectors(n,mn)),Di.normalize(),Vo.crossVectors(mn,Di),s[0]=Di.x,s[4]=Vo.x,s[8]=mn.x,s[1]=Di.y,s[5]=Vo.y,s[9]=mn.y,s[2]=Di.z,s[6]=Vo.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],_=n[2],v=n[6],m=n[10],p=n[14],b=n[3],I=n[7],S=n[11],T=n[15],M=s[0],E=s[4],x=s[8],A=s[12],L=s[1],R=s[5],D=s[9],N=s[13],C=s[2],z=s[6],W=s[10],X=s[14],tt=s[3],U=s[7],Y=s[11],Q=s[15];return r[0]=o*M+a*L+l*C+c*tt,r[4]=o*E+a*R+l*z+c*U,r[8]=o*x+a*D+l*W+c*Y,r[12]=o*A+a*N+l*X+c*Q,r[1]=h*M+d*L+u*C+f*tt,r[5]=h*E+d*R+u*z+f*U,r[9]=h*x+d*D+u*W+f*Y,r[13]=h*A+d*N+u*X+f*Q,r[2]=_*M+v*L+m*C+p*tt,r[6]=_*E+v*R+m*z+p*U,r[10]=_*x+v*D+m*W+p*Y,r[14]=_*A+v*N+m*X+p*Q,r[3]=b*M+I*L+S*C+T*tt,r[7]=b*E+I*R+S*z+T*U,r[11]=b*x+I*D+S*W+T*Y,r[15]=b*A+I*N+S*X+T*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],_=t[3],v=t[7],m=t[11],p=t[15],b=l*f-c*u,I=a*f-c*d,S=a*u-l*d,T=o*f-c*h,M=o*u-l*h,E=o*d-a*h;return e*(v*b-m*I+p*S)-n*(_*b-m*T+p*M)+s*(_*I-v*T+p*E)-r*(_*S-v*M+m*E)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],_=t[12],v=t[13],m=t[14],p=t[15],b=e*a-n*o,I=e*l-s*o,S=e*c-r*o,T=n*l-s*a,M=n*c-r*a,E=s*c-r*l,x=h*v-d*_,A=h*m-u*_,L=h*p-f*_,R=d*m-u*v,D=d*p-f*v,N=u*p-f*m,C=b*N-I*D+S*R+T*L-M*A+E*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/C;return t[0]=(a*N-l*D+c*R)*z,t[1]=(s*D-n*N-r*R)*z,t[2]=(v*E-m*M+p*T)*z,t[3]=(u*M-d*E-f*T)*z,t[4]=(l*L-o*N-c*A)*z,t[5]=(e*N-s*L+r*A)*z,t[6]=(m*S-_*E-p*I)*z,t[7]=(h*E-u*S+f*I)*z,t[8]=(o*D-a*L+c*x)*z,t[9]=(n*L-e*D-r*x)*z,t[10]=(_*M-v*S+p*b)*z,t[11]=(d*S-h*M-f*b)*z,t[12]=(a*A-o*R-l*x)*z,t[13]=(e*R-n*A+s*x)*z,t[14]=(v*I-_*T-m*b)*z,t[15]=(h*T-d*I+u*b)*z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,_=r*d,v=o*h,m=o*d,p=a*d,b=l*c,I=l*h,S=l*d,T=n.x,M=n.y,E=n.z;return s[0]=(1-(v+p))*T,s[1]=(f+S)*T,s[2]=(_-I)*T,s[3]=0,s[4]=(f-S)*M,s[5]=(1-(u+p))*M,s[6]=(m+b)*M,s[7]=0,s[8]=(_+I)*E,s[9]=(m-b)*E,s[10]=(1-(u+v))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=As.set(s[0],s[1],s[2]).length(),a=As.set(s[4],s[5],s[6]).length(),l=As.set(s[8],s[9],s[10]).length();r<0&&(o=-o),On.copy(this);let c=1/o,h=1/a,d=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=d,On.elements[9]*=d,On.elements[10]*=d,e.setFromRotationMatrix(On),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=kn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),_,v;if(l)_=r/(o-r),v=o*r/(o-r);else if(a===kn)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Hs)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=kn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),_,v;if(l)_=1/(o-r),v=o/(o-r);else if(a===kn)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===Hs)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ba.prototype.isMatrix4=!0;var Me=Ba,As=new V,On=new Me,pp=new V(0,0,0),mp=new V(1,1,1),Di=new V,Vo=new V,mn=new V,Nu=new Me,Uu=new _n,Si=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uu.setFromEuler(this),this.setFromQuaternion(Uu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Si.DEFAULT_ORDER="XYZ";var Dr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gp=0,Fu=new V,Es=new _n,mi=new Me,ko=new V,yr=new V,_p=new V,xp=new _n,Ou=new V(1,0,0),Bu=new V(0,1,0),zu=new V(0,0,1),Vu={type:"added"},vp={type:"removed"},Cs={type:"childadded",child:null},fc={type:"childremoved",child:null},Fe=class i extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new V,e=new Si,n=new _n,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new Zt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(Ou,t)}rotateY(t){return this.rotateOnAxis(Bu,t)}rotateZ(t){return this.rotateOnAxis(zu,t)}translateOnAxis(t,e){return Fu.copy(t).applyQuaternion(this.quaternion),this.position.add(Fu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ou,t)}translateY(t){return this.translateOnAxis(Bu,t)}translateZ(t){return this.translateOnAxis(zu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ko.copy(t):ko.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(yr,ko,this.up):mi.lookAt(ko,yr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Es.setFromRotationMatrix(mi),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vu),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vp),fc.child=t,this.dispatchEvent(fc),fc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vu),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,t,_p),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,xp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Fe.DEFAULT_UP=new V(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},yp={type:"move"},Ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&u>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Go={h:0,s:0,l:0};function pc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=rh(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=pc(o,r,t+1/3),this.g=pc(o,r,t),this.b=pc(o,r,t-1/3)}return ue.colorSpaceToWorking(this,s),this}setStyle(t,e=en){function n(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){let n=Od[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return ue.workingToColorSpace(Je.copy(this),t),Math.round(ce(Je.r*255,0,255))*65536+Math.round(ce(Je.g*255,0,255))*256+Math.round(ce(Je.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(Je.copy(this),e);let n=Je.r,s=Je.g,r=Je.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=en){ue.workingToColorSpace(Je.copy(this),t);let e=Je.r,n=Je.g,s=Je.b;return t!==en?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ni),this.setHSL(Ni.h+t,Ni.s+e,Ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ni),t.getHSL(Go);let n=Er(Ni.h,Go.h,e),s=Er(Ni.s,Go.s,e),r=Er(Ni.l,Go.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Je=new jt;jt.NAMES=Od;var Nr=class extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Bn=new V,gi=new V,mc=new V,_i=new V,Rs=new V,Is=new V,ku=new V,gc=new V,_c=new V,xc=new V,vc=new Ae,yc=new Ae,Sc=new Ae,Bi=class i{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Bn.subVectors(t,e),s.cross(Bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Bn.subVectors(s,e),gi.subVectors(n,e),mc.subVectors(t,e);let o=Bn.dot(Bn),a=Bn.dot(gi),l=Bn.dot(mc),c=gi.dot(gi),h=gi.dot(mc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,_=(o*h-a*l)*u;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return vc.setScalar(0),yc.setScalar(0),Sc.setScalar(0),vc.fromBufferAttribute(t,e),yc.fromBufferAttribute(t,n),Sc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(vc,r.x),o.addScaledVector(yc,r.y),o.addScaledVector(Sc,r.z),o}static isFrontFacing(t,e,n,s){return Bn.subVectors(n,e),gi.subVectors(t,e),Bn.cross(gi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Bn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Rs.subVectors(s,n),Is.subVectors(r,n),gc.subVectors(t,n);let l=Rs.dot(gc),c=Is.dot(gc);if(l<=0&&c<=0)return e.copy(n);_c.subVectors(t,s);let h=Rs.dot(_c),d=Is.dot(_c);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Rs,o);xc.subVectors(t,r);let f=Rs.dot(xc),_=Is.dot(xc);if(_>=0&&f<=_)return e.copy(r);let v=f*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Is,a);let m=h*_-f*d;if(m<=0&&d-h>=0&&f-_>=0)return ku.subVectors(r,s),a=(d-h)/(d-h+(f-_)),e.copy(s).addScaledVector(ku,a);let p=1/(m+v+u);return o=v*p,a=u*p,e.copy(n).addScaledVector(Rs,o).addScaledVector(Is,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},In=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ho.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ho.copy(n.boundingBox)),Ho.applyMatrix4(t.matrixWorld),this.union(Ho)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sr),Wo.subVectors(this.max,Sr),Ps.subVectors(t.a,Sr),Ls.subVectors(t.b,Sr),Ds.subVectors(t.c,Sr),Ui.subVectors(Ls,Ps),Fi.subVectors(Ds,Ls),ss.subVectors(Ps,Ds);let e=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-ss.z,ss.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,ss.z,0,-ss.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-ss.y,ss.x,0];return!Mc(e,Ps,Ls,Ds,Wo)||(e=[1,0,0,0,1,0,0,0,1],!Mc(e,Ps,Ls,Ds,Wo))?!1:(Xo.crossVectors(Ui,Fi),e=[Xo.x,Xo.y,Xo.z],Mc(e,Ps,Ls,Ds,Wo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},xi=[new V,new V,new V,new V,new V,new V,new V,new V],zn=new V,Ho=new In,Ps=new V,Ls=new V,Ds=new V,Ui=new V,Fi=new V,ss=new V,Sr=new V,Wo=new V,Xo=new V,rs=new V;function Mc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){rs.fromArray(i,r);let a=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),l=t.dot(rs),c=e.dot(rs),h=n.dot(rs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ue=new V,qo=new he,Sp=0,nn=class extends ii{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ld,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qo.fromBufferAttribute(this,e),qo.applyMatrix3(t),this.setXY(e,qo.x,qo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zs(e,this.array)),e}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zs(e,this.array)),e}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zs(e,this.array)),e}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ur=class extends nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Fr=class extends nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Le=class extends nn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Mp=new In,Mr=new V,bc=new V,zi=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Mp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mr.subVectors(t,this.center);let e=Mr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Mr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mr.copy(t.center).add(bc)),this.expandByPoint(Mr.copy(t.center).sub(bc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},bp=0,Rn=new Me,Tc=new Fe,Ns=new V,gn=new In,br=new In,We=new V,hn=class i extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yf(t)?Fr:Ur)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return Tc.lookAt(t),Tc.updateMatrix(),this.applyMatrix4(Tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Le(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];br.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(gn.min,br.min),gn.expandByPoint(We),We.addVectors(gn.max,br.max),gn.expandByPoint(We)):(gn.expandByPoint(br.min),gn.expandByPoint(br.max))}gn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)We.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(We));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)We.fromBufferAttribute(a,c),l&&(Ns.fromBufferAttribute(t,c),We.add(Ns)),s=Math.max(s,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new nn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new V,l[x]=new V;let c=new V,h=new V,d=new V,u=new he,f=new he,_=new he,v=new V,m=new V;function p(x,A,L){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,L),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,A),_.fromBufferAttribute(r,L),h.sub(c),d.sub(c),f.sub(u),_.sub(u);let R=1/(f.x*_.y-_.x*f.y);isFinite(R)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(R),a[x].add(v),a[A].add(v),a[L].add(v),l[x].add(m),l[A].add(m),l[L].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let x=0,A=b.length;x<A;++x){let L=b[x],R=L.start,D=L.count;for(let N=R,C=R+D;N<C;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let I=new V,S=new V,T=new V,M=new V;function E(x){T.fromBufferAttribute(s,x),M.copy(T);let A=a[x];I.copy(A),I.sub(T.multiplyScalar(T.dot(A))).normalize(),S.crossVectors(M,A);let R=S.dot(l[x])<0?-1:1;o.setXYZW(x,I.x,I.y,I.z,R)}for(let x=0,A=b.length;x<A;++x){let L=b[x],R=L.start,D=L.count;for(let N=R,C=R+D;N<C;N+=3)E(t.getX(N+0)),E(t.getX(N+1)),E(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,h=new V,d=new V;if(t)for(let u=0,f=t.count;u<f;u+=3){let _=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)u[_++]=c[f++]}return new nn(u,h,d)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var wc=new V,Tp=new V,wp=new Zt,Vn=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=wc.subVectors(n,e).cross(Tp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(wc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||wp.getNormalMatrix(t),s=this.coplanarPoint(wc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ap=0,Vi=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=tr,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kc,this.blendDst=Gc,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=aa,this.stencilZFail=aa,this.stencilZPass=aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Vn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new he().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var vi=new V,Ac=new V,Yo=new V,$o=new V,ya=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ac.copy(t).add(e).multiplyScalar(.5),Yo.copy(e).sub(t).normalize(),$o.copy(this.origin).sub(Ac);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Yo),a=$o.dot(this.direction),l=-$o.dot(Yo),c=$o.lengthSq(),h=Math.abs(1-o*o),d,u,f,_;if(h>0)if(d=o*l-a,u=o*a-l,_=r*h,d>=0)if(u>=-_)if(u<=_){let v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ac).addScaledVector(Yo,u),f}intersectSphere(t,e){if(t.radius<0)return null;vi.subVectors(t.center,this.origin);let n=vi.dot(this.direction),s=vi.dot(vi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,_=e.x-o.x,v=e.y-o.y,m=e.z-o.z,p=n.x-o.x,b=n.y-o.y,I=n.z-o.z,S=Math.abs(l),T=Math.abs(c),M=Math.abs(h),E,x,A,L,R,D,N,C,z,W,X,tt;if(S>=T&&S>=M?(A=l,D=d,z=_,tt=p,l>=0?(E=c,x=h,L=u,R=f,N=v,C=m,W=b,X=I):(E=h,x=c,L=f,R=u,N=m,C=v,W=I,X=b)):T>=M?(A=c,D=u,z=v,tt=b,c>=0?(E=h,x=l,L=f,R=d,N=m,C=_,W=I,X=p):(E=l,x=h,L=d,R=f,N=_,C=m,W=p,X=I)):(A=h,D=f,z=m,tt=I,h>=0?(E=l,x=c,L=d,R=u,N=_,C=v,W=p,X=b):(E=c,x=l,L=u,R=d,N=v,C=_,W=b,X=p)),A===0)return null;let U=E/A,Y=x/A,Q=1/A,_t=L-U*D,Mt=R-Y*D,oe=N-U*z,kt=C-Y*z,bt=W-U*tt,$=X-Y*tt,K=bt*kt-$*oe,it=_t*$-Mt*bt,Et=oe*Mt-kt*_t;if(s){if(K<0||it<0||Et<0)return null}else if((K<0||it<0||Et<0)&&(K>0||it>0||Et>0))return null;let ot=K+it+Et;if(ot===0)return null;let ut=Q*(K*D+it*z+Et*tt);return(ot>0?ut<0:ut>0)?null:this.at(ut/ot,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},cs=class extends Vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Gu=new Me,os=new ya,Zo=new zi,Hu=new V,Jo=new V,Ko=new V,Qo=new V,Ec=new V,jo=new V,Wu=new V,ta=new V,Ie=class extends Fe{constructor(t=new hn,e=new cs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){jo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Ec.fromBufferAttribute(d,t),o?jo.addScaledVector(Ec,h):jo.addScaledVector(Ec.sub(e),h))}e.add(jo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(r),os.copy(t.ray).recast(t.near),!(Zo.containsPoint(os.origin)===!1&&(os.intersectSphere(Zo,Hu)===null||os.origin.distanceToSquared(Hu)>(t.far-t.near)**2))&&(Gu.copy(r).invert(),os.copy(t.ray).applyMatrix4(Gu),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,os)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=u.length;_<v;_++){let m=u[_],p=o[m.materialIndex],b=Math.max(m.start,f.start),I=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=b,T=I;S<T;S+=3){let M=a.getX(S),E=a.getX(S+1),x=a.getX(S+2);s=ea(this,p,t,n,c,h,d,M,E,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=_,p=v;m<p;m+=3){let b=a.getX(m),I=a.getX(m+1),S=a.getX(m+2);s=ea(this,o,t,n,c,h,d,b,I,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=u.length;_<v;_++){let m=u[_],p=o[m.materialIndex],b=Math.max(m.start,f.start),I=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=b,T=I;S<T;S+=3){let M=S,E=S+1,x=S+2;s=ea(this,p,t,n,c,h,d,M,E,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=_,p=v;m<p;m+=3){let b=m,I=m+1,S=m+2;s=ea(this,o,t,n,c,h,d,b,I,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Ep(i,t,e,n,s,r,o,a){let l;if(t.side===rn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Yi,a),l===null)return null;ta.copy(a),ta.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ta);return c<e.near||c>e.far?null:{distance:c,point:ta.clone(),object:i}}function ea(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Jo),i.getVertexPosition(l,Ko),i.getVertexPosition(c,Qo);let h=Ep(i,t,e,n,Jo,Ko,Qo,Wu);if(h){let d=new V;Bi.getBarycoord(Wu,Jo,Ko,Qo,d),s&&(h.uv=Bi.getInterpolatedAttribute(s,a,l,c,d,new he)),r&&(h.uv1=Bi.getInterpolatedAttribute(r,a,l,c,d,new he)),o&&(h.normal=Bi.getInterpolatedAttribute(o,a,l,c,d,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new V,materialIndex:0};Bi.getNormal(Jo,Ko,Qo,u.normal),h.face=u,h.barycoord=d}return h}var Or=class extends sn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Xe,h=Xe,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $s=class extends nn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Us=new Me,Xu=new Me,na=[],qu=new In,Cp=new Me,Tr=new Ie,wr=new zi,ki=class extends Ie{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $s(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new In),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Us),qu.copy(t.boundingBox).applyMatrix4(Us),this.boundingBox.union(qu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Us),wr.copy(t.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(wr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wr.copy(this.boundingSphere),wr.applyMatrix4(n),t.ray.intersectsSphere(wr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Us),Xu.multiplyMatrices(n,Us),Tr.matrixWorld=Xu,Tr.raycast(t,na);for(let o=0,a=na.length;o<a;o++){let l=na[o];l.instanceId=r,l.object=this,e.push(l)}na.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new $s(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Or(new Float32Array(s*this.count),s,this.count,Xa,Dn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},as=new zi,Rp=new he(.5,.5),ia=new V,Zs=class{constructor(t=new Vn,e=new Vn,n=new Vn,s=new Vn,r=new Vn,o=new Vn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],_=r[8],v=r[9],m=r[10],p=r[11],b=r[12],I=r[13],S=r[14],T=r[15];if(s[0].setComponents(c-o,f-h,p-_,T-b).normalize(),s[1].setComponents(c+o,f+h,p+_,T+b).normalize(),s[2].setComponents(c+a,f+d,p+v,T+I).normalize(),s[3].setComponents(c-a,f-d,p-v,T-I).normalize(),n)s[4].setComponents(l,u,m,S).normalize(),s[5].setComponents(c-l,f-u,p-m,T-S).normalize();else if(s[4].setComponents(c-l,f-u,p-m,T-S).normalize(),e===kn)s[5].setComponents(c+l,f+u,p+m,T+S).normalize();else if(e===Hs)s[5].setComponents(l,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){as.center.set(0,0,0);let e=Rp.distanceTo(t.center);return as.radius=.7071067811865476+e,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ia.x=s.normal.x>0?t.max.x:t.min.x,ia.y=s.normal.y>0?t.max.y:t.min.y,ia.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ia)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Br=class extends sn{constructor(t=[],e=$i,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},zr=class extends sn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Gi=class extends sn{constructor(t,e,n=Hn,s,r,o,a=Xe,l=Xe,c,h=ni,d=1){if(h!==ni&&h!==Ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Sa=class extends Gi{constructor(t,e=Hn,n=$i,s,r,o=Xe,a=Xe,l,c=ni){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Vr=class extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},si=class i extends hn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(d,2));function _(v,m,p,b,I,S,T,M,E,x,A){let L=S/E,R=T/x,D=S/2,N=T/2,C=M/2,z=E+1,W=x+1,X=0,tt=0,U=new V;for(let Y=0;Y<W;Y++){let Q=Y*R-N;for(let _t=0;_t<z;_t++){let Mt=_t*L-D;U[v]=Mt*b,U[m]=Q*I,U[p]=C,c.push(U.x,U.y,U.z),U[v]=0,U[m]=0,U[p]=M>0?1:-1,h.push(U.x,U.y,U.z),d.push(_t/E),d.push(1-Y/x),X+=1}}for(let Y=0;Y<x;Y++)for(let Q=0;Q<E;Q++){let _t=u+Q+z*Y,Mt=u+Q+z*(Y+1),oe=u+(Q+1)+z*(Y+1),kt=u+(Q+1)+z*Y;l.push(_t,Mt,kt),l.push(Mt,oe,kt),tt+=6}a.addGroup(f,tt,A),f+=tt,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Mi=class i extends hn{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],_=0,v=[],m=n/2,p=0;b(),o===!1&&(t>0&&I(!0),e>0&&I(!1)),this.setIndex(h),this.setAttribute("position",new Le(d,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(f,2));function b(){let S=new V,T=new V,M=0,E=(e-t)/n;for(let x=0;x<=r;x++){let A=[],L=x/r,R=L*(e-t)+t;for(let D=0;D<=s;D++){let N=D/s,C=N*l+a,z=Math.sin(C),W=Math.cos(C);T.x=R*z,T.y=-L*n+m,T.z=R*W,d.push(T.x,T.y,T.z),S.set(z,E,W).normalize(),u.push(S.x,S.y,S.z),f.push(N,1-L),A.push(_++)}v.push(A)}for(let x=0;x<s;x++)for(let A=0;A<r;A++){let L=v[A][x],R=v[A+1][x],D=v[A+1][x+1],N=v[A][x+1];(t>0||A!==0)&&(h.push(L,R,N),M+=3),(e>0||A!==r-1)&&(h.push(R,D,N),M+=3)}c.addGroup(p,M,0),p+=M}function I(S){let T=_,M=new he,E=new V,x=0,A=S===!0?t:e,L=S===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,m*L,0),u.push(0,L,0),f.push(.5,.5),_++;let R=_;for(let D=0;D<=s;D++){let C=D/s*l+a,z=Math.cos(C),W=Math.sin(C);E.x=A*W,E.y=m*L,E.z=A*z,d.push(E.x,E.y,E.z),u.push(0,L,0),M.x=z*.5+.5,M.y=W*.5*L+.5,f.push(M.x,M.y),_++}for(let D=0;D<s;D++){let N=T+D,C=R+D;S===!0?h.push(C,C+1,N):h.push(C+1,C,N),x+=3}c.addGroup(p,x,S===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var hs=class i extends hn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],_=[],v=[],m=[];for(let p=0;p<h;p++){let b=p*u-o;for(let I=0;I<c;I++){let S=I*d-r;_.push(S,-b,0),v.push(0,0,1),m.push(I/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let I=b+c*p,S=b+c*(p+1),T=b+1+c*(p+1),M=b+1+c*p;f.push(I,S,M),f.push(S,T,M)}this.setIndex(f),this.setAttribute("position",new Le(_,3)),this.setAttribute("normal",new Le(v,3)),this.setAttribute("uv",new Le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Hi=class i extends hn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new V,u=new V,f=[],_=[],v=[],m=[];for(let p=0;p<=n;p++){let b=[],I=p/n,S=o+I*a,T=t*Math.cos(S),M=Math.sqrt(t*t-T*T),E=0;p===0&&o===0?E=.5/e:p===n&&l===Math.PI&&(E=-.5/e);for(let x=0;x<=e;x++){let A=x/e,L=s+A*r;d.x=-M*Math.cos(L),d.y=T,d.z=M*Math.sin(L),_.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(A+E,1-I),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let I=h[p][b+1],S=h[p][b],T=h[p+1][b],M=h[p+1][b+1];(p!==0||o>0)&&f.push(I,S,M),(p!==n-1||l<Math.PI)&&f.push(S,T,M)}this.setIndex(f),this.setAttribute("position",new Le(_,3)),this.setAttribute("normal",new Le(v,3)),this.setAttribute("uv",new Le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function fs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Yu(s))s.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Yu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Qe(i){let t={};for(let e=0;e<i.length;e++){let n=fs(i[e]);for(let s in n)t[s]=n[s]}return t}function Yu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ip(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function oh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var Bd={clone:fs,merge:Qe},Pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends Vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pp,this.fragmentShader=Lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fs(t.uniforms),this.uniformsGroups=Ip(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new jt().setHex(s.value);break;case"v2":this.uniforms[n].value=new he().fromArray(s.value);break;case"v3":this.uniforms[n].value=new V().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ae().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Zt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Me().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ma=class extends xn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Pn=class extends Vi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wl,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Js=class extends Pn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ba=class extends Vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ta=class extends Vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Fs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Cc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Wi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break e}o=e.length;break n}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wa=class extends Wi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pc,endingEnd:Pc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Lc:r=t,a=2*e-n;break;case Dc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Lc:o=t,l=2*n-e;break;case Dc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,_=(n-e)/(s-e),v=_*_,m=v*_,p=-u*m+2*u*v-u*_,b=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*_+1,I=(-1-f)*m+(1.5+f)*v+.5*_,S=f*m-f*v;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+b*o[c+T]+I*o[l+T]+S*o[d+T];return r}},Aa=class extends Wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Ea=class extends Wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ca=class extends Wi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let _=(n-e)/(s-e),v=1-_;for(let m=0;m!==a;++m)r[m]=o[c+m]*v+o[l+m]*_;return r}let u=a*2,f=t-1;for(let _=0;_!==a;++_){let v=o[c+_],m=o[l+_],p=f*u+_*2,b=d[p],I=d[p+1],S=t*u+_*2,T=h[S],M=h[S+1],E=Np(n,e,b,T,s);r[_]=zd(E,v,I,M,m)}return r}};function zd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Dp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Np(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=zd(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Dp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var vn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Fs(e,this.TimeBufferType),this.values=Fs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Fs(t.times,Array),values:Fs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Cc(t.settings)&&(n.settings={inTangents:Fs(t.settings.inTangents,Array),outTangents:Fs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ca(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Cr:e=this.InterpolantFactoryMethodDiscrete;break;case ga:e=this.InterpolantFactoryMethodLinear;break;case oa:e=this.InterpolantFactoryMethodSmooth;break;case Ic:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Gt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cr;case this.InterpolantFactoryMethodLinear:return ga;case this.InterpolantFactoryMethodSmooth:return oa;case this.InterpolantFactoryMethodBezier:return Ic}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Cc(this.settings)&&($u(this.settings.inTangents,t),$u(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Xt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Xt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&$f(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Xt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===oa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let _=0;_!==n;++_){let v=e[d+_];if(v!==e[u+_]||v!==e[f+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Cc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function $u(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=ga;var Xi=class extends vn{constructor(t,e,n){super(t,e,n)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Cr;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}};Ra.prototype.ValueTypeName="color";var Ia=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}};Ia.prototype.ValueTypeName="number";var Pa=class extends Wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)_n.slerpFlat(r,0,o,c-a,o,c,l);return r}},kr=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Pa(this.times,this.values,this.getValueSize(),t)}};kr.prototype.ValueTypeName="quaternion";kr.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends vn{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Cr;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var La=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}};La.prototype.ValueTypeName="vector";var Da=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],_=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Vd=new Da,Na=class{constructor(t){this.manager=t!==void 0?t:Vd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Na.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gr=class extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Hr=class extends Gr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Rc=new Me,Zu=new V,Ju=new V,Ua=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zs,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Zu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zu),Ju.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ju),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Rc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Rc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Hs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Rc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},sa=new V,ra=new _n,ti=new V,Wr=class extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(sa,ra,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sa,ra,ti.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(sa,ra,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sa,ra,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Oi=new V,Ku=new he,Qu=new he,Ke=class extends Wr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z)}getViewSize(t,e){return this.getViewBounds(t,Ku,Qu),e.subVectors(Qu,Ku)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ar*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ks=class extends Wr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Nc=class extends Ua{constructor(){super(new Ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qs=class extends Gr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Nc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Os=-90,Bs=1,Fa=class extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ke(Os,Bs,t,e);s.layers=this.layers,this.add(s);let r=new Ke(Os,Bs,t,e);r.layers=this.layers,this.add(r);let o=new Ke(Os,Bs,t,e);o.layers=this.layers,this.add(o);let a=new Ke(Os,Bs,t,e);a.layers=this.layers,this.add(a);let l=new Ke(Os,Bs,t,e);l.layers=this.layers,this.add(l);let c=new Ke(Os,Bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Oa=class extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Xr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Up.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Up(){this._document.hidden===!1&&this.reset()}var ah="\\[\\]\\.:\\/",Fp=new RegExp("["+ah+"]","g"),lh="[^"+ah+"]",Op="[^"+ah.replace("\\.","")+"]",Bp=/((?:WC+[\/:])*)/.source.replace("WC",lh),zp=/(WCOD+)?/.source.replace("WCOD",Op),Vp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),kp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),Gp=new RegExp("^"+Bp+zp+Vp+kp+"$"),Hp=["material","materials","bones","map"],Uc=class{constructor(t,e,n){let s=n||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Te=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Fp,"")}static parseTrackName(t){let e=Gp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Hp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Gt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=Uc;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var VS=new Float32Array(1);var ph=class ph{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};ph.prototype.isMatrix2=!0;var Fc=ph;function ch(i,t,e,n){let s=Wp(n);switch(e){case eh:return i*t;case Xa:return i*t/s.components*s.byteLength;case qa:return i*t/s.components*s.byteLength;case Ki:return i*t*2/s.components*s.byteLength;case Ya:return i*t*2/s.components*s.byteLength;case nh:return i*t*3/s.components*s.byteLength;case Nn:return i*t*4/s.components*s.byteLength;case $a:return i*t*4/s.components*s.byteLength;case Jr:case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qr:case jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ja:case Qa:return Math.max(i,16)*Math.max(t,8)/4;case Za:case Ka:return Math.max(i,8)*Math.max(t,8)/2;case ja:case tl:case nl:case il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case el:case to:case sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ol:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case al:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ll:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case hl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case fl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case pl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ml:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case gl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case _l:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case vl:case yl:case Sl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ml:case bl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case eo:case Tl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wp(i){switch(i){case un:case Kc:return{byteLength:1,components:1};case er:case Qc:case Wn:return{byteLength:2,components:1};case Ha:case Wa:return{byteLength:2,components:4};case Hn:case Ga:case Dn:return{byteLength:4,components:1};case jc:case th:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function cf(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Kp(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<d.length;f++){let _=d[u],v=d[f];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,_=d.length;f<_;f++){let v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,em=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,im=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,om=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,um=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Sm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Im=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Wm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Km=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ng=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,og=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ag=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ug=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_g=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ag=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ig=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ng=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Og=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,r0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,o0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,a0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,f0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,v0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,y0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,b0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,E0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,se={alphahash_fragment:Qp,alphahash_pars_fragment:jp,alphamap_fragment:tm,alphamap_pars_fragment:em,alphatest_fragment:nm,alphatest_pars_fragment:im,aomap_fragment:sm,aomap_pars_fragment:rm,batching_pars_vertex:om,batching_vertex:am,begin_vertex:lm,beginnormal_vertex:cm,bsdfs:hm,iridescence_fragment:um,bumpmap_pars_fragment:dm,clipping_planes_fragment:fm,clipping_planes_pars_fragment:pm,clipping_planes_pars_vertex:mm,clipping_planes_vertex:gm,color_fragment:_m,color_pars_fragment:xm,color_pars_vertex:vm,color_vertex:ym,common:Sm,cube_uv_reflection_fragment:Mm,defaultnormal_vertex:bm,displacementmap_pars_vertex:Tm,displacementmap_vertex:wm,emissivemap_fragment:Am,emissivemap_pars_fragment:Em,colorspace_fragment:Cm,colorspace_pars_fragment:Rm,envmap_fragment:Im,envmap_common_pars_fragment:Pm,envmap_pars_fragment:Lm,envmap_pars_vertex:Dm,envmap_physical_pars_fragment:Wm,envmap_vertex:Nm,fog_vertex:Um,fog_pars_vertex:Fm,fog_fragment:Om,fog_pars_fragment:Bm,gradientmap_pars_fragment:zm,lightmap_pars_fragment:Vm,lights_lambert_fragment:km,lights_lambert_pars_fragment:Gm,lights_pars_begin:Hm,lights_toon_fragment:Xm,lights_toon_pars_fragment:qm,lights_phong_fragment:Ym,lights_phong_pars_fragment:$m,lights_physical_fragment:Zm,lights_physical_pars_fragment:Jm,lights_fragment_begin:Km,lights_fragment_maps:Qm,lights_fragment_end:jm,lightprobes_pars_fragment:tg,logdepthbuf_fragment:eg,logdepthbuf_pars_fragment:ng,logdepthbuf_pars_vertex:ig,logdepthbuf_vertex:sg,map_fragment:rg,map_pars_fragment:og,map_particle_fragment:ag,map_particle_pars_fragment:lg,metalnessmap_fragment:cg,metalnessmap_pars_fragment:hg,morphinstance_vertex:ug,morphcolor_vertex:dg,morphnormal_vertex:fg,morphtarget_pars_vertex:pg,morphtarget_vertex:mg,normal_fragment_begin:gg,normal_fragment_maps:_g,normal_pars_fragment:xg,normal_pars_vertex:vg,normal_vertex:yg,normalmap_pars_fragment:Sg,clearcoat_normal_fragment_begin:Mg,clearcoat_normal_fragment_maps:bg,clearcoat_pars_fragment:Tg,iridescence_pars_fragment:wg,opaque_fragment:Ag,packing:Eg,premultiplied_alpha_fragment:Cg,project_vertex:Rg,dithering_fragment:Ig,dithering_pars_fragment:Pg,roughnessmap_fragment:Lg,roughnessmap_pars_fragment:Dg,shadowmap_pars_fragment:Ng,shadowmap_pars_vertex:Ug,shadowmap_vertex:Fg,shadowmask_pars_fragment:Og,skinbase_vertex:Bg,skinning_pars_vertex:zg,skinning_vertex:Vg,skinnormal_vertex:kg,specularmap_fragment:Gg,specularmap_pars_fragment:Hg,tonemapping_fragment:Wg,tonemapping_pars_fragment:Xg,transmission_fragment:qg,transmission_pars_fragment:Yg,uv_pars_fragment:$g,uv_pars_vertex:Zg,uv_vertex:Jg,worldpos_vertex:Kg,background_vert:Qg,background_frag:jg,backgroundCube_vert:t0,backgroundCube_frag:e0,cube_vert:n0,cube_frag:i0,depth_vert:s0,depth_frag:r0,distance_vert:o0,distance_frag:a0,equirect_vert:l0,equirect_frag:c0,linedashed_vert:h0,linedashed_frag:u0,meshbasic_vert:d0,meshbasic_frag:f0,meshlambert_vert:p0,meshlambert_frag:m0,meshmatcap_vert:g0,meshmatcap_frag:_0,meshnormal_vert:x0,meshnormal_frag:v0,meshphong_vert:y0,meshphong_frag:S0,meshphysical_vert:M0,meshphysical_frag:b0,meshtoon_vert:T0,meshtoon_frag:w0,points_vert:A0,points_frag:E0,shadow_vert:C0,shadow_frag:R0,sprite_vert:I0,sprite_frag:P0},ft={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},ai={basic:{uniforms:Qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new jt(0)},envMapIntensity:{value:1}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Qe([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Qe([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new jt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Qe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Qe([ft.points,ft.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Qe([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Qe([ft.common,ft.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Qe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Qe([ft.sprite,ft.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:Qe([ft.common,ft.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:Qe([ft.lights,ft.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};ai.physical={uniforms:Qe([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var Cl={r:0,b:0,g:0},L0=new Me,hf=new Zt;hf.set(-1,0,0,0,1,0,0,0,1);function D0(i,t,e,n,s,r){let o=new jt(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(b){let I=b.isScene===!0?b.background:null;if(I&&I.isTexture){let S=b.backgroundBlurriness>0;I=t.get(I,S)}return I}function _(b){let I=!1,S=f(b);S===null?m(o,a):S&&S.isColor&&(m(S,1),I=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||I)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(b,I){let S=f(I);S&&(S.isCubeTexture||S.mapping===$r)?(c===void 0&&(c=new Ie(new si(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:fs(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,M,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(L0.makeRotationFromEuler(I.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(hf),c.material.toneMapped=ue.getTransfer(S.colorSpace)!==_e,(h!==S||d!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ie(new hs(2,2),new xn({name:"BackgroundMaterial",uniforms:fs(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.toneMapped=ue.getTransfer(S.colorSpace)!==_e,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,I){b.getRGB(Cl,oh(i)),e.buffers.color.setClear(Cl.r,Cl.g,Cl.b,I,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,I=1){o.set(b),a=I,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:_,addToRenderList:v,dispose:p}}function N0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(R,D,N,C,z){let W=!1,X=d(R,C,N,D);r!==X&&(r=X,c(r.object)),W=f(R,C,N,z),W&&_(R,C,N,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,S(R,D,N,C),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function d(R,D,N,C){let z=C.wireframe===!0,W=n[D.id];W===void 0&&(W={},n[D.id]=W);let X=R.isInstancedMesh===!0?R.id:0,tt=W[X];tt===void 0&&(tt={},W[X]=tt);let U=tt[N.id];U===void 0&&(U={},tt[N.id]=U);let Y=U[z];return Y===void 0&&(Y=u(l()),U[z]=Y),Y}function u(R){let D=[],N=[],C=[];for(let z=0;z<e;z++)D[z]=0,N[z]=0,C[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:C,object:R,attributes:{},index:null}}function f(R,D,N,C){let z=r.attributes,W=D.attributes,X=0,tt=N.getAttributes();for(let U in tt)if(tt[U].location>=0){let Q=z[U],_t=W[U];if(_t===void 0&&(U==="instanceMatrix"&&R.instanceMatrix&&(_t=R.instanceMatrix),U==="instanceColor"&&R.instanceColor&&(_t=R.instanceColor)),Q===void 0||Q.attribute!==_t||_t&&Q.data!==_t.data)return!0;X++}return r.attributesNum!==X||r.index!==C}function _(R,D,N,C){let z={},W=D.attributes,X=0,tt=N.getAttributes();for(let U in tt)if(tt[U].location>=0){let Q=W[U];Q===void 0&&(U==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),U==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor));let _t={};_t.attribute=Q,Q&&Q.data&&(_t.data=Q.data),z[U]=_t,X++}r.attributes=z,r.attributesNum=X,r.index=C}function v(){let R=r.newAttributes;for(let D=0,N=R.length;D<N;D++)R[D]=0}function m(R){p(R,0)}function p(R,D){let N=r.newAttributes,C=r.enabledAttributes,z=r.attributeDivisors;N[R]=1,C[R]===0&&(i.enableVertexAttribArray(R),C[R]=1),z[R]!==D&&(i.vertexAttribDivisor(R,D),z[R]=D)}function b(){let R=r.newAttributes,D=r.enabledAttributes;for(let N=0,C=D.length;N<C;N++)D[N]!==R[N]&&(i.disableVertexAttribArray(N),D[N]=0)}function I(R,D,N,C,z,W,X){X===!0?i.vertexAttribIPointer(R,D,N,z,W):i.vertexAttribPointer(R,D,N,C,z,W)}function S(R,D,N,C){v();let z=C.attributes,W=N.getAttributes(),X=D.defaultAttributeValues;for(let tt in W){let U=W[tt];if(U.location>=0){let Y=z[tt];if(Y===void 0&&(tt==="instanceMatrix"&&R.instanceMatrix&&(Y=R.instanceMatrix),tt==="instanceColor"&&R.instanceColor&&(Y=R.instanceColor)),Y!==void 0){let Q=Y.normalized,_t=Y.itemSize,Mt=t.get(Y);if(Mt===void 0)continue;let oe=Mt.buffer,kt=Mt.type,bt=Mt.bytesPerElement,$=kt===i.INT||kt===i.UNSIGNED_INT||Y.gpuType===Ga;if(Y.isInterleavedBufferAttribute){let K=Y.data,it=K.stride,Et=Y.offset;if(K.isInstancedInterleavedBuffer){for(let ot=0;ot<U.locationSize;ot++)p(U.location+ot,K.meshPerAttribute);R.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ot=0;ot<U.locationSize;ot++)m(U.location+ot);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let ot=0;ot<U.locationSize;ot++)I(U.location+ot,_t/U.locationSize,kt,Q,it*bt,(Et+_t/U.locationSize*ot)*bt,$)}else{if(Y.isInstancedBufferAttribute){for(let K=0;K<U.locationSize;K++)p(U.location+K,Y.meshPerAttribute);R.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let K=0;K<U.locationSize;K++)m(U.location+K);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let K=0;K<U.locationSize;K++)I(U.location+K,_t/U.locationSize,kt,Q,_t*bt,_t/U.locationSize*K*bt,$)}}else if(X!==void 0){let Q=X[tt];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(U.location,Q);break;case 3:i.vertexAttrib3fv(U.location,Q);break;case 4:i.vertexAttrib4fv(U.location,Q);break;default:i.vertexAttrib1fv(U.location,Q)}}}}b()}function T(){A();for(let R in n){let D=n[R];for(let N in D){let C=D[N];for(let z in C){let W=C[z];for(let X in W)h(W[X].object),delete W[X];delete C[z]}}delete n[R]}}function M(R){if(n[R.id]===void 0)return;let D=n[R.id];for(let N in D){let C=D[N];for(let z in C){let W=C[z];for(let X in W)h(W[X].object),delete W[X];delete C[z]}}delete n[R.id]}function E(R){for(let D in n){let N=n[D];for(let C in N){let z=N[C];if(z[R.id]===void 0)continue;let W=z[R.id];for(let X in W)h(W[X].object),delete W[X];delete z[R.id]}}}function x(R){for(let D in n){let N=n[D],C=R.isInstancedMesh===!0?R.id:0,z=N[C];if(z!==void 0){for(let W in z){let X=z[W];for(let tt in X)h(X[tt].object),delete X[tt];delete z[W]}delete N[C],Object.keys(N).length===0&&delete n[D]}}}function A(){L(),o=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:L,dispose:T,releaseStatesOfGeometry:M,releaseStatesOfObject:x,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function U0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function F0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Nn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let x=E===Wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==un&&E!==Dn&&!x&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Gt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:I,maxFragmentUniforms:S,maxSamples:T,samples:M}}function O0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Vn,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,I=b*4,S=p.clippingState||null;l.value=S,S=h(_,u,I,f);for(let T=0;T!==I;++T)S[T]=e[T];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,_){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,_!==!0||m===null){let p=f+v*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let I=0,S=f;I!==v;++I,S+=4)o.copy(d[I]).applyMatrix4(b,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var rr=4,B0=6,z0=20,V0=256,io=new Ks,kd=new jt,mh=null,gh=0,_h=0,xh=!1,k0=new V,ps=new V,Il=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=k0}=r;mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(mh,gh,_h),this._renderer.xr.enabled=xh,t.scissorTest=!1,sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$i||t.mapping===ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:Wn,format:Nn,colorSpace:Rr,depthBuffer:!1},s=Gd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=G0(r)),this._blurMaterial=W0(r,t,e),this._ggxMaterial=H0(r,t,e)}return s}_compileMaterial(t){let e=new Ie(new hn,t);this._renderer.compile(e,io)}_sceneToCubeUV(t,e,n,s,r){let l=new Ke(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(kd),d.toneMapping=Gn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ie(new si,new cs({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,p=!0):(m.color.copy(kd),p=!0);for(let I=0;I<6;I++){let S=I%3;S===0?(l.up.set(0,c[I],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[I],r.y,r.z)):S===1?(l.up.set(0,0,c[I]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[I],r.z)):(l.up.set(0,c[I],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[I]));let T=this._cubeSize;sr(s,S*T,I>2?T:0,T,T),d.setRenderTarget(s),p&&d.render(v,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===$i||t.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;sr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,io)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:_}=this,v=this._sizeLods[n],m=3*v*(n>_-rr?n-_+rr:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=_-e,sr(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(a,io),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,sr(t,m,p,3*v,2*v),s.setRenderTarget(t),s.render(a,io)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-rr?s-this._lodMax+rr:0),u=4*(this._cubeSize-h);sr(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,io)}};function G0(i){let t=[],e=[],n=i,s=i-rr+1+B0;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,_=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let p=0;p<d;p++){let b=p%3*2/3-1,I=p>2?0:-1,S=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];_.set(S,f*u*p);for(let T=0;T<u;T++){let M=h[T*2]*2-1,E=h[T*2+1]*2-1;p===0?ps.set(1,E,M):p===1?ps.set(-M,1,-E):p===2?ps.set(-M,E,1):p===3?ps.set(-1,E,-M):p===4?ps.set(-M,-1,E):ps.set(M,E,-1),ps.toArray(v,(p*u+T)*f)}}let m=new hn;m.setAttribute("position",new nn(_,f)),m.setAttribute("outputDirection",new nn(v,f)),e.push(new Ie(m,null)),n>rr&&n--}return{lodMeshes:e,sizeLods:t}}function Gd(i,t,e){let n=new cn(i,t,e);return n.texture.mapping=$r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function H0(i,t,e){return new xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:V0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function W0(i,t,e){return new xn({name:"SphericalGaussianBlur",defines:{SAMPLES:z0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Dl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Hd(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Wd(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Dl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Pl=class extends cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Br(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new si(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:ri});r.uniforms.tEquirect.value=e;let o=new Ie(s,r),a=e.minFilter;return e.minFilter===Zi&&(e.minFilter=Ye),new Fa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function X0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===za||f===Va)if(t.has(u)){let _=t.get(u).texture;return a(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let v=new Pl(_.height);return v.fromEquirectangularTexture(i,u),t.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,_=f===za||f===Va,v=f===$i||f===ds;if(_||v){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Il(i)),m=_?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return _&&b&&b.height>0||v&&b&&l(b)?(n===null&&(n=new Il(i)),m=_?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===za?u.mapping=$i:f===Va&&(u.mapping=ds),u}function l(u){let f=0,_=6;for(let v=0;v<_;v++)u[v]!==void 0&&f++;return f===_}function c(u){let f=u.target;f.removeEventListener("dispose",c);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function q0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ls("WebGLRenderer: "+n+" extension not supported."),s}}}function Y0(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,_=d.attributes.position,v=0;if(_===void 0)return;if(f!==null){let b=f.array;v=f.version;for(let I=0,S=b.length;I<S;I+=3){let T=b[I+0],M=b[I+1],E=b[I+2];u.push(T,M,M,E,E,T)}}else{let b=_.array;v=_.version;for(let I=0,S=b.length/3-1;I<S;I+=3){let T=I+0,M=I+1,E=I+2;u.push(T,M,M,E,E,T)}}let m=new(_.count>=65535?Fr:Ur)(u,1);m.version=v;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function $0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];e.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Z0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Xt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function J0(i,t,e){let n=new WeakMap,s=new Ae;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let A=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],I=0;f===!0&&(I=1),_===!0&&(I=2),v===!0&&(I=3);let S=a.attributes.position.count*I,T=1;S>t.maxTextureSize&&(T=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let M=new Float32Array(S*T*4*d),E=new Lr(M,S,T,d);E.type=Dn,E.needsUpdate=!0;let x=I*4;for(let L=0;L<d;L++){let R=m[L],D=p[L],N=b[L],C=S*T*4*L;for(let z=0;z<R.count;z++){let W=z*x;f===!0&&(s.fromBufferAttribute(R,z),M[C+W+0]=s.x,M[C+W+1]=s.y,M[C+W+2]=s.z,M[C+W+3]=0),_===!0&&(s.fromBufferAttribute(D,z),M[C+W+4]=s.x,M[C+W+5]=s.y,M[C+W+6]=s.z,M[C+W+7]=0),v===!0&&(s.fromBufferAttribute(N,z),M[C+W+8]=s.x,M[C+W+9]=s.y,M[C+W+10]=s.z,M[C+W+11]=N.itemSize===4?s.w:1)}}u={count:d,texture:E,size:new he(S,T)},n.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function K0(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Q0={[Wc]:"LINEAR_TONE_MAPPING",[Xc]:"REINHARD_TONE_MAPPING",[qc]:"CINEON_TONE_MAPPING",[Yr]:"ACES_FILMIC_TONE_MAPPING",[$c]:"AGX_TONE_MAPPING",[Zc]:"NEUTRAL_TONE_MAPPING",[Yc]:"CUSTOM_TONE_MAPPING"};function j0(i,t,e,n,s,r){let o=new cn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new hn;c.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Le([0,2,0,0,2,0],2));let h=new Ma({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ie(c,h),u=new Ks(-1,1,1,-1,0,1),f=null,_=null,v=!1,m,p=null,b=[],I=!1;this.setSize=function(S,T){o.setSize(S,T),a!==null&&a.setSize(S,T),l!==null&&l.setSize(S,T);for(let M=0;M<b.length;M++){let E=b[M];E.setSize&&E.setSize(S,T)}},this.setEffects=function(S){b=S,I=b.length>0&&b[0].isRenderPass===!0;let T=o.width,M=o.height;b.length>0&&a===null&&(a=new cn(T,M,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),l=new cn(T,M,{type:Wn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<b.length;E++){let x=b[E];x.setSize&&x.setSize(T,M)}},this.begin=function(S,T){if(v||S.toneMapping===Gn&&b.length===0)return!1;if(p=T,T!==null){let M=T.width,E=T.height;(o.width!==M||o.height!==E)&&this.setSize(M,E)}return I===!1&&S.setRenderTarget(o),m=S.toneMapping,S.toneMapping=Gn,!0},this.hasRenderPass=function(){return I},this.end=function(S,T){S.toneMapping=m,v=!0;let M=o,E=a;for(let x=0;x<b.length;x++){let A=b[x];A.enabled!==!1&&(A.render(S,E,M,T),A.needsSwap!==!1&&(M=E,E=E===a?l:a))}if(f!==S.outputColorSpace||_!==S.toneMapping){f=S.outputColorSpace,_=S.toneMapping,h.defines={},ue.getTransfer(f)===_e&&(h.defines.SRGB_TRANSFER="");let x=Q0[_];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,S.setRenderTarget(p),S.render(d,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var uf=new sn,Sh=new Gi(1,1),df=new Lr,ff=new va,pf=new Br,Xd=[],qd=[],Yd=new Float32Array(16),$d=new Float32Array(9),Zd=new Float32Array(4);function ar(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Xd[s];if(r===void 0&&(r=new Float32Array(s),Xd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Nl(i,t){let e=qd[t];e===void 0&&(e=new Int32Array(t),qd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function t_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function e_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function n_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function i_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function s_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Ve(e,n))return;Zd.set(n),i.uniformMatrix2fv(this.addr,!1,Zd),ke(e,n)}}function r_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Ve(e,n))return;$d.set(n),i.uniformMatrix3fv(this.addr,!1,$d),ke(e,n)}}function o_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Ve(e,n))return;Yd.set(n),i.uniformMatrix4fv(this.addr,!1,Yd),ke(e,n)}}function a_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function l_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function c_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function h_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function u_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function d_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function f_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function p_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function m_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sh.compareFunction=e.isReversedDepthBuffer()?El:Al,r=Sh):r=uf,e.setTexture2D(t||r,s)}function g_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ff,s)}function __(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||pf,s)}function x_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||df,s)}function v_(i){switch(i){case 5126:return t_;case 35664:return e_;case 35665:return n_;case 35666:return i_;case 35674:return s_;case 35675:return r_;case 35676:return o_;case 5124:case 35670:return a_;case 35667:case 35671:return l_;case 35668:case 35672:return c_;case 35669:case 35673:return h_;case 5125:return u_;case 36294:return d_;case 36295:return f_;case 36296:return p_;case 35678:case 36198:case 36298:case 36306:case 35682:return m_;case 35679:case 36299:case 36307:return g_;case 35680:case 36300:case 36308:case 36293:return __;case 36289:case 36303:case 36311:case 36292:return x_}}function y_(i,t){i.uniform1fv(this.addr,t)}function S_(i,t){let e=ar(t,this.size,2);i.uniform2fv(this.addr,e)}function M_(i,t){let e=ar(t,this.size,3);i.uniform3fv(this.addr,e)}function b_(i,t){let e=ar(t,this.size,4);i.uniform4fv(this.addr,e)}function T_(i,t){let e=ar(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function w_(i,t){let e=ar(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function A_(i,t){let e=ar(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function E_(i,t){i.uniform1iv(this.addr,t)}function C_(i,t){i.uniform2iv(this.addr,t)}function R_(i,t){i.uniform3iv(this.addr,t)}function I_(i,t){i.uniform4iv(this.addr,t)}function P_(i,t){i.uniform1uiv(this.addr,t)}function L_(i,t){i.uniform2uiv(this.addr,t)}function D_(i,t){i.uniform3uiv(this.addr,t)}function N_(i,t){i.uniform4uiv(this.addr,t)}function U_(i,t,e){let n=this.cache,s=t.length,r=Nl(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Sh:o=uf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function F_(i,t,e){let n=this.cache,s=t.length,r=Nl(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ff,r[o])}function O_(i,t,e){let n=this.cache,s=t.length,r=Nl(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||pf,r[o])}function B_(i,t,e){let n=this.cache,s=t.length,r=Nl(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||df,r[o])}function z_(i){switch(i){case 5126:return y_;case 35664:return S_;case 35665:return M_;case 35666:return b_;case 35674:return T_;case 35675:return w_;case 35676:return A_;case 5124:case 35670:return E_;case 35667:case 35671:return C_;case 35668:case 35672:return R_;case 35669:case 35673:return I_;case 5125:return P_;case 36294:return L_;case 36295:return D_;case 36296:return N_;case 35678:case 36198:case 36298:case 36306:case 35682:return U_;case 35679:case 36299:case 36307:return F_;case 35680:case 36300:case 36308:case 36293:return O_;case 36289:case 36303:case 36311:case 36292:return B_}}var Mh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=v_(e.type)}},bh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=z_(e.type)}},Th=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},vh=/(\w+)(\])?(\[|\.)?/g;function Jd(i,t){i.seq.push(t),i.map[t.id]=t}function V_(i,t,e){let n=i.name,s=n.length;for(vh.lastIndex=0;;){let r=vh.exec(n),o=vh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Jd(e,c===void 0?new Mh(a,i,t):new bh(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Th(a),Jd(e,d)),e=d}}}var or=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);V_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Kd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var k_=37297,G_=0;function H_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Qd=new Zt;function W_(i){ue._getMatrix(Qd,ue.workingColorSpace,i);let t=`mat3( ${Qd.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case Ir:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function jd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+H_(i.getShaderSource(t),a)}else return r}function X_(i,t){let e=W_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var q_={[Wc]:"Linear",[Xc]:"Reinhard",[qc]:"Cineon",[Yr]:"ACESFilmic",[$c]:"AgX",[Zc]:"Neutral",[Yc]:"Custom"};function Y_(i,t){let e=q_[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Rl=new V;function $_(){ue.getLuminanceCoefficients(Rl);let i=Rl.x.toFixed(4),t=Rl.y.toFixed(4),e=Rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function J_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function K_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ro(i){return i!==""}function tf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ef(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Q_=/^[ \t]*#include +<([\w\d./]+)>/gm;function wh(i){return i.replace(Q_,tx)}var j_=new Map;function tx(i,t){let e=se[t];if(e===void 0){let n=j_.get(t);if(n!==void 0)e=se[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return wh(e)}var ex=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nf(i){return i.replace(ex,nx)}function nx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var ix={[qr]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function sx(i){return ix[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var rx={[$i]:"ENVMAP_TYPE_CUBE",[ds]:"ENVMAP_TYPE_CUBE",[$r]:"ENVMAP_TYPE_CUBE_UV"};function ox(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":rx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var ax={[ds]:"ENVMAP_MODE_REFRACTION"};function lx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ax[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cx={[Hc]:"ENVMAP_BLENDING_MULTIPLY",[yd]:"ENVMAP_BLENDING_MIX",[Sd]:"ENVMAP_BLENDING_ADD"};function hx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":cx[i.combine]||"ENVMAP_BLENDING_NONE"}function ux(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function dx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=sx(e),c=ox(e),h=lx(e),d=hx(e),u=ux(e),f=Z_(e),_=J_(r),v=s.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ro).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ro).join(`
`),p.length>0&&(p+=`
`)):(m=[sf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),p=[sf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?se.tonemapping_pars_fragment:"",e.toneMapping!==Gn?Y_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,X_("linearToOutputTexel",e.outputColorSpace),$_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ro).join(`
`)),o=wh(o),o=tf(o,e),o=ef(o,e),a=wh(a),a=tf(a,e),a=ef(a,e),o=nf(o),a=nf(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let I=b+m+o,S=b+p+a,T=Kd(s,s.VERTEX_SHADER,I),M=Kd(s,s.FRAGMENT_SHADER,S);s.attachShader(v,T),s.attachShader(v,M),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(R){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(v)||"",N=s.getShaderInfoLog(T)||"",C=s.getShaderInfoLog(M)||"",z=D.trim(),W=N.trim(),X=C.trim(),tt=!0,U=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,T,M);else{let Y=jd(s,T,"vertex"),Q=jd(s,M,"fragment");Xt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+Y+`
`+Q)}else z!==""?Gt("WebGLProgram: Program Info Log:",z):(W===""||X==="")&&(U=!1);U&&(R.diagnostics={runnable:tt,programLog:z,vertexShader:{log:W,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(T),s.deleteShader(M),x=new or(s,v),A=K_(s,v)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let A;this.getAttributes=function(){return A===void 0&&E(this),A};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(v,k_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=G_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=M,this}var fx=0,Ah=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Eh(t),e.set(t,n)),n}},Eh=class{constructor(t){this.id=fx++,this.code=t,this.usedTimes=0}};function px(i){return i===Ki||i===to||i===eo}function mx(i,t,e,n,s,r){let o=new Dr,a=new Ah,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,A,L,R,D,N){let C=R.fog,z=D.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,tt=t.get(x.envMap||W,X),U=tt&&tt.mapping===$r?tt.image.height:null,Y=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Gt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let Q=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,_t=Q!==void 0?Q.length:0,Mt=0;z.morphAttributes.position!==void 0&&(Mt=1),z.morphAttributes.normal!==void 0&&(Mt=2),z.morphAttributes.color!==void 0&&(Mt=3);let oe,kt,bt,$;if(Y){let Pt=ai[Y];oe=Pt.vertexShader,kt=Pt.fragmentShader}else{oe=x.vertexShader,kt=x.fragmentShader;let Pt=a.getVertexShaderStage(x),Yt=a.getFragmentShaderStage(x);a.update(x,Pt,Yt),bt=Pt.id,$=Yt.id}let K=i.getRenderTarget(),it=i.state.buffers.depth.getReversed(),Et=D.isInstancedMesh===!0,ot=D.isBatchedMesh===!0,ut=!!x.map,Ht=!!x.matcap,Ut=!!tt,Vt=!!x.aoMap,Ft=!!x.lightMap,It=!!x.bumpMap&&x.wireframe===!1,Jt=!!x.normalMap,re=!!x.displacementMap,xe=!!x.emissiveMap,$t=!!x.metalnessMap,ne=!!x.roughnessMap,P=x.anisotropy>0,te=x.clearcoat>0,Ct=x.dispersion>0,w=x.retroreflectivity>0,g=x.iridescence>0,B=x.sheen>0,k=x.transmission>0,Z=P&&!!x.anisotropyMap,st=te&&!!x.clearcoatMap,rt=te&&!!x.clearcoatNormalMap,J=te&&!!x.clearcoatRoughnessMap,j=g&&!!x.iridescenceMap,at=g&&!!x.iridescenceThicknessMap,Lt=B&&!!x.sheenColorMap,dt=B&&!!x.sheenRoughnessMap,ct=!!x.specularMap,Rt=!!x.specularColorMap,Bt=!!x.specularIntensityMap,Ot=k&&!!x.transmissionMap,O=k&&!!x.thicknessMap,ht=!!x.gradientMap,et=!!x.alphaMap,lt=x.alphaTest>0,pt=!!x.alphaHash,nt=!!x.extensions,xt=Gn;x.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(xt=i.toneMapping);let Tt={shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:oe,fragmentShader:kt,defines:x.defines,customVertexShaderID:bt,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:ot,batchingColor:ot&&D._colorsTexture!==null,instancing:Et,instancingColor:Et&&D.instanceColor!==null,instancingMorph:Et&&D.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ut,matcap:Ht,envMap:Ut,envMapMode:Ut&&tt.mapping,envMapCubeUVHeight:U,aoMap:Vt,lightMap:Ft,bumpMap:It,normalMap:Jt,displacementMap:re,emissiveMap:xe,normalMapObjectSpace:Jt&&x.normalMapType===Td,normalMapTangentSpace:Jt&&x.normalMapType===wl,packedNormalMap:Jt&&x.normalMapType===wl&&px(x.normalMap.format),metalnessMap:$t,roughnessMap:ne,anisotropy:P,anisotropyMap:Z,clearcoat:te,clearcoatMap:st,clearcoatNormalMap:rt,clearcoatRoughnessMap:J,dispersion:Ct,retroreflection:w,iridescence:g,iridescenceMap:j,iridescenceThicknessMap:at,sheen:B,sheenColorMap:Lt,sheenRoughnessMap:dt,specularMap:ct,specularColorMap:Rt,specularIntensityMap:Bt,transmission:k,transmissionMap:Ot,thicknessMap:O,gradientMap:ht,opaque:x.transparent===!1&&x.blending===tr&&x.alphaToCoverage===!1,alphaMap:et,alphaTest:lt,alphaHash:pt,combine:x.combine,mapUv:ut&&_(x.map.channel),aoMapUv:Vt&&_(x.aoMap.channel),lightMapUv:Ft&&_(x.lightMap.channel),bumpMapUv:It&&_(x.bumpMap.channel),normalMapUv:Jt&&_(x.normalMap.channel),displacementMapUv:re&&_(x.displacementMap.channel),emissiveMapUv:xe&&_(x.emissiveMap.channel),metalnessMapUv:$t&&_(x.metalnessMap.channel),roughnessMapUv:ne&&_(x.roughnessMap.channel),anisotropyMapUv:Z&&_(x.anisotropyMap.channel),clearcoatMapUv:st&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:at&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:dt&&_(x.sheenRoughnessMap.channel),specularMapUv:ct&&_(x.specularMap.channel),specularColorMapUv:Rt&&_(x.specularColorMap.channel),specularIntensityMapUv:Bt&&_(x.specularIntensityMap.channel),transmissionMapUv:Ot&&_(x.transmissionMap.channel),thicknessMapUv:O&&_(x.thicknessMap.channel),alphaMapUv:et&&_(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Jt||P),vertexNormals:!!z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(ut||et),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&Jt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:it,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Mt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:xt,decodeVideoTexture:ut&&x.map.isVideoTexture===!0&&ue.getTransfer(x.map.colorSpace)===_e,decodeVideoTextureEmissive:xe&&x.emissiveMap.isVideoTexture===!0&&ue.getTransfer(x.emissiveMap.colorSpace)===_e,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ln,flipSided:x.side===rn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||ot)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Tt.vertexUv1s=l.has(1),Tt.vertexUv2s=l.has(2),Tt.vertexUv3s=l.has(3),l.clear(),Tt}function m(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)A.push(L),A.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(p(A,x),b(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function p(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function b(x,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function I(x){let A=f[x.type],L;if(A){let R=ai[A];L=Bd.clone(R.uniforms)}else L=x.uniforms;return L}function S(x,A){let L=h.get(A);return L!==void 0?++L.usedTimes:(L=new dx(i,A,x,s),c.push(L),h.set(A,L)),L}function T(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function M(x){a.remove(x)}function E(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:I,acquireProgram:S,releaseProgram:T,releaseShaderCache:M,programs:c,dispose:E}}function gx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function _x(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function rf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function of(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,_,v,m,p){let b=i[t];return b===void 0?(b={id:u.id,object:u,geometry:f,material:_,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},i[t]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=_,b.materialVariant=o(u),b.groupOrder=v,b.renderOrder=u.renderOrder,b.z=m,b.group=p),t++,b}function l(u,f,_,v,m,p,b){b.reversedDepth===!0&&(m=-m);let I=a(u,f,_,v,m,p);_.transmission>0?n.push(I):_.transparent===!0?s.push(I):e.push(I)}function c(u,f,_,v,m,p){let b=a(u,f,_,v,m,p);_.transmission>0?n.unshift(b):_.transparent===!0?s.unshift(b):e.unshift(b)}function h(u,f){e.length>1&&e.sort(u||_x),n.length>1&&n.sort(f||rf),s.length>1&&s.sort(f||rf)}function d(){for(let u=t,f=i.length;u<f;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function xx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new of,i.set(n,[o])):s>=r.length?(o=new of,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function vx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new V,color:new jt};break;case"SpotLight":e={position:new V,direction:new V,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function yx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Sx=0;function Mx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function bx(i){let t=new vx,e=yx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);let s=new V,r=new Me,o=new Me;function a(c){let h=0,d=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,_=0,v=0,m=0,p=0,b=0,I=0,S=0,T=0,M=0,E=0,x=0,A=0,L=0;c.sort(Mx);for(let D=0,N=c.length;D<N;D++){let C=c[D],z=C.color,W=C.intensity,X=C.distance,tt=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ki?tt=C.shadow.map.texture:tt=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=z.r*W,d+=z.g*W,u+=z.b*W;else if(C.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(C.sh.coefficients[U],W);L++}else if(C.isSunLight){let U=t.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Y=C.shadow,Q=e.get(C);Q.shadowIntensity=Y.intensity,Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[_]=Q,n.sunShadowMap[_]=tt;let _t=Y.getViewportCount();for(let Mt=0;Mt<_t;Mt++)n.sunShadowMatrix[v+Mt]=Y.getMatrix(Mt),n.sunShadowCascade[v+Mt]=Y._cascadeData[Mt];v+=_t,_++}n.sun[f]=U,f++}else if(C.isDirectionalLight){let U=t.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Y=C.shadow,Q=e.get(C);Q.shadowIntensity=Y.intensity,Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=tt,n.directionalShadowMatrix[m]=C.shadow.matrix,T++}n.directional[m]=U,m++}else if(C.isSpotLight){let U=t.get(C);U.position.setFromMatrixPosition(C.matrixWorld),U.color.copy(z).multiplyScalar(W),U.distance=X,U.coneCos=Math.cos(C.angle),U.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),U.decay=C.decay,n.spot[b]=U;let Y=C.shadow;if(C.map&&(n.spotLightMap[x]=C.map,x++,Y.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[b]=Y.matrix,C.castShadow){let Q=e.get(C);Q.shadowIntensity=Y.intensity,Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,n.spotShadow[b]=Q,n.spotShadowMap[b]=tt,E++}b++}else if(C.isRectAreaLight){let U=t.get(C);U.color.copy(z).multiplyScalar(W),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),n.rectArea[I]=U,I++}else if(C.isPointLight){let U=t.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),U.distance=C.distance,U.decay=C.decay,C.castShadow){let Y=C.shadow,Q=e.get(C);Q.shadowIntensity=Y.intensity,Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,Q.shadowCameraNear=Y.camera.near,Q.shadowCameraFar=Y.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=tt,n.pointShadowMatrix[p]=C.shadow.matrix,M++}n.point[p]=U,p++}else if(C.isHemisphereLight){let U=t.get(C);U.skyColor.copy(C.color).multiplyScalar(W),U.groundColor.copy(C.groundColor).multiplyScalar(W),n.hemi[S]=U,S++}}I>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let R=n.hash;(R.sunLength!==f||R.directionalLength!==m||R.pointLength!==p||R.spotLength!==b||R.rectAreaLength!==I||R.hemiLength!==S||R.numSunShadows!==_||R.numDirectionalShadows!==T||R.numPointShadows!==M||R.numSpotShadows!==E||R.numSpotMaps!==x||R.numLightProbes!==L)&&(n.sun.length=f,n.directional.length=m,n.spot.length=b,n.rectArea.length=I,n.point.length=p,n.hemi.length=S,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+x-A,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=L,R.sunLength=f,R.directionalLength=m,R.pointLength=p,R.spotLength=b,R.rectAreaLength=I,R.hemiLength=S,R.numSunShadows=_,R.numDirectionalShadows=T,R.numPointShadows=M,R.numSpotShadows=E,R.numSpotMaps=x,R.numLightProbes=L,n.version=Sx++)}function l(c,h){let d=0,u=0,f=0,_=0,v=0,m=0,p=h.matrixWorldInverse;for(let b=0,I=c.length;b<I;b++){let S=c[b];if(S.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(p),d++}else if(S.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),u++}else if(S.isSpotLight){let T=n.spot[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),_++}else if(S.isRectAreaLight){let T=n.rectArea[v];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),o.identity(),r.copy(S.matrixWorld),r.premultiply(p),o.extractRotation(r),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function af(i){let t=new bx(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Tx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new af(i),t.set(s,[a])):r>=o.length?(a=new af(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var wx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ax=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ex=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Cx=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],lf=new Me,so=new V,yh=new V;function Rx(i,t,e){let n=new Zs,s=new he,r=new he,o=new Ae,a=new ba,l=new Ta,c={},h=e.maxTextureSize,d={[Yi]:rn,[rn]:Yi,[Ln]:Ln},u=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:wx,fragmentShader:Ax}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let _=new hn;_.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ie(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qr;let p=this.type;this.render=function(M,E,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===ed&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qr);let A=i.getRenderTarget(),L=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),D=i.state;D.setBlending(ri),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let N=p!==this.type;N&&E.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(z=>z.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,z=M.length;C<z;C++){let W=M[C],X=W.shadow;if(X===void 0){Gt("WebGLShadowMap:",W,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let tt=X.getFrameExtents();s.multiply(tt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,X.mapSize.y=r.y));let U=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=U,X.map===null||N===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===js){if(W.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new cn(s.x,s.y,{format:Ki,type:Wn,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),X.map.texture.name=W.name+".shadowMap",X.map.depthTexture=new Gi(s.x,s.y,Dn),X.map.depthTexture.name=W.name+".shadowMapDepth",X.map.depthTexture.format=ni,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Xe,X.map.depthTexture.magFilter=Xe}else W.isPointLight?(X.map=new Pl(s.x),X.map.depthTexture=new Sa(s.x,Hn)):(X.map=new cn(s.x,s.y),X.map.depthTexture=new Gi(s.x,s.y,Hn)),X.map.depthTexture.name=W.name+".shadowMap",X.map.depthTexture.format=ni,this.type===qr?(X.map.depthTexture.compareFunction=U?El:Al,X.map.depthTexture.minFilter=Ye,X.map.depthTexture.magFilter=Ye):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Xe,X.map.depthTexture.magFilter=Xe);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let Y=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();W.isPointLight!==!0&&X.updateMatrices(W,x);for(let Q=0;Q<Y;Q++){let _t=X.getCamera(Q);if(W.isPointLight){let Mt=X.camera,oe=X.matrix,kt=W.distance||Mt.far;kt!==Mt.far&&(Mt.far=kt,Mt.updateProjectionMatrix()),so.setFromMatrixPosition(W.matrixWorld),Mt.position.copy(so),yh.copy(Mt.position),yh.add(Ex[Q]),Mt.up.copy(Cx[Q]),Mt.lookAt(yh),Mt.updateMatrixWorld(),oe.makeTranslation(-so.x,-so.y,-so.z),lf.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(lf,Mt.coordinateSystem,Mt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(X.map),i.clear());let Mt=X.getViewport(Q);o.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),D.viewport(o)}n=X.getFrustum(Q),S(E,x,_t,W,this.type)}X.isPointLightShadow!==!0&&this.type===js&&b(X,x),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(A,L,R)};function b(M,E){let x=t.update(v);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new cn(s.x,s.y,{format:Ki,type:Wn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(E,null,x,u,v,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(E,null,x,f,v,null)}function I(M,E,x,A){let L=null,R=x.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0)L=R;else if(L=x.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let D=L.uuid,N=E.uuid,C=c[D];C===void 0&&(C={},c[D]=C);let z=C[N];z===void 0&&(z=L.clone(),C[N]=z,E.addEventListener("dispose",T)),L=z}if(L.visible=E.visible,L.wireframe=E.wireframe,A===js?L.side=E.shadowSide!==null?E.shadowSide:E.side:L.side=E.shadowSide!==null?E.shadowSide:d[E.side],L.alphaMap=E.alphaMap,L.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,L.map=E.map,L.clipShadows=E.clipShadows,L.clippingPlanes=E.clippingPlanes,L.clipIntersection=E.clipIntersection,L.displacementMap=E.displacementMap,L.displacementScale=E.displacementScale,L.displacementBias=E.displacementBias,L.wireframeLinewidth=E.wireframeLinewidth,L.linewidth=E.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let D=i.properties.get(L);D.light=x}return L}function S(M,E,x,A,L){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&L===js)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,M.matrixWorld);let N=t.update(M),C=M.material;if(Array.isArray(C)){let z=N.groups;for(let W=0,X=z.length;W<X;W++){let tt=z[W],U=C[tt.materialIndex];if(U&&U.visible){let Y=I(M,U,A,L);M.onBeforeShadow(i,M,E,x,N,Y,tt),i.renderBufferDirect(x,null,N,Y,M,tt),M.onAfterShadow(i,M,E,x,N,Y,tt)}}}else if(C.visible){let z=I(M,C,A,L);M.onBeforeShadow(i,M,E,x,N,z,null),i.renderBufferDirect(x,null,N,z,M,null),M.onAfterShadow(i,M,E,x,N,z,null)}}let D=M.children;for(let N=0,C=D.length;N<C;N++)S(D[N],E,x,A,L)}function T(M){M.target.removeEventListener("dispose",T);for(let x in c){let A=c[x],L=M.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}function Ix(i,t){function e(){let O=!1,ht=new Ae,et=null,lt=new Ae(0,0,0,0);return{setMask:function(pt){et!==pt&&!O&&(i.colorMask(pt,pt,pt,pt),et=pt)},setLocked:function(pt){O=pt},setClear:function(pt,nt,xt,Tt,Pt){Pt===!0&&(pt*=Tt,nt*=Tt,xt*=Tt),ht.set(pt,nt,xt,Tt),lt.equals(ht)===!1&&(i.clearColor(pt,nt,xt,Tt),lt.copy(ht))},reset:function(){O=!1,et=null,lt.set(-1,0,0,0)}}}function n(){let O=!1,ht=!1,et=null,lt=null,pt=null;return{setReversed:function(nt){if(ht!==nt){let xt=t.get("EXT_clip_control");nt?xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.ZERO_TO_ONE_EXT):xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.NEGATIVE_ONE_TO_ONE_EXT),ht=nt;let Tt=pt;pt=null,this.setClear(Tt)}},getReversed:function(){return ht},setTest:function(nt){nt?K(i.DEPTH_TEST):it(i.DEPTH_TEST)},setMask:function(nt){et!==nt&&!O&&(i.depthMask(nt),et=nt)},setFunc:function(nt){if(ht&&(nt=Fd[nt]),lt!==nt){switch(nt){case la:i.depthFunc(i.NEVER);break;case ca:i.depthFunc(i.ALWAYS);break;case ha:i.depthFunc(i.LESS);break;case ks:i.depthFunc(i.LEQUAL);break;case ua:i.depthFunc(i.EQUAL);break;case da:i.depthFunc(i.GEQUAL);break;case fa:i.depthFunc(i.GREATER);break;case pa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=nt}},setLocked:function(nt){O=nt},setClear:function(nt){pt!==nt&&(pt=nt,ht&&(nt=1-nt),i.clearDepth(nt))},reset:function(){O=!1,et=null,lt=null,pt=null,ht=!1}}}function s(){let O=!1,ht=null,et=null,lt=null,pt=null,nt=null,xt=null,Tt=null,Pt=null;return{setTest:function(Yt){O||(Yt?K(i.STENCIL_TEST):it(i.STENCIL_TEST))},setMask:function(Yt){ht!==Yt&&!O&&(i.stencilMask(Yt),ht=Yt)},setFunc:function(Yt,yn,dn){(et!==Yt||lt!==yn||pt!==dn)&&(i.stencilFunc(Yt,yn,dn),et=Yt,lt=yn,pt=dn)},setOp:function(Yt,yn,dn){(nt!==Yt||xt!==yn||Tt!==dn)&&(i.stencilOp(Yt,yn,dn),nt=Yt,xt=yn,Tt=dn)},setLocked:function(Yt){O=Yt},setClear:function(Yt){Pt!==Yt&&(i.clearStencil(Yt),Pt=Yt)},reset:function(){O=!1,ht=null,et=null,lt=null,pt=null,nt=null,xt=null,Tt=null,Pt=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,_=[],v=null,m=!1,p=null,b=null,I=null,S=null,T=null,M=null,E=null,x=new jt(0,0,0),A=0,L=!1,R=null,D=null,N=null,C=null,z=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,tt=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(U)[1]),X=tt>=1):U.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),X=tt>=2);let Y=null,Q={},_t=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),oe=new Ae().fromArray(_t),kt=new Ae().fromArray(Mt);function bt(O,ht,et,lt){let pt=new Uint8Array(4),nt=i.createTexture();i.bindTexture(O,nt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xt=0;xt<et;xt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(ht+xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return nt}let $={};$[i.TEXTURE_2D]=bt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=bt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=bt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=bt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(i.DEPTH_TEST),o.setFunc(ks),It(!1),Jt(Oc),K(i.CULL_FACE),Vt(ri);function K(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function it(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Et(O,ht){return u[O]!==ht?(i.bindFramebuffer(O,ht),u[O]=ht,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ht),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function ot(O,ht){let et=_,lt=!1;if(O){et=f.get(ht),et===void 0&&(et=[],f.set(ht,et));let pt=O.textures;if(et.length!==pt.length||et[0]!==i.COLOR_ATTACHMENT0){for(let nt=0,xt=pt.length;nt<xt;nt++)et[nt]=i.COLOR_ATTACHMENT0+nt;et.length=pt.length,lt=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,lt=!0);lt&&i.drawBuffers(et)}function ut(O){return v!==O?(i.useProgram(O),v=O,!0):!1}let Ht={[us]:i.FUNC_ADD,[id]:i.FUNC_SUBTRACT,[sd]:i.FUNC_REVERSE_SUBTRACT};Ht[rd]=i.MIN,Ht[od]=i.MAX;let Ut={[ad]:i.ZERO,[ld]:i.ONE,[cd]:i.SRC_COLOR,[kc]:i.SRC_ALPHA,[md]:i.SRC_ALPHA_SATURATE,[fd]:i.DST_COLOR,[ud]:i.DST_ALPHA,[hd]:i.ONE_MINUS_SRC_COLOR,[Gc]:i.ONE_MINUS_SRC_ALPHA,[pd]:i.ONE_MINUS_DST_COLOR,[dd]:i.ONE_MINUS_DST_ALPHA,[gd]:i.CONSTANT_COLOR,[_d]:i.ONE_MINUS_CONSTANT_COLOR,[xd]:i.CONSTANT_ALPHA,[vd]:i.ONE_MINUS_CONSTANT_ALPHA};function Vt(O,ht,et,lt,pt,nt,xt,Tt,Pt,Yt){if(O===ri){m===!0&&(it(i.BLEND),m=!1);return}if(m===!1&&(K(i.BLEND),m=!0),O!==nd){if(O!==p||Yt!==L){if((b!==us||T!==us)&&(i.blendEquation(i.FUNC_ADD),b=us,T=us),Yt)switch(O){case tr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bc:i.blendFunc(i.ONE,i.ONE);break;case zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xt("WebGLState: Invalid blending: ",O);break}else switch(O){case tr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zc:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vc:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",O);break}I=null,S=null,M=null,E=null,x.set(0,0,0),A=0,p=O,L=Yt}return}pt=pt||ht,nt=nt||et,xt=xt||lt,(ht!==b||pt!==T)&&(i.blendEquationSeparate(Ht[ht],Ht[pt]),b=ht,T=pt),(et!==I||lt!==S||nt!==M||xt!==E)&&(i.blendFuncSeparate(Ut[et],Ut[lt],Ut[nt],Ut[xt]),I=et,S=lt,M=nt,E=xt),(Tt.equals(x)===!1||Pt!==A)&&(i.blendColor(Tt.r,Tt.g,Tt.b,Pt),x.copy(Tt),A=Pt),p=O,L=!1}function Ft(O,ht){O.side===Ln?it(i.CULL_FACE):K(i.CULL_FACE);let et=O.side===rn;ht&&(et=!et),It(et),O.blending===tr&&O.transparent===!1?Vt(ri):Vt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let lt=O.stencilWrite;a.setTest(lt),lt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),xe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):it(i.SAMPLE_ALPHA_TO_COVERAGE)}function It(O){R!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),R=O)}function Jt(O){O!==ju?(K(i.CULL_FACE),O!==D&&(O===Oc?i.cullFace(i.BACK):O===td?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):it(i.CULL_FACE),D=O}function re(O){O!==N&&(X&&i.lineWidth(O),N=O)}function xe(O,ht,et){O?(K(i.POLYGON_OFFSET_FILL),(C!==ht||z!==et)&&(C=ht,z=et,o.getReversed()&&(ht=-ht),i.polygonOffset(ht,et))):it(i.POLYGON_OFFSET_FILL)}function $t(O){O?K(i.SCISSOR_TEST):it(i.SCISSOR_TEST)}function ne(O){O===void 0&&(O=i.TEXTURE0+W-1),Y!==O&&(i.activeTexture(O),Y=O)}function P(O,ht,et){et===void 0&&(Y===null?et=i.TEXTURE0+W-1:et=Y);let lt=Q[et];lt===void 0&&(lt={type:void 0,texture:void 0},Q[et]=lt),(lt.type!==O||lt.texture!==ht)&&(Y!==et&&(i.activeTexture(et),Y=et),i.bindTexture(O,ht||$[O]),lt.type=O,lt.texture=ht)}function te(){let O=Q[Y];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Ct(){try{i.compressedTexImage2D(...arguments)}catch(O){Xt("WebGLState:",O)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(O){Xt("WebGLState:",O)}}function g(){try{i.texSubImage2D(...arguments)}catch(O){Xt("WebGLState:",O)}}function B(){try{i.texSubImage3D(...arguments)}catch(O){Xt("WebGLState:",O)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Xt("WebGLState:",O)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Xt("WebGLState:",O)}}function st(){try{i.texStorage2D(...arguments)}catch(O){Xt("WebGLState:",O)}}function rt(){try{i.texStorage3D(...arguments)}catch(O){Xt("WebGLState:",O)}}function J(){try{i.texImage2D(...arguments)}catch(O){Xt("WebGLState:",O)}}function j(){try{i.texImage3D(...arguments)}catch(O){Xt("WebGLState:",O)}}function at(O){return d[O]!==void 0?d[O]:i.getParameter(O)}function Lt(O,ht){d[O]!==ht&&(i.pixelStorei(O,ht),d[O]=ht)}function dt(O){oe.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),oe.copy(O))}function ct(O){kt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),kt.copy(O))}function Rt(O,ht){let et=c.get(ht);et===void 0&&(et=new WeakMap,c.set(ht,et));let lt=et.get(O);lt===void 0&&(lt=i.getUniformBlockIndex(ht,O.name),et.set(O,lt))}function Bt(O,ht){let lt=c.get(ht).get(O);l.get(ht)!==lt&&(i.uniformBlockBinding(ht,lt,O.__bindingPointIndex),l.set(ht,lt))}function Ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},Y=null,Q={},u={},f=new WeakMap,_=[],v=null,m=!1,p=null,b=null,I=null,S=null,T=null,M=null,E=null,x=new jt(0,0,0),A=0,L=!1,R=null,D=null,N=null,C=null,z=null,oe.set(0,0,i.canvas.width,i.canvas.height),kt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:it,bindFramebuffer:Et,drawBuffers:ot,useProgram:ut,setBlending:Vt,setMaterial:Ft,setFlipSided:It,setCullFace:Jt,setLineWidth:re,setPolygonOffset:xe,setScissorTest:$t,activeTexture:ne,bindTexture:P,unbindTexture:te,compressedTexImage2D:Ct,compressedTexImage3D:w,texImage2D:J,texImage3D:j,pixelStorei:Lt,getParameter:at,updateUBOMapping:Rt,uniformBlockBinding:Bt,texStorage2D:st,texStorage3D:rt,texSubImage2D:g,texSubImage3D:B,compressedTexSubImage2D:k,compressedTexSubImage3D:Z,scissor:dt,viewport:ct,reset:Ot}}function Px(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,d=new Set,u,f=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,g){return _?new OffscreenCanvas(w,g):Pr("canvas")}function m(w,g,B){let k=1,Z=Ct(w);if((Z.width>B||Z.height>B)&&(k=B/Math.max(Z.width,Z.height)),k<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let st=Math.floor(k*Z.width),rt=Math.floor(k*Z.height);u===void 0&&(u=v(st,rt));let J=g?v(st,rt):u;return J.width=st,J.height=rt,J.getContext("2d").drawImage(w,0,0,st,rt),Gt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+st+"x"+rt+")."),J}else return"data"in w&&Gt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function p(w){return w.generateMipmaps}function b(w){i.generateMipmap(w)}function I(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(w,g,B,k,Z,st=!1){if(w!==null){if(i[w]!==void 0)return i[w];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let rt;k&&(rt=t.get("EXT_texture_norm16"),rt||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=g;if(g===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8),B===i.UNSIGNED_SHORT&&rt&&(J=rt.R16_EXT),B===i.SHORT&&rt&&(J=rt.R16_SNORM_EXT)),g===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),g===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8),B===i.UNSIGNED_SHORT&&rt&&(J=rt.RG16_EXT),B===i.SHORT&&rt&&(J=rt.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),g===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),g===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),g===i.RGB&&(B===i.UNSIGNED_SHORT&&rt&&(J=rt.RGB16_EXT),B===i.SHORT&&rt&&(J=rt.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),g===i.RGBA){let j=st?Ir:ue.getTransfer(Z);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=j===_e?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&rt&&(J=rt.RGBA16_EXT),B===i.SHORT&&rt&&(J=rt.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function T(w,g){let B;return w?g===null||g===Hn||g===nr?B=i.DEPTH24_STENCIL8:g===Dn?B=i.DEPTH32F_STENCIL8:g===er&&(B=i.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Hn||g===nr?B=i.DEPTH_COMPONENT24:g===Dn?B=i.DEPTH_COMPONENT32F:g===er&&(B=i.DEPTH_COMPONENT16),B}function M(w,g){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Xe&&w.minFilter!==Ye?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function E(w){let g=w.target;g.removeEventListener("dispose",E),A(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&d.delete(g)}function x(w){let g=w.target;g.removeEventListener("dispose",x),R(g)}function A(w){let g=n.get(w);if(g.__webglInit===void 0)return;let B=w.source,k=f.get(B);if(k){let Z=k[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&L(w),Object.keys(k).length===0&&f.delete(B)}n.remove(w)}function L(w){let g=n.get(w);i.deleteTexture(g.__webglTexture);let B=w.source,k=f.get(B);delete k[g.__cacheKey],o.memory.textures--}function R(w){let g=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let Z=0;Z<g.__webglFramebuffer[k].length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[k][Z]);else i.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)i.deleteFramebuffer(g.__webglFramebuffer[k]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let B=w.textures;for(let k=0,Z=B.length;k<Z;k++){let st=n.get(B[k]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),o.memory.textures--),n.remove(B[k])}n.remove(w)}let D=0;function N(){D=0}function C(){return D}function z(w){D=w}function W(){let w=D;return w>=s.maxTextures&&Gt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,w}function X(w){let g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function tt(w,g){let B=n.get(w);if(w.isVideoTexture&&P(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){let k=w.image;if(k===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{it(B,w,g);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+g)}function U(w,g){let B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){it(B,w,g);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+g)}function Y(w,g){let B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){it(B,w,g);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+g)}function Q(w,g){let B=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&B.__version!==w.version){Et(B,w,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+g)}let _t={[Gs]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[ma]:i.MIRRORED_REPEAT},Mt={[Xe]:i.NEAREST,[Md]:i.NEAREST_MIPMAP_NEAREST,[Zr]:i.NEAREST_MIPMAP_LINEAR,[Ye]:i.LINEAR,[ka]:i.LINEAR_MIPMAP_NEAREST,[Zi]:i.LINEAR_MIPMAP_LINEAR},oe={[Ad]:i.NEVER,[Pd]:i.ALWAYS,[Ed]:i.LESS,[Al]:i.LEQUAL,[Cd]:i.EQUAL,[El]:i.GEQUAL,[Rd]:i.GREATER,[Id]:i.NOTEQUAL};function kt(w,g){if(g.type===Dn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ye||g.magFilter===ka||g.magFilter===Zr||g.magFilter===Zi||g.minFilter===Ye||g.minFilter===ka||g.minFilter===Zr||g.minFilter===Zi)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,_t[g.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,_t[g.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,_t[g.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Mt[g.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Mt[g.minFilter]),g.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,oe[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Xe||g.minFilter!==Zr&&g.minFilter!==Zi||g.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function bt(w,g){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",E));let k=g.source,Z=f.get(k);Z===void 0&&(Z={},f.set(k,Z));let st=X(g);if(st!==w.__cacheKey){Z[st]===void 0&&(Z[st]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Z[st].usedTimes++;let rt=Z[w.__cacheKey];rt!==void 0&&(Z[w.__cacheKey].usedTimes--,rt.usedTimes===0&&L(g)),w.__cacheKey=st,w.__webglTexture=Z[st].texture}return B}function $(w,g,B){return Math.floor(Math.floor(w/B)/g)}function K(w,g,B,k){let st=w.updateRanges;if(st.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,B,k,g.data);else{st.sort((Lt,dt)=>Lt.start-dt.start);let rt=0;for(let Lt=1;Lt<st.length;Lt++){let dt=st[rt],ct=st[Lt],Rt=dt.start+dt.count,Bt=$(ct.start,g.width,4),Ot=$(dt.start,g.width,4);ct.start<=Rt+1&&Bt===Ot&&$(ct.start+ct.count-1,g.width,4)===Bt?dt.count=Math.max(dt.count,ct.start+ct.count-dt.start):(++rt,st[rt]=ct)}st.length=rt+1;let J=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),at=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Lt=0,dt=st.length;Lt<dt;Lt++){let ct=st[Lt],Rt=Math.floor(ct.start/4),Bt=Math.ceil(ct.count/4),Ot=Rt%g.width,O=Math.floor(Rt/g.width),ht=Bt,et=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,Ot,O,ht,et,B,k,g.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,at)}}function it(w,g,B){let k=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=i.TEXTURE_3D);let Z=bt(w,g),st=g.source;e.bindTexture(k,w.__webglTexture,i.TEXTURE0+B);let rt=n.get(st);if(st.version!==rt.__version||Z===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let et=ue.getPrimaries(ue.workingColorSpace),lt=g.colorSpace===bi?null:ue.getPrimaries(g.colorSpace),pt=g.colorSpace===bi||et===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let j=m(g.image,!1,s.maxTextureSize);j=te(g,j);let at=r.convert(g.format,g.colorSpace),Lt=r.convert(g.type),dt=S(g.internalFormat,at,Lt,g.normalized,g.colorSpace,g.isVideoTexture);kt(k,g);let ct,Rt=g.mipmaps,Bt=g.isVideoTexture!==!0,Ot=rt.__version===void 0||Z===!0,O=st.dataReady,ht=M(g,j);if(g.isDepthTexture)dt=T(g.format===Ji,g.type),Ot&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,dt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,dt,j.width,j.height,0,at,Lt,null));else if(g.isDataTexture)if(Rt.length>0){Bt&&Ot&&e.texStorage2D(i.TEXTURE_2D,ht,dt,Rt[0].width,Rt[0].height);for(let et=0,lt=Rt.length;et<lt;et++)ct=Rt[et],Bt?O&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,ct.width,ct.height,at,Lt,ct.data):e.texImage2D(i.TEXTURE_2D,et,dt,ct.width,ct.height,0,at,Lt,ct.data);g.generateMipmaps=!1}else Bt?(Ot&&e.texStorage2D(i.TEXTURE_2D,ht,dt,j.width,j.height),O&&K(g,j,at,Lt)):e.texImage2D(i.TEXTURE_2D,0,dt,j.width,j.height,0,at,Lt,j.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Bt&&Ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,dt,Rt[0].width,Rt[0].height,j.depth);for(let et=0,lt=Rt.length;et<lt;et++)if(ct=Rt[et],g.format!==Nn)if(at!==null)if(Bt){if(O)if(g.layerUpdates.size>0){let pt=ch(ct.width,ct.height,g.format,g.type);for(let nt of g.layerUpdates){let xt=ct.data.subarray(nt*pt/ct.data.BYTES_PER_ELEMENT,(nt+1)*pt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,nt,ct.width,ct.height,1,at,xt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,ct.width,ct.height,j.depth,at,ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,dt,ct.width,ct.height,j.depth,0,ct.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,ct.width,ct.height,j.depth,at,Lt,ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,dt,ct.width,ct.height,j.depth,0,at,Lt,ct.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Bt&&Ot&&e.texStorage2D(i.TEXTURE_2D,ht,dt,Rt[0].width,Rt[0].height);for(let et=0,lt=Rt.length;et<lt;et++)ct=Rt[et],g.format!==Nn?at!==null?Bt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,ct.width,ct.height,at,ct.data):e.compressedTexImage2D(i.TEXTURE_2D,et,dt,ct.width,ct.height,0,ct.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?O&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,ct.width,ct.height,at,Lt,ct.data):e.texImage2D(i.TEXTURE_2D,et,dt,ct.width,ct.height,0,at,Lt,ct.data)}else if(g.isDataArrayTexture)if(Bt){if(Ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,dt,j.width,j.height,j.depth),O)if(g.layerUpdates.size>0){let et=ch(j.width,j.height,g.format,g.type);for(let lt of g.layerUpdates){let pt=j.data.subarray(lt*et/j.data.BYTES_PER_ELEMENT,(lt+1)*et/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,j.width,j.height,1,at,Lt,pt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,at,Lt,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,dt,j.width,j.height,j.depth,0,at,Lt,j.data);else if(g.isData3DTexture)Bt?(Ot&&e.texStorage3D(i.TEXTURE_3D,ht,dt,j.width,j.height,j.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,at,Lt,j.data)):e.texImage3D(i.TEXTURE_3D,0,dt,j.width,j.height,j.depth,0,at,Lt,j.data);else if(g.isFramebufferTexture){if(Ot)if(Bt)e.texStorage2D(i.TEXTURE_2D,ht,dt,j.width,j.height);else{let et=j.width,lt=j.height;for(let pt=0;pt<ht;pt++)e.texImage2D(i.TEXTURE_2D,pt,dt,et,lt,0,at,Lt,null),et>>=1,lt>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let et=i.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),j.parentNode!==et){et.appendChild(j),d.add(g),et.onpaint=lt=>{let pt=lt.changedElements;for(let nt of d)pt.includes(nt.image)&&(nt.needsUpdate=!0)},et.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let pt=i.RGBA,nt=i.RGBA,xt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pt,nt,xt,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Rt.length>0){if(Bt&&Ot){let et=Ct(Rt[0]);e.texStorage2D(i.TEXTURE_2D,ht,dt,et.width,et.height)}for(let et=0,lt=Rt.length;et<lt;et++)ct=Rt[et],Bt?O&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,at,Lt,ct):e.texImage2D(i.TEXTURE_2D,et,dt,at,Lt,ct);g.generateMipmaps=!1}else if(Bt){if(Ot){let et=Ct(j);e.texStorage2D(i.TEXTURE_2D,ht,dt,et.width,et.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at,Lt,j)}else e.texImage2D(i.TEXTURE_2D,0,dt,at,Lt,j);p(g)&&b(k),rt.__version=st.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Et(w,g,B){if(g.image.length!==6)return;let k=bt(w,g),Z=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);let st=n.get(Z);if(Z.version!==st.__version||k===!0){e.activeTexture(i.TEXTURE0+B);let rt=ue.getPrimaries(ue.workingColorSpace),J=g.colorSpace===bi?null:ue.getPrimaries(g.colorSpace),j=g.colorSpace===bi||rt===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let at=g.isCompressedTexture||g.image[0].isCompressedTexture,Lt=g.image[0]&&g.image[0].isDataTexture,dt=[];for(let nt=0;nt<6;nt++)!at&&!Lt?dt[nt]=m(g.image[nt],!0,s.maxCubemapSize):dt[nt]=Lt?g.image[nt].image:g.image[nt],dt[nt]=te(g,dt[nt]);let ct=dt[0],Rt=r.convert(g.format,g.colorSpace),Bt=r.convert(g.type),Ot=S(g.internalFormat,Rt,Bt,g.normalized,g.colorSpace),O=g.isVideoTexture!==!0,ht=st.__version===void 0||k===!0,et=Z.dataReady,lt=M(g,ct);kt(i.TEXTURE_CUBE_MAP,g);let pt;if(at){O&&ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Ot,ct.width,ct.height);for(let nt=0;nt<6;nt++){pt=dt[nt].mipmaps;for(let xt=0;xt<pt.length;xt++){let Tt=pt[xt];g.format!==Nn?Rt!==null?O?et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,0,0,Tt.width,Tt.height,Rt,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,Ot,Tt.width,Tt.height,0,Tt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,0,0,Tt.width,Tt.height,Rt,Bt,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,Ot,Tt.width,Tt.height,0,Rt,Bt,Tt.data)}}}else{if(pt=g.mipmaps,O&&ht){pt.length>0&&lt++;let nt=Ct(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Ot,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Lt){O?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,dt[nt].width,dt[nt].height,Rt,Bt,dt[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ot,dt[nt].width,dt[nt].height,0,Rt,Bt,dt[nt].data);for(let xt=0;xt<pt.length;xt++){let Pt=pt[xt].image[nt].image;O?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,0,0,Pt.width,Pt.height,Rt,Bt,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,Ot,Pt.width,Pt.height,0,Rt,Bt,Pt.data)}}else{O?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Rt,Bt,dt[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ot,Rt,Bt,dt[nt]);for(let xt=0;xt<pt.length;xt++){let Tt=pt[xt];O?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,0,0,Rt,Bt,Tt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,Ot,Rt,Bt,Tt.image[nt])}}}p(g)&&b(i.TEXTURE_CUBE_MAP),st.__version=Z.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function ot(w,g,B,k,Z,st){let rt=r.convert(B.format,B.colorSpace),J=r.convert(B.type),j=S(B.internalFormat,rt,J,B.normalized,B.colorSpace),at=n.get(g),Lt=n.get(B);if(Lt.__renderTarget=g,!at.__hasExternalTextures){let dt=Math.max(1,g.width>>st),ct=Math.max(1,g.height>>st);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,st,j,dt,ct,g.depth,0,rt,J,null):e.texImage2D(Z,st,j,dt,ct,0,rt,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),ne(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,Z,Lt.__webglTexture,0,$t(g)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,Z,Lt.__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(w,g,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),g.depthBuffer){let k=g.depthTexture,Z=k&&k.isDepthTexture?k.type:null,st=T(g.stencilBuffer,Z),rt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ne(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t(g),st,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t(g),st,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,st,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,w)}else{let k=g.textures;for(let Z=0;Z<k.length;Z++){let st=k[Z],rt=r.convert(st.format,st.colorSpace),J=r.convert(st.type),j=S(st.internalFormat,rt,J,st.normalized,st.colorSpace);ne(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t(g),j,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t(g),j,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,j,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ht(w,g,B){let k=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(g.depthTexture);if(Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,g.depthTexture.addEventListener("dispose",E)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),kt(i.TEXTURE_CUBE_MAP,g.depthTexture);let at=r.convert(g.depthTexture.format),Lt=r.convert(g.depthTexture.type),dt;g.depthTexture.format===ni?dt=i.DEPTH_COMPONENT24:g.depthTexture.format===Ji&&(dt=i.DEPTH24_STENCIL8);for(let ct=0;ct<6;ct++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,dt,g.width,g.height,0,at,Lt,null)}}else tt(g.depthTexture,0);let st=Z.__webglTexture,rt=$t(g),J=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,j=g.depthTexture.format===Ji?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===ni)ne(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,J,st,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,j,J,st,0);else if(g.depthTexture.format===Ji)ne(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,J,st,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,j,J,st,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ut(w){let g=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){let k=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){let Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",Z)};k.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=k}if(w.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let k=0;k<6;k++)Ht(g.__webglFramebuffer[k],w,k);else{let k=w.texture.mipmaps;k&&k.length>0?Ht(g.__webglFramebuffer[0],w,0):Ht(g.__webglFramebuffer,w,0)}else if(B){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=i.createRenderbuffer(),ut(g.__webglDepthbuffer[k],w,!1);else{let Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=g.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,st)}}else{let k=w.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),ut(g.__webglDepthbuffer,w,!1);else{let Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,st)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(w,g,B){let k=n.get(w);g!==void 0&&ot(k.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ut(w)}function Ft(w){let g=w.texture,B=n.get(w),k=n.get(g);w.addEventListener("dispose",x);let Z=w.textures,st=w.isWebGLCubeRenderTarget===!0,rt=Z.length>1;if(rt||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=g.version,o.memory.textures++),st){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let j=0;j<g.mipmaps.length;j++)B.__webglFramebuffer[J][j]=i.createFramebuffer()}else B.__webglFramebuffer[J]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<g.mipmaps.length;J++)B.__webglFramebuffer[J]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(rt)for(let J=0,j=Z.length;J<j;J++){let at=n.get(Z[J]);at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&ne(w)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let j=Z[J];B.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[J]);let at=r.convert(j.format,j.colorSpace),Lt=r.convert(j.type),dt=S(j.internalFormat,at,Lt,j.normalized,j.colorSpace,w.isXRRenderTarget===!0),ct=$t(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,dt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,B.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),kt(i.TEXTURE_CUBE_MAP,g);for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0)for(let j=0;j<g.mipmaps.length;j++)ot(B.__webglFramebuffer[J][j],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,j);else ot(B.__webglFramebuffer[J],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(g)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){for(let J=0,j=Z.length;J<j;J++){let at=Z[J],Lt=n.get(at),dt=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(dt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,Lt.__webglTexture),kt(dt,at),ot(B.__webglFramebuffer,w,at,i.COLOR_ATTACHMENT0+J,dt,0),p(at)&&b(dt)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,k.__webglTexture),kt(J,g),g.mipmaps&&g.mipmaps.length>0)for(let j=0;j<g.mipmaps.length;j++)ot(B.__webglFramebuffer[j],w,g,i.COLOR_ATTACHMENT0,J,j);else ot(B.__webglFramebuffer,w,g,i.COLOR_ATTACHMENT0,J,0);p(g)&&b(J),e.unbindTexture()}w.depthBuffer&&Ut(w)}function It(w){let g=w.textures;for(let B=0,k=g.length;B<k;B++){let Z=g[B];if(p(Z)){let st=I(w),rt=n.get(Z).__webglTexture;e.bindTexture(st,rt),b(st),e.unbindTexture()}}}let Jt=[],re=[];function xe(w){if(w.samples>0){if(ne(w)===!1){let g=w.textures,B=w.width,k=w.height,Z=i.COLOR_BUFFER_BIT,st=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=n.get(w),J=g.length>1;if(J)for(let at=0;at<g.length;at++)e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer);let j=w.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let at=0;at<g.length;at++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,rt.__webglColorRenderbuffer[at]);let Lt=n.get(g[at]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,B,k,0,0,B,k,Z,i.NEAREST),l===!0&&(Jt.length=0,re.length=0,Jt.push(i.COLOR_ATTACHMENT0+at),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(Jt.push(st),re.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Jt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let at=0;at<g.length;at++){e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,rt.__webglColorRenderbuffer[at]);let Lt=n.get(g[at]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let g=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function $t(w){return Math.min(s.maxSamples,w.samples)}function ne(w){let g=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function P(w){let g=o.render.frame;h.get(w)!==g&&(h.set(w,g),w.update())}function te(w,g){let B=w.colorSpace,k=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Rr&&B!==bi&&(ue.getTransfer(B)===_e?(k!==Nn||Z!==un)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",B)),g}function Ct(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=N,this.getTextureUnits=C,this.setTextureUnits=z,this.setTexture2D=tt,this.setTexture2DArray=U,this.setTexture3D=Y,this.setTextureCube=Q,this.rebindTextures=Vt,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=ne,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Lx(i,t){function e(n,s=bi){let r,o=ue.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===Ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===th)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kc)return i.BYTE;if(n===Qc)return i.SHORT;if(n===er)return i.UNSIGNED_SHORT;if(n===Ga)return i.INT;if(n===Hn)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===Wn)return i.HALF_FLOAT;if(n===eh)return i.ALPHA;if(n===nh)return i.RGB;if(n===Nn)return i.RGBA;if(n===ni)return i.DEPTH_COMPONENT;if(n===Ji)return i.DEPTH_STENCIL;if(n===Xa)return i.RED;if(n===qa)return i.RED_INTEGER;if(n===Ki)return i.RG;if(n===Ya)return i.RG_INTEGER;if(n===$a)return i.RGBA_INTEGER;if(n===Jr||n===Kr||n===Qr||n===jr)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Za||n===Ja||n===Ka||n===Qa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ja||n===tl||n===el||n===nl||n===il||n===to||n===sl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ja||n===tl)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===el)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===nl)return r.COMPRESSED_R11_EAC;if(n===il)return r.COMPRESSED_SIGNED_R11_EAC;if(n===to)return r.COMPRESSED_RG11_EAC;if(n===sl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===rl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ol)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===al)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ll)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ul)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ml)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_l)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vl||n===yl||n===Sl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===vl)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ml||n===bl||n===eo||n===Tl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ml)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ch=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Vr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new xn({vertexShader:Dx,fragmentShader:Nx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ie(new hs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rh=class extends ii{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,_=null,v=typeof XRWebGLBinding<"u",m=new Ch,p={},b=e.getContextAttributes(),I=null,S=null,T=[],M=[],E=new he,x=null,A=null,L=new Ke;L.viewport=new Ae;let R=new Ke;R.viewport=new Ae;let D=[L,R],N=new Oa,C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let K=T[$];return K===void 0&&(K=new Ys,T[$]=K),K.getTargetRaySpace()},this.getControllerGrip=function($){let K=T[$];return K===void 0&&(K=new Ys,T[$]=K),K.getGripSpace()},this.getHand=function($){let K=T[$];return K===void 0&&(K=new Ys,T[$]=K),K.getHandSpace()};function W($){let K=M.indexOf($.inputSource);if(K===-1)return;let it=T[K];it!==void 0&&(it.update($.inputSource,$.frame,c||o),it.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",tt);for(let $=0;$<T.length;$++){let K=M[$];K!==null&&(M[$]=null,T[$].disconnect(K))}C=null,z=null,m.reset();for(let $ in p)delete p[$];if(t.setRenderTarget(I),f=null,u=null,d=null,s=null,S=null,bt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(E.width,E.height,!1),A!==null){let $=A.camera;$.fov=A.fov,$.zoom=A.zoom,$.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(I=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",X),s.addEventListener("inputsourceschange",tt),b.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(E),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,Et=null,ot=null;b.depth&&(ot=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=b.stencil?Ji:ni,Et=b.stencil?nr:Hn);let ut={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new cn(u.textureWidth,u.textureHeight,{format:Nn,type:un,depthTexture:new Gi(u.textureWidth,u.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let it={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new cn(f.framebufferWidth,f.framebufferHeight,{format:Nn,type:un,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),bt.setContext(s),bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt($){for(let K=0;K<$.removed.length;K++){let it=$.removed[K],Et=M.indexOf(it);Et>=0&&(M[Et]=null,T[Et].disconnect(it))}for(let K=0;K<$.added.length;K++){let it=$.added[K],Et=M.indexOf(it);if(Et===-1){for(let ut=0;ut<T.length;ut++)if(ut>=M.length){M.push(it),Et=ut;break}else if(M[ut]===null){M[ut]=it,Et=ut;break}if(Et===-1)break}let ot=T[Et];ot&&ot.connect(it)}}let U=new V,Y=new V;function Q($,K,it){U.setFromMatrixPosition(K.matrixWorld),Y.setFromMatrixPosition(it.matrixWorld);let Et=U.distanceTo(Y),ot=K.projectionMatrix.elements,ut=it.projectionMatrix.elements,Ht=ot[14]/(ot[10]-1),Ut=ot[14]/(ot[10]+1),Vt=(ot[9]+1)/ot[5],Ft=(ot[9]-1)/ot[5],It=(ot[8]-1)/ot[0],Jt=(ut[8]+1)/ut[0],re=Ht*It,xe=Ht*Jt,$t=Et/(-It+Jt),ne=$t*-It;if(K.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ne),$.translateZ($t),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ot[10]===-1)$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let P=Ht+$t,te=Ut+$t,Ct=re-ne,w=xe+(Et-ne),g=Vt*Ut/te*P,B=Ft*Ut/te*P;$.projectionMatrix.makePerspective(Ct,w,g,B,P,te),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function _t($,K){K===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(K.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let K=$.near,it=$.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(it=m.depthFar)),N.near=R.near=L.near=K,N.far=R.far=L.far=it,(C!==N.near||z!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),C=N.near,z=N.far),N.layers.mask=$.layers.mask|6,L.layers.mask=N.layers.mask&-5,R.layers.mask=N.layers.mask&-3;let Et=$.parent,ot=N.cameras;_t(N,Et);for(let ut=0;ut<ot.length;ut++)_t(ot[ut],Et);ot.length===2?Q(N,L,R):N.projectionMatrix.copy(L.projectionMatrix),A===null&&$.isPerspectiveCamera&&(A={camera:$,fov:$.fov,zoom:$.zoom}),Mt($,N,Et)};function Mt($,K,it){it===null?$.matrix.copy(K.matrixWorld):($.matrix.copy(it.matrixWorld),$.matrix.invert(),$.matrix.multiply(K.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Xs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function($){return p[$]};let oe=null;function kt($,K){if(h=K.getViewerPose(c||o),_=K,h!==null){let it=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Et=!1;it.length!==N.cameras.length&&(N.cameras.length=0,Et=!0);for(let Ut=0;Ut<it.length;Ut++){let Vt=it[Ut],Ft=null;if(f!==null)Ft=f.getViewport(Vt);else{let Jt=d.getViewSubImage(u,Vt);Ft=Jt.viewport,Ut===0&&(t.setRenderTargetTextures(S,Jt.colorTexture,Jt.depthStencilTexture),t.setRenderTarget(S))}let It=D[Ut];It===void 0&&(It=new Ke,It.layers.enable(Ut),It.viewport=new Ae,D[Ut]=It),It.matrix.fromArray(Vt.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(Vt.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),Ut===0&&(N.matrix.copy(It.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Et===!0&&N.cameras.push(It)}let ot=s.enabledFeatures;if(ot&&ot.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let Ut=d.getDepthInformation(it[0]);Ut&&Ut.isValid&&Ut.texture&&m.init(Ut,s.renderState)}if(ot&&ot.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let Ut=0;Ut<it.length;Ut++){let Vt=it[Ut].camera;if(Vt){let Ft=p[Vt];Ft||(Ft=new Vr,p[Vt]=Ft);let It=d.getCameraImage(Vt);Ft.sourceTexture=It}}}}for(let it=0;it<T.length;it++){let Et=M[it],ot=T[it];Et!==null&&ot!==void 0&&ot.update(Et,K,c||o)}oe&&oe($,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}let bt=new cf;bt.setAnimationLoop(kt),this.setAnimationLoop=function($){oe=$},this.dispose=function(){}}},Ux=new Me,mf=new Zt;mf.set(-1,0,0,0,1,0,0,0,1);function Fx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,oh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,I,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,I):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),I=b.envMap,S=b.envMapRotation;I&&(m.envMap.value=I,m.envMapRotation.value.setFromMatrix4(Ux.makeRotationFromEuler(S)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(mf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,I){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=I*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ox(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,T){let M=T.program;n.uniformBlockBinding(S,M)}function c(S,T){let M=s[S.id];M===void 0&&(m(S),M=h(S),s[S.id]=M,S.addEventListener("dispose",b));let E=T.program;n.updateUBOMapping(S,E);let x=t.render.frame;r[S.id]!==x&&(u(S),r[S.id]=x)}function h(S){let T=d();S.__bindingPointIndex=T;let M=i.createBuffer(),E=S.__size,x=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,E,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,M),M}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let T=s[S.id],M=S.uniforms,E=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let x=0,A=M.length;x<A;x++){let L=M[x];if(Array.isArray(L))for(let R=0,D=L.length;R<D;R++)f(L[R],x,R,E);else f(L,x,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,T,M,E){if(v(S,T,M,E)===!0){let x=S.__offset,A=S.value;if(Array.isArray(A)){let L=0;for(let R=0;R<A.length;R++){let D=A[R],N=p(D);_(D,S.__data,L),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(L+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(A,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,S.__data)}}function _(S,T,M){typeof S=="number"||typeof S=="boolean"?T[0]=S:S.isMatrix3?(T[0]=S.elements[0],T[1]=S.elements[1],T[2]=S.elements[2],T[3]=0,T[4]=S.elements[3],T[5]=S.elements[4],T[6]=S.elements[5],T[7]=0,T[8]=S.elements[6],T[9]=S.elements[7],T[10]=S.elements[8],T[11]=0):ArrayBuffer.isView(S)?T.set(new S.constructor(S.buffer,S.byteOffset,T.length)):S.toArray(T,M)}function v(S,T,M,E){let x=S.value,A=T+"_"+M;if(E[A]===void 0)return typeof x=="number"||typeof x=="boolean"?E[A]=x:ArrayBuffer.isView(x)?E[A]=x.slice():E[A]=x.clone(),!0;{let L=E[A];if(typeof x=="number"||typeof x=="boolean"){if(L!==x)return E[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(L.equals(x)===!1)return L.copy(x),!0}}return!1}function m(S){let T=S.uniforms,M=0,E=16;for(let A=0,L=T.length;A<L;A++){let R=Array.isArray(T[A])?T[A]:[T[A]];for(let D=0,N=R.length;D<N;D++){let C=R[D],z=Array.isArray(C.value)?C.value:[C.value];for(let W=0,X=z.length;W<X;W++){let tt=z[W],U=p(tt),Y=M%E,Q=Y%U.boundary,_t=Y+Q;M+=Q,_t!==0&&E-_t<U.storage&&(M+=E-_t),C.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=M,M+=U.storage}}}let x=M%E;return x>0&&(M+=E-x),S.__size=M,S.__cache={},this}function p(S){let T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",S),T}function b(S){let T=S.target;T.removeEventListener("dispose",b);let M=o.indexOf(T.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function I(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:I}}var Bx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),oi=null;function zx(){return oi===null&&(oi=new Or(Bx,16,16,Ki,Wn),oi.name="DFG_LUT",oi.minFilter=Ye,oi.magFilter=Ye,oi.wrapS=ei,oi.wrapT=ei,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}var Ll=class{constructor(t={}){let{canvas:e=Dd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=un}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let v=f,m=new Set([$a,Ya,qa]),p=new Set([un,Hn,er,nr,Ha,Wa]),b=new Uint32Array(4),I=new Int32Array(4),S=new V,T=null,M=null,E=[],x=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,R=!1,D=null,N=null,C=null,z=null;this._outputColorSpace=en;let W=0,X=0,tt=null,U=-1,Y=null,Q=new Ae,_t=new Ae,Mt=null,oe=new jt(0),kt=0,bt=e.width,$=e.height,K=1,it=null,Et=null,ot=new Ae(0,0,bt,$),ut=new Ae(0,0,bt,$),Ht=!1,Ut=new Zs,Vt=!1,Ft=!1,It=new Me,Jt=new V,re=new Ae,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function ne(){return tt===null?K:1}let P=n;function te(y,F){return e.getContext(y,F)}let Ct,w,g,B,k,Z,st,rt,J,j,at,Lt,dt,ct,Rt,Bt,Ot,O,ht,et,lt,pt,nt;try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Pt,!1),e.addEventListener("webglcontextrestored",Yt,!1),e.addEventListener("webglcontextcreationerror",yn,!1),P===null){let F="webgl2";if(P=te(F,y),P===null)throw te(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}xt()}catch(y){throw e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",yn,!1),Xt("WebGLRenderer: "+y.message),y}function xt(){Ct=new q0(P),Ct.init(),lt=new Lx(P,Ct),w=new F0(P,Ct,t,lt),g=new Ix(P,Ct),w.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),N=P.createFramebuffer(),C=P.createFramebuffer(),z=P.createFramebuffer(),B=new Z0(P),k=new gx,Z=new Px(P,Ct,g,k,w,lt,B),st=new X0(L),rt=new Kp(P),pt=new N0(P,rt),J=new Y0(P,rt,B,pt),j=new K0(P,J,rt,pt,B),O=new J0(P,w,Z),Rt=new O0(k),at=new mx(L,st,Ct,w,pt,Rt),Lt=new Fx(L,k),dt=new xx,ct=new Tx(Ct),Ot=new D0(L,st,g,j,_,l),Bt=new Rx(L,j,w),nt=new Ox(P,B,w,g),ht=new U0(P,Ct,B),et=new $0(P,Ct,B),B.programs=at.programs,L.capabilities=w,L.extensions=Ct,L.properties=k,L.renderLists=dt,L.shadowMap=Bt,L.state=g,L.info=B}v!==un&&(A=new j0(v,e.width,e.height,a,s,r));let Tt=new Rh(L,P);this.xr=Tt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let y=Ct.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Ct.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(y){y!==void 0&&(K=y,this.setSize(bt,$,!1))},this.getSize=function(y){return y.set(bt,$)},this.setSize=function(y,F,q=!0){if(Tt.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}bt=y,$=F,e.width=Math.floor(y*K),e.height=Math.floor(F*K),q===!0&&(e.style.width=y+"px",e.style.height=F+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(bt*K,$*K).floor()},this.setDrawingBufferSize=function(y,F,q){bt=y,$=F,K=q,e.width=Math.floor(y*q),e.height=Math.floor(F*q),this.setViewport(0,0,y,F)},this.setEffects=function(y){if(v===un){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let F=0;F<y.length;F++)if(y[F].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(Q)},this.getViewport=function(y){return y.copy(ot)},this.setViewport=function(y,F,q,G){y.isVector4?ot.set(y.x,y.y,y.z,y.w):ot.set(y,F,q,G),g.viewport(Q.copy(ot).multiplyScalar(K).round())},this.getScissor=function(y){return y.copy(ut)},this.setScissor=function(y,F,q,G){y.isVector4?ut.set(y.x,y.y,y.z,y.w):ut.set(y,F,q,G),g.scissor(_t.copy(ut).multiplyScalar(K).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(y){g.setScissorTest(Ht=y)},this.setOpaqueSort=function(y){it=y},this.setTransparentSort=function(y){Et=y},this.getClearColor=function(y){return y.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,q=!0){let G=0;if(y){let H=!1;if(tt!==null){let gt=tt.texture.format;H=m.has(gt)}if(H){let gt=tt.texture.type,St=p.has(gt),mt=Ot.getClearColor(),wt=Ot.getClearAlpha(),Dt=mt.r,ie=mt.g,ae=mt.b;St?(b[0]=Dt,b[1]=ie,b[2]=ae,b[3]=wt,P.clearBufferuiv(P.COLOR,0,b)):(I[0]=Dt,I[1]=ie,I[2]=ae,I[3]=wt,P.clearBufferiv(P.COLOR,0,I))}else G|=P.COLOR_BUFFER_BIT}F&&(G|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),D=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",yn,!1),Ot.dispose(),dt.dispose(),ct.dispose(),k.dispose(),st.dispose(),j.dispose(),pt.dispose(),nt.dispose(),at.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",Uh),Tt.removeEventListener("sessionend",Fh),Qi.stop()};function Pt(y){y.preventDefault(),sh("WebGLRenderer: Context Lost."),R=!0}function Yt(){sh("WebGLRenderer: Context Restored."),R=!1;let y=B.autoReset,F=Bt.enabled,q=Bt.autoUpdate,G=Bt.needsUpdate,H=Bt.type;xt(),B.autoReset=y,Bt.enabled=F,Bt.autoUpdate=q,Bt.needsUpdate=G,Bt.type=H}function yn(y){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function dn(y){let F=y.target;F.removeEventListener("dispose",dn),Mf(F)}function Mf(y){bf(y),k.remove(y)}function bf(y){let F=k.get(y).programs;F!==void 0&&(F.forEach(function(q){at.releaseProgram(q)}),y.isShaderMaterial&&at.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,q,G,H,gt){F===null&&(F=xe);let St=H.isMesh&&H.matrixWorld.determinantAffine()<0,mt=Af(y,F,q,G,H);g.setMaterial(G,St);let wt=q.index,Dt=1;if(G.wireframe===!0){if(wt=J.getWireframeAttribute(q),wt===void 0)return;Dt=2}let ie=q.drawRange,ae=q.attributes.position,At=ie.start*Dt,me=(ie.start+ie.count)*Dt;gt!==null&&(At=Math.max(At,gt.start*Dt),me=Math.min(me,(gt.start+gt.count)*Dt)),wt!==null?(At=Math.max(At,0),me=Math.min(me,wt.count)):ae!=null&&(At=Math.max(At,0),me=Math.min(me,ae.count));let De=me-At;if(De<0||De===1/0)return;pt.setup(H,G,mt,q,wt);let be,ye=ht;if(wt!==null&&(be=rt.get(wt),ye=et,ye.setIndex(be)),H.isMesh)G.wireframe===!0?(g.setLineWidth(G.wireframeLinewidth*ne()),ye.setMode(P.LINES)):ye.setMode(P.TRIANGLES);else if(H.isLine){let $e=G.linewidth;$e===void 0&&($e=1),g.setLineWidth($e*ne()),H.isLineSegments?ye.setMode(P.LINES):H.isLineLoop?ye.setMode(P.LINE_LOOP):ye.setMode(P.LINE_STRIP)}else H.isPoints?ye.setMode(P.POINTS):H.isSprite&&ye.setMode(P.TRIANGLES);if(H.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))ye.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let $e=H._multiDrawStarts,yt=H._multiDrawCounts,je=H._multiDrawCount,pe=wt?rt.get(wt).bytesPerElement:1,Sn=k.get(G).currentProgram.getUniforms();for(let Xn=0;Xn<je;Xn++)Sn.setValue(P,"_gl_DrawID",Xn),ye.render($e[Xn]/pe,yt[Xn])}else if(H.isInstancedMesh)ye.renderInstances(At,De,H.count);else if(q.isInstancedBufferGeometry){let $e=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,yt=Math.min(q.instanceCount,$e);ye.renderInstances(At,De,yt)}else ye.render(At,De)};function Nh(y,F,q,G){D!==null&&y.isNodeMaterial&&D.setObject(G,y),Vt===!0&&Rt.setState(y,q,!1),y.transparent===!0&&y.side===Ln&&y.forceSinglePass===!1?(y.side=rn,y.needsUpdate=!0,ho(y,F,G),y.side=Yi,y.needsUpdate=!0,ho(y,F,G),y.side=Ln):ho(y,F,G)}this.compile=function(y,F,q=null){q===null&&(q=y),D!==null&&D.renderStart(y,F,q),M=ct.get(q),M.init(F),x.push(M),q.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(M.pushLight(H),H.castShadow&&M.pushShadow(H))}),y!==q&&y.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(M.pushLight(H),H.castShadow&&M.pushShadow(H))}),M.setupLights(),D!==null&&D.updateLights(M.state.lightsArray),Ft=this.localClippingEnabled,Vt=Rt.init(this.clippingPlanes,Ft),Vt===!0&&Rt.setGlobalState(this.clippingPlanes,F),D!==null&&Bt.render(M.state.shadowsArray,q,F);let G=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let gt=H.material;if(gt)if(Array.isArray(gt))for(let St=0;St<gt.length;St++){let mt=gt[St];Nh(mt,q,F,H),G.add(mt)}else Nh(gt,q,F,H),G.add(gt)}),M=x.pop(),D!==null&&D.renderEnd(),G},this.compileAsync=function(y,F,q=null){let G=this.compile(y,F,q);return new Promise(H=>{function gt(){if(G.forEach(function(St){let wt=k.get(St).currentProgram;(wt===void 0||wt.isReady())&&G.delete(St)}),G.size===0){H(y);return}setTimeout(gt,10)}Ct.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Ol=null;function Tf(y){Ol&&Ol(y)}function Uh(){Qi.stop()}function Fh(){Qi.start()}let Qi=new cf;Qi.setAnimationLoop(Tf),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(y){Ol=y,Tt.setAnimationLoop(y),y===null?Qi.stop():Qi.start()},Tt.addEventListener("sessionstart",Uh),Tt.addEventListener("sessionend",Fh),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;D!==null&&D.renderStart(y,F);let q=Tt.enabled===!0&&Tt.isPresenting===!0,G=A!==null&&(tt===null||q)&&A.begin(L,tt);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(F),F=Tt.getCamera()),y.isScene===!0&&y.onBeforeRender(L,y,F,tt),M=ct.get(y,x.length),M.init(F),M.state.textureUnits=Z.getTextureUnits(),x.push(M),It.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ut.setFromProjectionMatrix(It,kn,F.reversedDepth),Ft=this.localClippingEnabled,Vt=Rt.init(this.clippingPlanes,Ft),T=dt.get(y,E.length),T.init(),E.push(T),Tt.enabled===!0&&Tt.isPresenting===!0){let St=L.xr.getDepthSensingMesh();St!==null&&Bl(St,F,-1/0,L.sortObjects)}Bl(y,F,0,L.sortObjects),T.finish(),D!==null&&D.updateLights(M.state.lightsArray),L.sortObjects===!0&&T.sort(it,Et),$t=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,$t&&Ot.addToRenderList(T,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Vt===!0&&Rt.beginShadows();let H=M.state.shadowsArray;if(Bt.render(H,y,F),Vt===!0&&Rt.endShadows(),(G&&A.hasRenderPass())===!1){let St=T.opaque,mt=T.transmissive;if(M.setupLights(),F.isArrayCamera){let wt=F.cameras;if(mt.length>0)for(let Dt=0,ie=wt.length;Dt<ie;Dt++){let ae=wt[Dt];Bh(St,mt,y,ae)}$t&&Ot.render(y);for(let Dt=0,ie=wt.length;Dt<ie;Dt++){let ae=wt[Dt];Oh(T,y,ae,ae.viewport)}}else mt.length>0&&Bh(St,mt,y,F),$t&&Ot.render(y),Oh(T,y,F)}tt!==null&&X===0&&(Z.updateMultisampleRenderTarget(tt),Z.updateRenderTargetMipmap(tt)),G&&A.end(L),y.isScene===!0&&y.onAfterRender(L,y,F),pt.resetDefaultState(),U=-1,Y=null,x.pop(),x.length>0?(M=x[x.length-1],Z.setTextureUnits(M.state.textureUnits),Vt===!0&&Rt.setGlobalState(L.clippingPlanes,M.state.camera)):M=null,E.pop(),E.length>0?T=E[E.length-1]:T=null,D!==null&&D.renderEnd()};function Bl(y,F,q,G){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLightProbeGrid)M.pushLightProbeGrid(y);else if(y.isLight)M.pushLight(y),y.castShadow&&M.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Ut)){G&&re.setFromMatrixPosition(y.matrixWorld).applyMatrix4(It);let St=j.update(y),mt=y.material;mt.visible&&T.push(y,St,mt,q,re.z,null,F)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(Ut))){let St=j.update(y),mt=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),re.copy(y.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),re.copy(St.boundingSphere.center)),re.applyMatrix4(y.matrixWorld).applyMatrix4(It)),Array.isArray(mt)){let wt=St.groups;for(let Dt=0,ie=wt.length;Dt<ie;Dt++){let ae=wt[Dt],At=mt[ae.materialIndex];At&&At.visible&&T.push(y,St,At,q,re.z,ae,F)}}else mt.visible&&T.push(y,St,mt,q,re.z,null,F)}}let gt=y.children;for(let St=0,mt=gt.length;St<mt;St++)Bl(gt[St],F,q,G)}function Oh(y,F,q,G){let{opaque:H,transmissive:gt,transparent:St}=y;M.setupLightsView(q),Vt===!0&&Rt.setGlobalState(L.clippingPlanes,q),G&&g.viewport(Q.copy(G)),H.length>0&&co(H,F,q),gt.length>0&&co(gt,F,q),St.length>0&&co(St,F,q),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Bh(y,F,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[G.id]===void 0){let At=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[G.id]=new cn(1,1,{generateMipmaps:!0,type:At?Wn:un,minFilter:Zi,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ue.workingColorSpace})}let gt=M.state.transmissionRenderTarget[G.id],St=G.viewport||Q;gt.setSize(St.z*L.transmissionResolutionScale,St.w*L.transmissionResolutionScale);let mt=L.getRenderTarget(),wt=L.getActiveCubeFace(),Dt=L.getActiveMipmapLevel();L.setRenderTarget(gt),L.getClearColor(oe),kt=L.getClearAlpha(),kt<1&&L.setClearColor(16777215,.5),L.clear(),$t&&Ot.render(q);let ie=L.toneMapping;L.toneMapping=Gn;let ae=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),M.setupLightsView(G),Vt===!0&&Rt.setGlobalState(L.clippingPlanes,G),co(y,q,G),Z.updateMultisampleRenderTarget(gt),Z.updateRenderTargetMipmap(gt),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let me=0,De=F.length;me<De;me++){let be=F[me],{object:ye,geometry:$e,material:yt,group:je}=be;if(yt.side===Ln&&ye.layers.test(G.layers)){let pe=yt.side;yt.side=rn,yt.needsUpdate=!0,zh(ye,q,G,$e,yt,je),yt.side=pe,yt.needsUpdate=!0,At=!0}}At===!0&&(Z.updateMultisampleRenderTarget(gt),Z.updateRenderTargetMipmap(gt))}L.setRenderTarget(mt,wt,Dt),L.setClearColor(oe,kt),ae!==void 0&&(G.viewport=ae),L.toneMapping=ie}function co(y,F,q){let G=F.isScene===!0?F.overrideMaterial:null;for(let H=0,gt=y.length;H<gt;H++){let St=y[H],{object:mt,geometry:wt,group:Dt}=St,ie=St.material;ie.allowOverride===!0&&G!==null&&(ie=G),mt.layers.test(q.layers)&&zh(mt,F,q,wt,ie,Dt)}}function zh(y,F,q,G,H,gt){D!==null&&H.isNodeMaterial&&D.setObject(y,H),y.onBeforeRender(L,F,q,G,H,gt),y.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(L,F,q,G,y,gt),H.transparent===!0&&H.side===Ln&&H.forceSinglePass===!1?(H.side=rn,H.needsUpdate=!0,L.renderBufferDirect(q,F,G,H,y,gt),H.side=Yi,H.needsUpdate=!0,L.renderBufferDirect(q,F,G,H,y,gt),H.side=Ln):L.renderBufferDirect(q,F,G,H,y,gt),y.onAfterRender(L,F,q,G,H,gt)}function ho(y,F,q){F.isScene!==!0&&(F=xe);let G=k.get(y),H=M.state.lights,gt=M.state.shadowsArray,St=H.state.version,mt=at.getParameters(y,H.state,gt,F,q,M.state.lightProbeGridArray),wt=at.getProgramCacheKey(mt),Dt=G.programs;G.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;let ie=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;G.envMap=st.get(y.envMap||G.environment,ie),G.envMapRotation=G.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Dt===void 0&&(y.addEventListener("dispose",dn),Dt=new Map,G.programs=Dt);let ae=Dt.get(wt);if(ae!==void 0){if(G.currentProgram===ae&&G.lightsStateVersion===St)return kh(y,mt),ae}else mt.uniforms=at.getUniforms(y),D!==null&&y.isNodeMaterial&&D.build(y,q,mt),y.onBeforeCompile(mt,L),ae=at.acquireProgram(mt,wt),Dt.set(wt,ae),G.uniforms=mt.uniforms;let At=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(At.clippingPlanes=Rt.uniform),kh(y,mt),G.needsLights=Cf(y),G.lightsStateVersion=St,G.needsLights&&(At.ambientLightColor.value=H.state.ambient,At.lightProbe.value=H.state.probe,At.sunLights.value=H.state.sun,At.sunLightShadows.value=H.state.sunShadow,At.directionalLights.value=H.state.directional,At.directionalLightShadows.value=H.state.directionalShadow,At.spotLights.value=H.state.spot,At.spotLightShadows.value=H.state.spotShadow,At.rectAreaLights.value=H.state.rectArea,At.ltc_1.value=H.state.rectAreaLTC1,At.ltc_2.value=H.state.rectAreaLTC2,At.pointLights.value=H.state.point,At.pointLightShadows.value=H.state.pointShadow,At.hemisphereLights.value=H.state.hemi,At.sunShadowMatrix.value=H.state.sunShadowMatrix,At.sunShadowCascade.value=H.state.sunShadowCascade,At.directionalShadowMatrix.value=H.state.directionalShadowMatrix,At.spotLightMatrix.value=H.state.spotLightMatrix,At.spotLightMap.value=H.state.spotLightMap,At.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=M.state.lightProbeGridArray.length>0,G.currentProgram=ae,G.uniformsList=null,ae}function Vh(y){if(y.uniformsList===null){let F=y.currentProgram.getUniforms();y.uniformsList=or.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function kh(y,F){let q=k.get(y);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function wf(y,F){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;S.setFromMatrixPosition(F.matrixWorld);for(let q=0,G=y.length;q<G;q++){let H=y[q];if(H.texture!==null&&H.boundingBox.containsPoint(S))return H}return null}function Af(y,F,q,G,H){F.isScene!==!0&&(F=xe),Z.resetTextureUnits();let gt=F.fog,St=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,mt=tt===null?L.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ue.workingColorSpace,wt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Dt=st.get(G.envMap||St,wt),ie=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ae=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),At=!!q.morphAttributes.position,me=!!q.morphAttributes.normal,De=!!q.morphAttributes.color,be=Gn;G.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(be=L.toneMapping);let ye=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,$e=ye!==void 0?ye.length:0,yt=k.get(G),je=M.state.lights;if(Vt===!0&&(Ft===!0||y!==Y)){let Se=y===Y&&G.id===U;Rt.setState(G,y,Se)}let pe=!1;G.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==je.state.version||yt.outputColorSpace!==mt||H.isBatchedMesh&&yt.batching===!1||!H.isBatchedMesh&&yt.batching===!0||H.isBatchedMesh&&yt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&yt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&yt.instancing===!1||!H.isInstancedMesh&&yt.instancing===!0||H.isSkinnedMesh&&yt.skinning===!1||!H.isSkinnedMesh&&yt.skinning===!0||H.isInstancedMesh&&yt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&yt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&yt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&yt.instancingMorph===!1&&H.morphTexture!==null||yt.envMap!==Dt||G.fog===!0&&yt.fog!==gt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Rt.numPlanes||yt.numIntersection!==Rt.numIntersection)||yt.vertexAlphas!==ie||yt.vertexTangents!==ae||yt.morphTargets!==At||yt.morphNormals!==me||yt.morphColors!==De||yt.toneMapping!==be||yt.morphTargetsCount!==$e||!!yt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(pe=!0):(pe=!0,yt.__version=G.version);let Sn=yt.currentProgram;pe===!0&&(Sn=ho(G,F,H),D&&G.isNodeMaterial&&D.onUpdateProgram(G,Sn,yt));let Xn=!1,wi=!1,ms=!1,ve=Sn.getUniforms(),Pe=yt.uniforms;if(g.useProgram(Sn.program)&&(Xn=!0,wi=!0,ms=!0),G.id!==U&&(U=G.id,wi=!0),yt.needsLights){let Se=wf(M.state.lightProbeGridArray,H);yt.lightProbeGrid!==Se&&(yt.lightProbeGrid=Se,wi=!0)}if(Xn||Y!==y){g.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ve.setValue(P,"projectionMatrix",y.projectionMatrix),ve.setValue(P,"viewMatrix",y.matrixWorldInverse);let Ei=ve.map.cameraPosition;Ei!==void 0&&Ei.setValue(P,Jt.setFromMatrixPosition(y.matrixWorld)),w.logarithmicDepthBuffer&&ve.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ve.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),Y!==y&&(Y=y,wi=!0,ms=!0)}if(yt.needsLights&&(je.state.sunShadowMap.length>0&&ve.setValue(P,"sunShadowMap",je.state.sunShadowMap,Z),je.state.directionalShadowMap.length>0&&ve.setValue(P,"directionalShadowMap",je.state.directionalShadowMap,Z),je.state.spotShadowMap.length>0&&ve.setValue(P,"spotShadowMap",je.state.spotShadowMap,Z),je.state.pointShadowMap.length>0&&ve.setValue(P,"pointShadowMap",je.state.pointShadowMap,Z)),H.isSkinnedMesh){ve.setOptional(P,H,"bindMatrix"),ve.setOptional(P,H,"bindMatrixInverse");let Se=H.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),ve.setValue(P,"boneTexture",Se.boneTexture,Z))}H.isBatchedMesh&&(ve.setOptional(P,H,"batchingTexture"),ve.setValue(P,"batchingTexture",H._matricesTexture,Z),ve.setOptional(P,H,"batchingIdTexture"),ve.setValue(P,"batchingIdTexture",H._indirectTexture,Z),ve.setOptional(P,H,"batchingColorTexture"),H._colorsTexture!==null&&ve.setValue(P,"batchingColorTexture",H._colorsTexture,Z));let Ai=q.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&O.update(H,q,Sn),(wi||yt.receiveShadow!==H.receiveShadow)&&(yt.receiveShadow=H.receiveShadow,ve.setValue(P,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(Pe.envMapIntensity.value=F.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=zx()),wi){if(ve.setValue(P,"toneMappingExposure",L.toneMappingExposure),yt.needsLights&&Ef(Pe,ms),gt&&G.fog===!0&&Lt.refreshFogUniforms(Pe,gt),Lt.refreshMaterialUniforms(Pe,G,K,$,M.state.transmissionRenderTarget[y.id]),yt.needsLights&&yt.lightProbeGrid){let Se=yt.lightProbeGrid;Pe.probesSH.value=Se.texture,Pe.probesMin.value.copy(Se.boundingBox.min),Pe.probesMax.value.copy(Se.boundingBox.max),Pe.probesResolution.value.copy(Se.resolution)}or.upload(P,Vh(yt),Pe,Z)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(or.upload(P,Vh(yt),Pe,Z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ve.setValue(P,"center",H.center),ve.setValue(P,"modelViewMatrix",H.modelViewMatrix),ve.setValue(P,"normalMatrix",H.normalMatrix),ve.setValue(P,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){let Se=G.uniformsGroups;for(let Ei=0,gs=Se.length;Ei<gs;Ei++){let Hh=Se[Ei];nt.update(Hh,Sn),nt.bind(Hh,Sn)}}return Sn}function Ef(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.sunLights.needsUpdate=F,y.sunLightShadows.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function Cf(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(y,F,q){let G=k.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),k.get(y.texture).__webglTexture=F,k.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){let q=k.get(y);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(y,F=0,q=0){tt=y,W=F,X=q;let G=null,H=!1,gt=!1;if(y){let mt=k.get(y);if(mt.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(P.FRAMEBUFFER,mt.__webglFramebuffer),Q.copy(y.viewport),_t.copy(y.scissor),Mt=y.scissorTest,g.viewport(Q),g.scissor(_t),g.setScissorTest(Mt),U=-1;return}else if(mt.__webglFramebuffer===void 0)Z.setupRenderTarget(y);else if(mt.__hasExternalTextures)Z.rebindTextures(y,k.get(y.texture).__webglTexture,k.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let ie=y.depthTexture;if(mt.__boundDepthTexture!==ie){if(ie!==null&&k.has(ie)&&(y.width!==ie.image.width||y.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(y)}}let wt=y.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(gt=!0);let Dt=k.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Dt[F])?G=Dt[F][q]:G=Dt[F],H=!0):y.samples>0&&Z.useMultisampledRTT(y)===!1?G=k.get(y).__webglMultisampledFramebuffer:Array.isArray(Dt)?G=Dt[q]:G=Dt,Q.copy(y.viewport),_t.copy(y.scissor),Mt=y.scissorTest}else Q.copy(ot).multiplyScalar(K).floor(),_t.copy(ut).multiplyScalar(K).floor(),Mt=Ht;if(q!==0&&(G=N),g.bindFramebuffer(P.FRAMEBUFFER,G)&&g.drawBuffers(y,G),g.viewport(Q),g.scissor(_t),g.setScissorTest(Mt),H){let mt=k.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,mt.__webglTexture,q)}else if(gt){let mt=F;for(let wt=0;wt<y.textures.length;wt++){let Dt=k.get(y.textures[wt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+wt,Dt.__webglTexture,q,mt)}}else if(y!==null&&q!==0){let mt=k.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,mt.__webglTexture,q)}U=-1};function Gh(y){let F=k.get(y);return(F.__readFormat!==y.format||F.__readType!==y.type)&&(F.__readFormat=y.format,F.__readType=y.type,F.__formatReadable=w.textureFormatReadable(y.format),F.__typeReadable=w.textureTypeReadable(y.type)),F}this.readRenderTargetPixels=function(y,F,q,G,H,gt,St,mt=0){if(!(y&&y.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=k.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0&&(wt=wt[St]),wt){g.bindFramebuffer(P.FRAMEBUFFER,wt);try{let Dt=y.textures[mt],ie=Dt.format,ae=Dt.type;y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+mt);let At=Gh(Dt);if(At.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(At.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-G&&q>=0&&q<=y.height-H&&P.readPixels(F,q,G,H,lt.convert(ie),lt.convert(ae),gt)}finally{let Dt=tt!==null?k.get(tt).__webglFramebuffer:null;g.bindFramebuffer(P.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(y,F,q,G,H,gt,St,mt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=k.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0&&(wt=wt[St]),wt)if(F>=0&&F<=y.width-G&&q>=0&&q<=y.height-H){g.bindFramebuffer(P.FRAMEBUFFER,wt);let Dt=y.textures[mt],ie=Dt.format,ae=Dt.type;y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+mt);let At=Gh(Dt);if(At.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(At.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let me=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,me),P.bufferData(P.PIXEL_PACK_BUFFER,gt.byteLength,P.STREAM_READ),P.readPixels(F,q,G,H,lt.convert(ie),lt.convert(ae),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let De=tt!==null?k.get(tt).__webglFramebuffer:null;g.bindFramebuffer(P.FRAMEBUFFER,De);let be=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Ud(P,be,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,me),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,gt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(me),P.deleteSync(be),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,q=0){let G=Math.pow(2,-q),H=Math.floor(y.image.width*G),gt=Math.floor(y.image.height*G),St=F!==null?F.x:0,mt=F!==null?F.y:0;Z.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,q,0,0,St,mt,H,gt),g.unbindTexture()},this.copyTextureToTexture=function(y,F,q=null,G=null,H=0,gt=0){let St,mt,wt,Dt,ie,ae,At,me,De,be=y.isCompressedTexture?y.mipmaps[gt]:y.image;if(q!==null)St=q.max.x-q.min.x,mt=q.max.y-q.min.y,wt=q.isBox3?q.max.z-q.min.z:1,Dt=q.min.x,ie=q.min.y,ae=q.isBox3?q.min.z:0;else{let Pe=Math.pow(2,-H);St=Math.floor(be.width*Pe),mt=Math.floor(be.height*Pe),y.isDataArrayTexture?wt=be.depth:y.isData3DTexture?wt=Math.floor(be.depth*Pe):wt=1,Dt=0,ie=0,ae=0}G!==null?(At=G.x,me=G.y,De=G.z):(At=0,me=0,De=0);let ye=lt.convert(F.format),$e=lt.convert(F.type),yt;F.isData3DTexture?(Z.setTexture3D(F,0),yt=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Z.setTexture2DArray(F,0),yt=P.TEXTURE_2D_ARRAY):(Z.setTexture2D(F,0),yt=P.TEXTURE_2D),g.activeTexture(P.TEXTURE0),g.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),g.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),g.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);let je=g.getParameter(P.UNPACK_ROW_LENGTH),pe=g.getParameter(P.UNPACK_IMAGE_HEIGHT),Sn=g.getParameter(P.UNPACK_SKIP_PIXELS),Xn=g.getParameter(P.UNPACK_SKIP_ROWS),wi=g.getParameter(P.UNPACK_SKIP_IMAGES);g.pixelStorei(P.UNPACK_ROW_LENGTH,be.width),g.pixelStorei(P.UNPACK_IMAGE_HEIGHT,be.height),g.pixelStorei(P.UNPACK_SKIP_PIXELS,Dt),g.pixelStorei(P.UNPACK_SKIP_ROWS,ie),g.pixelStorei(P.UNPACK_SKIP_IMAGES,ae);let ms=y.isDataArrayTexture||y.isData3DTexture,ve=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){let Pe=k.get(y),Ai=k.get(F),Se=k.get(Pe.__renderTarget),Ei=k.get(Ai.__renderTarget);g.bindFramebuffer(P.READ_FRAMEBUFFER,Se.__webglFramebuffer),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let gs=0;gs<wt;gs++)ms&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,k.get(y).__webglTexture,H,ae+gs),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,k.get(F).__webglTexture,gt,De+gs)),P.blitFramebuffer(Dt,ie,St,mt,At,me,St,mt,P.DEPTH_BUFFER_BIT,P.NEAREST);g.bindFramebuffer(P.READ_FRAMEBUFFER,null),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||k.has(y)){let Pe=k.get(y),Ai=k.get(F);g.bindFramebuffer(P.READ_FRAMEBUFFER,C),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,z);for(let Se=0;Se<wt;Se++)ms?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Pe.__webglTexture,H,ae+Se):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Pe.__webglTexture,H),ve?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ai.__webglTexture,gt,De+Se):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ai.__webglTexture,gt),H!==0?P.blitFramebuffer(Dt,ie,St,mt,At,me,St,mt,P.COLOR_BUFFER_BIT,P.NEAREST):ve?P.copyTexSubImage3D(yt,gt,At,me,De+Se,Dt,ie,St,mt):P.copyTexSubImage2D(yt,gt,At,me,Dt,ie,St,mt);g.bindFramebuffer(P.READ_FRAMEBUFFER,null),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ve?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(yt,gt,At,me,De,St,mt,wt,ye,$e,be.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(yt,gt,At,me,De,St,mt,wt,ye,be.data):P.texSubImage3D(yt,gt,At,me,De,St,mt,wt,ye,$e,be):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,gt,At,me,St,mt,ye,$e,be.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,gt,At,me,be.width,be.height,ye,be.data):P.texSubImage2D(P.TEXTURE_2D,gt,At,me,St,mt,ye,$e,be);g.pixelStorei(P.UNPACK_ROW_LENGTH,je),g.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pe),g.pixelStorei(P.UNPACK_SKIP_PIXELS,Sn),g.pixelStorei(P.UNPACK_SKIP_ROWS,Xn),g.pixelStorei(P.UNPACK_SKIP_IMAGES,wi),gt===0&&F.generateMipmaps&&P.generateMipmap(yt),g.unbindTexture()},this.initRenderTarget=function(y){k.get(y).__webglFramebuffer===void 0&&Z.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Z.setTextureCube(y,0):y.isData3DTexture?Z.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Z.setTexture2DArray(y,0):Z.setTexture2D(y,0),g.unbindTexture()},this.resetState=function(){W=0,X=0,tt=null,g.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};var oo=new V;function Un(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;oo.copy(t),oo[n]=0,oo.normalize();let c=.5*o/(o+a),h=1-oo.angleTo(i)/l;return Math.sign(oo[e])===1?h*c:a/(o+a)+c+c*(1-h)}var ao=class i extends si{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new V,c=new V,h=new V(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,_=d.length/6,v=new V,m=.5/o;for(let p=0,b=0;p<d.length;p+=3,b+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*r,d[p+1]=h.y*Math.sign(l.y)+c.y*r,d[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/_)){case 0:v.set(1,0,0),f[b+0]=Un(v,c,"z","y",r,n),f[b+1]=1-Un(v,c,"y","z",r,e);break;case 1:v.set(-1,0,0),f[b+0]=1-Un(v,c,"z","y",r,n),f[b+1]=1-Un(v,c,"y","z",r,e);break;case 2:v.set(0,1,0),f[b+0]=1-Un(v,c,"x","z",r,t),f[b+1]=Un(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),f[b+0]=1-Un(v,c,"x","z",r,t),f[b+1]=1-Un(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),f[b+0]=1-Un(v,c,"x","y",r,t),f[b+1]=1-Un(v,c,"y","x",r,e);break;case 5:v.set(0,0,-1),f[b+0]=Un(v,c,"x","y",r,t),f[b+1]=1-Un(v,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function Ih(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new hn,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let _=0;_<f.count;++_)d.push(f.getX(_)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=gf(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][u]);let _=gf(f);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(_)}}}return l}function gf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new nn(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let _=0;_<e;_++){let v=h.getComponent(u,_);a.setComponent(u+d,_,v)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function Vx(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ul(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function Fl(i,t){let e=new zr(i);return e.colorSpace=en,t&&(e.wrapS=e.wrapT=Gs,e.repeat.set(...t)),e.anisotropy=4,e}function Ph(i,t){let e=new jt(t),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;return i.setAttribute("color",new Le(s,3)),i}function kx(i){let[t,e]=Ul(256,512);e.fillStyle="#6a4a36",e.fillRect(0,0,256,512);for(let n=0;n<260;n++){let s=i()*256,r=i()*512,o=30+i()*150,a=1.5+i()*5,l=Math.floor(40+i()*70);e.strokeStyle=`rgba(${l+25},${l},${l-15},${.35+i()*.5})`,e.lineWidth=a,e.beginPath(),e.moveTo(s,r),e.bezierCurveTo(s+(i()-.5)*12,r+o*.33,s+(i()-.5)*12,r+o*.66,s+(i()-.5)*8,r+o),e.stroke()}for(let n=0;n<40;n++){e.strokeStyle="rgba(35,22,14,0.5)",e.lineWidth=1+i()*2;let s=i()*256,r=i()*512;e.beginPath(),e.moveTo(s,r),e.lineTo(s+6+i()*14,r+(i()-.5)*4),e.stroke()}return Fl(t,[2,2])}function Gx(i){let t=[],e=[],n=new V(0,1,0);function s(u,f,_,v,m=.72){let p=u.clone().addScaledVector(f,_),b=new Mi(v*m,v,_,10,3),I=b.attributes.position,S=(i()-.5)*_*.1;for(let M=0;M<I.count;M++){let E=I.getY(M)/_+.5;I.setX(M,I.getX(M)+Math.sin(E*Math.PI)*S)}b.computeVertexNormals(),b.translate(0,_/2,0),b.applyQuaternion(new _n().setFromUnitVectors(n,f)),b.translate(u.x,u.y,u.z),t.push(b);let T=new Hi(v*1.02,10,8);return T.translate(u.x,u.y,u.z),t.push(T),p}function r(u,f,_,v,m){let p=s(u,f,_,v);if(m===0){e.push(p);return}m===1&&e.push(p);let b=new V().crossVectors(f,Math.abs(f.y)>.9?new V(1,0,0):n).normalize(),I=new V().crossVectors(f,b).normalize(),S=i()*Math.PI*2;for(let T=0;T<2;T++){let M=S+T*Math.PI+(i()-.5)*.7,E=b.clone().multiplyScalar(Math.cos(M)).addScaledVector(I,Math.sin(M)),x=f.clone().applyAxisAngle(E,.34+i()*.3);x.y+=.2,x.normalize(),r(p,x,_*(.72+i()*.1),v*.72*.92,m-1)}}let o=new V(0,0,0),a=new V(.04,1,.02).normalize(),l=.36,c=null;for(let u=0;u<3;u++)o=s(o,a,1.3,l,.88),l*=.88,u===1&&(c=o.clone()),a=a.clone().add(new V((i()-.5)*.16,0,(i()-.5)*.16)).normalize();let h=5;for(let u=0;u<h;u++){let f=u/h*Math.PI*2+(i()-.5)*.5,_=.62+i()*.28,v=new V(Math.sin(_)*Math.cos(f),Math.cos(_),Math.sin(_)*Math.sin(f));r(o,v,1.7+i()*.35,l*.66,3)}r(o,a,1.35,l*.6,3),r(c,new V(-.72,.62,.3).normalize(),1.25,.11,2);for(let u=0;u<5;u++){let f=u/5*Math.PI*2+i()*.4,_=.7+i()*.35,v=new Mi(.03,.15,_,8,1);v.translate(0,_/2,0),v.applyQuaternion(new _n().setFromUnitVectors(n,new V(Math.cos(f),-.42,Math.sin(f)).normalize())),v.translate(0,.34,0),t.push(v)}let d=new Ie(Ih(t),new Pn({map:kx(i),color:"#ffffff",roughness:.92}));return t.forEach(u=>u.dispose()),{tronco:d,pontas:e}}function Dh(){let i=[];for(let n=0;n<5;n++){let s=new Hi(1,7,5);s.scale(.055,.02,.1),s.translate(0,0,.085),s.rotateX(-.55),s.rotateY(n/5*Math.PI*2),i.push(Ph(s,n%2?"#ffd23a":"#ffdf5c"))}let t=new Hi(.035,6,4);i.push(Ph(t,"#d27d10"));let e=new Mi(.03,.012,.09,6);return e.translate(0,-.05,0),i.push(Ph(e,"#e6a51e")),Ih(i)}function Hx(){let i=new Hi(1,7,4);return i.scale(.05,.008,.12),i.translate(0,0,.11),i}function Wx(i,t){let e=t.reduce((f,_)=>f.add(_),new V).divideScalar(t.length),n=new Fe,s=new jt,r=["#ffffff","#fff4c8","#ffe79a","#ffd970","#fff9e0"],o=Math.round(1500/t.length),a=new ki(Dh(),new Pn({vertexColors:!0,roughness:.55,emissive:"#4a2c00",emissiveIntensity:.25}),o*t.length),l=0;for(let f of t)for(let _=0;_<o;_++){let v=Math.pow(i(),.6)*.72,m=i()*Math.PI*2,p=i()*Math.PI-Math.PI/2;n.position.set(f.x-e.x+Math.cos(m)*Math.cos(p)*v,f.y-e.y+Math.sin(p)*v*.6+.08,f.z-e.z+Math.sin(m)*Math.cos(p)*v),n.lookAt(n.position.clone().multiplyScalar(2).add(new V(0,1.5,0))),n.rotateX(Math.PI/2),n.rotateY(i()*6.28),n.scale.setScalar(.85+i()*.5),n.updateMatrix(),a.setMatrixAt(l,n.matrix),a.setColorAt(l,s.set(r[Math.floor(i()*r.length)])),l++}let c=t.length*4,h=new ki(Hx(),new Pn({roughness:.7,side:Ln}),c),d=["#4f7a3a","#5f8c45","#3f6630","#6f9a4f"];for(let f=0;f<c;f++){let _=t[f%t.length];n.position.set(_.x-e.x+(i()-.5)*.7,_.y-e.y+(i()-.6)*.4,_.z-e.z+(i()-.5)*.7),n.rotation.set((i()-.5)*1.2,i()*6.28,(i()-.5)*1.2),n.scale.setScalar(.8+i()*.6),n.updateMatrix(),h.setMatrixAt(f,n.matrix),h.setColorAt(f,s.set(d[Math.floor(i()*d.length)]))}let u=new ln;return u.position.copy(e),u.add(h,a),u}function Xx(i){let t=new ln,[e,n]=Ul(256,256),s=n.createRadialGradient(128,128,0,128,128,128);s.addColorStop(0,"rgba(70,60,30,0.30)"),s.addColorStop(.55,"rgba(70,60,30,0.10)"),s.addColorStop(1,"rgba(70,60,30,0)"),n.fillStyle=s,n.fillRect(0,0,256,256);let r=new Ie(new hs(9,9),new cs({map:Fl(e),transparent:!0,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.position.y=.01,t.add(r);let o=260,a=new ki(Dh(),new Pn({vertexColors:!0,roughness:.7}),o),l=new Fe;for(let c=0;c<o;c++){let h=i()*Math.PI*2,d=Math.sqrt(i())*3.6;l.position.set(Math.cos(h)*d,.02,Math.sin(h)*d*.8),l.rotation.set((i()-.5)*.6,i()*6.28,(i()-.5)*.6),l.scale.setScalar(.7+i()*.5),l.updateMatrix(),a.setMatrixAt(c,l.matrix)}return t.add(a),t}function qx(){let[i,t]=Ul(64,256);t.fillStyle="#fbf6e8",t.fillRect(0,0,64,256);for(let e=0;e<256;e+=3)t.fillStyle=`rgba(150,130,95,${.12+e*7%5*.03})`,t.fillRect(0,e,64,1);return Fl(i,[1,1])}function Yx(i){let[t,e]=Ul(256,360);return e.fillStyle=i,e.fillRect(0,0,256,360),e.fillStyle="rgba(255,248,225,0.92)",e.fillRect(36,70,184,120),e.fillStyle="rgba(60,45,25,0.75)",e.fillRect(58,100,140,12),e.fillRect(78,124,100,8),e.fillRect(90,150,76,6),e.strokeStyle="rgba(214,170,60,0.9)",e.lineWidth=4,e.strokeRect(20,20,216,320),Fl(t)}var Lh=null;function $x(i){let r=new ln,o=new Js({color:i,roughness:.5,clearcoat:.35,clearcoatRoughness:.4}),a=new Ie(new ao(1.45,2.05,.05,2,.02),[o,o,o,o,new Js({map:Yx(i),roughness:.5,clearcoat:.3}),o]);a.position.z=.36/2-.05/2;let l=new Ie(new ao(1.45,2.05,.05,2,.02),o);l.position.z=-.36/2+.05/2;let c=new Ie(new Mi(.36/2,.36/2,2.05,16,1,!1,Math.PI,Math.PI),o);c.position.x=-1.45/2,c.scale.x=.5,Lh??(Lh=qx());let h=new Ie(new si(1.45*.96,2.05*.96,.36-.05*2),new Pn({map:Lh,roughness:.95}));h.position.x=1.45*.01;let d=new Pn({color:"#d4a63c",metalness:.6,roughness:.35});for(let u of[-2.05*.36,2.05*.36]){let f=new Ie(new Mi(.185,.185,.035,16,1,!1,Math.PI,Math.PI),d);f.position.set(-1.45/2,u,0),f.scale.x=.5,r.add(f)}return r.add(a,l,c,h),r}function _f(i,{reduzir:t=!1,estado:e={rolagem:0}}={}){if(!i)return null;let n;try{n=new Ll({canvas:i,antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return i.remove(),null}n.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),n.setClearColor(0,0),n.toneMapping=Yr,n.toneMappingExposure=1.12;let s=Vx(19980311),r=new Nr,o=new Ke(30,1,.1,200);r.add(new Hr("#ffffff","#8a9a6a",1.8));let a=new Qs("#fff3d6",2.6);a.position.set(-6,10,8),r.add(a);let l=new Qs("#fff8ee",.8);l.position.set(7,3,6),r.add(l);let c=new ln;r.add(c);let{tronco:h,pontas:d}=Gx(s),u=Wx(s,d),f=new ln;f.add(h,u),c.add(f,Xx(s));let _=[{cor:"#3f6b3a",pos:[1.55,.11,1.5],rot:[-Math.PI/2,0,.5]},{cor:"#a8452f",pos:[1.6,.31,1.45],rot:[-Math.PI/2,0,.18],esc:.9},{cor:"#2f4858",pos:[1.52,.5,1.5],rot:[-Math.PI/2,0,.72],esc:.82},{cor:"#c98f1c",pos:[-1.35,.54,1.25],rot:[-.2,.55,.08],esc:.85}].map(R=>{let D=new ln,N=$x(R.cor);return N.rotation.set(...R.rot),N.scale.setScalar((R.esc||1)*.6),D.add(N),D.position.set(...R.pos),c.add(D),{pulo:D,livro:N}}),v=60,m=new ki(Dh(),new Pn({vertexColors:!0,roughness:.6,transparent:!0}),v);m.frustumCulled=!1,c.add(m);let p=Array.from({length:v},(R,D)=>({i:D,vel:0,balanco:0,fase:0,giro:0,x:0,y:0,z:0}));function b(R,D){let N=d[Math.floor(s()*d.length)];R.x=N.x+(s()-.5)*1.2,R.z=N.z+(s()-.5)*1.2,R.y=D?s()*N.y:N.y,R.vel=.35+s()*.4,R.balanco=.6+s()*.8,R.fase=s()*6.28,R.giro=(s()-.5)*3}p.forEach(R=>b(R,!0));let I=new Fe;function S(R,D){for(let N of p)N.y-=N.vel*D,N.y<.05&&b(N,!1),I.position.set(N.x+Math.sin(R*N.balanco+N.fase)*.3,N.y,N.z+Math.cos(R*N.balanco+N.fase)*.2),I.rotation.set(R*N.giro*.7+N.fase,R*N.giro+N.fase,0),I.scale.setScalar(1.3),I.updateMatrix(),m.setMatrixAt(N.i,I.matrix);m.instanceMatrix.needsUpdate=!0}let T=new In().setFromObject(f).max.y;function M(){let R=Math.max(1,window.innerWidth),D=Math.max(1,window.innerHeight);n.setSize(R,D,!1),o.aspect=R/D;let N=R<760,C=22;o.position.set(0,0,C),o.lookAt(0,0,0),o.updateProjectionMatrix();let z=Math.tan(no.degToRad(o.fov/2))*C,W=z*o.aspect;c.scale.setScalar(z*(N?1:1.5)/T),c.position.set(N?W*.6:W*.56,-z*.84,0)}M(),window.addEventListener("resize",M,{passive:!0});let E={x:0,y:0};t||window.addEventListener("pointermove",R=>{E.x=(R.clientX/window.innerWidth-.5)*2,E.y=(R.clientY/window.innerHeight-.5)*2},{passive:!0});let x=new Xr,A=-.5;function L(){x.update();let R=x.getElapsed(),D=Math.min(x.getDelta(),.05);c.rotation.y=no.damp(c.rotation.y,A+e.rolagem*1.4+E.x*.12,4,D),c.rotation.x=no.damp(c.rotation.x,E.y*.03,4,D),f.rotation.z=Math.sin(R*.6)*.008,u.rotation.z=Math.sin(R*.9+1)*.018,u.rotation.x=Math.sin(R*.7)*.012,S(R,D),n.render(r,o)}return c.rotation.y=A,t?(S(0,0),n.render(r,o),window.addEventListener("resize",()=>n.render(r,o),{passive:!0})):n.setAnimationLoop(L),{tronco:h,grupoCopa:u,flores:m.material,livros:_,renderizar:()=>n.render(r,o)}}var Zx=document.documentElement,xf=matchMedia("(prefers-reduced-motion: reduce)").matches;Ce.defaults.ease="out(3)";Ce.precision=3;function lo(i,t){try{return t()}catch(e){return console.warn(`[${i}] ignorado:`,e&&e.message),null}}function li(i){let t=typeof i=="string"?[...document.querySelectorAll(i)]:i instanceof Element?[i]:[...i||[]].filter(Boolean);return t.forEach(e=>{e.style.opacity="0",e.removeAttribute("data-hide")}),t}function vf(i){let t=i.textContent.trim();i.setAttribute("aria-label",t),i.textContent="";let e=[];return t.split(/\s+/).forEach((n,s)=>{s&&i.append(" ");let r=document.createElement("span");r.className="mascara",r.setAttribute("aria-hidden","true");let o=document.createElement("span");o.className="palavra",o.textContent=n,r.append(o),i.append(r),e.push(o)}),e}var yf={rolagem:0},Ti=lo("cena",()=>_f(document.getElementById("cena-ipe"),{reduzir:xf,estado:yf}));xf||!Zx.classList.contains("efeitos")?document.querySelectorAll("[data-hide]").forEach(i=>i.removeAttribute("data-hide")):(lo("topo",Jx),lo("cartoes",Kx),lo("materia",Qx),lo("rolagem",jx));function Jx(){let i=document.querySelector(".hero .titulo");if(!i)return;let t=Do({defaults:{duration:760,ease:"out(4)"}});t.add(li(".topo"),{opacity:[0,1],y:[-12,0],duration:560},0),t.add(li(".hero .selo"),{opacity:[0,1],y:[10,0],duration:520},120),li(i).forEach(e=>{e.style.opacity="1"}),t.add(vf(i),{y:["110%","0%"],duration:860,delay:Ts(60)},200),t.add(li(".hero .sub"),{opacity:[0,1],y:[14,0]},560),t.add(li(".hero-acoes"),{opacity:[0,1],y:[14,0]},680),Ti&&(Ti.tronco.scale.set(1,.001,1),Ti.grupoCopa.scale.setScalar(.001),Ti.flores.opacity=0,t.add(Ti.tronco.scale,{y:1,duration:1300,ease:"out(3)"},150),t.add(Ti.grupoCopa.scale,{x:1,y:1,z:1,ease:Uo({bounce:.32,duration:1400})},850),t.add(Ti.flores,{opacity:1,duration:1200,ease:"inOut(2)"},1500),Ti.livros.forEach((e,n)=>{let s=e.pulo.position.y;e.pulo.position.y=s+3,e.pulo.scale.setScalar(.001),t.add(e.pulo.position,{y:s,ease:Uo({bounce:.4,duration:900})},1200+n*120),t.add(e.pulo.scale,{x:1,y:1,z:1,duration:500,ease:"outBack(1.6)"},1200+n*120)})),setTimeout(()=>{t.completed||t.complete()},3500)}function Kx(){let i=document.querySelector(".cartoes");if(!i)return;let t=li(".secao"),e=li(".cartao"),n=nc([...t,...e],{opacity:[0,1],y:[34,0],duration:760,delay:Ts(90),autoplay:ac({target:i,enter:"bottom-=90 top",sync:"play",repeat:!1})}),s=0,r=setInterval(()=>{s++,!n.began&&i.getBoundingClientRect().top<innerHeight*1.05&&n.play(),(n.began||s>15)&&clearInterval(r)},900)}function Qx(){let i=document.querySelector(".materia");if(!i)return;let t=i.querySelector("h1"),e=Do({defaults:{duration:700,ease:"out(4)"}});e.add(li(".topo"),{opacity:[0,1],y:[-12,0],duration:520},0),li(t).forEach(s=>{s.style.opacity="1"}),e.add(vf(t),{y:["110%","0%"],delay:Ts(45)},120),e.add(li(i.querySelectorAll("[data-hide]")),{opacity:[0,1],y:[16,0],delay:Ts(70)},380),setTimeout(()=>{e.completed||e.complete()},3500);let n=document.querySelector(".leitura span");n&&Sf(s=>{n.style.transform=`scaleX(${s.toFixed(4)})`})}function jx(){Ti&&Sf(i=>{yf.rolagem=i})}function Sf(i){let t=()=>{let e=document.documentElement.scrollHeight-innerHeight;i(e>0?Math.min(1,Math.max(0,scrollY/e)):0)};addEventListener("scroll",t,{passive:!0}),addEventListener("resize",t,{passive:!0}),t()}
/*! Bundled license information:

animejs/dist/modules/core/consts.js:
animejs/dist/modules/core/globals.js:
animejs/dist/modules/core/helpers.js:
animejs/dist/modules/core/transforms.js:
animejs/dist/modules/core/colors.js:
animejs/dist/modules/core/values.js:
animejs/dist/modules/core/render.js:
animejs/dist/modules/core/styles.js:
animejs/dist/modules/core/clock.js:
animejs/dist/modules/core/targets.js:
animejs/dist/modules/core/units.js:
  (**
   * Anime.js - core - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/adapters/registry.js:
  (**
   * Anime.js - adapters - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/animation/additive.js:
animejs/dist/modules/animation/composition.js:
animejs/dist/modules/animation/animation.js:
  (**
   * Anime.js - animation - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/engine/engine.js:
  (**
   * Anime.js - engine - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/timer/timer.js:
  (**
   * Anime.js - timer - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/easings/none.js:
animejs/dist/modules/easings/eases/parser.js:
animejs/dist/modules/easings/spring/index.js:
  (**
   * Anime.js - easings - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/timeline/position.js:
animejs/dist/modules/timeline/timeline.js:
  (**
   * Anime.js - timeline - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/utils/target.js:
animejs/dist/modules/utils/time.js:
animejs/dist/modules/utils/random.js:
animejs/dist/modules/utils/stagger.js:
  (**
   * Anime.js - utils - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/events/scroll.js:
  (**
   * Anime.js - events - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/index.js:
  (**
   * Anime.js - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
