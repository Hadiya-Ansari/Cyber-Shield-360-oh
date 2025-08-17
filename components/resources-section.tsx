"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Star, Users, Shield, Lock, Smartphone, CheckCircle } from "lucide-react"

export function ResourcesSection() {
  const pdfGuides = [
    {
      title: "Cyber Security Check List",
      description: "Complete checklist to ensure your digital security is up to standard with actionable items.",
      url: "https://drive.google.com/file/d/1pxyYq3PyMDQmUupzXwPjO-8paZ3QoDR-/view?usp=drivesdk",
      icon: CheckCircle,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
    },
    {
      title: "Password Security Guide",
      description: "Essential guide to creating and managing strong passwords for maximum security protection.",
      url: "https://drive.google.com/file/d/1Lw0G5NvrGIVCvl0k_tEx2dxy2INjEuDP/view?usp=drivesdk",
      icon: Lock,
      color: "from-red-500/20 to-pink-500/20",
      borderColor: "border-red-500/30",
    },
    {
      title: "Social Media Privacy Setting",
      description: "Comprehensive guide to securing your social media accounts and protecting your privacy online.",
      url: "https://drive.google.com/file/d/1DGZYmu2M_pcIMAo4IF8umsOHD211zvSb/view?usp=drivesdk",
      icon: Smartphone,
      color: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-500/30",
    },
    {
      title: "Family Internet Safety Guide",
      description: "Essential safety practices for families to protect children and adults while browsing online.",
      url: "https://drive.google.com/file/d/1iXt6mHxuo6P2k5ISn0mFhIPUWd-TSHV0/view?usp=drivesdk",
      icon: Users,
      color: "from-purple-500/20 to-blue-500/20",
      borderColor: "border-purple-500/30",
    },
    {
      title: "Business Security Assessment",
      description:
        "Comprehensive assessment guide for businesses to evaluate and improve their cyber security posture.",
      url: "https://drive.google.com/file/d/1Tu4gMhBqoilfT3J3Oja70-MordAc_A50/view?usp=drivesdk",
      icon: Shield,
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30",
    },
  ]

  const handleDownload = (guideName: string, url?: string) => {
    if (url) {
      // Convert Google Drive view link to download link
      const fileId = url.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1]
      if (fileId) {
        const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`
        window.open(downloadUrl, "_blank")
      } else {
        window.open(url, "_blank")
      }
    }
  }

  return (
    <SectionWrapper id="resources" className="bg-slate-900/50">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6">Resources & Downloads</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Free educational materials to help you and your community stay safe online. Download, share, and spread
            awareness.
          </p>
        </motion.div>
      </div>

      {/* PDF Guides Section */}
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Free PDF Security Guides</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive guides covering essential cyber security topics. Perfect for individuals, families, and
            organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pdfGuides.map((guide, index) => (
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
              whileHover={{ y: -5, scale: 1.02, rotateY: 5 }}
            >
              <Card
                className={`bg-gradient-to-br ${guide.color} ${guide.borderColor} border backdrop-blur-sm h-full relative overflow-hidden`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"
                  animate={{ x: [-100, 300] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center mb-4">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center mr-4"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <guide.icon className="h-6 w-6 text-cyan-400" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white">{guide.title}</h4>
                      <div className="flex items-center space-x-4 text-xs text-gray-400 mt-1">
                        <span className="flex items-center">
                          <FileText className="h-3 w-3 mr-1" />
                          PDF Guide
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6">{guide.description}</p>

                  <Button
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white transition-all duration-300"
                    onClick={() => handleDownload(guide.title, guide.url)}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Usage Guidelines */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Card className="bg-gradient-to-r from-green-900/30 to-teal-900/30 border-green-500/40 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-500/10"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <CardContent className="p-8 relative z-10">
            <div className="text-center">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Star className="h-8 w-8 text-green-400 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-xl font-bold text-green-300 mb-4">Free to Use & Share</h3>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                All resources are completely free for personal, educational, and commercial use. Share them with your
                family, colleagues, and community to help create a safer digital environment for everyone.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <motion.div className="flex items-center" whileHover={{ scale: 1.1, color: "#22d3ee" }}>
                  <Users className="h-4 w-4 mr-2" />
                  Share with others
                </motion.div>
                <motion.div className="flex items-center" whileHover={{ scale: 1.1, color: "#22d3ee" }}>
                  <FileText className="h-4 w-4 mr-2" />
                  Print for distribution
                </motion.div>
                <motion.div className="flex items-center" whileHover={{ scale: 1.1, color: "#22d3ee" }}>
                  <Shield className="h-4 w-4 mr-2" />
                  Use in training programs
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SectionWrapper>
  )
}
