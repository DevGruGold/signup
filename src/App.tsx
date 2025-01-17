import React, { useState } from 'react';
import {
  Fingerprint,
  Link,
  Wallet,
  Shield,
  Download,
  CreditCard,
  CheckCircle2,
  ChevronRight,
  Send
} from 'lucide-react';

function App() {
  const [email, setEmail] = useState('xmrtsolutions@gmail.com');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold">Sign Up</a>
          <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-full transition-colors">
            Return to Signature
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Your Signature, Evolved.</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
          The "Sign Up" CryptoCard brings a revolutionary approach to financial transactions by merging time-honored legal precedents of handwritten signatures with cutting-edge biometric security and smart contract technology.
        </p>
        <div className="relative w-full max-w-4xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80"
            alt="CryptoCard Preview"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Fingerprint className="w-8 h-8 text-indigo-400" />}
            title="Biometric Signature Integration"
            description="Authenticate transactions seamlessly using your NFC-enabled CryptoCard."
          />
          <FeatureCard
            icon={<Link className="w-8 h-8 text-indigo-400" />}
            title="Smart Contract-Ready"
            description="Every transaction is powered by immutable smart contracts on the blockchain."
          />
          <FeatureCard
            icon={<Wallet className="w-8 h-8 text-indigo-400" />}
            title="XMRT Wallet Companion"
            description="Linked directly to your XMRT Wallet for instant access to funds."
          />
          <FeatureCard
            icon={<Shield className="w-8 h-8 text-indigo-400" />}
            title="Bank-Grade Security"
            description="Built with secure elements and encrypted NFC technology."
          />
        </div>
      </section>

      {/* Legal Section */}
      <section className="bg-slate-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">A Legacy of Trust, Reinvented</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-slate-700/50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Legal Precedence</h3>
              <p className="text-slate-300">Years of legal precedence in handwritten signatures now reinforce your digital transactions.</p>
            </div>
            <div className="bg-slate-700/50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Privacy First</h3>
              <p className="text-slate-300">Biometric authentication strengthens security without compromising your privacy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to Sign Up?</h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
          Take the next step in financial freedom and security. With "Sign Up," you're not just signing your name—you're signing into the future.
        </p>
        
        <div className="max-w-2xl mx-auto space-y-8">
          <StepCard
            number="1"
            icon={<Download />}
            title="Download the XMRT Wallet"
          />
          <StepCard
            number="2"
            icon={<CreditCard />}
            title="Order your Sign Up CryptoCard"
          />
          <StepCard
            number="3"
            icon={<CheckCircle2 />}
            title="Activate your card and start transacting!"
          />
        </div>

        <button className="mt-12 bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center gap-2">
          Sign Up Now
          <ChevronRight className="w-5 h-5" />
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-slate-400 mb-8">Get the latest updates about Sign Up and XMRT Wallet features.</p>
              
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Enter your email"
                    readOnly
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors inline-flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {subscribed ? 'Subscribed!' : 'Subscribe'}
                  </button>
                </div>
              </form>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
                </ul>
              </div>
            </div>

            <div className="text-center text-slate-400 pt-8 border-t border-slate-800">
              <p>Power your wallet. Empower your world.</p>
              <p className="mt-2">© 2024 Sign Up. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}

function StepCard({ number, icon, title }) {
  return (
    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex items-center gap-6">
      <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-xl">
        {number}
      </div>
      <div className="flex items-center gap-4">
        {icon}
        <span className="text-lg">{title}</span>
      </div>
    </div>
  );
}

export default App;