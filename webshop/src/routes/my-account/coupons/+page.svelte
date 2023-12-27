<script>
  import {onMount} from "svelte";
  import {collection, getDocs} from "firebase/firestore";
  import {db} from "$lib/utils/firebase.ts";


  let items = [];

  onMount(async () => {
    try {
      // Fetch data from Firestore collection
      const querySnapshot = await getDocs(collection(db, 'coupons'));

      // Map the documents to an array of data
      items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      // Log the fetched collection data to the console
      console.log('Fetched Collection:', items);
    } catch (error) {
      console.error('Error fetching collection:', error);
    }
  });
</script>




<p>Coupons</p>


<main>
  <h1>Your Collection</h1>
    <ul>
      {#each items as item (item.id)}
        <li>{item.name}, {item.code}</li>
      {/each}
    </ul>
  {#if !items}
    <p>No items found.</p>
  {/if}
</main>

<svelte:head>
  <title>Coupons - Jaspero</title>
</svelte:head>


