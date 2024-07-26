// route table
import {createRouter, createWebHistory} from "vue-router";
import Hook from "@/pages/Hook.vue";
import Computed from "@/pages/Computed.vue";
import ToRefs from "@/pages/ToRefs.vue";
import Query from "@/pages/Query.vue";
import QueryChild from "@/pages/QueryChild.vue";
import Param from "@/pages/Param.vue";
import ParamChild from "@/pages/ParamChild.vue";
//
// inter-component communication
//
import Model from "@/pages/communicate/v-model/Demo.vue"
import Props from "@/pages/communicate/props/Parent.vue";
import Event from "@/pages/communicate/custom-event/Parent.vue"
import Bus from "@/pages/communicate/mitt/Parent.vue";
// create router
const router = createRouter({
    history: createWebHistory(), // Router Mode
    routes: [
        {path: "/computed", component: Computed},
        {path: "/torefs", component: ToRefs},
        {name: "hookComponent", path: "/hook", component: Hook},
        {
            path: "/query",
            component: Query,
            children: [{
                name: 'queryChild',
                path: 'child',
                component: QueryChild, // <QueryChild/>
                props(route) {
                    return route.query;
                } // <QueryChild :id=? :title=? :content=?/>
                // props: {a: 1, b: 2, c: 3}
            }],
        }, // "/detail" ×
        {
            path: "/param",
            component: Param,
            children: [{
                name: 'paramChild',
                path: 'child/:id/:title/:content?', // ? optional path variable
                component: ParamChild, // <ParamChild />
                props: true, // <ParamChild :id=? :title=? :content=? />
                // props(route) { return route.params; }
            }]
        },
        {path: '/', redirect: '/computed'},
        {path: '/props', component: Props},
        {path: "/event", component: Event},
        {path: "/mitt", component: Bus},
        {path: "/model", component: Model},
    ],
});

// expose router
export default router;
