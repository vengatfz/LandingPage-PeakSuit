import { LucideIcon } from 'lucide-react';

export interface SectionProps {
  openModal: () => void;
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
  subLabel: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}