import { FaRobot, FaUserMd, FaPills, FaCalendarCheck, FaAmbulance, FaFileMedical, FaBell, FaLanguage, FaMoneyBillWave } from 'react-icons/fa';

const features = [
  { icon: <FaRobot className="text-blue-500 text-3xl" />, title: 'AI Symptom Checker', desc: 'Conversational bot suggests the right doctor, lab, or service nearby.' },
  { icon: <FaUserMd className="text-blue-500 text-3xl" />, title: 'Multi-vendor Marketplace', desc: 'Doctors, labs, pharmacies, physiotherapists all in one place.' },
  { icon: <FaPills className="text-blue-500 text-3xl" />, title: 'Medicine Ordering', desc: 'Order medicines with hyperlocal delivery.' },
  { icon: <FaCalendarCheck className="text-blue-500 text-3xl" />, title: 'Appointment Booking', desc: 'Book online or offline appointments easily.' },
  { icon: <FaAmbulance className="text-blue-500 text-3xl" />, title: 'Patient Transportation', desc: 'Ambulance, cabs, and bikes for patient transport.' },
  { icon: <FaFileMedical className="text-blue-500 text-3xl" />, title: 'Digital Prescriptions', desc: 'Access digital prescriptions and health records.' },
  { icon: <FaBell className="text-blue-500 text-3xl" />, title: 'AI Medicine Reminders', desc: 'Get reminders for your medicines.' },
  { icon: <FaLanguage className="text-blue-500 text-3xl" />, title: 'Multilingual Support', desc: 'Choose your preferred language.' },
  { icon: <FaMoneyBillWave className="text-blue-500 text-3xl" />, title: 'COD + Digital Payments', desc: 'Multiple payment options for convenience.' },
];

export default function KeyFeatures() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
  <h2 className="text-4xl font-bold text-center mb-10 text-blue-900 tracking-tight">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-blue-50 rounded-lg p-6 flex flex-col items-center shadow hover:shadow-lg transition">
              {f.icon}
              <h3 className="mt-4 text-xl font-semibold mb-2 text-blue-700">{f.title}</h3>
              <p className="text-gray-600 text-center">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
