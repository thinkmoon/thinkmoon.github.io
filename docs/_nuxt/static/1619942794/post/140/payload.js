__NUXT_JSONP__("/post/140", (function(a,b,c){return {data:[{article:{cid:140,title:"毕业设计思路篇(四)之生成车辆",slug:"141",created:1549880640,modified:1550389127,text:"\u003C!--markdown--\u003E```c++\r\ngenerateVehicle(Map_Graph);\r\n```\r\n\r\n##   1.  随机车辆总数\r\n\r\n- [ ]  此处未随机，待完善\r\n\r\n```C++\r\nstd::random_device rd;\r\nstd::mt19937 mt(rd());\r\n```\r\n\r\n\r\n\r\n## 2. 遍历车辆，为车辆设立起点和路线\r\n\r\n### a. 在道路向量中随机选一条路径\r\n\r\n-[ ] 此处未随机，待完善\r\n\r\n```\r\nauto route = v_Route[3];\r\n```\r\n\r\n\r\n\r\n### b. 以该路径的首序列为起点\r\n\r\n```c++\r\nVehicle car(n_VehicleNum, route, 0, 0, route.front());\r\nG.m_Road_v[route.front()].m_queVehicle.push_back(car);\r\n```\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n",order:a,authorId:c,type:"post",status:"publish",commentsNum:a,allowComment:b,allowPing:b,allowFeed:b,parent:a,views:740,likes:c}}],fetch:{},mutations:void 0}}(0,"1",1)));