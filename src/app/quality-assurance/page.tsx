"use client";

import React from "react";
import { useState } from "react";

const mockData = [
  { id: 1, name: "Authentication API Tests", type: "Unit Test", status: "Passed", coverage: 98, duration: "2.4s", lastRun: "2024-01-15 14:30" },
  { id: 2, name: "Payment Integration Suite", type: "Integration", status: "Failed", coverage: 87, duration: "12.8s", lastRun: "2024-01-15 14:25" },
  { id: 3, name: "User Dashboard E2E", type: "End-to-End", status: "Running", coverage: 92, duration: "45.2s", lastRun: "2024-01-15 14:20" },
  { id: 4, name: "Database Migration Tests", type: "Unit Test", status: "Passed", coverage: 95, duration: "5.6s", lastRun: "2024-01-15 14:15" },
  { id: 5, name: "Security Vulnerability Scan", type: "Security", status: "Warning", coverage: 88, duration: "8.9s", lastRun: "2024-01-15 14:10" },
  { id: 6, name: "Performance Load Testing", type: "Performance", status: "Passed", coverage: 91, duration: "156.3s", lastRun: "2024-01-15 14:00" },
  { id: 7, name: "Mobile App UI Tests", type: "UI/UX", status: "Failed", coverage: 83, duration: "28.7s", lastRun: "2024-01-15 13:55" },
  { id: 8, name: "API Rate Limiting Tests", type: "Integration", status: "Passed", coverage: 96, duration: "7.2s", lastRun: "2024-01-15 13:50" }
];

export default function QualityAssurancePage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [data] = useState(mockData);
  
  const filtered = data.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || item.type === filter;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case "Passed": return "bg-green-100 text-green-800";
      case "Failed": return "bg-red-100 text-red-800";
      case "Running": return "bg-blue-100 text-blue-800";
      case "Warning": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quality Assurance & Testing</h1>
          <p className="text-gray-500 mt-1">Automated testing capabilities and quality validation processes</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-white text-gray-700 px-4 py-2 rounded-lg border hover:bg-gray-50">📊 Export Report</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">+ Add New Test</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500 mb-2">Total Tests</p>
          <p className="text-3xl font-bold text-gray-900">🧪 1,247</p>
          <p className="text-sm text-green-600 mt-1">+12 this week</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500 mb-2">Pass Rate</p>
          <p className="text-3xl font-bold text-green-600">✅ 94.3%</p>
          <p className="text-sm text-green-600 mt-1">+2.1% from last week</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500 mb-2">Code Coverage</p>
          <p className="text-3xl font-bold text-blue-600">📈 91.8%</p>
          <p className="text-sm text-blue-600 mt-1">Above 90% target</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500 mb-2">Active Issues</p>
          <p className="text-3xl font-bold text-red-600">⚠️ 23</p>
          <p className="text-sm text-red-600 mt-1">5 critical, 18 medium</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search tests by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-3">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="All">All Types</option>
              <option value="Unit Test">Unit Test</option>
              <option value="Integration">Integration</option>
              <option value="End-to-End">End-to-End</option>
              <option value="Security">Security</option>
              <option value="Performance">Performance</option>
              <option value="UI/UX">UI/UX</option>
            </select>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-4 font-medium text-gray-900">Test Name</th>
                <th className="text-left p-4 font-medium text-gray-900">Type</th>
                <th className="text-left p-4 font-medium text-gray-900">Status</th>
                <th className="text-left p-4 font-medium text-gray-900">Coverage</th>
                <th className="text-left p-4 font-medium text-gray-900">Duration</th>
                <th className="text-left p-4 font-medium text-gray-900">Last Run</th>
                <th className="text-left p-4 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((test) => (
                <tr key={test.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <div className="font-medium text-gray-900">{test.name}</div>
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      {test.type}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(test.status)}`}>
                      {test.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <div className="w-12 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{width: `${test.coverage}%`}}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{test.coverage}%</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">{test.duration}</td>
                  <td className="p-4 text-gray-600 text-sm">{test.lastRun}</td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View</button>
                      <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">Run</button>
                      <button className="text-red-600 hover:text-red-800 text-sm font-medium">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}