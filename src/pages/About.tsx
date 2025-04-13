
import { Briefcase, Award, GraduationCap, Users, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A passionate energy professional with a focus on sustainability and renewable energy solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="/public/lovable-uploads/bbc4b6a9-6d39-42bf-9b0a-1e4b662565b4.png" 
                alt="Shreenidhi Sharma" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Shreenidhi Sharma</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              As Senior Manager at NTPC Green Energy Limited, I lead initiatives that define the technical landscape for renewable 
              energy integration. My expertise in project planning and engineering is central to our organization's capacity to launch 
              progressive solar photovoltaic systems and electric vehicle charging stations.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The drive to deliver sustainable and advanced green energy solutions is embodied in our recent projects, which are a 
              testament to our team's collaborative spirit. Our work not only aligns with India's clean energy ambitions but also sets a 
              benchmark in the renewable sector by marrying technical excellence with environmental stewardship.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              To stand out from the competition, be prepared to be unique. In renewables, the canvas is changing rapidly. One needs to 
              be ever-dynamic and skillful to constantly up the game.
            </p>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <h2 className="section-heading">Career Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-energy-100 dark:bg-energy-900 text-energy-600 dark:text-energy-400 rounded-full mb-4">
              <Briefcase className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">10+ Years</h3>
            <p className="text-gray-600 dark:text-gray-400">Professional Experience in Energy Sector</p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-energy-100 dark:bg-energy-900 text-energy-600 dark:text-energy-400 rounded-full mb-4">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">NTPC Gold Medalist</h3>
            <p className="text-gray-600 dark:text-gray-400">Recognized for Outstanding Achievement</p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-energy-100 dark:bg-energy-900 text-energy-600 dark:text-energy-400 rounded-full mb-4">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">EU Scholarship</h3>
            <p className="text-gray-600 dark:text-gray-400">Erasmus Mundus Master's Program</p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-energy-100 dark:bg-energy-900 text-energy-600 dark:text-energy-400 rounded-full mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">3,000+ Followers</h3>
            <p className="text-gray-600 dark:text-gray-400">Professional Network on LinkedIn</p>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-container">
        <h2 className="section-heading">Areas of Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Star className="h-5 w-5 text-energy-600 mr-2" />
              Renewable Energy Integration
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Leading initiatives to integrate renewable energy sources into existing power infrastructure, with a focus on solar photovoltaic systems and optimizing energy yield.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Star className="h-5 w-5 text-energy-600 mr-2" />
              Project Planning & Engineering
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Developing comprehensive technical requirements for PV modules, DC cables, and other components while ensuring compliance with industry standards and specifications.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Star className="h-5 w-5 text-energy-600 mr-2" />
              Green Hydrogen Specialization
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Expertise in green hydrogen project development and economics, with specialized training in hydrogen production by electrolysis and green ammonia production.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Star className="h-5 w-5 text-energy-600 mr-2" />
              EV Charging Infrastructure
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Formulating specifications for electric vehicle charging stations, contributing to India's sustainable transportation infrastructure development.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-energy-600 dark:bg-energy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">My Professional Philosophy</h2>
            <p className="text-xl mb-8">
              "To stand out from the competition, be prepared to be unique. In renewables, the canvas is changing rapidly. One needs to be ever-dynamic and skillful to constantly up the game."
            </p>
            <p className="italic">- Shreenidhi Sharma</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
