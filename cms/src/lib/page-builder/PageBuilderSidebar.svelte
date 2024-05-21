<script lang="ts">
  import { onMount } from 'svelte';
  import FormModule from '../FormModule.svelte';
  import { BLOCKS } from './blocks.conts';
  import type { Template, TemplateSection } from './template.interface';
  import { random } from '@jaspero/utils';
  import { slide } from 'svelte/transition';
  import type { Popup } from './popup.interface';
  import type { PageBuilderForm } from './page-builder-form.interface';

  export let templates: Template[] | undefined;
  export let sections: Template[] | undefined;
  export let popups: Popup[] | undefined;
  export let activeSidebar = 'page-settings';
  export let items: Array<any> | undefined;
  export let metaItems: Array<any> | undefined;
  export let value: any;
  export let grapesInstance: any;
  export let formModule: FormModule;
  export let forms: PageBuilderForm[];

  let sidebarElements: Array<{
    id: string;
    title: string;
    icon: string;
  }> = [];
  let blocksEl: HTMLDivElement;
  let layersEl: HTMLDivElement;
  let stylesEl: HTMLDivElement;
  let traitsEl: HTMLDivElement;
  let activeCategory = '';

  $: if (activeSidebar) {
    switch (activeSidebar) {
      case 'blocks': {
        if (blocksEl) {
          const el = grapesInstance.BlockManager.render(BLOCKS(forms, popups), { external: true });
          blocksEl.appendChild(el);
        }
        break;
      }
      case 'layers': {
        if (layersEl) {
          const el = grapesInstance.LayerManager.render();
          layersEl.appendChild(el);
        }
        break;
      }
      case 'styles': {
        if (stylesEl) {
          const selectorEl = grapesInstance.SelectorManager.render();
          stylesEl.appendChild(selectorEl);

          const el = grapesInstance.StyleManager.render();
          stylesEl.appendChild(el);
        }
        break;
      }
      case 'traits': {
        if (traitsEl) {
          const el = grapesInstance.TraitManager.render();
          traitsEl.appendChild(el);
        }
        break;
      }
    }
  }

  function adjustIds(components: any[], styles: any[]) {
    for (const component of components) {
      if (component.attributes?.id) {
        const newId = random.string(16);

        const s = styles.find((style) => style.selectors.includes('#' + component.attributes.id));

        if (s) {
          s.selectors = s.selectors.map((selector: string) => {
            if (selector === '#' + component.attributes.id) {
              return '#' + newId;
            }

            return selector;
          });
        }

        component.attributes.id = newId;
      }

      if (component.components) {
        adjustIds(component.components, styles);
      }
    }
  }

  function addSection(section: TemplateSection) {
    const json = grapesInstance.getProjectData();

    const lastFrame = json.pages[0].frames[json.pages[0].frames.length - 1];
    const lastSectionFrame = section.json.pages[0].frames[section.json.pages[0].frames.length - 1];

    if (!lastFrame.component.components) {
      lastFrame.component.components = [];
    }

    adjustIds(lastSectionFrame.component.components, section.json.styles);

    json.styles.push(...section.json.styles);

    lastFrame.component.components.push(...lastSectionFrame.component.components);

    grapesInstance.loadProjectData(json);
  }

  function addTemplate(template: TemplateSection) {
    const json = grapesInstance.getProjectData();

    json.pages[0].frames = template.json.pages[0].frames;
    json.styles = template.json.styles;

    grapesInstance.loadProjectData(json);
  }

  function toggleCategory(category: string) {
    if (activeCategory === category) {
      activeCategory = '';
      return;
    }
    activeCategory = category;
  }

  onMount(() => {
    sidebarElements = [
      {
        id: 'page-settings',
        title: 'Page Settings',
        icon: 'settings'
      },
      {
        id: 'blocks',
        title: 'Blocks',
        icon: 'add_box'
      },
      ...(sections
        ? [
            {
              id: 'sections',
              title: 'Sections',
              icon: 'library_add'
            }
          ]
        : []),
      ...(templates
        ? [
            {
              id: 'templates',
              title: 'Templates',
              icon: 'note_add'
            }
          ]
        : []),
      {
        id: 'layers',
        title: 'Layers',
        icon: 'stacks'
      },
      {
        id: 'styles',
        title: 'Styles',
        icon: 'style'
      },
      {
        id: 'traits',
        title: 'Traits',
        icon: 'dataset'
      },
      ...(metaItems
        ? [
            {
              id: 'seo',
              title: 'SEO',
              icon: 'edit_note'
            }
          ]
        : [])
    ];
  });
