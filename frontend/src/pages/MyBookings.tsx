import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks/useAppSelector';
import { fetchBookings, deleteBooking } from '../store/slices/bookingSlice';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Trash2, Calendar, Clock, User, RefreshCw } from 'lucide-react';

const MyBookings = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { bookings, status, error } = useAppSelector((state) => state.booking);
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const { toast } = useToast();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated && user) {
      dispatch(fetchBookings());
    }
  }, [dispatch, isAuthenticated, user]);

  const handleDeleteBooking = async (bookingId: string) => {
    if (!window.confirm('Are you sure you want to cancel this booking?')) {
      return;
    }

    setDeletingId(bookingId);
    try {
      await dispatch(deleteBooking(bookingId)).unwrap();
      toast({
        title: 'Booking Cancelled',
        description: 'Your booking has been successfully cancelled.',
      });
      dispatch(fetchBookings());
    } catch (error: any) {
      toast({
        title: 'Cancellation Failed',
        description: error || 'Failed to cancel booking. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setDeletingId(null);
    }
  };

  const handleRefresh = () => {
    dispatch(fetchBookings());
  };

  const handleBookSession = () => {
    navigate('/booking');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getProgrammeColor = (programme: string) => {
    const colors: { [key: string]: string } = {
      mindfulness: 'bg-blue-100 text-blue-800',
      yoga: 'bg-green-100 text-green-800',
      nutrition: 'bg-orange-100 text-orange-800',
      breathwork: 'bg-purple-100 text-purple-800',
      complete: 'bg-pink-100 text-pink-800',
    };
    return colors[programme] || 'bg-gray-100 text-gray-800';
  };

  if (status === 'loading') {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <h2 className="text-2xl font-semibold">Loading your bookings...</h2>
        </div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            Failed to Load Bookings
          </h2>
          <p className="text-muted-foreground mb-4">{error}</p>
          <Button onClick={handleRefresh}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            Authentication Required
          </h2>
          <p className="text-muted-foreground mb-4">
            Please log in to view your bookings.
          </p>
          <Button onClick={() => navigate('/login')}>
            Go to Login
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">My Bookings</h1>
          <p className="text-muted-foreground">
            Manage and view all your wellness sessions
          </p>
        </div>

        {bookings.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <Calendar className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">No Bookings Yet</h3>
              <p className="text-muted-foreground mb-6">
                You haven't made any bookings yet. Start your wellness journey today!
              </p>
              <Button onClick={handleBookSession}>
                Book a Session
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">
                Your Sessions ({bookings.length})
              </h2>
              <div className="flex gap-2">
                <Button 
                  onClick={handleRefresh}
                  variant="outline"
                  disabled={status === 'loading'}
                  size="sm"
                >
                  {status === 'loading' ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <RefreshCw className="h-4 w-4" />
                  )}
                  <span className="ml-2">Refresh</span>
                </Button>
                <Button onClick={handleBookSession}>
                  New Booking
                </Button>
              </div>
            </div>

            {bookings.map((booking) => (
              <Card key={booking.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5" />
                        {booking.firstName} {booking.lastName}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm mt-1">
                        {booking.email}
                      </p>
                    </div>
                    <Badge className={getProgrammeColor(booking.programme)}>
                      {booking.programme.charAt(0).toUpperCase() + booking.programme.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Date:</span>
                      <span>{formatDate(booking.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Time:</span>
                      <span>{booking.time}</span>
                    </div>
                  </div>

                  {booking.message && (
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground">
                        <strong>Additional Info:</strong> {booking.message}
                      </p>
                    </div>
                  )}

                  <div className="flex justify-between items-center pt-4 border-t">
                    <p className="text-sm text-muted-foreground">
                      Booked on {new Date(booking.createdAt!).toLocaleDateString()}
                    </p>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteBooking(booking.id)}
                      disabled={deletingId === booking.id}
                    >
                      {deletingId === booking.id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Trash2 className="h-4 w-4" />
                      )}
                      <span className="ml-2">Cancel</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;