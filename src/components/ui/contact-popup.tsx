import { useState } from "react";
import { X, Send, User, Mail, MessageSquare, Phone, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

const ContactPopup = ({
  isOpen,
  onClose,
  title = "Get In Touch",
  subtitle = "We're here to help you on your mental health journey",
}: ContactPopupProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const errors = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
    
    let isValid = true;
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }
    
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://backend.jikubaliafrica.org/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        if (data && typeof data === 'object') {
          const serverErrors = Object.values(data).flat().join(', ');
          throw new Error(`Validation error: ${serverErrors}`);
        }
        throw new Error(`Server responded with status: ${response.status}`);
      }

      console.log("Form submitted successfully:", data);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(error instanceof Error ? error.message : "An unknown error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: ""
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in"
      ></div>

      <div className="relative bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-xl animate-popup">
        <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <h2 className="font-heading text-2xl font-bold mb-2">{title}</h2>
          <p className="opacity-90">{subtitle}</p>
        </div>

        {isSubmitted && (
          <div className="bg-green-50 text-green-800 p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="font-medium">Message Sent Successfully!</span>
            </div>
            <p className="text-sm">We'll get back to you soon.</p>
          </div>
        )}

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {submitError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                <p className="font-medium">Error: {submitError}</p>
                <p className="text-sm mt-1">Please try again or contact us directly.</p>
              </div>
            )}
            
            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-10 text-black"
                  aria-invalid={!!formErrors.name}
                />
                {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10 text-black"
                  aria-invalid={!!formErrors.email}
                />
                {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number (Optional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="pl-10 text-black"
                />
              </div>

              <div className="relative">
                <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={handleChange}
                  className="pl-10 text-black"
                  aria-invalid={!!formErrors.subject}
                />
                {formErrors.subject && <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>}
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Textarea
                  name="message"
                  placeholder="How can we help you? Share your message here... *"
                  value={formData.message}
                  onChange={handleChange}
                  className="pl-10 min-h-[100px] resize-none text-black"
                  aria-invalid={!!formErrors.message}
                  required
                />
                {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                onClick={onClose}
                className="flex-1 bg-black text-white hover:bg-gray-900"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                variant="warm" 
                className="flex-1 group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </div>
          </form>
        ) : (
          <div className="p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold mb-2 text-green-600">Thank You!</h3>
            <p className="text-gray-600">Your message has been sent successfully. We'll get back to you soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPopup;
