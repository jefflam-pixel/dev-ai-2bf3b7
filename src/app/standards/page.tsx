"use client";

import React from "react";
import { useState } from "react";

const productionStandards = [
  {
    id: 1,
    category: "Code Quality",
    standards: [
      { name: "Test Coverage", requirement: "≥90% unit test coverage", status: "Required", priority: "Critical" },
      { name: "ESLint Compliance", requirement: "Zero linting errors", status: "Required", priority: "Critical" },
      { name: "TypeScript Strict Mode", requirement: "Enabled with no any types", status: "Required", priority: "High" },
      { name: "Code Review", requirement: "Minimum 2 approvals", status: "Required", priority: "High" }
    ]
  },
  {
    id: 2,
    category: "Performance",
    standards: [
      { name: "Core Web Vitals", requirement: "LCP <2.5s, FID <100ms, CLS <0.1", status: "Required", priority: "Critical" },
      { name: "Bundle Size", requirement: "<500KB gzipped", status: "Required", priority: "High" },
      { name: "API Response Time", requirement: "<200ms 95th percentile", status: "Required", priority: "Critical" },
      { name: "Memory Usage", requirement: "<512MB peak usage", status: "Required", priority: "Medium" }
    ]
  },
  {
    id: 3,
    category: "Security",
    standards: [
      { name: "OWASP Top 10", requirement: "Zero vulnerabilities", status: "Required", priority: "Critical" },
      { name: "Dependency Scan", requirement: "No high/critical CVEs", status: "Required", priority: "Critical" },
      { name: "Authentication", requirement: "JWT with refresh tokens", status: "Required", priority: "Critical" },
      { name: "HTTPS Only", requirement: "TLS 1.3 minimum", status: "Required", priority: "Critical" }
    ]
  },
  {
    id: 4,
    category: "Monitoring",
    standards: [
      { name: "Uptime SLA", requirement: "99.9% availability", status: "Required", priority: "Critical" },
      { name: "Error Tracking", requirement: "Real-time error monitoring", status: "Required", priority: "High" },
      { name: "Performance Metrics", requirement: "APM with alerting", status: "Required", priority: "High" },
      { name: "Log Aggregation", requirement: "Centralized structured logs", status: "Required", priority: "Medium" }
    ]
  },
  {
    id: 5,
    category: "Documentation",
    standards: [
      { name: "API Documentation", requirement: "OpenAPI 3.0 specification", status: "Required", priority: "High" },
      { name: "Architecture Docs", requirement: "C4 model diagrams", status: "Required", priority: "Medium" },
      { name: "Deployment Guide", requirement: "Step-by-step procedures", status: "Required", priority: "High" },
      { name: "Runbooks", requirement: "Incident response procedures", status: "Required", priority: "Critical" }
    ]
  }
];

const complianceMetrics = {
  overall: 87,
  categories: {
    "Code Quality": 95,
    "Performance": 82,
    "Security": 91,
    "Monitoring": 78,
    "Documentation": 89
  }
};

export default function ProductionStandardsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showCompliant, setShowCompliant] = useState(false);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Critical": return "text-red-600 bg-red-50 border-red-200";
      case "High": return "text-orange-600 bg-orange-50 border-orange-200";
      case "Medium": return "text-yellow-600 bg-yellow-50 border-yellow-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getComplianceColor = (score) => {
    if (score >= 90) return "text-green-600";
    if (score >= 80) return "text-yellow-600";
    return "text-red-600";
  };

  const filteredStandards = selectedCategory === "all" 
    ? productionStandards 
    : productionStandards.filter(cat => cat.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Production System Standards</h1>
          <p className="text-lg text-gray-600">Requirements and compliance tracking for production deployment</p>
        </div>

        {/* Compliance Dashboard */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Compliance Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{complianceMetrics.overall}%</div>
              <div className="text-sm text-gray-600">Overall</div>
            </div>
            {Object.entries(complianceMetrics.categories).map(([category, score]) => (
              <div key={category} className="text-center">
                <div className={`text-2xl font-bold mb-1 ${getComplianceColor(score)}`}>{score}%</div>
                <div className="text-xs text-gray-600">{category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Category:</label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Categories</option>
                {productionStandards.map(cat => (
                  <option key={cat.id} value={cat.category}>{cat.category}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="showCompliant" 
                checked={showCompliant} 
                onChange={(e) => setShowCompliant(e.target.checked)}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="showCompliant" className="text-sm font-medium text-gray-700">Show only compliant</label>
            </div>
          </div>
        </div>

        {/* Standards Grid */}
        <div className="space-y-6">
          {filteredStandards.map(category => (
            <div key={category.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">{category.category}</h3>
                  <span className={`text-lg font-bold ${getComplianceColor(complianceMetrics.categories[category.category])}`}>
                    {complianceMetrics.categories[category.category]}% Compliant
                  </span>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {category.standards.map((standard, index) => {
                  const isCompliant = Math.random() > 0.2; // Mock compliance status
                  if (showCompliant && !isCompliant) return null;
                  
                  return (
                    <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="text-lg font-medium text-gray-900">{standard.name}</h4>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(standard.priority)}`}>
                              {standard.priority}
                            </span>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              isCompliant ? "text-green-600 bg-green-50 border border-green-200" : "text-red-600 bg-red-50 border border-red-200"
                            }`}>
                              {isCompliant ? "Compliant" : "Non-Compliant"}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-3">{standard.requirement}</p>
                          <div className="text-sm text-gray-500">
                            Status: <span className="font-medium">{standard.status}</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          {isCompliant ? (
                            <div className="flex items-center text-green-600">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                          ) : (
                            <div className="flex items-center text-red-600">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Action Items */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Critical Action Items</h3>
          <ul className="space-y-2 text-red-700">
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>Implement real-time error tracking system</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>Optimize API response times for 95th percentile</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>Complete incident response runbooks</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}