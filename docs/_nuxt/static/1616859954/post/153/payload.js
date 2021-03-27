__NUXT_JSONP__("/post/153", {data:[{article:"\u003C!--markdown--\u003E\u003E 目前，我采用的是迪杰斯特拉算法计算所有点的最短路径（感觉弗洛伊德算法会更好些？）。迪杰斯特拉算法算的是单源（V_begin)到所有点的最短距离，也就是说需要遍历一次所有的点。\n\u003Ch2 id=\"遍历v_begin\"\u003E遍历V_begin\u003C\u002Fh2\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-C++\"\u003Efor (int V_begin = 0; V_begin &lt; G-&gt;m_CrossRoad_v.size(); V_begin++) {\n}\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E下面是迪杰斯特拉算法的流程\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch2 id=\"1-声明dist数组\"\u003E1. 声明dist数组\u003C\u002Fh2\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-C++\"\u003Evector&lt;double&gt; Determined_dist(G-&gt;m_CrossRoad_v.size(), 0.0);\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2 id=\"2-初始化顶点集\"\u003E2. 初始化顶点集\u003C\u002Fh2\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-C++\"\u003Evoid calcShortestPath(Graph *G) {\n    int currentPointSite,nextPointSite;\n    ofstream PointPathFile(DIR_RES&quot;PointPath.txt&quot;),RoadPathFile(DIR_RES&quot;RoadPath.txt&quot;);\n    \u002F\u002F对点进行的一级遍历\n    for (int V_begin = 0; V_begin &lt; G-&gt;m_CrossRoad_v.size(); V_begin++) {\n        \u002F\u002F =================== 迪杰斯特拉算法开始 ===============================\n        vector&lt;bool&gt; S(G-&gt;m_CrossRoad_v.size(), false); \u002F\u002F判断是否选中\n        vector&lt;double&gt; dist(G-&gt;m_CrossRoad_v.size(), DBL_MAX\u002F2);\u002F\u002F dist\n        vector&lt;double&gt; compare_dist(G-&gt;m_CrossRoad_v.size(), DBL_MAX\u002F2);\u002F\u002F 辅助dist用来取最短距离点\n        vector&lt;int&gt; path(G-&gt;m_CrossRoad_v.size(),-2); \u002F\u002F path\n        S[V_begin] = true;\n        path[V_begin] = -1;\n        for(auto crossroad : G-&gt;m_CrossRoad_v[V_begin].JunctionRoad){\n            nextPointSite = G-&gt;m_Road_v[crossroad.outRoadID].m_CrossRoadToSite;\n            dist[nextPointSite] = G-&gt;m_Road_v[crossroad.outRoadID].m_dLength;\n            compare_dist[nextPointSite] = dist[nextPointSite];\n        }\n        auto min = min_element(compare_dist.begin(), compare_dist.end());\n        int min_element_index = distance(compare_dist.begin(), min);\n        compare_dist[min_element_index] = DBL_MAX\u002F2;\n        \u002F\u002F 循环size-1次\n        for(int i = 0; i &lt; G-&gt;m_CrossRoad_v.size()-1; i++){\n            for(auto crossroad : G-&gt;m_CrossRoad_v[min_element_index].JunctionRoad){\n                currentPointSite = min_element_index;\n                nextPointSite = G-&gt;m_Road_v[crossroad.outRoadID].m_CrossRoadToSite;\n                if(S[nextPointSite]){\n                    continue;\n                }\n                if(dist[nextPointSite] &gt; dist[currentPointSite] + G-&gt;m_Road_v[crossroad.outRoadID].m_dLength) {\n                    dist[nextPointSite] = dist[currentPointSite] + G-&gt;m_Road_v[crossroad.outRoadID].m_dLength;\n                    compare_dist[nextPointSite] = dist[nextPointSite];\n                    path[nextPointSite] = currentPointSite;\n                }\n            }\n            min = min_element(compare_dist.begin(), compare_dist.end());\n            min_element_index = distance(compare_dist.begin(), min);\n            S[min_element_index] = true;\n            compare_dist[min_element_index] = DBL_MAX\u002F2;\n        }\n        for(int i = 0;i&lt;path.size();i++){\n            int j = i;\n            bool flag = false;\n            while( path[j] &gt;= 0) {\n                flag = true;\n                PointPathFile &lt;&lt; path[j] &lt;&lt; &quot; &quot;;\n                for(auto node:G-&gt;m_CrossRoad_v[j].JunctionRoad){\n                    if(G-&gt;m_Road_v[node.outRoadID].m_CrossRoadToSite == path[j]){\n                        RoadPathFile &lt;&lt; node.outRoadID &lt;&lt; &quot; &quot;;\n                    }\n                }\n                j = path[j];\n            }\n            if(flag){RoadPathFile &lt;&lt; endl;PointPathFile &lt;&lt; endl ;}\n        }\n    }\n}\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n"}],fetch:{},mutations:void 0});