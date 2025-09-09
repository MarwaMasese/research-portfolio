export default function Updates() {
  const experiences = [
    {
      period: "2024-Present",
      role: "Chief Technology Officer",
      company: "Vociply LTD",
      type: "Professional Research Leadership",
      description: [
        "Leading technical strategy for AI-powered voice technology",
        "Directing research initiatives in multilingual voice processing",
        "Establishing engineering best practices for research-to-production pipelines",
        "Mentoring team members on advanced ML development"
      ]
    },
    {
      period: "2025",
      role: "Publication Accepted",
      company: "Deep Learning Indaba 2025",
      type: "Research Achievement",
      description: [
        "Vociply: A Real-Time Voice-to-Voice Agentic System for African Business Automation Using LLMs",
        "First-author publication on multilingual voice AI systems",
        "Novel contributions to real-time speech processing architecture"
      ]
    },
    {
      period: "2022-2024",
      role: "Software Engineer",
      company: "Intelliverse AI",
      type: "Applied Research Engineering",
      description: [
        "Independent research in transformer architectures and prompt engineering",
        "Designed experiments achieving 30% performance improvements",
        "Developed scalable AI services with 99.9% uptime",
        "Established technical documentation standards for reproducibility"
      ]
    },
    {
      period: "2024",
      role: "ARM Ambassador Program",
      company: "ARM Holdings",
      type: "Community Leadership",
      description: [
        "Developed comprehensive AI learning resources reaching 1000+ learners",
        "Created workshop materials bridging academic ML research with practical implementation",
        "Established mentorship programs for emerging researchers",
        "Contributed to technical documentation and educational guides"
      ]
    },
    {
      period: "2020-2021",
      role: "Data Scientist",
      company: "Once Inc.",
      type: "Research Foundation",
      description: [
        "Applied research in agricultural data processing and predictive analytics",
        "Implemented rigorous experimental protocols for model validation",
        "Statistical analysis and optimization of machine learning pipelines",
        "Proof-of-concept development connecting research insights to business value"
      ]
    },
    {
      period: "In Progress",
      role: "Research Draft",
      company: "Independent Research",
      type: "Academic Contribution",
      description: [
        "Hypernetwork Optimization of Ternary Neural Networks for Edge AI Deployment",
        "Target submission to top-tier AI conference",
        "Focus on democratizing AI access in resource-constrained environments"
      ]
    }
  ];

  const milestones = [
    {
      date: "2025",
      title: "Research Publication Accepted",
      highlight: "Deep Learning Indaba 2025",
      description: "First-author paper on voice-to-voice agentic systems"
    },
    {
      date: "2024",
      title: "Promoted to CTO at",
      highlight: "Vociply LTD",
      description: "Leading technical research and engineering teams"
    },
    {
      date: "2024",
      title: "Joined ARM Ambassador Program",
      description: "Contributing to AI education and community building"
    },
    {
      date: "2022",
      title: "Started research role at",
      highlight: "Intelliverse AI",
      description: "Focus on transformer architectures and ML engineering"
    },
    {
      date: "2020",
      title: "Began industry career as Data Scientist",
      description: "Transitioning from research to applied ML development"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-8 sm:mb-12 text-center">Professional Journey</h1>
        
        {/* Industry & Research Experience */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-6 sm:mb-8 border-b border-gray-200 pb-2">Industry & Research Experience</h2>
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 border-l-4 border-blue-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2 sm:gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-medium text-gray-900">{exp.role}</h3>
                    <p className="text-base sm:text-lg text-blue-600 font-medium">{exp.company}</p>
                    <p className="text-xs sm:text-sm text-gray-500 italic">{exp.type}</p>
                  </div>
                  <div className="sm:text-right">
                    <span className="text-xs sm:text-sm text-gray-600 font-mono bg-gray-200 px-2 py-1 rounded inline-block">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Key Milestones */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-6 sm:mb-8 border-b border-gray-200 pb-2">Key Milestones</h2>
          <div className="space-y-4 sm:space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                <div className="w-full sm:w-20 sm:flex-shrink-0">
                  <span className="text-gray-600 font-mono text-xs sm:text-sm bg-blue-50 px-2 py-1 rounded inline-block">
                    {milestone.date}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
                    {milestone.title}
                    {milestone.highlight && (
                      <>
                        {' '}
                        <span className="text-blue-600 font-medium">{milestone.highlight}</span>
                      </>
                    )}
                    {milestone.description && (
                      <>
                        {' - '}
                        <span className="text-gray-600">{milestone.description}</span>
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Expertise */}
        <section>
          <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-6 sm:mb-8 border-b border-gray-200 pb-2">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white border rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4 flex items-center">
                <span className="text-xl sm:text-2xl mr-2 sm:mr-3">🧠</span>
                <span>Core Research Skills</span>
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li><strong>Deep Learning:</strong> PyTorch, TensorFlow, Hugging Face Transformers</li>
                <li><strong>Audio Processing:</strong> Speech recognition, synthesis, real-time processing</li>
                <li><strong>Large Language Models:</strong> Fine-tuning, optimization, deployment</li>
                <li><strong>Research Methodology:</strong> Experimental design, statistical analysis</li>
              </ul>
            </div>

            <div className="bg-white border rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4 flex items-center">
                <span className="text-xl sm:text-2xl mr-2 sm:mr-3">⚙️</span>
                <span>Engineering & Deployment</span>
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li><strong>Cloud Platforms:</strong> AWS (SageMaker, Lambda), Google Cloud</li>
                <li><strong>DevOps:</strong> Docker, Kubernetes, CI/CD pipelines</li>
                <li><strong>Production Systems:</strong> FastAPI, scalable ML infrastructure</li>
                <li><strong>Collaboration:</strong> Git, research documentation, knowledge sharing</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
