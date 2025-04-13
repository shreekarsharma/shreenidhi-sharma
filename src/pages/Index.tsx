
import { ArrowRight, Award, Briefcase, GraduationCap, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-white to-sky-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/a3c654f1-abe1-40e5-bef7-d604ec55084e.png')] opacity-10 bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6">
                Shreenidhi Sharma
              </h1>
              <h2 className="text-xl md:text-2xl text-energy-700 dark:text-energy-400 font-medium mb-6">
                Senior Manager @ NTPC Green Energy Limited
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
                Leading initiatives in renewable energy integration with expertise in project planning and 
                engineering for solar photovoltaic systems and electric vehicle charging stations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/about" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-energy-600 hover:bg-energy-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-energy-500 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-6 py-3 border border-energy-600 text-base font-medium rounded-md text-energy-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-energy-500 transition-colors dark:bg-transparent dark:text-energy-400 dark:border-energy-400 dark:hover:bg-gray-800"
                >
                  Contact Me
                </Link>
              </div>
              <div className="mt-8 flex items-center text-gray-500 dark:text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Gandhinagar, Gujarat, India</span>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="relative">
                <div className="absolute inset-0 bg-energy-600 rounded-full blur-2xl opacity-20 transform translate-x-10 translate-y-10"></div>
                <img 
                  src="/lovable-uploads/bbc4b6a9-6d39-42bf-9b0a-1e4b662565b4.png" 
                  alt="Shreenidhi Sharma" 
                  className="relative z-10 w-full max-w-md mx-auto rounded-xl shadow-xl object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-container bg-white dark:bg-gray-900">
        <h2 className="section-heading">About Me</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            As Senior Manager at NTPC Green Energy Limited, I lead initiatives that define the technical landscape for renewable 
            energy integration. My expertise in project planning and engineering is central to our organization's capacity to launch 
            progressive solar photovoltaic systems and electric vehicle charging stations.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            The drive to deliver sustainable and advanced green energy solutions is embodied in our recent projects, which are a 
            testament to our team's collaborative spirit. Our work not only aligns with India's clean energy ambitions but also sets a 
            benchmark in the renewable sector by marrying technical excellence with environmental stewardship.
          </p>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <h2 className="section-heading">Key Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md card-hover">
            <div className="w-12 h-12 flex items-center justify-center bg-energy-100 dark:bg-energy-900 text-energy-600 dark:text-energy-400 rounded-lg mb-4">
              <Briefcase className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Professional Experience</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Over 10 years of experience in the energy sector with progressive roles at NTPC Limited.
            </p>
            <Link to="/experience" className="text-energy-600 dark:text-energy-400 hover:text-energy-700 dark:hover:text-energy-300 font-medium inline-flex items-center">
              View Experience <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md card-hover">
            <div className="w-12 h-12 flex items-center justify-center bg-energy-100 dark:bg-energy-900 text-energy-600 dark:text-energy-400 rounded-lg mb-4">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Education</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Executive MBA from Quantic School of Business and MS in Electrical Power Systems with EU Scholarship.
            </p>
            <Link to="/education" className="text-energy-600 dark:text-energy-400 hover:text-energy-700 dark:hover:text-energy-300 font-medium inline-flex items-center">
              View Education <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md card-hover">
            <div className="w-12 h-12 flex items-center justify-center bg-energy-100 dark:bg-energy-900 text-energy-600 dark:text-energy-400 rounded-lg mb-4">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Achievements</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              EU Scholarship recipient and Gold Medalist (Electrical) awarded by the Honorable Power Minister of India.
            </p>
            <Link to="/achievements" className="text-energy-600 dark:text-energy-400 hover:text-energy-700 dark:hover:text-energy-300 font-medium inline-flex items-center">
              View Achievements <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-container bg-white dark:bg-gray-900">
        <h2 className="section-heading">Skills & Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Green Hydrogen", endorsements: 12 },
            { name: "Project Development", endorsements: 15 },
            { name: "Electrical Engineering", endorsements: 12 },
            { name: "Engineering", endorsements: 18 },
            { name: "Power Generation", endorsements: 12 },
            { name: "Transformer", endorsements: 6 },
            { name: "Commissioning", endorsements: 5 },
            { name: "Solar Energy", endorsements: 14 },
            { name: "Renewable Energy", endorsements: 16 }
          ].map((skill, index) => (
            <div key={index} className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <Star className="h-5 w-5 text-energy-500" />
              <span className="font-medium text-gray-800 dark:text-white">{skill.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">({skill.endorsements})</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-energy-600 dark:bg-energy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in collaborating?</h2>
            <p className="text-lg text-energy-100 mb-8 max-w-2xl mx-auto">
              Whether you have a project in mind or just want to connect, I'm always open to discussing new opportunities in the renewable energy sector.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-energy-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-energy-500 transition-colors"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
