import { useState } from "react";
import { Star, X, CheckCircle, Send } from "lucide-react";

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Sarah M.",
      condition: "Anxiety & Depression",
      story:
        "After years of struggling in silence, I finally reached out for help. Therapy and medication changed my life. Today, I'm thriving in my career and relationships. Recovery is possible.",
      years: "3 years in recovery",
      rating: 5,
    },
    {
      id: 2,
      name: "James K.",
      condition: "PTSD",
      story:
        "Combat left me with invisible wounds. Through trauma therapy and support groups, I've learned to manage my symptoms and reconnect with my family. There's hope after trauma.",
      years: "5 years in recovery",
      rating: 5,
    },
    {
      id: 3,
      name: "Maria L.",
      condition: "Bipolar Disorder",
      story:
        "Finding the right treatment took time, but it was worth it. With medication, therapy, and lifestyle changes, I now have stability and can pursue my dreams.",
      years: "4 years stable",
      rating: 5,
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    condition: "",
    story: "",
    years: "",
    rating: 5,
  });
  const [hoverRating, setHoverRating] = useState(0);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStarClick = (rating: number) => {
    setFormData((prev) => ({
      ...prev,
      rating: rating,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.condition ||
      !formData.story ||
      !formData.years
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Create new testimonial with unique ID
    const newTestimonial = {
      id: testimonials.length + 1,
      ...formData,
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setSubmitted(true);
    setFormData({
      name: "",
      condition: "",
      story: "",
      years: "",
      rating: 5,
    });

    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
    }, 3000);
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({
      name: "",
      condition: "",
      story: "",
      years: "",
      rating: 5,
    });
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto animate-fadeInUp">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 animate-slideUp">
          Stories of Hope & Recovery
        </h2>
        <p
          className="text-lg md:text-xl text-gray-600 mb-12 animate-fadeIn"
          style={{ animationDelay: "200ms" }}
        >
          Real stories from real people who have overcome mental health
          challenges. Recovery is possible, and you're not alone.
        </p>

        <div className="space-y-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] animate-fadeInUp border border-gray-100"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="flex items-center mb-6 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < (testimonial.rating || 5)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    } animate-fadeIn transform hover:scale-125 transition-transform duration-200`}
                    style={{ animationDelay: `${idx * 150 + i * 80}ms` }}
                  />
                ))}
              </div>

              <p className="text-gray-700 text-lg md:text-xl mb-6 italic leading-relaxed">
                "{testimonial.story}"
              </p>

              <div className="border-t-2 border-gray-200 pt-6 mt-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="space-y-1">
                    <p className="font-bold text-xl text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 text-base">
                      {testimonial.condition}
                    </p>
                  </div>

                  <div className="bg-green-50 px-4 py-2 rounded-full border-2 border-green-200 animate-pulse">
                    <p className="text-sm font-semibold text-green-700">
                      {testimonial.years}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showForm ? (
          <div
            className="mt-12 shimmer-bg rounded-2xl p-10 md:p-12 text-center shadow-xl animate-scaleIn transform hover:scale-[1.02] transition-all duration-300"
            style={{ animationDelay: "600ms" }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Share Your Story
            </h3>
            <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
              Your journey could inspire someone else to seek help. If you'd
              like to share your recovery story, we'd love to hear from you.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl active:scale-95"
            >
              Submit Your Story
            </button>
          </div>
        ) : (
          <div className="mt-12 bg-white rounded-2xl p-8 md:p-10 shadow-xl animate-fadeInUp border border-gray-200">
            {submitted && (
              <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg animate-slideDown">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <div>
                    <p className="font-semibold text-green-800">
                      Thank you for sharing your story!
                    </p>
                    <p className="text-green-700">
                      Your testimonial has been saved and may inspire others.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {!submitted && (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Share Your Recovery Story
                  </h3>
                  <button
                    onClick={handleCancel}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">
                      Rate Your Recovery Experience
                    </label>
                    <div className="flex items-center space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleStarClick(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="focus:outline-none transition-transform duration-200 hover:scale-125"
                        >
                          <Star
                            className={`w-10 h-10 ${
                              star <= (hoverRating || formData.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            } transition-colors duration-200`}
                          />
                        </button>
                      ))}
                      <span className="ml-3 text-gray-600 font-medium">
                        {formData.rating}{" "}
                        {formData.rating === 1 ? "star" : "stars"}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Your Name (or pseudonym)
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Sarah M."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Condition/Challenge
                    </label>
                    <input
                      type="text"
                      name="condition"
                      value={formData.condition}
                      onChange={handleInputChange}
                      placeholder="e.g., Anxiety & Depression"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Recovery Status
                    </label>
                    <input
                      type="text"
                      name="years"
                      value={formData.years}
                      onChange={handleInputChange}
                      placeholder="e.g., 3 years in recovery"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Your Story
                    </label>
                    <textarea
                      name="story"
                      value={formData.story}
                      onChange={handleInputChange}
                      placeholder="Share your journey..."
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                      required
                    />
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Privacy Notice:</strong> Your story will be shared
                      publicly to inspire others.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Submit Story
                    </button>
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="flex-1 bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 active:scale-95"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialsPage;
