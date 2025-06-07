
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['9111061787', '9111061707'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@cybercityinstitute.com', 'admission@cybercityinstitute.com'],
      description: 'Send us your queries via email'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Near Shankar Mandir', 'Ajnas Road'],
      description: 'Visit our campus for consultation'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: 10:00 AM - 4:00 PM'],
      description: 'Our office and inquiry timings'
    }
  ];

  const quickLinks = [
    { title: 'Admission Inquiry', action: 'admission' },
    { title: 'Course Information', action: 'courses' },
    { title: 'Fee Structure', action: 'fees' },
    { title: 'Placement Support', action: 'placement' },
    { title: 'Demo Classes', action: 'demo' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Get in touch with us for admissions, course information, or any queries
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-800 font-medium">{detail}</p>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Quick Actions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      >
                        <option value="">Select subject</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="courses">Course Information</option>
                        <option value="fees">Fee Structure</option>
                        <option value="placement">Placement Support</option>
                        <option value="demo">Demo Classes</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Please provide details about your inquiry..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Quick Actions & Info */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-primary text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </button>
                  <button className="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp Chat</span>
                  </button>
                  <button className="w-full bg-secondary hover:bg-secondary/90 text-white py-3 rounded-lg font-semibold transition-colors">
                    Book Free Demo
                  </button>
                </div>
              </div>

              {/* Popular Inquiries */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Popular Inquiries</h3>
                <div className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <button
                      key={index}
                      className="w-full text-left p-3 bg-white rounded-lg hover:bg-primary hover:text-white transition-colors"
                      onClick={() => setFormData({...formData, subject: link.action})}
                    >
                      {link.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-secondary text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Emergency Contact</h3>
                <p className="mb-4">For urgent admission or course related queries:</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">9111061787</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">9111061707</span>
                  </div>
                </div>
                <p className="text-sm mt-4 opacity-90">Available 24/7 for emergency support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Campus</h2>
            <p className="text-lg text-gray-600">Come and see our facilities, meet our faculty</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Location Details</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Complete Address</h4>
                    <p className="text-gray-600">
                      Cybercity Institute<br />
                      Near Shankar Mandir<br />
                      Ajnas Road<br />
                      [City, State - PIN Code]
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Visit Timings</h4>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Before You Visit</h4>
                    <p className="text-gray-600">
                      Please call us before visiting to ensure availability of counselors and avoid waiting time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">Google Maps integration would be placed here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">What are the admission requirements?</h3>
              <p className="text-gray-600 mb-4">Minimum 10th pass for most courses. Some advanced courses require 12th or graduation.</p>

              <h3 className="text-lg font-semibold mb-2">Do you provide placement assistance?</h3>
              <p className="text-gray-600 mb-4">Yes, we provide 100% placement assistance with our network of 300+ partner companies.</p>

              <h3 className="text-lg font-semibold mb-2">Are there any scholarships available?</h3>
              <p className="text-gray-600">Yes, we offer special discounts for ST/SC/OBC students and merit-based scholarships.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">What is the duration of courses?</h3>
              <p className="text-gray-600 mb-4">Course duration varies from 1 month to 12 months depending on the course selected.</p>

              <h3 className="text-lg font-semibold mb-2">Do you offer flexible timings?</h3>
              <p className="text-gray-600 mb-4">Yes, we have morning, afternoon, and evening batches to suit different schedules.</p>

              <h3 className="text-lg font-semibold mb-2">Can I get a demo before enrollment?</h3>
              <p className="text-gray-600">Absolutely! We offer 3-day free demo classes for all courses.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
