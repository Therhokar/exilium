import{r as i,o as _,c as m,a as e,w as d,v as c,t as g,_ as y,p as L,b as h,f,i as x}from"./index-d5d78de5.js";import{j as b}from"./j2m-085c5257.js";const E={1:{8:1,32:100001},2:{8:2,16:2,32:100002},3:{8:3,16:2,32:100003},4:{8:4,16:5,32:100004},5:{8:5,16:5,32:100005},6:{8:6,16:5,32:100006},7:{8:7,16:5,32:100007},8:{8:8,16:5,32:100008},9:{8:9,16:5,32:100009},10:{8:10,16:60,32:100010},11:{8:11,16:341,32:100011},12:{8:12,16:427,32:100012},13:{8:13,16:469,32:100013},14:{8:14,16:512,32:100014},15:{8:15,16:555,32:100015},16:{8:16,16:597,32:100016},17:{8:17,16:519,32:100017},18:{8:18,16:545,32:100018},19:{8:19,16:571,32:100019},20:{8:20,16:597,32:100020},21:{8:21,16:712,32:100021},22:{8:22,16:857,32:100022},23:{8:23,16:1e3,32:100023},24:{8:24,16:1333,32:100024},25:{8:25,16:1667,32:100025},26:{8:26,16:1818,32:100026},27:{8:27,16:1818,32:100027},28:{8:28,16:2e3,32:100028},29:{8:29,16:2320,32:100029},30:{8:30,16:2320,32:100030},31:{8:31,16:2320,32:100031},32:{8:32,16:2320,32:100032},33:{8:33,16:4218,32:100033},34:{8:34,16:4667,32:100034},35:{8:35,16:4667,32:100035},36:{8:36,16:6085,32:100036},37:{8:37,16:7100,32:100037},38:{8:38,16:8114,32:100038},39:{8:39,16:9128,32:100039},40:{8:40,16:10142,32:100040},41:{8:41,16:11157,32:100041},42:{8:42,16:12171,32:100042},43:{8:43,16:13185,32:100043},44:{8:44,16:14199,32:100044},45:{8:45,16:13349,32:100045},46:{8:46,16:13646,32:100046},47:{8:47,16:13943,32:100047},48:{8:48,16:14239,32:100048},49:{8:49,16:14536,32:100049},50:{8:50,16:14833,32:100050},51:{8:51,16:15129,32:100051},52:{8:52,16:15426,32:100052},53:{8:53,16:15723,32:100053},54:{8:54,16:16019,32:100054},55:{8:55,16:16316,32:100055},56:{8:56,16:16612,32:100056},57:{8:57,16:16909,32:100057},58:{8:58,16:17206,32:100058},59:{8:59,16:17502,32:100059},60:{8:60,16:17799,32:100060}},V={data:E},U=e("legend",null,"当前",-1),w=e("label",{for:"currentLv"},"当前等级",-1),k=["max"],B=e("label",{for:"currentExp"},"当前等级经验",-1),D=["max"],I=e("legend",null,"目标",-1),S=e("label",{for:"targetLv"},"目标等级",-1),M=e("legend",null,"升级经验",-1),W={__name:"GunExp",setup(r){const a=b(V.data),s=[];for(let u=61;--u>1;)s.unshift(a.get(u)[16]);const t=i(1),n=i(0),p=i(60);return(u,l)=>(_(),m("form",null,[e("fieldset",null,[U,w,d(e("input",{id:"currentLv",type:"number","onUpdate:modelValue":l[0]||(l[0]=o=>t.value=o),min:"1",max:p.value-1},null,8,k),[[c,t.value]]),B,d(e("input",{id:"currentExp",type:"number","onUpdate:modelValue":l[1]||(l[1]=o=>n.value=o),min:"0",max:s[t.value-1]-1},null,8,D),[[c,n.value]])]),e("fieldset",null,[I,S,d(e("input",{id:"targetLv",type:"number","onUpdate:modelValue":l[2]||(l[2]=o=>p.value=o),min:"2",max:"60"},null,512),[[c,p.value]])]),e("fieldset",null,[M,e("output",null,g(s.slice(t.value-1,p.value-1).reduce((o,$)=>o+$)-n.value),1)])]))}},j={3:{8:3,24:3,32:60,72:30001,80:8301},4:{8:4,24:4,32:60,72:30001,80:8301},5:{8:5,24:5,32:60,72:30001,80:8301},103:{8:103,16:1,24:3,32:60,72:30001,80:8301},104:{8:104,16:1,24:4,32:60,72:30001,80:8301},105:{8:105,16:1,24:5,32:60,72:30001,80:8301},203:{8:203,16:2,24:3,32:60,40:6,48:100,56:6,64:100,72:30002,80:8301},204:{8:204,16:2,24:4,32:60,40:6,48:100,56:6,64:100,72:30002,80:8301},205:{8:205,16:2,24:5,32:60,40:6,48:100,56:6,64:100,72:30002,80:8301},303:{8:303,16:3,24:3,32:60,40:11,48:200,56:17,64:300,72:30003,80:8301},304:{8:304,16:3,24:4,32:60,40:11,48:200,56:17,64:300,72:30003,80:8301},305:{8:305,16:3,24:5,32:60,40:11,48:200,56:17,64:300,72:30003,80:8301},403:{8:403,16:4,24:3,32:60,40:17,48:300,56:34,64:600,72:30004,80:8301},404:{8:404,16:4,24:4,32:60,40:17,48:300,56:34,64:600,72:30004,80:8301},405:{8:405,16:4,24:5,32:60,40:17,48:300,56:34,64:600,72:30004,80:8301},503:{8:503,16:5,24:3,32:60,40:22,48:400,56:56,64:1e3,72:30005,80:8301},504:{8:504,16:5,24:4,32:60,40:22,48:400,56:56,64:1e3,72:30005,80:8301},505:{8:505,16:5,24:5,32:60,40:22,48:400,56:56,64:1e3,72:30005,80:8301},603:{8:603,16:6,24:3,32:60,40:28,48:500,56:84,64:1500,72:30006,80:8301},604:{8:604,16:6,24:4,32:60,40:28,48:500,56:84,64:1500,72:30006,80:8301},605:{8:605,16:6,24:5,32:60,40:28,48:500,56:84,64:1500,72:30006,80:8301},703:{8:703,16:7,24:3,32:60,40:56,48:600,56:140,64:2100,72:30007,80:8301},704:{8:704,16:7,24:4,32:60,40:56,48:600,56:140,64:2100,72:30007,80:8301},705:{8:705,16:7,24:5,32:60,40:56,48:600,56:140,64:2100,72:30007,80:8301},803:{8:803,16:8,24:3,32:60,40:112,48:700,56:252,64:2800,72:30008,80:8301},804:{8:804,16:8,24:4,32:60,40:112,48:700,56:252,64:2800,72:30008,80:8301},805:{8:805,16:8,24:5,32:60,40:112,48:700,56:252,64:2800,72:30008,80:8301},903:{8:903,16:9,24:3,32:60,40:168,48:800,56:420,64:3600,72:30009,80:8301},904:{8:904,16:9,24:4,32:60,40:168,48:800,56:420,64:3600,72:30009,80:8301},905:{8:905,16:9,24:5,32:60,40:168,48:800,56:420,64:3600,72:30009,80:8301},1003:{8:1003,16:10,24:3,32:60,40:224,48:900,56:644,64:4500,72:30010,80:8301},1004:{8:1004,16:10,24:4,32:60,40:224,48:900,56:644,64:4500,72:30010,80:8301},1005:{8:1005,16:10,24:5,32:60,40:224,48:900,56:644,64:4500,72:30010,80:8301},1103:{8:1103,16:11,24:3,32:60,40:280,48:1100,56:924,64:5600,72:30011,80:8301},1104:{8:1104,16:11,24:4,32:60,40:280,48:1100,56:924,64:5600,72:30011,80:8301},1105:{8:1105,16:11,24:5,32:60,40:280,48:1100,56:924,64:5600,72:30011,80:8301},1203:{8:1203,16:12,24:3,32:60,40:336,48:1300,56:1260,64:6900,72:30012,80:8301},1204:{8:1204,16:12,24:4,32:60,40:336,48:1300,56:1260,64:6900,72:30012,80:8301},1205:{8:1205,16:12,24:5,32:60,40:336,48:1300,56:1260,64:6900,72:30012,80:8301},1303:{8:1303,16:13,24:3,32:60,40:393,48:1500,56:1653,64:8400,72:30013,80:8301},1304:{8:1304,16:13,24:4,32:60,40:393,48:1500,56:1653,64:8400,72:30013,80:8301},1305:{8:1305,16:13,24:5,32:60,40:393,48:1500,56:1653,64:8400,72:30013,80:8301},1403:{8:1403,16:14,24:3,32:60,40:421,48:1700,56:2074,64:10100,72:30014,80:8301},1404:{8:1404,16:14,24:4,32:60,40:421,48:1700,56:2074,64:10100,72:30014,80:8301},1405:{8:1405,16:14,24:5,32:60,40:421,48:1700,56:2074,64:10100,72:30014,80:8301},1503:{8:1503,16:15,24:3,32:60,40:449,48:1900,56:2523,64:12e3,72:30015,80:8301},1504:{8:1504,16:15,24:4,32:60,40:449,48:1900,56:2523,64:12e3,72:30015,80:8301},1505:{8:1505,16:15,24:5,32:60,40:449,48:1900,56:2523,64:12e3,72:30015,80:8301},1603:{8:1603,16:16,24:3,32:60,40:477,48:2100,56:3e3,64:14100,72:30016,80:8301},1604:{8:1604,16:16,24:4,32:60,40:477,48:2100,56:3e3,64:14100,72:30016,80:8301},1605:{8:1605,16:16,24:5,32:60,40:477,48:2100,56:3e3,64:14100,72:30016,80:8301},1703:{8:1703,16:17,24:3,32:60,40:356,48:2400,56:3356,64:16500,72:30017,80:8301},1704:{8:1704,16:17,24:4,32:60,40:356,48:2400,56:3356,64:16500,72:30017,80:8301},1705:{8:1705,16:17,24:5,32:60,40:356,48:2400,56:3356,64:16500,72:30017,80:8301},1803:{8:1803,16:18,24:3,32:60,40:444,48:2700,56:3800,64:19200,72:30018,80:8301},1804:{8:1804,16:18,24:4,32:60,40:444,48:2700,56:3800,64:19200,72:30018,80:8301},1805:{8:1805,16:18,24:5,32:60,40:444,48:2700,56:3800,64:19200,72:30018,80:8301},1903:{8:1903,16:19,24:3,32:60,40:533,48:3e3,56:4333,64:22200,72:30019,80:8301},1904:{8:1904,16:19,24:4,32:60,40:533,48:3e3,56:4333,64:22200,72:30019,80:8301},1905:{8:1905,16:19,24:5,32:60,40:533,48:3e3,56:4333,64:22200,72:30019,80:8301},2003:{8:2003,16:20,24:3,32:60,40:622,48:3300,56:4955,64:25500,72:30020,80:8301},2004:{8:2004,16:20,24:4,32:60,40:622,48:3300,56:4955,64:25500,72:30020,80:8301},2005:{8:2005,16:20,24:5,32:60,40:622,48:3300,56:4955,64:25500,72:30020,80:8301},2103:{8:2103,16:21,24:3,32:60,40:813,48:4e3,56:5768,64:29500,72:30021,80:8301},2104:{8:2104,16:21,24:4,32:60,40:813,48:4e3,56:5768,64:29500,72:30021,80:8301},2105:{8:2105,16:21,24:5,32:60,40:813,48:4e3,56:5768,64:29500,72:30021,80:8301},2203:{8:2203,16:22,24:3,32:60,40:857,48:4500,56:6625,64:34e3,72:30022,80:8301},2204:{8:2204,16:22,24:4,32:60,40:857,48:4500,56:6625,64:34e3,72:30022,80:8301},2205:{8:2205,16:22,24:5,32:60,40:857,48:4500,56:6625,64:34e3,72:30022,80:8301},2303:{8:2303,16:23,24:3,32:60,40:1e3,48:5e3,56:7625,64:39e3,72:30023,80:8301},2304:{8:2304,16:23,24:4,32:60,40:1e3,48:5e3,56:7625,64:39e3,72:30023,80:8301},2305:{8:2305,16:23,24:5,32:60,40:1e3,48:5e3,56:7625,64:39e3,72:30023,80:8301},2403:{8:2403,16:24,24:3,32:60,40:1333,48:5500,56:8958,64:44500,72:30024,80:8301},2404:{8:2404,16:24,24:4,32:60,40:1333,48:5500,56:8958,64:44500,72:30024,80:8301},2405:{8:2405,16:24,24:5,32:60,40:1333,48:5500,56:8958,64:44500,72:30024,80:8301},2503:{8:2503,16:25,24:3,32:60,40:1750,48:6e3,56:10708,64:50500,72:30025,80:8301},2504:{8:2504,16:25,24:4,32:60,40:1750,48:6e3,56:10708,64:50500,72:30025,80:8301},2505:{8:2505,16:25,24:5,32:60,40:1750,48:6e3,56:10708,64:50500,72:30025,80:8301},2603:{8:2603,16:26,24:3,32:60,40:1909,48:6500,56:12617,64:57e3,72:30026,80:8301},2604:{8:2604,16:26,24:4,32:60,40:1909,48:6500,56:12617,64:57e3,72:30026,80:8301},2605:{8:2605,16:26,24:5,32:60,40:1909,48:6500,56:12617,64:57e3,72:30026,80:8301},2703:{8:2703,16:27,24:3,32:60,40:2273,48:7e3,56:14890,64:64e3,72:30027,80:8301},2704:{8:2704,16:27,24:4,32:60,40:2273,48:7e3,56:14890,64:64e3,72:30027,80:8301},2705:{8:2705,16:27,24:5,32:60,40:2273,48:7e3,56:14890,64:64e3,72:30027,80:8301},2803:{8:2803,16:28,24:3,32:60,40:2500,48:7500,56:17390,64:71500,72:30028,80:8301},2804:{8:2804,16:28,24:4,32:60,40:2500,48:7500,56:17390,64:71500,72:30028,80:8301},2805:{8:2805,16:28,24:5,32:60,40:2500,48:7500,56:17390,64:71500,72:30028,80:8301},2903:{8:2903,16:29,24:3,32:60,40:2500,48:8e3,56:19890,64:79500,72:30029,80:8301},2904:{8:2904,16:29,24:4,32:60,40:2500,48:8e3,56:19890,64:79500,72:30029,80:8301},2905:{8:2905,16:29,24:5,32:60,40:2500,48:8e3,56:19890,64:79500,72:30029,80:8301},3003:{8:3003,16:30,24:3,32:60,40:2500,48:8500,56:22390,64:88e3,72:30030,80:8301},3004:{8:3004,16:30,24:4,32:60,40:2500,48:8500,56:22390,64:88e3,72:30030,80:8301},3005:{8:3005,16:30,24:5,32:60,40:2500,48:8500,56:22390,64:88e3,72:30030,80:8301},3103:{8:3103,16:31,24:3,32:60,40:2578,48:1e4,56:24968,64:98e3,72:30031,80:8301},3104:{8:3104,16:31,24:4,32:60,40:2578,48:1e4,56:24968,64:98e3,72:30031,80:8301},3105:{8:3105,16:31,24:5,32:60,40:2578,48:1e4,56:24968,64:98e3,72:30031,80:8301},3203:{8:3203,16:32,24:3,32:60,40:2578,48:11e3,56:27546,64:109e3,72:30032,80:8301},3204:{8:3204,16:32,24:4,32:60,40:2578,48:11e3,56:27546,64:109e3,72:30032,80:8301},3205:{8:3205,16:32,24:5,32:60,40:2578,48:11e3,56:27546,64:109e3,72:30032,80:8301},3303:{8:3303,16:33,24:3,32:60,40:4640,48:12e3,56:32186,64:121e3,72:30033,80:8301},3304:{8:3304,16:33,24:4,32:60,40:4640,48:12e3,56:32186,64:121e3,72:30033,80:8301},3305:{8:3305,16:33,24:5,32:60,40:4640,48:12e3,56:32186,64:121e3,72:30033,80:8301},3403:{8:3403,16:34,24:3,32:60,40:3867,48:13e3,56:36053,64:134e3,72:30034,80:8301},3404:{8:3404,16:34,24:4,32:60,40:3867,48:13e3,56:36053,64:134e3,72:30034,80:8301},3405:{8:3405,16:34,24:5,32:60,40:3867,48:13e3,56:36053,64:134e3,72:30034,80:8301},3503:{8:3503,16:35,24:3,32:60,40:3867,48:14e3,56:39920,64:148e3,72:30035,80:8301},3504:{8:3504,16:35,24:4,32:60,40:3867,48:14e3,56:39920,64:148e3,72:30035,80:8301},3505:{8:3505,16:35,24:5,32:60,40:3867,48:14e3,56:39920,64:148e3,72:30035,80:8301},3603:{8:3603,16:36,24:3,32:60,40:7178,48:15e3,56:47098,64:163e3,72:30036,80:8301},3604:{8:3604,16:36,24:4,32:60,40:7178,48:15e3,56:47098,64:163e3,72:30036,80:8301},3605:{8:3605,16:36,24:5,32:60,40:7178,48:15e3,56:47098,64:163e3,72:30036,80:8301},3703:{8:3703,16:37,24:3,32:60,40:7895,48:16e3,56:54993,64:179e3,72:30037,80:8301},3704:{8:3704,16:37,24:4,32:60,40:7895,48:16e3,56:54993,64:179e3,72:30037,80:8301},3705:{8:3705,16:37,24:5,32:60,40:7895,48:16e3,56:54993,64:179e3,72:30037,80:8301},3803:{8:3803,16:38,24:3,32:60,40:8613,48:17e3,56:63606,64:196e3,72:30038,80:8301},3804:{8:3804,16:38,24:4,32:60,40:8613,48:17e3,56:63606,64:196e3,72:30038,80:8301},3805:{8:3805,16:38,24:5,32:60,40:8613,48:17e3,56:63606,64:196e3,72:30038,80:8301},3903:{8:3903,16:39,24:3,32:60,40:9331,48:18e3,56:72937,64:214e3,72:30039,80:8301},3904:{8:3904,16:39,24:4,32:60,40:9331,48:18e3,56:72937,64:214e3,72:30039,80:8301},3905:{8:3905,16:39,24:5,32:60,40:9331,48:18e3,56:72937,64:214e3,72:30039,80:8301},4003:{8:4003,16:40,24:3,32:60,40:10049,48:19e3,56:82986,64:233e3,72:30040,80:8301},4004:{8:4004,16:40,24:4,32:60,40:10049,48:19e3,56:82986,64:233e3,72:30040,80:8301},4005:{8:4005,16:40,24:5,32:60,40:10049,48:19e3,56:82986,64:233e3,72:30040,80:8301},4103:{8:4103,16:41,24:3,32:60,40:10766,48:25e3,56:93752,64:258e3,72:30041,80:8301},4104:{8:4104,16:41,24:4,32:60,40:10766,48:25e3,56:93752,64:258e3,72:30041,80:8301},4105:{8:4105,16:41,24:5,32:60,40:10766,48:25e3,56:93752,64:258e3,72:30041,80:8301},4203:{8:4203,16:42,24:3,32:60,40:11484,48:27e3,56:105236,64:285e3,72:30042,80:8301},4204:{8:4204,16:42,24:4,32:60,40:11484,48:27e3,56:105236,64:285e3,72:30042,80:8301},4205:{8:4205,16:42,24:5,32:60,40:11484,48:27e3,56:105236,64:285e3,72:30042,80:8301},4303:{8:4303,16:43,24:3,32:60,40:12202,48:29e3,56:117438,64:314e3,72:30043,80:8301},4304:{8:4304,16:43,24:4,32:60,40:12202,48:29e3,56:117438,64:314e3,72:30043,80:8301},4305:{8:4305,16:43,24:5,32:60,40:12202,48:29e3,56:117438,64:314e3,72:30043,80:8301},4403:{8:4403,16:44,24:3,32:60,40:12920,48:31e3,56:130358,64:345e3,72:30044,80:8301},4404:{8:4404,16:44,24:4,32:60,40:12920,48:31e3,56:130358,64:345e3,72:30044,80:8301},4405:{8:4405,16:44,24:5,32:60,40:12920,48:31e3,56:130358,64:345e3,72:30044,80:8301},4503:{8:4503,16:45,24:3,32:60,40:20528,48:33e3,56:150886,64:378e3,72:30045,80:8301},4504:{8:4504,16:45,24:4,32:60,40:20528,48:33e3,56:150886,64:378e3,72:30045,80:8301},4505:{8:4505,16:45,24:5,32:60,40:20528,48:33e3,56:150886,64:378e3,72:30045,80:8301},4603:{8:4603,16:46,24:3,32:60,40:20984,48:35e3,56:171870,64:413e3,72:30046,80:8301},4604:{8:4604,16:46,24:4,32:60,40:20984,48:35e3,56:171870,64:413e3,72:30046,80:8301},4605:{8:4605,16:46,24:5,32:60,40:20984,48:35e3,56:171870,64:413e3,72:30046,80:8301},4703:{8:4703,16:47,24:3,32:60,40:21440,48:37e3,56:193310,64:45e4,72:30047,80:8301},4704:{8:4704,16:47,24:4,32:60,40:21440,48:37e3,56:193310,64:45e4,72:30047,80:8301},4705:{8:4705,16:47,24:5,32:60,40:21440,48:37e3,56:193310,64:45e4,72:30047,80:8301},4803:{8:4803,16:48,24:3,32:60,40:21896,48:39e3,56:215206,64:489e3,72:30048,80:8301},4804:{8:4804,16:48,24:4,32:60,40:21896,48:39e3,56:215206,64:489e3,72:30048,80:8301},4805:{8:4805,16:48,24:5,32:60,40:21896,48:39e3,56:215206,64:489e3,72:30048,80:8301},4903:{8:4903,16:49,24:3,32:60,40:22352,48:41e3,56:237558,64:53e4,72:30049,80:8301},4904:{8:4904,16:49,24:4,32:60,40:22352,48:41e3,56:237558,64:53e4,72:30049,80:8301},4905:{8:4905,16:49,24:5,32:60,40:22352,48:41e3,56:237558,64:53e4,72:30049,80:8301},5003:{8:5003,16:50,24:3,32:60,40:22808,48:43e3,56:260366,64:573e3,72:30050,80:8301},5004:{8:5004,16:50,24:4,32:60,40:22808,48:43e3,56:260366,64:573e3,72:30050,80:8301},5005:{8:5005,16:50,24:5,32:60,40:22808,48:43e3,56:260366,64:573e3,72:30050,80:8301},5103:{8:5103,16:51,24:3,32:60,40:23265,48:5e4,56:283631,64:623e3,72:30051,80:8301},5104:{8:5104,16:51,24:4,32:60,40:23265,48:5e4,56:283631,64:623e3,72:30051,80:8301},5105:{8:5105,16:51,24:5,32:60,40:23265,48:5e4,56:283631,64:623e3,72:30051,80:8301},5203:{8:5203,16:52,24:3,32:60,40:23721,48:53e3,56:307352,64:676e3,72:30052,80:8301},5204:{8:5204,16:52,24:4,32:60,40:23721,48:53e3,56:307352,64:676e3,72:30052,80:8301},5205:{8:5205,16:52,24:5,32:60,40:23721,48:53e3,56:307352,64:676e3,72:30052,80:8301},5303:{8:5303,16:53,24:3,32:60,40:24177,48:56e3,56:331529,64:732e3,72:30053,80:8301},5304:{8:5304,16:53,24:4,32:60,40:24177,48:56e3,56:331529,64:732e3,72:30053,80:8301},5305:{8:5305,16:53,24:5,32:60,40:24177,48:56e3,56:331529,64:732e3,72:30053,80:8301},5403:{8:5403,16:54,24:3,32:60,40:24633,48:59e3,56:356162,64:791e3,72:30054,80:8301},5404:{8:5404,16:54,24:4,32:60,40:24633,48:59e3,56:356162,64:791e3,72:30054,80:8301},5405:{8:5405,16:54,24:5,32:60,40:24633,48:59e3,56:356162,64:791e3,72:30054,80:8301},5503:{8:5503,16:55,24:3,32:60,40:25089,48:62e3,56:381251,64:853e3,72:30055,80:8301},5504:{8:5504,16:55,24:4,32:60,40:25089,48:62e3,56:381251,64:853e3,72:30055,80:8301},5505:{8:5505,16:55,24:5,32:60,40:25089,48:62e3,56:381251,64:853e3,72:30055,80:8301},5603:{8:5603,16:56,24:3,32:60,40:25545,48:65e3,56:406796,64:918e3,72:30056,80:8301},5604:{8:5604,16:56,24:4,32:60,40:25545,48:65e3,56:406796,64:918e3,72:30056,80:8301},5605:{8:5605,16:56,24:5,32:60,40:25545,48:65e3,56:406796,64:918e3,72:30056,80:8301},5703:{8:5703,16:57,24:3,32:60,40:26002,48:7e4,56:432798,64:988e3,72:30057,80:8301},5704:{8:5704,16:57,24:4,32:60,40:26002,48:7e4,56:432798,64:988e3,72:30057,80:8301},5705:{8:5705,16:57,24:5,32:60,40:26002,48:7e4,56:432798,64:988e3,72:30057,80:8301},5803:{8:5803,16:58,24:3,32:60,40:26458,48:75e3,56:459256,64:1063e3,72:30058,80:8301},5804:{8:5804,16:58,24:4,32:60,40:26458,48:75e3,56:459256,64:1063e3,72:30058,80:8301},5805:{8:5805,16:58,24:5,32:60,40:26458,48:75e3,56:459256,64:1063e3,72:30058,80:8301},5903:{8:5903,16:59,24:3,32:60,40:26914,48:8e4,56:486170,64:1143e3,72:30059,80:8301},5904:{8:5904,16:59,24:4,32:60,40:26914,48:8e4,56:486170,64:1143e3,72:30059,80:8301},5905:{8:5905,16:59,24:5,32:60,40:26914,48:8e4,56:486170,64:1143e3,72:30059,80:8301},6003:{8:6003,16:60,24:3,32:60,40:27370,48:85e3,56:513540,64:1228e3,72:30060,80:8301},6004:{8:6004,16:60,24:4,32:60,40:27370,48:85e3,56:513540,64:1228e3,72:30060,80:8301},6005:{8:6005,16:60,24:5,32:60,40:27370,48:85e3,56:513540,64:1228e3,72:30060,80:8301}},T={data:j};const v=r=>(L("data-v-8f389ef6"),r=r(),h(),r),G=v(()=>e("legend",null,"当前",-1)),N=v(()=>e("label",{for:"currentLv"},"当前熟练度",-1)),R=["max"],q=v(()=>e("legend",null,"目标",-1)),z=v(()=>e("label",{for:"targetLv"},"目标熟练度",-1)),A=v(()=>e("legend",null,"提升消耗解析图纸",-1)),C={__name:"WeaponExp",setup(r){const a=b(T.data),s=[];for(let u=61;--u>1;)s.unshift(a.get(u*100+3)[40]);const t=i(1),n=i(60),p=(u,l)=>u+l;return(u,l)=>(_(),m("form",null,[e("fieldset",null,[G,N,d(e("input",{id:"currentLv",type:"number","onUpdate:modelValue":l[0]||(l[0]=o=>t.value=o),min:"1",max:n.value-1},null,8,R),[[c,t.value]])]),e("fieldset",null,[q,z,d(e("input",{id:"targetLv",type:"number","onUpdate:modelValue":l[1]||(l[1]=o=>n.value=o),min:"2",max:"60"},null,512),[[c,n.value]])]),e("fieldset",null,[A,e("output",null,g(s.slice(t.value-1,n.value-1).reduce(p)),1)])]))}},F=y(C,[["__scopeId","data-v-8f389ef6"]]),H=e("p",null,"注意：本站目前显示的是引力测试中的数据。",-1),J=e("label",{for:"gun-exp"},"人形经验",-1),K=e("label",{for:"weapon-exp"},"武器熟练度",-1),Q={__name:"ExpView",setup(r){const a=i(!0);return(s,t)=>(_(),m("article",null,[H,e("nav",null,[J,d(e("input",{id:"gun-exp",type:"radio","onUpdate:modelValue":t[0]||(t[0]=n=>a.value=n),value:!0},null,512),[[f,a.value]]),K,d(e("input",{id:"weapon-exp",type:"radio","onUpdate:modelValue":t[1]||(t[1]=n=>a.value=n),value:!1},null,512),[[f,a.value]])]),a.value?(_(),x(W,{key:0})):(_(),x(F,{key:1}))]))}};export{Q as default};
