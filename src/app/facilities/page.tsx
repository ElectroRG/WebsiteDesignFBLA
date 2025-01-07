'use client';

export default function FacilityInfo() {
  return (
    <main className="p-6 max-w-screen-lg mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Facility Information</h1>

      {/* Amenities Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Spacious seating with excellent views from all angles.</li>
          <li>Concession stand offering snacks, drinks, and hot meals.</li>
          <li>Accessible restrooms located throughout the facility.</li>
          <li>Free Wi-Fi for visitors.</li>
          <li>On-site parking available for all guests.</li>
          <li>Locker rooms and team meeting spaces for athletes.</li>
        </ul>
      </section>

      {/* Policies Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Policies</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Outside food and beverages are not permitted.</li>
          <li>Smoking and vaping are strictly prohibited on school grounds.</li>
          <li>Alcohol and illegal substances are not allowed.</li>
          <li>Pets are not permitted, except for service animals.</li>
          <li>Children must be supervised at all times.</li>
          <li>All guests must follow staff instructions for safety and security.</li>
        </ul>
      </section>
    </main>
  );
}