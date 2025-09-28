import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand opacity-10"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-brand bg-clip-text text-transparent">
            Learn Python & Neuroscience Together
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-4xl mx-auto leading-relaxed">
            At Synapse Code, we teach the basics of both Python programming and neuroscience in a unique 6-week program. 
            Each week features one Python lecture and one neuroscience lecture, culminating in brain-computer interfaces with the Neurosity Crown.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/courses/python-basics" 
              className="bg-gradient-brand text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Python Course
            </Link>
            <Link 
              to="/courses/neuroscience-101" 
              className="bg-gradient-neural text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Neuroscience Course
            </Link>
            <a 
              href="https://forms.gle/ifDW4zJrUQLMNHwy8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-border-interactive text-text-primary px-8 py-4 rounded-xl font-semibold hover:bg-surface-interactive transition-colors"
            >
              Apply for Cohort 2
            </a>
          </div>
        </div>
      </section>

      {/* Featured Program */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">Our 6-Week Dual Curriculum</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Every week combines one Python programming lecture with one neuroscience lecture. 
              In the final week, we bridge both fields by exploring brain-computer interfaces using the Neurosity Crown device with Python.
            </p>
          </div>
          <div className="bg-surface border border-border rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-text-primary">Weekly Structure</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent-blue rounded-full"></span>
                    One Python programming lecture per week
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent-purple rounded-full"></span>
                    One neuroscience fundamentals lecture per week
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent-green rounded-full"></span>
                    Hands-on projects combining both fields
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent-orange rounded-full"></span>
                    Final week: Brain-computer interfaces with Neurosity Crown
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <div className="bg-surface-elevated border border-border-interactive rounded-xl p-6">
                  <h4 className="font-semibold text-text-primary mb-2">Capstone Project</h4>
                  <p className="text-text-secondary">Control the Neurosity Crown device using Python to read brain signals and create brain-computer interfaces</p>
                </div>
                <div className="flex gap-3">
                  <Link 
                    to="/courses/python-basics" 
                    className="flex-1 text-center bg-gradient-learning text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                  >
                    Python Course
                  </Link>
                  <Link 
                    to="/courses/neuroscience-101" 
                    className="flex-1 text-center bg-gradient-neural text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                  >
                    Neuroscience Course
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact Stats */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-text-primary">Global Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-3xl font-bold text-text-primary mb-2">10+</h3>
              <p className="text-text-secondary">Students from more than 10 countries</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-neural rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-3xl font-bold text-text-primary mb-2">World-class</h3>
              <p className="text-text-secondary">Mentorship from experts worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-3xl font-bold text-text-primary mb-2">50+</h3>
              <p className="text-text-secondary">A community of over 50 alumni and growing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-text-primary">What Our Participants Say</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-surface border border-border rounded-xl p-8">
              <p className="text-lg text-text-secondary mb-6 italic">
                "SynapseCode101 changed how I see science—it's not only theory, it's something you build."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-brand rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">A</span>
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Aditi</p>
                  <p className="text-sm text-text-muted">Nepal</p>
                </div>
              </div>
            </div>
            <div className="bg-surface border border-border rounded-xl p-8">
              <p className="text-lg text-text-secondary mb-6 italic">
                "I never imagined I'd be analyzing brain data with Python. Now I'm mentoring others."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-neural rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">M</span>
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Maya</p>
                  <p className="text-sm text-text-muted">Canada</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Alumni Comments Section - Space for future expansion */}
          <div className="bg-surface-elevated border border-border-interactive rounded-xl p-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Alumni Stories</h3>
            <p className="text-text-secondary mb-6">More inspiring stories from our global community coming soon...</p>
            <div className="grid md:grid-cols-3 gap-4">
              {/* Placeholder for future alumni comments */}
              <div className="h-32 bg-surface border border-border rounded-lg flex items-center justify-center">
                <span className="text-text-muted">Alumni Story #1</span>
              </div>
              <div className="h-32 bg-surface border border-border rounded-lg flex items-center justify-center">
                <span className="text-text-muted">Alumni Story #2</span>
              </div>
              <div className="h-32 bg-surface border border-border rounded-lg flex items-center justify-center">
                <span className="text-text-muted">Alumni Story #3</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-text-primary">🎯 About Us</h2>
            <h3 className="text-2xl font-semibold mb-4 text-text-primary">Mission & Vision</h3>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We want to spark curiosity and make science accessible to everyone. Synapse Code exists to help 
              young people connect, collaborate, and think critically about the future of neuroscience and technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-background border border-border rounded-xl p-8">
              <h4 className="text-xl font-bold mb-4 text-text-primary">Our Story</h4>
              <p className="text-text-secondary">
                Synapse Code started with a simple thought: what if students could learn about the brain not only from books, 
                but also through code? Founded in Georgia and supported by mentors from all over the world, we have grown 
                into a diverse community of learners and leaders.
              </p>
            </div>
            <div className="bg-background border border-border rounded-xl p-8">
              <h4 className="text-xl font-bold mb-4 text-text-primary">Team & Mentors</h4>
              <p className="text-text-secondary mb-4">
                Our mentors include neuroscientists, programmers, and educators—from University of Canada to Microsoft. 
                They share one passion: helping the next generation of thinkers grow.
              </p>
              <p className="text-sm text-text-muted italic">(Mentor bios and photos coming soon)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-text-primary">🌍 Community</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-text-primary">Who Joins Us</h3>
              <p className="text-text-secondary mb-6">We've welcomed students from:</p>
              <div className="grid grid-cols-2 gap-4">
                {['Georgia', 'Canada', 'Nepal', 'United States', 'Kazakhstan', '...and more'].map((country, index) => (
                  <div key={index} className="bg-surface border border-border rounded-lg p-4 text-center">
                    <span className="text-text-primary font-medium">{country}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-text-primary">📅 Events</h3>
              <div className="space-y-4">
                <div className="bg-surface border border-border rounded-lg p-6">
                  <h4 className="font-semibold text-text-primary mb-2">🧠 Neurorobotics for Kids</h4>
                  <p className="text-text-secondary">An intro to brain-controlled robots</p>
                </div>
                <div className="bg-surface border border-border rounded-lg p-6">
                  <h4 className="font-semibold text-text-primary mb-2">💬 Global Mentor Panels</h4>
                  <p className="text-text-secondary">Talks on the future of neurotech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internships */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-text-primary">Internships</h2>
          <p className="text-xl text-text-secondary mb-12">
            Students can also join internships to build real-world skills while supporting Synapse Code:
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-background border border-border rounded-xl p-8">
              <div className="text-3xl mb-4">📢</div>
              <h3 className="text-xl font-bold text-text-primary">Marketing</h3>
            </div>
            <div className="bg-background border border-border rounded-xl p-8">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-text-primary">Project Management</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-text-primary">📬 Let's Connect</h2>
          <div className="bg-surface border border-border rounded-2xl p-12">
            <p className="text-xl text-text-secondary mb-8">
              Ready to join our community? Apply for Cohort 2 before September 12th, 23:59 your local time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="https://forms.gle/ifDW4zJrUQLMNHwy8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-brand text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Apply Now
              </a>
              <button className="border border-border-interactive text-text-primary px-8 py-4 rounded-xl font-semibold hover:bg-surface-interactive transition-colors">
                📩 Contact Form
              </button>
            </div>
            
            <div className="flex justify-center gap-6">
              <a 
                href="https://instagram.com/synapse_code" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://linkedin.com/company/synapse-code" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://discord.gg/synapsecode" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors"
              >
                Discord
              </a>
              <a 
                href="https://youtube.com/@synapsecode" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}