<script lang="ts">
  import Button from '$lib/Button.svelte';
  import Card from '$lib/Card.svelte';
  import DataTable from '$lib/DataTable.svelte';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import { datePipe } from '$lib/column-pipes/date.pipe';

  const headers = [
    {
      key: '/createdOn',
      label: 'Created On',
      pipes: [datePipe]
    },
    {
      key: '/name',
      label: 'Name'
    },
    {
      key: '/email',
      label: 'Email'
    },
    {
      key: '/role',
      label: 'Role'
    }
  ];
</script>

<Grid>
  <GridCol span="12">
    <Button variant="filled" color="secondary" href="/dashboard/admins/new">Add Admin</Button>
  </GridCol>
  <GridCol span="12">
    <Card table>
      <svelte:fragment slot="title">Admins</svelte:fragment>
      <DataTable col="admins" {headers} baseLink="/dashboard/admins/" />
    </Card>
  </GridCol>
</Grid>

<svelte:head>
  <title>Admins - Shop CMS</title>
</svelte:head>
