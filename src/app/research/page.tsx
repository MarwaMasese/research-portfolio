export default function Research() {
  const featuredProjects = [
    {
      title: "Vociply: Real-Time Voice AI System",
      status: "Active Research & Development",
      publication: "Deep Learning Indaba 2025",
      description: "A groundbreaking voice-to-voice agentic system that combines large language models with real-time speech processing to automate business conversations in multiple African languages.",
      contributions: [
        "Novel architecture bridging LLMs with speech processing",
        "Creative solutions for multilingual data scarcity",
        "Real-time optimization for voice-based AI agents",
        "Production-scale deployment of research prototypes"
      ],
      highlights: [
        "End-to-end voice processing pipeline",
        "Multilingual natural language understanding",
        "Real-time response generation (<200ms latency)",
        "Scalable cloud infrastructure"
      ]
    },
    {
      title: "Hypernetwork Optimization Framework",
      status: "Research Draft",
      publication: "Target: Top-tier AI Conference",
      description: "Investigating how hypernetworks can optimize ternary neural networks for efficient edge AI deployment, addressing the critical need for AI democratization in resource-constrained environments.",
      contributions: [
        "Can hypernetworks improve ternary network training efficiency?",
        "What are the optimal architectures for edge AI deployment?",
        "How can we balance accuracy with computational constraints?"
      ],
      highlights: [
        "More efficient AI models for mobile and IoT devices",
        "Reduced computational requirements for AI applications",
        "Broader accessibility of advanced AI technologies"
      ]
    },
    {
      title: "Multilingual Voice AI Research",
      status: "Ongoing",
      publication: "Collaboration: Vociply Research Lab",
      description: "Pioneering research in voice AI systems that work effectively across African languages, addressing fundamental challenges in low-resource language processing.",
      contributions: [
        "Data augmentation for speech data scarcity",
        "Transfer learning across related languages",
        "Cultural and linguistic adaptation in AI systems",
        "Community-driven dataset development"
      ]
    }
  ];

  const publications = [
    {
      year: "2025",
      title: "Vociply: A Real-Time Voice-to-Voice Agentic System for African Business Automation Using LLMs",
      authors: "Maroa, C. et al.",
      venue: "Deep Learning Indaba 2025",
      status: "Accepted"
    },
    {
      year: "In Progress",
      title: "Hypernetwork Optimization of Ternary Neural Networks for Edge AI Deployment",
      authors: "Maroa, C. et al.",
      venue: "Research Draft",
      status: ""
    }
  ];

  const openSource = [
    {
      title: "Edge AI Optimization Tools",
      repository: "Available on GitHub",
      community: "500+ developers",
      description: "Open-source utilities for deploying efficient ML models on ARM-based devices, democratizing AI deployment capabilities.",
      features: [
        "Model compression utilities",
        "Performance benchmarking tools",
        "Deployment automation scripts",
        "Educational resources and tutorials"
      ]
    },
    {
      title: "AI Learning Resources",
      repository: "ARM Ambassador Program",
      community: "1000+ learners",
      description: "Comprehensive learning paths and documentation bridging academic ML research with practical implementation.",
      features: [
        "Workshop materials and tutorials",
        "Code examples and best practices",
        "Mentorship programs for emerging researchers",
        "Technical documentation and guides"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-light text-gray-900 mb-12 text-center">Research</h1>
        
        {/* Featured Research Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8 border-b border-gray-200 pb-2">Featured Research Projects</h2>
          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-gray-50 border rounded-lg p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-medium text-gray-900 flex items-center">
                    <span className="mr-3">🚀</span>
                    {project.title}
                  </h3>
                  <div className="text-right text-sm">
                    <div className="text-green-600 font-medium">{project.status}</div>
                    <div className="text-gray-500">{project.publication}</div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Research Contributions:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {project.contributions.map((contribution, idx) => (
                        <li key={idx}>{contribution}</li>
                      ))}
                    </ul>
                  </div>

                  {project.highlights && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Technical Highlights:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8 border-b border-gray-200 pb-2">Publications & Academic Output</h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="border-l-4 border-blue-200 pl-6 py-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-medium text-gray-900">{pub.title}</h3>
                  <div className="text-sm text-gray-500">{pub.year}</div>
                </div>
                <p className="text-gray-600 mb-1">{pub.authors}</p>
                <p className="text-blue-600 text-sm">{pub.venue} {pub.status && `[${pub.status}]`}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-3">Research Pipeline</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Edge AI democratization tools and methodologies</li>
              <li>Multilingual conversational AI architectures</li>
              <li>Audio processing optimization techniques</li>
              <li>Human-AI interaction paradigm studies</li>
            </ul>
          </div>
        </section>

        {/* Open Source Contributions */}
        <section>
          <h2 className="text-2xl font-light text-gray-900 mb-8 border-b border-gray-200 pb-2">Open Source Contributions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {openSource.map((project, index) => (
              <div key={index} className="bg-white border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-2 flex items-center">
                  <span className="mr-2">🛠️</span>
                  {project.title}
                </h3>
                <div className="text-sm text-gray-500 mb-4">
                  {project.repository} | {project.community}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
