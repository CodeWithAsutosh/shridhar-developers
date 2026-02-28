import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Award, Building2, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const Founder = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fffdf7] via-[#fff9ed] to-[#fffef9] relative overflow-hidden">
      {/* Background glowing blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-yellow-200/40 to-yellow-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-yellow-100/40 to-yellow-300/30 rounded-full blur-3xl animate-spin-slow" />

      {/* Header */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Link to="/">
          <Button
            variant="ghost"
            className="mb-8 flex items-center gap-2 text-lg font-medium hover:text-yellow-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Meet the{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Founder
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transforming real estate with vision, expertise, and commitment…
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              We believe every property holds the power to inspire…
            </p>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-900">
                Chikku Singh
              </h2>
              <p className="text-lg text-gray-500">
                CEO & Founder of Shridhar Developers
              </p>
            </div>
          </motion.div>

          {/* Founder Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="relative group"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 p-1 shadow-xl shadow-yellow-500/30">
              <div className="aspect-square rounded-2xl bg-white/90 backdrop-blur-sm overflow-hidden relative">
                <img
                  src="/lovable-uploads/founder.png"
                  alt="Cheeku Singh - Founder"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="border border-yellow-200/50 shadow-xl bg-white/80 backdrop-blur-lg rounded-3xl">
            <CardContent className="p-12 lg:p-16">
              <div className="space-y-10">
                <h3 className="text-4xl font-bold text-center bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                  My Story
                </h3>
                <div className="space-y-8 text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  <p>Upendra Singh Born on April 30, 1975, in Gaya, Bihar, fondly known as Chikku Singh, has walked a journey shaped by purpose, resilience, and deep empathy. A graduate by education and a proud former officer of the Indian Navy, he began his professional life in service to the nation before answering a deeper calling — to help others find the one thing he once longed for: a home of their own.</p>
                  <p>After his time in the Navy, he ventured into the garments industry, and later into the hospitality business, where he ran hotels with the same dedication and commitment that he brings to every aspect of his work. These ventures helped sharpen his business acumen while keeping him closely connected to people’s daily lives and experiences.
                  Having lived in rented homes during his early years, he understood intimately what a monumental achievement it is for a person to own a house. Inspired by this realization and influenced by relatives already working in real estate, he stepped into the property market in 2008 with a heartfelt mission and unshakable belief. His first project began in Harmu, Ranchi — the seed of what would grow into 24 completed projects and 5 ongoing developments over the span of 25+ years.</p>
                  <p>We still believe in doing the right thing, even if it’s not the easOver time, what began as a personal mission grew into something bigger — a shared vision. This led to the formation of a family of real estate companies under the guidance of Shridhar Real Estate Pvt. Ltd., the mother company. Alongside it, sister firms like Shridhar Developers, Siddhartha Maison, and Sagun Ishaan Infra Developers Pvt. Ltd. were created — each carrying forward the same values of honesty, trust, and heartfelt commitment to building homes that truly matter.iest. We build like we’re building for our own — with care, emotion, and full responsibility.
                  Shridhar Developers is part of a close-knit group of companies guided by the same values. With Shridhar Real Estate Pvt. Ltd. as the mother company, and sister firms like Siddhartha Maison and Sagun Ishaan Infra Developers Pvt. Ltd., we continue working together toward one heartfelt goal — to build not just houses, but places people proudly call home.</p>
                  <p>Beyond real estate, his ventures expanded into garments and hospitality, each carried out with the same dedication and emotional intelligence that define his personality. A sensitive and deeply thoughtful individual, he not only understands people’s struggles but also strives to be a source of joy and success in their lives. For him, every home built is a promise kept — a testament to his belief that both life and work should be premium, purposeful, and deeply fulfilling.
                  A lifelong learner, he finds joy in reading books, traveling, and — above all — making people smile. Today, as he continues to shape lives and skylines alike, his vision remains clear: to keep delivering work that is not just built, but lived — with soul, dignity, and excellence.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Achievements */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent mb-6"
          >
            Achievements & Recognition
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { icon: Award, title: "Top Developer", desc: "5 Years Running" },
            { icon: Building2, title: "180M+", desc: "Sq. Ft. Delivered" },
            { icon: Users, title: "2,000+", desc: "Happy Clients" },
            { icon: TrendingUp, title: "98%", desc: "Success Rate" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx * 0.5}
            >
              <Card className="text-center p-8 border border-yellow-200/40 shadow-lg bg-white/90 backdrop-blur-md rounded-2xl hover:shadow-2xl hover:shadow-yellow-400/40 transition-all duration-500 group">
                <CardContent className="p-0 space-y-6">
                  <div className="relative w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <item.icon className="w-10 h-10 text-white relative z-10" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white rounded-3xl overflow-hidden">
            <CardContent className="p-16 text-center space-y-8 relative z-10">
              <h3 className="text-4xl font-bold">
                <span className="text-black">My</span>{" "}
                <span className="bg-gradient-to-r from-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  Vision
                </span>
              </h3>
              <p className="text-2xl leading-relaxed max-w-3xl mx-auto font-light text-black">
                To create a future where real estate is transparent…
              </p>
              <div className="pt-4">
                <Link to="/">
                  <Button
                    size="lg"
                    className="rounded-full px-8 text-lg bg-white text-yellow-700 hover:bg-yellow-100"
                  >
                    Work With Our Team
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
};

export default Founder;

// Custom animation class
const styles = `
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 50s linear infinite;
}`;
document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
