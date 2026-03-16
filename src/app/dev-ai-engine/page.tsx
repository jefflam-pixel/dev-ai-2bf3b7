"use client";

import React from "react";
import { useState } from "react";

const mockData = [
  { id: 1, name: "E-commerce Platform", brdId: "BRD-2024-001", status: "Active", progress: 85, complexity: "High", assignedAgent: "Agent-Alpha", lastUpdated: "2024-01-15" },
  { id: 2, name: "CRM Dashboard", brdId: "BRD-2024-002", status: "In Progress", progress: 62, complexity: "Medium", assignedAgent: "Agent-Beta", lastUpdated: "2024-01-14" },
  { id: 3, name: "API Gateway", brdId: "BRD-2024-003", status: "Pending", progress: 15, complexity: "High", assignedAgent: "Agent-Gamma", lastUpdated: "2024-01-13" },
  { id: 4, name: "Mobile App Backend", brdId: "BRD-2024-004", status: "Active", progress: 78, complexity: "Medium", assignedAgent: "Agent-Alpha", lastUpdated: "2024-01-15" },
  { id: 5, name: "Analytics Engine", brdId: "BRD-2024-005", status: "Completed", progress: 100, complexity: "High", assignedAgent: "Agent-Delta", lastUpdated: "2024-01-12" },
  { id: 6, name: "Payment System", brdId: "BRD-2024-006", status: "Error", progress: 45, complexity: "Critical", assignedAgent: "Agent-Beta", lastUpdated: "2024-01-14" },
  { id: 7, name: "User Management", brdId: "BRD-2024-007", status: "In Progress", progress: 33, complexity: "Low", assignedAgent: "Agent-Epsilon", lastUpdated: "2024-01-15" }
];

export default function DevAIEnginePage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [data] = useState(mockData);
  
  const filtered = data.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.brdId.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || item.status.toLowerCase() === filter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case "Active": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Completed": return "bg-emerald-100 text-emerald-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Error": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getComplexityColor = (complexity) => {
    switch(complexity) {
      case "Low": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "High": return "bg-orange-100 text-orange-800";
      case "Critical": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dev AI Engine</h1>
          <p className="text-gray-500 mt-2">Core development engine for interpreting BRDs and building production-ready systems</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-white text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-50 border">📤 Export</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow">+ New Project</button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Projects</p>
              <p className="text-3xl font-bold text-gray-900">47</p>
            </div>
            <div className="text-3xl">🚀</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Active Builds</p>
              <p className="text-3xl font-bold text-blue-600">12</p>
            </div>
            <div className="text-3xl">⚡</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Success Rate</p>
              <p className="text-3xl font-bold text-green-600">94.2%</p>
            </div>
            <div className="text-3xl">✅</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Avg Build Time</p>
              <p className="text-3xl font-bold text-purple-600">2.4h</p>
            </div>
            <div className="text-3xl">⏱️</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-lg">
        {/* Controls */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex space-x-4">
            <div className="flex-1">
              <input 
                type="text"
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                placeholder="Search projects or BRD IDs..." 
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="in progress">In Progress</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="error">Error</option>
            </select>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left p-4 font-semibold text-gray-700">Project</th>
                <th className="text-left p-4 font-semibold text-gray-700">BRD ID</th>
                <th className="text-left p-4 font-semibold text-gray-700">Status</th>
                <th className="text-left p-4 font-semibold text-gray-700">Progress</th>
                <th className="text-left p-4 font-semibold text-gray-700">Complexity</th>
                <th className="text-left p-4 font-semibold text-gray-700">Agent</th>
                <th className="text-left p-4 font-semibold text-gray-700">Updated</th>
                <th className="text-left p-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <div className="font-medium text-gray-900">{item.name}</div>
                  </td>
                  <td className="p-4 text-gray-600 font-mono text-sm">{item.brdId}</td>
                  <td className="p-4">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all" 
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{item.progress}%</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(item.complexity)}`}>
                      {item.complexity}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600 text-sm">{item.assignedAgent}</td>
                  <td className="p-4 text-gray-500 text-sm">{item.lastUpdated}</td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View</button>
                      <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">Edit</button>
                      <button className="text-red-600 hover:text-red-800 text-sm font-medium">Stop</button>
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