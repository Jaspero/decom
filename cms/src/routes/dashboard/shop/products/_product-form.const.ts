import { quillFiled } from '$lib/form-fields/quill.field';
import { getOptions } from '$lib/utils/get-options';
import { META_FORM_FIELDS } from '$lib/consts/meta.form-fields';
import { BucketImageService } from '$lib/services/image.service';

export const PRODUCT_FORM = async (isNew: boolean) => {
  const categories: Array<{ label: string; value: string }> = [];
  const tags: Array<{ label: string; value: string }> = [];
  const imageService = new BucketImageService();

  imageService.prefix = 'products/',
	imageService.metadata = [
		{
			height: 1000,
			width: 1000,
			filePrefix: 'thumb_m_',
			folder: '/products/generated'
		},
		{
			filePrefix: 'thumb_s_',
			width: 500,
			height: 500,
			folder: '/products/generated'
		}
	];

  const items = [
    {
      component: 'card-element',
      columns: {
        desktop: 8,
        mobile: 12
      },
      options: {
        title: 'Product Information',
        items: [
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
            field: '/id',
            options: {
              label: 'Url',
              name: 'url',
              hint: 'Generated from title if left empty.',
              readonly: !isNew
            }
          },
          {
            component: 'jp-select',
            field: '/category',
            options: {
              label: 'Category',
              name: 'category',
              options: categories
            }
          },
          {
            component: 'jp-multiselect',
            field: '/tags',
            options: {
              label: 'Tags',
              name: 'tags',
              options: tags
            }
          },
          {
            component: 'jp-textarea',
            field: '/description'
          },
          quillFiled('products', 'content', 'Content'),
          {
            component: 'jp-file-list',
						field: '/gallery',
						options: {
							label: 'Gallery',
							service: imageService
						}
          }
        ]
      }
    },
    {
      component: 'card-element',
      columns: {
        desktop: 4,
        mobile: 12
      },
      options: {
        title: 'SEO',
        items: META_FORM_FIELDS('products')
      }
    },
    {
      component: 'card-element',
      columns: {
        desktop: 8,
        mobile: 12
      },
      options: {
        title: 'Pricing',
        items: [
          {
            component: 'jp-input',
            field: '/price',
            options: {
              label: 'Price',
              name: 'price',
              type: 'number'
            }
          },
          {
            component: 'jp-toggle',
            field: '/physical',
            options: {
              label: 'This is a physical product'
            }
          },
          // TODO: Add kg prefix
          {
            component: 'jp-input',
            field: '/weight',
            options: {
              label: 'Weight',
              type: 'number'
            }
          }
        ]
      }
    },
    {
      component: 'card-element',
      columns: {
        desktop: 8,
        mobile: 12
      },
      options: {
        title: 'Inventory',
        items: [
          {
            component: 'jp-input',
            field: '/sku',
            options: {
              label: 'SKU (Stock Keeping Unit)'
            }
          },
          {
            component: 'jp-input',
            field: '/barcode',
            options: {
              label: 'Barcode (ISBN, UPC, GTIN, etc.)'
            }
          },
          {
            component: 'jp-toggle',
            field: '/trackQuantity',
            options: {
              label: 'Track Quantity'
            }
          },
          {
            component: 'jp-input',
            field: '/quantity',
            columns: 8,
            hidden: {
              deps: ['/trackQuantity'],
              check: (value: any) => value.trackQuantity
            },
            options: {
              label: 'Quantity',
              type: 'number'
            }
          },
          {
            component: 'jp-toggle',
            field: '/sellWhenOutOfStock',
            columns: 4,
            hidden: {
              deps: ['/trackQuantity'],
              check: (value: any) => value.trackQuantity
            },
            options: {
              label: 'Sell When Out Of Stock'
            }
          }
        ]
      }
    },
    {
      component: 'product-variants',
      columns: {
        desktop: 8,
        mobile: 12
      },
    }
  ];

  const datasets = await Promise.all([
    getOptions('categories', 'name'),
    getOptions('tags', 'name')
  ]);

  categories.push(...datasets[0]);
  tags.push(...datasets[1]);

  return items;
};
