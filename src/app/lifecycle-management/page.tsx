"use client";

import React from "react";
import { useState } from "react";

const mockData = [
  { id: 1, workflow: "Feature Development", stage: "Requirements", status: "Active", progress: 85, assignee: "John Smith", dueDate: "2024-02-15", priority: "High" },
  { id: 2, workflow: "Bug Fix Process", stage: "Testing", status: "In Progress", progress: 60, assignee: "Sarah Johnson", dueDate: "2024-02-10", priority: "Critical" },
  { id: 3, workflow: "Security Review", stage: "Code Review", status: "Pending", progress: 40, assignee: "Mike Wilson", dueDate: "2024-02-20", priority: "Medium" },
  { id: 4, workflow: "Performance Optimization", stage: "Production", status: "Completed", progress: 100, assignee: "Lisa Brown", dueDate: "2024-02-05", priority: "Low" },
  { id: 5, workflow: "API Integration", stage: "Development", status: "Active", progress: 75, assignee: "David Lee", dueDate: "2024-02-18", priority: "High" },
  { id: 6, workflow: "UI Component Library", stage: "Design Review", status: "Blocked", progress: 25, assignee: "Emma Davis", dueDate: "2024-02-25", priority: "Medium" },
  { id: 7, workflow: "Database Migration", stage: "Planning", status: "Not Started", progress: 0, assignee: "Tom Garcia", dueDate: "2024-03-01", priority: "Critical" }
];

export default function LifecycleManagementPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [data] = useState(mockData);
  
  const filtered = data.filter(item => {
    const matchesSearch = item.workflow.toLowerCase().includes(search.toLowerCase()) || item.assignee.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || item.status.toLowerCase() === filter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case "Active": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Completed": return "bg-green-100 text-green-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Blocked": return "bg-red-100 text-red-800";
      case "Not Started": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case "Critical": return "bg-red-100 text-red-800";
      case "High": return "bg-orange-100 text-orange-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Development Lifecycle Management</h1>
          <p className="text-gray-500 mt-1">Manage process workflows from requirements to production</p>
        </div>
        <div className="space-x-3">
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 shadow-sm">
            📊 Export
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow-sm">
            ➕ Add Workflow
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500 mb-2">Total Workflows</p>
          <p className="text-3xl font-bold text-gray-900">🔄 {data.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500 mb-2">Active Workflows</p>
          <p className="text-3xl font-bold text-green-600">✅ {data.filter(d => d.status === "Active" || d.status === "In Progress").length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500 mb-2">Avg Progress</p>
          <p className="text-3xl font-bold text-blue-600">📈 {Math.round(data.reduce((acc, d) => acc + d.progress, 0) / data.length)}%</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500 mb-2">Critical Items</p>
          <p className="text-3xl font-bold text-red-600">⚠️ {data.filter(d => d.priority === "Critical").length}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search workflows or assignees..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="sm:w-48">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="in progress">In Progress</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="blocked">Blocked</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-4 font-semibold text-gray-900">Workflow</th>
                <th className="text-left p-4 font-semibold text-gray-900">Stage</th>
                <th className="text-left p-4 font-semibold text-gray-900">Status</th>
                <th className="text-left p-4 font-semibold text-gray-900">Progress</th>
                <th className="text-left p-4 font-semibold text-gray-900">Assignee</th>
                <th className="text-left p-4 font-semibold text-gray-900">Priority</th>
                <th className="text-left p-4 font-semibold text-gray-900">Due Date</th>
                <th className="text-left p-4 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4">
                    <div className="font-medium text-gray-900">{item.workflow}</div>
                  </td>
                  <td className="p-4 text-gray-600">{item.stage}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{item.progress}%</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">{item.assignee}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(item.priority)}`}>
                      {item.priority}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">{item.dueDate}</td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View</button>
                      <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">Edit</button>
                      <button className="text-red-600 hover:text-red-800 text-sm font-medium">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No workflows found matching your criteria.</p>
          </div>
        )}
      </div>
    </main>
  );
}