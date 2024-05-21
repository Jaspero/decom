export interface TemplateSection {
  id: string;
  title: string;
  json: any;
  html: any;
  style: any;
  image: string;
}

export interface Template {
  category: string;
  sections: TemplateSection[];
}
