"use client"

import type React from "react"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert(`Thank you, ${formData.name}! Your message has been received. We'll get back to you within 24 hours.`)

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "support@cybershield360.in",
      description: "Get answers to your questions within 24 hours",
      color: "text-blue-400",
    },
    {
      icon: Phone,
      title: "Emergency Helpline",
      details: "1930 (Toll-free)",
      description: "24/7 cyber crime reporting and assistance",
      color: "text-red-400",
    },
    {
      icon: MapPin,
      title: "Coverage",
      details: "Pan-India Service",
      description: "Supporting all states and union territories",
      color: "text-green-400",
    },
  ]

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#", color: "hover:text-blue-500" },
    { icon: Twitter, name: "Twitter", url: "#", color: "hover:text-sky-400" },
    { icon: Instagram, name: "Instagram", url: "#", color: "hover:text-pink-500" },
    { icon: Linkedin, name: "LinkedIn", url: "#", color: "hover:text-blue-600" },
    { icon: Youtube, name: "YouTube", url: "#", color: "hover:text-red-500" },
  ]

  const faqTopics = [
    "How to report a cyber crime?",
    "What to do if I've been scammed?",
    "How to secure my social media accounts?",
    "Is my personal information safe online?",
    "How to recognize phishing attempts?",
    "What is two-factor authentication?",
  ]

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6">Contact Us</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Have questions about cyber security? Need help with a specific issue? We're here to help you stay safe
            online.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-slate-800/30 border-cyan-500/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-slate-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-slate-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400"
                    placeholder="What's your question about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 resize-none"
                    placeholder="Please describe your question or concern in detail..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>

          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/20 border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-slate-700/50 flex items-center justify-center mr-4">
                      <info.icon className={`h-6 w-6 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{info.title}</h4>
                      <p className="text-cyan-300 font-medium">{info.details}</p>
                      <p className="text-sm text-gray-400">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Social Media Links */}
          <Card className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-cyan-500/40">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <p className="text-gray-300 text-sm mb-4">Stay updated with the latest cyber security news and tips</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className={`w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center text-gray-400 transition-colors duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* FAQ Topics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Card className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-500/40">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-purple-300 mb-6 text-center">Frequently Asked Questions</h3>
            <p className="text-gray-300 text-center mb-8">
              Common topics our community asks about. Click any topic to get started with your question.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {faqTopics.map((topic, index) => (
                <motion.button
                  key={index}
                  className="text-left p-4 bg-slate-800/30 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 text-gray-300 hover:text-white"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      subject: topic,
                    }))
                    document.getElementById("subject")?.focus()
                  }}
                >
                  <span className="text-sm">{topic}</span>
                </motion.button>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SectionWrapper>
  )
}
