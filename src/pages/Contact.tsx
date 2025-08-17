import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import contactImage from "@/assets/contact-image.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    urgency: "normal"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Crisis Hotline",
      info: "+254 700 000 000",
      description: "24/7 emergency support",
      color: "from-red-500 to-red-600"
    },
    {
      icon: MessageCircle,
      title: "General Support",
      info: "+254 700 111 111",
      description: "Monday - Friday, 8AM - 6PM",
      color: "from-sky-blue to-sky-blue-dark"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@jikubaliafrica.org",
      description: "We respond within 24 hours",
      color: "from-brand-pink to-brand-pink-dark"
    },
    {
      icon: MapPin,
      title: "Visit Our Center",
      info: "Nairobi, Kenya",
      description: "Multiple locations available",
      color: "from-sunshine-yellow to-sunshine-yellow-dark"
    }
  ];

  const offices = [
    {
      city: "Nairobi",
      address: "Kimathi Street, CBD Building, 3rd Floor",
      phone: "+254 700 111 111",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-1PM"
    },
    {
      city: "Mombasa",
      address: "Digo Road, Coast General Building, 2nd Floor",
      phone: "+254 700 222 222",
      hours: "Mon-Fri: 8AM-5PM, Sat: 9AM-12PM"
    },
    {
      city: "Kisumu",
      address: "Oginga Odinga Street, Lakeside Plaza, 1st Floor",
      phone: "+254 700 333 333",
      hours: "Mon-Fri: 8AM-5PM"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-sky-blue-light/20 to-brand-pink-light/20">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
                <span className="text-sky-blue">Get</span> <span className="text-brand-pink">Support</span>
              </h1>
              <p className="text-lg lg:text-xl text-foreground/80 mb-8 leading-relaxed">
                We're here for you 24/7. Whether you need immediate crisis support or want to learn 
                more about our programs, our caring team is ready to help.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-red-500">
                  <Phone className="w-5 h-5 mr-2" />
                  <span className="font-bold">Crisis: +254 700 000 000</span>
                </div>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-foreground/60">Always Available</span>
              </div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <img 
                src={contactImage} 
                alt="Mental health professionals discussing support"
                className="rounded-2xl shadow-warm hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-spacing">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
              How to <span className="text-brand-pink">Reach Us</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Multiple ways to connect with our team, from crisis intervention to general inquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.title}
                className="animate-fade-up hover-lift overflow-hidden border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className={`bg-gradient-to-br ${method.color} text-white text-center`}>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 text-center">
                  <p className="font-bold text-lg mb-2">{method.info}</p>
                  <p className="text-foreground/60 text-sm">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Locations */}
      <section className="section-spacing bg-muted/50">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in">
              <h3 className="font-heading text-3xl font-bold mb-6 text-sky-blue">Send Us a Message</h3>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number</label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Urgency Level</label>
                        <select
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="normal">Normal</option>
                          <option value="urgent">Urgent</option>
                          <option value="crisis">Crisis</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full"
                      />
                    </div>

                    <Button type="submit" variant="warm" size="lg" className="w-full">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Locations */}
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-heading text-3xl font-bold mb-6 text-brand-pink">Office Locations</h3>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={office.city} className="hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-sky-blue to-brand-pink rounded-full flex items-center justify-center text-white font-bold">
                          {office.city[0]}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-heading font-bold text-xl mb-2 text-sky-blue">{office.city}</h4>
                          <div className="space-y-2 text-foreground/80">
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2 text-brand-pink" />
                              {office.address}
                            </div>
                            <div className="flex items-center">
                              <Phone className="w-4 h-4 mr-2 text-brand-pink" />
                              {office.phone}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2 text-brand-pink" />
                              {office.hours}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Resources */}
      <section className="section-spacing bg-gradient-to-br from-red-500 to-red-600 text-white">
        <div className="container-padding max-w-6xl mx-auto text-center">
          <div className="animate-fade-up">
            <Heart className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">
              In Crisis? We're Here Right Now
            </h2>
            <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              If you're experiencing a mental health emergency or having thoughts of self-harm, 
              please reach out immediately. You are not alone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 border-white text-white hover:bg-white hover:text-red-600"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Crisis Hotline: +254 700 000 000
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 border-white text-white hover:bg-white hover:text-red-600"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Text Crisis Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;