"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock, Shield, Eye, Wifi, UserCheck, CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"

export function SafePracticesSection() {
  const [activeTab, setActiveTab] = useState(0)

  const practices = [
    {
      icon: Lock,
      title: "Strong Password Creation",
      subtitle: "Your First Line of Defense",
      tips: [
        "Use at least 12 characters with mix of uppercase, lowercase, numbers, and symbols",
        "Avoid personal information like birthdays, names, or common words",
        "Use unique passwords for each account - never reuse passwords",
        "Consider using passphrases: 'Coffee@Morning#2024!' is stronger than 'P@ssw0rd1'",
      ],
      example: {
        weak: "password123",
        strong: "Tr@il$Hiking#2024!",
        explanation: "Strong password uses length, complexity, and uniqueness",
      },
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400",
    },
    {
      icon: Shield,
      title: "Two-Factor Authentication (2FA)",
      subtitle: "Double Your Security",
      tips: [
        "Enable 2FA on all important accounts (banking, email, social media)",
        "Use authenticator apps like Google Authenticator or Microsoft Authenticator",
        "Avoid SMS-based 2FA when possible - use app-based or hardware keys",
        "Keep backup codes in a secure location separate from your device",
      ],
      example: {
        weak: "Password only",
        strong: "Password + Phone/App verification",
        explanation: "Even if password is stolen, account remains protected",
      },
      color: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-500/30",
      iconColor: "text-green-400",
    },
    {
      icon: Eye,
      title: "Avoiding Suspicious Links",
      subtitle: "Think Before You Click",
      tips: [
        "Hover over links to see the actual URL before clicking",
        "Look for misspellings in domain names (e.g., 'gooogle.com' instead of 'google.com')",
        "Be suspicious of urgent messages asking for immediate action",
        "When in doubt, go directly to the official website instead of clicking links",
      ],
      example: {
        weak: "Clicking every link in emails",
        strong: "Verifying sender and URL first",
        explanation: "Most phishing attacks start with malicious links",
      },
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400",
    },
    {
      icon: Wifi,
      title: "Safe Use of Public Wi-Fi",
      subtitle: "Stay Secure on the Go",
      tips: [
        "Avoid accessing sensitive accounts (banking, email) on public Wi-Fi",
        "Use a VPN (Virtual Private Network) when connecting to public networks",
        "Turn off auto-connect to Wi-Fi networks on your devices",
        "Verify the network name with staff - criminals create fake hotspots",
      ],
      example: {
        weak: "Banking on cafe Wi-Fi",
        strong: "Using mobile data or VPN for sensitive tasks",
        explanation: "Public Wi-Fi can be monitored by criminals",
      },
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30",
      iconColor: "text-orange-400",
    },
    {
      icon: UserCheck,
      title: "Data Privacy Protection",
      subtitle: "Control Your Digital Footprint",
      tips: [
        "Review privacy settings on social media platforms regularly",
        "Be cautious about sharing personal information online",
        "Use privacy-focused browsers and search engines when possible",
        "Regularly review and delete unnecessary apps and accounts",
      ],
      example: {
        weak: "Sharing everything publicly",
        strong: "Limited sharing with privacy controls",
        explanation: "Less information available = lower risk of targeting",
      },
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30",
      iconColor: "text-cyan-400",
    },
  ]

  const quickChecklist = [
    "Update software and apps regularly",
    "Use reputable antivirus software",
    "Backup important data regularly",
    "Be skeptical of unsolicited contacts",
    "Verify before sharing personal information",
    "Monitor bank and credit card statements",
  ]

  const PracticeIcon = ({ icon, iconColor }) => {
    const IconComponent = icon
    return <IconComponent className={`h-8 w-8 ${iconColor}`} />
  }

  return (
    <SectionWrapper id="practices" className="bg-slate-900/50">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6">Safe Practices</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Simple steps that make a huge difference. Follow these practices to stay safe online.
          </p>
        </motion.div>
      </div>

      {/* Interactive Tabs */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {practices.map((practice, index) => (
            <Button
              key={index}
              variant={activeTab === index ? "default" : "outline"}
              className={`${
                activeTab === index ? "bg-cyan-500 text-white" : "border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10"
              } transition-all duration-300`}
              onClick={() => setActiveTab(index)}
            >
              <practice.icon className="h-4 w-4 mr-2" />
              {practice.title}
            </Button>
          ))}
        </div>

        {/* Active Practice Detail */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            className={`bg-gradient-to-br ${practices[activeTab].color} ${practices[activeTab].borderColor} border backdrop-blur-sm`}
          >
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-slate-800/50 flex items-center justify-center mr-6">
                  <PracticeIcon icon={practices[activeTab].icon} iconColor={practices[activeTab].iconColor} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{practices[activeTab].title}</h3>
                  <p className="text-gray-300">{practices[activeTab].subtitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cyan-300 mb-4">Best Practices:</h4>
                  <ul className="space-y-3">
                    {practices[activeTab].tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-cyan-300 mb-4">Example:</h4>
                  <div className="space-y-4">
                    <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <AlertCircle className="h-4 w-4 text-red-400 mr-2" />
                        <span className="text-sm font-semibold text-red-300">Weak:</span>
                      </div>
                      <p className="text-sm text-gray-300">{practices[activeTab].example.weak}</p>
                    </div>
                    <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        <span className="text-sm font-semibold text-green-300">Strong:</span>
                      </div>
                      <p className="text-sm text-gray-300">{practices[activeTab].example.strong}</p>
                    </div>
                    <p className="text-xs text-gray-400 italic">{practices[activeTab].example.explanation}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Security Checklist */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Card className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-cyan-500/40">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-cyan-300 mb-6 text-center">Daily Security Checklist</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickChecklist.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-slate-800/30 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SectionWrapper>
  )
}
