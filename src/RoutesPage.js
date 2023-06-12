import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
import Politiques from "./pages/Politiques";
import Conditions from "./pages/Conditions";
import WorkPage from "./components/WorkPage";

// import { useGetPostesQuery } from "./services/getData";
import LoaderSpinner from "./components/LoaderSpinner";
import getPostsData from "./api/GetPostsData";

export default function RoutesPage() {
  // const location = useLocation()

  // const { data, isLoading } = useGetPostesQuery();

  const { data, error, isLoading, isError } = useQuery({
    queryFn: getPostsData,
    queryKey: ["posts"],
    refetchOnWindowFocus: false,
  });

  return (
    <BrowserRouter>
      <Routes>
        {/* <Switch location={location} key={location.pathname}> */}
        <Route path="/" exact element={<Home />} />
        <Route
          path="/work/*"
          exact
          element={
            <Suspense fallback={LoaderSpinner}>
              {isError ? <div>{error}</div> : <Work data={data} />}
            </Suspense>
          }
        />
        <Route
          exact
          path="/work/:slug"
          element={
            <div>
              {isLoading ? (
                <div className="main-spinner">
                  <LoaderSpinner />
                </div>
              ) : (
                // <WorkPage
                //   data={data && data.find((p) => p.slug === match.params.slug)}
                // />
                <>{isError ? <div>{error}</div> : <WorkPage data={data} />}</>
              )}
            </div>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/politiques-de-confidentialité" element={<Politiques />} />
        <Route path="/conditions-générales" element={<Conditions />} />
        <Route path="/*" element={<Notfound />} />
        {/* </Switch> */}
      </Routes>
    </BrowserRouter>
  );
}
