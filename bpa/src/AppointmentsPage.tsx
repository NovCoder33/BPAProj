import { useState } from "react";
import { Calendar, Clock, Send, Loader } from "lucide-react";

interface AppointmentForm {
  name: string;
  email: string;
  date: string;
  time: string;
  issue: string;
}

interface AppointmentsPageProps {
  appointmentConfirmed: boolean;
  setAppointmentForm: (form: AppointmentForm) => void;
  appointmentForm: AppointmentForm;
  handleAppointmentSubmit: (e: React.FormEvent) => void;
  AppointmentConfirmationPage: React.ReactNode;
}

const AppointmentsPage = ({
  appointmentConfirmed,
  setAppointmentForm,
  appointmentForm,
  handleAppointmentSubmit,
  AppointmentConfirmationPage,
}: AppointmentsPageProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validate form
    if (
      !appointmentForm.name ||
      !appointmentForm.email ||
      !appointmentForm.date ||
      !appointmentForm.time
    ) {
      setError("Please fill in all required fields");
      setLoading(false);
      return;
    }

    // Simulate appointment submission (no backend)
    setTimeout(() => {
      setLoading(false);
      handleAppointmentSubmit(e);
    }, 500);
  };

  // If appointment is confirmed, show confirmation page
  if (appointmentConfirmed) {
    return <>{AppointmentConfirmationPage}</>;
  }

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  return (
    <div className="animate-fadeIn">
      <h2 className="text-4xl font-bold mb-4 text-gray-800 animate-slideDown">
        Schedule an Appointment
      </h2>
      <p
        className="text-lg text-gray-600 mb-8 animate-slideDown opacity-0"
        style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
      >
        Book a consultation with one of our licensed mental health
        professionals. All sessions are confidential and conducted in a safe,
        supportive environment.
      </p>

      <div className="max-w-2xl mx-auto">
        <div
          className="bg-white rounded-xl shadow-md p-8 animate-slideUp opacity-0"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg animate-slideDown">
              <p className="text-red-800 font-semibold">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div
              className="animate-fadeInUp opacity-0"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              <label className="block text-gray-700 font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                value={appointmentForm.name || ""}
                onChange={(e) => {
                  const newForm = { ...appointmentForm };
                  newForm.name = e.target.value;
                  setAppointmentForm(newForm);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                placeholder="Enter your full name"
                required
                disabled={loading}
              />
            </div>

            <div
              className="animate-fadeInUp opacity-0"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={appointmentForm.email || ""}
                onChange={(e) => {
                  const newForm = { ...appointmentForm };
                  newForm.email = e.target.value;
                  setAppointmentForm(newForm);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                placeholder="your.email@example.com"
                required
                disabled={loading}
              />
            </div>

            <div
              className="animate-fadeInUp opacity-0"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              <label className="block text-gray-700 font-semibold mb-2">
                Preferred Date *
              </label>
              <input
                type="date"
                value={appointmentForm.date || ""}
                onChange={(e) => {
                  const newForm = { ...appointmentForm };
                  newForm.date = e.target.value;
                  setAppointmentForm(newForm);
                }}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                required
                disabled={loading}
              />
            </div>

            <div
              className="animate-fadeInUp opacity-0"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <label className="block text-gray-700 font-semibold mb-2">
                Preferred Time *
              </label>
              <select
                value={appointmentForm.time || ""}
                onChange={(e) => {
                  const newForm = { ...appointmentForm };
                  newForm.time = e.target.value;
                  setAppointmentForm(newForm);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                required
                disabled={loading}
              >
                <option value="">Select a time</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            <div
              className="animate-fadeInUp opacity-0"
              style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
            >
              <label className="block text-gray-700 font-semibold mb-2">
                Reason for Visit (Optional)
              </label>
              <textarea
                value={appointmentForm.issue || ""}
                onChange={(e) => {
                  const newForm = { ...appointmentForm };
                  newForm.issue = e.target.value;
                  setAppointmentForm(newForm);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24 transition-all duration-300 hover:border-blue-300 resize-none"
                placeholder="Briefly describe what you'd like to discuss..."
                disabled={loading}
              />
            </div>

            <div
              className="animate-fadeInUp opacity-0"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              <button
                type="submit"
                disabled={
                  loading ||
                  !appointmentForm.name ||
                  !appointmentForm.email ||
                  !appointmentForm.date ||
                  !appointmentForm.time
                }
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed hover:shadow-lg hover:-translate-y-1 active:translate-y-0 disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <Loader className="w-5 h-5 mr-2 animate-spin" />
                    Scheduling...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Schedule Appointment
                  </>
                )}
              </button>
            </div>
          </form>

          <div
            className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg animate-fadeInUp opacity-0"
            style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
          >
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> Appointment requests are typically
              confirmed within 24 hours. You will receive a confirmation email
              with additional details and instructions.
            </p>
          </div>
        </div>

        <div
          className="mt-8 grid md:grid-cols-2 gap-6 animate-slideUp opacity-0"
          style={{ animationDelay: "1s", animationFillMode: "forwards" }}
        >
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <Calendar className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-bold mb-2 text-gray-800">
              Flexible Scheduling
            </h3>
            <p className="text-gray-600 text-sm">
              We offer appointments Monday through Friday, 9 AM to 5 PM. Choose
              a time that works best for you.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <Clock className="w-10 h-10 text-purple-600 mb-4" />
            <h3 className="text-lg font-bold mb-2 text-gray-800">
              Session Duration
            </h3>
            <p className="text-gray-600 text-sm">
              Initial consultations are 60 minutes. Follow-up sessions are
              typically 45-50 minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsPage;
