export interface PageBuilderForm {
  id: string;
  name: string;
  description?: string;
  properties: Array<{
    key: string;
    label: string;
  }>;
}
