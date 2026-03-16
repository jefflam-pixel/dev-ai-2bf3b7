"use client";

import React from "react";
import { useState } from "react";

const mockWorkflows = [
  {
    id: 1,
    name: "Feature Development",
    status: "active",
    stages: [
      { name: "Requirements Analysis", status: "completed", assignee: "Product Team", duration: "2 days" },
      { name: "Technical Design", status: "completed", assignee: "Lead Developer", duration: "3 days" },
      { name: "Development", status: "in-progress", assignee: "Dev Team", duration: "10 days" },
      { name: "Code Review", status: "pending", assignee: "Senior Dev", duration: "2 days" },
      { name: "QA Testing", status: "pending", assignee: "QA Team", duration: "5 days" },
      { name: "Staging Deployment", status: "pending", assignee: "DevOps", duration: "1 day" },
      { name: "Production Release", status: "pending", assignee: "Release Manager", duration: "1 day" }
    ],
    progress: 30,
    startDate: "2024-01-15",
    expectedEnd: "2024-02-05"
  },
  {
    id: 2,
    name: "Bug Fix Workflow",
    status: "completed",
    stages: [
      { name: "Bug Triage", status: "completed", assignee: "Support Team", duration: "0.5 days" },
      { name: "Investigation", status: "completed", assignee: "Developer", duration: "1 day" },
      { name: "Fix Implementation", status: "completed", assignee: "Developer", duration: "2 days" },
      { name: "Testing", status: "completed", assignee: "QA Team", duration: "1 day" },
      { name: "Hotfix Deploy", status: "completed", assignee: "DevOps", duration: "0.5 days" }
    ],
    progress: 100,
    startDate: "2024-01-20",
    expectedEnd: "2024-01-25"
  },
  {
    id: 3,
    name: "Security Update",
    status: "planning",
    stages: [
      { name: "Security Assessment", status: "pending", assignee: "Security Team", duration: "3 days" },
      { name: "Patch Development", status: "pending", assignee: "Dev Team", duration: "5 days" },
      { name: "Security Testing", status: "pending", assignee: "Security QA", duration: "3 days" },
      { name: "Emergency Deploy", status: "pending", assignee: "DevOps", duration: "1 day" }
    ],
    progress: 0,
    startDate: "2024-02-01",
    expectedEnd: "2024-02-12"
  }
];

const getStatusColor = (status) => {
  switch (status) {
    case 'completed': return 'bg-green-100 text-green-800';
    case 'in-progress': return 'bg-blue-100 text-blue-800';
    case 'pending': return 'bg-gray-100 text-gray-800';
    case 'active': return 'bg-emerald-100 text-emerald-800';
    case 'planning': return 'bg-yellow-100 text-yellow-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getProgressColor = (progress) => {
  if (progress === 100) return 'bg-green-500';
  if (progress >= 50) return 'bg-blue-500';
  return 'bg-yellow-500';
};

export default function WorkflowPage() {
  const [workflows] = useState(mockWorkflows);
  const [selectedWorkflow, setSelectedWorkflow] = useState(null);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Development Lifecycle Management</h1>
          <p className="text-lg text-gray-600">Process workflows that govern system transitions from requirements to production</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Workflows List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Active Workflows</h2>
              <div className="space-y-4">
                {workflows.map(workflow => (
                  <div
                    key={workflow.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                      selectedWorkflow?.id === workflow.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedWorkflow(workflow)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-900">{workflow.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(workflow.status)}`}>
                        {workflow.status}
                      </span>
                    </div>
                    <div className="mb-2">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{workflow.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(workflow.progress)}`}
                          style={{ width: `${workflow.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      <p>Started: {workflow.startDate}</p>
                      <p>Expected: {workflow.expectedEnd}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Workflow Details */}
          <div className="lg:col-span-2">
            {selectedWorkflow ? (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900">{selectedWorkflow.name}</h2>
                    <p className="text-gray-600 mt-1">Workflow stages and progress tracking</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedWorkflow.status)}`}>
                    {selectedWorkflow.status}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Start Date</p>
                      <p className="font-semibold">{selectedWorkflow.startDate}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Expected End</p>
                      <p className="font-semibold">{selectedWorkflow.expectedEnd}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Overall Progress</span>
                      <span>{selectedWorkflow.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all duration-500 ${getProgressColor(selectedWorkflow.progress)}`}
                        style={{ width: `${selectedWorkflow.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Workflow Stages</h3>
                  <div className="space-y-3">
                    {selectedWorkflow.stages.map((stage, index) => (
                      <div key={index} className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex-shrink-0 mr-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${
                            stage.status === 'completed' ? 'bg-green-500' :
                            stage.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-400'
                          }`}>
                            {stage.status === 'completed' ? '✓' : index + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="font-medium text-gray-900">{stage.name}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(stage.status)}`}>
                              {stage.status}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm text-gray-600">
                            <span>Assigned to: {stage.assignee}</span>
                            <span>Duration: {stage.duration}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Workflow</h3>
                <p className="text-gray-600">Choose a workflow from the left panel to view its stages and progress details</p>
              </div>
            )}
          </div>
        </div>

        {/* Workflow Statistics */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-2xl font-bold text-blue-600">{workflows.length}</div>
            <div className="text-sm text-gray-600">Total Workflows</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-2xl font-bold text-green-600">{workflows.filter(w => w.status === 'completed').length}</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-2xl font-bold text-yellow-600">{workflows.filter(w => w.status === 'active').length}</div>
            <div className="text-sm text-gray-600">Active</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-2xl font-bold text-gray-600">{workflows.filter(w => w.status === 'planning').length}</div>
            <div className="text-sm text-gray-600">Planning</div>
          </div>
        </div>
      </div>
    </main>
  );
}