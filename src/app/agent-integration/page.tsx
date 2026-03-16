"use client";

import React from "react";
import { useState } from "react";

const mockData = [
  { id: 1, name: "CodeGen AI", type: "Code Generation", status: "Active", version: "v2.1.3", lastSync: "2 mins ago", endpoints: 8, requests: 12847 },
  { id: 2, name: "TestBot Pro", type: "Test Automation", status: "Active", version: "v1.8.2", lastSync: "5 mins ago", endpoints: 12, requests: 8923 },
  { id: 3, name: "ReviewMaster", type: "Code Review", status: "Pending", version: "v3.0.1", lastSync: "1 hour ago", endpoints: 6, requests: 3456 },
  { id: 4, name: "DeployBot", type: "CI/CD Assistant", status: "Active", version: "v2.4.0", lastSync: "10 mins ago", endpoints: 15, requests: 15672 },
  { id: 5, name: "SecurityScan AI", type: "Security Analysis", status: "Warning", version: "v1.9.7", lastSync: "3 hours ago", endpoints: 4, requests: 2134 },
  { id: 6, name: "DocuGen", type: "Documentation", status: "Active", version: "v1.2.8", lastSync: "15 mins ago", endpoints: 3, requests: 987 },
  { id: 7, name: "PerformanceBot", type: "Performance Testing", status: "Inactive", version: "v2.0.5", lastSync: "2 days ago", endpoints: 7, requests: 0 },
  { id: 8, name: "BugHunter AI", type: "Bug Detection", status: "Active", version: "v1.5.3", lastSync: "1 min ago", endpoints: 9, requests: 6789 }
];

export default function AgentIntegrationPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [data] = useState(mockData);
  
  const filtered = data.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.type.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || item.status.toLowerCase() === filter.toLowerCase();
    return matchesSearch && matchesFilter;
  });
  
  const totalAgents = data.length;
  const activeAgents = data.filter(a => a.status === "Active").length;
  const totalEndpoints = data.reduce((sum, a) => sum + a.endpoints, 0);
  const totalRequests = data.reduce((sum, a) => sum + a.requests, 0);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Agent Integration Framework</h1>
          <p className="text-gray-500 mt-1">Manage AI agent integrations and monitor ecosystem connections</p>
        </div>
        <div className="space-x-3">
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 font-medium">📊 Export Data</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium">🤖 Add New Agent</button>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500 mb-2">Total Agents</p>
          <p className="text-3xl font-bold text-gray-900">🤖 {totalAgents}</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500 mb-2">Active Agents</p>
          <p className="text-3xl font-bold text-green-600">✅ {activeAgents}</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500 mb-2">API Endpoints</p>
          <p className="text-3xl font-bold text-blue-600">🔗 {totalEndpoints}</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500 mb-2">Total Requests</p>
          <p className="text-3xl font-bold text-purple-600">📈 {totalRequests.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Integration Dashboard</h2>
          <div className="flex space-x-4">
            <input 
              type="text" 
              placeholder="Search agents..." 
              value={search} 
              onChange={e => setSearch(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select 
              value={filter} 
              onChange={e => setFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="warning">Warning</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-4 font-semibold text-gray-900">Agent Name</th>
                <th className="text-left p-4 font-semibold text-gray-900">Type</th>
                <th className="text-left p-4 font-semibold text-gray-900">Status</th>
                <th className="text-left p-4 font-semibold text-gray-900">Version</th>
                <th className="text-left p-4 font-semibold text-gray-900">Last Sync</th>
                <th className="text-left p-4 font-semibold text-gray-900">Endpoints</th>
                <th className="text-left p-4 font-semibold text-gray-900">Requests</th>
                <th className="text-left p-4 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(agent => (
                <tr key={agent.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4">
                    <div className="font-medium text-gray-900">{agent.name}</div>
                  </td>
                  <td className="p-4 text-gray-600">{agent.type}</td>
                  <td className="p-4">
                    <span className={"px-3 py-1 rounded-full text-xs font-medium " + 
                      (agent.status === "Active" ? "bg-green-100 text-green-800" : 
                       agent.status === "Pending" ? "bg-yellow-100 text-yellow-800" : 
                       agent.status === "Warning" ? "bg-orange-100 text-orange-800" :
                       "bg-red-100 text-red-800")
                    }>
                      {agent.status}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600 font-mono text-sm">{agent.version}</td>
                  <td className="p-4 text-gray-600">{agent.lastSync}</td>
                  <td className="p-4 text-center">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">{agent.endpoints}</span>
                  </td>
                  <td className="p-4 text-gray-600">{agent.requests.toLocaleString()}</td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium">View</button>
                      <button className="text-gray-600 hover:text-gray-800 hover:underline text-sm font-medium">Configure</button>
                      <button className="text-red-600 hover:text-red-800 hover:underline text-sm font-medium">Remove</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No agents found matching your criteria</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filter settings</p>
          </div>
        )}
      </div>
    </main>
  );
}