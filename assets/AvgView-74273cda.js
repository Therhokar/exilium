import{c as k}from"./ChapterData-949e2452.js";import{j as w}from"./j2m-085c5257.js";import{a as y}from"./txtstore-26b1823b.js";import{x as $,_ as b,r as A,o as t,c as e,a,t as d,F as h,h as f,u as g,g as j,d as N}from"./index-feea957c.js";import{S as L}from"./SiteNotice-281a0423.js";const T={1:{1:1,2:[101,102,103,104,105,106,107,108,109,110,141,142,143,144,145,146,183,184]},2:{1:2,2:[201,202,203,204,205,206,207,208,209,210,241,242,243,244,245,246,281,282,283,284,285]},3:{1:3,2:[301,302,303,304,305,306,307,308,309,310,341,342,343,344,345,346,381,382,383,384,385]},4:{1:4,2:[401,402,403,404,405,406,407,408,409,410,441,442,443,444,445,446,481,482,483,484,485,486]},5:{1:5,2:[501,502,503,504,505,506,507,508,509,510,541,542,543,544,545,546,581,582,583,584]},6:{1:6,2:[601,602,603,604,605,606,607,608,609,610,641,642,643,644,645,646,681,682,683,684,685]},7:{1:7,2:[701,702,703,704,705,706,707,708,709,710,741,742,743,744,745,746,781,782,783]},3001:{1:3001,2:[30301,30302,30303,30304,30305,30306,30307,30308,30309,30341,30342,30343,30344,30345,30346,30381,30382]},3002:{1:3002,2:[30401,30402,30403,30404,30405,30406,30407,30408,30409]},4006:{1:4006,2:[30501,30502,30503,30504,30505,30506,30507,30508,30509,30541,30542,30543,30544,30545,30546,30586,30587]},91001:{1:91001,2:[161,162,163,164,165]},91002:{1:91002,2:[261,262,263,264,265]},91003:{1:91003,2:[361,362,363,364,365]},91004:{1:91004,2:[461,462,463,464,465]},91005:{1:91005,2:[561,562,563,564,565]},91006:{1:91006,2:[661,662,663,664,665]},91007:{1:91007,2:[761,762,763,764,765]},93001:{1:93001,2:[30101,30102,30103,30104,30105]},93002:{1:93002,2:[30461,30462,30463,30464,30465]},94006:{1:94006,2:[30561,30562,30563,30564,30565]},994001:{1:994001,2:[30111,30112,30113,30114,30115]},994002:{1:994002,2:[30471,30472,30473,30474,30475]},994004:{1:994004,2:[30571,30572,30573,30574,30575]}},V={0:{1:0,2:{1:138,2:316}},300:{1:300,2:{1:454,2:92}},400:{1:400,2:{1:546,2:58}},9100:{1:9100,2:{1:604,2:126}},9300:{1:9300,2:{2:46}},9400:{1:9400,2:{1:46,2:23}},99400:{1:99400,2:{1:69,2:69}}},B={1:10,2:1,data:T,extra:V},n=$({viewIdx:0,cptId:0,avgNo:"",avgName:""});const M={id:"stage-list"},E=["num"],S=["src"],D={__name:"AvgList",props:["chapterName"],setup(I){const p=I,u="/exilium/avg/"+n.cptId+"/",o=A([]),x=fetch(u+"roadmap.json").then(c=>c.json()),s=fetch(u+"detail.json").then(c=>c.json());Promise.all([x,s]).then(c=>{const r=c[0];l(r,Object.values(c[1])),o.value=r});function l(c,r){for(const i of c){const m=r.findLast(C=>C.num==i[0]);i.push((m==null?void 0:m.desc)||"")}}function _(c){const r=c.currentTarget;if(r.classList.contains("no-avg"))return;const i=r.getAttribute("num");fetch(u+i+".json").then(m=>{m.status==404?(r.lastElementChild.textContent+="（本关无AVG剧情）",r.classList.add("no-avg")):(n.avgNo=i,n.avgName=r.firstElementChild.textContent,n.viewIdx=2)})}function v(){n.viewIdx=0}return(c,r)=>(t(),e("section",null,[a("nav",null,[a("button",{onClick:v},"返回")]),a("h1",null,d(p.chapterName),1),a("div",M,[a("table",null,[(t(!0),e(h,null,f(o.value,i=>(t(),e("tr",{num:i[0],onClick:_},[a("td",null,d(i[0])+" "+d(i[1]),1),a("td",null,d(i[2]),1)],8,E))),256))]),a("img",{src:u+"map.png"},null,8,S)])]))}},F=b(D,[["__scopeId","data-v-fb52d929"]]);const H={class:"part"},G={class:"line"},O={class:"subline"},P={__name:"Avg",setup(I){const p=A([]);fetch(`/exilium/avg/${n.cptId}/${n.avgNo}.json`).then(o=>o.json()).then(o=>p.value=o);function u(){n.viewIdx=1}return(o,x)=>(t(),e("section",null,[a("nav",null,[a("button",{onClick:u},"返回")]),a("h1",null,d(g(n).avgName),1),(t(!0),e(h,null,f(p.value,(s,l)=>(t(),e("div",H,[a("h2",null,"第"+d(l+1)+"部分",1),(t(!0),e(h,null,f(s,_=>(t(),e("div",G,[(t(!0),e(h,null,f(_.split("|"),v=>(t(),e("p",O,d(v),1))),256))]))),256))]))),256))]))}},q=b(P,[["__scopeId","data-v-b18a9e34"]]);const z={key:0},J=["index","innerHTML"],K={__name:"AvgView",setup(I){const p=w(k.data),u=w(B.data),o=new Map;for(const s of u.keys())if(s<9e4){const l=p.get(s),_=s<1e3?"第"+s+"章 ":"活动 ";o.set(s,new Map([["name",_+y(l[2][1])],["intro",y(l[21][1])]]))}function x(s){const l=+s.currentTarget.getAttribute("index");n.cptId=l,n.viewIdx=1}return(s,l)=>(t(),e(h,null,[j(L),g(n).viewIdx===0?(t(),e("ul",z,[(t(!0),e(h,null,f(g(o),([_,v])=>(t(),e("li",{index:_,onClick:x,innerHTML:`<span style=font-weight:bold;>${v.get("name")}</span>  ${v.get("intro")||""}`},null,8,J))),256))])):g(n).viewIdx===1?(t(),N(F,{key:1,chapterName:g(o).get(g(n).cptId).get("name")},null,8,["chapterName"])):(t(),N(q,{key:2}))],64))}},Y=b(K,[["__scopeId","data-v-19b2e211"]]);export{Y as default};
