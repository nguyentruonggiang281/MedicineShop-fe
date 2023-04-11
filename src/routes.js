import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
import ClientLayout from './layouts/client/ClientLayout';
import BlogPage from './pages/admin/BlogPage';
import UserPage from './pages/admin/UserPage';
import LoginPage from './pages/admin/LoginPage';
import Page404 from './pages/admin/Page404';
import ProductsPage from './pages/admin/product/ProductsPage';
import DashboardAppPage from './pages/admin/DashboardAppPage';
import CreateProduct from './pages/admin/product/CreateProduct';
import EditProduct from './pages/admin/product/EditProduct'
import Home from './pages/client/Home'
import ProductDetails from './pages/client/ProductDetails';
import ProductsList from './pages/client/ProductsListPage';
import Checkout from './pages/client/CheckoutPage';
// import FunctionalFoodsList from './pages/client/FunctionalFoodsList';
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'products/new', element: <CreateProduct /> },
        { path: 'products/edit', element: <EditProduct /> }
      ],
    },
    {
      path: '/',
      element: <ClientLayout />,
      children: [
        { element: <Navigate to="/home" />, index: true },
        { path: 'home', element: <Home /> },
        { path: 'product-details', element: <ProductDetails /> },
         { path: 'blog', element: <BlogPage /> },
         { path: 'temp', element: <ProductsList /> },
         { path: 'checkout', element: <Checkout/> },

        ],
    },
    // {
    //   path: '/product-details',
    //   element: <DashboardLayout />,
    //   children: [
    //     { element: <Navigate to="/home" />, index: true },
    //     { path: 'functional-foods', element: <FunctionalFoodsList/> },
    //   ],
    // },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/home" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
