import type { TemplateSection } from './template.interface';

export interface Popup extends TemplateSection {
  description: string;
  style: string;
  html: string;
}
