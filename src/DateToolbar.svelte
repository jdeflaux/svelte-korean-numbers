<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  const onRandom = () => {
    const random = randomDate(new Date(2020, 0, 1), new Date(2020, 12, 31));
    dispatch("dateChange", random);
  };
</script>

<div class="form-row mb-2 justify-content-start">
  <div class="col align-self-end mb-2 mt-3">
    <button class="btn btn-primary" on:click={onRandom}>Random Date</button>
  </div>
</div>
