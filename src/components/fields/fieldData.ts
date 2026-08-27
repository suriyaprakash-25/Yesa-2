export interface Discipline {
  id: string;
  num: string;
  tag: string;
  title: string;
  shortDesc: string;
  spec: string;
  badge: string;
}

export const YESA_DISCIPLINES: Discipline[] = [
  {
    id: 'agent-development',
    num: '01',
    tag: 'DISCIPLINE 01',
    title: 'AGENT DEVELOPMENT',
    shortDesc:
      'Autonomous systems, multi-agent frameworks, and intelligent infrastructure built for scalable production deployment.',
    spec: 'Autonomous Systems & Multi-Agent Architecture',
    badge: 'ENGINEERING TRACK',
  },
  {
    id: 'design',
    num: '02',
    tag: 'DISCIPLINE 02',
    title: 'DESIGN',
    shortDesc:
      'Structured visual systems, high-velocity user interfaces, and unified design architectures with extreme aesthetic and functional precision.',
    spec: 'Design Systems & Interface Architecture',
    badge: 'PRODUCT DESIGN TRACK',
  },
  {
    id: 'product',
    num: '03',
    tag: 'DISCIPLINE 03',
    title: 'PRODUCT',
    shortDesc:
      'Product strategy, aligning systems architecture with real user needs, and orchestrating end-to-end execution across technical roadmaps.',
    spec: 'Technical Strategy & Roadmap Execution',
    badge: 'MANAGEMENT TRACK',
  },
  {
    id: 'sales-marketing',
    num: '04',
    tag: 'DISCIPLINE 04',
    title: 'SALES & MARKETING',
    shortDesc:
      'Global distribution networks, high-impact communication systems, and enterprise growth pipelines built for scale.',
    spec: 'Global Distribution & Strategic Growth',
    badge: 'DISTRIBUTION TRACK',
  },
];
