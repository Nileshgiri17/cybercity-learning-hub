
import React, { useState } from 'react';
import { Calendar, FileText, CreditCard, Users, CheckCircle, Phone } from 'lucide-react';

const Admission = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    education: '',
    category: '',
    preferredTiming: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const admissionSteps = [
    {
      icon: FileText,
      title: 'Fill Application',
      description: 'Complete the online admission form with required details'
    },
    {
      icon: Users,
      title: 'Counseling Session',
      description: 'Attend free counseling to choose the right course'
    },
    {
      icon: Calendar,
      title: 'Free Demo',
      description: 'Attend 3-day free demo classes'
    },
    {
      icon: CreditCard,
      title: 'Fee Payment',
      description: 'Pay course fees and confirm admission'
    }
  ];

  const documents = [
    '10th Mark Sheet (Photocopy)',
    '12th Mark Sheet (if applicable)',
    'Graduation Certificate (for PGDCA)',
    'Aadhar Card (Photocopy)',
    'Passport Size Photos (3 copies)',
    'Caste Certificate (for discount)'
  ];

  const courses = [
    'Tally Prime + GST',
    'Basic Computer Course',
    'CPCT Preparation',
    'Photoshop & CorelDraw',
    'Billing & Data Entry',
    'MP Online & CSC Work',
    'DCA (6 months)',
    'PGDCA (12 months)',
    'Typing Course',
    'Personality Development'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Admission Open for 2023-2024
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Start your journey towards a successful career in computer technology
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Admission Process</h2>
            <p className="text-lg text-gray-600">Simple 4-step process to get admitted</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <step.icon className="w-10 h-10" />
                  <div className="absolute -top-2 -right-2 bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
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

      {/* Admission Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Apply for Admission</h2>
              <p className="text-lg text-gray-600">Fill out the form below to start your admission process</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Application Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-6">Application Form</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Course Selection *
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      >
                        <option value="">Select a course</option>
                        {courses.map((course, index) => (
                          <option key={index} value={course}>{course}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Educational Qualification *
                      </label>
                      <select
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      >
                        <option value="">Select qualification</option>
                        <option value="10th">10th Pass</option>
                        <option value="12th">12th Pass</option>
                        <option value="graduate">Graduate</option>
                        <option value="postgraduate">Post Graduate</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select category</option>
                        <option value="general">General</option>
                        <option value="sc">SC</option>
                        <option value="st">ST</option>
                        <option value="obc">OBC</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Timing
                      </label>
                      <select
                        name="preferredTiming"
                        value={formData.preferredTiming}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select timing</option>
                        <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                        <option value="afternoon">Afternoon (12:00 PM - 3:00 PM)</option>
                        <option value="evening">Evening (3:00 PM - 6:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors mt-8"
                  >
                    Submit Application
                  </button>
                </form>
              </div>

              {/* Sidebar Information */}
              <div className="space-y-6">
                {/* Contact Info */}
                <div className="bg-primary text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5" />
                      <span>9111061787</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5" />
                      <span>9111061707</span>
                    </div>
                  </div>
                  <button className="w-full bg-white text-primary py-3 rounded-lg font-semibold mt-4 hover:bg-gray-100 transition-colors">
                    Call Now
                  </button>
                </div>

                {/* Required Documents */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Required Documents</h3>
                  <ul className="space-y-2">
                    {documents.map((doc, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <span className="text-sm">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Special Offers */}
                <div className="bg-secondary text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Special Discounts</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• ST/SC/OBC students get special fee discount</li>
                    <li>• Early bird discount for advance payments</li>
                    <li>• Group discount for 3+ students</li>
                    <li>• Free study materials included</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5000+</div>
              <div className="text-gray-600">Students Enrolled</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Course Options</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;
