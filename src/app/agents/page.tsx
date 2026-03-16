"use client";

import React from "react";
import { useState } from "react";

const mockAgents = [
  {
    id: 1,
    name: "GitHub Copilot",
    type: "Code Assistant",
    status: "connected",
    description: "AI-powered code completion and generation",
    apiEndpoint: "https://api.github.com/copilot",
    capabilities: ["Code Generation", "Code Completion", "Documentation"],
    lastSync: "2024-01-15T10:30:00Z",
    version: "v1.2.3"
  },
  {
    id: 2,
    name: "DeepCode AI",
    type: "Code Reviewer",
    status: "connected",
    description: "AI-powered code review and security analysis",
    apiEndpoint: "https://api.deepcode.ai/v2",
    capabilities: ["Security Analysis", "Bug Detection", "Performance Review"],
    lastSync: "2024-01-15T09:45:00Z",
    version: "v2.1.0"
  },
  {
    id: 3,
    name: "TestGen Pro",
    type: "Test Generator",
    status: "disconnected",
    description: "Automated test case generation and validation",
    apiEndpoint: "https://api.testgenpro.com/v1",
    capabilities: ["Unit Tests", "Integration Tests", "Test Data"],
    lastSync: "2024-01-14T16:20:00Z",
    version: "v3.0.1"
  },
  {
    id: 4,
    name: "DocuMind AI",
    type: "Documentation",
    status: "connected",
    description: "Intelligent documentation generation and maintenance",
    apiEndpoint: "https://api.documind.dev/v1",
    capabilities: ["API Docs", "Code Comments", "README Generation"],
    lastSync: "2024-01-15T11:15:00Z",
    version: "v1.5.2"
  },
  {
    id: 5,
    name: "RefactorBot",
    type: "Code Optimizer",
    status: "pending",
    description: "Automated code refactoring and optimization",
    apiEndpoint: "https://api.refactorbot.io/v2",
    capabilities: ["Code Refactoring", "Performance Optimization", "Pattern Detection"],
    lastSync: null,
    version: "v2.3.0"
  }
];

const integrationTemplates = [
  {
    name: "Webhook Integration",
    description: "Real-time event-driven communication",
    protocols: ["HTTP POST", "JSON Payload", "Authentication Headers"]
  },
  {
    name: "REST API Integration",
    description: "Standard HTTP API communication",
    protocols: ["GET/POST/PUT/DELETE", "JSON/XML", "OAuth 2.0"]
  },
  {
    name: "GraphQL Integration",
    description: "Flexible query-based communication",
    protocols: ["GraphQL Queries", "Subscriptions", "Schema Definition"]
  },
  {
    name: "Message Queue Integration",
    description: "Asynchronous message-based communication",
    protocols: ["RabbitMQ", "Apache Kafka", "Redis Pub/Sub"]
  }
];

export default function AgentIntegrationPage() {
  const [agents] = useState(mockAgents);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  const getStatusColor = (status) => {
    switch (status) {
      case "connected": return "bg-green-100 text-green-800";
      case "disconnected": return "bg-red-100 text-red-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "connected": return "●";
      case "disconnected": return "●";
      case "pending": return "●";
      default: return "●";
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Agent Integration Framework</h1>
          <p className="text-gray-600">Manage and integrate with AI agents in your development ecosystem</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6" aria-label="Tabs">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "overview" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
                  >
                    Agent Overview
                  </button>
                  <button
                    onClick={() => setActiveTab("integrations")}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "integrations" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
                  >
                    Integration Templates
                  </button>
                  <button
                    onClick={() => setActiveTab("monitoring")}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "monitoring" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
                  >
                    Monitoring
                  </button>
                </nav>
              </div>

              <div className="p-6">
                {activeTab === "overview" && (
                  <div className="space-y-4">
                    {agents.map(agent => (
                      <div
                        key={agent.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => setSelectedAgent(agent)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <span className="text-blue-600 font-semibold">{agent.name.charAt(0)}</span>
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{agent.name}</h3>
                              <p className="text-sm text-gray-600">{agent.type}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(agent.status)}`}>
                              <span className="mr-1">{getStatusIcon(agent.status)}</span>
                              {agent.status}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{agent.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {agent.capabilities.map((capability, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                              {capability}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "integrations" && (
                  <div className="space-y-4">
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Integration Templates</h3>
                      <p className="text-gray-600">Choose from pre-built integration patterns to connect with AI agents</p>
                    </div>
                    {integrationTemplates.map((template, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{template.name}</h4>
                          <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                            Use Template
                          </button>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{template.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {template.protocols.map((protocol, protocolIndex) => (
                            <span key={protocolIndex} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                              {protocol}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "monitoring" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-semibold">3</span>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-green-800">Active Connections</p>
                            <p className="text-xs text-green-600">Running smoothly</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-semibold">1</span>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-red-800">Disconnected</p>
                            <p className="text-xs text-red-600">Needs attention</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-semibold">1</span>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-yellow-800">Pending</p>
                            <p className="text-xs text-yellow-600">Awaiting setup</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Recent Activity</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-900">GitHub Copilot synchronized</span>
                          </div>
                          <span className="text-xs text-gray-500">2 minutes ago</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-900">DocuMind AI completed integration</span>
                          </div>
                          <span className="text-xs text-gray-500">15 minutes ago</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-sm text-gray-900">TestGen Pro connection failed</span>
                          </div>
                          <span className="text-xs text-gray-500">1 hour ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            {selectedAgent ? (
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">{selectedAgent.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{selectedAgent.name}</h3>
                    <p className="text-sm text-gray-600">{selectedAgent.type}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedAgent.status)}`}>
                      <span className="mr-1">{getStatusIcon(selectedAgent.status)}</span>
                      {selectedAgent.status}
                    </span>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">API Endpoint</label>
                    <div className="bg-gray-50 p-2 rounded border text-xs font-mono text-gray-700">
                      {selectedAgent.apiEndpoint}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Version</label>
                    <p className="text-sm text-gray-900">{selectedAgent.version}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Sync</label>
                    <p className="text-sm text-gray-900">
                      {selectedAgent.lastSync ? new Date(selectedAgent.lastSync).toLocaleString() : "Never"}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Capabilities</label>
                    <div className="flex flex-wrap gap-2">
                      {selectedAgent.capabilities.map((capability, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 space-y-2">
                    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                      Configure Integration
                    </button>
                    <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                      Test Connection
                    </button>
                    {selectedAgent.status === "connected" && (
                      <button className="w-full px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200">
                        Disconnect
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-gray-400 text-2xl">⚡</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Select an Agent</h3>
                  <p className="text-gray-600 text-sm">Choose an AI agent from the list to view details and manage its integration</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}