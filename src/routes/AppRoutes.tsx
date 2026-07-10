import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { PageLoader } from "@/components";

import useOnlineStatus from "@/hooks/useOnlineStatus";
import NoInternetConnection from "@/pages/NoInternetConnection";

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
    <Suspense fallback={<PageLoader />}>
      <div className="max-w-5xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Suspense>
  );
  
}

export default AppRoutes;
