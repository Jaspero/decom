const hasDiscountType = (value: any) =>
  ['amount-off-products', 'amount-off-order'].includes(value.type);

export const COUPON_FORM = [
  {
    component: 'jp-input',
    field: '/name',
    options: {
      label: 'Name',
      name: 'name'
    }
  },
  {
    component: 'jp-input',
    field: '/code',
    options: {
      label: 'Code',
      name: 'code'
    }
  },
  {
    component: 'jp-select',
    field: '/type',
    options: {
      label: 'Type',
      options: [
        { label: 'Amount off products', value: 'amount-off-products' },
        { label: 'Buy X get Y', value: 'buy-x-get-y' },
        { label: 'Amount off order', value: 'amount-off-order' },
        { label: 'Free shipping', value: 'free-shipping' }
      ]
    }
  },
  {
    component: 'jp-select',
    field: '/discountType',
    hidden: {
      deps: ['/type'],
      check: hasDiscountType
    },
    options: {
      label: 'Discount Type',
      options: [
        { label: 'Percentage', value: 'percentage' },
        { label: 'Fixed Amount', value: 'fixed-amount' }
      ]
    }
  },
  {
    component: 'jp-input',
    field: '/percent',
    hidden: {
      deps: ['/type', '/discountType'],
      check: (value: any) => hasDiscountType(value) && value.discountType === 'percentage'
    },

    // TODO: Change type to number when implemented in web-components
    options: {
      label: 'Percent'
    }
  },
  {
    component: 'jp-input',
    field: '/amount',
    hidden: {
      deps: ['/type', '/discountType'],
      check: (value: any) => hasDiscountType(value) && value.discountType === 'fixed-amount'
    },

    // TODO: Change type to number when implemented in web-components
    options: {
      label: 'Amount'
    }
  }
];
