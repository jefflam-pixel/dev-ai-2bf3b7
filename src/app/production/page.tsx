import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, AlertTriangle, Monitor, Settings } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Production Overview',
  description: 'Overview of production system requirements and standards'
};

const productionModules = [
  {
    title: 'Production Standards',
    description: 'Requirements for final production systems delivery',
    href: '/production/standards',
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    status: 'Active'
  },
  {
    title: 'System Monitoring',
    description: 'Performance monitoring and health checks',
    href: '/production/monitoring',
    icon: Monitor,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    status: 'Active'
  },
  {
    title: 'Deployment Pipeline',
    description: 'Automated deployment and CI/CD configuration',
    href: '/production/deployment',
    icon: Settings,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    status: 'Active'
  },
  {
    title: 'Quality Assurance',
    description: 'Testing standards and quality gates',
    href: '/production/quality',
    icon: AlertTriangle,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    status: 'Active'
  }
];

export default function ProductionOverviewPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Production Systems Overview
        </h1>
        <p className="text-xl text-gray-600">
          Comprehensive requirements and standards for production-ready systems
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {productionModules.map((module, index) => {
          const IconComponent = module.icon;
          return (
            <Link key={index} href={module.href}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${module.bgColor}`}>
                        <IconComponent className={`w-6 h-6 ${module.color}`} />
                      </div>
                      {module.title}
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{module.status}</Badge>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{module.description}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Production Readiness Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Infrastructure</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Production environment setup
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    SSL certificates configured
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Load balancing implemented
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Security</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Security audit completed
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Authentication implemented
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Data encryption enabled
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}