import type { PageBuilderForm } from '../page-builder-form.interface';
import type { Popup } from '../popup.interface';
import { TYPES } from './types.const';

const STEPPER = (typeMap: any) => [
  {
    id: 'stepper-container',
    label: 'Stepper Container',
    media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px;"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg>`,
    category: 'Stepper',
    content: typeMap['stepper-container']
  },
  {
    id: 'stepper-scroller',
    label: 'Stepper Scroller',
    media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px;"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg>`,
    category: 'Stepper',
    content: {
      draggable: 'stepper-card-container',
      droppable: 'stepper-card',
      tagName: 'stepper-scroller',
      styles: `
        stepper-scroller:has(stepper-card) {
          min-width: unset;
        }
      `,
      style: {
        display: 'flex',
        'min-width': '350px',
        'min-height': '464px',
        transition: '.2s ease-in-out'
      }
    }
  },
  {
    id: 'stepper-card-container',
    label: 'Stepper Card Container',
    media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px;"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg>`,
    category: 'Stepper',
    content: {
      droppable: 'stepper-scroller',
      dragabble: 'stepper-container',
      tagName: 'stepper-card-container',
      style: {
        display: 'flex',
        'min-height': '32px',
        width: '100%',
        overflow: 'hidden'
      }
    }
  },
  {
    id: 'stepper-card',
    label: 'Stepper Card',
    media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px;"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg>`,
    category: 'Stepper',
    content: {
      draggable: 'stepper-scroller',
      droppable: false,
      tagName: 'stepper-card',
      components: [
        {
          type: 'text',
          tagName: 'h3',
          content: 'Lorem ipsum',
          style: {
            'font-size': '16px',
            'line-height': '140%',
            'font-weight': 'bold',
            margin: '0 0 auto 0'
          }
        },
        {
          type: 'text',
          tagName: 'h4',
          content: 'Dolor sit amet',
          style: {
            'font-size': '24px',
            'line-height': '120%',
            'font-weight': 'normal',
            margin: '0'
          }
        },
        {
          type: 'text',
          tagName: 'p',
          content:
            'Duis aute irure dolor in reprehenderit in volup tate velit esse cillum dolore eu.',
          style: {
            'font-size': '20px',
            'line-height': '130%',
            'max-width': '28ch',
            margin: '0',
            opacity: '80%'
          }
        }
      ],
      styles: `
        stepper-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 16px;
          font-family: 'Sen', sans-serif;
          width: 350px;
          height: 464px;
          margin-right: 20px;
          padding: 16px;
          flex-shrink: 0;
          background-color: #4C7862;
          color: #FFFFFF;
          border-radius: .5rem;
        }
        stepper-card.inactive {
          background-color: #F2F6F4;
          color: #09341F;
        }
        stepper-card.inactive::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.25) 0%, #FFF 100%);
        }
      `
    }
  },
  {
    id: 'stepper-buttons',
    label: 'Stepper Buttons',
    media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px;"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg>`,
    category: 'Stepper',
    content: {
      dragabble: 'stepper-container',
      tagName: 'stepper-buttons',
      components: [
        {
          type: 'button',
          tagName: 'button',
          content: `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.41393 11.0508L10.4839 18.2384C10.6873 18.4452 10.7877 18.6871 10.7851 18.9643C10.7825 19.2415 10.6751 19.488 10.4629 19.7037C10.2507 19.9051 10.0105 20.0094 9.74224 20.0165C9.47396 20.0236 9.23375 19.9194 9.02159 19.7037L0.349825 10.8878C0.221831 10.7576 0.131528 10.6204 0.0789166 10.476C0.0263055 10.3316 0 10.1756 0 10.0081C0 9.84048 0.0263055 9.68451 0.0789166 9.54014C0.131528 9.39574 0.221831 9.25848 0.349825 9.12836L9.02159 0.312458C9.21095 0.119929 9.44547 0.0214393 9.72514 0.0169899C10.0048 0.0125405 10.2507 0.11103 10.4629 0.312458C10.6751 0.528138 10.7811 0.775914 10.7811 1.05579C10.7811 1.33566 10.6751 1.58344 10.4629 1.79912L3.41393 8.96526H18.9742C19.2653 8.96526 19.509 9.06508 19.7054 9.26473C19.9018 9.46437 20 9.71215 20 10.0081C20 10.304 19.9018 10.5517 19.7054 10.7514C19.509 10.951 19.2653 11.0508 18.9742 11.0508H3.41393Z" fill="#E66439"/></svg>`
        },
        {
          type: 'button',
          tagName: 'button',
          content: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5861 11.0516H1.02578C0.734709 11.0516 0.490984 10.9518 0.294604 10.7521C0.0982012 10.5525 0 10.3047 0 10.0088C0 9.71288 0.0982012 9.4651 0.294604 9.26546C0.490984 9.06582 0.734709 8.96599 1.02578 8.96599H16.5861L9.51605 1.77847C9.31265 1.57169 9.21228 1.32971 9.21492 1.05252C9.21754 0.775315 9.32494 0.528872 9.53712 0.313192C9.74927 0.111763 9.98949 0.00748051 10.2578 0.000342925C10.526 -0.00679466 10.7663 0.0974882 10.9784 0.313192L19.6502 9.12909C19.7782 9.25921 19.8685 9.39647 19.9211 9.54087C19.9737 9.68525 20 9.84122 20 10.0088C20 10.1764 19.9737 10.3323 19.9211 10.4767C19.8685 10.6211 19.7782 10.7584 19.6502 10.8885L10.9784 19.7044C10.789 19.8969 10.5545 19.9954 10.2749 19.9999C9.99518 20.0043 9.74927 19.9058 9.53712 19.7044C9.32494 19.4887 9.21885 19.2409 9.21885 18.9611C9.21885 18.6812 9.32494 18.4334 9.53712 18.2177L16.5861 11.0516Z" fill="#E66439"/></svg>`
        }
      ],
      styles: `
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: transparent;
          border: 2px solid #E66439;
        }
      `,
      style: {
        display: 'flex',
        gap: '12px'
      }
    }
  }
];

