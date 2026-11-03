import type { ServiceItem } from '@/types';

export const services: ServiceItem[] = [
  {
    kind: 'text', id: 'ui-ux', title: 'UI/UX Design',
    description:
      'Designing interfaces that feel intuitive, enhance usability across every platform, align with user needs and behaviors, and support business goals effectively.',
  },
  {
    kind: 'text', id: 'web-design', title: 'Web Design',
    description:
      'Designing modern and responsive websites that adapt across devices and platforms, built with clarity, usability, and creativity to reflect your brand in the best way.',
  },
  { kind: 'phone', id: 'phone-mockup' },
  { kind: 'brand', id: 'brand-graphic' },
  {
    kind: 'text', id: 'graphic-design', title: 'Graphic Design',
    description:
      'Designing visuals that capture attention, communicate ideas with clarity and impact, build strong and memorable brand identity, and inspire connection through creativity.',
  },
  {
    kind: 'text', id: 'design-system', title: 'Design System',
    description:
      'Creating scalable and unified systems, ensuring design consistency everywhere, streamlining workflow across all teams, and adapting as products continue to grow.',
  },
];
