import React from 'react';

interface SectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export default function Section({ title, icon, children }: SectionProps) {
  return (
    <div className="px-4 py-6 mb-5 bg-white rounded-md shadow-sm">
      <h3 className="flex items-center mb-4 text-xl font-black text-rose-400">
        {icon && <span className="mr-2">{icon}</span>}
        {title}
      </h3>
      {children}
    </div>
  );
}
