"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Zap, Github, ChromeIcon as Google } from "lucide-react"

export default function SignupPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    accountType: "freelancer",
    agreeToTerms: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleAccountTypeChange = (type) => {
    setFormData((prev) => ({ ...prev, accountType: type }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions")
      return
    }

    setIsLoading(true)

    // Simulate account creation
    setTimeout(() => {
      setIsLoading(false)
      router.push("/onboarding")
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <Zap className="h-6 w-6 text-purple-600" />
            <span className="text-2xl font-bold">SkillFlow</span>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Create an account</CardTitle>
            <CardDescription className="text-center">Join SkillFlow and start your freelancing journey</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
                <p className="text-xs text-gray-500">
                  Password must be at least 8 characters long with a mix of letters, numbers, and symbols.
                </p>
              </div>

              <div className="space-y-2">
                <Label>I want to join as</Label>
                <div className="grid grid-cols-2 gap-4 mt-1">
                  <Button
                    type="button"
                    variant={formData.accountType === "freelancer" ? "default" : "outline"}
                    className={formData.accountType === "freelancer" ? "bg-purple-600 hover:bg-purple-700" : ""}
                    onClick={() => handleAccountTypeChange("freelancer")}
                  >
                    Freelancer
                  </Button>
                  <Button
                    type="button"
                    variant={formData.accountType === "client" ? "default" : "outline"}
                    className={formData.accountType === "client" ? "bg-purple-600 hover:bg-purple-700" : ""}
                    onClick={() => handleAccountTypeChange("client")}
                  >
                    Client
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-2 mt-4">
                <Checkbox
                  id="terms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeToTerms: checked === true }))}
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <Link href="/terms" className="text-purple-600 hover:text-purple-800">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-purple-600 hover:text-purple-800">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <Google className="mr-2 h-4 w-4" />
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-purple-600 hover:text-purple-800 font-medium">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

