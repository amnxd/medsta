const testimonials = [
  { name: 'Priya S.', role: 'Patient', review: 'Medsta made booking a doctor and getting medicines so easy! Highly recommended.', badge: 'Verified Patient' },
  { name: 'Dr. Ramesh K.', role: 'Provider', review: 'The provider dashboard is intuitive and helped me reach more patients.', badge: 'Verified Doctor' },
  { name: 'SRL Diagnostics', role: 'Lab', review: 'Seamless onboarding and great support from the Medsta team.', badge: 'ISO Certified Lab' },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
  <h2 className="text-4xl font-bold text-center mb-10 text-blue-900 tracking-tight">Testimonials & Social Proof</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-blue-50 rounded-lg p-6 flex flex-col items-center shadow">
              <div className="font-semibold text-lg mb-1 text-blue-900">{t.name}</div>
              <div className="text-sm text-gray-500 mb-2">{t.role}</div>
              <div className="italic text-gray-700 mb-2">&quot;{t.review}&quot;</div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">{t.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
