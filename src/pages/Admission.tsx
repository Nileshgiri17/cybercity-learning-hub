import React, { useState } from 'react';
import { Calendar, FileText, CreditCard, Users, CheckCircle, Phone, AlertCircle } from 'lucide-react';
import { validateName, validateEmail, validatePhone, validateRequired } from '../utils/validation';

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

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (fieldName: string) => {
    setTouched(prev => ({
      ...prev,
      [fieldName]: true
    }));

    const value = formData[fieldName as keyof typeof formData];
    let validation;

    switch (fieldName) {
      case 'name':
        validation = validateName(value);
        break;
      case 'email':
        validation = validateEmail(value);
        break;
      case 'phone':
        validation = validatePhone(value);
        break;
      case 'course':
        validation = validateRequired(value, 'Course');
        break;
      case 'education':
        validation = validateRequired(value, 'Educational Qualification');
        break;
      default:
        return;
    }

    if (!validation.isValid) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: validation.error || ''
      }));
    }
  };

  const getInputClass = (fieldName: string) => {
    const baseClass = "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 form-input";
    
    if (touched[fieldName]) {
      if (errors[fieldName]) {
        return `${baseClass} input-error`;
      } else if (formData[fieldName as keyof typeof formData]) {
        return `${baseClass} input-success`;
      }
    }
    
    return `${baseClass} border-gray-300`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all required fields
    const newErrors: Record<string, string> = {};
    
    const nameValidation = validateName(formData.name);
    if (!nameValidation.isValid) newErrors.name = nameValidation.error!;
    
    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.isValid) newErrors.email = emailValidation.error!;
    
    const phoneValidation = validatePhone(formData.phone);
    if (!phoneValidation.isValid) newErrors.phone = phoneValidation.error!;
    
    const courseValidation = validateRequired(formData.course, 'Course');
    if (!courseValidation.isValid) newErrors.course = courseValidation.error!;
    
    const educationValidation = validateRequired(formData.education, 'Educational Qualification');
    if (!educationValidation.isValid) newErrors.education = educationValidation.error!;

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      course: true,
      education: true
    });

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted successfully:', formData);
      // Handle successful submission
    }
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
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 animate-slide-up animate-delay-200">
            Start your journey towards a successful career in computer technology
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Admission Process</h2>
            <p className="text-lg text-gray-600">Simple 4-step process to get admitted</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className={`text-center hover-lift animate-slide-up animate-delay-${(index + 1) * 100}`}>
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
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Apply for Admission</h2>
              <p className="text-lg text-gray-600">Fill out the form below to start your admission process</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Application Form */}
              <div className="lg:col-span-2 animate-slide-in-left">
                <form onSubmit={handleSubmit} className="bg-muted p-8 rounded-lg shadow-lg">
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
                        onBlur={() => handleBlur('name')}
                        className={getInputClass('name')}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <div className="error-message">
                          <AlertCircle className="w-4 h-4" />
                          {errors.name}
                        </div>
                      )}
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
                        onBlur={() => handleBlur('email')}
                        className={getInputClass('email')}
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <div className="error-message">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </div>
                      )}
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
                        onBlur={() => handleBlur('phone')}
                        className={getInputClass('phone')}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <div className="error-message">
                          <AlertCircle className="w-4 h-4" />
                          {errors.phone}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Course Selection *
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur('course')}
                        className={getInputClass('course')}
                      >
                        <option value="">Select a course</option>
                        {courses.map((course, index) => (
                          <option key={index} value={course}>{course}</option>
                        ))}
                      </select>
                      {errors.course && (
                        <div className="error-message">
                          <AlertCircle className="w-4 h-4" />
                          {errors.course}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Educational Qualification *
                      </label>
                      <select
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur('education')}
                        className={getInputClass('education')}
                      >
                        <option value="">Select qualification</option>
                        <option value="10th">10th Pass</option>
                        <option value="12th">12th Pass</option>
                        <option value="graduate">Graduate</option>
                        <option value="postgraduate">Post Graduate</option>
                      </select>
                      {errors.education && (
                        <div className="error-message">
                          <AlertCircle className="w-4 h-4" />
                          {errors.education}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className={getInputClass('category')}
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
                        className={getInputClass('preferredTiming')}
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
                    className="w-full bg-primary hover:bg-primary/90 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 mt-8 hover:scale-105"
                  >
                    Submit Application
                  </button>
                </form>
              </div>

              {/* Sidebar Information */}
              <div className="space-y-6 animate-slide-in-right">
                {/* Contact Info */}
                <div className="bg-primary text-white p-6 rounded-lg hover-lift">
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
                <div className="bg-muted p-6 rounded-lg hover-lift">
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
                <div className="bg-secondary text-white p-6 rounded-lg hover-lift">
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
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '5000+', label: 'Students Enrolled' },
              { number: '95%', label: 'Placement Rate' },
              { number: '50+', label: 'Course Options' },
              { number: '10+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className={`animate-scale-in animate-delay-${(index + 1) * 100}`}>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;
