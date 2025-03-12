"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
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
  Clock,
  Filter,
  ChevronDown,
  MapPin,
  Bookmark,
  BrainCircuit,
} from "lucide-react"

// Mock job data
const mockJobs = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "TechCorp",
    location: "Remote",
    rate: "$50-60/hr",
    matchPercentage: 98,
    tags: ["React", "TypeScript", "Redux"],
    description:
      "We're looking for an experienced React developer to join our team and help build our next-generation web application.",
    postedAt: "2 days ago",
    aiRecommended: true,
  },
  {
    id: 2,
    title: "Frontend Engineer",
    company: "InnovateLabs",
    location: "New York, USA",
    rate: "$45-55/hr",
    matchPercentage: 92,
    tags: ["JavaScript", "CSS", "HTML5"],
    description:
      "Join our team to create beautiful and responsive user interfaces for our clients in the finance sector.",
    postedAt: "3 days ago",
    aiRecommended: true,
  },
  {
    id: 3,
    title: "UI/UX Developer",
    company: "DesignMasters",
    location: "Remote",
    rate: "$40-50/hr",
    matchPercentage: 87,
    tags: ["Figma", "UI/UX", "React"],
    description: "Looking for a talented UI/UX developer who can translate designs into functional React components.",
    postedAt: "1 week ago",
    aiRecommended: false,
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "WebSolutions",
    location: "Berlin, Germany",
    rate: "$55-65/hr",
    matchPercentage: 85,
    tags: ["Node.js", "MongoDB", "React"],
    description: "Join our international team to build scalable web applications using modern JavaScript frameworks.",
    postedAt: "5 days ago",
    aiRecommended: false,
  },
  {
    id: 5,
    title: "React Native Developer",
    company: "MobileApps Inc.",
    location: "Remote",
    rate: "$50-60/hr",
    matchPercentage: 90,
    tags: ["React Native", "JavaScript", "Mobile"],
    description:
      "Help us build cross-platform mobile applications using React Native for our clients in various industries.",
    postedAt: "1 day ago",
    aiRecommended: true,
  },
  {
    id: 6,
    title: "JavaScript Engineer",
    company: "CodeCrafters",
    location: "San Francisco, USA",
    rate: "$60-70/hr",
    matchPercentage: 82,
    tags: ["JavaScript", "Vue.js", "Node.js"],
    description: "We're seeking a JavaScript expert to help maintain and improve our SaaS platform.",
    postedAt: "1 week ago",
    aiRecommended: false,
  },
]

export default function JobsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [rateRange, setRateRange] = useState([30, 70])
  const [selectedJob, setSelectedJob] = useState(null)
  const [filters, setFilters] = useState({
    remote: true,
    onsite: false,
    contract: true,
    fullTime: true,
    partTime: false,
    aiRecommended: true,
  })

  const handleFilterChange = (key) => {
    setFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const filteredJobs = mockJobs.filter((job) => {
    // Filter by search term
    if (
      searchTerm &&
      !job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !job.company.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false
    }

    // Filter by rate range
    const jobRate = Number.parseInt(job.rate.replace(/\D/g, ""))
    if (jobRate < rateRange[0] || jobRate > rateRange[1]) {
      return false
    }

    // Filter by remote/onsite
    if (job.location === "Remote" && !filters.remote) {
      return false
    }

    if (job.location !== "Remote" && !filters.onsite) {
      return false
    }

    // Filter by AI recommended
    if (filters.aiRecommended && !job.aiRecommended) {
      return false
    }

    return true
  })

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
          <NavItem href="/jobs" icon={<Briefcase className="h-5 w-5" />} active>
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
              <h1 className="text-xl font-semibold">Find Jobs</h1>
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

        {/* Jobs Content */}
        <main className="p-4 md:p-6">
          {/* Search and Filter */}
          <div className="mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search jobs, skills, or companies"
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter className="h-4 w-4" />
                Filters
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>

            {/* Filters Panel */}
            {isFilterOpen && (
              <Card className="mt-4">
                <CardContent className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-medium mb-3">Job Type</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="contract"
                            checked={filters.contract}
                            onCheckedChange={() => handleFilterChange("contract")}
                          />
                          <label htmlFor="contract" className="text-sm">
                            Contract
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="fullTime"
                            checked={filters.fullTime}
                            onCheckedChange={() => handleFilterChange("fullTime")}
                          />
                          <label htmlFor="fullTime" className="text-sm">
                            Full-time
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="partTime"
                            checked={filters.partTime}
                            onCheckedChange={() => handleFilterChange("partTime")}
                          />
                          <label htmlFor="partTime" className="text-sm">
                            Part-time
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-3">Location</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="remote"
                            checked={filters.remote}
                            onCheckedChange={() => handleFilterChange("remote")}
                          />
                          <label htmlFor="remote" className="text-sm">
                            Remote
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="onsite"
                            checked={filters.onsite}
                            onCheckedChange={() => handleFilterChange("onsite")}
                          />
                          <label htmlFor="onsite" className="text-sm">
                            On-site
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-3">Hourly Rate (USD)</h3>
                      <Slider
                        value={rateRange}
                        min={10}
                        max={100}
                        step={5}
                        onValueChange={setRateRange}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>${rateRange[0]}</span>
                        <span>${rateRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="aiRecommended"
                        checked={filters.aiRecommended}
                        onCheckedChange={() => handleFilterChange("aiRecommended")}
                      />
                      <label htmlFor="aiRecommended" className="text-sm flex items-center">
                        <BrainCircuit className="h-4 w-4 mr-1 text-purple-600" />
                        Show AI recommended jobs only
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-end mt-4">
                    <Button variant="outline" className="mr-2">
                      Reset
                    </Button>
                    <Button className="bg-purple-600 hover:bg-purple-700">Apply Filters</Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <Card
                  key={job.id}
                  className={`hover:shadow-md transition-shadow cursor-pointer ${selectedJob === job.id ? "ring-2 ring-purple-500" : ""}`}
                  onClick={() => setSelectedJob(job.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-lg">{job.title}</h3>
                          {job.aiRecommended && (
                            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 flex items-center gap-1">
                              <BrainCircuit className="h-3 w-3" />
                              AI Match
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-500">{job.company}</p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">{job.rate}</Badge>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">{job.description}</p>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="text-sm font-medium text-green-600">{job.matchPercentage}% Match</div>
                      <Progress value={job.matchPercentage} className="h-2 flex-1" />
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-gray-100">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.postedAt}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                          Apply
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-2 text-center py-12">
                <Briefcase className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium mb-2">No jobs found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your filters or search terms</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setRateRange([30, 70])
                    setFilters({
                      remote: true,
                      onsite: true,
                      contract: true,
                      fullTime: true,
                      partTime: true,
                      aiRecommended: false,
                    })
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-purple-100">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
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

