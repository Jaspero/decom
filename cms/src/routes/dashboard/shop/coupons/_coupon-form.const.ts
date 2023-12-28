const hasDiscountType = (value: any) =>
  ['amount-off-products', 'amount-off-order'].includes(value.type);

/**
 * TODO:
 * Option to have this in am/pm format not 24h
 */
const TIME_OPTIONS = [
  `00:00`,
  `00:30`,
  `01:00`,
  `01:30`,
  `02:00`,
  `02:30`,
  `03:00`,
  `03:30`,
  `04:00`,
  `04:30`,
  `05:00`,
  `05:30`,
  `06:00`,
  `06:30`,
  `07:00`,
  `07:30`,
  `08:00`,
  `08:30`,
  `09:00`,
  `09:30`,
  `10:00`,
  `10:30`,
  `11:00`,
  `11:30`,
  `12:00`,
  `12:30`,
  `13:00`,
  `13:30`,
  `14:00`,
  `14:30`,
  `15:00`,
  `15:30`,
  `16:00`,
  `16:30`,
  `17:00`,
  `17:30`,
  `18:00`,
  `18:30`,
  `19:00`,
  `19:30`,
  `20:00`,
  `20:30`,
  `21:00`,
  `21:30`,
  `22:00`,
  `22:30`,
  `23:00`,
  `23:30`
].map((time) => ({ label: time, value: time }));

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
    options: {
      type: 'number',
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
    options: {
      type: 'number',
      label: 'Amount'
    }
  },
  // TODO: Add applies to
  {
    component: 'card-element',
    columns: { desktop: 6, mobile: 12 },
    options: {
      title: 'Minimum Purchase Requirements',
      items: [
        {
          component: 'jp-toggle',
          field: '/applyMinimumPurchaseAmount',
          options: {
            label: 'Apply Minimum Purchase Amount'
          }
        },
        {
          component: 'jp-input',
          field: '/minimumPurchaseAmount',
          hidden: {
            deps: ['/applyMinimumPurchaseAmount'],
            check: (value: any) => value.applyMinimumPurchaseAmount
          },
          options: {
            type: 'number',
            label: 'Minimum Purchase Amount'
          }
        },
        {
          component: 'jp-toggle',
          field: '/applyMinimumPurchaseQuantity',
          options: {
            label: 'Minimum Purchase Quantity'
          }
        },
        {
          component: 'jp-input',
          field: '/minimumPurchaseQuantity',
          hidden: {
            deps: ['/applyMinimumPurchaseQuantity'],
            check: (value: any) => value.applyMinimumPurchaseQuantity
          },
          options: {
            type: 'number',
            label: 'Minimum Purchase Quantity'
          }
        }
      ]
    }
  },
  {
    component: 'card-element',
    columns: { desktop: 6, mobile: 12 },
    options: {
      title: 'Maximum Discount Uses',
      items: [
        {
          component: 'jp-toggle',
          field: '/applyMaximumUses',
          options: {
            label: 'Limit number of times this coupon can be used in total'
          }
        },
        {
          component: 'jp-input',
          field: '/maximumUses',
          hidden: {
            deps: ['/applyMaximumUses'],
            check: (value: any) => value.applyMaximumUses
          },
          options: {
            type: 'number',
            label: 'Maximum Uses'
          }
        },
        {
          component: 'jp-toggle',
          field: '/applyMaximumUsesPerCustomer',
          options: {
            type: 'number',
            label: 'Limit number of times this coupon can be used by a single customer'
          }
        },
        {
          component: 'jp-input',
          field: '/maximumUsesPerCustomer',
          hidden: {
            deps: ['/applyMaximumUsesPerCustomer'],
            check: (value: any) => value.applyMaximumUsesPerCustomer
          },
          options: {
            type: 'number',
            label: 'Maximum Uses Per Customer'
          }
        }
      ]
    }
  },
  {
    component: 'card-element',
    columns: { desktop: 6, mobile: 12 },
    options: {
      title: 'Combinations',
      items: [
        {
          component: 'jp-toggle',
          field: '/canBeCombinedWithOtherCoupons',
          options: {
            label: 'Can be combined with other coupons'
          }
        },
        {
          component: 'jp-toggle',
          field: '/canBeCombinedWithDiscounts',
          options: {
            label: 'Can be combined with discounts'
          }
        }
      ]
    }
  },
  {
    component: 'card-element',
    columns: { desktop: 6, mobile: 12 },
    options: {
      title: 'Active Dates',
      items: [
        {
          component: 'jp-datepicker',
          field: '/startDate',
          columns: { desktop: 6, mobile: 12 },
          options: {
            label: 'Start Date',
            returnFormat: 'isoDate'
          }
        },
        {
          component: 'jp-select',
          field: '/startTime',
          columns: { desktop: 6, mobile: 12 },
          options: {
            label: 'Start Time',
            options: TIME_OPTIONS
          }
        },
        {
          component: 'jp-toggle',
          field: '/setEndDate',
          options: {
            label: 'Set End Date'
          }
        },
        {
          component: 'jp-datepicker',
          field: '/endDate',
          columns: { desktop: 6, mobile: 12 },
          hidden: {
            deps: ['/setEndDate'],
            check: (value: any) => value.setEndDate
          },
          options: {
            label: 'End Date',
            returnFormat: 'isoDate'
          }
        },
        {
          component: 'jp-select',
          field: '/endTime',
          columns: { desktop: 6, mobile: 12 },
          hidden: {
            deps: ['/setEndDate'],
            check: (value: any) => value.setEndDate
          },
          options: {
            label: 'End Time',
            options: TIME_OPTIONS
          }
        }
      ]
    }
  }
];
