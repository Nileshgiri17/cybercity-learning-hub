
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, Users, BookOpen, CheckCircle, Download, MessageCircle,
  Calculator, FileText, Globe, Monitor, Palette, Keyboard, GraduationCap, Trophy
} from 'lucide-react';

const Home = () => {
  const courses = [
    {
      icon: Calculator,
      title: 'Tally Prime + GST',
      description: 'Complete accounting and taxation course',
      duration: '3 months',
      popular: true
    },
    {
      icon: FileText,
      title: 'Billing & Data Entry',
      description: 'Professional data management skills',
      duration: '2 months',
      popular: false
    },
    {
      icon: Globe,
      title: 'MP Online & CSC Work',
      description: 'Government services and online work',
      duration: '1 month',
      popular: false
    },
    {
      icon: Monitor,
      title: 'Basic Computer',
      description: 'MS Office, Internet, Operating System',
      duration: '2 months',
      popular: true
    },
    {
      icon: Palette,
      title: 'Photoshop & CorelDraw',
      description: 'Professional graphic designing',
      duration: '3 months',
      popular: false
    },
    {
      icon: GraduationCap,
      title: 'CPCT Preparation',
      description: 'Computer Proficiency Certification Test',
      duration: '2 months',
      popular: true
    },
    {
      icon: BookOpen,
      title: 'DCA, PGDCA',
      description: 'Diploma & Post Graduate Diploma',
      duration: '6-12 months',
      popular: false
    },
    {
      icon: Keyboard,
      title: 'Typing Course',
      description: 'Hindi, English, Remington typing',
      duration: '3-12 months',
      popular: false
    }
  ];

  const features = [
    {
      icon: Award,
      title: 'ISO Certified',
      description: 'Government recognized certification'
    },
    {
      icon: Users,
      title: '100% Job Placement',
      description: 'Guaranteed placement assistance'
    },
    {
      icon: CheckCircle,
      title: 'Free Demo Classes',
      description: '3-day free trial before enrollment'
    },
    {
      icon: Trophy,
      title: 'Expert Faculty',
      description: 'Industry experienced trainers'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      course: 'Tally Prime + GST',
      text: 'Excellent training quality. Got placed in a CA firm within 2 months of completion.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      course: 'Basic Computer + CPCT',
      text: 'Great faculty and practical approach. Now working as a data entry operator.',
      rating: 5
    },
    {
      name: 'Amit Verma',
      course: 'Photoshop & CorelDraw',
      text: 'Started my own graphic design business after completing the course.',
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-yellow-300">Cybercity Institute</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              ISO Certified Computer Training Center
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Best Computer Courses for Students from 10th to 12th Grade. 
              Admission Open for 2023-2024 Session with Special Combo Offers!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/admission"
                className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                Enroll Now
              </Link>
              <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center backdrop-blur-sm">
                <MessageCircle className="w-5 h-5 mr-2" />
                Book Free Demo
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center animate-scale-in">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Popular Courses</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our wide range of computer courses designed for students and professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border">
                {course.popular && (
                  <div className="bg-secondary text-white text-xs px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <div className="text-primary mb-4">
                  <course.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Duration: {course.duration}</span>
                  <Link
                    to="/courses"
                    className="text-primary hover:text-primary/80 font-semibold"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-16 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Special Combo Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Tally + GST + Basic</h3>
              <p className="text-lg mb-4">Complete package for accounting professionals</p>
              <div className="text-3xl font-bold mb-4">₹15,000</div>
              <p className="text-sm opacity-80">Special discount for ST/SC/OBC students</p>
            </div>
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Design + Computer</h3>
              <p className="text-lg mb-4">Photoshop + CorelDraw + Basic Computer</p>
              <div className="text-3xl font-bold mb-4">₹12,000</div>
              <p className="text-sm opacity-80">Industry-ready graphic design course</p>
            </div>
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Government Job Prep</h3>
              <p className="text-lg mb-4">CPCT + Typing + Basic Computer</p>
              <div className="text-3xl font-bold mb-4">₹10,000</div>
              <p className="text-sm opacity-80">Perfect for government job aspirants</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-lg text-gray-600">Success stories from our alumni</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.course}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Join thousands of successful students who chose Cybercity Institute</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admission"
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Apply for Admission
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
