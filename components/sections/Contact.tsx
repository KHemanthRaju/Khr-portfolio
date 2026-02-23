"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { socialLinks, contactInfo } from "@/lib/constants/social";
import { Send, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert("Message sent! Thank you for reaching out.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-container bg-darkGray/30 dark:bg-darkGray/30 light:bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-4">
          <span className="gradient-text">Get In Touch</span>
        </h2>
        <p className="text-center text-slate dark:text-slate light:text-gray-600 mb-16">
          Let's discuss opportunities or collaborate on projects
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate dark:text-slate light:text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-lightNavy dark:bg-lightNavy light:bg-white border border-lightNavy dark:border-lightNavy light:border-gray-300 rounded-lg focus:outline-none focus:border-cyan dark:focus:border-cyan light:focus:border-blue-500 text-white dark:text-white light:text-gray-900"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate dark:text-slate light:text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-lightNavy dark:bg-lightNavy light:bg-white border border-lightNavy dark:border-lightNavy light:border-gray-300 rounded-lg focus:outline-none focus:border-cyan dark:focus:border-cyan light:focus:border-blue-500 text-white dark:text-white light:text-gray-900"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate dark:text-slate light:text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-lightNavy dark:bg-lightNavy light:bg-white border border-lightNavy dark:border-lightNavy light:border-gray-300 rounded-lg focus:outline-none focus:border-cyan dark:focus:border-cyan light:focus:border-blue-500 text-white dark:text-white light:text-gray-900"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate dark:text-slate light:text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 bg-lightNavy dark:bg-lightNavy light:bg-white border border-lightNavy dark:border-lightNavy light:border-gray-300 rounded-lg focus:outline-none focus:border-cyan dark:focus:border-cyan light:focus:border-blue-500 text-white dark:text-white light:text-gray-900 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-slate dark:text-slate light:text-gray-600 mb-1">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-cyan dark:text-cyan light:text-blue-600 hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-slate dark:text-slate light:text-gray-600 mb-1">Location</p>
                  <p className="text-white dark:text-white light:text-gray-900">{contactInfo.location}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Connect on Social</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg bg-lightNavy dark:bg-lightNavy light:bg-gray-50 hover:bg-cyan/10 light:hover:bg-blue-50 hover:border-cyan light:hover:border-blue-400 border border-transparent transition-all duration-200 group"
                      >
                        <Icon className="w-5 h-5 text-cyan dark:text-cyan light:text-blue-600 group-hover:scale-110 transition-transform" />
                        <div className="flex-1">
                          <p className="text-white dark:text-white light:text-gray-900 font-medium">{link.name}</p>
                          <p className="text-sm text-slate dark:text-slate light:text-gray-600">{link.username}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
