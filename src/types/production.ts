export interface ProductionStandard {
  category: string;
  icon: string;
  color: string;
  bgColor: string;
  requirements: string[];
}

export interface ProductionMetric {
  name: string;
  target: string;
  current?: string;
  status: 'green' | 'yellow' | 'red';
}

export interface DeploymentChecklist {
  id: string;
  task: string;
  completed: boolean;
  required: boolean;
  category: 'infrastructure' | 'security' | 'performance' | 'compliance';
}

export interface ProductionEnvironment {
  name: string;
  url: string;
  status: 'active' | 'staging' | 'maintenance';
  lastDeployed: string;
  version: string;
  healthCheck: {
    status: 'healthy' | 'degraded' | 'down';
    responseTime: number;
    uptime: number;
  };
}