import { lazy } from "react";

const routes = [
    { path: "/", component: lazy(() => import("@/views/pages/MainPage")) },
    { path: "/cesium", component: lazy(() => import("@/views/pages/CesiumPage")) },
];

export default routes;
