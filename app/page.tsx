import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BrainCircuit, Shield, Zap } from "lucide-react"
import freelanceImage from "/images/freelance.avif";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-violet-500 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6" />
              <span className="text-xl font-bold">SkillFlow</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/login" className="text-white hover:text-purple-200">
                Login
              </Link>
              <Button asChild variant="secondary">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          </nav>

          <div className="flex flex-col md:flex-row items-center justify-between py-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">AI-Powered Freelancing Platform</h1>
              <p className="text-lg mb-6">
                SkillFlow revolutionizes freelancing with AI-powered job matching, blockchain smart contracts, and
                career guidance to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-purple-100">
                  <Link href="/signup">Get Started</Link>
                </Button>
                <Button asChild size="lg" className="border-white text-white hover:bg-purple-700">
                  <Link href="#how-it-works">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/freelance.avif"
                alt="SkillFlow Platform"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How SkillFlow is Different</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BrainCircuit className="h-10 w-10 text-purple-600" />}
              title="AI-Powered Career Path"
              description="SkillFlow guides users step by step on their freelancing journey, not just listing jobs but providing a roadmap to success."
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-purple-600" />}
              title="Blockchain Smart Contracts"
              description="Secure payments through blockchain technology, ensuring funds are only released when work is completed satisfactorily."
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-purple-600" />}
              title="Skill-Based Job Matching"
              description="AI suggests jobs based on your verified skills instead of showing random gigs, increasing your chances of success."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ol className="space-y-6">
                <WorkflowStep
                  number={1}
                  title="Create Your Profile"
                  description="Sign up and let our AI analyze your skills and experience to create an optimized profile."
                />
                <WorkflowStep
                  number={2}
                  title="Get Personalized Job Matches"
                  description="Our AI matches you with jobs that fit your skill set and career goals."
                />
                <WorkflowStep
                  number={3}
                  title="Secure Payment Through Blockchain"
                  description="Smart contracts ensure your payment is secure and released only when work is completed."
                />
                <WorkflowStep
                  number={4}
                  title="Grow Your Career"
                  description="Get AI-powered feedback to improve your skills and advance your freelancing career."
                />
              </ol>
            </div>
            <div className="order-first md:order-last">
              <img
                src="/freelan.jpg"
                alt="SkillFlow Workflow"
                className="rounded-lg shadow-lg"
              />
                
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-violet-500 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Freelancing Career?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join SkillFlow today and experience the future of freelancing with AI-powered job matching and secure
            blockchain payments.
          </p>
          <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-purple-100">
            <Link href="/signup">Get Started Now</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-6 w-6" />
                <span className="text-xl font-bold">SkillFlow</span>
              </div>
              <p className="text-gray-400">AI & Blockchain-Powered Freelance Platform</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Find Jobs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Hire Freelancers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} SkillFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function WorkflowStep({ number, title, description }) {
  return (
    <li className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </li>
  )
}