import { renderConfirm } from '@jaspero/web-components/dist/render-confirm';

export function confirmation(
  callback: (action: { confirmed: boolean }) => Promise<void>,
  title = `Delete item?`,
  message = `Are you sure? This action can't be reverted.`
) {
  renderConfirm({ title, message }, callback);
}
