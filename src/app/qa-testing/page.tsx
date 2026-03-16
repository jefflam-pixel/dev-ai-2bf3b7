"use client";

import React from "react";
import { useState } from "react";

const mockData = [
  { id: 1, testSuite: "Authentication Tests", status: "Passed", coverage: 98.5, bugs: 0, lastRun: "2024-01-15 14:30", environment: "Staging" },
  { id: 2, testSuite: "API Integration Tests", status: "Failed", coverage: 92.1, bugs: 3, lastRun: "2024-01-15 13:45", environment: "Development" },
  { id: 3, testSuite: "UI Component Tests", status: "Running", coverage: 89.7, bugs: 1, lastRun: "2024-01-15 15:20", environment: "Testing" },
  { id: 4, testSuite: "Performance Tests", status: "Passed", coverage: 95.3, bugs: 0, lastRun: "2024-01-15 12:10", environment: "Production" },
  { id: 5, testSuite: "Security Validation", status: "Warning", coverage: 87.2, bugs: 2, lastRun: "2024-01-15 11:55", environment: "Staging" },
  { id: 6, testSuite: "Database Tests", status: "Passed", coverage: 96.8, bugs: 0, lastRun: "2024-01-15 14:05", environment: "Development" },
  { id: 7, testSuite: "Cross-browser Tests", status: "Failed", coverage: 83.4, bugs: 5, lastRun: "2024-01-15 13:20", environment: "Testing" },
  { id: 8, testSuite: "Mobile Responsiveness", status: "Passed", coverage: 91.6, bugs: 1, lastRun: "2024-01-15 15:45", environment: "Staging" }
];

export default function QATestingPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [data] = useState(mockData);
  
  const filtered = data.filter(item => {
    const matchesSearch = item.testSuite.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || item.status === filter;
    return matchesSearch && matchesFilter;
  });

  const getStatusStyle = (status) => {
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
          <p className="text-gray-500 mt-2">Automated testing capabilities and quality validation processes</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center">
            📊 Export Results
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
            🧪 Add Test Suite
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Test Suites</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">48</p>
            </div>
            <div className="text-4xl">🧪</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Pass Rate</p>
              <p className="text-3xl font-bold text-green-600 mt-1">87.5%</p>
            </div>
            <div className="text-4xl">✅</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Active Bugs</p>
              <p className="text-3xl font-bold text-red-600 mt-1">12</p>
            </div>
            <div className="text-4xl">🐛</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Coverage</p>
              <p className="text-3xl font-bold text-blue-600 mt-1">92.1%</p>
            </div>
            <div className="text-4xl">📊</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search test suites..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="All">All Status</option>
            <option value="Passed">Passed</option>
            <option value="Failed">Failed</option>
            <option value="Running">Running</option>
            <option value="Warning">Warning</option>
          </select>
          <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 flex items-center">
            ↕️ Sort
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Test Suite</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Coverage</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Bugs</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Environment</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Last Run</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-medium text-gray-900">{item.testSuite}</div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyle(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-900 font-medium">{item.coverage}%</td>
                  <td className="py-4 px-4">
                    <span className={`font-medium ${item.bugs === 0 ? 'text-green-600' : item.bugs <= 2 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {item.bugs}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800">
                      {item.environment}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-500">{item.lastRun}</td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">View</button>
                      <button className="text-green-600 hover:text-green-900 text-sm font-medium">Run</button>
                      <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">Edit</button>
                      <button className="text-red-600 hover:text-red-900 text-sm font-medium">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filtered.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No test suites found matching your criteria.</p>
          </div>
        )}
      </div>
    </main>
  );
}