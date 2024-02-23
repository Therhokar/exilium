import{_ as b,r as v,o as i,c as g,a as e,j as c,v as f,t as r,F as y,h as w,p as E,e as L,g as k,k as V,d as U}from"./index-224f73ca.js";import{j as I}from"./j2m-085c5257.js";import{S as D}from"./SiteNotice-10c4e61a.js";const B={1:{8:1,32:100001},2:{8:2,16:2,32:100002},3:{8:3,16:2,32:100003},4:{8:4,16:5,32:100004},5:{8:5,16:5,32:100005},6:{8:6,16:5,32:100006},7:{8:7,16:5,32:100007},8:{8:8,16:5,32:100008},9:{8:9,16:5,32:100009},10:{8:10,16:60,32:100010},11:{8:11,16:150,32:100011},12:{8:12,16:300,32:100012},13:{8:13,16:480,32:100013},14:{8:14,16:525,32:100014},15:{8:15,16:545,32:100015},16:{8:16,16:570,32:100016},17:{8:17,16:595,32:100017},18:{8:18,16:625,32:100018},19:{8:19,16:655,32:100019},20:{8:20,16:685,32:100020},21:{8:21,16:715,32:100021},22:{8:22,16:860,32:100022},23:{8:23,16:1e3,32:100023},24:{8:24,16:1335,32:100024},25:{8:25,16:1670,32:100025},26:{8:26,16:1820,32:100026},27:{8:27,16:1820,32:100027},28:{8:28,16:2e3,32:100028},29:{8:29,16:2320,32:100029},30:{8:30,16:2320,32:100030},31:{8:31,16:2320,32:100031},32:{8:32,16:2320,32:100032},33:{8:33,16:4220,32:100033},34:{8:34,16:4670,32:100034},35:{8:35,16:4670,32:100035},36:{8:36,16:6490,32:100036},37:{8:37,16:7570,32:100037},38:{8:38,16:8655,32:100038},39:{8:39,16:9735,32:100039},40:{8:40,16:10815,32:100040},41:{8:41,16:11900,32:100041},42:{8:42,16:12980,32:100042},43:{8:43,16:14060,32:100043},44:{8:44,16:15145,32:100044},45:{8:45,16:23520,32:100045},46:{8:46,16:24045,32:100046},47:{8:47,16:24565,32:100047},48:{8:48,16:25090,32:100048},49:{8:49,16:25610,32:100049},50:{8:50,16:26135,32:100050},51:{8:51,16:26655,32:100051},52:{8:52,16:27180,32:100052},53:{8:53,16:27700,32:100053},54:{8:54,16:28225,32:100054},55:{8:55,16:28750,32:100055},56:{8:56,16:29270,32:100056},57:{8:57,16:29795,32:100057},58:{8:58,16:30315,32:100058},59:{8:59,16:30840,32:100059},60:{8:60,16:31360,32:100060}},j={0:{8:0,18:{8:12,16:88}},1:{8:1,18:{8:100,16:109}},2:{8:2,18:{8:209,16:110}},3:{8:3,18:{8:319,16:110}},4:{8:4,18:{8:429,16:115}},5:{8:5,18:{8:544,16:120}},6:{8:6,18:{16:12}}},G={8:10,16:1,data:B,extra:j};const x=u=>(E("data-v-677ca5de"),u=u(),L(),u),M=x(()=>e("legend",null,"当前",-1)),N=x(()=>e("label",{for:"currentLv"},"当前等级",-1)),P=["max"],T=x(()=>e("label",{for:"currentExp"},"当前等级经验",-1)),W=["max"],F=x(()=>e("legend",null,"目标",-1)),R=x(()=>e("label",{for:"targetLv"},"目标等级",-1)),q=x(()=>e("legend",null,"升级经验",-1)),z=x(()=>e("tr",null,[e("th",null,"等级"),e("th",null,"升级经验"),e("th",null,"累计经验")],-1)),A=x(()=>e("td",null,"60",-1)),C=x(()=>e("td",null,"-",-1)),H={__name:"GunExp",setup(u){const _=I(G.data),n=[];for(let s=61;--s>1;)n.unshift(_.get(s)[16]);const t=v(1),a=v(0),d=v(60),p=(s,l)=>s+l;return(s,l)=>(i(),g(y,null,[e("form",null,[e("fieldset",null,[M,N,c(e("input",{id:"currentLv",type:"number","onUpdate:modelValue":l[0]||(l[0]=o=>t.value=o),min:"1",max:d.value-1},null,8,P),[[f,t.value]]),T,c(e("input",{id:"currentExp",type:"number","onUpdate:modelValue":l[1]||(l[1]=o=>a.value=o),min:"0",max:n[t.value-1]-1},null,8,W),[[f,a.value]])]),e("fieldset",null,[F,R,c(e("input",{id:"targetLv",type:"number","onUpdate:modelValue":l[2]||(l[2]=o=>d.value=o),min:"2",max:"60"},null,512),[[f,d.value]])]),e("fieldset",null,[q,e("output",null,r(t.value<d.value?n.slice(t.value-1,d.value-1).reduce(p)-a.value:"当前等级需小于目标等级"),1)])]),e("table",null,[z,(i(),g(y,null,w(n,(o,$)=>e("tr",null,[e("td",null,r($+1),1),e("td",null,r(o),1),e("td",null,r($?n.slice(0,$).reduce(p):"-"),1)])),64)),e("tr",null,[A,C,e("td",null,r(n.reduce(p)),1)])])],64))}},J=b(H,[["__scopeId","data-v-677ca5de"]]),K={3:{8:3,24:3,32:60,72:30001,80:8301},4:{8:4,24:4,32:60,72:30001,80:8301},5:{8:5,24:5,32:60,72:30001,80:8301},103:{8:103,16:1,24:3,32:60,72:30001,80:8301},104:{8:104,16:1,24:4,32:60,72:30001,80:8301},105:{8:105,16:1,24:5,32:60,72:30001,80:8301},203:{8:203,16:2,24:3,32:60,40:5,48:100,56:5,64:100,72:30002,80:8301},204:{8:204,16:2,24:4,32:60,40:5,48:100,56:5,64:100,72:30002,80:8301},205:{8:205,16:2,24:5,32:60,40:5,48:100,56:5,64:100,72:30002,80:8301},303:{8:303,16:3,24:3,32:60,40:10,48:200,56:15,64:300,72:30003,80:8301},304:{8:304,16:3,24:4,32:60,40:10,48:200,56:15,64:300,72:30003,80:8301},305:{8:305,16:3,24:5,32:60,40:10,48:200,56:15,64:300,72:30003,80:8301},403:{8:403,16:4,24:3,32:60,40:20,48:300,56:35,64:600,72:30004,80:8301},404:{8:404,16:4,24:4,32:60,40:20,48:300,56:35,64:600,72:30004,80:8301},405:{8:405,16:4,24:5,32:60,40:20,48:300,56:35,64:600,72:30004,80:8301},503:{8:503,16:5,24:3,32:60,40:25,48:400,56:60,64:1e3,72:30005,80:8301},504:{8:504,16:5,24:4,32:60,40:25,48:400,56:60,64:1e3,72:30005,80:8301},505:{8:505,16:5,24:5,32:60,40:25,48:400,56:60,64:1e3,72:30005,80:8301},603:{8:603,16:6,24:3,32:60,40:30,48:500,56:90,64:1500,72:30006,80:8301},604:{8:604,16:6,24:4,32:60,40:30,48:500,56:90,64:1500,72:30006,80:8301},605:{8:605,16:6,24:5,32:60,40:30,48:500,56:90,64:1500,72:30006,80:8301},703:{8:703,16:7,24:3,32:60,40:55,48:600,56:145,64:2100,72:30007,80:8301},704:{8:704,16:7,24:4,32:60,40:55,48:600,56:145,64:2100,72:30007,80:8301},705:{8:705,16:7,24:5,32:60,40:55,48:600,56:145,64:2100,72:30007,80:8301},803:{8:803,16:8,24:3,32:60,40:105,48:700,56:250,64:2800,72:30008,80:8301},804:{8:804,16:8,24:4,32:60,40:105,48:700,56:250,64:2800,72:30008,80:8301},805:{8:805,16:8,24:5,32:60,40:105,48:700,56:250,64:2800,72:30008,80:8301},903:{8:903,16:9,24:3,32:60,40:160,48:800,56:410,64:3600,72:30009,80:8301},904:{8:904,16:9,24:4,32:60,40:160,48:800,56:410,64:3600,72:30009,80:8301},905:{8:905,16:9,24:5,32:60,40:160,48:800,56:410,64:3600,72:30009,80:8301},1003:{8:1003,16:10,24:3,32:60,40:210,48:900,56:620,64:4500,72:30010,80:8301},1004:{8:1004,16:10,24:4,32:60,40:210,48:900,56:620,64:4500,72:30010,80:8301},1005:{8:1005,16:10,24:5,32:60,40:210,48:900,56:620,64:4500,72:30010,80:8301},1103:{8:1103,16:11,24:3,32:60,40:265,48:1100,56:885,64:5600,72:30011,80:8301},1104:{8:1104,16:11,24:4,32:60,40:265,48:1100,56:885,64:5600,72:30011,80:8301},1105:{8:1105,16:11,24:5,32:60,40:265,48:1100,56:885,64:5600,72:30011,80:8301},1203:{8:1203,16:12,24:3,32:60,40:315,48:1300,56:1200,64:6900,72:30012,80:8301},1204:{8:1204,16:12,24:4,32:60,40:315,48:1300,56:1200,64:6900,72:30012,80:8301},1205:{8:1205,16:12,24:5,32:60,40:315,48:1300,56:1200,64:6900,72:30012,80:8301},1303:{8:1303,16:13,24:3,32:60,40:340,48:1500,56:1540,64:8400,72:30013,80:8301},1304:{8:1304,16:13,24:4,32:60,40:340,48:1500,56:1540,64:8400,72:30013,80:8301},1305:{8:1305,16:13,24:5,32:60,40:340,48:1500,56:1540,64:8400,72:30013,80:8301},1403:{8:1403,16:14,24:3,32:60,40:370,48:1700,56:1910,64:10100,72:30014,80:8301},1404:{8:1404,16:14,24:4,32:60,40:370,48:1700,56:1910,64:10100,72:30014,80:8301},1405:{8:1405,16:14,24:5,32:60,40:370,48:1700,56:1910,64:10100,72:30014,80:8301},1503:{8:1503,16:15,24:3,32:60,40:395,48:1900,56:2305,64:12e3,72:30015,80:8301},1504:{8:1504,16:15,24:4,32:60,40:395,48:1900,56:2305,64:12e3,72:30015,80:8301},1505:{8:1505,16:15,24:5,32:60,40:395,48:1900,56:2305,64:12e3,72:30015,80:8301},1603:{8:1603,16:16,24:3,32:60,40:395,48:2100,56:2700,64:14100,72:30016,80:8301},1604:{8:1604,16:16,24:4,32:60,40:395,48:2100,56:2700,64:14100,72:30016,80:8301},1605:{8:1605,16:16,24:5,32:60,40:395,48:2100,56:2700,64:14100,72:30016,80:8301},1703:{8:1703,16:17,24:3,32:60,40:410,48:2400,56:3110,64:16500,72:30017,80:8301},1704:{8:1704,16:17,24:4,32:60,40:410,48:2400,56:3110,64:16500,72:30017,80:8301},1705:{8:1705,16:17,24:5,32:60,40:410,48:2400,56:3110,64:16500,72:30017,80:8301},1803:{8:1803,16:18,24:3,32:60,40:510,48:2700,56:3620,64:19200,72:30018,80:8301},1804:{8:1804,16:18,24:4,32:60,40:510,48:2700,56:3620,64:19200,72:30018,80:8301},1805:{8:1805,16:18,24:5,32:60,40:510,48:2700,56:3620,64:19200,72:30018,80:8301},1903:{8:1903,16:19,24:3,32:60,40:610,48:3e3,56:4230,64:22200,72:30019,80:8301},1904:{8:1904,16:19,24:4,32:60,40:610,48:3e3,56:4230,64:22200,72:30019,80:8301},1905:{8:1905,16:19,24:5,32:60,40:610,48:3e3,56:4230,64:22200,72:30019,80:8301},2003:{8:2003,16:20,24:3,32:60,40:715,48:3300,56:4945,64:25500,72:30020,80:8301},2004:{8:2004,16:20,24:4,32:60,40:715,48:3300,56:4945,64:25500,72:30020,80:8301},2005:{8:2005,16:20,24:5,32:60,40:715,48:3300,56:4945,64:25500,72:30020,80:8301},2103:{8:2103,16:21,24:3,32:60,40:815,48:4e3,56:5760,64:29500,72:30021,80:8301},2104:{8:2104,16:21,24:4,32:60,40:815,48:4e3,56:5760,64:29500,72:30021,80:8301},2105:{8:2105,16:21,24:5,32:60,40:815,48:4e3,56:5760,64:29500,72:30021,80:8301},2203:{8:2203,16:22,24:3,32:60,40:860,48:4500,56:6620,64:34e3,72:30022,80:8301},2204:{8:2204,16:22,24:4,32:60,40:860,48:4500,56:6620,64:34e3,72:30022,80:8301},2205:{8:2205,16:22,24:5,32:60,40:860,48:4500,56:6620,64:34e3,72:30022,80:8301},2303:{8:2303,16:23,24:3,32:60,40:1e3,48:5e3,56:7620,64:39e3,72:30023,80:8301},2304:{8:2304,16:23,24:4,32:60,40:1e3,48:5e3,56:7620,64:39e3,72:30023,80:8301},2305:{8:2305,16:23,24:5,32:60,40:1e3,48:5e3,56:7620,64:39e3,72:30023,80:8301},2403:{8:2403,16:24,24:3,32:60,40:1335,48:5500,56:8955,64:44500,72:30024,80:8301},2404:{8:2404,16:24,24:4,32:60,40:1335,48:5500,56:8955,64:44500,72:30024,80:8301},2405:{8:2405,16:24,24:5,32:60,40:1335,48:5500,56:8955,64:44500,72:30024,80:8301},2503:{8:2503,16:25,24:3,32:60,40:1750,48:6e3,56:10705,64:50500,72:30025,80:8301},2504:{8:2504,16:25,24:4,32:60,40:1750,48:6e3,56:10705,64:50500,72:30025,80:8301},2505:{8:2505,16:25,24:5,32:60,40:1750,48:6e3,56:10705,64:50500,72:30025,80:8301},2603:{8:2603,16:26,24:3,32:60,40:1910,48:6500,56:12615,64:57e3,72:30026,80:8301},2604:{8:2604,16:26,24:4,32:60,40:1910,48:6500,56:12615,64:57e3,72:30026,80:8301},2605:{8:2605,16:26,24:5,32:60,40:1910,48:6500,56:12615,64:57e3,72:30026,80:8301},2703:{8:2703,16:27,24:3,32:60,40:2275,48:7e3,56:14890,64:64e3,72:30027,80:8301},2704:{8:2704,16:27,24:4,32:60,40:2275,48:7e3,56:14890,64:64e3,72:30027,80:8301},2705:{8:2705,16:27,24:5,32:60,40:2275,48:7e3,56:14890,64:64e3,72:30027,80:8301},2803:{8:2803,16:28,24:3,32:60,40:2500,48:7500,56:17390,64:71500,72:30028,80:8301},2804:{8:2804,16:28,24:4,32:60,40:2500,48:7500,56:17390,64:71500,72:30028,80:8301},2805:{8:2805,16:28,24:5,32:60,40:2500,48:7500,56:17390,64:71500,72:30028,80:8301},2903:{8:2903,16:29,24:3,32:60,40:2500,48:8e3,56:19890,64:79500,72:30029,80:8301},2904:{8:2904,16:29,24:4,32:60,40:2500,48:8e3,56:19890,64:79500,72:30029,80:8301},2905:{8:2905,16:29,24:5,32:60,40:2500,48:8e3,56:19890,64:79500,72:30029,80:8301},3003:{8:3003,16:30,24:3,32:60,40:2500,48:8500,56:22390,64:88e3,72:30030,80:8301},3004:{8:3004,16:30,24:4,32:60,40:2500,48:8500,56:22390,64:88e3,72:30030,80:8301},3005:{8:3005,16:30,24:5,32:60,40:2500,48:8500,56:22390,64:88e3,72:30030,80:8301},3103:{8:3103,16:31,24:3,32:60,40:2580,48:1e4,56:24970,64:98e3,72:30031,80:8301},3104:{8:3104,16:31,24:4,32:60,40:2580,48:1e4,56:24970,64:98e3,72:30031,80:8301},3105:{8:3105,16:31,24:5,32:60,40:2580,48:1e4,56:24970,64:98e3,72:30031,80:8301},3203:{8:3203,16:32,24:3,32:60,40:2580,48:11e3,56:27550,64:109e3,72:30032,80:8301},3204:{8:3204,16:32,24:4,32:60,40:2580,48:11e3,56:27550,64:109e3,72:30032,80:8301},3205:{8:3205,16:32,24:5,32:60,40:2580,48:11e3,56:27550,64:109e3,72:30032,80:8301},3303:{8:3303,16:33,24:3,32:60,40:4125,48:12e3,56:31675,64:121e3,72:30033,80:8301},3304:{8:3304,16:33,24:4,32:60,40:4125,48:12e3,56:31675,64:121e3,72:30033,80:8301},3305:{8:3305,16:33,24:5,32:60,40:4125,48:12e3,56:31675,64:121e3,72:30033,80:8301},3403:{8:3403,16:34,24:3,32:60,40:5160,48:13e3,56:36835,64:134e3,72:30034,80:8301},3404:{8:3404,16:34,24:4,32:60,40:5160,48:13e3,56:36835,64:134e3,72:30034,80:8301},3405:{8:3405,16:34,24:5,32:60,40:5160,48:13e3,56:36835,64:134e3,72:30034,80:8301},3503:{8:3503,16:35,24:3,32:60,40:6190,48:14e3,56:43025,64:148e3,72:30035,80:8301},3504:{8:3504,16:35,24:4,32:60,40:6190,48:14e3,56:43025,64:148e3,72:30035,80:8301},3505:{8:3505,16:35,24:5,32:60,40:6190,48:14e3,56:43025,64:148e3,72:30035,80:8301},3603:{8:3603,16:36,24:3,32:60,40:7995,48:15e3,56:51020,64:163e3,72:30036,80:8301},3604:{8:3604,16:36,24:4,32:60,40:7995,48:15e3,56:51020,64:163e3,72:30036,80:8301},3605:{8:3605,16:36,24:5,32:60,40:7995,48:15e3,56:51020,64:163e3,72:30036,80:8301},3703:{8:3703,16:37,24:3,32:60,40:8795,48:16e3,56:59815,64:179e3,72:30037,80:8301},3704:{8:3704,16:37,24:4,32:60,40:8795,48:16e3,56:59815,64:179e3,72:30037,80:8301},3705:{8:3705,16:37,24:5,32:60,40:8795,48:16e3,56:59815,64:179e3,72:30037,80:8301},3803:{8:3803,16:38,24:3,32:60,40:9595,48:17e3,56:69410,64:196e3,72:30038,80:8301},3804:{8:3804,16:38,24:4,32:60,40:9595,48:17e3,56:69410,64:196e3,72:30038,80:8301},3805:{8:3805,16:38,24:5,32:60,40:9595,48:17e3,56:69410,64:196e3,72:30038,80:8301},3903:{8:3903,16:39,24:3,32:60,40:10395,48:18e3,56:79805,64:214e3,72:30039,80:8301},3904:{8:3904,16:39,24:4,32:60,40:10395,48:18e3,56:79805,64:214e3,72:30039,80:8301},3905:{8:3905,16:39,24:5,32:60,40:10395,48:18e3,56:79805,64:214e3,72:30039,80:8301},4003:{8:4003,16:40,24:3,32:60,40:11195,48:19e3,56:91e3,64:233e3,72:30040,80:8301},4004:{8:4004,16:40,24:4,32:60,40:11195,48:19e3,56:91e3,64:233e3,72:30040,80:8301},4005:{8:4005,16:40,24:5,32:60,40:11195,48:19e3,56:91e3,64:233e3,72:30040,80:8301},4103:{8:4103,16:41,24:3,32:60,40:11995,48:25e3,56:102995,64:258e3,72:30041,80:8301},4104:{8:4104,16:41,24:4,32:60,40:11995,48:25e3,56:102995,64:258e3,72:30041,80:8301},4105:{8:4105,16:41,24:5,32:60,40:11995,48:25e3,56:102995,64:258e3,72:30041,80:8301},4203:{8:4203,16:42,24:3,32:60,40:12790,48:27e3,56:115785,64:285e3,72:30042,80:8301},4204:{8:4204,16:42,24:4,32:60,40:12790,48:27e3,56:115785,64:285e3,72:30042,80:8301},4205:{8:4205,16:42,24:5,32:60,40:12790,48:27e3,56:115785,64:285e3,72:30042,80:8301},4303:{8:4303,16:43,24:3,32:60,40:13590,48:29e3,56:129375,64:314e3,72:30043,80:8301},4304:{8:4304,16:43,24:4,32:60,40:13590,48:29e3,56:129375,64:314e3,72:30043,80:8301},4305:{8:4305,16:43,24:5,32:60,40:13590,48:29e3,56:129375,64:314e3,72:30043,80:8301},4403:{8:4403,16:44,24:3,32:60,40:17990,48:31e3,56:147365,64:345e3,72:30044,80:8301},4404:{8:4404,16:44,24:4,32:60,40:17990,48:31e3,56:147365,64:345e3,72:30044,80:8301},4405:{8:4405,16:44,24:5,32:60,40:17990,48:31e3,56:147365,64:345e3,72:30044,80:8301},4503:{8:4503,16:45,24:3,32:60,40:27840,48:33e3,56:175205,64:378e3,72:30045,80:8301},4504:{8:4504,16:45,24:4,32:60,40:27840,48:33e3,56:175205,64:378e3,72:30045,80:8301},4505:{8:4505,16:45,24:5,32:60,40:27840,48:33e3,56:175205,64:378e3,72:30045,80:8301},4603:{8:4603,16:46,24:3,32:60,40:28460,48:35e3,56:203665,64:413e3,72:30046,80:8301},4604:{8:4604,16:46,24:4,32:60,40:28460,48:35e3,56:203665,64:413e3,72:30046,80:8301},4605:{8:4605,16:46,24:5,32:60,40:28460,48:35e3,56:203665,64:413e3,72:30046,80:8301},4703:{8:4703,16:47,24:3,32:60,40:29080,48:37e3,56:232745,64:45e4,72:30047,80:8301},4704:{8:4704,16:47,24:4,32:60,40:29080,48:37e3,56:232745,64:45e4,72:30047,80:8301},4705:{8:4705,16:47,24:5,32:60,40:29080,48:37e3,56:232745,64:45e4,72:30047,80:8301},4803:{8:4803,16:48,24:3,32:60,40:29695,48:39e3,56:262440,64:489e3,72:30048,80:8301},4804:{8:4804,16:48,24:4,32:60,40:29695,48:39e3,56:262440,64:489e3,72:30048,80:8301},4805:{8:4805,16:48,24:5,32:60,40:29695,48:39e3,56:262440,64:489e3,72:30048,80:8301},4903:{8:4903,16:49,24:3,32:60,40:30315,48:41e3,56:292755,64:53e4,72:30049,80:8301},4904:{8:4904,16:49,24:4,32:60,40:30315,48:41e3,56:292755,64:53e4,72:30049,80:8301},4905:{8:4905,16:49,24:5,32:60,40:30315,48:41e3,56:292755,64:53e4,72:30049,80:8301},5003:{8:5003,16:50,24:3,32:60,40:30935,48:43e3,56:323690,64:573e3,72:30050,80:8301},5004:{8:5004,16:50,24:4,32:60,40:30935,48:43e3,56:323690,64:573e3,72:30050,80:8301},5005:{8:5005,16:50,24:5,32:60,40:30935,48:43e3,56:323690,64:573e3,72:30050,80:8301},5103:{8:5103,16:51,24:3,32:60,40:31555,48:5e4,56:355245,64:623e3,72:30051,80:8301},5104:{8:5104,16:51,24:4,32:60,40:31555,48:5e4,56:355245,64:623e3,72:30051,80:8301},5105:{8:5105,16:51,24:5,32:60,40:31555,48:5e4,56:355245,64:623e3,72:30051,80:8301},5203:{8:5203,16:52,24:3,32:60,40:32170,48:53e3,56:387415,64:676e3,72:30052,80:8301},5204:{8:5204,16:52,24:4,32:60,40:32170,48:53e3,56:387415,64:676e3,72:30052,80:8301},5205:{8:5205,16:52,24:5,32:60,40:32170,48:53e3,56:387415,64:676e3,72:30052,80:8301},5303:{8:5303,16:53,24:3,32:60,40:32790,48:56e3,56:420205,64:732e3,72:30053,80:8301},5304:{8:5304,16:53,24:4,32:60,40:32790,48:56e3,56:420205,64:732e3,72:30053,80:8301},5305:{8:5305,16:53,24:5,32:60,40:32790,48:56e3,56:420205,64:732e3,72:30053,80:8301},5403:{8:5403,16:54,24:3,32:60,40:33410,48:59e3,56:453615,64:791e3,72:30054,80:8301},5404:{8:5404,16:54,24:4,32:60,40:33410,48:59e3,56:453615,64:791e3,72:30054,80:8301},5405:{8:5405,16:54,24:5,32:60,40:33410,48:59e3,56:453615,64:791e3,72:30054,80:8301},5503:{8:5503,16:55,24:3,32:60,40:34025,48:62e3,56:487640,64:853e3,72:30055,80:8301},5504:{8:5504,16:55,24:4,32:60,40:34025,48:62e3,56:487640,64:853e3,72:30055,80:8301},5505:{8:5505,16:55,24:5,32:60,40:34025,48:62e3,56:487640,64:853e3,72:30055,80:8301},5603:{8:5603,16:56,24:3,32:60,40:34645,48:65e3,56:522285,64:918e3,72:30056,80:8301},5604:{8:5604,16:56,24:4,32:60,40:34645,48:65e3,56:522285,64:918e3,72:30056,80:8301},5605:{8:5605,16:56,24:5,32:60,40:34645,48:65e3,56:522285,64:918e3,72:30056,80:8301},5703:{8:5703,16:57,24:3,32:60,40:35265,48:7e4,56:557550,64:988e3,72:30057,80:8301},5704:{8:5704,16:57,24:4,32:60,40:35265,48:7e4,56:557550,64:988e3,72:30057,80:8301},5705:{8:5705,16:57,24:5,32:60,40:35265,48:7e4,56:557550,64:988e3,72:30057,80:8301},5803:{8:5803,16:58,24:3,32:60,40:35885,48:75e3,56:593435,64:1063e3,72:30058,80:8301},5804:{8:5804,16:58,24:4,32:60,40:35885,48:75e3,56:593435,64:1063e3,72:30058,80:8301},5805:{8:5805,16:58,24:5,32:60,40:35885,48:75e3,56:593435,64:1063e3,72:30058,80:8301},5903:{8:5903,16:59,24:3,32:60,40:36500,48:8e4,56:629935,64:1143e3,72:30059,80:8301},5904:{8:5904,16:59,24:4,32:60,40:36500,48:8e4,56:629935,64:1143e3,72:30059,80:8301},5905:{8:5905,16:59,24:5,32:60,40:36500,48:8e4,56:629935,64:1143e3,72:30059,80:8301},6003:{8:6003,16:60,24:3,32:60,40:38e3,48:85e3,56:667935,64:1228e3,72:30060,80:8301},6004:{8:6004,16:60,24:4,32:60,40:38e3,48:85e3,56:667935,64:1228e3,72:30060,80:8301},6005:{8:6005,16:60,24:5,32:60,40:38e3,48:85e3,56:667935,64:1228e3,72:30060,80:8301}},O={0:{8:0,18:{16:5715}}},Q={8:183,data:K,extra:O};const h=u=>(E("data-v-983c8a87"),u=u(),L(),u),X=h(()=>e("legend",null,"当前",-1)),Y=h(()=>e("label",{for:"currentLv"},"当前熟练度",-1)),Z=["max"],e0=h(()=>e("legend",null,"目标",-1)),t0=h(()=>e("label",{for:"targetLv"},"目标熟练度",-1)),l0=h(()=>e("legend",null,"提升消耗解析图纸",-1)),n0=h(()=>e("tr",null,[e("th",null,"熟练度"),e("th",null,"提升消耗"),e("th",null,"累计消耗")],-1)),u0=h(()=>e("td",null,"60",-1)),a0=h(()=>e("td",null,"-",-1)),o0={__name:"WeaponExp",setup(u){const _=I(Q.data),n=[];for(let p=61;--p>1;)n.unshift(_.get(p*100+3)[40]);const t=v(1),a=v(60),d=(p,s)=>p+s;return(p,s)=>(i(),g(y,null,[e("form",null,[e("fieldset",null,[X,Y,c(e("input",{id:"currentLv",type:"number","onUpdate:modelValue":s[0]||(s[0]=l=>t.value=l),min:"1",max:a.value-1},null,8,Z),[[f,t.value]])]),e("fieldset",null,[e0,t0,c(e("input",{id:"targetLv",type:"number","onUpdate:modelValue":s[1]||(s[1]=l=>a.value=l),min:"2",max:"60"},null,512),[[f,a.value]])]),e("fieldset",null,[l0,e("output",null,r(t.value<a.value?n.slice(t.value-1,a.value-1).reduce(d):"当前熟练度需小于目标熟练度"),1)])]),e("table",null,[n0,(i(),g(y,null,w(n,(l,o)=>e("tr",null,[e("td",null,r(o+1),1),e("td",null,r(l),1),e("td",null,r(o?n.slice(0,o).reduce(d):"-"),1)])),64)),e("tr",null,[u0,a0,e("td",null,r(n.reduce(d)),1)])])],64))}},s0=b(o0,[["__scopeId","data-v-983c8a87"]]),d0={1:{8:1,48:1,56:1},2:{8:2,16:10,26:{8:101,16:10},48:2,56:2},3:{8:3,16:15,26:{8:101,16:10},48:3,56:3},4:{8:4,16:20,26:{8:101,16:10},48:4,56:4},5:{8:5,16:25,26:{8:101,16:10},48:5,56:5},6:{8:6,16:30,26:{8:101,16:10},48:6,56:6},7:{8:7,16:35,26:{8:101,16:10},48:7,56:7},8:{8:8,16:40,26:{8:101,16:10},48:8,56:8},9:{8:9,16:50,26:{8:101,16:10},48:9,56:9},10:{8:10,16:81,26:{8:101,16:10},48:10,56:10},11:{8:11,16:101,26:{8:101,16:10},48:11,56:11},12:{8:12,16:122,26:{8:101,16:10},48:12,56:12},13:{8:13,16:142,26:{8:101,16:10},48:13,56:13},14:{8:14,16:152,26:{8:101,16:10},48:14,56:14},15:{8:15,16:163,26:{8:101,16:20},48:15,56:15},16:{8:16,16:163,26:{8:101,16:20},48:16,56:16},17:{8:17,16:173,26:{8:101,16:20},48:17,56:17},18:{8:18,16:184,26:{8:101,16:20},48:18,56:18},19:{8:19,16:215,26:{8:101,16:20},48:19,56:19},20:{8:20,16:246,26:{8:101,16:20},48:20,56:20},21:{8:21,16:276,26:{8:101,16:30},48:21,56:21},22:{8:22,16:276,26:{8:101,16:30},48:22,56:22},23:{8:23,16:309,26:{8:101,16:30},48:23,56:23},24:{8:24,16:353,26:{8:101,16:30},48:24,56:24},25:{8:25,16:397,26:{8:101,16:30},48:25,56:25},26:{8:26,16:580,26:{8:101,16:30},48:26,56:26},27:{8:27,16:580,26:{8:101,16:30},48:27,56:27},28:{8:28,16:580,26:{8:101,16:30},48:28,56:28},29:{8:29,16:580,26:{8:101,16:30},48:29,56:29},30:{8:30,16:630,26:{8:101,16:30},48:30,56:30},31:{8:31,16:630,26:{8:101,16:30},48:31,56:31},32:{8:32,16:696,26:{8:101,16:30},48:32,56:32},33:{8:33,16:792,26:{8:101,16:30},48:33,56:33},34:{8:34,16:792,26:{8:101,16:30},48:34,56:34},35:{8:35,16:858,26:{8:101,16:30},48:35,56:35},36:{8:36,16:1056,26:{8:101,16:30},48:36,56:36},37:{8:37,16:1320,26:{8:101,16:30},48:37,56:37},38:{8:38,16:1320,26:{8:101,16:30},48:38,56:38},39:{8:39,16:1320,26:{8:101,16:30},48:39,56:39},40:{8:40,16:1320,26:{8:101,16:30},48:40,56:40},41:{8:41,16:1320,26:{8:101,16:30},48:41,56:41},42:{8:42,16:1320,26:{8:101,16:30},48:42,56:42},43:{8:43,16:1320,26:{8:101,16:30},48:43,56:43},44:{8:44,16:1320,26:{8:101,16:30},48:44,56:44},45:{8:45,16:1320,26:{8:101,16:30},48:45,56:45},46:{8:46,16:1320,26:{8:101,16:30},48:46,56:46},47:{8:47,16:1320,26:{8:101,16:30},48:47,56:47},48:{8:48,16:1320,26:{8:101,16:30},48:48,56:48},49:{8:49,16:1320,26:{8:101,16:30},48:49,56:49},50:{8:50,16:1320,26:{8:101,16:30},48:50,56:50},51:{8:51,16:1320,26:{8:101,16:30},48:51,56:51},52:{8:52,16:1320,26:{8:101,16:30},48:52,56:52},53:{8:53,16:1320,26:{8:101,16:30},48:53,56:53},54:{8:54,16:1320,26:{8:101,16:30},48:54,56:54},55:{8:55,16:1320,26:{8:101,16:30},48:55,56:55},56:{8:56,16:1320,26:{8:101,16:30},48:56,56:56},57:{8:57,16:1320,26:{8:101,16:30},48:57,56:57},58:{8:58,16:1320,26:{8:101,16:30},48:58,56:58},59:{8:59,16:1320,26:{8:101,16:30},48:59,56:59},60:{8:60,16:1320,26:{8:101,16:30},48:60,56:60}},r0={0:{8:0,18:{8:17,16:136}},1:{8:1,18:{8:153,16:167}},2:{8:2,18:{8:320,16:170}},3:{8:3,18:{8:490,16:170}},4:{8:4,18:{8:660,16:170}},5:{8:5,18:{8:830,16:170}},6:{8:6,18:{16:17}}},_0={8:10,16:1,data:d0,extra:r0};const m=u=>(E("data-v-1bace296"),u=u(),L(),u),p0=m(()=>e("legend",null,"当前",-1)),c0=m(()=>e("label",{for:"currentLv"},"当前等级",-1)),i0=["max"],v0=m(()=>e("label",{for:"currentExp"},"当前等级阅历",-1)),x0=["max"],m0=m(()=>e("legend",null,"目标",-1)),f0=m(()=>e("label",{for:"targetLv"},"目标等级",-1)),h0=m(()=>e("legend",null,"升级阅历",-1)),$0=m(()=>e("tr",null,[e("th",null,"等级"),e("th",null,"升级阅历"),e("th",null,"累计阅历")],-1)),g0=m(()=>e("td",null,"60",-1)),y0=m(()=>e("td",null,"-",-1)),b0={__name:"PlayerExp",setup(u){const _=I(_0.data),n=[];for(let s=61;--s>1;)n.unshift(_.get(s)[16]);const t=v(1),a=v(0),d=v(60),p=(s,l)=>s+l;return(s,l)=>(i(),g(y,null,[e("form",null,[e("fieldset",null,[p0,c0,c(e("input",{id:"currentLv",type:"number","onUpdate:modelValue":l[0]||(l[0]=o=>t.value=o),min:"1",max:d.value-1},null,8,i0),[[f,t.value]]),v0,c(e("input",{id:"currentExp",type:"number","onUpdate:modelValue":l[1]||(l[1]=o=>a.value=o),min:"0",max:n[t.value-1]-1},null,8,x0),[[f,a.value]])]),e("fieldset",null,[m0,f0,c(e("input",{id:"targetLv",type:"number","onUpdate:modelValue":l[2]||(l[2]=o=>d.value=o),min:"2",max:"60"},null,512),[[f,d.value]])]),e("fieldset",null,[h0,e("output",null,r(t.value<d.value?n.slice(t.value-1,d.value-1).reduce(p)-a.value:"当前等级需小于目标等级"),1)])]),e("table",null,[$0,(i(),g(y,null,w(n,(o,$)=>e("tr",null,[e("td",null,r($+1),1),e("td",null,r(o),1),e("td",null,r($?n.slice(0,$).reduce(p):"-"),1)])),64)),e("tr",null,[g0,y0,e("td",null,r(n.reduce(p)),1)])])],64))}},E0=b(b0,[["__scopeId","data-v-1bace296"]]);const S=u=>(E("data-v-92f8dad1"),u=u(),L(),u),L0=S(()=>e("label",{for:"gun-exp"},"人形经验",-1)),V0=S(()=>e("label",{for:"weapon-exp"},"武器熟练度",-1)),U0=S(()=>e("label",{for:"player-exp"},"指挥官阅历",-1)),w0={__name:"ExpView",setup(u){const _=v(0);return(n,t)=>(i(),g("article",null,[k(D),e("nav",null,[c(e("input",{id:"gun-exp",type:"radio","onUpdate:modelValue":t[0]||(t[0]=a=>_.value=a),value:0},null,512),[[V,_.value]]),L0,c(e("input",{id:"weapon-exp",type:"radio","onUpdate:modelValue":t[1]||(t[1]=a=>_.value=a),value:1},null,512),[[V,_.value]]),V0,c(e("input",{id:"player-exp",type:"radio","onUpdate:modelValue":t[2]||(t[2]=a=>_.value=a),value:2},null,512),[[V,_.value]]),U0]),_.value==0?(i(),U(J,{key:0})):_.value==1?(i(),U(s0,{key:1})):(i(),U(E0,{key:2}))]))}},D0=b(w0,[["__scopeId","data-v-92f8dad1"]]);export{D0 as default};
