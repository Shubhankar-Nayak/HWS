import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks/useAppSelector";
import { fetchBookings, deleteBooking } from "../store/slices/bookingSlice";
import { useToast } from "@/hooks/use-toast";

// Inline SVGs (no external icon libs)
const Spinner = ({ className = "h-5 w-5" }) => (
  <svg className={`animate-spin ${className}`} viewBox="0 0 24 24" fill="none">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4A4 4 0 008 12H4z" />
  </svg>
);
const CalendarIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2"></line>
    <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2"></line>
    <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"></line>
  </svg>
);
const ClockIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="10" strokeWidth="2" />
    <polyline points="12 6 12 12 16 14" strokeWidth="2" />
  </svg>
);
const UserIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M20 21a8 8 0 10-16 0" strokeWidth="2" />
    <circle cx="12" cy="7" r="4" strokeWidth="2" />
  </svg>
);
const TrashIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <polyline points="3 6 5 6 21 6" strokeWidth="2" />
    <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" strokeWidth="2" />
    <path d="M10 11v6M14 11v6" strokeWidth="2" />
    <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" strokeWidth="2" />
  </svg>
);
const RefreshIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <polyline points="23 4 23 10 17 10" strokeWidth="2" />
    <polyline points="1 20 1 14 7 14" strokeWidth="2" />
    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" strokeWidth="2" />
  </svg>
);

