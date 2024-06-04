<svelte:options customElement={{ tag: 'pb-accessibility-widget', shadow: 'none' }} />

<script lang="ts">
  import Dialog from '$lib/Dialog.svelte';
  import { onMount } from 'svelte';
  import Button from '../../../lib/Button.svelte';

  export let color: string;

	const fontSizes = JSON.stringify([
		{ value: '100%', label: 'Normalni' },
		{ value: '115%', label: 'Srednji' },
		{ value: '130%', label: 'Veliki' },
	]);

  let open = false;

	let dislexie: boolean;
	let contrast: boolean;
	let fontSize: string; 


	$: document.documentElement.style.filter = contrast ? 'grayscale(100%)' : '';
	$: dislexie ? document.body.classList.add('dislexie') : document.body.classList.remove('dislexie');
	$: document.documentElement.style.fontSize = fontSize;

  function openDialog() {
    open = true;
  }

	function storeData() {
		localStorage.setItem('dislexie', dislexie.toString());
		localStorage.setItem('contrast', contrast.toString());
		localStorage.setItem('fontSize', fontSize);

		open = false;
	}

	function resetData() {

		dislexie = false;
		contrast = false;
		fontSize = '100%';

		localStorage.removeItem('dislexie');
		localStorage.removeItem('contrast');
		localStorage.removeItem('fontSize');

		open = false;
	}

  onMount(() => {
		dislexie = localStorage.getItem('dislexie') === 'true';
		contrast = localStorage.getItem('contrast') === 'true';
		fontSize = localStorage.getItem('fontSize') || '100%';
	});
</script>

<button type="button" style="background-color: {color}" on:click={openDialog}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="#e8eaed"
    ><path
      d="M480-800q-33 0-56.5-23.5T400-880q0-33 23.5-56.5T480-960q33 0 56.5 23.5T560-880q0 33-23.5 56.5T480-800ZM360-200v-480q-60-5-122-15t-118-25l20-80q78 21 166 30.5t174 9.5q86 0 174-9.5T820-800l20 80q-56 15-118 25t-122 15v480h-80v-240h-80v240h-80ZM320 0q-17 0-28.5-11.5T280-40q0-17 11.5-28.5T320-80q17 0 28.5 11.5T360-40q0 17-11.5 28.5T320 0Zm160 0q-17 0-28.5-11.5T440-40q0-17 11.5-28.5T480-80q17 0 28.5 11.5T520-40q0 17-11.5 28.5T480 0Zm160 0q-17 0-28.5-11.5T600-40q0-17 11.5-28.5T640-80q17 0 28.5 11.5T680-40q0 17-11.5 28.5T640 0Z"
    /></svg
  >
</button>

<Dialog bind:showing={open}>
	<h3>Pristupačnost</h3>

	<jp-select value={fontSize} label="Veličina teksta" options={fontSizes} on:value={e => fontSize = e.detail}></jp-select>
	<jp-toggle value={dislexie} label="Disleksija" on:value={e => dislexie = e.detail}></jp-toggle>
	<jp-toggle value={contrast} label="Kontrast" on:value={e => contrast = e.detail}></jp-toggle>

	<footer>
		<Button variant="ghost" on:click={resetData}>Resetiraj postavke</Button>
		<Button on:click={storeData}>Spremi Promijene</Button>
	</footer>
</Dialog>

<style>

	h3 {
		font-size: 1.2rem;
		margin-bottom: 1rem;
		font-weight: 600;
	}

  button {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
  }

	footer {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;
	}

	:global(.dislexie) {
		font-family: "Lexend", "sans-serif";
	}
</style>
