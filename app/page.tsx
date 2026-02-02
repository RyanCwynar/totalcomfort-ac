"use client";

import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 bg-amber-500 text-white text-center py-2 px-4 text-sm font-medium z-[1001]">
        ✨ This is a free redesign mockup created by Byldr — <a href="https://ryancwynar.github.io" className="underline">Learn More</a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-9 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 px-4 md:px-6 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">❄️</span>
            </div>
            <span className="font-bold text-lg text-gray-900 hidden sm:block">Total Comfort AC</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-600 hover:text-sky-600 transition">Services</a>
            <a href="#about" className="text-gray-600 hover:text-sky-600 transition">About</a>
            <a href="#contact" className="text-gray-600 hover:text-sky-600 transition">Contact</a>
          </div>
          
          <a href="tel:9547533050" className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg font-semibold transition text-sm whitespace-nowrap">
            (954) 753-3050
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-sky-500/20 text-sky-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>🏆</span> Coral Springs&apos; Trusted HVAC Experts
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Keep Your Home <span className="text-sky-400">Comfortable</span> Year-Round
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Expert air conditioning repair & furnace repair services in Coral Springs, FL. 
              Available 24/7 for all your heating and cooling emergencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:9547533050" className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg shadow-sky-500/25 text-center">
                Call Now: (954) 753-3050
              </a>
              <a href="#services" className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition text-center">
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">⚡</span>
              <span className="font-semibold text-gray-900">24/7 Emergency</span>
              <span className="text-sm text-gray-500">Always Available</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">✅</span>
              <span className="font-semibold text-gray-900">Licensed & Insured</span>
              <span className="text-sm text-gray-500">Fully Certified</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">💰</span>
              <span className="font-semibold text-gray-900">Fair Pricing</span>
              <span className="text-sm text-gray-500">No Hidden Fees</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">⭐</span>
              <span className="font-semibold text-gray-900">5-Star Service</span>
              <span className="text-sm text-gray-500">Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our HVAC Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From repairs and maintenance to full system installations, we handle all your heating and cooling needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "❄️",
                title: "AC Repair",
                description: "Fast, reliable air conditioning repair to get your system running smoothly again. Same-day service available."
              },
              {
                icon: "🔥",
                title: "Furnace Repair",
                description: "Expert heating repair services to keep your home warm during Florida's cool nights."
              },
              {
                icon: "🔧",
                title: "AC Maintenance",
                description: "Preventive maintenance to extend your system's life and improve energy efficiency."
              },
              {
                icon: "🏠",
                title: "New Installation",
                description: "Professional HVAC installation with top brands like Ruud for lasting performance."
              },
              {
                icon: "🌬️",
                title: "Indoor Air Quality",
                description: "Improve your home's air quality to reduce allergies and asthma symptoms."
              },
              {
                icon: "📞",
                title: "Emergency Service",
                description: "24/7 emergency HVAC service when you need it most. One call and we're there."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-sky-200 transition group">
                <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-sky-500 group-hover:scale-110 transition">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Local Coral Springs HVAC Experts
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Total Comfort Air Conditioning is a local company proudly serving Coral Springs, Florida and 
                the surrounding areas. We understand the unique challenges of South Florida's climate and 
                are dedicated to keeping your home comfortable year-round.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of certified technicians receives specialized training to ensure you receive the 
                best service possible. Whether you need a quick repair or a complete system installation, 
                we're here to help.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-sky-600 mb-1">24/7</div>
                  <div className="text-gray-600">Emergency Service</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-sky-600 mb-1">100%</div>
                  <div className="text-gray-600">Satisfaction Guarantee</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  "Locally owned and operated",
                  "Licensed and insured professionals",
                  "Upfront, honest pricing",
                  "All major brands serviced",
                  "Ruud authorized dealer",
                  "Financing options available"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-sky-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need HVAC Service Today?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Call us now for fast, reliable service. We're available 24/7 for emergencies!
          </p>
          <a href="tel:9547533050" className="inline-block bg-white text-sky-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-sky-50 transition shadow-lg">
            📞 (954) 753-3050
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Ready to get started? Reach out today!</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a href="tel:9547533050" className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-sky-50 hover:shadow-lg transition group">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:bg-sky-500 group-hover:text-white transition">
                📞
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-sky-600 font-semibold">(954) 753-3050</p>
            </a>
            
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                📍
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">8269 NW 15th Ct<br />Coral Springs, FL 33071</p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                🕐
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600">24/7 Emergency<br />Regular: Mon-Fri</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">❄️</span>
              </div>
              <span className="font-bold text-lg">Total Comfort Air Conditioning</span>
            </div>
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>Serving Coral Springs, FL & Surrounding Areas</p>
              <p className="mt-1">Licensed & Insured HVAC Contractor</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Tracking Pixel */}
      <script dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const params = new URLSearchParams(window.location.search);
            const ref = params.get('ref');
            if (ref) {
              const img = new Image();
              img.src = 'https://convex-actions.byldr.co/track?ref=' + encodeURIComponent(ref) + '&url=' + encodeURIComponent(window.location.href);
            }
          })();
        `
      }} />
    </div>
  );
}
