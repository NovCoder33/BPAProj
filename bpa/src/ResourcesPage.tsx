import { BookOpen, Users } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const ResourcesPage = () => {
  const [zipCode, setZipCode] = useState("");
  const [searchType, setSearchType] = useState("");
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    const elements = document.querySelectorAll(".scroll-fade");
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleSearch = () => {
    if (!zipCode) {
      alert("Please enter a ZIP code");
      return;
    }

    if (searchType === "therapist") {
      window.open(
        `https://www.psychologytoday.com/us/therapists?search=${zipCode}`,
        "_blank",
      );
    } else if (searchType === "health-center") {
      window.open(
        `https://findahealthcenter.hrsa.gov/search?zip=${zipCode}&radius=25`,
        "_blank",
      );
    }
  };

  return (
    <div className="space-y-8 page-fade-in">
      <style>{`
        @keyframes pageFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .page-fade-in {
          animation: pageFadeIn 0.8s ease-out;
        }

        .scroll-fade {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .scroll-fade.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .stagger-1 {
          animation-delay: 0.1s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .stagger-2 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .stagger-3 {
          animation-delay: 0.3s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .stagger-4 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .stagger-5 {
          animation-delay: 0.5s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .stagger-6 {
          animation-delay: 0.6s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .border-accent {
          transition: border-color 0.3s ease, padding-left 0.3s ease;
        }

        .border-accent:hover {
          padding-left: 1.5rem;
        }

        input:focus {
          transition: all 0.3s ease;
        }

        button {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        button:hover::before {
          width: 300px;
          height: 300px;
        }

        .grid > div {
          transition: all 0.3s ease;
        }

        .grid > div:hover {
          transform: scale(1.05);
        }
      `}</style>

      <div className="text-center mb-8 animate-scaleIn scroll-fade">
        <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-4 animate-float" />
        <h1 className="text-4xl font-bold mb-4">Mental Health Resources</h1>
        <p className="text-lg text-gray-600">
          Educational materials and support information
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg p-8 card-hover animate-fadeIn scroll-fade">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Find Local Support Near You
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <div>
            <label className="block font-semibold mb-2 text-lg">
              Enter Your ZIP Code
            </label>
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="Enter ZIP code (e.g., 10001)"
              className="w-full border-2 border-gray-300 rounded-lg p-4 text-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              maxLength={5}
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => {
                setSearchType("therapist");
                handleSearch();
              }}
              className="bg-purple-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-purple-700 hover:shadow-xl flex items-center justify-center gap-2 relative"
            >
              <Users className="w-6 h-6" />
              <span className="relative z-10">Find Therapists Near Me</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 card-hover animate-slideInLeft stagger-1 scroll-fade">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          National Organizations
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4 py-2 border-accent">
            <h3 className="font-bold text-lg">
              National Alliance on Mental Illness (NAMI)
            </h3>
            <p className="text-gray-700">1-800-950-6264</p>
            <a
              href="https://www.nami.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline transition-all"
            >
              nami.org
            </a>
            <p className="text-gray-600 mt-2">
              Advocacy, education, support, and public awareness for mental
              health
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4 py-2 border-accent">
            <h3 className="font-bold text-lg">
              Anxiety & Depression Association (ADAA)
            </h3>
            <p className="text-gray-700">240-485-1001</p>
            <a
              href="https://adaa.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline transition-all"
            >
              adaa.org
            </a>
            <p className="text-gray-600 mt-2">
              Resources for anxiety, depression, OCD, PTSD, and related
              disorders
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4 py-2 border-accent">
            <h3 className="font-bold text-lg">Mental Health America</h3>
            <p className="text-gray-700">1-800-969-6642</p>
            <a
              href="https://www.mhanational.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline transition-all"
            >
              mhanational.org
            </a>
            <p className="text-gray-600 mt-2">
              Free mental health screening tools and resources
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4 py-2 border-accent">
            <h3 className="font-bold text-lg">
              National Institute of Mental Health (NIMH)
            </h3>
            <p className="text-gray-700">1-866-615-6464</p>
            <a
              href="https://www.nimh.nih.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline transition-all"
            >
              nimh.nih.gov
            </a>
            <p className="text-gray-600 mt-2">
              Research-based information on mental health disorders
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 card-hover animate-slideInRight stagger-2 scroll-fade">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Specialized Support
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border-l-4 border-purple-500 pl-4 py-2 border-accent">
            <h3 className="font-bold text-lg">Veterans Crisis Line</h3>
            <p className="text-gray-700">1-800-273-8255 (Press 1)</p>
            <a
              href="https://www.veteranscrisisline.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline transition-all"
            >
              veteranscrisisline.net
            </a>
          </div>
          <div className="border-l-4 border-purple-500 pl-4 py-2 border-accent">
            <h3 className="font-bold text-lg">Trevor Project (LGBTQ+)</h3>
            <p className="text-gray-700">1-866-488-7386</p>
            <a
              href="https://www.thetrevorproject.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline transition-all"
            >
              thetrevorproject.org
            </a>
          </div>
          <div className="border-l-4 border-purple-500 pl-4 py-2 border-accent">
            <h3 className="font-bold text-lg">
              Postpartum Support International
            </h3>
            <p className="text-gray-700">1-800-944-4773</p>
            <a
              href="https://www.postpartum.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline transition-all"
            >
              postpartum.net
            </a>
          </div>
          <div className="border-l-4 border-purple-500 pl-4 py-2 border-accent">
            <h3 className="font-bold text-lg">Substance Abuse Helpline</h3>
            <p className="text-gray-700">1-800-662-4357</p>
            <a
              href="https://www.samhsa.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline transition-all"
            >
              samhsa.gov
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 card-hover animate-slideInLeft stagger-3 scroll-fade">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Online Therapy Platforms
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4 py-2 border-accent">
            <h3 className="font-bold text-lg">BetterHelp</h3>
            <a
              href="https://www.betterhelp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline transition-all"
            >
              betterhelp.com
            </a>
            <p className="text-gray-600 mt-2">
              Online counseling with licensed therapists via video, phone, or
              messaging
            </p>
          </div>
          <div className="border-l-4 border-green-500 pl-4 py-2 border-accent">
            <h3 className="font-bold text-lg">Talkspace</h3>
            <a
              href="https://www.talkspace.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline transition-all"
            >
              talkspace.com
            </a>
            <p className="text-gray-600 mt-2">
              Affordable online therapy with psychiatry options available
            </p>
          </div>
          <div className="border-l-4 border-green-500 pl-4 py-2 border-accent">
            <h3 className="font-bold text-lg">7 Cups</h3>
            <a
              href="https://www.7cups.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline transition-all"
            >
              7cups.com
            </a>
            <p className="text-gray-600 mt-2">
              Free emotional support from trained listeners, plus paid therapy
              options
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 card-hover animate-slideInRight stagger-4 scroll-fade">
        <h2 className="text-2xl font-bold text-orange-700 mb-4">
          Self-Help Tools & Apps
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 border-2 border-orange-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Headspace</h3>
            <p className="text-gray-600">
              Meditation and mindfulness exercises
            </p>
          </div>
          <div className="p-4 border-2 border-orange-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Calm</h3>
            <p className="text-gray-600">
              Sleep stories, meditation, and relaxation
            </p>
          </div>
          <div className="p-4 border-2 border-orange-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">MoodPath</h3>
            <p className="text-gray-600">Depression and anxiety assessment</p>
          </div>
          <div className="p-4 border-2 border-orange-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Sanvello</h3>
            <p className="text-gray-600">Mood tracking and coping tools</p>
          </div>
          <div className="p-4 border-2 border-orange-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">What's Up</h3>
            <p className="text-gray-600">CBT and ACT-based coping methods</p>
          </div>
          <div className="p-4 border-2 border-orange-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Wysa</h3>
            <p className="text-gray-600">AI-powered mental health chatbot</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 card-hover animate-slideInLeft stagger-5 scroll-fade">
        <h2 className="text-2xl font-bold text-red-700 mb-4">
          Educational Resources
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-red-500 pl-4 py-2 border-accent">
            <h3 className="font-bold text-lg">Mental Health First Aid</h3>
            <a
              href="https://www.mentalhealthfirstaid.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:underline transition-all"
            >
              mentalhealthfirstaid.org
            </a>
            <p className="text-gray-600 mt-2">
              Learn how to help someone experiencing a mental health crisis
            </p>
          </div>
          <div className="border-l-4 border-red-500 pl-4 py-2 border-accent">
            <h3 className="font-bold text-lg">NAMI Online Classes</h3>
            <a
              href="https://www.nami.org/support-education"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:underline transition-all"
            >
              nami.org/support-education
            </a>
            <p className="text-gray-600 mt-2">
              Free courses for individuals and families affected by mental
              illness
            </p>
          </div>
          <div className="border-l-4 border-red-500 pl-4 py-2 border-accent">
            <h3 className="font-bold text-lg">MentalHealth.gov</h3>
            <a
              href="https://www.mentalhealth.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:underline transition-all"
            >
              mentalhealth.gov
            </a>
            <p className="text-gray-600 mt-2">
              U.S. government portal for mental health information
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
