"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, TrendingUp, AlertCircle, Target, Globe, BookOpen } from "lucide-react"

export function AboutSection() {
  const stats = [
    {
      icon: AlertCircle,
      number: "4.1B",
      label: "Records Breached in 2023",
      description: "Personal data exposed globally",
    },
    {
      icon: TrendingUp,
      number: "300%",
      label: "Increase in Cyber Attacks",
      description: "Since the pandemic began",
    },
    {
      icon: Users,
      number: "95%",
      label: "Human Error Factor",
      description: "Of successful cyber attacks",
    },
  ]

  const examples = [
    {
      title: "Banking Fraud",
      description:
        "A senior citizen received a fake SMS claiming his bank account would be blocked. He clicked the link and lost ₹2.5 lakhs within minutes.",
      impact: "Financial Loss",
    },
    {
      title: "Identity Theft",
      description:
        "A professional shared personal details on a fake job portal. Criminals used her identity to take loans worth ₹8 lakhs.",
      impact: "Credit Damage",
    },
    {
      title: "Business Email Compromise",
      description:
        "A small business owner received a fake email from a 'supplier' asking to change payment details. The company lost ₹15 lakhs.",
      impact: "Business Impact",
    },
  ]

  return (
    <SectionWrapper id="about" className="bg-slate-900">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6">About Cyber Awareness</h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
            Understanding cyber security is no longer optional—it's essential for everyone in our digital world.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="mb-16"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
      >
        <Card className="bg-slate-800 border-2 border-cyan-400 backdrop-blur-sm relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
                "linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)",
                "linear-gradient(45deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
              ],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <CardContent className="p-8 relative z-10">
            <div className="text-center">
              <motion.div
                className="mb-6 relative"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                viewport={{ once: true }}
              >
                <div className="relative w-20 h-20 mx-auto">
                  {/* Outer rotating ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />

                  {/* Inner shield layers */}
                  <motion.div
                    className="absolute inset-2 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full backdrop-blur-sm"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />

                  {/* Central shield with modern design */}
                  <motion.div
                    className="absolute inset-3 flex items-center justify-center"
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <Shield className="h-10 w-10 text-cyan-400" />
                  </motion.div>

                  {/* Orbiting dots */}
                  {[0, 120, 240].map((angle, index) => (
                    <motion.div
                      key={index}
                      className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                      style={{
                        top: "50%",
                        left: "50%",
                        transformOrigin: "0 0",
                      }}
                      animate={{
                        rotate: 360,
                        x: Math.cos((angle * Math.PI) / 180) * 35,
                        y: Math.sin((angle * Math.PI) / 180) * 35,
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                        delay: index * 0.5,
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.h3
                className="text-3xl font-bold text-cyan-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                About Cyber Shield 360
              </motion.h3>
              <motion.p
                className="text-xl text-white leading-relaxed max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Cyber Shield 360 is a comprehensive platform for cyber security education, providing the knowledge and
                tools needed to stay safe in an increasingly connected world.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {[
                  { icon: Target, title: "Comprehensive", desc: "360-degree approach to cyber security education" },
                  { icon: Globe, title: "Connected World", desc: "Addressing modern digital connectivity challenges" },
                  { icon: BookOpen, title: "Educational", desc: "Knowledge and tools for everyone" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-3">
                      <item.icon className="h-8 w-8 text-cyan-400" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-100">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* What is Cyber Security */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Card className="bg-slate-800 border-2 border-cyan-500 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Shield className="h-8 w-8 text-cyan-400 mr-4" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white">What is Cyber Security?</h3>
            </div>
            <p className="text-lg text-gray-100 leading-relaxed mb-6">
              Cyber security is the practice of protecting digital information, devices, and networks from unauthorized
              access, theft, or damage. It encompasses everything from securing your personal smartphone to protecting
              critical infrastructure that powers our cities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Protection", desc: "Safeguarding digital assets and personal information" },
                { icon: Users, title: "Awareness", desc: "Understanding threats and safe practices" },
                { icon: TrendingUp, title: "Prevention", desc: "Proactive measures to avoid cyber attacks" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-3"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  >
                    <item.icon className="h-8 w-8 text-cyan-400" />
                  </motion.div>
                  <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-100">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Why Important */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">Why Cyber Security Matters in Daily Life</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <Card className="bg-slate-800 border-2 border-cyan-500 hover:border-cyan-400 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <stat.icon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  </motion.div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-cyan-300 mb-2">{stat.label}</div>
                  <p className="text-sm text-gray-100">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <p className="text-lg text-gray-100 text-center max-w-4xl mx-auto">
          Every day, millions of people fall victim to cyber crimes. From financial fraud to identity theft, the
          consequences can be devastating. But with proper awareness and simple precautions, most attacks can be
          prevented.
        </p>
      </motion.div>

      {/* Real-life Examples */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">Real-Life Cyber Crime Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5, rotateX: 5 }}
            >
              <Card className="bg-slate-800 border-2 border-red-500 hover:border-red-400 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-white">{example.title}</h4>
                    <motion.span
                      className="text-xs bg-red-600 text-white px-2 py-1 rounded-full"
                      animate={{ pulse: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      {example.impact}
                    </motion.span>
                  </div>
                  <p className="text-gray-100 text-sm leading-relaxed">{example.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-yellow-300 font-semibold">
            These are real cases from India. Don't let this happen to you or your loved ones.
          </p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
