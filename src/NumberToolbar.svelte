<script>
  import randomInt from './random/randomInt';
  import { number } from './stores';

  export let max;

  const onMinus = () => {
    number.update(n => n - 1);
  };

  const onAdd = () => {
    number.update(n => n + 1);
  };

  const onRandom = () => {
    let n = randomInt(max);
    n = n > 31 ? Math.ceil(n / 10) * 10 : n;
    number.update(() => n);
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
      value={$number} />
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
