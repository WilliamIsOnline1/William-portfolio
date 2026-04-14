import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = ({ personalInfo }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock submission - will be replaced with actual API call
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: '#1F2933', fontFamily: 'Merriweather, serif' }}>
            Get In Touch
          </h2>
          <div className="w-20 h-1 mx-auto mb-12" style={{ backgroundColor: '#7C9A92' }}></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#1F2933', fontFamily: 'Merriweather, serif' }}>
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <Card className="p-4 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: '#7C9A92' }}>
                      <Mail size={20} color="#F8FAFC" />
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: '#7C9A92' }}>Email</p>
                      <p className="font-medium" style={{ color: '#1F2933' }}>{personalInfo.email}</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: '#7C9A92' }}>
                      <Phone size={20} color="#F8FAFC" />
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: '#7C9A92' }}>Phone</p>
                      <p className="font-medium" style={{ color: '#1F2933' }}>{personalInfo.phone}</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: '#7C9A92' }}>
                      <MapPin size={20} color="#F8FAFC" />
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: '#7C9A92' }}>Location</p>
                      <p className="font-medium" style={{ color: '#1F2933' }}>{personalInfo.location}</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#1F2933', fontFamily: 'Merriweather, serif' }}>
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    style={{ borderColor: '#7C9A92' }}
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    style={{ borderColor: '#7C9A92' }}
                  />
                </div>
                
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                    style={{ borderColor: '#7C9A92' }}
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full"
                    style={{ borderColor: '#7C9A92' }}
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 text-base font-medium rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#7C9A92', color: '#F8FAFC' }}
                >
                  <Send size={18} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
