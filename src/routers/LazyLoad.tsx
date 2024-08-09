import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./Router";
import LoadingPage from "@/views/pages/LoadingPage";

const LazyLoad = () => {
    return (
        <Router>
            <Suspense fallback={<LoadingPage />}>
                <Routes>
                    {routes.map(({ path, component: Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                </Routes>
            </Suspense>
        </Router>
    );
};

export default LazyLoad;
