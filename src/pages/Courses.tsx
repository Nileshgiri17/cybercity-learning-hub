
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, FileText, Globe, Monitor, Palette, Keyboard, 
  GraduationCap, Trophy, Clock, Users, CheckCircle, BookOpen
} from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      icon: Calculator,
      title: 'Tally Prime + GST',
      description: 'Complete accounting and taxation course with practical training on real business scenarios.',
      duration: '3 months',
      fees: '₹8,000',
      modules: ['Tally Prime Fundamentals', 'GST Implementation', 'Inventory Management', 'Payroll Processing', 'Banking & Reconciliation'],
      popular: true,
      jobRoles: ['Accountant', 'GST Consultant', 'Accounts Executive']
    },
    {
      id: 2,
      icon: FileText,
      title: 'Billing & Data Entry',
      description: 'Professional data management and billing software training for quick employment.',
      duration: '2 months',
      fees: '₹5,000',
      modules: ['Data Entry Techniques', 'Billing Software', 'Excel Advanced', 'Database Management', 'Speed Enhancement'],
      popular: false,
      jobRoles: ['Data Entry Operator', 'Billing Executive', 'Back Office Executive']
    },
    {
      id: 3,
      icon: Globe,
      title: 'MP Online & CSC Work',
      description: 'Government portal operations and Common Service Center management training.',
      duration: '1 month',
      fees: '₹3,000',
      modules: ['MP Online Services', 'CSC Portal Management', 'Digital India Services', 'E-Governance', 'Customer Service'],
      popular: false,
      jobRoles: ['CSC Operator', 'E-Mitra Operator', 'Government Service Provider']
    },
    {
      id: 4,
      icon: Monitor,
      title: 'Basic Computer Course',
      description: 'Comprehensive computer fundamentals including MS Office, Internet, and Operating System.',
      duration: '2 months',
      fees: '₹4,000',
      modules: ['Computer Fundamentals', 'MS Word', 'MS Excel', 'MS PowerPoint', 'Internet & Email', 'Windows OS'],
      popular: true,
      jobRoles: ['Computer Operator', 'Office Assistant', 'Clerk']
    },
    {
      id: 5,
      icon: Palette,
      title: 'Photoshop & CorelDraw',
      description: 'Professional graphic designing course for creative careers in digital media.',
      duration: '3 months',
      fees: '₹7,000',
      modules: ['Photoshop Basics to Advanced', 'CorelDraw Professional', 'Logo Design', 'Print Media Design', 'Digital Marketing Graphics'],
      popular: false,
      jobRoles: ['Graphic Designer', 'Digital Artist', 'Creative Designer']
    },
    {
      id: 6,
      icon: GraduationCap,
      title: 'CPCT Preparation',
      description: 'Computer Proficiency Certification Test preparation for government job aspirants.',
      duration: '2 months',
      fees: '₹4,500',
      modules: ['CPCT Syllabus Coverage', 'Typing Speed Enhancement', 'Computer Knowledge', 'Mock Tests', 'Interview Preparation'],
      popular: true,
      jobRoles: ['Government Employee', 'Bank Officer', 'Public Sector Jobs']
    },
    {
      id: 7,
      icon: BookOpen,
      title: 'DCA (Diploma in Computer Application)',
      description: 'Comprehensive 6-month diploma course covering all aspects of computer applications.',
      duration: '6 months',
      fees: '₹12,000',
      modules: ['Computer Fundamentals', 'Programming Basics', 'Database Management', 'Web Development', 'Office Applications', 'Project Work'],
      popular: false,
      jobRoles: ['Computer Programmer', 'System Administrator', 'IT Support']
    },
    {
      id: 8,
      icon: GraduationCap,
      title: 'PGDCA (Post Graduate Diploma)',
      description: 'Advanced 12-month course for graduates seeking expertise in computer applications.',
      duration: '12 months',
      fees: '₹20,000',
      modules: ['Advanced Programming', 'System Analysis', 'Network Management', 'Web Technologies', 'Software Engineering', 'Internship'],
      popular: false,
      jobRoles: ['Software Developer', 'System Analyst', 'Project Manager']
    },
    {
      id: 9,
      icon: Keyboard,
      title: 'Typing Course (Hindi/English/Remington)',
      description: 'Professional typing training in multiple languages with speed and accuracy focus.',
      duration: '3-12 months',
      fees: '₹2,000-₹5,000',
      modules: ['Touch Typing Method', 'Speed Building', 'Accuracy Enhancement', 'Keyboard Shortcuts', 'Language Switching'],
      popular: false,
      jobRoles: ['Typist', 'Data Entry Operator', 'Court Reporter']
    },
    {
      id: 10,
      icon: Trophy,
      title: 'Personality Development',
      description: 'Soft skills and personality enhancement for overall professional development.',
      duration: '1 month',
      fees: '₹3,000',
      modules: ['Communication Skills', 'Presentation Skills', 'Interview Techniques', 'Professional Etiquette', 'Leadership Skills'],
      popular: false,
      jobRoles: ['Enhanced Career Prospects', 'Better Job Interviews', 'Professional Growth']
    }
  ];

  const comboOffers = [
    {
      title: 'Tally + GST + Basic Computer',
      originalPrice: '₹20,000',
      offerPrice: '₹15,000',
      savings: '₹5,000',
      duration: '5 months',
      description: 'Complete package for accounting professionals'
    },
    {
      title: 'Design + Computer Package',
      originalPrice: '₹16,000',
      offerPrice: '₹12,000',
      savings: '₹4,000',
      duration: '5 months',
      description: 'Photoshop + CorelDraw + Basic Computer'
    },
    {
      title: 'Government Job Preparation',
      originalPrice: '₹13,500',
      offerPrice: '₹10,000',
      savings: '₹3,500',
      duration: '4 months',
      description: 'CPCT + Typing + Basic Computer'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Our Courses
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Choose from our comprehensive range of computer courses designed for your career success
          </p>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Free Demo Classes</h3>
              <p className="text-gray-600">3-day free trial</p>
            </div>
            <div>
              <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Expert Faculty</h3>
              <p className="text-gray-600">Industry experienced</p>
            </div>
            <div>
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Certification</h3>
              <p className="text-gray-600">Government recognized</p>
            </div>
            <div>
              <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Flexible Timing</h3>
              <p className="text-gray-600">Morning & evening</p>
            </div>
          </div>
        </div>
      </section>

      {/* Combo Offers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Combo Offers</h2>
            <p className="text-lg text-gray-600">Save more with our combination packages</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comboOffers.map((offer, index) => (
              <div key={index} className="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-lg relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  Save {offer.savings}
                </div>
                <h3 className="text-2xl font-bold mb-4">{offer.title}</h3>
                <p className="mb-4 opacity-90">{offer.description}</p>
                <div className="mb-4">
                  <span className="text-sm line-through opacity-75">{offer.originalPrice}</span>
                  <span className="text-3xl font-bold ml-2">{offer.offerPrice}</span>
                </div>
                <div className="text-sm opacity-90 mb-6">Duration: {offer.duration}</div>
                <Link
                  to="/admission"
                  className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors block text-center"
                >
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Individual Courses</h2>
            <p className="text-lg text-gray-600">Detailed course information and curriculum</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                {course.popular && (
                  <div className="bg-secondary text-white text-sm px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-primary">
                    <course.icon className="w-12 h-12" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="bg-gray-100 px-3 py-1 rounded-full">
                        <Clock className="w-4 h-4 inline mr-1" />
                        {course.duration}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                        {course.fees}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Course Modules:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {course.modules.map((module, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{module}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Job Opportunities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.jobRoles.map((role, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link
                    to="/admission"
                    className="flex-1 bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-lg font-semibold text-center transition-colors"
                  >
                    Enroll Now
                  </Link>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-4 rounded-lg font-semibold transition-colors">
                    Free Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Notes */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Special Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Fee Discount</h3>
              <p>Special discount available for ST/SC/OBC students</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Free Demo</h3>
              <p>3-day free trial classes before enrollment</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Job Placement</h3>
              <p>100% placement assistance guarantee</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Certification</h3>
              <p>Government recognized ISO certified courses</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
