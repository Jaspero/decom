<script lang="ts">
  export let span: string | null = null; /* 1 - 12 */
  export let spansm: string | null = null; /* 1 - 12 */
  export let spanmd: string | null = null; /* 1 - 12 */
  export let spanlg: string | null = null; /* 1 - 12 */
  export let spanxl: string | null = null; /* 1 - 12 */
  export let span2xl: string | null = null; /* 1 - 12 */

  $: properties = {
    class: [
      span == '1' && 'col-span-1',
      span == '2' && 'col-span-2',
      span == '3' && 'col-span-3',
      span == '4' && 'col-span-4',
      span == '5' && 'col-span-5',
      span == '6' && 'col-span-6',
      span == '7' && 'col-span-7',
      span == '8' && 'col-span-8',
      span == '9' && 'col-span-9',
      span == '10' && 'col-span-10',
      span == '11' && 'col-span-11',
      span == '12' && 'col-span-12',

      spansm == '1' && 'sm:col-span-1',
      spansm == '2' && 'sm:col-span-2',
      spansm == '3' && 'sm:col-span-3',
      spansm == '4' && 'sm:col-span-4',
      spansm == '5' && 'sm:col-span-5',
      spansm == '6' && 'sm:col-span-6',
      spansm == '7' && 'sm:col-span-7',
      spansm == '8' && 'sm:col-span-8',
      spansm == '9' && 'sm:col-span-9',
      spansm == '10' && 'sm:col-span-10',
      spansm == '11' && 'sm:col-span-11',
      spansm == '12' && 'sm:col-span-12',

      spanmd == '1' && 'md:col-span-1',
      spanmd == '2' && 'md:col-span-2',
      spanmd == '3' && 'md:col-span-3',
      spanmd == '4' && 'md:col-span-4',
      spanmd == '5' && 'md:col-span-5',
      spanmd == '6' && 'md:col-span-6',
      spanmd == '7' && 'md:col-span-7',
      spanmd == '8' && 'md:col-span-8',
      spanmd == '9' && 'md:col-span-9',
      spanmd == '10' && 'md:col-span-10',
      spanmd == '11' && 'md:col-span-11',
      spanmd == '12' && 'md:col-span-12',

      spanlg == '1' && 'lg:col-span-1',
      spanlg == '2' && 'lg:col-span-2',
      spanlg == '3' && 'lg:col-span-3',
      spanlg == '4' && 'lg:col-span-4',
      spanlg == '5' && 'lg:col-span-5',
      spanlg == '6' && 'lg:col-span-6',
      spanlg == '7' && 'lg:col-span-7',
      spanlg == '8' && 'lg:col-span-8',
      spanlg == '9' && 'lg:col-span-9',
      spanlg == '10' && 'lg:col-span-10',
      spanlg == '11' && 'lg:col-span-11',
      spanlg == '12' && 'lg:col-span-12',

      spanxl == '1' && 'xl:col-span-1',
      spanxl == '2' && 'xl:col-span-2',
      spanxl == '3' && 'xl:col-span-3',
      spanxl == '4' && 'xl:col-span-4',
      spanxl == '5' && 'xl:col-span-5',
      spanxl == '6' && 'xl:col-span-6',
      spanxl == '7' && 'xl:col-span-7',
      spanxl == '8' && 'xl:col-span-8',
      spanxl == '9' && 'xl:col-span-9',
      spanxl == '10' && 'xl:col-span-10',
      spanxl == '11' && 'xl:col-span-11',
      spanxl == '12' && 'xl:col-span-12',

      span2xl == '1' && '2xl:col-span-1',
      span2xl == '2' && '2xl:col-span-2',
      span2xl == '3' && '2xl:col-span-3',
      span2xl == '4' && '2xl:col-span-4',
      span2xl == '5' && '2xl:col-span-5',
      span2xl == '6' && '2xl:col-span-6',
      span2xl == '7' && '2xl:col-span-7',
      span2xl == '8' && '2xl:col-span-8',
      span2xl == '9' && '2xl:col-span-9',
      span2xl == '10' && '2xl:col-span-10',
      span2xl == '11' && '2xl:col-span-11',
      span2xl == '12' && '2xl:col-span-12'
    ]
      .filter(Boolean)
      .join(' ')
  };
</script>

<div {...properties}>
  <slot />
</div>
