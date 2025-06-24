import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";

export default function ProjectsPage() {
  return (
    <div className="container py-20 mx-auto pl-4 pr-4">
      <SectionHeader
        title="My Projects"
        subtitle="A collection of my technical work and contributions"
        className="mb-16"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Feedback System"
          description="A digital feedback portal developed using Next.js to streamline anonymous student feedback and provide real-time analytics for faculty."
          tags={["Next.js", "Tailwind", "Node.js", "MongoDB"]}
          githubUrl="https://github.com/NishchayRajput?tab=repositories&q=CQI"
          colorScheme="blue"
        />


        <ProjectCard
          title="BAKSHEESH Cipher"
          description="A lightweight block cipher designed over GIFT-128, offering improved hardware efficiency with 35 rounds (vs 40) while maintaining security against classical cryptanalytic methods."
          tags={["Cryptography", "Security", "Block Cipher", "Research"]}
          colorScheme="red"
          demoUrl="/files/Crypto_Term_Paper (1).pdf"
        />

        <ProjectCard
          title="PsychoPath Flutter App"
          description="A cross-platform mental wellness application developed with Flutter. PyschoPaths provides users with daily tips, guided relaxation techniques, and access to community support resources to help manage stress and improve emotional well-being. The app features a curated library of meditation exercises, mindfulness practices, and helpline contacts, making mental health support accessible and practical for a broad audience."
          tags={["Flutter", "Dart", "Mental Health", "Mobile App"]}
          colorScheme="orange"
          githubUrl="https://github.com/NishchayRajput/PyschoPaths"
        />


        <ProjectCard
          title="SAR Image Colorization"
          description="A deep learning model for colorizing grayscale SAR images to enhance interpretation in remote sensing applications."
          tags={["Python", "Deep Learning", "PyTorch"]}
          githubUrl="https://github.com/nishant9083/ColorSAR"
          colorScheme="purple"
        />
        <ProjectCard
          title="Stack Overflow Network Analysis"
          description="An analytical exploration of Stack Overflow tag relationships using graph theory and igraph library to visualize technology clusters and co-occurrence patterns."
          tags={["Data Analysis", "Network Theory", "igraph", "Python"]}
          colorScheme="cyan"
          demoUrl="/files/Network_Science_report (2).pdf"
        />
        <ProjectCard
          title="Chcommune Blog Platform"
          description="A full-stack blog platform with admin panel, Google OAuth authentication, and scalable database infrastructure."
          tags={["React", "Node.js", "Express.js", "MongoDB"]}
          githubUrl="https://github.com/NishchayRajput/CollabHous"
          demoUrl="https://chcommune.com"
          colorScheme="green"
        />

        <ProjectCard
          title="Smart Payment System"
          description="A campus payment system for over 1200 students using ID cards, with daily mess payment tracking and transparent transactions."
          tags={["Node.js", "MongoDB", "ID Auth", "Campus Infra"]}
          // githubUrl="https://github.com/nishchayrajput/smart-payment-system"
          colorScheme="orange"
        />

        <ProjectCard
          title="Polaris Website"
          description="An admissions guide website for JEE Advanced aspirants; transformed from static to dynamic with modern UI/UX and Node.js backend."
          tags={["Node.js", "Tailwind", "UI/UX", "HTML/CSS"]}
          colorScheme="pink"
          demoUrl="https://polaris.iitbhilai.ac.in"
        />

        <ProjectCard
          title="Open Source Contributions"
          description="Contributed to open-source projects like Stdlib and cBioPortal with 10+ pull requests improving functionality and documentation."
          imageSrc="/projects/opensource.jpg"
          tags={["Stdlib", "cBioPortal", "Open Source", "GitHub"]}
          githubUrl="https://github.com/nishchayrajput"
        />
      </div>
    </div>

  );
}
