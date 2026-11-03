import type { ReactNode } from 'react';

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}

export default function Section({ id, children, className = 'py-16 md:py-24', bordered = true }: Props) {
  return (
    <section id={id} className={`scroll-mt-6 ${bordered ? 'border-t border-line' : ''} ${className}`}>
      {children}
    </section>
  );
}
