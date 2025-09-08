export default function Teaching() {
  const mentorshipPrograms = [
    {
      title: "ARM Ambassador Program",
      role: "Technical Mentor & Educator",
      period: "2024-Present",
      description: "Leading comprehensive learning initiatives bridging academic ML research with practical implementation",
      achievements: [
        "Developed learning paths reaching 1000+ learners globally",
        "Created workshop materials and tutorials for emerging researchers",
        "Established mentorship programs connecting industry with academia",
        "Contributed to technical documentation and educational guides"
      ]
    },
    {
      title: "Vociply Research Lab",
      role: "Research Team Lead",
      period: "2024-Present",
      description: "Mentoring team members on advanced ML development and research methodologies",
      achievements: [
        "Establishing engineering best practices for research-to-production pipelines",
        "Training team on multilingual voice processing techniques",
        "Developing internal research protocols and documentation standards",
        "Facilitating knowledge sharing across technical and research teams"
      ]
    }
  ];

  const speakingEngagements = [
    {
      title: "Deep Learning Indaba 2025",
      type: "Research Presentation",
      location: "Conference Venue",
      date: "2025",
      topic: "Vociply: A Real-Time Voice-to-Voice Agentic System for African Business Automation Using LLMs",
      description: "Presenting novel research on multilingual voice AI systems and their application to business automation across African languages."
    },
    {
      title: "ARM Developer Conference",
      type: "Technical Workshop",
      location: "Various Locations",
      date: "2024",
      topic: "Edge AI Democratization: Deploying Efficient ML Models on ARM Devices",
      description: "Leading workshops on model optimization, compression techniques, and practical deployment strategies for resource-constrained environments."
    },
    {
      title: "AI Research Symposium",
      type: "Invited Talk",
      location: "Virtual/Hybrid",
      date: "2024",
      topic: "Hypernetwork Optimization for Ternary Neural Networks",
      description: "Discussing ongoing research in neural network optimization and its implications for edge AI deployment."
    }
  ];

  const researchCollaborations = [
    {
      title: "PhD Program Applications",
      status: "Open to Discussions",
      focus: "Multilingual AI, Edge Optimization, Conversational Systems",
      description: "Actively seeking PhD opportunities to establish independent research program in audio AI and conversational systems."
    },
    {
      title: "Research Collaborations",
      status: "Actively Seeking",
      focus: "Joint Publications, Cross-institutional Projects",
      description: "Open to collaborative research opportunities in multilingual AI, edge deployment, and ethical AI development."
    },
    {
      title: "Industry Partnerships",
      status: "Available for Consultation",
      focus: "Voice AI, Edge Deployment, ML Engineering",
      description: "Consulting on voice AI system architecture, multilingual processing, and production ML deployment strategies."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-light text-gray-900 mb-12 text-center">Teaching & Engagement</h1>
        
        {/* Mentorship & Education */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8 border-b border-gray-200 pb-2">Mentorship & Education</h2>
          <div className="space-y-8">
            {mentorshipPrograms.map((program, index) => (
              <div key={index} className="bg-blue-50 border-l-4 border-blue-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900">{program.title}</h3>
                    <p className="text-blue-600 font-medium">{program.role}</p>
                  </div>
                  <span className="text-sm text-gray-600 font-mono bg-white px-2 py-1 rounded">
                    {program.period}
                  </span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {program.description}
                </p>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {program.achievements.map((achievement, idx) => (
                      <li key={idx} className="leading-relaxed">{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Speaking Engagements */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8 border-b border-gray-200 pb-2">Speaking Engagements & Conferences</h2>
          <div className="space-y-8">
            {speakingEngagements.map((engagement, index) => (
              <div key={index} className="bg-gray-50 border rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900">{engagement.title}</h3>
                    <p className="text-gray-600">{engagement.type} • {engagement.location}</p>
                  </div>
                  <span className="text-sm text-gray-600 font-mono bg-white px-2 py-1 rounded">
                    {engagement.date}
                  </span>
                </div>
                <h4 className="font-medium text-blue-600 mb-3">{engagement.topic}</h4>
                <p className="text-gray-700 leading-relaxed">{engagement.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research Collaboration Opportunities */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8 border-b border-gray-200 pb-2">Collaboration Opportunities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {researchCollaborations.map((collab, index) => (
              <div key={index} className="bg-white border-2 border-dashed border-gray-200 rounded-lg p-6 hover:border-blue-200 transition-colors">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{collab.title}</h3>
                <div className="text-sm text-green-600 font-medium mb-3">{collab.status}</div>
                <p className="text-sm text-gray-600 mb-3 italic">{collab.focus}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{collab.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact & Connect */}
        <section className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Let's Connect</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            I'm always excited to discuss research opportunities, collaborations, and the future of AI technology. 
            Whether you're interested in multilingual AI systems, edge deployment optimization, or the intersection 
            of research and real-world impact, I'd love to connect.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Research Interests for Collaboration:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Audio AI and speech processing research</li>
                <li>• Conversational AI system architectures</li>
                <li>• Edge AI optimization and democratization</li>
                <li>• Multilingual AI for underrepresented languages</li>
                <li>• Ethical AI development and deployment</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Open to:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Research collaborations and joint publications</li>
                <li>• PhD program discussions and applications</li>
                <li>• Speaking at conferences and workshops</li>
                <li>• Mentorship and knowledge sharing</li>
                <li>• Open source project contributions</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
