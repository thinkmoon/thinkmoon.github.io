__NUXT_JSONP__("/post/140", {data:[{article:"\u003C!--markdown--\u003E```c++\n\u003Cp\u003EgenerateVehicle(Map_Graph);\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003E\n##   1.  随机车辆总数\n\n- [ ]  此处未随机，待完善\n\n```C++\nstd::random_device rd;\nstd::mt19937 mt(rd());\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2 id=\"2-遍历车辆，为车辆设立起点和路线\"\u003E2. 遍历车辆，为车辆设立起点和路线\u003C\u002Fh2\u003E\n\u003Ch3 id=\"a-在道路向量中随机选一条路径\"\u003Ea. 在道路向量中随机选一条路径\u003C\u002Fh3\u003E\n\u003Cp\u003E-[ ] 此处未随机，待完善\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Eauto route = v_Route[3];\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch3 id=\"b-以该路径的首序列为起点\"\u003Eb. 以该路径的首序列为起点\u003C\u002Fh3\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-c++\"\u003EVehicle car(n_VehicleNum, route, 0, 0, route.front());\nG.m_Road_v[route.front()].m_queVehicle.push_back(car);\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n"}],fetch:{},mutations:void 0});