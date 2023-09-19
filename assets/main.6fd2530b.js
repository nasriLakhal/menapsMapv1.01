class L{constructor(e){this.properties=e!=null?e:[]}get(e){const t=this.properties.filter(r=>r.name===e).map(r=>r.value);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const r=this.get(e);if(r!==void 0){if(t!=="json"&&typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(t!=="json"&&typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}getType(e){const t=this.properties.filter(r=>r.name===e).map(r=>r.type);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}}const j="https://unpkg.com/@workadventure/scripting-api-extra@1.4.6/dist";class ee{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new L(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function O(n){const e=n?"#"+n.join():"";WA.nav.openCoWebSite(j+"/configuration.html"+e)}async function te(n,e){const t=await WA.room.getTiledMap(),r=new Map;return z(t.layers,r,n,e),r}function z(n,e,t,r){for(const o of n)if(o.type==="objectgroup"){for(const s of o.objects)if(s.type==="variable"||s.class==="variable"){if(!!t&&o.name!==t||!!r&&!r.includes(s.name))continue;e.set(s.name,new ee(s))}}else o.type==="group"&&z(o.layers,e,t,r)}let R;async function P(){return R===void 0&&(R=ne()),R}async function ne(){return re(await WA.room.getTiledMap())}function re(n){const e=new Map;return H(n.layers,"",e),e}function H(n,e,t){for(const r of n)r.type==="group"?H(r.layers,e+r.name+"/",t):(r.name=e+r.name,t.set(r.name,r))}async function oe(){const n=await P(),e=[];for(const t of n.values())if(t.type==="objectgroup")for(const r of t.objects)(r.type==="area"||r.class==="area")&&e.push(r);return e}function se(n){let e=1/0,t=1/0,r=0,o=0;const s=n.data;if(typeof s=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let a=0;a<n.height;a++)for(let i=0;i<n.width;i++)s[i+a*n.width]!==0&&(e=Math.min(e,i),o=Math.max(o,i),t=Math.min(t,a),r=Math.max(r,a));return{top:t,left:e,right:o+1,bottom:r+1}}function X(n){let e=1/0,t=1/0,r=0,o=0;for(const s of n){const a=se(s);a.left<e&&(e=a.left),a.top<t&&(t=a.top),a.right>o&&(o=a.right),a.bottom>r&&(r=a.bottom)}return{top:t,left:e,right:o,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var ae=Object.prototype.toString,W=Array.isArray||function(e){return ae.call(e)==="[object Array]"};function I(n){return typeof n=="function"}function ie(n){return W(n)?"array":typeof n}function V(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function D(n,e){return n!=null&&typeof n=="object"&&e in n}function ue(n,e){return n!=null&&typeof n!="object"&&n.hasOwnProperty&&n.hasOwnProperty(e)}var ce=RegExp.prototype.test;function le(n,e){return ce.call(n,e)}var fe=/\S/;function pe(n){return!le(fe,n)}var ge={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function he(n){return String(n).replace(/[&<>"'`=\/]/g,function(t){return ge[t]})}var ye=/\s*/,de=/\s+/,q=/\s*=/,ve=/\s*\}/,me=/#|\^|\/|>|\{|&|=|!/;function be(n,e){if(!n)return[];var t=!1,r=[],o=[],s=[],a=!1,i=!1,u="",l=0;function f(){if(a&&!i)for(;s.length;)delete o[s.pop()];else s=[];a=!1,i=!1}var y,v,T;function S(b){if(typeof b=="string"&&(b=b.split(de,2)),!W(b)||b.length!==2)throw new Error("Invalid tags: "+b);y=new RegExp(V(b[0])+"\\s*"),v=new RegExp("\\s*"+V(b[1])),T=new RegExp("\\s*"+V("}"+b[1]))}S(e||h.tags);for(var c=new E(n),m,g,d,C,k,A;!c.eos();){if(m=c.pos,d=c.scanUntil(y),d)for(var B=0,F=d.length;B<F;++B)C=d.charAt(B),pe(C)?(s.push(o.length),u+=C):(i=!0,t=!0,u+=" "),o.push(["text",C,m,m+1]),m+=1,C===`
`&&(f(),u="",l=0,t=!1);if(!c.scan(y))break;if(a=!0,g=c.scan(me)||"name",c.scan(ye),g==="="?(d=c.scanUntil(q),c.scan(q),c.scanUntil(v)):g==="{"?(d=c.scanUntil(T),c.scan(ve),c.scanUntil(v),g="&"):d=c.scanUntil(v),!c.scan(v))throw new Error("Unclosed tag at "+c.pos);if(g==">"?k=[g,d,m,c.pos,u,l,t]:k=[g,d,m,c.pos],l++,o.push(k),g==="#"||g==="^")r.push(k);else if(g==="/"){if(A=r.pop(),!A)throw new Error('Unopened section "'+d+'" at '+m);if(A[1]!==d)throw new Error('Unclosed section "'+A[1]+'" at '+m)}else g==="name"||g==="{"||g==="&"?i=!0:g==="="&&S(d)}if(f(),A=r.pop(),A)throw new Error('Unclosed section "'+A[1]+'" at '+c.pos);return we(Ae(o))}function Ae(n){for(var e=[],t,r,o=0,s=n.length;o<s;++o)t=n[o],t&&(t[0]==="text"&&r&&r[0]==="text"?(r[1]+=t[1],r[3]=t[3]):(e.push(t),r=t));return e}function we(n){for(var e=[],t=e,r=[],o,s,a=0,i=n.length;a<i;++a)switch(o=n[a],o[0]){case"#":case"^":t.push(o),r.push(o),t=o[4]=[];break;case"/":s=r.pop(),s[5]=o[2],t=r.length>0?r[r.length-1][4]:e;break;default:t.push(o)}return e}function E(n){this.string=n,this.tail=n,this.pos=0}E.prototype.eos=function(){return this.tail===""};E.prototype.scan=function(e){var t=this.tail.match(e);if(!t||t.index!==0)return"";var r=t[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};E.prototype.scanUntil=function(e){var t=this.tail.search(e),r;switch(t){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=r.length,r};function w(n,e){this.view=n,this.cache={".":this.view},this.parent=e}w.prototype.push=function(e){return new w(e,this)};w.prototype.lookup=function(e){var t=this.cache,r;if(t.hasOwnProperty(e))r=t[e];else{for(var o=this,s,a,i,u=!1;o;){if(e.indexOf(".")>0)for(s=o.view,a=e.split("."),i=0;s!=null&&i<a.length;)i===a.length-1&&(u=D(s,a[i])||ue(s,a[i])),s=s[a[i++]];else s=o.view[e],u=D(o.view,e);if(u){r=s;break}o=o.parent}t[e]=r}return I(r)&&(r=r.call(this.view)),r};function p(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}p.prototype.clearCache=function(){typeof this.templateCache!="undefined"&&this.templateCache.clear()};p.prototype.parse=function(e,t){var r=this.templateCache,o=e+":"+(t||h.tags).join(":"),s=typeof r!="undefined",a=s?r.get(o):void 0;return a==null&&(a=be(e,t),s&&r.set(o,a)),a};p.prototype.render=function(e,t,r,o){var s=this.getConfigTags(o),a=this.parse(e,s),i=t instanceof w?t:new w(t,void 0);return this.renderTokens(a,i,r,e,o)};p.prototype.renderTokens=function(e,t,r,o,s){for(var a="",i,u,l,f=0,y=e.length;f<y;++f)l=void 0,i=e[f],u=i[0],u==="#"?l=this.renderSection(i,t,r,o,s):u==="^"?l=this.renderInverted(i,t,r,o,s):u===">"?l=this.renderPartial(i,t,r,s):u==="&"?l=this.unescapedValue(i,t):u==="name"?l=this.escapedValue(i,t,s):u==="text"&&(l=this.rawValue(i)),l!==void 0&&(a+=l);return a};p.prototype.renderSection=function(e,t,r,o,s){var a=this,i="",u=t.lookup(e[1]);function l(v){return a.render(v,t,r,s)}if(!!u){if(W(u))for(var f=0,y=u.length;f<y;++f)i+=this.renderTokens(e[4],t.push(u[f]),r,o,s);else if(typeof u=="object"||typeof u=="string"||typeof u=="number")i+=this.renderTokens(e[4],t.push(u),r,o,s);else if(I(u)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");u=u.call(t.view,o.slice(e[3],e[5]),l),u!=null&&(i+=u)}else i+=this.renderTokens(e[4],t,r,o,s);return i}};p.prototype.renderInverted=function(e,t,r,o,s){var a=t.lookup(e[1]);if(!a||W(a)&&a.length===0)return this.renderTokens(e[4],t,r,o,s)};p.prototype.indentPartial=function(e,t,r){for(var o=t.replace(/[^ \t]/g,""),s=e.split(`
`),a=0;a<s.length;a++)s[a].length&&(a>0||!r)&&(s[a]=o+s[a]);return s.join(`
`)};p.prototype.renderPartial=function(e,t,r,o){if(!!r){var s=this.getConfigTags(o),a=I(r)?r(e[1]):r[e[1]];if(a!=null){var i=e[6],u=e[5],l=e[4],f=a;u==0&&l&&(f=this.indentPartial(a,l,i));var y=this.parse(f,s);return this.renderTokens(y,t,r,f,o)}}};p.prototype.unescapedValue=function(e,t){var r=t.lookup(e[1]);if(r!=null)return r};p.prototype.escapedValue=function(e,t,r){var o=this.getConfigEscape(r)||h.escape,s=t.lookup(e[1]);if(s!=null)return typeof s=="number"&&o===h.escape?String(s):o(s)};p.prototype.rawValue=function(e){return e[1]};p.prototype.getConfigTags=function(e){return W(e)?e:e&&typeof e=="object"?e.tags:void 0};p.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!W(e))return e.escape};var h={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(n){M.templateCache=n},get templateCache(){return M.templateCache}},M=new p;h.clearCache=function(){return M.clearCache()};h.parse=function(e,t){return M.parse(e,t)};h.render=function(e,t,r,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+ie(e)+'" was given as the first argument for mustache#render(template, view, partials)');return M.render(e,t,r,o)};h.escape=he;h.Scanner=E;h.Context=w;h.Writer=p;class Y{constructor(e,t){this.template=e,this.state=t,this.ast=h.parse(e)}getValue(){return this.value===void 0&&(this.value=h.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const r of this.getUsedVariables().values())t.push(this.state.onVariableChange(r).subscribe(()=>{const o=h.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const r of t)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const r of e){const o=r[0],s=r[1],a=r[4];["name","&","#","^"].includes(o)&&t.add(s),a!==void 0&&typeof a!="string"&&this.recursiveGetUsedVariables(a,t)}}}async function We(){var n;const e=await oe();for(const t of e){const r=(n=t.properties)!==null&&n!==void 0?n:[];for(const o of r){if(o.type==="int"||o.type==="bool"||o.type==="object"||typeof o.value!="string")continue;const s=new Y(o.value,WA.state);if(s.isPureString())continue;const a=s.getValue();await Z(t.name,o.name,a),s.onChange(async i=>{await Z(t.name,o.name,i)})}}}async function Se(){var n;const e=await P();for(const[t,r]of e.entries())if(r.type!=="objectgroup"){const o=(n=r.properties)!==null&&n!==void 0?n:[];for(const s of o){if(s.type==="int"||s.type==="bool"||s.type==="object"||typeof s.value!="string")continue;const a=new Y(s.value,WA.state);if(a.isPureString())continue;const i=a.getValue();K(t,s.name,i),a.onChange(u=>{K(t,s.name,u)})}}}async function Z(n,e,t){console.log(n),(await WA.room.area.get(n)).setProperty(e,t)}function K(n,e,t){WA.room.setProperty(n,e,t),e==="visible"&&(t?WA.room.showLayer(n):WA.room.hideLayer(n))}let x,U=0,_=0;function N(n){if(WA.state[n.name]){let e=n.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.showLayer(t);e=n.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.hideLayer(t)}else{let e=n.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.hideLayer(t);e=n.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.showLayer(t)}}function Ce(n){const e=n.properties.getString("openSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=Q(n.properties.mustGetString("openLayer").split(`
`));if(o>t)return;r=1-o/t}e&&WA.sound.loadSound(e).play({volume:r})}function Le(n){const e=n.properties.getString("closeSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=Q(n.properties.mustGetString("closeLayer").split(`
`));if(o>t)return;r=1-o/t}e&&WA.sound.loadSound(e).play({volume:r})}function J(n){return n.map(e=>x.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function Q(n){const e=J(n),t=X(e),r=((t.right-t.left)/2+t.left)*32,o=((t.bottom-t.top)/2+t.top)*32;return Math.sqrt(Math.pow(U-r,2)+Math.pow(_-o,2))}function Me(n){WA.state.onVariableChange(n.name).subscribe(()=>{WA.state[n.name]?Ce(n):Le(n),N(n)}),N(n)}function Pe(n,e,t,r){const o=n.name;let s,a,i=!1;const u=t.getString("tag");let l=!0;u&&!WA.player.tags.includes(u)&&(l=!1);const f=!!u;function y(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=t.getString("closeTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,v()}})}function v(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=t.getString("openTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,y()}})}function T(c){const m=X(J(e.properties.mustGetString("closeLayer").split(`
`)));a=WA.room.website.create({name:"doorKeypad"+c,url:r+"/keypad.html#"+encodeURIComponent(c),position:{x:m.right*32,y:m.top*32,width:32*3,height:32*4},allowApi:!0})}function S(){a&&(WA.room.website.delete(a.name),a=void 0)}WA.room.onEnterLayer(o).subscribe(()=>{if(i=!0,t.getBoolean("autoOpen")&&l){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(f&&!l||!f)&&(t.getString("code")||t.getString("codeVariable"))){T(o);return}!l||(WA.state[e.name]?y():v())}),WA.room.onLeaveLayer(o).subscribe(()=>{i=!1,t.getBoolean("autoClose")&&(WA.state[e.name]=!1),s&&s.remove(),S()}),WA.state.onVariableChange(e.name).subscribe(()=>{i&&(!t.getBoolean("autoClose")&&WA.state[e.name]===!0&&y(),a&&WA.state[e.name]===!0&&S(),!t.getBoolean("autoOpen")&&WA.state[e.name]===!1&&v())})}function Ee(n){const e=n.properties.mustGetString("bellSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=Math.sqrt(Math.pow(n.x-U,2)+Math.pow(n.y-_,2));if(o>t)return;r=1-o/t}WA.sound.loadSound(e).play({volume:r})}function Te(n){WA.state[n.name]===void 0&&(WA.state[n.name]=0),WA.state.onVariableChange(n.name).subscribe(()=>{WA.state[n.name]&&Ee(n)})}function ke(n,e,t){let r;const o=e.getString("bellPopup");WA.room.onEnterLayer(t).subscribe(()=>{var s;o?r=WA.ui.openPopup(o,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[n]=WA.state[n]+1}}]):WA.state[n]=WA.state[n]+1}),WA.room.onLeaveLayer(t).subscribe(()=>{r&&(r.close(),r=void 0)})}async function Be(n){n=n!=null?n:j;const e=await te();x=await P();for(const t of e.values())t.properties.get("door")&&Me(t),t.properties.get("bell")&&Te(t);for(const t of x.values()){const r=new L(t.properties),o=r.getString("doorVariable");if(o&&t.type==="tilelayer"){const a=e.get(o);if(a===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+t.name+'"');Pe(t,a,r,n)}const s=r.getString("bellVariable");s&&ke(s,r,t.name)}WA.player.onPlayerMove(t=>{U=t.x,_=t.y})}function Re(n,e){const t=n.getString("bindVariable");if(t){const r=n.get("enterValue"),o=n.get("leaveValue"),s=n.getString("triggerMessage"),a=n.getString("tag");Ve(t,e,r,o,s,a)}}function Ve(n,e,t,r,o,s){s&&!WA.player.tags.includes(s)||(t!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[n]=t)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[n]=r}))}async function Ge(){const n=await P();for(const e of n.values()){const t=new L(e.properties);Re(t,e.name)}}let $;async function xe(n){const e=await WA.room.getTiledMap();n=n!=null?n:j,$=await P();const t=e.layers.find(r=>r.name==="configuration");if(t){const o=new L(t.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(n+"/configuration.html",!0)});for(const s of $.values()){const a=new L(s.properties),i=a.getString("openConfig");i&&s.type==="tilelayer"&&je(i.split(","),s.name,a)}}}function je(n,e,t){let r;const o=t.getString("openConfigAdminTag");let s=!0;o&&!WA.player.tags.includes(o)&&(s=!1);function a(){var u;r&&r.remove(),r=WA.ui.displayActionMessage({message:(u=t.getString("openConfigTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE or touch here to configure",callback:()=>O(n)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const u=t.getString("openConfigTrigger");s&&(u&&u==="onaction"?a():O(n))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),i()})}function Ie(){return WA.onInit().then(()=>{Be().catch(n=>console.error(n)),Ge().catch(n=>console.error(n)),xe().catch(n=>console.error(n)),Se().catch(n=>console.error(n)),We().catch(n=>console.error(n))}).catch(n=>console.error(n))}console.log("Script started successfully");var G=0;WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.onEnterLayer("ZoneMeetA").subscribe(async()=>{await WA.players.configureTracking();const n=WA.players.list();console.log("checking players",n);let e=Array.from(n);console.log(e.length)}),WA.room.onLeaveLayer("ZoneMeetA").subscribe(()=>{G=G-1,G===0&&WA.state.saveVariable("doorZoneA",!0)}),WA.room.onLeaveLayer("door_open_zone1").subscribe(()=>{WA.chat.sendChatMessage("Bienvenue chez Menaps Famille! tu peux tout demander ici","Mr Robot")}),WA.room.onLeaveLayer("clockZone").subscribe(Ue),Ie().then(()=>{console.log("Scripting API Extra ready")}).catch(n=>console.error(n))}).catch(n=>console.error(n));function Ue(){}
