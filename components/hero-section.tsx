"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  AlertTriangle,
  Phone,
  Lock,
  Eye,
  Zap,
  Globe,
  Wifi,
  Database,
  Users,
  FileText,
  Award,
} from "lucide-react"

export function HeroSection() {
  const securityHighlights = [
    {
      icon: Shield,
      title: "Complete Protection",
      description: "360-degree security awareness for all digital threats",
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30 hover:border-cyan-400/50",
      iconColor: "text-cyan-400",
    },
    {
      icon: Users,
      title: "Family Safety",
      description: "Protect your loved ones with comprehensive guides",
      color: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/30 hover:border-blue-400/50",
      iconColor: "text-blue-400",
    },
    {
      icon: FileText,
      title: "Expert Resources",
      description: "Professional guides and checklists for security",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30 hover:border-purple-400/50",
      iconColor: "text-purple-400",
    },
    {
      icon: Award,
      title: "Trusted Platform",
      description: "Government-backed cyber security awareness",
      color: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-500/30 hover:border-green-400/50",
      iconColor: "text-green-400",
    },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6 lg:mb-8 relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
            >
              <div className="relative w-20 h-20 lg:w-24 lg:h-24 mx-auto lg:mx-0">
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
                  <Shield className="h-10 w-10 lg:h-12 lg:w-12 text-cyan-400" />
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

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Cyber Shield 360
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-cyan-300 mb-4 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Your Digital Guardian Against Cyber Threats
            </motion.p>

            <motion.p
              className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              In today's digital world, cyber security isn't optional—it's essential. Protect yourself, your family, and
              your business with our comprehensive cyber awareness platform.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(239, 68, 68, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 text-lg shadow-lg shadow-red-500/25 relative overflow-hidden"
                  asChild
                >
                  <a href="#helpline">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      animate={{ x: [-100, 300] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    />
                    <Phone className="mr-2 h-5 w-5 relative z-10" />
                    <span className="relative z-10">Report Fraud Now</span>
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 211, 238, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 px-8 py-3 text-lg bg-transparent relative overflow-hidden"
                  asChild
                >
                  <a href="#about">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-transparent"
                      animate={{ x: [-100, 300] }}
                      transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    />
                    <AlertTriangle className="mr-2 h-5 w-5 relative z-10" />
                    <span className="relative z-10">Learn More</span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-4 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {[
                { value: "95%", label: "Attacks Preventable", icon: Shield },
                { value: "24/7", label: "Protection", icon: Eye },
                { value: "1930", label: "Helpline", icon: Phone },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-slate-800 rounded-lg border border-cyan-500"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                  />
                  <div className="relative p-3">
                    <stat.icon className="h-4 w-4 text-cyan-400 mx-auto lg:mx-0 mb-1" />
                    <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                    <div className="text-sm text-gray-100">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Animated Cyber Security Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative w-full max-w-2xl mx-auto h-96 flex items-center justify-center">
              <motion.div
                className="relative z-10 bg-slate-800 rounded-full p-8 backdrop-blur-sm border-2 border-cyan-400"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0],
                  boxShadow: [
                    "0 0 20px rgba(34, 211, 238, 0.8)",
                    "0 0 40px rgba(34, 211, 238, 1)",
                    "0 0 20px rgba(34, 211, 238, 0.8)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Shield className="h-32 w-32 text-cyan-400 mx-auto" />

                {/* Inner rotating elements */}
                <motion.div
                  className="absolute inset-4 border-2 border-cyan-400 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              </motion.div>

              {[
                { icon: Lock, delay: 0, radius: 100, color: "text-blue-400" },
                { icon: Eye, delay: 1, radius: 100, color: "text-purple-400" },
                { icon: Zap, delay: 2, radius: 100, color: "text-green-400" },
                { icon: Globe, delay: 3, radius: 120, color: "text-yellow-400" },
                { icon: Wifi, delay: 4, radius: 120, color: "text-pink-400" },
                { icon: Database, delay: 5, radius: 120, color: "text-orange-400" },
              ].map(({ icon: Icon, delay, radius, color }, index) => (
                <motion.div
                  key={index}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8 + index,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                    delay: delay,
                  }}
                >
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-slate-800 border-2 border-cyan-400 flex items-center justify-center ${color}`}
                    style={{
                      transform: `translateX(${radius}px)`,
                      boxShadow: `0 0 25px rgba(34, 211, 238, 1), 0 0 50px rgba(34, 211, 238, 0.8)`,
                    }}
                    whileHover={{
                      scale: 1.4,
                      rotate: 180,
                      boxShadow: "0 0 40px rgba(34, 211, 238, 1), 0 0 80px rgba(34, 211, 238, 1)",
                    }}
                    animate={{
                      y: [0, -15, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      y: { duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 },
                      scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.4 },
                    }}
                  >
                    <Icon className="h-8 w-8" />
                  </motion.div>
                </motion.div>
              ))}

              {[1, 2, 3, 4].map((ring) => (
                <motion.div
                  key={ring}
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border rounded-full ${
                    ring % 2 === 0 ? "border-cyan-400/20" : "border-blue-400/20"
                  }`}
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{
                    scale: [0, 2.5, 4],
                    opacity: [1, 0.3, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: ring * 0.7,
                    ease: "easeOut",
                  }}
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                />
              ))}

              {Array.from({ length: 8 }).map((_, index) => (
                <motion.div
                  key={`particle-${index}`}
                  className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
                  style={{
                    left: `${20 + index * 10}%`,
                    top: `${30 + index * 8}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    x: [-10, 10, -10],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3 + index * 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              Why Choose Cyber Shield 360?
            </motion.h3>
            <motion.p
              className="text-lg text-gray-100 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.6 }}
            >
              Your comprehensive defense against the evolving landscape of cyber threats
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 2.4 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="h-full"
              >
                <Card className={`bg-slate-800 border-2 ${highlight.borderColor} transition-all duration-300 h-full`}>
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center mx-auto mb-4`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <highlight.icon className={`h-8 w-8 ${highlight.iconColor}`} />
                    </motion.div>

                    <h4 className="text-lg font-bold text-white mb-3">{highlight.title}</h4>
                    <p className="text-gray-100 text-sm leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center relative overflow-hidden"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            whileHover={{ scale: 1.2, borderColor: "rgba(34, 211, 238, 0.8)" }}
          >
            <motion.div
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
              animate={{
                opacity: [1, 0, 1],
                y: [0, 15, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
              animate={{ y: [-40, 40] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
