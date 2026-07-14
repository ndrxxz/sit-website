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
                <header className="pt-5 fixed top-0 left-0 right-0 z-50 flex justify-center 
                    py-5 bg-transparent backdrop-blur-lg border-b border-white/20 hidden md:flex">
                    <Navigation />
                </header>
                <div className="max-w-5xl mx-auto p-4 pt-0 md:pt-30">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </div>

                <nav className="pb-4 fixed bottom-0 left-0 right-0 z-50 
                    border-t border-white/20 flex md:hidden">
                    <Navigation />
                </nav>

            </SuspenseLoader>
        </ErrorBoundary>
    );
  
}

export default AppRoutes;
