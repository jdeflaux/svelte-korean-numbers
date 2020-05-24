<script>
  import { number } from "./stores";
  import { NUMBERS } from "./constants";
  import Card from "./Card.svelte";

  export let revealKorean;

  let id;
  let native;
  let sino;

  number.subscribe((value) => {
    let referenceNumber = NUMBERS.find(x => x && x.id === value) || {};
    id = referenceNumber.id;
    native = referenceNumber.native;
    sino = referenceNumber.sino;
  });
</script>

<style>
  @media (min-width: 768px) {
    .sino {
      text-align: right;
    }
    .native {
      text-align: left;
    }
  }
</style>

{#if id}
  <Card {revealKorean}>
    <span slot="en">{id}</span>
    <span class="row" slot="reveal">
      <span class="col-sm sino mb-3">
        <h2>{sino}</h2>
        <span class="badge badge-info">sino</span>
      </span>

      <span class="col-sm native">
        <h2>{native}</h2>
        <span class="badge badge-info">native</span>
      </span>
  </Card>
{/if}
