import { FaFlask, FaHandshake, FaEnvelope, FaEye } from 'react-icons/fa'

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
        <section className="bg-gray-50 rounded-lg p-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-gray-300 mx-auto mb-6 rounded-full"></div>
            
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              I'm always excited to discuss research opportunities, collaborations, and the future of AI technology. 
              Whether you're interested in <span className="font-medium text-gray-800">multilingual AI systems</span>, 
              <span className="font-medium text-gray-800"> edge deployment optimization</span>, or the intersection 
              of research and real-world impact, I'd love to connect.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <FaFlask className="text-white text-lg" />
                  </div>
                </div>
                <h3 className="font-medium text-gray-900 mb-4 text-lg">Research Interests for Collaboration</h3>
                <div className="space-y-3">
                  <div className="flex items-start text-left">
                    <span className="text-blue-600 mr-3 mt-1.5 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                    <span className="text-gray-700">Audio AI and speech processing research</span>
                  </div>
                  <div className="flex items-start text-left">
                    <span className="text-blue-600 mr-3 mt-1.5 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                    <span className="text-gray-700">Conversational AI system architectures</span>
                  </div>
                  <div className="flex items-start text-left">
                    <span className="text-blue-600 mr-3 mt-1.5 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                    <span className="text-gray-700">Edge AI optimization and democratization</span>
                  </div>
                  <div className="flex items-start text-left">
                    <span className="text-blue-600 mr-3 mt-1.5 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                    <span className="text-gray-700">Multilingual AI for underrepresented languages</span>
                  </div>
                  <div className="flex items-start text-left">
                    <span className="text-blue-600 mr-3 mt-1.5 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                    <span className="text-gray-700">Ethical AI development and deployment</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                    <FaHandshake className="text-white text-lg" />
                  </div>
                </div>
                <h3 className="font-medium text-gray-900 mb-4 text-lg">Open to</h3>
                <div className="space-y-3">
                  <div className="flex items-start text-left">
                    <span className="text-gray-600 mr-3 mt-1.5 w-2 h-2 rounded-full bg-gray-600 flex-shrink-0"></span>
                    <span className="text-gray-700">Research collaborations and joint publications</span>
                  </div>
                  <div className="flex items-start text-left">
                    <span className="text-gray-600 mr-3 mt-1.5 w-2 h-2 rounded-full bg-gray-600 flex-shrink-0"></span>
                    <span className="text-gray-700">PhD program discussions and applications</span>
                  </div>
                  <div className="flex items-start text-left">
                    <span className="text-gray-600 mr-3 mt-1.5 w-2 h-2 rounded-full bg-gray-600 flex-shrink-0"></span>
                    <span className="text-gray-700">Speaking at conferences and workshops</span>
                  </div>
                  <div className="flex items-start text-left">
                    <span className="text-gray-600 mr-3 mt-1.5 w-2 h-2 rounded-full bg-gray-600 flex-shrink-0"></span>
                    <span className="text-gray-700">Mentorship and knowledge sharing</span>
                  </div>
                  <div className="flex items-start text-left">
                    <span className="text-gray-600 mr-3 mt-1.5 w-2 h-2 rounded-full bg-gray-600 flex-shrink-0"></span>
                    <span className="text-gray-700">Open source project contributions</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:maroa@vociply.com" 
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                <FaEnvelope className="mr-2" />
                Get in Touch
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-300"
              >
                <FaEye className="mr-2" />
                View Full Contact Info
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
