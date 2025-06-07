
import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, TrendingUp, Award, CheckCircle, Building, Star } from 'lucide-react';

const Placement = () => {
  const placementStats = [
    { number: '5000+', label: 'Students Placed', icon: Users },
    { number: '95%', label: 'Placement Rate', icon: TrendingUp },
    { number: '300+', label: 'Partner Companies', icon: Building },
    { number: '₹25,000', label: 'Average Starting Salary', icon: Award }
  ];

  const placementProcess = [
    {
      icon: Users,
      title: 'Resume Building',
      description: 'Professional resume creation and portfolio development'
    },
    {
      icon: Briefcase,
      title: 'Interview Preparation',
      description: 'Mock interviews and soft skills training'
    },
    {
      icon: Building,
      title: 'Company Connect',
      description: 'Direct connection with hiring companies'
    },
    {
      icon: CheckCircle,
      title: 'Job Placement',
      description: 'Successful placement with ongoing support'
    }
  ];

  const partnerCompanies = [
    'TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant',
    'HCL Technologies', 'Tech Mahindra', 'L&T Infotech',
    'Capgemini', 'IBM', 'Microsoft', 'Amazon'
  ];

  const successStories = [
    {
      name: 'Rajesh Kumar',
      course: 'Tally Prime + GST',
      company: 'CA Sharma & Associates',
      salary: '₹18,000/month',
      image: '/api/placeholder/100/100',
      testimonial: 'The practical training at Cybercity Institute helped me secure a job immediately after course completion.'
    },
    {
      name: 'Priya Sharma',
      course: 'Basic Computer + CPCT',
      company: 'Government Office',
      salary: '₹22,000/month',
      image: '/api/placeholder/100/100',
      testimonial: 'Excellent faculty and placement support. Now I am working as a computer operator in government sector.'
    },
    {
      name: 'Amit Verma',
      course: 'Photoshop & CorelDraw',
      company: 'Digital Marketing Agency',
      salary: '₹25,000/month',
      image: '/api/placeholder/100/100',
      testimonial: 'Started my career as a graphic designer and now running my own design studio.'
    },
    {
      name: 'Sneha Patel',
      course: 'DCA',
      company: 'Tech Solutions Pvt Ltd',
      salary: '₹20,000/month',
      image: '/api/placeholder/100/100',
      testimonial: 'The comprehensive DCA course prepared me well for the IT industry.'
    }
  ];

  const jobRoles = [
    {
      title: 'Accountant / Accounts Executive',
      courses: ['Tally Prime + GST', 'Basic Computer'],
      companies: ['CA Firms', 'Trading Companies', 'Manufacturing Units'],
      salaryRange: '₹15,000 - ₹25,000'
    },
    {
      title: 'Data Entry Operator',
      courses: ['Basic Computer', 'Typing Course', 'Billing & Data Entry'],
      companies: ['Government Offices', 'Private Companies', 'Banks'],
      salaryRange: '₹12,000 - ₹20,000'
    },
    {
      title: 'Graphic Designer',
      courses: ['Photoshop & CorelDraw', 'Basic Computer'],
      companies: ['Advertising Agencies', 'Print Media', 'Digital Marketing'],
      salaryRange: '₹18,000 - ₹30,000'
    },
    {
      title: 'Computer Operator',
      courses: ['Basic Computer', 'CPCT Preparation'],
      companies: ['Government Sector', 'Banks', 'Educational Institutions'],
      salaryRange: '₹15,000 - ₹22,000'
    },
    {
      title: 'CSC / E-Mitra Operator',
      courses: ['MP Online & CSC Work', 'Basic Computer'],
      companies: ['Common Service Centers', 'Government Portals'],
      salaryRange: '₹10,000 - ₹18,000'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            100% Job Placement Assistance
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Your success is our commitment. We ensure every student gets the right job opportunity.
          </p>
        </div>
      </section>

      {/* Placement Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {placementStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Placement Process</h2>
            <p className="text-lg text-gray-600">Step-by-step approach to ensure your job success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {placementProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-secondary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <step.icon className="w-10 h-10" />
                  <div className="absolute -top-2 -right-2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">Real students, real achievements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{story.name}</h3>
                    <p className="text-primary font-semibold">{story.course}</p>
                    <p className="text-gray-600">{story.company}</p>
                    <p className="text-green-600 font-semibold">{story.salary}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{story.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Roles & Opportunities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Job Opportunities</h2>
            <p className="text-lg text-gray-600">Career paths available after course completion</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobRoles.map((role, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-4 text-primary">{role.title}</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Required Courses:</h4>
                  <div className="flex flex-wrap gap-2">
                    {role.courses.map((course, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Hiring Companies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {role.companies.map((company, idx) => (
                      <span key={idx} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {company}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-600">Salary Range:</span>
                    <div className="font-bold text-lg text-secondary">{role.salaryRange}</div>
                  </div>
                  <Link
                    to="/courses"
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    View Courses
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Companies */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Hiring Partners</h2>
            <p className="text-xl opacity-90">Leading companies that trust our students</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {partnerCompanies.map((company, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                <div className="font-semibold">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Support */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Placement Support Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Dedicated Placement Team</h3>
              <p className="text-gray-600">Expert counselors guide you throughout the placement process</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Industry Connections</h3>
              <p className="text-gray-600">Strong network with 300+ hiring companies across various sectors</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Continuous Support</h3>
              <p className="text-gray-600">Ongoing career support even after successful placement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Launch Your Career?</h2>
          <p className="text-xl mb-8">Join our successful alumni working in top companies</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admission"
              className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Contact Placement Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Placement;
