
import { Award, Medal, Star, Calendar, MapPin, Bookmark } from 'lucide-react';

const Achievements = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Achievements & Honors</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of professional recognition, awards, and accomplishments throughout my career.
            </p>
          </div>
        </div>
      </section>

      {/* Major Achievements */}
      <section className="section-container">
        <h2 className="section-heading">Major Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="achievement-card">
            <img 
              src="/lovable-uploads/a4997305-6397-45ec-abcc-9e4ae7be9647.png" 
              alt="Gold Medal Ceremony" 
              className="achievement-img"
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Medal className="h-6 w-6 text-yellow-500 mr-2" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">NTPC Gold Medalist</h3>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="h-5 w-5 mr-2" />
                <span>January 2011</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Awarded Gold Medal by The Honourable Power Minister, Government of India, for outstanding achievement as Best Electrical Trainee 2009, in NTPC's Executive Training batch of 300.
              </p>
              <div className="flex items-center text-gray-500 dark:text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>

          <div className="achievement-card">
            <img 
              src="/lovable-uploads/d871c2c9-c2ad-427d-9141-2e7dd928d3eb.png" 
              alt="Erasmus Mundus Certificate" 
              className="achievement-img"
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-blue-500 mr-2" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Erasmus Mundus Scholarship</h3>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="h-5 w-5 mr-2" />
                <span>May 2012</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Awarded European Union's Erasmus Mundus Full Scholarship Worth €48,000; only one candidate from India was selected for the STEPS program.
              </p>
              <div className="flex items-center text-gray-500 dark:text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                <span>European Union</span>
              </div>
            </div>
          </div>

          <div className="achievement-card">
            <img 
              src="/lovable-uploads/a3c654f1-abe1-40e5-bef7-d604ec55084e.png" 
              alt="Green Hydrogen Specialist Certificate" 
              className="achievement-img"
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Star className="h-6 w-6 text-green-500 mr-2" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Green Hydrogen Specialist Certification</h3>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="h-5 w-5 mr-2" />
                <span>December 2023</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Successfully completed the Green Hydrogen Specialist training program with a mark of 96.5% (very good), gaining expertise in project development and economics.
              </p>
              <div className="flex items-center text-gray-500 dark:text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Berlin, Germany</span>
              </div>
            </div>
          </div>

          <div className="achievement-card">
            <img 
              src="/lovable-uploads/56369c0a-d23a-4347-9cdd-006a3b8b59d6.png" 
              alt="Quantic School of Business and Technology Diploma" 
              className="achievement-img"
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Bookmark className="h-6 w-6 text-purple-500 mr-2" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Executive MBA</h3>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="h-5 w-5 mr-2" />
                <span>December 2021</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Successfully completed Executive Master of Business Administration from Quantic School of Business and Technology, enhancing business acumen and management skills.
              </p>
              <div className="flex items-center text-gray-500 dark:text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Washington, DC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Recognition */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <h2 className="section-heading">Professional Recognition</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md mb-8">
            <div className="flex items-start mb-6">
              <img 
                src="/lovable-uploads/27e7946f-0171-4bc7-ae40-ee772cb59e7b.png" 
                alt="Speaking at Conference" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Indo-German Energy Forum</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Invited as a speaker at the Indo-German Energy Forum to present on renewable energy integration and green hydrogen initiatives in India.
            </p>
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <Calendar className="h-5 w-5 mr-2" />
              <span>2023</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
            <div className="flex items-start mb-6">
              <img 
                src="/lovable-uploads/f9c54ab4-99ea-432e-a671-f9786d3d303f.png" 
                alt="Award Ceremony" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">NTPC Recognition Award</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Received recognition for outstanding contribution to renewable energy projects and technical innovation at NTPC.
            </p>
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <Calendar className="h-5 w-5 mr-2" />
              <span>2018</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-container">
        <h2 className="section-heading">Achievement Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img 
            src="/lovable-uploads/a4997305-6397-45ec-abcc-9e4ae7be9647.png" 
            alt="NTPC Gold Medal Ceremony" 
            className="w-full h-64 object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity"
          />
          <img 
            src="/lovable-uploads/f9c54ab4-99ea-432e-a671-f9786d3d303f.png" 
            alt="NTPC Award Ceremony" 
            className="w-full h-64 object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity"
          />
          <img 
            src="/lovable-uploads/27e7946f-0171-4bc7-ae40-ee772cb59e7b.png" 
            alt="Speaking at Indo-German Energy Forum" 
            className="w-full h-64 object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity"
          />
          <img 
            src="/lovable-uploads/56369c0a-d23a-4347-9cdd-006a3b8b59d6.png" 
            alt="Quantic School of Business and Technology Diploma" 
            className="w-full h-64 object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity"
          />
          <img 
            src="/lovable-uploads/a3c654f1-abe1-40e5-bef7-d604ec55084e.png" 
            alt="Green Hydrogen Specialist Certificate" 
            className="w-full h-64 object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity"
          />
          <img 
            src="/lovable-uploads/1a59efa5-9887-4c5c-be84-a67fa32ef408.png" 
            alt="Professional Portrait" 
            className="w-full h-64 object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity"
          />
        </div>
      </section>

      {/* Skills & Endorsements */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <h2 className="section-heading">Skills & Endorsements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Green Hydrogen</h3>
            <div className="flex items-center mb-2">
              <Star className="h-5 w-5 text-energy-500 mr-2" />
              <p className="text-gray-700 dark:text-gray-300">'Green Hydrogen Specialist- Project Development and Economics'</p>
            </div>
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-medium">12 endorsements</span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Electrical Engineering</h3>
            <div className="flex items-center mb-2">
              <Star className="h-5 w-5 text-energy-500 mr-2" />
              <p className="text-gray-700 dark:text-gray-300">Endorsed by Minoru Tsuru who is highly skilled at this</p>
            </div>
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-medium">12 endorsements</span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Engineering</h3>
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-medium">18 endorsements</span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Power Generation</h3>
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-medium">12 endorsements</span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Transformer</h3>
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-medium">6 endorsements</span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Commissioning</h3>
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-medium">5 endorsements</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
