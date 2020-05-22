<script>
  import { number } from "./stores";
  import { NUMBERS } from "./constants";

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
  <div class="card reveal-container">
    <div class="card-body text-center">
      <h1>{id}</h1>

      <div class="row">

        <span class="col-sm reveal sino mb-3">
          <h2>{sino}</h2>
          <span class="badge badge-info">sino</span>
        </span>

        <span class="col-sm reveal native">
          <h2>{native}</h2>
          <span class="badge badge-info">native</span>
        </span>
      </div>
    </div>
  </div>
{/if}
