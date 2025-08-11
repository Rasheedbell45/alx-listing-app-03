import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";
import GroundRules from "@/components/booking/GroundRules";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Booking Form + Order Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BookingForm />
        <OrderSummary bookingDetails={bookingDetails} />
      </div>

      {/* Cancellation Policy */}
      <section className="bg-white p-6 rounded-2xl shadow">
        <CancellationPolicy />
      </section>

      {/* Ground Rules */}
      <section className="bg-white p-6 rounded-2xl shadow">
        <GroundRules />
      </section>
    </div>
  );
}
