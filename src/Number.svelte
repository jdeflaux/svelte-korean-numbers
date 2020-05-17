<script>
	export let number;
	export let native;
	export let sino;
</script>

<style>
  .card .reveal {
    visibility: hidden;
  }

  .card:hover .reveal {
    visibility: visible;
  }

  @media (min-width: 768px) {
    .sino {
      text-align: right;
    }
    .native {
      text-align: left;
    }
   }
</style>

{#if number !== undefined}
<div class="card">
  <div class="card-body text-center">
    <h1>{number}</h1>

    <div class="row">
      <span class="col-sm reveal sino">
          <h2 >{sino}</h2>
          <span class="badge badge-info">sino</span>
      </span>

      <span class="col-sm reveal native">
          <h2 >{native}</h2>
          <span class="badge badge-info">native</span>
      </span>
    </div>
  </div>
</div>
{/if}