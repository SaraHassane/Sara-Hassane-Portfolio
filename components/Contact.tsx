'use client';
import { useState } from 'react';
import FadeInView from "./FadeInView";
import { MagicButtonContact } from "./ui/MagicButtonContact";

const Contact = () => {
  // State for form data and submission status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Validation function
  const validateForm = () => {
    let formErrors = {
      name: '',
      email: '',
      message: ''
    };
    let valid = true;

    // Check if name is not empty
    if (!formData.name.trim()) {
      formErrors.name = 'Name is required';
      valid = false;
    }

    // Check if email is a valid email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      formErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    // Check if message is not empty
    if (!formData.message.trim()) {
      formErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return; // Don't submit if validation fails
    }

    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitError(false);

    try {
      // Replace with your actual Web3Forms API key
      const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: apiKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: 'Contact Form'
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' });
        setSubmitError(false);
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('Something went wrong. Please try again later.');
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);

      // Clear success/error message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }
  };

  return (
    <FadeInView direction="up" delay={200} className="pointer-events-none">
      <section id="contact" className="relative py-20 w-full pointer-events-none scroll-mt-20">
        <div className="h-[1px] w-[95%] mb-10 bg-[linear-gradient(to_right,transparent,_#c084fc,_#22d3ee,_transparent)]" />

        <div className="xl:w-1/2 px-6 relative text-white mb-8 text-5xl font-stretch-ultra-expanded flex justify-baseline pointer-events-none">
          <h1>Contact Me</h1>
        </div>

        <div className="flex flex-col xl:flex-row justify-center items-center xl:items-center gap-12 px-6 text-white">
          <div className="xl:w-1/2 space-y-4 ">
            <span className='text-transparent text-4xl font-bold bg-clip-text bg-gradient-to-r from-cyan-500 to-white'> Let's Chat!</span>
            <p className="text-small font-medium opacity-80 mt-3">
              Have an idea, question, or something exciting we could build together? Drop it here—I’m all ears and will get back to you in no time.
            </p>
          </div>

          <div className="bg-black/20 rounded-2xl p-6 text-white shadow-md w-full sm:w-[500px] pointer-events-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Your name"
                  required
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="you@example.com"
                  required
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-2 rounded-md bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Your message"
                  required
                />
                {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
              </div>

              <div className="pointer-events-auto flex justify-center">
                <MagicButtonContact
                  title={isSubmitting ? 'Sending...' : 'Send Message'}
                  icon=""
                  position=""
                  handleClick={handleSubmit}
                  disabled={isSubmitting}
                />
              </div>

              {submitMessage && (
                <div className={`mt-4 ${submitError ? 'text-red-600' : 'text-white'}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

        </div>
      </section>
    </FadeInView>
  );
};

export default Contact;
