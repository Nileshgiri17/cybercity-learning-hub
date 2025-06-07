
import React from 'react';
import { Award, Users, BookOpen, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '5000+', label: 'Students Trained', icon: Users },
    { number: '95%', label: 'Placement Rate', icon: Target },
    { number: '50+', label: 'Courses Offered', icon: BookOpen },
    { number: '10+', label: 'Years Experience', icon: Award }
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality Education',
      description: 'We provide industry-standard training with the latest curriculum and hands-on practical sessions.'
    },
    {
      icon: Users,
      title: 'Experienced Faculty',
      description: 'Our trainers are industry experts with years of practical experience in their respective fields.'
    },
    {
      icon: Target,
      title: 'Job-Oriented Training',
      description: 'All our courses are designed to meet current industry requirements and job market demands.'
    },
    {
      icon: Heart,
      title: 'Student-Centric Approach',
      description: 'We believe in personalized attention and support to help each student achieve their career goals.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            About Cybercity Institute
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Leading the way in computer education and skill development since 2014
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Cybercity Institute was established in 2014 with a vision to provide quality computer education 
                  and skill development programs. We are an ISO certified training center committed to excellence 
                  in education and student success.
                </p>
                <p>
                  Over the years, we have successfully trained more than 5,000 students in various computer courses, 
                  helping them build successful careers in the IT industry. Our comprehensive curriculum covers 
                  everything from basic computer skills to advanced professional courses.
                </p>
                <p>
                  Located near Shankar Mandir, Ajnas Road, our institute is equipped with modern computer labs, 
                  experienced faculty, and a learning environment that fosters growth and innovation.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">ISO Certification</h3>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-16 h-16 text-white" />
                </div>
                <p className="text-gray-600">
                  We are proud to be an ISO 9001:2015 certified training institute, 
                  ensuring quality management systems and continuous improvement in our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide quality computer education and skill development programs that empower students 
                with practical knowledge and help them achieve their career aspirations in the digital age.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading computer training institute that bridges the gap between education and 
                industry requirements, creating skilled professionals ready for the modern workforce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">What drives us to deliver excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Cybercity Institute?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Government Recognition</h3>
              <p>ISO certified institute with government-recognized courses and certificates.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">100% Placement Support</h3>
              <p>Dedicated placement cell providing job assistance and career guidance.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Practical Training</h3>
              <p>Hands-on learning with real-world projects and industry-standard software.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Flexible Timings</h3>
              <p>Morning and evening batches to suit students and working professionals.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Affordable Fees</h3>
              <p>Quality education at competitive prices with special discounts available.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Expert Faculty</h3>
              <p>Experienced trainers with industry expertise and teaching excellence.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
