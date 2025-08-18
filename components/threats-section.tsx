"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Users2, Briefcase, ShoppingCart, AlertTriangle, Lock } from "lucide-react"

export function ThreatsSection() {
  const threats = [
    {
      icon: Lock,
      title: "Password Security Awareness",
      subtitle: "Strong Password Practices",
      description:
        "Understanding the importance of creating and managing strong, unique passwords to protect your digital accounts from unauthorized access.",
      examples: [
        "Using weak passwords like '123456' or 'password'",
        "Reusing the same password across multiple accounts",
        "Sharing passwords through unsecured channels",
      ],
      color: "from-red-500/20 to-pink-500/20",
      borderColor: "border-red-500/30 hover:border-red-400/50",
      iconColor: "text-red-400",
    },
    {
      icon: Mail,
      title: "Phishing and Social Engineering Awareness",
      subtitle: "Recognizing Deceptive Tactics",
      description:
        "Learning to identify and avoid phishing attempts and social engineering tactics used by cybercriminals to steal personal information.",
      examples: [
        "Suspicious emails requesting personal information",
        "Fake phone calls impersonating trusted organizations",
        "Urgent messages creating false sense of emergency",
      ],
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30 hover:border-orange-400/50",
      iconColor: "text-orange-400",
    },
    {
      icon: Users2,
      title: "Social Media Privacy Awareness",
      subtitle: "Protecting Your Digital Identity",
      description:
        "Understanding privacy settings and safe practices on social media platforms to protect personal information from misuse.",
      examples: [
        "Oversharing personal information publicly",
        "Accepting friend requests from strangers",
        "Using weak privacy settings on social accounts",
      ],
      color: "from-purple-500/20 to-blue-500/20",
      borderColor: "border-purple-500/30 hover:border-purple-400/50",
      iconColor: "text-purple-400",
    },
    {
      icon: Briefcase,
      title: "Public Wifi and Device Security Awareness",
      subtitle: "Safe Connection Practices",
      description:
        "Learning secure practices when using public Wi-Fi networks and maintaining device security to prevent data breaches.",
      examples: [
        "Connecting to unsecured public Wi-Fi networks",
        "Not using VPN on public connections",
        "Leaving devices unlocked in public spaces",
      ],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30 hover:border-blue-400/50",
      iconColor: "text-blue-400",
    },
    {
      icon: ShoppingCart,
      title: "CyberBullying And Online Harassment Awareness",
      subtitle: "Digital Safety & Respect",
      description:
        "Understanding cyberbullying, online harassment, and learning how to protect yourself and others in digital spaces.",
      examples: [
        "Receiving threatening or abusive messages online",
        "Being targeted by coordinated harassment campaigns",
        "Experiencing identity theft or impersonation",
      ],
      color: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-500/30 hover:border-green-400/50",
      iconColor: "text-green-400",
    },
  ]

  return (
    <SectionWrapper id="threats">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6">Awareness Topics</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay informed. Understanding these awareness topics is crucial for protecting yourself in the digital world.
          </p>
        </motion.div>
      </div>

      {/* Warning Banner */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border-yellow-500/40">
          <CardContent className="p-6">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="h-8 w-8 text-yellow-400 mr-3" />
              <h3 className="text-xl font-bold text-yellow-300">Stay Alert!</h3>
            </div>
            <p className="text-center text-gray-300">
              Cyber criminals are constantly evolving their tactics. What seems legitimate today might be a
              sophisticated scam. When in doubt, verify independently before taking any action.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Threats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {threats.map((threat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="h-full"
          >
            <Card
              className={`bg-gradient-to-br ${threat.color} ${threat.borderColor} transition-all duration-300 h-full backdrop-blur-sm`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center mr-4`}>
                    <threat.icon className={`h-6 w-6 ${threat.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{threat.title}</h3>
                    <p className="text-sm text-gray-400">{threat.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">{threat.description}</p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-cyan-300">Common Examples:</h4>
                  <ul className="space-y-1">
                    {threat.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-xs text-gray-400 flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Card className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-cyan-500/40">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-cyan-300 mb-4">Remember: Prevention is Better Than Cure</h3>
            <p className="text-lg text-gray-300 mb-6">
              Most cyber attacks can be prevented with awareness and simple precautions. Learn the safe practices in the
              next section to protect yourself and your loved ones.
            </p>
            <motion.a
              href="#practices"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn Safe Practices →
            </motion.a>
          </CardContent>
        </Card>
      </motion.div>
    </SectionWrapper>
  )
}
