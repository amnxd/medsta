export default function ProviderPartnerCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-100">
      <div className="max-w-3xl mx-auto px-4 flex justify-center">
        <div className="w-full bg-white rounded-2xl shadow-lg border border-blue-100 p-10 text-center flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-4 text-blue-900 tracking-tight">For Providers & Partners</h2>
          <div className="mb-4 text-blue-800 text-lg">Visibility, early access to analytics dashboard, featured listing during launch.</div>
          <div className="mb-8 text-blue-700">Onboarding steps: <span className="font-semibold text-teal-700">KYC → Profile Setup → Get Bookings After Launch</span></div>
          <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-10 py-3 rounded-full shadow-lg hover:from-blue-700 hover:to-teal-600 transition-all font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-300">Pre-Register as Provider</button>
        </div>
      </div>
    </section>
  );
}
