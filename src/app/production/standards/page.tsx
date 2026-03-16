"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertTriangle, Shield, Zap, Monitor, Lock } from 'lucide-react';

const standards = [
  {
    category: 'Performance',
    icon: Zap,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    requirements: [
      'Page load times under 3 seconds',
      'Core Web Vitals scores in green',
      'Bundle size optimization',
      'Image optimization and lazy loading',
      'Database query optimization',
      'CDN implementation for static assets'
    ]
  },
  {
    category: 'Security',
    icon: Shield,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    requirements: [
      'HTTPS enforcement',
      'Input validation and sanitization',
      'SQL injection prevention',
      'XSS protection',
      'CSRF token implementation',
      'Rate limiting and DDoS protection',
      'Secure authentication and authorization',
      'Data encryption at rest and in transit'
    ]
  },
  {
    category: 'Monitoring',
    icon: Monitor,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    requirements: [
      'Application performance monitoring',
      'Error tracking and alerting',
      'Server health monitoring',
      'Database performance monitoring',
      'User analytics and behavior tracking',
      'Uptime monitoring',
      'Log aggregation and analysis'
    ]
  },
  {
    category: 'Reliability',
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    requirements: [
      '99.9% uptime SLA',
      'Automated backup systems',
      'Disaster recovery plan',
      'Load balancing implementation',
      'Graceful error handling',
      'Circuit breaker patterns',
      'Health check endpoints'
    ]
  },
  {
    category: 'Compliance',
    icon: Lock,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    requirements: [
      'GDPR compliance for data handling',
      'Accessibility standards (WCAG 2.1 AA)',
      'API documentation compliance',
      'Data retention policies',
      'Privacy policy implementation',
      'Terms of service integration',
      'Cookie consent management'
    ]
  },
  {
    category: 'Quality Assurance',
    icon: AlertTriangle,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    requirements: [
      'Unit test coverage > 80%',
      'Integration test suite',
      'End-to-end test automation',
      'Code quality gates',
      'Security vulnerability scanning',
      'Performance testing',
      'Load testing validation'
    ]
  }
];

const deliveryChecklist = [
  'Production environment deployment',
  'DNS configuration and SSL certificate',
  'Database migration and seeding',
  'Environment variables configuration',
  'CI/CD pipeline setup',
  'Monitoring and alerting configuration',
  'Backup and recovery testing',
  'Performance benchmarking',
  'Security audit completion',
  'Documentation handover',
  'User acceptance testing sign-off',
  'Go-live approval'
];

export default function ProductionStandardsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Production System Standards
        </h1>
        <p className="text-xl text-gray-600">
          Requirements for the final production systems that must be delivered
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {standards.map((standard, index) => {
          const IconComponent = standard.icon;
          return (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${standard.bgColor}`}>
                    <IconComponent className={`w-6 h-6 ${standard.color}`} />
                  </div>
                  {standard.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {standard.requirements.map((requirement, reqIndex) => (
                    <li key={reqIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-50">
                <CheckCircle className="w-6 h-6 text-indigo-600" />
              </div>
              Production Delivery Checklist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {deliveryChecklist.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`checklist-${index}`}
                    className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                  />
                  <label htmlFor={`checklist-${index}`} className="text-sm text-gray-700 cursor-pointer">
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Production Metrics Targets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Response Time</span>
                <Badge variant="outline">< 200ms average</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Uptime</span>
                <Badge variant="outline">99.9%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Error Rate</span>
                <Badge variant="outline">< 0.1%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Test Coverage</span>
                <Badge variant="outline">> 80%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Core Web Vitals</span>
                <Badge variant="outline">All Green</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Support & Maintenance</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 24/7 monitoring setup</li>
              <li>• Incident response procedures</li>
              <li>• Regular security updates</li>
              <li>• Performance optimization</li>
              <li>• Backup verification</li>
              <li>• Documentation maintenance</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}