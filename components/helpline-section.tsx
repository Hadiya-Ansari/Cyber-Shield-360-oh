"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, ExternalLink, Clock, MapPin, AlertTriangle, FileText, Users } from "lucide-react"

export function HelplineSection() {
  const emergencyContacts = [
    {
      title: "National Cyber Crime Helpline",
      number: "1930",
      description: "24/7 helpline for reporting cyber crimes and getting immediate assistance",
      availability: "Available 24/7",
      languages: "Hindi, English, and regional languages",
      icon: Phone,
      color: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-500/40",
    },
    {
      title: "Cyber Crime Reporting Portal",
      number: "cybercrime.gov.in",
      description: "Official government portal to file online complaints for cyber crimes",
      availability: "Online 24/7",
      languages: "Multiple Indian languages supported",
      icon: ExternalLink,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/40",
    },
  ]

  const reportingSteps = [
    {
      step: 1,
      title: "Immediate Action",
      description: "If you're currently being scammed, hang up immediately and don't share any more information.",
      icon: AlertTriangle,
      color: "text-red-400",
    },
    {
      step: 2,
      title: "Gather Evidence",
      description: "Take screenshots, save messages, note down phone numbers, and collect any relevant information.",
      icon: FileText,
      color: "text-yellow-400",
    },
    {
      step: 3,
      title: "Report Immediately",
      description: "Call 1930 or visit cybercrime.gov.in to file a complaint. Time is crucial in cyber crimes.",
      icon: Phone,
      color: "text-green-400",
    },
    {
      step: 4,
      title: "Follow Up",
      description: "Keep your complaint number safe and follow up regularly. Cooperate with investigating officers.",
      icon: Users,
      color: "text-blue-400",
    },
  ]

  const whenToReport = [
    "Received suspicious calls asking for bank details",
    "Lost money through online fraud or fake websites",
    "Identity theft or unauthorized use of personal information",
    "Fake job offers demanding money or personal details",
    "Blackmail or threats through social media or email",
    "Unauthorized transactions in bank accounts",
    "Fake investment schemes or lottery winnings",
    "Romance scams or fake dating profiles",
  ]

  return (
    <SectionWrapper id="helpline">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6">Report & Get Help</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Don't suffer in silence. Get immediate help and report cyber crimes to prevent others from becoming victims.
          </p>
        </motion.div>
      </div>

      {/* Emergency Contacts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {emergencyContacts.map((contact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card
              className={`bg-gradient-to-br ${contact.color} ${contact.borderColor} border backdrop-blur-sm h-full`}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-slate-800/50 flex items-center justify-center mr-6">
                    <contact.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{contact.title}</h3>
                    <p className="text-3xl font-bold text-cyan-300 mt-2">{contact.number}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{contact.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="h-4 w-4 mr-2" />
                    {contact.availability}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="h-4 w-4 mr-2" />
                    {contact.languages}
                  </div>
                </div>

                {index === 0 ? (
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3" asChild>
                    <a href="tel:1930">
                      <Phone className="mr-2 h-5 w-5" />
                      Call 1930 Now
                    </a>
                  </Button>
                ) : (
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3" asChild>
                    <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Visit Portal
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Reporting Steps */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">How to Report Cyber Crime</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reportingSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="bg-slate-800/30 border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-cyan-400">{step.step}</span>
                  </div>
                  <step.icon className={`h-8 w-8 ${step.color} mx-auto mb-4`} />
                  <h4 className="text-lg font-semibold text-white mb-3">{step.title}</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              {index < reportingSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-cyan-500/30 transform -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* When to Report */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Card className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border-yellow-500/40">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-yellow-300 mb-6 text-center">When Should You Report?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whenToReport.map((situation, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-slate-800/30 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AlertTriangle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">{situation}</span>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-lg text-yellow-300 font-semibold mb-4">
                Remember: Every report helps protect others from becoming victims!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white" asChild>
                  <a href="tel:1930">
                    <Phone className="mr-2 h-5 w-5" />
                    Emergency: Call 1930
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-950 bg-transparent"
                  asChild
                >
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    File Online Complaint
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SectionWrapper>
  )
}
