import { SectionHeader } from "@/components/section-header";
import { TimelineItem } from "@/components/timeline";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EducationPage() {
  return (
    <div className="container py-20 mx-auto pl-4 pr-4">
      <SectionHeader
        title="Education & Experience"
        subtitle="My academic and professional journey"
        className="mb-16"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="space-y-6">

            <h2 className="text-2xl font-bold mt-16">Professional Experience</h2>
            <div className="mt-8 space-y-8">
              <TimelineItem
                title="Full Stack Engineer"
                subtitle="Phinite.ai (Remote)"
                date="April 2025 – Present"
                description="Building a mobile and web-based MVP for an AI-driven conversational workflow platform using the MERN stack and native mobile (Kotlin, Swift). Contributing to full-stack integration and early-stage product direction."
              />

              <TimelineItem
                title="Project Intern – Security Testing"
                subtitle="Under Dr. Dhiman Saha | IIT Bhilai"
                date="May 2025 – June 2025"
                description="Conducted comprehensive testing for the TrusToken authentication system. Identified vulnerabilities, collaborated on security improvements, and created detailed test reports for stakeholders."
              />

              <TimelineItem
                title="Project Intern – App Development"
                subtitle="Under Dr. Dhiman Saha | IIT Bhilai"
                date="May 2024 – July 2024"
                description="Built a Flutter-based attendance app with USB token security for 1000+ students. Integrated secure token authentication into a P2P video conferencing system in collaboration with CDAC."
              />

              <TimelineItem
                title="Open Source Contributor"
                subtitle="Stdlib, cBioPortal"
                date="2023 – Present"
                description="Contributed to multiple repositories with 10+ PRs across stdlib and cBioPortal, enhancing functionality, fixing bugs, and improving documentation."
                isLast={true}
              />
            </div>


            <h2 className="text-2xl font-bold">Academic Journey</h2>
            <div className="mt-8 space-y-8">
              <TimelineItem
                title="IIT Bhilai"
                subtitle="B.Tech in Computer Science"
                date="2022 - Present"
                description=""
              />

              <TimelineItem
                title="Senior Secondary Education"
                subtitle="Little Flower Hr. Sec. School"
                date="2022"
                description=""
              />

              <TimelineItem
                title="Secondary Education"
                subtitle="GD Goenka Public School"
                date="2019"
                description=""
                isLast={true}
              />
            </div>


          </div>
        </div>

        <div>
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Key Courses</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Data Structures</Badge>
                  <Badge>Algorithms</Badge>
                  <Badge>Graph Theory</Badge>
                  <Badge>Cryptography</Badge>
                  <Badge>Computer Networks</Badge>
                  <Badge>Database Management Systems</Badge>
                  <Badge>Operating Systems</Badge>
                </div>
              </CardContent>
            </Card>

            {/* <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Academic Achievements</h3>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Dean&apos;s List for Academic Excellence (2021-2023)</li>
                  <li>Merit Scholarship Recipient</li>
                  <li>Best Student Project Award (2022)</li>
                  <li>Winner, Inter-IIT Coding Competition</li>
                  <li>2nd Place, National Hackathon</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Certifications</h3>
                <ul className="space-y-3 list-disc pl-5">
                  <li>AWS Certified Developer Associate</li>
                  <li>Google Cloud Professional Developer</li>
                  <li>TensorFlow Developer Certificate</li>
                  <li>Meta React Developer Professional Certificate</li>
                  <li>MongoDB Database Administrator</li>
                </ul>
              </CardContent>
            </Card> */}

            {/* <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Research Papers</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Efficient Neural Networks for Edge Devices</h4>
                    <p className="text-sm text-muted-foreground">International Conference on Machine Learning, 2023</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Optimizing Database Queries with Graph-based Learning</h4>
                    <p className="text-sm text-muted-foreground">ACM SIGMOD Conference, 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </div>
  );
}
