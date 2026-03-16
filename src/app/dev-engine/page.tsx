"use client";

import React from "react";
import { useState } from "react";

const mockBRDs = [
  {
    id: 1,
    title: "E-commerce Platform",
    status: "Processing",
    progress: 65,
    components: ["User Auth", "Product Catalog", "Shopping Cart", "Payment Gateway"],
    createdAt: "2024-01-15",
    estimatedCompletion: "2024-02-01"
  },
  {
    id: 2,
    title: "Inventory Management System",
    status: "Completed",
    progress: 100,
    components: ["Dashboard", "Stock Tracking", "Reports", "Alerts"],
    createdAt: "2024-01-10",
    estimatedCompletion: "2024-01-20"
  },
  {
    id: 3,
    title: "Customer Support Portal",
    status: "Queued",
    progress: 0,
    components: ["Ticket System", "Live Chat", "Knowledge Base", "Analytics"],
    createdAt: "2024-01-18",
    estimatedCompletion: "2024-02-15"
  }
];

const mockMetrics = {
  totalProjects: 15,
  activeProjects: 3,
  completedProjects: 12,
  avgCompletionTime: "14 days",
  successRate: 94
};

export default function DevEnginePage() {
  const [brds] = useState(mockBRDs);
  const [metrics] = useState(mockMetrics);
  const [selectedBRD, setSelectedBRD] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "text-green-600 bg-green-100";
      case "Processing": return "text-blue-600 bg-blue-100";
      case "Queued": return "text-yellow-600 bg-yellow-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dev AI Engine</h1>
          <p className="text-lg text-gray-600">AI-powered development system for interpreting BRDs and building production-ready applications</p>
        </div>

        {/* Metrics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Total Projects</h3>
            <p className="text-3xl font-bold text-gray-900">{metrics.totalProjects}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Active Projects</h3>
            <p className="text-3xl font-bold text-blue-600">{metrics.activeProjects}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Completed</h3>
            <p className="text-3xl font-bold text-green-600">{metrics.completedProjects}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Avg Completion</h3>
            <p className="text-3xl font-bold text-gray-900">{metrics.avgCompletionTime}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Success Rate</h3>
            <p className="text-3xl font-bold text-green-600">{metrics.successRate}%</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* BRD Processing Queue */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">BRD Processing Queue</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {brds.map((brd) => (
                  <div 
                    key={brd.id} 
                    className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => setSelectedBRD(brd)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-900">{brd.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(brd.status)}`}>
                        {brd.status}
                      </span>
                    </div>
                    <div className="mb-3">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{brd.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${brd.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Created: {brd.createdAt}</span>
                      <span>ETA: {brd.estimatedCompletion}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Project Details</h2>
            </div>
            <div className="p-6">
              {selectedBRD ? (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">{selectedBRD.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Status</h4>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedBRD.status)}`}>
                        {selectedBRD.status}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Components Being Generated</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedBRD.components.map((component, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                            {component}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Timeline</h4>
                      <div className="text-sm text-gray-600">
                        <p>Started: {selectedBRD.createdAt}</p>
                        <p>Expected Completion: {selectedBRD.estimatedCompletion}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Progress</h4>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-blue-600 h-3 rounded-full transition-all duration-300" 
                          style={{ width: `${selectedBRD.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{selectedBRD.progress}% Complete</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Project Selected</h3>
                  <p className="text-gray-600">Click on a project from the queue to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* AI Engine Status */}
        <div className="mt-8 bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">AI Engine Status</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
                </div>
                <h3 className="font-medium text-gray-900">BRD Parser</h3>
                <p className="text-sm text-green-600">Active</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                </div>
                <h3 className="font-medium text-gray-900">Code Generator</h3>
                <p className="text-sm text-blue-600">Processing</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                </div>
                <h3 className="font-medium text-gray-900">Deployment Engine</h3>
                <p className="text-sm text-gray-600">Standby</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}