const ASIDE_IMAGE_SLIDER = (typeMap: any) => [
  {
    id: 'aside-image-slider',
    label: 'Container',
    media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px;"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg>`,
    category: 'Aside Image Slider',
    content: typeMap['aside-image-slider']
  },
]

export const BLOCKS = (forms: PageBuilderForm[], popups?: Popup[]) => {
  const typeMap = TYPES(forms).reduce((acc: any, { id, ...dt }) => {
    const { tagName, ...data } = dt.model.defaults;

    acc[id] = {
      type: tagName,
      tagName,
      ...data
    };

    return acc;
  }, {});

  return [
    {
      id: 'heading',
      label: 'Heading',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px"><path d="M420-160v-520H200v-120h560v120H540v520H420Z"/></svg>`,
      category: 'Content',
      select: true,
      content: {
        type: 'text',
        tagName: 'h2',
        content: 'This is a heading',
        classes: ['h2'],
        traits: [
          {
            type: 'select',
            name: 'tagName',
            label: 'Type',
            changeProp: 1,
            options: [
              { value: 'h1', name: 'Heading 1' },
              { value: 'h2', name: 'Heading 2' },
              { value: 'h3', name: 'Heading 3' },
              { value: 'h4', name: 'Heading 4' },
              { value: 'h5', name: 'Heading 5' },
              { value: 'h6', name: 'Heading 6' }
            ]
          }
        ]
      }
    },
    {
      id: 'paragraph',
      label: 'Paragraph',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px"><path d="M120-240v-80h480v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>`,
      category: 'Content',
      select: true,
      content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</p>`
    },
    {
      id: 'page-link',
      label: 'Page Link',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg>`,
      category: 'Content',
      content: typeMap['page-link']
    },
    {
      id: 'anchor-link',
      label: 'Anchor Link',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg>`,
      category: 'Content',
      content: typeMap['anchor-link']
    },
    {
      id: 'link',
      label: 'Link',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg>`,
      category: 'Content',
      content: {
        type: 'link',
        style: {
          'font-family': '"Sen", sans-serif',
          display: 'inline-flex',
          'align-items': 'center',
          height: '46px',
          'background-color': '#E66439',
          color: 'white',
          'font-weight': 'bold',
          'border-radius': '4px',
          border: 'none',
          padding: '0 16px'
        },
        components: [
          {
            type: 'text',
            content: 'Call to action'
          },
          {
            content: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>`,
            style: {
              display: 'flex',
              'justify-content': 'center',
              'align-items': 'center',
              width: '36px',
              height: '36px',
              'margin-right': '-8px'
            }
          }
        ]
      }
    },
    {
      id: 'grid',
      label: 'Grid',
      media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 48px"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 3H3V11H11V3ZM9 5H5V9H9V5Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11 13H3V21H11V13ZM9 15H5V19H9V15Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21 3H13V11H21V3ZM19 5H15V9H19V5Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21 13H13V21H21V13ZM19 15H15V19H19V15Z" fill="black"/></svg>`,
      category: 'Layout',
      content: {
        tagName: 'div',
        classes: ['grid', 'grid-large'],
        name: 'Grid'
      }
    },
    {
      id: 'grid-small',
      label: 'Grid - Small',
      media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 48px"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 3H3V11H11V3ZM9 5H5V9H9V5Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11 13H3V21H11V13ZM9 15H5V19H9V15Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21 3H13V11H21V3ZM19 5H15V9H19V5Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21 13H13V21H21V13ZM19 15H15V19H19V15Z" fill="black"/></svg>`,
      category: 'Layout',
      content: {
        tagName: 'div',
        classes: ['grid', 'grid-small'],
        name: 'Grid - Small',
      }
    },
    {
      id: 'column',
      label: 'Column',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px"><path d="M760-760H599h5-4 160Zm-240 0q0-33 23.5-56.5T600-840h160q33 0 56.5 23.5T840-760v400h-80v-400H600v640q-33 0-56.5-23.5T520-200v-560ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h160q33 0 56.5 23.5T440-760v560q0 33-23.5 56.5T360-120H200Zm160-640H200v560h160v-560Zm0 0H200h160ZM760-40v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/></svg>`,
      category: 'Layout',
      content: {
        style: {
          'min-height': '32px'
        },
        ...typeMap.column
      }
    },
    {
      id: 'card',
      label: 'Card',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px;"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg>`,
      category: 'Layout',
      content: {
        tagName: 'div',
        style: {
          padding: '16px',
          overflow: 'hidden'
        }
      }
    },
    {
      id: 'header',
      label: 'Header',
      category: 'Layout',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" style="width: 100%; height: 48px;"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-520h560v-120H200v120Zm560 80H200v360h560v-360Zm-560-80v80-80Zm0 0v-120 120Zm0 80v360-360Z"/></svg>`,
      content: typeMap.header
    },
    {
      id: 'nav',
      label: 'Nav',
      category: 'Layout',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" width="24" style="width: 100%; height: 48px;"><path d="M240-560h360v-120H240v120Zm-40 440q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>`,
      content: typeMap.nav
    },
    {
      id: 'section',
      label: 'Section',
      category: 'Layout',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" style="width: 100%; height: 48px;"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm560-200H200v120h560v-120Zm-100-80h100v-360H660v360Zm-460 0h100v-360H200v360Zm180 0h200v-360H380v360Z"/></svg>`,
      content: typeMap.section
    },
    {
      id: 'article',
      label: 'Article',
      category: 'Layout',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" style="width: 100%; height: 48px;"><path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>`,
      content: typeMap.article
    },
    {
      id: 'aside',
      label: 'Aside',
      category: 'Layout',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" style="width: 100%; height: 48px;"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm280-80h280v-560H480v560Z"/></svg>`,
      content: typeMap.aside
    },
    {
      id: 'footer',
      label: 'Footer',
      category: 'Layout',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" style="width: 100%; height: 48px;"><path d="M240-240h480v-80H240v80Zm-40 120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>`,
      content: typeMap.footer
    },
    {
      id: 'image',
      label: 'Image',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px;"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z"/></svg>`,
      category: 'Media',
      select: true,
      activate: true,
      content: {
        type: 'image',
        style: {
          'max-width': '100%',
          height: '100%'
        }
      }
    },
    {
      id: 'video',
      label: 'Video',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px;"><path d="m380-300 280-180-280-180v360ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/></svg>`,
      category: 'Media',
      select: true,
      activate: true,
      content: {
        type: 'video',
        style: {
          'max-width': '100%',
          height: '100%'
        }
      }
    },
    {
      id: 'iframe',
      label: 'iframe',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px;"><path d="M460-420h200v-80H460v80Zm-60 60v-200h320v200H400ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Z"/></svg>`,
      category: 'Media',
      select: true,
      content: {
        type: 'iframe',
        style: {
          'aspect-ratio': '8 / 5'
        }
      }
    },
    {
      id: 'quote',
      label: 'Quote',
      category: 'Content',
      select: true,
      media: `<svg viewBox="0 0 24 24" style="width: 100%; height: 48px"><path fill="currentColor" d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" /></svg>`,
      content: `<blockquote class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</blockquote>`
    },
    {
      id: 'form',
      label: 'Form',
      media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 5.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 8H3V6h18v2zM22 10.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 13H3v-2h18v2z"/><rect width="10" height="3" x="2" y="15" rx=".5"/></svg>`,
      category: 'Forms',
      content: {
        tagName: 'form',
        droppable: ':not(form)',
        draggable: ':not(form)',
        style: {
          padding: '16px'
        }
      },
      view: {
        events: {
          // The submit of the form might redirect the user from the editor so
          // we should always prevent the default here.
          submit: (e: Event) => e.preventDefault()
        } as any
      }
    },
    {
      id: 'label',
      label: 'Input container',
      category: 'Forms',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px;"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg>`,
      content: typeMap.label
    },
    {
      id: 'input',
      label: 'Input',
      category: 'Forms',
      media:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"/><path d="M4 10h1v4H4z"/></svg>',
      content: typeMap.input
    },
    {
      id: 'number-input',
      label: 'Number Input',
      category: 'Forms',
      media:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"/><path d="M4 10h1v4H4z"/></svg>',
      content: typeMap['number-input']
    },
    {
      id: 'textarea',
      label: 'Textarea',
      category: 'Forms',
      media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 7.5c0-.9-.5-1.5-1.3-1.5H3.4C2.5 6 2 6.6 2 7.5v9c0 .9.5 1.5 1.3 1.5h17.4c.8 0 1.3-.6 1.3-1.5v-9zM21 17H3V7h18v10z"/><path d="M4 8h1v4H4zM19 7h1v10h-1zM20 8h1v1h-1zM20 15h1v1h-1z"/></svg>`,
      content: typeMap.textarea
    },
    {
      id: 'select',
      label: 'Select',
      category: 'Forms',
      media:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"/><path d="M18.5 13l1.5-2h-3zM4 11.5h11v1H4z"/></svg>',
      content: typeMap.select
    },
    {
      id: 'checkbox',
      label: 'Checkbox',
      category: 'Forms',
      media:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 17l-5-5 1.41-1.42L10 14.17l7.59-7.59L19 8m0-5H5c-1.11 0-2 .89-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2z"></path></svg>',
      content: typeMap.checkbox
    },
    {
      id: 'radio',
      label: 'Radio',
      category: 'Forms',
      media:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-18C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"></path></svg>',
      content: typeMap.radio
    },
    {
      id: 'submit-button',
      label: 'Submit',
      category: 'Forms',
      media:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"/><path d="M4 11.5h16v1H4z"/></svg>',
      content: typeMap['pb-submit']
    },
    {
      id: 'svg',
      label: 'Arrow Right',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>`,
      category: 'Vectors',
      select: true,
      content: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>`
    },

    ...STEPPER(typeMap),
    ...ASIDE_IMAGE_SLIDER(typeMap),

    ...(popups
      ? [
          {
            id: 'popup-trigger',
            label: 'Popup Trigger',
            category: 'Misc',
            content: {
              type: `pb-popup`,
              traits: [
                {
                  type: 'text',
                  label: 'Label',
                  name: 'label'
                },
                {
                  type: 'select',
                  name: 'popup',
                  label: 'Popup',
                  options: popups.map((popup) => ({
                    id: popup.id,
                    label: popup.title
                  }))
                }
              ]
            }
          }
        ]
      : [])
  ];
};
