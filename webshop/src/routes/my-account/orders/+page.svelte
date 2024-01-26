<script lang="ts">
  import { db, user } from "$lib/utils/firebase";
  import { collection, getDoc, limit, orderBy, query, where } from 'firebase/firestore';
  import { onMount } from "svelte";
  import Product from "$lib/Product.svelte";

  const sizeLimit = 5
  let favoriteProducts = [];

  onMount(async () => {
    if ($user) {
      query(
              collection(db, 'packages'),
              orderBy('orders'),
              where('customerId', '==', $user.id),
              limit(sizeLimit)
      );

    }
  });
</script>


<svelte:head>
  <title>Orders - Jaspero</title>
</svelte:head>
