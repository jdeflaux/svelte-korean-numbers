<script>
  import Number from "./Number.svelte";
  export let numbers;
  export let max = 100;
  let number;

  let unit;
  let tens;

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function onClick() {
    const n = getRandomInt(max);
    number = numbers[n % numbers.length];
  }
  onClick();
</script>

<main class="container">
  <h1 class="mt-5">Learn Korean Numbers !</h1>

  <div class="form-inline mb-3 mt-3">
    <label for="max" class="mr-2">max</label>
    <input type="text" class="form-control mr-2" id="max" placeholder="max" bind:value={max}/>
    <button class="btn btn-primary" on:click={onClick}>Next Number</button>
  </div>
  
  <Number {number} />
</main>
