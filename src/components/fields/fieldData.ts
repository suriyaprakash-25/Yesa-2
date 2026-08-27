export interface Discipline {
  id: string;
  num: string;
  tag: string;
  title: string;
  shortDesc: string;
  spec: string;
  outcome: string;
}

export const YESA_DISCIPLINES: Discipline[] = [
  {
    id: 'agent-development',
    num: '01',
    tag: 'DISCIPLINE 01',
    title: 'AGENT DEVELOPMENT',
    shortDesc:
      'Architect autonomous systems, multi-agent frameworks, and intelligent infrastructure built for scalable production deployment.',
    spec: 'Autonomous Systems & Multi-Agent Topologies',
    outcome: 'Verified Systems Architect',
  },
  {
    id: 'design',
    num: '02',
    tag: 'DISCIPLINE 02',
    title: 'DESIGN',
    shortDesc:
      'Craft structured visual systems, high-velocity user interfaces, and unified design architectures with extreme aesthetic and functional precision.',
    spec: 'Design Systems & Interface Engineering',
    outcome: 'Verified Product Designer',
  },
  {
    id: 'product',
    num: '03',
    tag: 'DISCIPLINE 03',
    title: 'PRODUCT',
    shortDesc:
      'Lead product strategy, align systems architecture with market needs, and orchestrate end-to-end execution across technical roadmaps.',
    spec: 'Technical Strategy & Roadmap Orchestration',
    outcome: 'Verified Product Leader',
  },
  {
    id: 'sales-marketing',
    num: '04',
    tag: 'DISCIPLINE 04',
    title: 'SALES & MARKETING',
    shortDesc:
      'Scale global distribution networks, architect high-impact communication systems, and build enterprise growth pipelines with measurable velocity.',
    spec: 'Global Distribution & Enterprise Growth',
    outcome: 'Verified Growth Leader',
  },
];
