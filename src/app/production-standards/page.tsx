"use client";

import React from "react";
import { CheckCircle, AlertTriangle, Shield, Zap, Monitor, Database, Globe, Lock } from "lucide-react";

export default function ProductionStandardsPage() {
  const securityStandards = [
    {
      title: "Authentication & Authorization",
      requirements: [
        "Multi-factor authentication (MFA) for all admin accounts",
        "Role-based access control (RBAC) implementation",
        "JWT token management with secure refresh cycles",
        "OAuth 2.0 integration for third-party authentication"
      ]
    },
    {
      title: "Data Protection",
      requirements: [
        "End-to-end encryption for sensitive data",
        "GDPR compliance for EU users",
        "Data anonymization for analytics",
        "Secure backup and recovery procedures"
      ]
    },
    {
      title: "Infrastructure Security",
      requirements: [
        "SSL/TLS certificates with automatic renewal",
        "WAF (Web Application Firewall) configuration",
        "DDoS protection and rate limiting",
        "Regular security vulnerability scans"
      ]
    }
  ];

  const performanceStandards = [
    {
      metric: "Page Load Time",
      target: "< 2 seconds",
      method: "Core Web Vitals optimization",
      status: "critical"
    },
    {
      metric: "Time to Interactive",
      target: "< 3 seconds",
      method: "Code splitting and lazy loading",
      status: "critical"
    },
    {
      metric: "Cumulative Layout Shift",
      target: "< 0.1",
      method: "Proper image sizing and font loading",
      status: "high"
    },
    {
      metric: "Server Response Time",
      target: "< 200ms",
      method: "CDN and caching strategies",
      status: "high"
    }
  ];

  const reliabilityStandards = [
    {
      category: "Uptime Requirements",
      standard: "99.9% availability (8.77 hours downtime/year)",
      implementation: "Load balancing, auto-scaling, health checks"
    },
    {
      category: "Error Monitoring",
      standard: "< 0.1% error rate",
      implementation: "Comprehensive logging, alerting, and monitoring"
    },
    {
      category: "Disaster Recovery",
      standard: "RTO: 1 hour, RPO: 15 minutes",
      implementation: "Automated backups, failover systems"
    },
    {
      category: "Scalability",
      standard: "Handle 10x traffic spikes",
      implementation: "Horizontal scaling, microservices architecture"
    }
  ];

  const complianceRequirements = [
    "SOC 2 Type II certification",
    "ISO 27001 compliance",
    "GDPR compliance for EU users",
    "HIPAA compliance for healthcare data",
    "PCI DSS for payment processing",
    "Regular third-party security audits"
  ];

  const deploymentStandards = [
    {
      stage: "Development",
      requirements: [
        "Feature branches with pull request reviews",
        "Automated testing suite (unit, integration, e2e)",
        "Code coverage minimum 80%",
        "Linting and code formatting standards"
      ]
    },
    {
      stage: "Staging",
      requirements: [
        "Production-like environment",
        "Automated deployment pipeline",
        "Performance testing and load testing",
        "Security scanning and vulnerability assessment"
      ]
    },
    {
      stage: "Production",
      requirements: [
        "Blue-green deployment strategy",
        "Rollback capabilities within 5 minutes",
        "Zero-downtime deployments",
        "Automated health checks post-deployment"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Production System Standards</h1>
          <p className="text-lg text-slate-600">Comprehensive requirements for production-ready systems delivery</p>
        </div>

        {/* Security Standards */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-red-500 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">Security Standards</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {securityStandards.map((standard, index) => (
                <div key={index} className="border border-slate-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">{standard.title}</h3>
                  <ul className="space-y-2">
                    {standard.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Standards */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <Zap className="h-8 w-8 text-yellow-500 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">Performance Standards</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {performanceStandards.map((standard, index) => (
                <div key={index} className="border border-slate-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-slate-800">{standard.metric}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      standard.status === 'critical' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {standard.status}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-green-600 mb-1">{standard.target}</div>
                  <div className="text-xs text-slate-500">{standard.method}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reliability Standards */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <Monitor className="h-8 w-8 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">Reliability & Availability</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {reliabilityStandards.map((standard, index) => (
                <div key={index} className="border border-slate-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{standard.category}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{standard.standard}</div>
                  <div className="text-sm text-slate-600">{standard.implementation}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance Requirements */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <Lock className="h-8 w-8 text-purple-500 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">Compliance Requirements</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {complianceRequirements.map((requirement, index) => (
                <div key={index} className="flex items-center p-4 border border-slate-200 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Deployment Standards */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <Globe className="h-8 w-8 text-indigo-500 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">Deployment Standards</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              {deploymentStandards.map((stage, index) => (
                <div key={index} className="border border-slate-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">{stage.stage}</h3>
                  <ul className="space-y-2">
                    {stage.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <Database className="h-8 w-8 text-emerald-500 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">Quality Assurance Standards</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 border border-slate-200 rounded-lg text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-1">100%</div>
                <div className="text-sm text-slate-600">Test Coverage Target</div>
              </div>
              <div className="p-4 border border-slate-200 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">Zero</div>
                <div className="text-sm text-slate-600">Critical Bugs in Production</div>
              </div>
              <div className="p-4 border border-slate-200 rounded-lg text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
                <div className="text-sm text-slate-600">Monitoring & Alerting</div>
              </div>
              <div className="p-4 border border-slate-200 rounded-lg text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">< 5min</div>
                <div className="text-sm text-slate-600">Mean Time to Recovery</div>
              </div>
            </div>
          </div>
        </div>

        {/* Documentation Requirements */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Documentation Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Technical Documentation</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  API documentation with examples
                </li>
                <li className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  System architecture diagrams
                </li>
                <li className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Database schema documentation
                </li>
                <li className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Deployment and infrastructure guides
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Operational Documentation</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Monitoring and alerting runbooks
                </li>
                <li className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Incident response procedures
                </li>
                <li className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Backup and recovery procedures
                </li>
                <li className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  User manuals and training materials
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}