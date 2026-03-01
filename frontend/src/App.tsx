import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingReserveButton from './components/layout/FloatingReserveButton';
import FloatingWhatsAppButton from './components/layout/FloatingWhatsAppButton';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Reservation from './pages/Reservation';
import Gallery from './pages/Gallery';
import Offers from './pages/Offers';
import Loyalty from './pages/Loyalty';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 2,
    },
  },
});

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingReserveButton />
      <FloatingWhatsAppButton />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const menuRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/menu',
  component: Menu,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
});

const reservationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/reservation',
  component: Reservation,
});

const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/gallery',
  component: Gallery,
});

const offersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/offers',
  component: Offers,
});

const loyaltyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/loyalty',
  component: Loyalty,
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: Blog,
});

const cartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/cart',
  component: Cart,
});

const checkoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/checkout',
  component: Checkout,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  menuRoute,
  aboutRoute,
  contactRoute,
  reservationRoute,
  galleryRoute,
  offersRoute,
  loyaltyRoute,
  blogRoute,
  cartRoute,
  checkoutRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </QueryClientProvider>
  );
}
