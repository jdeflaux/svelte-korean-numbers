<script>
  export let max;
  export let number;

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const emitValue = value => {
    dispatch("change", value);
  };

  const onMinus = () => {
    emitValue(number - 1);
  };

  const onAdd = () => {
    emitValue(number + 1);
  };

  const onRandom = () => {
    let n = getRandomInt(max);
    n = n > 31 ? Math.ceil(n / 10) * 10 : n;
    emitValue(n);
  };
</script>

<div class="form-row mb-2 justify-content-start">
  <div class="col mb-2 col-md-2">
    <label for="max" class="mr-2">max</label>
    <input
      type="number"
      class="form-control mr-2"
      id="max"
      placeholder="max"
      bind:value={max} />
  </div>

  <div class="col mb-2 col-md-2">
    <label for="number" class="mr-2">number</label>
    <input
      type="number"
      class="form-control mr-2"
      id="number"
      placeholder="number"
      bind:value={number} />
  </div>

  <div class="col align-self-end col-auto mb-2">
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-secondary" on:click={onMinus}>
        -1
      </button>
      <button type="button" class="btn btn-secondary" on:click={onAdd}>
        +1
      </button>
    </div>
  </div>

  <div class="col align-self-end mb-2">
    <button class="btn btn-primary" on:click={onRandom}>Random Number</button>
  </div>
</div>
