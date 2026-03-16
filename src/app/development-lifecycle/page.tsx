"use client";

import React from "react";
import { useState } from "react";

const mockWorkflows = [
  { id: 1, name: "Feature Development Workflow", stage: "Requirements", status: "Active", duration: "14 days", progress: 65, owner: "Sarah Chen", lastUpdated: "2024-01-15" },
  { id: 2, name: "Bug Fix Pipeline", stage: "Testing", status: "In Progress", duration: "3 days", progress: 80, owner: "Mike Johnson", lastUpdated: "2024-01-14" },
  { id: 3, name: "Security Review Process", stage: "Review", status: "Pending", duration: "7 days", progress: 25, owner: "Alex Rodriguez", lastUpdated: "2024-01-13" },
  { id: 4, name: "Database Migration Workflow", stage: "Production", status: "Completed", duration: "21 days", progress: 100, owner: "Emily Davis", lastUpdated: "2024-01-12" },
  { id: 5, name: "API Integration Pipeline", stage: "Development", status: "Active", duration: "10 days", progress: 45, owner: "David Kim", lastUpdated: "2024-01-11" },
  { id: 6, name: "UI/UX Review Process", stage: "Design", status: "On Hold", duration: "5 days", progress: 15, owner: "Lisa Wang", lastUpdated: "2024-01-10" },
  { id: 7, name: "Performance Optimization", stage: "Testing", status: "Critical", duration: "8 days", progress: 90, owner: "Tom Anderson", lastUpdated: "2024-01-09" },
  { id: 8, name: "Documentation Update", stage: "Documentation", status: "Active", duration: "4 days", progress: 55, owner: "Jennifer Lee", lastUpdated: "2024-01-08" }
];

export default function DevelopmentLifecyclePage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [data] = useState(mockWorkflows);

  const filteredData = data.filter(workflow => {
    const matchesSearch = workflow.name.toLowerCase().includes(search.toLowerCase()) || 
                         workflow.owner.toLowerCase().includes(search.toLowerCase()) ||
                         workflow.stage.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || workflow.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case "active": return "bg-green-100 text-green-800";
      case "completed": return "bg-blue-100 text-blue-800";
      case "in progress": return "bg-yellow-100 text-yellow-800";
      case "pending": return "bg-gray-100 text-gray-800";
      case "on hold": return "bg-orange-100 text-orange-800";
      case "critical": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Development Lifecycle Management</h1>
          <p className="text-gray-500 mt-1">Process workflows that govern how the system transitions from requirements to production</p>
        </div>
        <div className="space-x-3">
          <button className="bg-white text-gray-600 px-4 py-2 rounded-lg border hover:bg-gray-50 font-medium">
            📊 Export
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium">
            ➕ Add Workflow
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Workflows</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">24</p>
            </div>
            <div className="text-4xl">🔄</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Active Processes</p>
              <p className="text-3xl font-bold text-green-600 mt-1">8</p>
            </div>
            <div className="text-4xl">📈</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Avg Duration</p>
              <p className="text-3xl font-bold text-blue-600 mt-1">9.2d</p>
            </div>
            <div className="text-4xl">⏱️</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Critical Issues</p>
              <p className="text-3xl font-bold text-red-600 mt-1">2</p>
            </div>
            <div className="text-4xl">⚠️</div>
          </div>
        </div>
      </div>

      {/* Controls and Data Table */}
      <div className="bg-white rounded-xl shadow-lg">
        {/* Search and Filter Controls */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search workflows, owners, or stages..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-3">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="all">All Statuses</option>
                <option value="active">Active</option>
                <option value="in progress">In Progress</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="on hold">On Hold</option>
                <option value="critical">Critical</option>
              </select>
              <button className="border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 font-medium">
                🔄 Sort
              </button>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Workflow</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Stage</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Updated</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((workflow) => (
                <tr key={workflow.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{workflow.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-600">{workflow.stage}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(workflow.status)}`}>
                      {workflow.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{width: `${workflow.progress}%`}}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 min-w-fit">{workflow.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {workflow.duration}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {workflow.owner}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {workflow.lastUpdated}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3">
                    <button className="text-blue-600 hover:text-blue-900 hover:underline">View</button>
                    <button className="text-gray-600 hover:text-gray-900 hover:underline">Edit</button>
                    <button className="text-red-600 hover:text-red-900 hover:underline">Delete</button>
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