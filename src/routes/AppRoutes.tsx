import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Navigation } from "@/components";

import useOnlineStatus from "@/hooks/useOnlineStatus";
import NoInternetConnection from "@/pages/NoInternetConnection";
import ErrorBoundary from "@/pages/ErrorBoundary";

import SuspenseLoader from "./SuspenseLoader";

const Home = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services"));
const AboutUs = lazy(() => import("@/pages/AboutUs"));
const PageNotFound = lazy(() => import("@/pages/PageNotFound"));

function AppRoutes() {
    const isOnline = useOnlineStatus();

    if (import.meta.env.PROD && !isOnline) {
        return <NoInternetConnection />;
    }

    return (
        <ErrorBoundary>
            <SuspenseLoader>
                <Navigation />
                <div className="max-w-5xl mx-auto p-4 pt-30">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </div>
            </SuspenseLoader>
        </ErrorBoundary>
    );
  
}

export default AppRoutes;
