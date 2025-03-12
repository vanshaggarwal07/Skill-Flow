"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Zap, ChevronRight, ChevronLeft, Upload, Check } from "lucide-react"

const steps = [
  { id: "profile", title: "Basic Profile" },
  { id: "skills", title: "Skills & Expertise" },
  { id: "portfolio", title: "Portfolio" },
  { id: "preferences", title: "Preferences" },
]

export default function OnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    // Profile
    title: "",
    bio: "",
    location: "",
    // Skills
    skills: [],
    experience: "",
    hourlyRate: "",
    // Portfolio
    portfolioItems: [],
    // Preferences
    jobPreferences: [],
    availability: "",
    notificationPreferences: [],
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    } else {
      handleSubmit()
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = () => {
    setIsLoading(true)

    // Simulate profile creation
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  const handleSkillAdd = (skill) => {
    if (skill && !formData.skills.includes(skill)) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, skill],
      }))
    }
  }

  const handleSkillRemove = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill),
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <Zap className="h-6 w-6 text-purple-600" />
            <span className="text-2xl font-bold">SkillFlow</span>
          </Link>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    index <= currentStep ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {index < currentStep ? <Check className="h-5 w-5" /> : index + 1}
                </div>
                <span className="text-sm mt-2 hidden sm:block">{step.title}</span>
              </div>
            ))}
          </div>
          <div className="relative mt-2">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200"></div>
            <div
              className="absolute top-0 left-0 h-1 bg-purple-600 transition-all duration-300"
              style={{
                width: `${(currentStep / (steps.length - 1)) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{steps[currentStep].title}</CardTitle>
            <CardDescription>
              {currentStep === 0 && "Tell us about yourself"}
              {currentStep === 1 && "What are your skills and expertise?"}
              {currentStep === 2 && "Showcase your best work"}
              {currentStep === 3 && "Set your job preferences"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Step 1: Basic Profile */}
            {currentStep === 0 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Professional Title</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="e.g. Full Stack Developer"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    placeholder="Tell clients about yourself and your expertise"
                    rows={4}
                    value={formData.bio}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="e.g. New York, USA"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}

            {/* Step 2: Skills & Expertise */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="skills">Skills</Label>
                  <div className="flex gap-2">
                    <Input
                      id="skillInput"
                      placeholder="e.g. JavaScript"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          handleSkillAdd(e.target.value)
                          e.target.value = ""
                        }
                      }}
                    />
                    <Button
                      type="button"
                      onClick={() => {
                        const input = document.getElementById("skillInput")
                        handleSkillAdd(input.value)
                        input.value = ""
                      }}
                    >
                      Add
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.skills.map((skill) => (
                      <div
                        key={skill}
                        className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex items-center"
                      >
                        {skill}
                        <button
                          type="button"
                          className="ml-2 text-purple-600 hover:text-purple-800"
                          onClick={() => handleSkillRemove(skill)}
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Select
                    onValueChange={(value) => handleSelectChange("experience", value)}
                    value={formData.experience}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5-10">5-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hourlyRate">Hourly Rate (USD)</Label>
                  <Input
                    id="hourlyRate"
                    name="hourlyRate"
                    type="number"
                    placeholder="e.g. 50"
                    value={formData.hourlyRate}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Portfolio */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Portfolio Items</Label>
                  <p className="text-sm text-gray-500">
                    Add your best work to showcase your skills to potential clients
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-purple-500 transition-colors cursor-pointer"
                      >
                        <Upload className="h-10 w-10 text-gray-400 mb-2" />
                        <p className="text-sm font-medium">Upload Project</p>
                        <p className="text-xs text-gray-500 mt-1">Drag & drop or click to upload</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="githubProfile">GitHub Profile (Optional)</Label>
                  <Input
                    id="githubProfile"
                    name="githubProfile"
                    placeholder="e.g. https://github.com/username"
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Preferences */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="jobTypes">Job Types</Label>
                  <Select onValueChange={(value) => handleSelectChange("jobTypes", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="project-based">Project-based</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="availability">Availability</Label>
                  <Select
                    onValueChange={(value) => handleSelectChange("availability", value)}
                    value={formData.availability}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate</SelectItem>
                      <SelectItem value="1-week">Within 1 week</SelectItem>
                      <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
                      <SelectItem value="1-month">Within 1 month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectSize">Preferred Project Size</Label>
                  <Select onValueChange={(value) => handleSelectChange("projectSize", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred project size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small ($250-$750)</SelectItem>
                      <SelectItem value="medium">Medium ($750-$2,500)</SelectItem>
                      <SelectItem value="large">Large ($2,500-$10,000)</SelectItem>
                      <SelectItem value="enterprise">Enterprise ($10,000+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={handleBack} disabled={currentStep === 0}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button
              type="button"
              onClick={handleNext}
              disabled={isLoading}
              className="bg-purple-600 hover:bg-purple-700"
            >
              {currentStep === steps.length - 1 ? (
                isLoading ? (
                  "Completing Setup..."
                ) : (
                  "Complete Setup"
                )
              ) : (
                <>
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

