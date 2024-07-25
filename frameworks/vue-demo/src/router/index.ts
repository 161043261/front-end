// route table
import {createRouter, createWebHistory} from "vue-router";
import SumDog from "@/pages/SumDog.vue";
import Computed from "@/pages/Computed.vue";
import ToRefs from "@/pages/ToRefs.vue";
import Query from "@/pages/Query.vue";
import QueryChild from "@/pages/QueryChild.vue";
import Param from "@/pages/Param.vue";
import ParamChild from "@/pages/ParamChild.vue";

// create router
const router = createRouter({
    history: createWebHistory(), // Router Mode
    routes: [
        {path: "/computed", component: Computed},
        {path: "/torefs", component: ToRefs},
        {name: "sumDogComponent", path: "/sumdog", component: SumDog},
        {
            path: "/query",
            component: Query,
            children: [{
                name: 'queryChild',
                path: 'child',
                component: QueryChild,
            }],
            props() {
                return {

                }
            }
        }, // "/detail" ×
        {
            path: "/param",
            component: Param,
            children: [{
                name: 'paramChild',
                path: 'child/:id/:title/:content?', // ? optional path variable
                component: ParamChild, // <ParamChild />
                props: true // params => props <ParamChild :id=? :title=? :content=? />
            }]
        }
    ],
});

// expose router
export default router;