const MyBookings = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { bookings, status, error } = useAppSelector((s) => s.booking);
  const { isAuthenticated, user } = useAppSelector((s) => s.auth);
  const { toast } = useToast();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated && user) {
      dispatch(fetchBookings());
    }
  }, [dispatch, isAuthenticated, user]);

  const handleDeleteBooking = async (bookingId: string) => {
    if (!window.confirm("Are you sure you want to cancel this booking?")) return;
    setDeletingId(bookingId);
    try {
      await dispatch(deleteBooking(bookingId)).unwrap();
      toast({ title: "Booking Cancelled", description: "Your booking has been successfully cancelled." });
      dispatch(fetchBookings());
    } catch (err: any) {
      toast({
        title: "Cancellation Failed",
        description: err || "Failed to cancel booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setDeletingId(null);
    }
  };

  const handleRefresh = () => dispatch(fetchBookings());
  const handleBookSession = () => navigate("/booking");

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const programmePill = (programme: string) => {
    const base = "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border";
    const map: Record<string, string> = {
      mindfulness: "bg-[#F4EEE0] text-[#5C4630] border-[#C8A97E]/50",
      yoga: "bg-[#E9F3EA] text-[#2F6B3E] border-[#C8A97E]/40",
      nutrition: "bg-[#FFF0E0] text-[#8A4B17] border-[#C8A97E]/40",
      breathwork: "bg-[#F1ECFE] text-[#5A3FA6] border-[#C8A97E]/40",
      complete: "bg-[#FDECF2] text-[#8A2E4C] border-[#C8A97E]/40",
    };
    return `${base} ${map[programme] || "bg-[#F6F2E9] text-[#3F2A1D] border-[#C8A97E]/40"}`;
  };

  // Loading
  if (status === "loading") {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[linear-gradient(135deg,#FFF9E9,#F7F0DD,#E8D7BA)]">
        <Spinner className="h-8 w-8 text-[#C8A97E] mb-4" />
        <h2 className="text-2xl font-semibold text-[#3E2C1A]">Loading your bookings...</h2>
      </div>
    );
  }

  // Error
  if (status === "failed") {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center rounded-2xl p-10 bg-white/80 backdrop-blur-sm shadow-lg border border-[#C8A97E]/30">
          <h2 className="text-2xl font-semibold text-red-600 mb-3">Failed to Load Bookings</h2>
          <p className="text-[#5C4630]/80 mb-6">{error}</p>
          <button
            onClick={handleRefresh}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-[#C8A97E]/50 text-[#3F2A1D] hover:bg-[#FFF6E9] transition"
          >
            <RefreshIcon />
            <span>Try Again</span>
          </button>
        </div>
      </div>
    );
  }

  // Auth guard
  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center rounded-2xl p-10 bg-white/80 backdrop-blur-sm shadow-lg border border-[#C8A97E]/30">
          <h2 className="text-2xl font-semibold text-[#3F2A1D] mb-3">Authentication Required</h2>
          <p className="text-[#5C4630]/80 mb-6">Please log in to view your bookings.</p>
          <button
            onClick={() => navigate("/login")}
            className="inline-flex items-center justify-center px-5 py-2 rounded-md bg-[#3F2A1D] text-white hover:bg-[#4B2E16] transition"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[linear-gradient(135deg,#FFF9E9,#F7F0DD,#E8D7BA)]">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <header className="text-center mb-10" style={{ fontFamily: "Playfair Display" }}>
            <h1 className="text-4xl md:text-5xl font-bold text-[#3F2A1D] mb-3 tracking-tight">My Bookings</h1>
            <p className="text-[#5C4630]/80">Manage and view all your wellness sessions</p>
          </header>

          {/* Empty state */}
          {bookings.length === 0 ? (
            <section className="relative rounded-2xl overflow-hidden">
              <div className="absolute -inset-[1px] rounded-2xl bg-[linear-gradient(135deg,#DCC6A0,#C8A97E,#B89463)] opacity-60" />
              <div className="relative bg-white/85 backdrop-blur-sm rounded-2xl p-10 text-center border border-[#C8A97E]/30">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-[#C8A97E]/15 flex items-center justify-center">
                  <CalendarIcon className="h-7 w-7 text-[#C8A97E]" />
                </div>
                <h3 className="text-xl font-semibold text-[#3F2A1D] mb-2">No Bookings Yet</h3>
                <p className="text-[#5C4630]/80 max-w-md mx-auto mb-6">
                  You haven't made any bookings yet. Start your wellness journey today!
                </p>
                <button
                  onClick={handleBookSession}
                  className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-[#3F2A1D] text-white hover:bg-[#4B2E16] transition"
                >
                  Book a Session
                </button>
              </div>
            </section>
          ) : (
            <>
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                <h2 className="text-2xl font-semibold text-[#3F2A1D]">
                  Your Sessions <span className="text-[#5C4630]/70">({bookings.length})</span>
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={handleRefresh}
                    disabled={status === "loading"}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-[#C8A97E]/50 text-[#3F2A1D] hover:bg-[#FFF6E9] disabled:opacity-60 transition"
                  >
                    {status === "loading" ? <Spinner className="h-4 w-4" /> : <RefreshIcon />}
                    <span>Refresh</span>
                  </button>
                  <button
                    onClick={handleBookSession}
                    className="inline-flex items-center px-4 py-2 rounded-md bg-[#3F2A1D] text-white hover:bg-[#4B2E16] transition"
                  >
                    New Booking
                  </button>
                </div>
              </div>

              {/* List */}
              <ul className="space-y-6">
                {bookings.map((b) => (
                  <li key={b.id} className="relative rounded-2xl overflow-hidden">
                    <div className="absolute -inset-[1px] rounded-2xl bg-[linear-gradient(135deg,#DCC6A0,#C8A97E,#B89463)] opacity-40" />
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-[#C8A97E]/30 hover:shadow-lg transition">
                      {/* Header */}
                      <div className="px-6 pt-6 pb-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 text-[#3F2A1D]">
                              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#C8A97E]/20">
                                <UserIcon className="h-5 w-5 text-[#3F2A1D]" />
                              </span>
                              <h3 className="text-lg font-semibold truncate">
                                {b.firstName} {b.lastName}
                              </h3>
                            </div>
                            <p className="text-sm text-[#5C4630]/80 mt-1 truncate">{b.email}</p>
                          </div>
                          <span className={programmePill(b.programme)}>
                            {b.programme.charAt(0).toUpperCase() + b.programme.slice(1)}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="px-6 pb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center gap-2 text-[#3F2A1D]">
                            <CalendarIcon className="h-4 w-4 text-[#8B6F47]" />
                            <span className="font-medium">Date:</span>
                            <span className="ml-1 text-[#5C4630]">{formatDate(b.date)}</span>
                          </div>
                          <div className="flex items-center gap-2 text-[#3F2A1D]">
                            <ClockIcon className="h-4 w-4 text-[#8B6F47]" />
                            <span className="font-medium">Time:</span>
                            <span className="ml-1 text-[#5C4630]">{b.time}</span>
                          </div>
                        </div>

                        {b.message && (
                          <div className="mb-4">
                            <p className="text-sm text-[#5C4630]/90">
                              <span className="font-medium text-[#3F2A1D]">Additional Info:</span>{" "}
                              {b.message}
                            </p>
                          </div>
                        )}

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 border-t border-[#C8A97E]/30">
                          <p className="text-sm text-[#5C4630]/70">
                            Booked on{" "}
                            {new Date(b.createdAt!).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </p>

                          <button
                            type="button"
                            onClick={() => handleDeleteBooking(b.id)}
                            disabled={deletingId === b.id}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 disabled:opacity-70 transition"
                            aria-label={`Cancel booking for ${b.firstName} ${b.lastName}`}
                          >
                            {deletingId === b.id ? <Spinner className="h-4 w-4" /> : <TrashIcon />}
                            <span>Cancel</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
