<script>
  import Number from "./Number.svelte";
  export let numbers;
  export let max;
  let number;

  $: referenceNumber = numbers.find(x => x && x.id === number) || {};
  $: id = referenceNumber.id;
  $: native = referenceNumber.native;
  $: sino = referenceNumber.sino;

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function random() {
    const n = getRandomInt(max);
    number = n > 31 ? Math.ceil(n / 10) * 10 : n;
  }

  random();

</script>

<main class="container">
  <h1 class="mt-2">Learn Korean Numbers !</h1>

  <div class="form-row mb-2 justify-content-start">
    <div class="col mb-2 col-md-2">
      <label for="max" class="mr-2">max</label>
      <input type="number" class="form-control mr-2" id="max" placeholder="max" bind:value={max}/>
    </div>

    <div class="col mb-2 col-md-2">
      <label for="number" class="mr-2">number</label>
      <input type="number" class="form-control mr-2" id="number" placeholder="number" bind:value={number}/>
    </div>

    <div class="col align-self-end mb-2">
      <button class="btn btn-primary" on:click={random}>Random Number</button>
    </div>
  </div>

  
  <Number number={id} native={native} sino={sino}/>
</main>