</script>

<aside>
  {#each sidebarElements as element}
    <button
      title={element.title}
      class="material-symbols-outlined"
      class:active={activeSidebar === element.id}
      on:click={() => (activeSidebar = activeSidebar === element.id ? '' : element.id)}
      >{element.icon}</button
    >
  {/each}
</aside>

<section class:active={activeSidebar}>
  {#if activeSidebar === 'page-settings'}
    <p class="p-4 border-b">Page settings</p>
    <FormModule id="page-settings" bind:this={formModule} {items} bind:value />
  {:else if activeSidebar === 'blocks'}
    <p class="p-4 border-b">Blocks</p>
    <div bind:this={blocksEl} />
  {:else if activeSidebar === 'sections'}
    {#if sections}
      <p class="p-4 border-b">Sections</p>
      <div class="divide-y">
        {#each sections as category}
          <button
            class="flex justify-between items-center w-full px-4 py-2 hover:bg-black/10 transition"
            on:click={toggleCategory(category.category)}
          >
            <p>{category.category}</p>
            <i
              class="fa fa-caret-down transition duration-300"
              class:-rotate-180={activeCategory === category.category}
            />
          </button>

          {#if activeCategory === category.category}
            <div class="flex flex-col divide-y" transition:slide={{ duration: 250 }}>
              {#each category.sections as section}
                <button
                  class="w-full text-left px-4 py-2 hover:bg-black/10 transition"
                  type="button"
                  on:click={() => addSection(section)}
                >
                  {#if section.image}
                    <img src={section.image} alt={section.title} />
                  {/if}
                  <span>{section.title}</span>
                </button>
              {/each}
            </div>
          {/if}
        {/each}
      </div>
    {/if}
  {:else if activeSidebar === 'templates'}
    {#if templates}
      <p class="p-4 border-b">Templates</p>
      <div>
        {#each templates as category}
          <button
            class="flex justify-between items-center w-full px-4 py-2 hover:bg-black/10 transition"
            on:click={toggleCategory(category.category)}
          >
            <p>{category.category}</p>
            <i
              class="fa fa-caret-down transition duration-300"
              class:-rotate-180={activeCategory === category.category}
            />
          </button>

          {#if activeCategory === category.category}
            {#each category.sections as section}
              <button
                class="w-full text-left px-4 py-2 hover:bg-black/10 transition"
                type="button"
                on:click={() => addTemplate(section)}
              >
                {#if section.image}
                  <img src={section.image} alt={section.title} />
                {/if}
                <span>{section.title}</span>
              </button>
            {/each}
          {/if}
        {/each}
      </div>
    {/if}
  {:else if activeSidebar === 'layers'}
    <p class="p-4 border-b">Layers</p>
    <div bind:this={layersEl} />
  {:else if activeSidebar === 'styles'}
    <p class="p-4 border-b">Styles</p>
    <div bind:this={stylesEl} />
  {:else if activeSidebar === 'traits'}
    <p class="p-4 border-b">Traits</p>
    <div bind:this={traitsEl} />
  {:else if activeSidebar === 'seo'}
    <p class="p-4 border-b">SEO</p>
    <FormModule id="seo" bind:this={formModule} items={metaItems} bind:value />
  {/if}
</section>

<style lang="postcss">
  aside {
    @apply bg-white border-r;
    height: 100%;
    width: 55px;
    display: flex;
    flex-direction: column;
  }

  section.active {
    width: 300px;
  }

  section {
    @apply bg-white border-r duration-200;
    width: 0;
    height: 100%;
    overflow-y: auto;
  }

  .material-symbols-outlined {
    padding: 0.5rem 0.2rem;
  }

  .material-symbols-outlined.active {
    @apply bg-primary/[8%] text-secondary;
  }
</style>
