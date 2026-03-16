"use client";

import React from "react";
import { useState } from "react";

const mockData = [
  { id: 1, name: "E-commerce Platform", status: "Building", progress: 78, brdComplexity: "High", timeEstimate: "6 hours", lastUpdated: "2024-01-15 14:30" },
  { id: 2, name: "User Authentication System", status: "Completed", progress: 100, brdComplexity: "Medium", timeEstimate: "3 hours", lastUpdated: "2024-01-15 12:15" },
  { id: 3, name: "Payment Gateway Integration", status: "Analyzing", progress: 25, brdComplexity: "High", timeEstimate: "8 hours", lastUpdated: "2024-01-15 13:45" },
  { id: 4, name: "Inventory Management", status: "Building", progress: 45, brdComplexity: "Medium", timeEstimate: "4 hours", lastUpdated: "2024-01-15 11:20" },
  { id: 5, name: "Customer Dashboard", status: "Queued", progress: 0, brdComplexity: "Low", timeEstimate: "2 hours", lastUpdated: "2024-01-15 10:00" },
  { id: 6, name: "API Documentation", status: "Building", progress: 85, brdComplexity: "Low", timeEstimate: "1 hour", lastUpdated: "2024-01-15 15:00" },
  { id: 7, name: "Database Schema", status: "Error", progress: 60, brdComplexity: "High", timeEstimate: "5 hours", lastUpdated: "2024-01-15 09:30" }
];

export default function DevAiPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [data] = useState(mockData);
  
  const filtered = data.filter(d => {
    const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || d.status === filter;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "Building": return "bg-blue-100 text-blue-800";
      case "Analyzing": return "bg-yellow-100 text-yellow-800";
      case "Queued": return "bg-gray-100 text-gray-800";
      case "Error": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getComplexityColor = (complexity) => {
    switch(complexity) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dev AI Engine</h1>
          <p className="text-gray-500 mt-1">Core development engine for interpreting BRDs and building production-ready systems</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            🤖 New Build Task
          </button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
            📊 Export Report
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500 mb-1">Active Projects</p>
          <p className="text-3xl font-bold text-blue-600">🚀 12</p>
          <p className="text-xs text-gray-400 mt-2">Currently building</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500 mb-1">Completion Rate</p>
          <p className="text-3xl font-bold text-green-600">✅ 94.7%</p>
          <p className="text-xs text-gray-400 mt-2">Last 30 days</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500 mb-1">Avg Build Time</p>
          <p className="text-3xl font-bold text-purple-600">⚡ 4.2h</p>
          <p className="text-xs text-gray-400 mt-2">Per project</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500 mb-1">Error Rate</p>
          <p className="text-3xl font-bold text-red-600">⚠️ 2.1%</p>
          <p className="text-xs text-gray-400 mt-2">Requires attention</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Development Projects</h2>
          <div className="flex space-x-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="🔍 Search projects..."
              className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Status</option>
              <option value="Completed">Completed</option>
              <option value="Building">Building</option>
              <option value="Analyzing">Analyzing</option>
              <option value="Queued">Queued</option>
              <option value="Error">Error</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-4 font-semibold text-gray-700">Project Name</th>
                <th className="text-left p-4 font-semibold text-gray-700">Status</th>
                <th className="text-left p-4 font-semibold text-gray-700">Progress</th>
                <th className="text-left p-4 font-semibold text-gray-700">Complexity</th>
                <th className="text-left p-4 font-semibold text-gray-700">Est. Time</th>
                <th className="text-left p-4 font-semibold text-gray-700">Last Updated</th>
                <th className="text-left p-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(item => (
                <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <div className="font-medium text-gray-900">{item.name}</div>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{item.progress}%</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(item.brdComplexity)}`}>
                      {item.brdComplexity}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">{item.timeEstimate}</td>
                  <td className="p-4 text-sm text-gray-500">{item.lastUpdated}</td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline transition-colors">
                        View
                      </button>
                      <button className="text-gray-600 hover:text-gray-800 text-sm font-medium hover:underline transition-colors">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-800 text-sm font-medium hover:underline transition-colors">
                        Stop
                      </button>
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