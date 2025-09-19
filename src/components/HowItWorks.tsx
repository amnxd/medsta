import { FaSearch, FaRobot, FaCalendarCheck, FaMoneyBillWave, FaTruck } from 'react-icons/fa';

const steps = [
  { icon: <FaSearch className="text-blue-500 text-2xl" />, title: 'Search Symptoms/Services' },
  { icon: <FaRobot className="text-blue-500 text-2xl" />, title: 'AI Suggests Provider' },
  { icon: <FaCalendarCheck className="text-blue-500 text-2xl" />, title: 'Book Appointment / Order Medicines' },
  { icon: <FaMoneyBillWave className="text-blue-500 text-2xl" />, title: 'Pay Online or COD' },
  { icon: <FaTruck className="text-blue-500 text-2xl" />, title: 'Track, Get Service & Review' },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-5xl mx-auto px-4">
  <h2 className="text-4xl font-bold text-center mb-10 text-blue-800 tracking-tight">How Medsta Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="bg-white rounded-full p-4 shadow mb-2">{s.icon}</div>
              <div className="font-semibold text-lg text-blue-700 text-center">{s.title}</div>
              {i < steps.length - 1 && <div className="hidden md:block h-1 w-16 bg-blue-300 mx-2 my-4 rounded-full" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
