import { RouterProvider, createRouter, createRootRoute, createRoute, Outlet } from '@tanstack/react-router';
import { CartProvider } from '@/context/CartContext';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingReserveButton from '@/components/layout/FloatingReserveButton';
import ChatbotWidget from '@/components/chatbot/ChatbotWidget';
import Home from '@/pages/Home';
import Menu from '@/pages/Menu';
import About from '@/pages/About';
import Offers from '@/pages/Offers';
import Gallery from '@/pages/Gallery';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
import Cart from '@/pages/Cart';
import Checkout from '@/pages/Checkout';
import Reservation from '@/pages/Reservation';
import Loyalty from '@/pages/Loyalty';

function Layout() {
  return (
    <div className="min-h-screen bg-coal flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <FloatingReserveButton />
      <ChatbotWidget />
    </div>
  );
}

const rootRoute = createRootRoute({ component: Layout });

const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: Home });
const menuRoute = createRoute({ getParentRoute: () => rootRoute, path: '/menu', component: Menu });
const aboutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/about', component: About });
const offersRoute = createRoute({ getParentRoute: () => rootRoute, path: '/offers', component: Offers });
const galleryRoute = createRoute({ getParentRoute: () => rootRoute, path: '/gallery', component: Gallery });
const blogRoute = createRoute({ getParentRoute: () => rootRoute, path: '/blog', component: Blog });
const contactRoute = createRoute({ getParentRoute: () => rootRoute, path: '/contact', component: Contact });
const cartRoute = createRoute({ getParentRoute: () => rootRoute, path: '/cart', component: Cart });
const checkoutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/checkout', component: Checkout });
const reserveRoute = createRoute({ getParentRoute: () => rootRoute, path: '/reserve', component: Reservation });
const loyaltyRoute = createRoute({ getParentRoute: () => rootRoute, path: '/loyalty', component: Loyalty });

const routeTree = rootRoute.addChildren([
  indexRoute,
  menuRoute,
  aboutRoute,
  offersRoute,
  galleryRoute,
  blogRoute,
  contactRoute,
  cartRoute,
  checkoutRoute,
  reserveRoute,
  loyaltyRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </LanguageProvider>
  );
}
