"use client"

import { motion } from "framer-motion"
import { Shield, Phone, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 bg-slate-950/90 border-t border-cyan-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Cyber Shield 360
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering individuals and organizations with comprehensive cyber security awareness and protection
              strategies.
            </p>
          </motion.div>

          {/* Emergency Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">Emergency Contacts</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>Cyber Crime Helpline: 1930</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <ExternalLink className="h-4 w-4" />
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  cybercrime.gov.in
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#threats" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                Common Threats
              </a>
              <a href="#practices" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                Safe Practices
              </a>
              <a href="#resources" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                Resources & Downloads
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>&copy; 2024 Cyber Shield 360. All rights reserved. Stay safe, stay protected.</p>
        </motion.div>
      </div>
    </footer>
  )
}
