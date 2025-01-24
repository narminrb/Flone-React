import { createBrowserRouter } from "react-router-dom";
import UiLayout from "./components/layout/UiLayout";
import HomePage from "./pages/ui/home";
import ServicePage from "./pages/ui/services";
import BlogDetail from "./pages/ui/blog-detail";
import ContactPage from "./pages/ui/contact";
import LoginLayout from "./components/layout/LoginLayout";
import BlogPage from "./pages/ui/blog";


export const router = createBrowserRouter([
   {
    path: "/",
    element: <UiLayout />,
    children: [{
        path:"/",
        element: <HomePage />,
        errorElement: <div>Not Found</div>
    },
    {
        path:"/blog",
        element: <BlogPage />,
        errorElement: <div>Not Found</div>
    },
    {
        path:"/blog/:id",
        element: <BlogDetail/>,
        errorElement: <div>Not Found</div>
    },
    {
        path:"/services",
        element: <ServicePage/>,
        errorElement: <div>Not Found</div>
    },
    {
        path:"/contact",
        element: <ContactPage/>,  
    }
]},
    {
        path: "/login",
        element: <LoginLayout/>,
    }
  ]);