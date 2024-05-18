declare interface ColumnActionsConfigLink {
  label: string;
  href: string;
  icon?: string
}

declare interface ColumnActionsConfig {
  actions?: Array<'edit' | 'duplicate' | 'delete'>;
  links?: ColumnActionsConfigLink[];
}

declare interface Window {
  columnActions?: {
    [key: string]: ColumnActionsConfig
  }
}