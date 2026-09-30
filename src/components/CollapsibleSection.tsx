import type { ReactNode } from 'react';

type CollapsibleSectionProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
}: CollapsibleSectionProps) {
  return (
    <details className="collapsible" open={defaultOpen}>
      <summary className="collapsible-summary">{title}</summary>
      <div className="collapsible-body">{children}</div>
    </details>
  );
}
