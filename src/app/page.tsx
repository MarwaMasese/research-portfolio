import Image from 'next/image'
import { FaMusic, FaRobot, FaBolt, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto bg-gray-200 rounded-full mb-6 flex items-center justify-center overflow-hidden">
                <Image 
                  src="/profile.jpg" 
                  alt="Cornelius Maroa" 
                  width={192} 
                  height={192}
                  className="rounded-full object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="text-center space-y-4">
                <h1 className="text-xl sm:text-2xl font-light text-gray-900">Cornelius Maroa</h1>
                <p className="text-gray-600 text-sm sm:text-base">AI Researcher & CTO</p>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>Vociply LTD</p>
                  <p className="break-all sm:break-normal">maroa@vociply.com</p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 pt-4">
                  <a href="https://www.linkedin.com/in/marwamasese/" className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1 transition-colors">
                    <FaLinkedin /> LinkedIn
                  </a>
                  <a href="https://github.com/MarwaMasese" className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1 transition-colors">
                    <FaGithub /> GitHub
                  </a>
                  <a href="mailto:maroa@vociply.com" className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1 transition-colors">
                    <FaEnvelope /> Email
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12 lg:space-y-16">
            {/* About Section */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-6 sm:mb-8 border-b border-gray-200 pb-3">About Me</h2>
              <div className="prose prose-base sm:prose-lg text-gray-700 leading-relaxed max-w-none">
                <p className="mb-4 sm:mb-6 text-base sm:text-lg">
                  I&apos;m an aspiring AI researcher passionate about advancing <strong>Audio AI</strong> and{' '}
                  <strong>Conversational Systems</strong> with a focus on multilingual applications and edge deployment. 
                  With 5 years of industry experience bridging research and production, I&apos;m dedicated to developing 
                  AI technologies that create meaningful impact, particularly for underserved communities and 
                  low-resource languages.
                </p>
                <p className="text-base sm:text-lg">
                  Currently serving as CTO at Vociply, I lead research initiatives in real-time voice processing 
                  systems while pursuing independent research in neural network optimization and multilingual AI architectures.
                </p>
              </div>
            </section>

            {/* Research Focus Areas */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-6 sm:mb-8 border-b border-gray-200 pb-3">Research Focus Areas</h2>
              <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4 flex items-center flex-wrap">
                    <FaMusic className="text-xl sm:text-2xl mr-2 sm:mr-3 text-blue-600" /> 
                    <span>Audio AI Models</span>
                  </h3>
                  <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    Developing deep learning architectures that understand and generate human speech across multiple 
                    languages, with particular emphasis on African languages and low-resource scenarios.
                  </p>
                  <div className="ml-4 sm:ml-8">
                    <p className="font-medium text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Current Research:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
                      <li>Multilingual voice processing pipelines</li>
                      <li>Speech synthesis for underrepresented languages</li>
                      <li>Real-time audio-to-audio transformation systems</li>
                      <li>Data augmentation techniques for speech data scarcity</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4 flex items-center flex-wrap">
                    <FaRobot className="text-xl sm:text-2xl mr-2 sm:mr-3 text-blue-600" /> 
                    <span>Conversational AI</span>
                  </h3>
                  <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    Exploring the intersection of large language models and voice interfaces to create more natural, 
                    efficient human-AI interactions.
                  </p>
                  <div className="ml-4 sm:ml-8">
                    <p className="font-medium text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Current Research:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
                      <li>Voice-to-voice agentic systems</li>
                      <li>LLM optimization for conversational applications</li>
                      <li>Prompt engineering for multilingual contexts</li>
                      <li>Real-time response generation architectures</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4 flex items-center flex-wrap">
                    <FaBolt className="text-xl sm:text-2xl mr-2 sm:mr-3 text-blue-600" /> 
                    <span>Edge AI Optimization</span>
                  </h3>
                  <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    Researching efficient neural network architectures that bring advanced AI capabilities to 
                    resource-constrained environments.
                  </p>
                  <div className="ml-4 sm:ml-8">
                    <p className="font-medium text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Current Research:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
                      <li>Hypernetwork optimization techniques</li>
                      <li>Ternary neural network architectures</li>
                      <li>Model compression for edge deployment</li>
                      <li>Democratization of AI technology access</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Quote Section */}
            <section className="bg-blue-50 p-4 sm:p-6 lg:p-8 rounded-lg border-l-4 border-blue-200">
              <blockquote className="text-base sm:text-lg italic text-gray-700 text-center leading-relaxed">
                &quot;Building bridges between cutting-edge AI research and meaningful real-world applications, 
                with a commitment to democratizing access to advanced AI technologies.&quot;
              </blockquote>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
