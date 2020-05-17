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
</style>

{#if number !== undefined}
<div class="card">
  <div class="card-body text-center">
    <h1>{number}</h1>

    <div class="row">
      <span class="col-sm reveal text-right">
          <h2 >{sino}</h2>
          <span class="badge badge-info">sino</span>
      </span>

      <span class="col-sm reveal text-left">
          <h2 >{native}</h2>
          <span class="badge badge-info">native</span>
      </span>
    </div>
  </div>
</div>
{/if}