import { useState } from "react";
import { ChevronRight, ArrowLeft, Calendar, Clock, User } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
}

interface BlogPageProps {
  blogPosts: BlogPost[];
}

interface ContentItem {
  type: "heading" | "paragraph" | "list" | "callout";
  text?: string;
  items?: string[];
}

interface Article {
  author: string;
  readTime: string;
  content: ContentItem[];
}

const BlogPage = ({ blogPosts }: BlogPageProps) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Full article content for each blog post
  const fullArticles: Record<string, Article> = {
    "Breaking the Stigma: Why Talking About Mental Health Matters": {
      author: "Dr. Sarah Johnson",
      readTime: "5 min read",
      content: [
        {
          type: "paragraph",
          text: "For too long, mental health has been shrouded in silence and stigma. People suffering from depression, anxiety, PTSD, and other conditions often feel isolated, ashamed, and afraid to seek help. But the tide is turning. More than ever, we're recognizing that mental health is just as important as physical health, and open conversations can literally save lives.",
        },
        {
          type: "heading",
          text: "The Cost of Silence",
        },
        {
          type: "paragraph",
          text: "When we don't talk about mental health, people suffer in silence. They delay seeking treatment, which can lead to worsening symptoms and even crisis situations. Studies show that the average delay between symptom onset and treatment is 11 years for mental health conditions. That's over a decade of unnecessary suffering.",
        },
        {
          type: "paragraph",
          text: "The stigma surrounding mental health prevents people from:",
        },
        {
          type: "list",
          items: [
            "Seeking professional help when they need it most",
            "Opening up to friends and family about their struggles",
            "Accessing workplace accommodations and support",
            "Living full, authentic lives without shame",
          ],
        },
        {
          type: "heading",
          text: "Breaking Down Barriers",
        },
        {
          type: "paragraph",
          text: "The good news is that we can all play a role in breaking down these barriers. Here's how:",
        },
        {
          type: "paragraph",
          text: "Start by educating yourself. Learn about common mental health conditions, their symptoms, and treatment options. Understanding replaces fear with knowledge.",
        },
        {
          type: "paragraph",
          text: "Share your own story. If you've experienced mental health challenges, consider opening up about your journey. Personal stories humanize mental illness and show others they're not alone. You don't have to share every detail—even acknowledging 'I've been there' can make a difference.",
        },
        {
          type: "paragraph",
          text: "Watch your language. Avoid using mental health conditions as adjectives ('I'm so OCD about cleaning') or making jokes that trivialize serious conditions. Small changes in how we speak can shift the culture.",
        },
        {
          type: "heading",
          text: "Creating Safe Spaces for Conversation",
        },
        {
          type: "paragraph",
          text: "When someone opens up to you about their mental health, how you respond matters. Listen without judgment. Validate their feelings. Avoid trying to 'fix' the problem or offering unsolicited advice. Sometimes people just need to be heard.",
        },
        {
          type: "paragraph",
          text: "Simple phrases like 'Thank you for trusting me with this' or 'That sounds really difficult' can go a long way. If you're concerned about someone's safety, gently encourage them to seek professional help and offer to support them in that process.",
        },
        {
          type: "heading",
          text: "The Ripple Effect",
        },
        {
          type: "paragraph",
          text: "Every conversation about mental health creates a ripple effect. When public figures, colleagues, friends, or family members speak openly, it gives others permission to do the same. It normalizes seeking help and reduces shame.",
        },
        {
          type: "paragraph",
          text: "We've seen this transformation happen with other health issues. Decades ago, cancer was whispered about. Now we openly discuss it, rally around those affected, and celebrate survivors. Mental health deserves the same openness and support.",
        },
        {
          type: "callout",
          text: "Remember: Mental health conditions are medical conditions. They're not character flaws, signs of weakness, or things people can just 'snap out of.' Treatment works, recovery is possible, and no one should have to suffer in silence.",
        },
        {
          type: "paragraph",
          text: "By talking about mental health openly and compassionately, we create a world where everyone feels empowered to seek the help they need and deserve. That's how we break the stigma—one conversation at a time.",
        },
      ],
    },
    "5 Self-Care Practices for Better Mental Wellness": {
      author: "Emma Williams, LCSW",
      readTime: "6 min read",
      content: [
        {
          type: "paragraph",
          text: "Self-care isn't selfish—it's essential. In our fast-paced, always-on world, taking time to nurture your mental health can feel like a luxury. But the truth is, regular self-care practices are foundational to maintaining good mental wellness. Here are five evidence-based practices you can start incorporating today.",
        },
        {
          type: "heading",
          text: "1. Establish a Consistent Sleep Routine",
        },
        {
          type: "paragraph",
          text: "Sleep and mental health are deeply interconnected. Poor sleep can worsen anxiety and depression, while these conditions can make it harder to sleep—creating a vicious cycle. Breaking this cycle starts with good sleep hygiene.",
        },
        {
          type: "paragraph",
          text: "Aim for 7-9 hours of sleep per night. Go to bed and wake up at the same time every day, even on weekends. Create a calming bedtime routine: dim the lights, put away screens an hour before bed, and engage in relaxing activities like reading or gentle stretching.",
        },
        {
          type: "callout",
          text: "Pro tip: If racing thoughts keep you awake, try keeping a journal by your bed. Write down worries or tomorrow's to-do list to get them out of your head.",
        },
        {
          type: "heading",
          text: "2. Move Your Body Regularly",
        },
        {
          type: "paragraph",
          text: "Exercise is one of the most powerful tools for mental health. It releases endorphins, reduces stress hormones, and improves sleep quality. You don't need to run marathons—even 20-30 minutes of moderate activity most days can make a significant difference.",
        },
        {
          type: "paragraph",
          text: "Find movement you actually enjoy. This could be dancing, hiking, yoga, swimming, or walking your dog. When exercise feels like play rather than punishment, you're more likely to stick with it.",
        },
        {
          type: "heading",
          text: "3. Practice Mindfulness and Meditation",
        },
        {
          type: "paragraph",
          text: "Mindfulness—paying attention to the present moment without judgment—has been shown to reduce anxiety, depression, and stress. The beauty of mindfulness is that it can be practiced anywhere, anytime.",
        },
        {
          type: "paragraph",
          text: "Start small. Try a 5-minute guided meditation using an app like Headspace or Calm. Or simply take three deep breaths before meals, focusing on the sensation of breathing. Notice the world around you during your morning coffee: the warmth of the mug, the aroma, the taste.",
        },
        {
          type: "list",
          items: [
            "Guided meditation apps (Headspace, Calm, Insight Timer)",
            "Body scan exercises before bed",
            "Mindful walking in nature",
            "Breathing exercises (4-7-8 technique, box breathing)",
          ],
        },
        {
          type: "heading",
          text: "4. Nurture Social Connections",
        },
        {
          type: "paragraph",
          text: "Humans are social creatures. Strong relationships provide emotional support, reduce stress, and give life meaning. Yet in our digital age, many people feel more isolated than ever.",
        },
        {
          type: "paragraph",
          text: "Make time for genuine connection. Schedule regular video calls with distant friends, join a club or group based on your interests, or simply reach out to someone you haven't talked to in a while. Quality matters more than quantity—a few close, authentic relationships are more valuable than dozens of superficial ones.",
        },
        {
          type: "paragraph",
          text: "If you're struggling with loneliness, consider volunteering, taking a class, or joining a support group. These structured activities make it easier to meet like-minded people.",
        },
        {
          type: "heading",
          text: "5. Set Boundaries and Learn to Say No",
        },
        {
          type: "paragraph",
          text: "Burnout is real, and it often stems from taking on too much. Learning to set healthy boundaries is an act of self-care that protects your time, energy, and mental health.",
        },
        {
          type: "paragraph",
          text: "Practice saying no to commitments that don't align with your values or leave you feeling drained. You don't need to justify or over-explain. A simple 'I appreciate the offer, but I can't commit to that right now' is enough.",
        },
        {
          type: "paragraph",
          text: "Set boundaries around work emails and messages outside of work hours. Protect your personal time. Remember that saying no to something is often saying yes to something else—perhaps rest, creativity, or time with loved ones.",
        },
        {
          type: "callout",
          text: "Self-care looks different for everyone. The key is finding practices that resonate with you and making them regular habits, not just occasional treats.",
        },
        {
          type: "paragraph",
          text: "Start small. Pick one practice from this list and commit to it for a week. Notice how you feel. Once it becomes a habit, add another. Over time, these small changes compound into significant improvements in your mental wellness.",
        },
      ],
    },
    "Understanding the Mind-Body Connection": {
      author: "Dr. Michael Chen, MD",
      readTime: "7 min read",
      content: [
        {
          type: "paragraph",
          text: "Your mind and body aren't separate entities—they're deeply interconnected systems that constantly influence each other. Understanding this connection can transform how you approach both physical and mental health, opening new pathways to healing and wellness.",
        },
        {
          type: "heading",
          text: "The Science Behind the Connection",
        },
        {
          type: "paragraph",
          text: "The mind-body connection isn't just philosophical—it's backed by neuroscience and physiology. When you experience stress, your brain triggers a cascade of physical responses: your heart rate increases, muscles tense, stress hormones flood your bloodstream. Chronic stress keeps your body in this heightened state, leading to inflammation, weakened immunity, and increased risk of various diseases.",
        },
        {
          type: "paragraph",
          text: "Conversely, physical conditions affect mental health. Chronic pain, digestive issues, hormonal imbalances, and inflammation can all contribute to depression and anxiety. Your gut bacteria (microbiome) communicate directly with your brain through the vagus nerve, influencing mood, cognition, and emotional regulation.",
        },
        {
          type: "heading",
          text: "How Mental Health Affects Physical Health",
        },
        {
          type: "paragraph",
          text: "Research shows that depression and anxiety increase the risk of:",
        },
        {
          type: "list",
          items: [
            "Cardiovascular disease and heart attacks",
            "Chronic pain conditions like fibromyalgia",
            "Gastrointestinal disorders including IBS",
            "Weakened immune system and slower healing",
            "Sleep disorders and chronic fatigue",
          ],
        },
        {
          type: "paragraph",
          text: "Depression, for instance, isn't just 'feeling sad.' It can manifest as physical symptoms: fatigue, changes in appetite, unexplained aches and pains, digestive problems. Sometimes people seek treatment for these physical symptoms without realizing the underlying cause is mental health related.",
        },
        {
          type: "heading",
          text: "How Physical Health Affects Mental Health",
        },
        {
          type: "paragraph",
          text: "The influence goes both ways. Regular exercise doesn't just build physical fitness—it's one of the most effective treatments for mild to moderate depression and anxiety. Movement releases endorphins, reduces stress hormones, improves sleep quality, and increases brain-derived neurotrophic factor (BDNF), which supports brain health.",
        },
        {
          type: "paragraph",
          text: "Nutrition profoundly impacts mental health too. Deficiencies in omega-3 fatty acids, B vitamins, vitamin D, and minerals like magnesium and zinc are linked to depression and anxiety. An anti-inflammatory diet rich in fruits, vegetables, whole grains, and healthy fats supports both physical and mental wellness.",
        },
        {
          type: "callout",
          text: "Your gut is often called your 'second brain.' The gut-brain axis means that digestive health directly influences mood and cognition. Probiotics and fermented foods can actually improve anxiety and depression symptoms.",
        },
        {
          type: "heading",
          text: "Practical Applications",
        },
        {
          type: "paragraph",
          text: "Understanding the mind-body connection empowers you to approach health holistically. Instead of treating physical and mental health as separate, you can address them together:",
        },
        {
          type: "paragraph",
          text: "When you're stressed or anxious, use physical interventions: deep breathing activates the parasympathetic nervous system (rest and digest), progressive muscle relaxation releases tension, and exercise burns off stress hormones.",
        },
        {
          type: "paragraph",
          text: "When experiencing physical symptoms, consider mental health factors. That chronic stomach ache might be related to anxiety. Those tension headaches could be stress-related.",
        },
        {
          type: "paragraph",
          text: "Use your body to regulate your mind. Cold water on your face (the dive reflex) quickly calms panic. Standing in a power pose for two minutes can actually increase confidence-boosting hormones. Singing or humming stimulates the vagus nerve, promoting calm.",
        },
        {
          type: "heading",
          text: "Integrative Approaches to Wellness",
        },
        {
          type: "paragraph",
          text: "The best treatment plans address both mind and body. For depression, this might mean combining therapy and medication with regular exercise, anti-inflammatory nutrition, and sleep hygiene. For chronic pain, it could include physical therapy alongside mindfulness-based stress reduction and cognitive behavioral therapy.",
        },
        {
          type: "paragraph",
          text: "Practices like yoga, tai chi, and qigong are particularly powerful because they work with the mind-body connection directly, combining movement, breathing, and meditation.",
        },
        {
          type: "paragraph",
          text: "Remember: you are not a brain carried around by a body, nor a body controlled by a mind. You are an integrated whole. When you care for one aspect of yourself, you care for all of yourself. This holistic perspective isn't just good philosophy—it's good medicine.",
        },
      ],
    },
  };

  const renderContent = (contentItem: ContentItem, index: number) => {
    switch (contentItem.type) {
      case "heading":
        return (
          <h3
            key={index}
            className="text-2xl font-bold text-gray-800 mt-8 mb-4"
          >
            {contentItem.text}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="text-gray-700 mb-4 leading-relaxed">
            {contentItem.text}
          </p>
        );
      case "list":
        return (
          <ul key={index} className="list-disc list-inside mb-4 space-y-2">
            {contentItem.items?.map((item, i) => (
              <li key={i} className="text-gray-700 ml-4">
                {item}
              </li>
            ))}
          </ul>
        );
      case "callout":
        return (
          <div
            key={index}
            className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg"
          >
            <p className="text-gray-800 font-medium italic">
              {contentItem.text}
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  // If an article is selected, show the full article view
  if (selectedPost) {
    const article = fullArticles[selectedPost.title];

    return (
      <div className="animate-fadeIn max-w-4xl mx-auto">
        {/* Back button */}
        <button
          onClick={() => setSelectedPost(null)}
          className="flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-6 transition-colors duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Blog
        </button>

        {/* Article header */}
        <article className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {selectedPost.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{selectedPost.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            {article.content.map((contentItem, index) =>
              renderContent(contentItem, index),
            )}
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-800 mb-2">
                Need Professional Support?
              </h4>
              <p className="text-gray-600 mb-4">
                If you're struggling with your mental health, please reach out
                to a licensed professional. Call 988 for immediate crisis
                support.
              </p>
              <button
                onClick={() => setSelectedPost(null)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Explore More Resources
              </button>
            </div>
          </div>
        </article>
      </div>
    );
  }

  // Default blog list view
  return (
    <div className="animate-fadeIn">
      <h2 className="text-4xl font-bold mb-8 text-gray-800 animate-slideDown">
        Mental Health Blog
      </h2>

      <div className="space-y-6">
        {blogPosts.map((post, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.01] animate-slideUp opacity-0"
            style={{
              animationDelay: `${0.1 + idx * 0.1}s`,
              animationFillMode: "forwards",
            }}
          >
            <div className="p-8">
              <div className="text-sm text-gray-500 mb-2">{post.date}</div>
              <h3
                onClick={() => setSelectedPost(post)}
                className="cursor-pointer text-2xl font-bold text-gray-800 mb-3 transition-colors duration-300 hover:text-blue-600"
              >
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <button
                onClick={() => setSelectedPost(post)}
                className="text-blue-600 font-semibold hover:underline flex items-center group transition-all duration-300"
              >
                Read More
                <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
