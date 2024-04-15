import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import WhoWeAre from "./components/WhoWeAre";
import OurTechnologies from "./components/OurTechnologies";
import Careers from "./components/Careers";
import News from "./components/News";
import Support from "./components/Support";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
                
            },
            {
                path: "/company-info",
                element: <WhoWeAre />
                
            },
            {
                path: "/technologies",
                element: <OurTechnologies />
                
            },
            {
                path: "/careers",
                element: <Careers />
                
            },
            {
                path: "/news",
                element: <News />
                
            },
            {
                path: "/support",
                element: <Support />
                
            },
            
        ],
    errorElement: <Error />

    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);