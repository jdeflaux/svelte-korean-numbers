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
  <h1 class="mt-5">Learn Korean Numbers !</h1>

  <div class="form-inline mb-3 mt-3">
    <label for="max" class="mr-2">max</label>
    <input type="number" class="form-control mr-2" id="max" placeholder="max" bind:value={max}/>

    <label for="max" class="mr-2">number</label>
    <input type="number" class="form-control mr-2" id="max" placeholder="number" bind:value={number}/>

    <button class="btn btn-primary" on:click={random}>Random Number</button>
  </div>
  
  <Number number={id} native={native} sino={sino}/>
</main>
