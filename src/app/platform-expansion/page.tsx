"use client";

import React from "react";
import { useState } from "react";

const mockExpansionPlans = [
  {
    id: 1,
    phase: "Phase 1: Multi-Language Support",
    timeline: "Q2 2024",
    status: "In Progress",
    priority: "High",
    description: "Implement internationalization for Spanish, French, and German markets",
    resources: ["2 Frontend Devs", "1 Localization Expert", "1 QA Engineer"],
    budget: "$85,000",
    progress: 65
  },
  {
    id: 2,
    phase: "Phase 2: Mobile App Development",
    timeline: "Q3 2024",
    status: "Planning",
    priority: "High",
    description: "Native iOS and Android applications with offline capabilities",
    resources: ["3 Mobile Devs", "1 UI/UX Designer", "1 Backend Dev"],
    budget: "$150,000",
    progress: 15
  },
  {
    id: 3,
    phase: "Phase 3: Enterprise API Gateway",
    timeline: "Q4 2024",
    status: "Research",
    priority: "Medium",
    description: "Scalable API infrastructure for enterprise clients with advanced analytics",
    resources: ["2 Backend Devs", "1 DevOps Engineer", "1 Solutions Architect"],
    budget: "$120,000",
    progress: 5
  },
  {
    id: 4,
    phase: "Phase 4: AI/ML Integration",
    timeline: "Q1 2025",
    status: "Concept",
    priority: "Medium",
    description: "Machine learning models for predictive analytics and automated insights",
    resources: ["2 ML Engineers", "1 Data Scientist", "1 Backend Dev"],
    budget: "$200,000",
    progress: 0
  },
  {
    id: 5,
    phase: "Phase 5: Marketplace Integration",
    timeline: "Q2 2025",
    status: "Concept",
    priority: "Low",
    description: "Third-party marketplace for plugins, themes, and extensions",
    resources: ["3 Full-stack Devs", "1 Product Manager", "1 Legal Advisor"],
    budget: "$180,000",
    progress: 0
  }
];

const mockScalingMetrics = [
  { metric: "Current Users", value: "12,450", target: "50,000", growth: "+125%" },
  { metric: "API Requests/Day", value: "2.3M", target: "10M", growth: "+335%" },
  { metric: "Data Storage", value: "850 GB", target: "5 TB", growth: "+488%" },
  { metric: "Server Uptime", value: "99.8%", target: "99.99%", growth: "+0.19%" },
  { metric: "Response Time", value: "120ms", target: "<50ms", growth: "-58%" }
];

const mockInfrastructure = [
  {
    component: "Load Balancers",
    current: "2 instances",
    planned: "Auto-scaling cluster",
    cost: "$3,200/month",
    timeline: "Q2 2024"
  },
  {
    component: "Database Cluster",
    current: "Single PostgreSQL",
    planned: "Multi-region cluster with read replicas",
    cost: "$8,500/month",
    timeline: "Q3 2024"
  },
  {
    component: "CDN Network",
    current: "Basic CDN",
    planned: "Global edge locations",
    cost: "$2,100/month",
    timeline: "Q2 2024"
  },
  {
    component: "Monitoring & Analytics",
    current: "Basic logging",
    planned: "Advanced APM with real-time alerts",
    cost: "$1,800/month",
    timeline: "Q4 2024"
  }
];

export default function PlatformExpansionPage() {
  const [activeTab, setActiveTab] = useState("roadmap");

  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Planning": return "bg-yellow-100 text-yellow-800";
      case "Research": return "bg-purple-100 text-purple-800";
      case "Concept": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Platform Expansion & Scaling</h1>
          <p className="text-xl text-gray-600">Strategic roadmap for future platform capabilities and infrastructure scaling</p>
        </div>

        <div className="mb-6">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab("roadmap")}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "roadmap"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Development Roadmap
            </button>
            <button
              onClick={() => setActiveTab("metrics")}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "metrics"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Scaling Metrics
            </button>
            <button
              onClick={() => setActiveTab("infrastructure")}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "infrastructure"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Infrastructure Planning
            </button>
          </nav>
        </div>

        {activeTab === "roadmap" && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Expansion Roadmap</h2>
              <div className="space-y-6">
                {mockExpansionPlans.map((plan) => (
                  <div key={plan.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{plan.phase}</h3>
                      <div className="flex space-x-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(plan.status)}`}>
                          {plan.status}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(plan.priority)}`}>
                          {plan.priority} Priority
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Timeline</h4>
                        <p className="text-sm text-gray-600">{plan.timeline}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Budget</h4>
                        <p className="text-sm text-gray-600 font-semibold">{plan.budget}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Resources</h4>
                        <div className="text-sm text-gray-600">
                          {plan.resources.map((resource, index) => (
                            <span key={index} className="inline-block bg-gray-100 rounded-md px-2 py-1 text-xs mr-1 mb-1">
                              {resource}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{plan.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${plan.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "metrics" && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Scaling Targets & Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockScalingMetrics.map((metric, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.metric}</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Current</span>
                        <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Target</span>
                        <span className="text-lg font-semibold text-blue-600">{metric.target}</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                        <span className="text-sm text-gray-600">Growth Needed</span>
                        <span className={`text-sm font-medium ${
                          metric.growth.includes('+') ? 'text-green-600' : 'text-blue-600'
                        }`}>{metric.growth}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Capacity Planning Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-3">Infrastructure Investments</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Server capacity increase by 400%
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Database optimization and sharding
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                        CDN expansion to 15 global regions
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        Auto-scaling implementation
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-3">Performance Goals</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                        99.99% uptime guarantee
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        <50ms average response time
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Support for 50K concurrent users
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                        10M daily API requests capacity
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "infrastructure" && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Infrastructure Scaling Plan</h2>
              <div className="space-y-6">
                {mockInfrastructure.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.component}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Current State</h4>
                        <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">{item.current}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Planned Upgrade</h4>
                        <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded">{item.planned}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Monthly Cost</h4>
                        <p className="text-sm font-semibold text-green-600 bg-green-50 p-3 rounded">{item.cost}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Timeline</h4>
                        <p className="text-sm text-gray-600 bg-yellow-50 p-3 rounded">{item.timeline}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Total Infrastructure Investment</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-blue-800">Initial Setup Costs</span>
                      <span className="font-semibold text-blue-900">$285,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-800">Monthly Operating Costs</span>
                      <span className="font-semibold text-blue-900">$15,600</span>
                    </div>
                    <div className="flex justify-between border-t border-blue-200 pt-3">
                      <span className="text-blue-800 font-medium">Annual Infrastructure Budget</span>
                      <span className="font-bold text-blue-900 text-xl">$472,200</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-4">Expected Benefits</h3>
                  <ul className="space-y-2 text-green-800">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      5x performance improvement
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      99.99% uptime guarantee
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Global user base support
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Reduced operational overhead
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Enterprise-grade security
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Strategic Vision 2025</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">15</div>
              <div className="text-blue-100">Global Regions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">99.99%</div>
              <div className="text-blue-100">Uptime SLA</div>
            </div>
          </div>
          <p className="mt-6 text-center text-blue-100 text-lg">
            Building the next-generation platform for global scale and enterprise readiness
          </p>
        </div>
      </div>
    </main>
  );
}