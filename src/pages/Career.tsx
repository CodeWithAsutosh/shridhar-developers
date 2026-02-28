import { Button } from "@/components/ui/button";
import { Briefcase, Users, HeartHandshake, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const staggerParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const CareerPage = () => {
  const jobs = [
    {
      title: "Senior Architect",
      location: "Ahmedabad, India",
      type: "Full-time",
      description:
        "Lead design projects from concept to execution, ensuring high-quality architectural outcomes.",
    },
    {
      title: "Site Engineer",
      location: "Surat, India",
      type: "Full-time",
      description:
        "Oversee daily construction activities, manage on-site teams, and maintain safety compliance.",
    },
    {
      title: "Sales Executive",
      location: "Vadodara, India",
      type: "Full-time",
      description:
        "Engage potential buyers, present project portfolios, and close real estate deals.",
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented, passionate people.",
    },
    {
      icon: Briefcase,
      title: "Career Growth",
      description: "Opportunities to learn and advance.",
    },
    {
      icon: HeartHandshake,
      title: "Employee Wellbeing",
      description: "We care for you inside and outside of work.",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100/50 to-yellow-50 font-times">
      {/* Back to Home Button */}
      <div className="absolute top-6 left-6 z-50">
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
      <div className="relative text-center py-24 px-4">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900"
        >
          Join Our <span className="shimmer-gold">Team</span>
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
        >
          At Shridhar Developers, we don’t just build homes — we build careers.
          Be part of something meaningful.
        </motion.p>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center group"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shimmer-glow">
              <b.icon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {b.title}
            </h3>
            <p className="text-gray-700">{b.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Open Positions */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
          Open <span className="shimmer-gold">Positions</span>
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerParent}
          className="grid md:grid-cols-2 gap-10"
        >
          {jobs.map((job, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-yellow-500/40 border border-yellow-200 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                {job.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {job.location} • {job.type}
              </p>
              <p className="mb-6 text-gray-700">{job.description}</p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white rounded-full hover:scale-105 transition-transform duration-300"
              >
                Apply Now
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-20 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-t-3xl">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Your Next <span className="shimmer-gold">Chapter</span> Starts Here
        </h2>
        <p className="text-gray-700 mb-8">
          Take the first step toward a rewarding career.
        </p>
        <Button
          size="lg"
          variant="outline"
          className="border-yellow-500 text-yellow-700 hover:bg-yellow-500 hover:text-white rounded-full px-8"
        >
          Submit Your Resume
        </Button>
      </div>
    </section>
  );
};

export default CareerPage;

// Shimmer + Glow CSS
const shimmerStyles = `
.shimmer-gold {
  background: linear-gradient(
    120deg,
    #b8860b 20%,
    #ffd700 40%,
    #fff8dc 60%,
    #ffd700 80%,
    #b8860b 100%
  );
  background-size: 200% auto;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: shimmer 4s linear infinite;
}

@keyframes shimmer {
  to {
    background-position: 200% center;
  }
}

.shimmer-glow {
  animation: glowPulse 3s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.6), 0 0 30px rgba(255, 215, 0, 0.4);
  }
  50% {
    box-shadow: 0 0 25px rgba(255, 223, 50, 0.9), 0 0 50px rgba(255, 223, 50, 0.6);
  }
}
`;

if (typeof document !== "undefined") {
  document.head.insertAdjacentHTML(
    "beforeend",
    `<style>${shimmerStyles}</style>`
  );
}
