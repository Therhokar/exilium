import{c as y}from"./ChapterData-1511dfcb.js";import{j as C}from"./j2m-085c5257.js";import{g as b}from"./txtstore-843c5262.js";import{q as $,_ as w,r as A,o as t,c as e,d as s,t as d,F as m,e as f,u as g,b as j,k as N}from"./index-71d36ee0.js";import{S as L}from"./SiteNotice-942fafb8.js";const n=$({viewIdx:0,cptId:0,avgNo:"",avgName:""});const T={id:"stage-list"},V=["num"],M=["src"],B={__name:"AvgList",props:["chapterName"],setup(x){const p=x,c="/exilium/avg/"+n.cptId+"/",l=A([]),r=fetch(c+"roadmap.json").then(o=>o.json()),u=fetch(c+"detail.json").then(o=>o.json());Promise.all([r,u]).then(o=>{const a=o[0];_(a,Object.values(o[1])),l.value=a});function _(o,a){for(const i of o){const h=a.findLast(k=>k.num==i[0]);i.push((h==null?void 0:h.desc)||"")}}function v(o){const a=o.currentTarget;if(a.classList.contains("no-avg"))return;const i=a.getAttribute("num");fetch(c+i+".json").then(h=>{h.status==404?(a.lastElementChild.textContent+="（本关无AVG剧情）",a.classList.add("no-avg")):(n.avgNo=i,n.avgName=a.firstElementChild.textContent,n.viewIdx=2)})}function I(){n.viewIdx=0}return(o,a)=>(t(),e("section",null,[s("nav",null,[s("button",{onClick:I},"返回")]),s("h1",null,d(p.chapterName),1),s("div",T,[s("table",null,[(t(!0),e(m,null,f(l.value,i=>(t(),e("tr",{num:i[0],onClick:v},[s("td",null,d(i[0])+" "+d(i[1]),1),s("td",null,d(i[2]),1)],8,V))),256))]),s("img",{src:c+"map.png"},null,8,M)])]))}},E=w(B,[["__scopeId","data-v-fb52d929"]]);const S={class:"part"},F={class:"line"},H={class:"subline"},q={__name:"Avg",setup(x){const p=A([]);fetch(`/exilium/avg/${n.cptId}/${n.avgNo}.json`).then(l=>l.json()).then(l=>p.value=l);function c(){n.viewIdx=1}return(l,r)=>(t(),e("section",null,[s("nav",null,[s("button",{onClick:c},"返回")]),s("h1",null,d(g(n).avgName),1),(t(!0),e(m,null,f(p.value,(u,_)=>(t(),e("div",S,[s("h2",null,"第"+d(_+1)+"部分",1),(t(!0),e(m,null,f(u,v=>(t(),e("div",F,[(t(!0),e(m,null,f(v.split("|"),I=>(t(),e("p",H,d(I),1))),256))]))),256))]))),256))]))}},D=w(q,[["__scopeId","data-v-b18a9e34"]]);const G={key:0},O=["index","innerHTML"],P={__name:"AvgView",setup(x){const p=C(y.data),c=new Map;for(const[r,u]of p)if(r<4e3){const _=r<1e3?"第"+r+"章 ":"活动 ";c.set(r,new Map([["name",_+b(u[18][8])],["intro",b(u[170][8])]]))}function l(r){const u=+r.currentTarget.getAttribute("index");n.cptId=u,n.viewIdx=1}return(r,u)=>(t(),e(m,null,[j(L),g(n).viewIdx===0?(t(),e("ul",G,[(t(!0),e(m,null,f(g(c),([_,v])=>(t(),e("li",{index:_,onClick:l,innerHTML:`<span style=font-weight:bold;>${v.get("name")}</span>  ${v.get("intro")||""}`},null,8,O))),256))])):g(n).viewIdx===1?(t(),N(E,{key:1,chapterName:g(c).get(g(n).cptId).get("name")},null,8,["chapterName"])):(t(),N(D,{key:2}))],64))}},U=w(P,[["__scopeId","data-v-5031543a"]]);export{U as default};
