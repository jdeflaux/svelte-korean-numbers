<script>
	export let number;
</script>

<style>
  .card .reveal {
    visibility: hidden;
  }

  .card:hover .reveal {
    visibility: visible;
  }
</style>

{#if number && number.id !== undefined}
<div class="card">
  <div class="card-body text-center">
    <h1>{number.id}</h1>

    <div class="row">
      <span class="col-sm reveal text-right">
          <h2 >{number.sino}</h2>
          <span class="badge badge-info">sino</span>
      </span>

      <span class="col-sm reveal text-left">
          <h2 >{number.native}</h2>
          <span class="badge badge-info">native</span>
      </span>
    </div>
  </div>
</div>
{/if}