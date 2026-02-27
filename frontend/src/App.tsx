import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "./contexts/CartContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ChatbotWidget from "./components/chatbot/ChatbotWidget";
import FloatingReserveButton from "./components/layout/FloatingReserveButton";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Offers from "./pages/Offers";
import Blog from "./pages/Blog";
import Loyalty from "./pages/Loyalty";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5, retry: 1 },
  },
});

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingReserveButton />
      <ChatbotWidget />
    </div>
  );
}

const rootRoute = createRootRoute({ component: Layout });
const homeRoute = createRoute({ getParentRoute: () => rootRoute, path: "/", component: Home });
const menuRoute = createRoute({ getParentRoute: () => rootRoute, path: "/menu", component: Menu });
const cartRoute = createRoute({ getParentRoute: () => rootRoute, path: "/cart", component: Cart });
const checkoutRoute = createRoute({ getParentRoute: () => rootRoute, path: "/checkout", component: Checkout });
const reservationRoute = createRoute({ getParentRoute: () => rootRoute, path: "/reservation", component: Reservation });
const contactRoute = createRoute({ getParentRoute: () => rootRoute, path: "/contact", component: Contact });
const aboutRoute = createRoute({ getParentRoute: () => rootRoute, path: "/about", component: About });
const galleryRoute = createRoute({ getParentRoute: () => rootRoute, path: "/gallery", component: Gallery });
const offersRoute = createRoute({ getParentRoute: () => rootRoute, path: "/offers", component: Offers });
const blogRoute = createRoute({ getParentRoute: () => rootRoute, path: "/blog", component: Blog });
const loyaltyRoute = createRoute({ getParentRoute: () => rootRoute, path: "/loyalty", component: Loyalty });

const routeTree = rootRoute.addChildren([
  homeRoute, menuRoute, cartRoute, checkoutRoute, reservationRoute,
  contactRoute, aboutRoute, galleryRoute, offersRoute, blogRoute, loyaltyRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register { router: typeof router; }
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
