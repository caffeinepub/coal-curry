import { Link } from "@tanstack/react-router";
import { CalendarCheck } from "lucide-react";

export default function FloatingReserveButton() {
  return (
    <Link
      to="/reservation"
      className="fixed bottom-24 right-5 z-40 flex items-center gap-2 px-4 py-3 bg-deep-red text-cream rounded-full shadow-spice hover:bg-accent transition-all hover:scale-105 font-medium text-sm"
      aria-label="Reserve a table"
    >
      <CalendarCheck className="w-5 h-5" />
      <span className="hidden sm:inline">Reserve</span>
    </Link>
  );
}
