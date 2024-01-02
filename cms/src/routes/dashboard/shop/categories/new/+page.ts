export async function load({ parent }) {
  await parent();

  const col = 'categories';
  const items = [
    {
      component: 'jp-input',
      field: '/name',
      options: {
        label: 'Name',
        name: 'name'
      }
    },
    {
      component: 'jp-textarea',
      field: '/description',
      options: {
        label: 'Description',
        name: 'description'
      }
    }
  ];

  return { col, items, value: {} };
}
