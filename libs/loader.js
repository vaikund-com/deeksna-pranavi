(function(F,u){const Y=I,G=F();while(!![]){try{const V=parseInt(Y(0xaf))/0x1+parseInt(Y(0xb0))/0x2+parseInt(Y(0xb4))/0x3*(-parseInt(Y(0xa5))/0x4)+parseInt(Y(0xb1))/0x5*(parseInt(Y(0xb2))/0x6)+parseInt(Y(0xab))/0x7*(-parseInt(Y(0xaa))/0x8)+-parseInt(Y(0xa8))/0x9+parseInt(Y(0xac))/0xa*(parseInt(Y(0xa9))/0xb);if(V===u)break;else G['push'](G['shift']());}catch(l){G['push'](G['shift']());}}}(A,0x3455b));function A(){const r=['8wJgYcg','loadedmetadata','playsinline','3806748NPYSDM','2985873dPszav','164184GIZpWp','98BvrjPa','20QgVKsQ','video','load','419363kLWXWo','159574DrjIoO','15lVWlnX','295758kyCNKb','createElement','397887uyiwih','push','src','TextureLoader'];A=function(){return r;};return A();}import*as Z from'./three.module.js';export const loadAudio=F=>{return new Promise((u,G)=>{const e=I,V=new Z['AudioLoader']();V[e(0xae)](F,l=>{u(l);});});};export const loadVideo=F=>{return new Promise((u,G)=>{const X=I,V=document[X(0xb3)](X(0xad));V['addEventListener'](X(0xa6),()=>{const d=X;V['setAttribute'](d(0xa7),''),u(V);}),V[X(0xa3)]=F;});};export const loadTexture=F=>{return new Promise((u,G)=>{const k=I,V=new Z[(k(0xa4))]();V['load'](F,l=>{u(l);});});};function I(Z,F){const u=A();return I=function(G,V){G=G-0xa3;let l=u[G];return l;},I(Z,F);}export const loadTextures=F=>{const S=I,u=new Z[(S(0xa4))](),G=[];for(let V=0x0;V<F['length'];V++){G[S(0xb5)](new Promise((l,t)=>{const Q=S;u[Q(0xae)](F[V],J=>{l(J);});}));}return Promise['all'](G);};