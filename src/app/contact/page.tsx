import Link from 'next/link'

export default function Alternate() {
  const contactMethods = [
    {
      type: "Professional Email",
      value: "maroa@vociply.com",
      description: "Best for research collaborations and professional inquiries"
    },
    {
      type: "LinkedIn",
      value: "linkedin.com/in/marwamasese",
      description: "Professional network and career updates"
    },
    {
      type: "GitHub",
      value: "github.com/MarwaMasese",
      description: "Open source projects and code repositories"
    },
    {
      type: "Google Scholar",
      value: "scholar.google.com/marwamasese",
      description: "Academic publications and citation metrics"
    }
  ];

  const interests = [
    {
      category: "Research Collaboration",
      items: [
        "Multilingual voice processing and speech synthesis",
        "Large language model optimization and deployment",
        "Edge AI democratization and resource optimization",
        "Human-AI interaction paradigms",
        "Ethical AI development for underserved communities"
      ]
    },
    {
      category: "Academic Opportunities",
      items: [
        "PhD program applications and discussions",
        "Joint research publications",
        "Conference presentations and workshops",
        "Cross-institutional collaboration projects",
        "Academic mentorship and supervision"
      ]
    },
    {
      category: "Industry Consulting",
      items: [
        "Voice AI system architecture and design",
        "ML engineering and production deployment",
        "Multilingual AI system development",
        "Technical due diligence for AI startups",
        "Research-to-production pipeline optimization"
      ]
    }
  ];

  const timeline = [
    {
      period: "Currently",
      status: "Open for PhD Applications",
      description: "Actively seeking PhD opportunities in AI research programs focused on multilingual systems and edge optimization"
    },
    {
      period: "2025-2026",
      status: "Research Publication Goals",
      description: "Targeting completion of hypernetwork optimization research and additional publications in top-tier AI conferences"
    },
    {
      period: "Long-term",
      status: "Academic Career Transition",
      description: "Establishing independent research program and contributing to foundational AI research with social impact"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I&apos;m always excited to discuss AI research, collaboration opportunities, 
            and the future of technology that makes a meaningful impact.
          </p>
        </div>

        {/* Contact Information */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8 text-center">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {contactMethods.map((contact, index) => (
              <div key={index} className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium text-gray-900 mb-2">{contact.type}</h3>
                <p className="text-blue-600 font-mono text-sm mb-2">{contact.value}</p>
                <p className="text-gray-600 text-sm">{contact.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Collaboration Interests */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8 text-center">Areas of Interest</h2>
          <div className="space-y-8">
            {interests.map((interest, index) => (
              <div key={index} className="bg-white border rounded-lg p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-4 text-center">
                  {interest.category}
                </h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {interest.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline & Availability */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8 text-center">Current Status & Timeline</h2>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="bg-blue-50 border-l-4 border-blue-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-gray-900">{item.status}</h3>
                  <span className="text-sm text-gray-600 font-mono">{item.period}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gray-900 rounded-lg p-8">
          <h2 className="text-2xl font-light mb-4" style={{color: '#ffffff'}}>Ready to Collaborate?</h2>
          <p className="text-lg mb-6" style={{color: '#ffffff'}}>
            Whether you&apos;re looking to discuss research opportunities, explore potential collaborations, 
            or simply connect about AI and its impact, I&apos;d love to hear from you.
          </p>
          <div className="space-x-4">
            <a 
              href="mailto:maroa@vociply.com" 
              className="inline-block bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors font-medium"
            >
              Send Email
            </a>
            <Link 
              href="/" 
              className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-800 transition-colors font-medium"
            >
              Back to Portfolio
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
