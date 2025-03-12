"use client"

import { Input } from "@/components/ui/input"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Zap,
  Menu,
  Bell,
  BarChart3,
  Briefcase,
  MessageSquare,
  Settings,
  LogOut,
  BrainCircuit,
  TrendingUp,
  BookOpen,
  ArrowUpRight,
  CheckCircle,
  Clock,
  FileText,
  Lightbulb,
} from "lucide-react"

export default function AICareerPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`bg-white border-r border-gray-200 w-64 fixed inset-y-0 left-0 z-30 transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Link href="/" className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-purple-600" />
            <span className="text-xl font-bold">SkillFlow</span>
          </Link>
        </div>
        <nav className="p-4 space-y-1">
          <NavItem href="/dashboard" icon={<BarChart3 className="h-5 w-5" />}>
            Dashboard
          </NavItem>
          <NavItem href="/jobs" icon={<Briefcase className="h-5 w-5" />}>
            Find Jobs
          </NavItem>
          <NavItem href="/messages" icon={<MessageSquare className="h-5 w-5" />}>
            Messages
          </NavItem>
          <NavItem href="/ai-career" icon={<BrainCircuit className="h-5 w-5" />} active>
            AI Career Path
          </NavItem>
          <NavItem href="/profile" icon={<Avatar className="h-5 w-5" />}>
            My Profile
          </NavItem>
          <NavItem href="/settings" icon={<Settings className="h-5 w-5" />}>
            Settings
          </NavItem>
        </nav>
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="/logout" className="flex items-center">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Link>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden mr-2"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
              <h1 className="text-xl font-semibold">AI Career Path</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Career Path Content */}
        <main className="p-4 md:p-6">
          {/* Career Overview */}
          <Card className="mb-6 bg-gradient-to-r from-purple-500 to-purple-700 text-white">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <BrainCircuit className="h-6 w-6 mr-2" />
                    <h2 className="text-xl font-semibold">Your AI Career Path</h2>
                  </div>
                  <p className="mb-4">
                    Based on your skills, experience, and market trends, we've created a personalized career path for
                    you.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <p className="text-sm opacity-80">Current Level</p>
                      <p className="font-semibold">Mid-Level React Developer</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg">
                      <p className="text-sm opacity-80">Next Milestone</p>
                      <p className="font-semibold">Senior Frontend Developer</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg">
                      <p className="text-sm opacity-80">Career Goal</p>
                      <p className="font-semibold">Lead Frontend Architect</p>
                    </div>
                  </div>
                </div>
                <Button className="mt-4 md:mt-0 bg-white text-purple-700 hover:bg-purple-100">
                  Update Career Goals
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Career Path Tabs */}
          <Tabs defaultValue="roadmap" className="mb-6">
            <TabsList className="mb-4">
              <TabsTrigger value="roadmap">Career Roadmap</TabsTrigger>
              <TabsTrigger value="skills">Skill Development</TabsTrigger>
              <TabsTrigger value="market">Market Insights</TabsTrigger>
              <TabsTrigger value="learning">Learning Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="roadmap">
              <Card>
                <CardHeader>
                  <CardTitle>Your Career Roadmap</CardTitle>
                  <CardDescription>AI-generated career path based on your skills and goals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                    <RoadmapItem
                      title="Mid-Level React Developer"
                      description="Your current position"
                      status="current"
                      skills={["React.js", "JavaScript", "CSS", "HTML5"]}
                      earnings="$45-60/hr"
                    />

                    <RoadmapItem
                      title="Senior Frontend Developer"
                      description="Next career milestone (estimated: 6-8 months)"
                      status="next"
                      skills={["React.js", "TypeScript", "Next.js", "Performance Optimization"]}
                      earnings="$60-80/hr"
                    />

                    <RoadmapItem
                      title="Frontend Team Lead"
                      description="Leadership role (estimated: 1.5-2 years)"
                      status="future"
                      skills={["Architecture Design", "Team Management", "Code Reviews", "Technical Planning"]}
                      earnings="$80-100/hr"
                    />

                    <RoadmapItem
                      title="Lead Frontend Architect"
                      description="Your career goal (estimated: 3-4 years)"
                      status="goal"
                      skills={[
                        "System Architecture",
                        "Technical Strategy",
                        "Cross-team Collaboration",
                        "Innovation Leadership",
                      ]}
                      earnings="$100-130/hr"
                      isLast={true}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="skills">
              <Card>
                <CardHeader>
                  <CardTitle>Skill Development Plan</CardTitle>
                  <CardDescription>
                    Prioritized skills to develop based on your career goals and market demand
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Current Skills</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        <SkillBadge name="React.js" level="Advanced" />
                        <SkillBadge name="JavaScript" level="Advanced" />
                        <SkillBadge name="HTML5" level="Advanced" />
                        <SkillBadge name="CSS3" level="Intermediate" />
                        <SkillBadge name="Redux" level="Intermediate" />
                        <SkillBadge name="Responsive Design" level="Advanced" />
                        <SkillBadge name="Git" level="Intermediate" />
                        <SkillBadge name="REST APIs" level="Intermediate" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">Skills to Develop (Priority Order)</h3>

                      <div className="space-y-4">
                        <SkillDevelopmentItem
                          name="TypeScript"
                          description="Essential for senior roles and improves code quality"
                          marketDemand={92}
                          timeToLearn="2-3 weeks"
                          resources={3}
                          priority="High"
                        />

                        <SkillDevelopmentItem
                          name="Next.js"
                          description="In-demand React framework for production applications"
                          marketDemand={85}
                          timeToLearn="1-2 weeks"
                          resources={5}
                          priority="High"
                        />

                        <SkillDevelopmentItem
                          name="Performance Optimization"
                          description="Critical for senior developers to optimize React applications"
                          marketDemand={78}
                          timeToLearn="3-4 weeks"
                          resources={4}
                          priority="Medium"
                        />

                        <SkillDevelopmentItem
                          name="Testing (Jest, React Testing Library)"
                          description="Essential for quality assurance and senior positions"
                          marketDemand={80}
                          timeToLearn="2-3 weeks"
                          resources={6}
                          priority="Medium"
                        />

                        <SkillDevelopmentItem
                          name="GraphQL"
                          description="Modern API technology often paired with React"
                          marketDemand={75}
                          timeToLearn="2-4 weeks"
                          resources={4}
                          priority="Medium"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-purple-600 hover:bg-purple-700">View Personalized Learning Plan</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="market">
              <Card>
                <CardHeader>
                  <CardTitle>Market Insights</CardTitle>
                  <CardDescription>
                    Real-time analysis of the job market for your skills and career path
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Demand for Your Skills</h3>

                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">React.js</span>
                            <span className="text-sm text-green-600">High Demand</span>
                          </div>
                          <Progress value={92} className="h-2" />
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">JavaScript</span>
                            <span className="text-sm text-green-600">High Demand</span>
                          </div>
                          <Progress value={90} className="h-2" />
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Redux</span>
                            <span className="text-sm text-green-600">High Demand</span>
                          </div>
                          <Progress value={78} className="h-2" />
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">CSS3</span>
                            <span className="text-sm text-blue-600">Medium Demand</span>
                          </div>
                          <Progress value={65} className="h-2" />
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="font-medium mb-2">Trending Skills in Your Field</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-green-100 text-green-800 flex items-center">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            TypeScript
                          </Badge>
                          <Badge className="bg-green-100 text-green-800 flex items-center">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Next.js
                          </Badge>
                          <Badge className="bg-green-100 text-green-800 flex items-center">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Tailwind CSS
                          </Badge>
                          <Badge className="bg-green-100 text-green-800 flex items-center">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            GraphQL
                          </Badge>
                          <Badge className="bg-green-100 text-green-800 flex items-center">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            React Native
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">Salary Insights</h3>

                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium">Your Current Level</h4>
                            <Badge>Mid-Level</Badge>
                          </div>
                          <div className="flex items-baseline">
                            <span className="text-2xl font-bold">$55/hr</span>
                            <span className="text-sm text-gray-500 ml-2">Average Rate</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            Your current rate ($50/hr) is slightly below market average
                          </p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium">Next Career Level</h4>
                            <Badge>Senior</Badge>
                          </div>
                          <div className="flex items-baseline">
                            <span className="text-2xl font-bold">$75/hr</span>
                            <span className="text-sm text-gray-500 ml-2">Average Rate</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            Potential 50% increase in hourly rate with skill development
                          </p>
                        </div>

                        <div className="mt-4">
                          <h4 className="font-medium mb-2">Rate by Location</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>United States</span>
                              <span className="font-medium">$60-80/hr</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Western Europe</span>
                              <span className="font-medium">$50-70/hr</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Eastern Europe</span>
                              <span className="font-medium">$40-60/hr</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Asia</span>
                              <span className="font-medium">$30-50/hr</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-medium mb-4">Job Market Forecast</h3>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>AI Analysis:</strong> The demand for React developers is projected to grow by 25% over
                        the next 12 months. Adding TypeScript and Next.js to your skillset could increase your job
                        opportunities by 35% and potential hourly rate by 20%.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Top Industries Hiring</h4>
                        <ol className="text-sm space-y-1 list-decimal list-inside">
                          <li>Financial Technology</li>
                          <li>E-commerce</li>
                          <li>Healthcare Technology</li>
                          <li>Enterprise SaaS</li>
                          <li>EdTech</li>
                        </ol>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Top Companies Hiring</h4>
                        <ol className="text-sm space-y-1 list-decimal list-inside">
                          <li>TechCorp</li>
                          <li>InnovateLabs</li>
                          <li>DigitalSolutions</li>
                          <li>WebFuture</li>
                          <li>AppNova</li>
                        </ol>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Emerging Opportunities</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Web3 & Blockchain UIs</li>
                          <li>• AI-powered Interfaces</li>
                          <li>• AR/VR Web Experiences</li>
                          <li>• Performance Optimization</li>
                          <li>• Cross-platform Development</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-purple-600 hover:bg-purple-700">Get Full Market Report</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="learning">
              <Card>
                <CardHeader>
                  <CardTitle>Personalized Learning Resources</CardTitle>
                  <CardDescription>
                    AI-curated learning materials to help you develop the skills needed for your career path
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="typescript">
                    <TabsList className="mb-4">
                      <TabsTrigger value="typescript">TypeScript</TabsTrigger>
                      <TabsTrigger value="nextjs">Next.js</TabsTrigger>
                      <TabsTrigger value="performance">Performance</TabsTrigger>
                      <TabsTrigger value="testing">Testing</TabsTrigger>
                    </TabsList>

                    <TabsContent value="typescript">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="bg-purple-100 p-3 rounded-full">
                            <BookOpen className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">TypeScript Learning Path</h3>
                            <p className="text-sm text-gray-500">Estimated time: 2-3 weeks</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <LearningResource
                            title="TypeScript for React Developers"
                            type="Course"
                            platform="Udemy"
                            duration="10 hours"
                            difficulty="Intermediate"
                            link="#"
                          />

                          <LearningResource
                            title="Advanced Types in TypeScript"
                            type="Tutorial"
                            platform="TypeScript Handbook"
                            duration="2 hours"
                            difficulty="Advanced"
                            link="#"
                          />

                          <LearningResource
                            title="Migrating from JavaScript to TypeScript"
                            type="Guide"
                            platform="Medium"
                            duration="1 hour"
                            difficulty="Intermediate"
                            link="#"
                          />

                          <LearningResource
                            title="TypeScript Design Patterns"
                            type="Course"
                            platform="Frontend Masters"
                            duration="6 hours"
                            difficulty="Advanced"
                            link="#"
                          />
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="flex items-start gap-3">
                            <Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-blue-800 mb-1">AI Learning Recommendation</h4>
                              <p className="text-sm text-blue-700">
                                Based on your React experience, focus on TypeScript with React hooks and state
                                management. This combination will be most valuable for your career progression to Senior
                                Frontend Developer.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">Practice Projects</h4>
                          <div className="space-y-2">
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <h5 className="font-medium">Convert Your Portfolio to TypeScript</h5>
                              <p className="text-sm text-gray-600">
                                Migrate your existing React portfolio to TypeScript for hands-on experience.
                              </p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <h5 className="font-medium">Build a Task Management App</h5>
                              <p className="text-sm text-gray-600">
                                Create a task management application with TypeScript, React, and state management.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="nextjs">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="bg-purple-100 p-3 rounded-full">
                            <BookOpen className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">Next.js Learning Path</h3>
                            <p className="text-sm text-gray-500">Estimated time: 1-2 weeks</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <LearningResource
                            title="Next.js Foundations"
                            type="Documentation"
                            platform="Next.js"
                            duration="3 hours"
                            difficulty="Beginner"
                            link="#"
                          />

                          <LearningResource
                            title="Building Modern Web Applications with Next.js"
                            type="Course"
                            platform="Pluralsight"
                            duration="8 hours"
                            difficulty="Intermediate"
                            link="#"
                          />

                          <LearningResource
                            title="Next.js with TypeScript"
                            type="Tutorial"
                            platform="Digital Ocean"
                            duration="2 hours"
                            difficulty="Intermediate"
                            link="#"
                          />

                          <LearningResource
                            title="Fullstack Next.js Applications"
                            type="Course"
                            platform="Frontend Masters"
                            duration="12 hours"
                            difficulty="Advanced"
                            link="#"
                          />
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="performance">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="bg-purple-100 p-3 rounded-full">
                            <Zap className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">Performance Optimization Learning Path</h3>
                            <p className="text-sm text-gray-500">Estimated time: 3-4 weeks</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <LearningResource
                            title="React Performance Optimization Techniques"
                            type="Course"
                            platform="Udemy"
                            duration="8 hours"
                            difficulty="Intermediate"
                            link="#"
                          />

                          <LearningResource
                            title="Web Vitals and Core Performance Metrics"
                            type="Guide"
                            platform="web.dev"
                            duration="2 hours"
                            difficulty="Intermediate"
                            link="#"
                          />

                          <LearningResource
                            title="Advanced React Rendering Patterns"
                            type="Workshop"
                            platform="Frontend Masters"
                            duration="6 hours"
                            difficulty="Advanced"
                            link="#"
                          />

                          <LearningResource
                            title="Profiling and Debugging React Applications"
                            type="Tutorial"
                            platform="React Documentation"
                            duration="3 hours"
                            difficulty="Advanced"
                            link="#"
                          />
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="testing">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="bg-purple-100 p-3 rounded-full">
                            <FileText className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">Testing Learning Path</h3>
                            <p className="text-sm text-gray-500">Estimated time: 2-3 weeks</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <LearningResource
                            title="Testing React Applications with Jest"
                            type="Course"
                            platform="TestingJavaScript.com"
                            duration="10 hours"
                            difficulty="Intermediate"
                            link="#"
                          />

                          <LearningResource
                            title="React Testing Library Fundamentals"
                            type="Tutorial"
                            platform="Kent C. Dodds Blog"
                            duration="4 hours"
                            difficulty="Intermediate"
                            link="#"
                          />

                          <LearningResource
                            title="End-to-End Testing with Cypress"
                            type="Workshop"
                            platform="Egghead.io"
                            duration="6 hours"
                            difficulty="Intermediate"
                            link="#"
                          />

                          <LearningResource
                            title="Test-Driven Development in React"
                            type="Course"
                            platform="Pluralsight"
                            duration="8 hours"
                            difficulty="Advanced"
                            link="#"
                          />
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Save Learning Path</Button>
                  <Button className="bg-purple-600 hover:bg-purple-700">Start Learning</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>

          {/* AI Career Coach */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BrainCircuit className="h-5 w-5 text-purple-600" />
                AI Career Coach
              </CardTitle>
              <CardDescription>Get personalized career advice and guidance from your AI coach</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Recent Insights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">
                      <strong>Portfolio Improvement:</strong> Your portfolio would benefit from adding a complex state
                      management example to showcase your React expertise.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">
                      <strong>Job Application Strategy:</strong> Focus on companies in the FinTech sector, where your
                      React skills are in high demand with premium rates.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">
                      <strong>Skill Development:</strong> Learning TypeScript should be your top priority based on your
                      current skills and career goals.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-3">Ask Your AI Career Coach</h3>
                <div className="flex gap-2">
                  <Input placeholder="Ask a question about your career path..." className="flex-1" />
                  <Button className="bg-purple-600 hover:bg-purple-700">Ask</Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Button variant="outline" size="sm">
                    How can I increase my hourly rate?
                  </Button>
                  <Button variant="outline" size="sm">
                    What projects should I build next?
                  </Button>
                  <Button variant="outline" size="sm">
                    How to prepare for senior role interviews?
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

function NavItem({ href, icon, children, active = false }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ${
        active ? "bg-purple-50 text-purple-700" : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {icon}
      {children}
    </Link>
  )
}

function RoadmapItem({ title, description, status, skills, earnings, isLast = false }) {
  const getStatusStyles = () => {
    switch (status) {
      case "completed":
        return "bg-green-500 border-green-500"
      case "current":
        return "bg-blue-500 border-blue-500"
      case "next":
        return "bg-purple-500 border-purple-500"
      case "goal":
        return "bg-amber-500 border-amber-500"
      default:
        return "bg-gray-300 border-gray-300"
    }
  }

  return (
    <div className={`relative pl-10 pb-8 ${isLast ? "" : ""}`}>
      <div className={`absolute left-0 w-8 h-8 rounded-full border-4 ${getStatusStyles()} z-10`}></div>
      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
          <h3 className="font-semibold text-lg">{title}</h3>
          <Badge
            className={`mt-1 sm:mt-0 w-fit ${
              status === "current"
                ? "bg-blue-100 text-blue-800"
                : status === "next"
                  ? "bg-purple-100 text-purple-800"
                  : status === "goal"
                    ? "bg-amber-100 text-amber-800"
                    : "bg-gray-100 text-gray-800"
            }`}
          >
            {status === "current" ? "Current" : status === "next" ? "Next Step" : status === "goal" ? "Goal" : "Future"}
          </Badge>
        </div>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="bg-gray-100">
              {skill}
            </Badge>
          ))}
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <DollarSign className="h-4 w-4 mr-1" />
          <span>Typical earnings: {earnings}</span>
        </div>
      </div>
    </div>
  )
}

function SkillBadge({ name, level }) {
  const getLevelColor = () => {
    switch (level) {
      case "Beginner":
        return "bg-blue-100 text-blue-800"
      case "Intermediate":
        return "bg-purple-100 text-purple-800"
      case "Advanced":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="flex items-center gap-2 p-2 border rounded-md">
      <span>{name}</span>
      <Badge className={`ml-auto ${getLevelColor()}`}>{level}</Badge>
    </div>
  )
}

function SkillDevelopmentItem({ name, description, marketDemand, timeToLearn, resources, priority }) {
  const getPriorityColor = () => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800"
      case "Medium":
        return "bg-amber-100 text-amber-800"
      case "Low":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="border rounded-lg p-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
        <h4 className="font-medium">{name}</h4>
        <Badge className={`mt-1 sm:mt-0 w-fit ${getPriorityColor()}`}>{priority} Priority</Badge>
      </div>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
        <div>
          <span className="text-gray-500">Market Demand:</span>
          <div className="flex items-center mt-1">
            <Progress value={marketDemand} className="h-2 flex-1 mr-2" />
            <span>{marketDemand}%</span>
          </div>
        </div>
        <div>
          <span className="text-gray-500">Time to Learn:</span>
          <div className="flex items-center mt-1">
            <Clock className="h-4 w-4 text-gray-400 mr-1" />
            <span>{timeToLearn}</span>
          </div>
        </div>
        <div>
          <span className="text-gray-500">Resources:</span>
          <div className="flex items-center mt-1">
            <BookOpen className="h-4 w-4 text-gray-400 mr-1" />
            <span>{resources} available</span>
          </div>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t flex justify-end">
        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
          Start Learning
        </Button>
      </div>
    </div>
  )
}

function LearningResource({ title, type, platform, duration, difficulty, link }) {
  const getTypeIcon = () => {
    switch (type) {
      case "Course":
        return <BookOpen className="h-4 w-4" />
      case "Tutorial":
        return <FileText className="h-4 w-4" />
      case "Guide":
        return <FileText className="h-4 w-4" />
      case "Documentation":
        return <FileText className="h-4 w-4" />
      case "Workshop":
        return <BookOpen className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  const getDifficultyColor = () => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-blue-100 text-blue-800"
      case "Advanced":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium">{title}</h4>
          <p className="text-sm text-gray-500">{platform}</p>
        </div>
        <Badge className={getDifficultyColor()}>{difficulty}</Badge>
      </div>
      <div className="flex items-center mt-3 text-sm text-gray-600">
        <div className="flex items-center mr-4">
          {getTypeIcon()}
          <span className="ml-1">{type}</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>{duration}</span>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t flex justify-between items-center">
        <div className="flex items-center text-sm">
          <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
          <span>AI Recommended</span>
        </div>
        <Button size="sm" variant="outline" asChild>
          <Link href={link} className="flex items-center">
            View
            <ArrowUpRight className="ml-1 h-3 w-3" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

