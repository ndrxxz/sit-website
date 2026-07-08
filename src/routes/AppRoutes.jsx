import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services/Services"));
const AboutUs = lazy(() => import("@/pages/AboutUs"));

function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" elements={<Home />} />
        <Route path="/services" elements={<Services />} />
        <Route path="/about-us" elements={<AboutUs />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
