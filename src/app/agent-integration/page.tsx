"use client";

import React from "react";
import { useState } from "react";

const mockData = [
  { id: 1, name: "Code Review Agent", type: "Analysis", status: "Active", endpoint: "https://api.codereview.ai/v1", lastSync: "2024-01-15 14:30", requests: 2847 },
  { id: 2, name: "Test Generator", type: "Testing", status: "Active", endpoint: "https://testgen.dev/api/v2", lastSync: "2024-01-15 14:28", requests: 1923 },
  { id: 3, name: "Documentation AI", type: "Documentation", status: "Pending", endpoint: "https://docs-ai.com/integrate", lastSync: "2024-01-15 13:45", requests: 756 },
  { id: 4, name: "Security Scanner", type: "Security", status: "Active", endpoint: "https://security.ai/scan/api", lastSync: "2024-01-15 14:25", requests: 3241 },
  { id: 5, name: "Performance Optimizer", type: "Performance", status: "Error", endpoint: "https://perf-opt.dev/v1", lastSync: "2024-01-15 12:15", requests: 892 },
  { id: 6, name: "Deployment Assistant", type: "DevOps", status: "Active", endpoint: "https://deploy.ai/webhook", lastSync: "2024-01-15 14:32", requests: 1456 },
  { id: 7, name: "Bug Predictor", type: "Analysis", status: "Maintenance", endpoint: "https://bugpredict.ml/api", lastSync: "2024-01-15 11:20", requests: 534 },
  { id: 8, name: "Refactoring Agent", type: "Code Quality", status: "Active", endpoint: "https://refactor.dev/api/v3", lastSync: "2024-01-15 14:29", requests: 2103 }
];

export default function AgentIntegrationPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [data] = useState(mockData);
  
  const filtered = data.filter(d => {
    const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase()) || d.type.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || d.status === filter;
    return matchesSearch && matchesFilter;
  });
  
  const totalAgents = data.length;
  const activeAgents = data.filter(d => d.status === "Active").length;
  const totalRequests = data.reduce((sum, d) => sum + d.requests, 0);
  const errorAgents = data.filter(d => d.status === "Error").length;
  
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Agent Integration Framework</h1>
          <p className="text-gray-500 mt-1">Manage AI agent integrations and monitor ecosystem connections</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
            <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Export
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            + Add Integration
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500 mb-1">Total Integrations</p>
          <p className="text-3xl font-bold text-gray-900">🤖 {totalAgents}</p>
          <p className="text-xs text-green-600 mt-1">+3 this week</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500 mb-1">Active Agents</p>
          <p className="text-3xl font-bold text-green-600">✅ {activeAgents}</p>
          <p className="text-xs text-gray-500 mt-1">{Math.round(activeAgents/totalAgents*100)}% uptime</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500 mb-1">API Requests</p>
          <p className="text-3xl font-bold text-blue-600">📊 {totalRequests.toLocaleString()}</p>
          <p className="text-xs text-blue-600 mt-1">Last 24h</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500 mb-1">Issues</p>
          <p className="text-3xl font-bold text-red-600">⚠️ {errorAgents}</p>
          <p className="text-xs text-red-600 mt-1">Needs attention</p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input 
              value={search} 
              onChange={e => setSearch(e.target.value)} 
              placeholder="Search integrations..." 
              className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-80 focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            />
            <select 
              value={filter} 
              onChange={e => setFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Error">Error</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>
          <button className="text-gray-600 hover:text-gray-900 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
            </svg>
            Sort
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-4 font-semibold text-gray-900">Agent Name</th>
                <th className="text-left p-4 font-semibold text-gray-900">Type</th>
                <th className="text-left p-4 font-semibold text-gray-900">Status</th>
                <th className="text-left p-4 font-semibold text-gray-900">Endpoint</th>
                <th className="text-left p-4 font-semibold text-gray-900">Last Sync</th>
                <th className="text-left p-4 font-semibold text-gray-900">Requests</th>
                <th className="text-left p-4 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(item => (
                <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-gray-900">{item.name}</td>
                  <td className="p-4 text-gray-600">{item.type}</td>
                  <td className="p-4">
                    <span className={"px-3 py-1 rounded-full text-xs font-medium " + 
                      (item.status === "Active" ? "bg-green-100 text-green-800" : 
                       item.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                       item.status === "Error" ? "bg-red-100 text-red-800" :
                       "bg-gray-100 text-gray-800")}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-600 font-mono max-w-xs truncate">{item.endpoint}</td>
                  <td className="p-4 text-sm text-gray-600">{item.lastSync}</td>
                  <td className="p-4 text-sm font-medium text-gray-900">{item.requests.toLocaleString()}</td>
                  <td className="p-4">
                    <div className="flex space-x-3">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">View</button>
                      <button className="text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors">Edit</button>
                      <button className="text-red-600 hover:text-red-800 text-sm font-medium transition-colors">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filtered.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 8.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
            <p className="text-lg font-medium">No integrations found</p>
            <p className="text-sm mt-1">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </main>
  );
}