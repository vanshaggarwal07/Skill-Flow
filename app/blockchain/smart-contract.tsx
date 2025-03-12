"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Clock, DollarSign, Lock, Unlock, FileCheck, Star } from "lucide-react"

export default function SmartContractPage() {
  const [contractState, setContractState] = useState("draft") // draft, pending, active, completed, disputed
  const [isEscrowFunded, setIsEscrowFunded] = useState(false)
  const [isWorkSubmitted, setIsWorkSubmitted] = useState(false)
  const [isWorkApproved, setIsWorkApproved] = useState(false)

  const handleFundEscrow = () => {
    setIsEscrowFunded(true)
    setContractState("active")
  }

  const handleSubmitWork = () => {
    setIsWorkSubmitted(true)
    setContractState("pending")
  }

  const handleApproveWork = () => {
    setIsWorkApproved(true)
    setContractState("completed")
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Blockchain Smart Contract</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatusCard
          title="Contract Status"
          value={contractState}
          icon={
            contractState === "completed" ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : contractState === "disputed" ? (
              <AlertCircle className="h-5 w-5 text-red-500" />
            ) : (
              <Clock className="h-5 w-5 text-blue-500" />
            )
          }
        />
        <StatusCard
          title="Escrow Status"
          value={isEscrowFunded ? "Funded" : "Not Funded"}
          icon={
            isEscrowFunded ? <Lock className="h-5 w-5 text-green-500" /> : <Unlock className="h-5 w-5 text-gray-500" />
          }
        />
        <StatusCard
          title="Payment Status"
          value={isWorkApproved ? "Released" : "Locked"}
          icon={
            isWorkApproved ? (
              <DollarSign className="h-5 w-5 text-green-500" />
            ) : (
              <Lock className="h-5 w-5 text-blue-500" />
            )
          }
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Smart Contract Details</CardTitle>
              <CardDescription>
                This blockchain-powered smart contract ensures secure payment and project delivery
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Contract ID</Label>
                <div className="flex items-center mt-1">
                  <code className="bg-gray-100 p-2 rounded text-sm flex-1 font-mono">
                    0x7a58c0be32697c0e1a3c8a3f8b318ff0c10e54f2
                  </code>
                  <Button variant="ghost" size="sm" className="ml-2">
                    Copy
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Client</Label>
                  <p className="text-sm mt-1">TechCorp Inc.</p>
                </div>
                <div>
                  <Label>Freelancer</Label>
                  <p className="text-sm mt-1">John Doe</p>
                </div>
                <div>
                  <Label>Created On</Label>
                  <p className="text-sm mt-1">March 10, 2025</p>
                </div>
                <div>
                  <Label>Due Date</Label>
                  <p className="text-sm mt-1">April 15, 2025</p>
                </div>
              </div>

              <div>
                <Label>Contract Amount</Label>
                <div className="flex items-center mt-1">
                  <Badge className="bg-green-100 text-green-800 text-lg">$2,500.00</Badge>
                  <span className="text-xs text-gray-500 ml-2">(0.75 ETH at current exchange rate)</span>
                </div>
              </div>

              <div>
                <Label>Project Description</Label>
                <p className="text-sm mt-1 bg-gray-50 p-3 rounded">
                  Design and develop a responsive e-commerce website with product catalog, shopping cart, and payment
                  integration. The website should be built using React.js and include admin dashboard for product
                  management.
                </p>
              </div>

              <div>
                <Label>Milestones</Label>
                <div className="space-y-2 mt-2">
                  <div className="flex items-center p-2 bg-gray-50 rounded">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Design Approval</span>
                    <Badge className="ml-auto">$500</Badge>
                  </div>
                  <div className="flex items-center p-2 bg-gray-50 rounded">
                    <Clock className="h-4 w-4 text-blue-500 mr-2" />
                    <span className="text-sm">Frontend Development</span>
                    <Badge className="ml-auto">$1,000</Badge>
                  </div>
                  <div className="flex items-center p-2 bg-gray-50 rounded">
                    <Clock className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm">Backend Integration</span>
                    <Badge className="ml-auto">$1,000</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Blockchain Transaction History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start border-b pb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FileCheck className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium text-sm">Contract Created</p>
                      <span className="text-xs text-gray-500">Mar 10, 2025</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Transaction: 0x3a1b...2e4f</p>
                  </div>
                </div>

                {isEscrowFunded && (
                  <div className="flex items-start border-b pb-3">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <Lock className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="font-medium text-sm">Escrow Funded</p>
                        <span className="text-xs text-gray-500">Mar 12, 2025</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Transaction: 0x7c4d...9a2b</p>
                    </div>
                  </div>
                )}

                {isWorkSubmitted && (
                  <div className="flex items-start border-b pb-3">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <FileCheck className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="font-medium text-sm">Work Submitted</p>
                        <span className="text-xs text-gray-500">Apr 10, 2025</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Transaction: 0x5e2f...1c8d</p>
                    </div>
                  </div>
                )}

                {isWorkApproved && (
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <DollarSign className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="font-medium text-sm">Payment Released</p>
                        <span className="text-xs text-gray-500">Apr 12, 2025</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Transaction: 0x9f1e...4d7a</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Contract Actions</CardTitle>
              <CardDescription>Manage your smart contract with blockchain-secured transactions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {!isEscrowFunded && (
                <div>
                  <Alert className="mb-4 bg-blue-50 border-blue-200">
                    <AlertCircle className="h-4 w-4 text-blue-600" />
                    <AlertTitle>Fund Escrow</AlertTitle>
                    <AlertDescription>
                      The client needs to fund the escrow account to start the project.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div>
                      <Label>Payment Method</Label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="border rounded p-3 flex items-center cursor-pointer bg-gray-50">
                          <input type="radio" name="payment" id="crypto" className="mr-2" defaultChecked />
                          <label htmlFor="crypto" className="text-sm cursor-pointer">
                            Cryptocurrency (ETH)
                          </label>
                        </div>
                        <div className="border rounded p-3 flex items-center cursor-pointer">
                          <input type="radio" name="payment" id="fiat" className="mr-2" />
                          <label htmlFor="fiat" className="text-sm cursor-pointer">
                            Fiat (USD)
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label>Amount</Label>
                      <div className="flex items-center mt-1">
                        <Input value="0.75" readOnly />
                        <span className="mx-2">ETH</span>
                        <span className="text-gray-500">($2,500.00)</span>
                      </div>
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={handleFundEscrow}>
                      Fund Escrow
                    </Button>
                  </div>
                </div>
              )}

              {isEscrowFunded && !isWorkSubmitted && (
                <div>
                  <Alert className="mb-4 bg-blue-50 border-blue-200">
                    <AlertCircle className="h-4 w-4 text-blue-600" />
                    <AlertTitle>Submit Work</AlertTitle>
                    <AlertDescription>
                      Once you've completed the project, submit your work for client approval.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="deliverables">Deliverables</Label>
                      <Textarea
                        id="deliverables"
                        placeholder="Describe what you're delivering and include any relevant links or files"
                        className="mt-1"
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label>Attachments</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mt-1 text-center cursor-pointer hover:border-purple-500 transition-colors">
                        <p className="text-sm font-medium">Upload Files</p>
                        <p className="text-xs text-gray-500 mt-1">Drag & drop or click to upload</p>
                      </div>
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={handleSubmitWork}>
                      Submit Work
                    </Button>
                  </div>
                </div>
              )}

              {isWorkSubmitted && !isWorkApproved && (
                <div>
                  <Alert className="mb-4 bg-green-50 border-green-200">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertTitle>Work Submitted</AlertTitle>
                    <AlertDescription>Your work has been submitted and is awaiting client approval.</AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded">
                      <h4 className="font-medium text-sm mb-2">Submitted Deliverables</h4>
                      <p className="text-sm text-gray-600">
                        I've completed the e-commerce website as requested. The site includes all the features specified
                        in the contract: responsive design, product catalog, shopping cart, and payment integration.
                      </p>
                      <div className="mt-2">
                        <a href="#" className="text-sm text-purple-600 hover:text-purple-800 flex items-center">
                          <FileCheck className="h-4 w-4 mr-1" />
                          View Deliverables
                        </a>
                      </div>
                    </div>

                    <div>
                      <Label>Client Response</Label>
                      <div className="flex items-center justify-center h-24 bg-gray-50 rounded mt-1">
                        <Clock className="h-6 w-6 text-gray-400 mr-2" />
                        <span className="text-gray-500">Awaiting client review</span>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full" onClick={handleApproveWork}>
                      Simulate Client Approval
                    </Button>
                  </div>
                </div>
              )}

              {isWorkApproved && (
                <div>
                  <Alert className="mb-4 bg-green-50 border-green-200">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertTitle>Contract Completed</AlertTitle>
                    <AlertDescription>
                      The client has approved your work and payment has been released from escrow.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded">
                      <h4 className="font-medium text-sm mb-2">Payment Released</h4>
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                        <span className="text-lg font-bold">$2,500.00</span>
                        <span className="text-sm text-gray-500 ml-2">(0.75 ETH)</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">Payment has been transferred to your wallet.</p>
                    </div>

                    <div>
                      <Label>Client Feedback</Label>
                      <div className="bg-gray-50 p-4 rounded mt-1">
                        <div className="flex items-center mb-2">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm font-medium ml-2">5.0/5.0</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          "Excellent work! The website looks great and functions perfectly. All requirements were met
                          and the project was delivered on time. Would definitely work with this freelancer again."
                        </p>
                      </div>
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700">View Contract Certificate</Button>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col">
              <div className="w-full pt-4 border-t text-sm text-gray-500">
                <p className="mb-2">
                  This smart contract is secured by SkillFlow's blockchain technology. All transactions are immutable
                  and transparent.
                </p>
                <a href="#" className="text-purple-600 hover:text-purple-800">
                  View on Blockchain Explorer
                </a>
              </div>
            </CardFooter>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Dispute Resolution</CardTitle>
              <CardDescription>
                In case of disagreements, our blockchain-based dispute resolution system ensures fair outcomes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  If you encounter any issues with this contract, you can initiate our decentralized dispute resolution
                  process. A panel of verified experts will review the case and make a fair decision.
                </p>

                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-medium text-sm mb-2">How It Works</h4>
                  <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                    <li>Initiate a dispute through the platform</li>
                    <li>Both parties submit evidence</li>
                    <li>A panel of 3 experts reviews the case</li>
                    <li>Decision is made within 72 hours</li>
                    <li>Funds are released according to the decision</li>
                  </ol>
                </div>

                <Button variant="outline" className="w-full" disabled={isWorkApproved}>
                  Initiate Dispute Resolution
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function StatusCard({ title, value, icon }) {
  const getStatusColor = (value) => {
    switch (value) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "disputed":
        return "bg-red-100 text-red-800"
      case "active":
        return "bg-blue-100 text-blue-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "Funded":
        return "bg-green-100 text-green-800"
      case "Released":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <div className="flex items-center mt-1">
              <Badge className={`${getStatusColor(value)} capitalize`}>{value}</Badge>
            </div>
          </div>
          <div className="rounded-full p-2 bg-gray-100">{icon}</div>
        </div>
      </CardContent>
    </Card>
  )
}

