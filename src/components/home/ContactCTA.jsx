import React from 'react';
import { Send, PhoneCall } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section id="contact" className="py-24 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#111114] rounded-[50px] p-8 md:p-20 overflow-hidden relative">
          
          {/* Abstract background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-strydo-purple/20 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-strydo-teal/10 blur-[100px] rounded-full" />

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
                Have an idea? <br/> Let’s build it.
              </h2>
              <p className="text-white/60 text-xl mb-10 leading-relaxed">
                Tell us about your project. We’ll help you turn it into a practical, scalable technology solution.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-strydo-orange">
                    <PhoneCall size={20} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase font-bold tracking-widest">Call us</p>
                    <p className="text-white font-bold text-lg">+91 97893 12513</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="w-full bg-[#F7F7F5] border-none rounded-2xl p-4 focus:ring-2 focus:ring-strydo-purple outline-none" />
                  <input type="email" placeholder="Email" className="w-full bg-[#F7F7F5] border-none rounded-2xl p-4 focus:ring-2 focus:ring-strydo-purple outline-none" />
                </div>
                <select className="w-full bg-[#F7F7F5] border-none rounded-2xl p-4 focus:ring-2 focus:ring-strydo-purple outline-none text-black/50">
                  <option>Select Service</option>
                  <option>Web Development</option>
                  <option>AI Solutions</option>
                  <option>ERP / CRM</option>
                </select>
                <textarea placeholder="Tell us about your project" rows="4" className="w-full bg-[#F7F7F5] border-none rounded-2xl p-4 focus:ring-2 focus:ring-strydo-purple outline-none"></textarea>
                
                <button className="w-full bg-strydo-orange text-white font-black py-5 rounded-2xl hover:bg-strydo-purple transition-all flex items-center justify-center gap-3 shadow-xl shadow-strydo-orange/20">
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;