import {createRouter, createWebHistory} from "vue-router";
import SumDog from "@/pages/SumDog.vue";
import Computed from "@/pages/Computed.vue";
import ToRefs from "@/pages/ToRefs.vue";

// create router
const router = createRouter({
    history: createWebHistory(), // Router Mode
    routes: [
        {path: "/computed", component: Computed},
        {path: "/torefs", component: ToRefs},
        {path: "/sumdog", component: SumDog},
    ],
});

// expose router
export default router;
