import type { PageBuilderForm } from '../page-builder-form.interface';

const createOption = (value: string, content: string) => ({
  type: 'option',
  content,
  attributes: { value }
});

const nameTrait = { name: 'name' };
const placeholderTrait = { name: 'placeholder' };
const requiredTrait = { type: 'checkbox', name: 'required' };
const idTrait = { name: 'id' };
const valueTrait = { name: 'value' };
const checkedTrait = { type: 'checkbox', name: 'checked' };
const minLengthTrait = { name: 'minlength', label: 'Min Length', type: 'number' };
const maxLengthTrait = { name: 'maxlength', label: 'Max Length', type: 'number' };
const patternTrait = { name: 'pattern', label: 'Pattern', type: 'text' };

export const TYPES = (forms: PageBuilderForm[]) => [
  /**
   * Grid
   */
  {
    id: 'column',
    extend: 'div',
    isComponent: (el: HTMLInputElement) => el.tagName === 'COLUMN' && el.dataset?.type == 'column',
    model: {
      defaults: {
        tagName: 'column',
        draggable: true,
        classes: ['gc-6'],
        attributes: {
          dataset: {
            type: 'column'
          }
        },
        traits: [
          {
            type: 'select',
            name: 'column-span-desktop',
            label: 'Column span - Desktop',
            changeProp: 1,
            options: [
              { value: 'gc-1', name: '1 Column' },
              { value: 'gc-2', name: '2 Columns' },
              { value: 'gc-3', name: '3 Columns' },
              { value: 'gc-4', name: '4 Columns' },
              { value: 'gc-5', name: '5 Columns' },
              { value: 'gc-6', name: '6 Columns' },
              { value: 'gc-7', name: '7 Columns' },
              { value: 'gc-8', name: '8 Columns' },
              { value: 'gc-9', name: '9 Columns' },
              { value: 'gc-10', name: '10 Columns' },
              { value: 'gc-11', name: '11 Columns' },
              { value: 'gc-12', name: '12 Columns' }
            ]
          },
          {
            type: 'select',
            name: 'column-span-tablet',
            label: 'Column span - Tablet',
            changeProp: 1,
            options: [
              { value: '', name: 'None' },
              { value: 'gc-sm-1', name: '1 Column' },
              { value: 'gc-sm-2', name: '2 Columns' },
              { value: 'gc-sm-3', name: '3 Columns' },
              { value: 'gc-sm-4', name: '4 Columns' },
              { value: 'gc-sm-5', name: '5 Columns' },
              { value: 'gc-sm-6', name: '6 Columns' },
              { value: 'gc-sm-7', name: '7 Columns' },
              { value: 'gc-sm-8', name: '8 Columns' },
              { value: 'gc-sm-9', name: '9 Columns' },
              { value: 'gc-sm-10', name: '10 Columns' },
              { value: 'gc-sm-11', name: '11 Columns' },
              { value: 'gc-sm-12', name: '12 Columns' }
            ]
          },
          {
            type: 'select',
            name: 'column-span-mobile',
            label: 'Column span - Mobile',
            changeProp: 1,
            options: [
              { value: '', name: 'None' },
              { value: 'gc-xs-1', name: '1 Column' },
              { value: 'gc-xs-2', name: '2 Columns' },
              { value: 'gc-xs-3', name: '3 Columns' },
              { value: 'gc-xs-4', name: '4 Columns' },
              { value: 'gc-xs-5', name: '5 Columns' },
              { value: 'gc-xs-6', name: '6 Columns' },
              { value: 'gc-xs-7', name: '7 Columns' },
              { value: 'gc-xs-8', name: '8 Columns' },
              { value: 'gc-xs-9', name: '9 Columns' },
              { value: 'gc-xs-10', name: '10 Columns' },
              { value: 'gc-xs-11', name: '11 Columns' },
              { value: 'gc-xs-12', name: '12 Columns' }
            ]
          },
          {
            type: 'select',
            name: 'column-start-desktop',
            label: 'Column start - Desktop',
            changeProp: 1,
            options: [
              { value: '', name: 'None' },
              { value: 'gcs-1', name: 'Column 1' },
              { value: 'gcs-2', name: 'Column 2' },
              { value: 'gcs-3', name: 'Column 3' },
              { value: 'gcs-4', name: 'Column 4' },
              { value: 'gcs-5', name: 'Column 5' },
              { value: 'gcs-6', name: 'Column 6' },
              { value: 'gcs-7', name: 'Column 7' },
              { value: 'gcs-8', name: 'Column 8' },
              { value: 'gcs-9', name: 'Column 9' },
              { value: 'gcs-10', name: 'Column 10' },
              { value: 'gcs-11', name: 'Column 11' },
              { value: 'gcs-12', name: 'Column 12' }
            ]
          },
          {
            type: 'select',
            name: 'column-start-tablet',
            label: 'Column start - Tablet',
            changeProp: 1,
            options: [
              { value: '', name: 'None' },
              { value: 'gcs-sm-1', name: 'Column 1' },
              { value: 'gcs-sm-2', name: 'Column 2' },
              { value: 'gcs-sm-3', name: 'Column 3' },
              { value: 'gcs-sm-4', name: 'Column 4' },
              { value: 'gcs-sm-5', name: 'Column 5' },
              { value: 'gcs-sm-6', name: 'Column 6' },
              { value: 'gcs-sm-7', name: 'Column 7' },
              { value: 'gcs-sm-8', name: 'Column 8' },
              { value: 'gcs-sm-9', name: 'Column 9' },
              { value: 'gcs-sm-10', name: 'Column 10' },
              { value: 'gcs-sm-11', name: 'Column 11' },
              { value: 'gcs-sm-12', name: 'Column 12' }
            ]
          },
          {
            type: 'select',
            name: 'column-start-mobile',
            label: 'Column start - Mobile',
            changeProp: 1,
            options: [
              { value: '', name: 'None' },
              { value: 'gcs-xs-1', name: 'Column 1' },
              { value: 'gcs-xs-2', name: 'Column 2' },
              { value: 'gcs-xs-3', name: 'Column 3' },
              { value: 'gcs-xs-4', name: 'Column 4' },
              { value: 'gcs-xs-5', name: 'Column 5' },
              { value: 'gcs-xs-6', name: 'Column 6' },
              { value: 'gcs-xs-7', name: 'Column 7' },
              { value: 'gcs-xs-8', name: 'Column 8' },
              { value: 'gcs-xs-9', name: 'Column 9' },
              { value: 'gcs-xs-10', name: 'Column 10' },
              { value: 'gcs-xs-11', name: 'Column 11' },
              { value: 'gcs-xs-12', name: 'Column 12' }
            ]
          }
        ]
      }
    }
  },

  /**
   * Common
   */
  {
    id: 'header',
    extends: 'text',
    isComponent: (el: HTMLHeadingElement) => el.tagName === 'HEADER',
    model: {
      defaults: {
        type: 'header',
        tagName: 'header',
        classes: ['header']
      }
    }
  },
  {
    id: 'nav',
    extends: 'text',
    isComponent: (el: HTMLDivElement) => el.tagName === 'NAV',
    model: {
      defaults: {
        type: 'nav',
        tagName: 'nav',
        classes: ['nav']
      }
    }
  },
  {
    id: 'section',
    extends: 'text',
    isComponent: (el: HTMLDivElement) => el.tagName === 'SECTION',
    model: {
      defaults: {
        type: 'section',
        tagName: 'section',
        classes: ['section']
      }
    }
  },
  {
    id: 'article',
    extends: 'text',
    isComponent: (el: HTMLDivElement) => el.tagName === 'ARTICLE',
    model: {
      defaults: {
        type: 'article',
        tagName: 'article',
        classes: ['article']
      }
    }
  },
  {
    id: 'aside',
    extends: 'text',
    isComponent: (el: HTMLDivElement) => el.tagName === 'ASIDE',
    model: {
      defaults: {
        type: 'aside',
        tagName: 'aside',
        classes: ['aside']
      }
    }
  },
  {
    id: 'footer',
    extends: 'text',
    isComponent: (el: HTMLDivElement) => el.tagName === 'FOOTER',
    model: {
      defaults: {
        type: 'footer',
        tagName: 'footer',
        classes: ['footer']
      }
    }
  },
  {
    id: 'page-link',
    extend: 'link',
    isComponent: (el: HTMLAnchorElement) => el?.dataset?.pblink,
    model: {
      defaults: {
        type: 'page-link',
        draggable: true,
        content: 'Link',
        attributes: {
          'data-pblink': true
        },
        traits: [
          {
            label: 'Link',
            name: 'href'
          }
        ]
      }
    }
  },
  {
    id: 'anchor-link',
    extend: 'link',
    isComponent: (el: HTMLAnchorElement) => el?.dataset?.pbanchor,
    model: {
      defaults: {
        type: 'anchor-link',
        draggable: true,
        content: 'Link',
        attributes: {
          'data-pbanchor': true
        },
        traits: [
          {
            label: 'Target',
            name: 'href'
          },
          {
            type: 'select',
            label: 'Animation',
            name: 'animation',
            default: 'instanct',
            options: [
              { value: 'instant', name: 'instant' },
              { value: 'smooth', name: 'smooth' }
            ]
          }
        ]
      }
    }
  },

  /**
   * Forms
   */
  {
    id: 'label',
    isComponent: (el: HTMLElement) => el.tagName === 'LABEL',
    extend: 'text',
    model: {
      defaults: {
        tagName: 'label',
        components: 'Label',
        draggable: 'form, form *',
        droppable: (_: any, target: any) => !target.view.$el['0'].children.length,
        content: 'Label',
        classes: ['label']
      }
    }
  },
  {
    id: 'input',
    isComponent: (el: HTMLInputElement) =>
      el.tagName === 'INPUT' && ['email', 'text', 'password'].includes(el.type),
    model: {
      defaults: {
        tagName: 'input',
        draggable: 'label, label *',
        droppable: false,
        highlightable: false,
        classes: ['input'],
        attributes: {
          type: 'text'
        },
        traits: [
          nameTrait,
          placeholderTrait,
          requiredTrait,
          {
            type: 'select',
            name: 'type',
            label: 'Type',
            options: [
              { id: 'text', label: 'Text' },
              { id: 'email', label: 'Email' },
              { id: 'password', label: 'Password' },
              { id: 'url', label: 'URL' },
              { id: 'tel', label: 'Tel' }
            ]
          },
          minLengthTrait,
          maxLengthTrait,
          patternTrait
        ]
      }
    }
  },
  {
    id: 'number-input',
    isComponent: (el: HTMLInputElement) => el.tagName === 'INPUT' && el.type === 'number',
    model: {
      defaults: {
        tagName: 'input',
        draggable: 'label, label *',
        droppable: false,
        highlightable: false,
        classes: ['input'],
        attributes: {
          type: 'number'
        },
        traits: [
          nameTrait,
          placeholderTrait,
          requiredTrait,
          {
            label: 'Min',
            name: 'min',
            type: 'number'
          },
          {
            label: 'Max',
            name: 'max',
            type: 'number'
          },
          {
            label: 'Step',
            name: 'step',
            type: 'number'
          }
        ]
      }
    }
  },
  {
    id: 'textarea',
    isComponent: (el: HTMLElement) => el.tagName === 'TEXTAREA',
    model: {
      defaults: {
        tagName: 'textarea',
        draggable: 'label, label *',
        droppable: false,
        highlightable: false,
        classes: ['input'],
        attributes: {
          rows: 10
        },
        traits: [
          nameTrait,
          placeholderTrait,
          requiredTrait,
          {
            type: 'number',
            name: 'rows',
            label: 'Rows'
          },
          minLengthTrait,
          maxLengthTrait,
          patternTrait
        ]
      }
    }
  },
  {
    id: 'option',
    isComponent: (el: HTMLElement) => el.tagName === 'OPTION',
    model: {
      defaults: {
        tagName: 'option',
        draggable: 'label, label *',
        droppable: false,
        layerable: false,
        highlightable: false
      }
    }
  },
  {
    id: 'select',
    isComponent: (el: HTMLElement) => el.tagName == 'SELECT',
    model: {
      defaults: {
        tagName: 'select',
        draggable: 'label, label *',
        droppable: false,
        highlightable: false,
        components: [createOption('opt1', 'Option 1'), createOption('opt2', 'Option 2')],
        traits: [
          nameTrait,
          {
            name: 'options',
            type: 'select-options'
          },
          requiredTrait
        ]
      }
    }
  },
  {
    id: 'checkbox',
    extend: 'input',
    isComponent: (el: HTMLInputElement) => el.tagName == 'INPUT' && el.type == 'checkbox',
    model: {
      defaults: {
        tagName: 'input',
        draggable: 'form, form *',
        copyable: false,
        attributes: { type: 'checkbox' },
        traits: [idTrait, nameTrait, valueTrait, requiredTrait, checkedTrait]
      }
    }
  },
  {
    id: 'radio',
    extend: 'checkbox',
    isComponent: (el: HTMLInputElement) => el.tagName == 'INPUT' && el.type == 'radio',
    model: {
      defaults: {
        tagName: 'input',
        draggable: 'form, form *',
        attributes: { type: 'radio' }
      }
    }
  },

  /**
   * Custom Components
   */
  {
    id: 'pb-submit',
    isComponent: (el: HTMLElement) => el.tagName === 'PB-SUBMIT',
    model: {
      defaults: {
        tagName: 'pb-submit',
        draggable: 'form',
        droppable: false,
        traits: [
          {
            type: 'text',
            label: 'Label',
            name: 'label'
          },
          {
            type: 'select',
            label: 'Form Name',
            name: 'form',
            options: forms.map((form) => ({
              id: form.id,
              label: form.name
            }))
          },
          {
            type: 'text',
            label: 'Redirect',
            name: 'redirect'
          },
          {
            type: 'text',
            label: 'Success Notification',
            name: 'success'
          },
          {
            type: 'text',
            label: 'Error Notification',
            name: 'error'
          }
        ],
        attributes: {
          label: 'Submit',
          success: `Form submitted successfully!`,
          error: `There was an error submitting the form. Please try again later.`
        }
      }
    }
  },

  /**
   * Aside Image Slider
   */
  {
    id: 'aside-image-slider',
    extend: 'div',
    isComponent: (el: HTMLInputElement) => el.tagName == 'ASIDE-IMAGE-SLIDER',
    model: {
      defaults: {
        tagName: 'aside-image-slider',
        script: function () {

        }
      },
      style: {
        height: '60vh',
        'max-height': '650px',
        'background-image': 'linear-gradient(118deg, #082e58 0%, #0e4d92 37%, #21d4fd 100%)',
        'background-size': '100% auto',
        'background-position': 'center',
        'background-repeat': 'no-repeat'
      }
    }
  },

  /**
   * Stepper
   */
  {
    id: 'stepper-container',
    extend: 'div',
    isComponent: (el: HTMLInputElement) => el.tagName == 'STEPPER-CONTAINER',
    model: {
      defaults: {
        tagName: 'stepper-container',
        script: function () {
          const stepperButtonEls = this.querySelectorAll('stepper-buttons');
          const scrollerEl = this.querySelector('stepper-scroller');
          const scrollerFirstChildEl = scrollerEl?.children[0];

          let index = 0;

          for (const el of stepperButtonEls) {
            const [leftButtonEl, rightButtonEl] = el.querySelectorAll('button');

            if (scrollerFirstChildEl) {
              leftButtonEl.addEventListener('click', () => {
                index = index > 0 ? index - 1 : 0;
                scrollerEl.style.transform = `translateX(-${
                  index * scrollerFirstChildEl.getBoundingClientRect().width
                }px)`;
              });

              rightButtonEl.addEventListener('click', () => {
                index =
                  index < scrollerEl.children.length - 1
                    ? index + 1
                    : scrollerEl.children.length - 1;
                scrollerEl.style.transform = `translateX(-${
                  index * scrollerFirstChildEl.getBoundingClientRect().width
                }px)`;
              });
            }
          }
        },
        style: {
          display: 'grid',
          'max-width': '1400px',
          margin: '0 auto',
          'grid-template-columns': 'repeat(12, minmax(0, 1fr))',
          'align-items': 'center',
          padding: '16px',
          'grid-gap': '12px'
        }
      }
    }
  }
];
