"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Zap,
  Menu,
  Bell,
  Search,
  Briefcase,
  BarChart3,
  MessageSquare,
  Settings,
  LogOut,
  ChevronRight,
  Clock,
  DollarSign,
  Star,
  Bookmark,
  ThumbsUp,
} from "lucide-react"

export default function DashboardPage() {
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
          <NavItem href="/dashboard" icon={<BarChart3 className="h-5 w-5" />} active>
            Dashboard
          </NavItem>
          <NavItem href="/jobs" icon={<Briefcase className="h-5 w-5" />}>
            Find Jobs
          </NavItem>
          <NavItem href="/messages" icon={<MessageSquare className="h-5 w-5" />}>
            Messages
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
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Search className="h-5 w-5" />
              </Button>
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

        {/* Dashboard Content */}
        <main className="p-4 md:p-6">
          {/* AI Career Insights */}
          <Card className="mb-6 bg-gradient-to-r from-purple-500 to-purple-700 text-white">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2">AI Career Insights</h2>
                  <p className="mb-4">Based on your skills and experience, here are personalized recommendations:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ThumbsUp className="h-5 w-5 flex-shrink-0" />
                      <span>Your React.js skills are in high demand - 37% more jobs this month</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-5 w-5 flex-shrink-0" />
                      <span>Adding TypeScript could increase your job matches by 28%</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 flex-shrink-0" />
                      <span>Your current rate is 15% below market average - consider increasing</span>
                    </li>
                  </ul>
                </div>
                <Button className="mt-4 md:mt-0 bg-white text-purple-700 hover:bg-purple-100">View Full Report</Button>
              </div>
            </CardContent>
          </Card>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <StatCard
              title="Profile Completion"
              value="75%"
              icon={<Avatar className="h-8 w-8 bg-purple-100 text-purple-600" />}
              description="Complete your profile to attract more clients"
              showProgress
              progressValue={75}
            />
            <StatCard
              title="Job Success Rate"
              value="92%"
              icon={<ThumbsUp className="h-8 w-8 text-green-600" />}
              description="Based on your completed projects"
            />
            <StatCard
              title="Earnings This Month"
              value="$1,250"
              icon={<DollarSign className="h-8 w-8 text-blue-600" />}
              description="15% increase from last month"
            />
          </div>

          {/* Main Dashboard Tabs */}
          <Tabs defaultValue="recommended-jobs" className="mb-6">
            <TabsList className="mb-4">
              <TabsTrigger value="recommended-jobs">Recommended Jobs</TabsTrigger>
              <TabsTrigger value="active-projects">Active Projects</TabsTrigger>
              <TabsTrigger value="recent-activity">Recent Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="recommended-jobs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((job) => (
                  <JobCard
                    key={job}
                    title={`${job === 1 ? "Senior React Developer" : job === 2 ? "Frontend Engineer" : job === 3 ? "UI/UX Developer" : "Full Stack Developer"}`}
                    company={`${job === 1 ? "TechCorp" : job === 2 ? "InnovateLabs" : job === 3 ? "DesignMasters" : "WebSolutions"}`}
                    rate={`$${job === 1 ? "50-60" : job === 2 ? "45-55" : job === 3 ? "40-50" : "55-65"}/hr`}
                    matchPercentage={job === 1 ? 98 : job === 2 ? 92 : job === 3 ? 87 : 85}
                    tags={
                      job === 1
                        ? ["React", "TypeScript", "Redux"]
                        : job === 2
                          ? ["JavaScript", "CSS", "HTML5"]
                          : job === 3
                            ? ["Figma", "UI/UX", "React"]
                            : ["Node.js", "MongoDB", "React"]
                    }
                  />
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline">View All Jobs</Button>
              </div>
            </TabsContent>

            <TabsContent value="active-projects">
              <div className="space-y-4">
                {[1, 2].map((project) => (
                  <ProjectCard
                    key={project}
                    title={project === 1 ? "E-commerce Website Redesign" : "Mobile App Development"}
                    client={project === 1 ? "Fashion Boutique Inc." : "HealthTech Startup"}
                    progress={project === 1 ? 65 : 30}
                    dueDate={project === 1 ? "May 15, 2025" : "June 30, 2025"}
                    budget={project === 1 ? "$3,500" : "$5,000"}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recent-activity">
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                    <ActivityItem
                      title="New message from client"
                      description="John from TechCorp sent you a message about the project"
                      time="2 hours ago"
                      icon={<MessageSquare className="h-5 w-5 text-blue-500" />}
                    />
                    <ActivityItem
                      title="Payment received"
                      description="You received $750 for completing the landing page project"
                      time="Yesterday"
                      icon={<DollarSign className="h-5 w-5 text-green-500" />}
                    />
                    <ActivityItem
                      title="New job match"
                      description="AI found a new job that matches your skills: UX Designer"
                      time="2 days ago"
                      icon={<Briefcase className="h-5 w-5 text-purple-500" />}
                    />
                    <ActivityItem
                      title="Profile view"
                      description="Your profile was viewed by InnovateLabs"
                      time="3 days ago"
                      icon={<Avatar className="h-5 w-5 text-orange-500" />}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Skill Development */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>AI-Recommended Skill Development</CardTitle>
              <CardDescription>Based on job market trends and your current skills</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <SkillRecommendation
                  skill="TypeScript"
                  description="Adding TypeScript to your skillset could increase your job matches by 28%"
                  difficulty="Intermediate"
                  timeToLearn="2-3 weeks"
                />
                <SkillRecommendation
                  skill="Next.js"
                  description="Next.js is in high demand for React developers"
                  difficulty="Intermediate"
                  timeToLearn="1-2 weeks"
                />
                <SkillRecommendation
                  skill="GraphQL"
                  description="GraphQL skills can increase your hourly rate by up to 15%"
                  difficulty="Advanced"
                  timeToLearn="3-4 weeks"
                />
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

function StatCard({ title, value, icon, description, showProgress = false, progressValue = 0 }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
            {showProgress && <Progress value={progressValue} className="h-2 mt-2" />}
          </div>
          <div className="rounded-full p-2 bg-gray-100">{icon}</div>
        </div>
      </CardContent>
    </Card>
  )
}

function JobCard({ title, company, rate, matchPercentage, tags }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-gray-500">{company}</p>
          </div>
          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">{rate}</Badge>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <div className="text-sm font-medium text-green-600">{matchPercentage}% Match</div>
          <Progress value={matchPercentage} className="h-2 flex-1" />
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-gray-100">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            Posted 2 days ago
          </div>
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
            Apply
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function ProjectCard({ title, client, progress, dueDate, budget }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-gray-500">{client}</p>
          </div>
          <Badge className="mt-2 md:mt-0 w-fit bg-blue-100 text-blue-800 hover:bg-blue-100">In Progress</Badge>
        </div>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 mr-2 text-gray-500" />
              <span>Due: {dueDate}</span>
            </div>
            <div className="flex items-center text-sm">
              <DollarSign className="h-4 w-4 mr-2 text-gray-500" />
              <span>Budget: {budget}</span>
            </div>
          </div>
          <div className="flex justify-end">
            <Button size="sm" variant="outline">
              View Project
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ActivityItem({ title, description, time, icon }) {
  return (
    <div className="flex items-start gap-4 p-4">
      <div className="rounded-full p-2 bg-gray-100 flex-shrink-0">{icon}</div>
      <div className="flex-1">
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-xs text-gray-400 mt-1">{time}</p>
      </div>
      <Button variant="ghost" size="icon" className="flex-shrink-0">
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  )
}

function SkillRecommendation({ skill, description, difficulty, timeToLearn }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border rounded-lg">
      <div className="flex-1">
        <h4 className="font-medium text-lg">{skill}</h4>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex flex-wrap gap-4 mt-2">
          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Difficulty: {difficulty}</span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Time to learn: {timeToLearn}</span>
        </div>
      </div>
      <div className="flex gap-2 mt-2 sm:mt-0">
        <Button variant="outline" size="sm">
          <Bookmark className="h-4 w-4 mr-2" />
          Save
        </Button>
        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
          Start Learning
        </Button>
      </div>
    </div>
  )
}

