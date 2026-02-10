import { Phone, ExternalLink } from "lucide-react";

const HelplinesPage = ({ helplines }) => {
  return (
    <div className="animate-fadeIn">
      <h2 className="text-4xl font-bold mb-4 text-gray-800 animate-slideDown">
        Crisis Support & Helplines
      </h2>

      <div
        className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg animate-slideUp opacity-0"
        style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
      >
        <p className="text-lg font-semibold text-red-800">
          If you're in crisis or having thoughts of suicide, please call 988
          immediately or go to your nearest emergency room.
        </p>
      </div>

      <div className="space-y-4">
        {helplines.map((helpline, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-slideUp opacity-0"
            style={{
              animationDelay: `${0.2 + idx * 0.1}s`,
              animationFillMode: "forwards",
            }}
          >
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {helpline.name}
                </h3>
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                  <Phone className="w-5 h-5 animate-pulse" />
                  <span className="text-2xl font-semibold text-blue-600">
                    {helpline.number}
                  </span>
                </div>
                <p className="text-gray-600">Available: {helpline.available}</p>
              </div>
              <a
                href={`tel:${helpline.number.replace(/[^0-9]/g, "")}`}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:translate-y-0"
              >
                Call Now
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div
          className="bg-blue-50 rounded-xl p-6 animate-slideUp opacity-0 hover:shadow-lg transition-all duration-300"
          style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
        >
          <h3 className="text-xl font-bold mb-3 text-gray-800">
            Local Resources
          </h3>
          <p className="text-gray-600 mb-4">
            Find mental health services in your area by contacting your local
            community health center or searching online for therapists and
            psychiatrists near you.
          </p>
          <a
            href="https://findtreatment.samhsa.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline transition-all duration-300 hover:translate-x-2 inline-flex items-center group"
          >
            Find Local Services
            <ExternalLink className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div
          className="bg-purple-50 rounded-xl p-6 animate-slideUp opacity-0 hover:shadow-lg transition-all duration-300"
          style={{ animationDelay: "1s", animationFillMode: "forwards" }}
        >
          <h3 className="text-xl font-bold mb-3 text-gray-800">
            Insurance & Affordability
          </h3>
          <p className="text-gray-600 mb-4">
            Many insurance plans cover mental health services. If uninsured,
            sliding scale clinics and community centers offer affordable care.
          </p>
          <a
            href="https://www.healthcare.gov/coverage/mental-health-substance-abuse-coverage/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 font-semibold hover:underline transition-all duration-300 hover:translate-x-2 inline-flex items-center group"
          >
            Learn About Coverage
            <ExternalLink className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelplinesPage;
