import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Production | Dev AI',
    default: 'Production | Dev AI'
  },
  description: 'Production system management and monitoring'
};

export default function ProductionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-semibold text-gray-900">Production Systems</h1>
              <nav className="flex space-x-6">
                <a href="/production/standards" className="text-gray-600 hover:text-gray-900">
                  Standards
                </a>
                <a href="/production/monitoring" className="text-gray-600 hover:text-gray-900">
                  Monitoring
                </a>
                <a href="/production/deployment" className="text-gray-600 hover:text-gray-900">
                  Deployment
                </a>
              </nav>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}