export function actionsPipe(config?: (id: string) => ColumnActionsConfig) {
  return (id: string) => {
    const internalConfig: ColumnActionsConfig = {
      links: [],
      actions: ['edit', 'duplicate', 'delete'],
      ...(config ? config(id) : {})
    };

    if (internalConfig.actions?.length) {
      if (!window.columnActions) {
        window.columnActions = {};
      }

      window.columnActions[id] = internalConfig;
    }

    return `<column-actions id="${id}" actions="${(internalConfig.actions || []).join(
      ','
    )}"></column-actions>`;
  };
}
