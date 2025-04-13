
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Professional Experience</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A decade of progressive roles in the energy sector, specializing in renewable energy integration and project development.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* NTPC Green Energy Limited */}
          <div className="timeline-container">
            <div className="timeline-dot"></div>
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <img 
                  src="/public/lovable-uploads/760f1986-af34-43e7-b26d-a23deb139f62.png" 
                  alt="NTPC Logo" 
                  className="w-12 h-12 mr-4 object-contain bg-white p-2 rounded-md"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Senior Manager</h3>
                  <p className="text-lg text-energy-600 dark:text-energy-400">NTPC Green Energy Limited</p>
                </div>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Mar 2023 - Present (2 yrs 2 mos) | Gandhinagar, Gujarat, India</span>
              </div>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  As Senior Manager at NTPC Green Energy Limited, I lead initiatives that define the technical landscape for renewable 
                  energy integration. My expertise in project planning and engineering is central to our organization's capacity to launch 
                  progressive solar photovoltaic systems and electric vehicle charging stations.
                </p>
                <p>
                  The drive to deliver sustainable and advanced green energy solutions is embodied in our recent projects, which are a 
                  testament to our team's collaborative spirit. Our work not only aligns with India's clean energy ambitions but also sets a 
                  benchmark in the renewable sector by marrying technical excellence with environmental stewardship.
                </p>
              </div>
            </div>
          </div>

          {/* NTPC Limited - Senior Manager */}
          <div className="timeline-container">
            <div className="timeline-dot"></div>
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <img 
                  src="/public/lovable-uploads/760f1986-af34-43e7-b26d-a23deb139f62.png" 
                  alt="NTPC Logo" 
                  className="w-12 h-12 mr-4 object-contain bg-white p-2 rounded-md"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Senior Manager</h3>
                  <p className="text-lg text-energy-600 dark:text-energy-400">NTPC Limited</p>
                </div>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Mar 2022 - Feb 2023 (1 yr) | Noida Area, India</span>
              </div>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Continued to advance sustainable energy initiatives at NTPC Limited, focusing on expanding renewable energy capabilities and integration into the national grid.
                </p>
              </div>
            </div>
          </div>

          {/* NTPC Limited - Manager */}
          <div className="timeline-container">
            <div className="timeline-dot"></div>
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <img 
                  src="/public/lovable-uploads/760f1986-af34-43e7-b26d-a23deb139f62.png" 
                  alt="NTPC Logo" 
                  className="w-12 h-12 mr-4 object-contain bg-white p-2 rounded-md"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Manager</h3>
                  <p className="text-lg text-energy-600 dark:text-energy-400">NTPC Limited</p>
                </div>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Mar 2018 - Feb 2022 (4 yrs) | Noida Area, India</span>
              </div>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  In my role as Manager in Solar Engineering Team of NTPC, I was responsible for framing the Technical Requirements (of PV Modules, DC Cables etc), Solar Assessment and Energy Yield Prediction, Providing Technical Support to our already running Solar PV plants, Techno-Commercial Analysis and continuous upgradation of Technical Specifications inline with the ever dynamic Solar market in India.
                </p>
                <p>
                  Recently, I was given the added responsibility of formulating the Specifications for EV Charging Stations which NTPC would be installing for charging of Electric Buses.
                </p>
              </div>
            </div>
          </div>

          {/* NTPC Limited - Deputy Manager */}
          <div className="timeline-container">
            <div className="timeline-dot"></div>
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <img 
                  src="/public/lovable-uploads/760f1986-af34-43e7-b26d-a23deb139f62.png" 
                  alt="NTPC Logo" 
                  className="w-12 h-12 mr-4 object-contain bg-white p-2 rounded-md"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Deputy Manager</h3>
                  <p className="text-lg text-energy-600 dark:text-energy-400">NTPC Limited</p>
                </div>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Jan 2015 - Feb 2018 (3 yrs 2 mos) | Noida Area, India</span>
              </div>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  In my role as Deputy Manager in Solar Engineering Team of NTPC, I was responsible for framing the Technical Requirements (of PV Modules, DC Cables etc), Solar Assessment and Energy Yield Prediction, Providing Technical Support to our already running Solar PV plants, Techno-Commercial Analysis and continuous upgradation of Technical Specifications inline with the ever dynamic Solar market in India.
                </p>
              </div>
            </div>
          </div>

          {/* NTPC - Assistant Manager */}
          <div className="timeline-container">
            <div className="timeline-dot"></div>
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <img 
                  src="/public/lovable-uploads/760f1986-af34-43e7-b26d-a23deb139f62.png" 
                  alt="NTPC Logo" 
                  className="w-12 h-12 mr-4 object-contain bg-white p-2 rounded-md"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Assistant Manager</h3>
                  <p className="text-lg text-energy-600 dark:text-energy-400">NTPC</p>
                </div>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Sep 2014 - Dec 2014 (4 mos) | Noida Area, India</span>
              </div>
            </div>
          </div>

          {/* NTPC - Assistant Manager (2010-2012) */}
          <div className="timeline-container">
            <div className="timeline-dot"></div>
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <img 
                  src="/public/lovable-uploads/760f1986-af34-43e7-b26d-a23deb139f62.png" 
                  alt="NTPC Logo" 
                  className="w-12 h-12 mr-4 object-contain bg-white p-2 rounded-md"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Assistant Manager</h3>
                  <p className="text-lg text-energy-600 dark:text-energy-400">NTPC</p>
                </div>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Jul 2010 - Aug 2012 (2 yrs 2 mos) | Noida Area, India</span>
              </div>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Layouts Group in Electrical Engg Dept, currently on sabbatical for two years. Doing MS in Electrical Power System in Europe
                </p>
              </div>
            </div>
          </div>

          {/* NTPC - Executive Trainee */}
          <div className="timeline-container">
            <div className="timeline-dot"></div>
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/public/lovable-uploads/760f1986-af34-43e7-b26d-a23deb139f62.png" 
                  alt="NTPC Logo" 
                  className="w-12 h-12 mr-4 object-contain bg-white p-2 rounded-md"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Executive Trainee</h3>
                  <p className="text-lg text-energy-600 dark:text-energy-400">NTPC</p>
                </div>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Jul 2009 - Jul 2010 (1 yr 1 mo)</span>
              </div>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Acquired technical, managerial and soft skills
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendation */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <h2 className="section-heading">Recommendation</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
            <div className="flex items-start">
              <img 
                src="https://via.placeholder.com/64" 
                alt="Shiv Mishra" 
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">SHIV MISHRA</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Head Operational Excellence, Regulatory Affairs,SCADA ENGG, System integration and Commissioning at Sterling & Wilson Renewable Energy Limited | Ex Chief General Manager at NTPC</p>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    Mr. Shreenidhi Sharma was working with me for almost a decade. He considered me as a mentor in NTPC. I recall my first interaction with him after his enrolment in NTPC. He was posted in Electrical Design department in NTPC after excelling various rigorous tests. He was rank 1 in his batch and got Gold medal from the then Hon'ble Minister of Power.
                  </p>
                  <p>
                    As a Group head in Electrical for System Engineering, I could sense the high talent and hidden potential in him and really enjoyed being his trainer and mentor.
                  </p>
                  <p>
                    He went to pursue his Masters in the field of Renewable Energy from Europe and re-joined NTPC after study leave. I ensured through management that he was placed in Renewable energy section....
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Accomplishments */}
      <section className="section-container">
        <h2 className="section-heading">Key Accomplishments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800">
            <div className="flex items-center mb-4">
              <Briefcase className="h-8 w-8 text-energy-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Technical Leadership</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Led the development of technical specifications for solar photovoltaic systems, ensuring alignment with industry best practices and standards.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800">
            <div className="flex items-center mb-4">
              <Briefcase className="h-8 w-8 text-energy-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">EV Charging Infrastructure</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Spearheaded the formulation of specifications for electric vehicle charging stations, contributing to sustainable transportation solutions.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800">
            <div className="flex items-center mb-4">
              <Briefcase className="h-8 w-8 text-energy-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Solar Energy Yield Prediction</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Conducted comprehensive solar assessment and energy yield prediction, optimizing performance of solar PV plants.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800">
            <div className="flex items-center mb-4">
              <Briefcase className="h-8 w-8 text-energy-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Technical Support</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Provided specialized technical support to operational solar PV plants, ensuring optimal performance and troubleshooting complex issues.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
