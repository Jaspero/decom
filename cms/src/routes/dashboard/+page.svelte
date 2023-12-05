<script lang="ts">
  import Card from '$lib/Card.svelte';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import SectionTitle from '$lib/SectionTitle.svelte';
  import Link from '$lib/Link.svelte';
  import NewFeature from '$lib/NewFeature.svelte';
</script>

<section class="relative pt-12">
  <img src="/images/intro-bg.png" alt="" class="-z-10 absolute top-0 w-full h-80" />

  <Grid>
    <GridCol span="12">
      <SectionTitle emojiColor="white">
        <slot slot="emoji">📦</slot>

        <svelte:fragment>Order kits</svelte:fragment>

        <slot slot="description">
          To see all products and offers, check out your <Link href="/">Pricing info</Link> page.
        </slot>
      </SectionTitle>
    </GridCol>

    <GridCol span="12" spansm="6">
      <Card>
        <svelte:fragment slot="title">Order test kits for your practice</svelte:fragment>

        <slot slot="emoji">🚚</slot>

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at laudantium quaerat
        recusandae! Aut dolorum hic incidunt itaque minima necessitatibus nihil, nostrum officiis
        optio, quaerat quasi quos, soluta tenetur velit! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Ab ducimus ea eius, eveniet explicabo itaque molestias nobis non numquam
        porro praesentium qui ratione rem, repudiandae, sint? Autem cum earum maiores.
      </Card>
    </GridCol>

    <GridCol span="12" spansm="6">
      <Card>
        <svelte:fragment slot="title">Order test kits for your practice</svelte:fragment>

        <slot slot="emoji">🚚</slot>

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at laudantium quaerat
        recusandae! Aut dolorum hic incidunt itaque minima necessitatibus nihil, nostrum officiis
        optio, quaerat quasi quos, soluta tenetur velit! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Ab ducimus ea eius, eveniet explicabo itaque molestias nobis non numquam
        porro praesentium qui ratione rem, repudiandae, sint? Autem cum earum maiores.
      </Card>
    </GridCol>

    <GridCol span="12">
      <NewFeature
        ><Link href="/" color="blue">Book a FREE call with a specialist</Link> to help you interpret
        your patients’ results.</NewFeature
      >
    </GridCol>
  </Grid>

  <Grid>
    <GridCol span="12">
      <SectionTitle emojiColor="#DDF2E8">
        <slot slot="emoji">🔬</slot>

        <svelte:fragment>Patients & Results</svelte:fragment>

        <slot slot="description">
          You have 0 samples in analysis. You can see their status on your <Link href="/"
            >Kits page</Link
          >.
        </slot>
      </SectionTitle>
    </GridCol>

    <GridCol span="12">
      <NewFeature
        >Download our marketing materials as <Link href="/" color="blue">Digital content</Link> and <Link
          href="/"
          color="blue">Printable PDF’s</Link
        >. You can also download our <Link href="/" color="blue">sample reports</Link>.</NewFeature
      >
    </GridCol>
  </Grid>
</section>

<svelte:head>
  <title>Dashboard - GlycanAge</title>
</svelte:head>
