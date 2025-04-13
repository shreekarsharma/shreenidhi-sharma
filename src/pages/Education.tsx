
import { Calendar, Award, Book, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Education & Qualifications</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A strong educational foundation in business and electrical engineering with prestigious scholarships and international experience.
            </p>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Quantic School of Business and Technology */}
          <div className="timeline-container">
            <div className="timeline-dot"></div>
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/93e5de39-c295-44bc-bbb2-b3415506e271.png" 
                  alt="Quantic School of Business and Technology Logo" 
                  className="w-12 h-12 mr-4 object-contain bg-white p-2 rounded-md"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Quantic School of Business and Technology</h3>
                  <p className="text-lg text-energy-600 dark:text-energy-400">Executive MBA, Business Administration and Management, General</p>
                </div>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Oct 2020 - Dec 2021</span>
              </div>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Executive Master of Business Administration from Quantic School of Business and Technology
                </p>
                <p>
                  Quantic School of Business and Technology issues digital credentials with Parchment. Click to verify my Diploma and see more about my accomplishment.
                </p>
              </div>
              <div className="mt-6">
                <img 
                  src="/lovable-uploads/56369c0a-d23a-4347-9cdd-006a3b8b59d6.png" 
                  alt="Quantic School of Business and Technology Diploma" 
                  className="max-w-sm rounded-lg border border-gray-200 dark:border-gray-700 shadow-md"
                />
              </div>
            </div>
          </div>

          {/* University of Nottingham */}
          <div className="timeline-container">
            <div className="timeline-dot"></div>
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <img 
                  src="https://via.placeholder.com/48" 
                  alt="University of Nottingham Logo" 
                  className="w-12 h-12 mr-4 object-contain bg-white p-2 rounded-md"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">University of Nottingham</h3>
                  <p className="text-lg text-energy-600 dark:text-energy-400">Master of Science - MS, Electrical and Electronics Engineering</p>
                </div>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Aug 2012 - Jul 2014</span>
              </div>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Two Years Full time Masters Course (EMMC) on Sustainable Transportation and Electrical Power Systems (STEPS). The European Union awarded me a full scholarship. It was a travelling course, and every semester was in a different country, namely the UK, Spain, and Portugal. This experience provided the necessary technical knowledge and helped me acquire the soft skills of cordially working with people of different backgrounds and cultures. My master's Thesis was on Control of Voltage Source Inverters for Power flow between Wind Turbines.
                </p>
              </div>
              <div className="mt-6">
                <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">EMMC STEPS Degree</p>
                <img 
                  src="/lovable-uploads/d871c2c9-c2ad-427d-9141-2e7dd928d3eb.png" 
                  alt="University of Nottingham Degree" 
                  className="max-w-sm rounded-lg border border-gray-200 dark:border-gray-700 shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Universidad de Oviedo */}
          <div className="timeline-container">
            <div className="timeline-dot"></div>
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <img 
                  src="https://via.placeholder.com/48" 
                  alt="Universidad de Oviedo Logo" 
                  className="w-12 h-12 mr-4 object-contain bg-white p-2 rounded-md"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Universidad de Oviedo</h3>
                  <p className="text-lg text-energy-600 dark:text-energy-400">Master of Science (MS), Electrical Power System</p>
                </div>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="h-5 w-5 mr-2" />
                <span>2012 - 2014</span>
              </div>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Part of the Erasmus Mundus Joint Master Degree program, studying at Universidad de Oviedo in Spain.
                </p>
              </div>
            </div>
          </div>

          {/* Instituto Superior de Engenharia de Coimbra */}
          <div className="timeline-container">
            <div className="timeline-dot"></div>
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <img 
                  src="https://via.placeholder.com/48" 
                  alt="Instituto Superior de Engenharia de Coimbra Logo" 
                  className="w-12 h-12 mr-4 object-contain bg-white p-2 rounded-md"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Instituto Superior de Engenharia de Coimbra</h3>
                  <p className="text-lg text-energy-600 dark:text-energy-400">Masters, Electrical and Electronics Engineering</p>
                </div>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Aug 2012 - Aug 2013</span>
              </div>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Part of the Erasmus Mundus Joint Master Degree program, studying at Instituto Superior de Engenharia de Coimbra in Portugal.
                </p>
              </div>
            </div>
          </div>

          {/* National Institute of Technology Calicut */}
          <div className="timeline-container">
            <div className="timeline-dot"></div>
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="https://via.placeholder.com/48" 
                  alt="National Institute of Technology Calicut Logo" 
                  className="w-12 h-12 mr-4 object-contain bg-white p-2 rounded-md"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">National Institute of Technology Calicut</h3>
                  <p className="text-lg text-energy-600 dark:text-energy-400">Bachelor of Technology (B.Tech.), Electrical and Electronics Engineering</p>
                </div>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="h-5 w-5 mr-2" />
                <span>2005 - 2009</span>
              </div>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Completed Bachelor's degree in Electrical and Electronics Engineering, building a strong foundation in electrical engineering principles and practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licenses & Certifications */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <h2 className="section-heading">Licenses & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/4c2e011b-872b-41ba-a0cf-499aa361fe7c.png" 
                alt="RENAC Logo" 
                className="w-12 h-12 mr-4 object-contain bg-white p-2 rounded-md"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">'Green Hydrogen Specialist- Project Development and Economics' - Scholarship Programme</h3>
                <p className="text-energy-600 dark:text-energy-400">Renewables Academy (RENAC)</p>
              </div>
            </div>
            <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
              <Calendar className="h-5 w-5 mr-2" />
              <span>Issued Dec 2023</span>
            </div>
            <div className="flex flex-wrap items-center mt-4 space-x-2">
              <span className="text-sm bg-energy-100 dark:bg-energy-900 text-energy-800 dark:text-energy-200 px-3 py-1 rounded-full">Green Hydrogen</span>
              <span className="text-sm bg-energy-100 dark:bg-energy-900 text-energy-800 dark:text-energy-200 px-3 py-1 rounded-full">Project Development</span>
            </div>
            <div className="mt-6">
              <img 
                src="/lovable-uploads/a3c654f1-abe1-40e5-bef7-d604ec55084e.png" 
                alt="Green Hydrogen Specialist Certificate" 
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700 shadow-md"
              />
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img 
                src="https://via.placeholder.com/48" 
                alt="Harvard Business Publishing Logo" 
                className="w-12 h-12 mr-4 object-contain bg-white p-2 rounded-md"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Harvard Manage Mentor</h3>
                <p className="text-energy-600 dark:text-energy-400">Harvard Business Publishing</p>
              </div>
            </div>
            <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
              <Calendar className="h-5 w-5 mr-2" />
              <span>Issued Apr 2018</span>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Completed the Harvard Manage Mentor program, developing advanced management and leadership skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Honors & Awards */}
      <section className="section-container">
        <h2 className="section-heading">Honors & Awards</h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800">
            <div className="flex items-center mb-4">
              <Award className="h-8 w-8 text-energy-600 mr-3" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Erasmus Mundus Scholarship (STEPS Program)</h3>
                <p className="text-gray-600 dark:text-gray-400">Issued by European Union (upon the recommendation of Oviedo) - May 2012</p>
              </div>
            </div>
            <div className="prose dark:prose-invert max-w-none mb-6">
              <p>
                Awarded European Union's Erasmus Mundus Full Scholarship Worth €48,000; only one candidate from India was selected.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img 
                src="/lovable-uploads/d871c2c9-c2ad-427d-9141-2e7dd928d3eb.png" 
                alt="Erasmus Mundus Joint Master Degree" 
                className="rounded-lg border border-gray-200 dark:border-gray-700 shadow-md"
              />
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">EMMC STEPS-EM Scholarship Award Letter</p>
                <img 
                  src="https://via.placeholder.com/300x200" 
                  alt="Scholarship Award Letter" 
                  className="rounded-lg border border-gray-200 dark:border-gray-700 shadow-md"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800">
            <div className="flex items-center mb-4">
              <Award className="h-8 w-8 text-energy-600 mr-3" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Gold Medalist (Electrical)</h3>
                <p className="text-gray-600 dark:text-gray-400">Issued by NTPC - Jan 2011</p>
              </div>
            </div>
            <div className="prose dark:prose-invert max-w-none mb-6">
              <p>
                Awarded Gold Medal by The Honourable Power Minister, Government of India, for outstanding achievement as Best Electrical Trainee 2009, in NTPC's Executive Training batch of 300
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">Gold medal NTPC.JPG</p>
                <img 
                  src="/lovable-uploads/a4997305-6397-45ec-abcc-9e4ae7be9647.png" 
                  alt="Gold Medal Ceremony" 
                  className="rounded-lg border border-gray-200 dark:border-gray-700 shadow-md"
                />
              </div>
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">Hon'ble Power Minister Award Ceremony</p>
                <img 
                  src="/lovable-uploads/f9c54ab4-99ea-432e-a671-f9786d3d303f.png" 
                  alt="Award Ceremony with Power Minister" 
                  className="rounded-lg border border-gray-200 dark:border-gray-700 shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
