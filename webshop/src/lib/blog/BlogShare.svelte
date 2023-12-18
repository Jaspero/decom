<script lang="ts">
  export let link: string;
  export let title: string;

  function getUrl() {
    return window.location.origin + link;
  }

  function facebook() {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${getUrl()}`,
      '',
      'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0'
    );
  }

  function twitter() {
    window.open(
      `http://twitter.com/share?text=${title}&url=${getUrl()}`,
      '',
      'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0'
    );
  }

  function linkedIn() {
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${getUrl()}&title=${title}`,
      '',
      'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0'
    );
  }
</script>

<div class="flex ai-center container">
  <p class="m-r-m">Share this article:</p>
  <button on:click={() => facebook()}>Facebook</button>
  <button on:click={() => twitter()}>Twitter</button>
  <button on:click={() => linkedIn()}>LinkedIn</button>
</div>

<style>
  button {
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--accent);
    font-size: 1rem;
    font-weight: bold;
  }

  button:hover {
    text-decoration: underline;
  }

  button:not(:first-of-type) {
    margin-left: 1rem;
  }

  .container {
    @media (max-width: 600px) {
      flex-wrap: wrap;
      flex: 1;
      margin-left: 4rem;

      p {
        width: 100%;
      }
    }
  }

  @media (max-width: 600px) {
    .container {
      flex-wrap: wrap;
      flex: 1;
      margin-left: 4rem;
    }

    .container p {
      width: 100%;
    }
  }
</style>
