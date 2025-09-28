import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faDiscord, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background space-y-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand opacity-10"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-brand bg-clip-text text-transparent">
            Learn Python & Neuroscience Together
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-4xl mx-auto leading-relaxed">
            Join our unique 6-week program combining coding and neuroscience, culminating in building real brain-computer interfaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/curriculum" 
              className="bg-gradient-brand text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              View Full Curriculum
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

      {/* Global Impact Stats */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-text-primary">Global Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-surface-elevated rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🌍</span>
              </div>
              <h3 className="text-3xl font-bold text-text-primary mb-2">10+</h3>
              <p className="text-text-secondary">Countries Represented</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-surface-elevated rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🧠</span>
              </div>
              <h3 className="text-3xl font-bold text-text-primary mb-2">World-class</h3>
              <p className="text-text-secondary">Mentorship from Experts</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-surface-elevated rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🎓</span>
              </div>
              <h3 className="text-3xl font-bold text-text-primary mb-2">50+</h3>
              <p className="text-text-secondary">Alumni Community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-text-primary">What Our Participants Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
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
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-text-primary text-center">About Us</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We exist to spark curiosity and make science accessible to everyone by teaching the language of the brain and the code to understand it. Founded in Georgia and supported by mentors worldwide, we are a diverse community of learners and leaders.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-text-primary">📬 Let's Connect</h2>
          <div className="bg-surface border border-border rounded-2xl p-12">
            <p className="text-xl text-text-secondary mb-8">
              Ready to join our community? Apply for Cohort 2
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
            </div>
            <div className="flex justify-center gap-8 text-3xl">
              <a href="https://instagram.com/synapse_code" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors" title="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://discord.gg/9PvqXnYUg" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors" title="Discord">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
              <a href="https://www.youtube.com/@synapsecodesociety" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors" title="YouTube">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}