<script>
  import Number from "./Number.svelte";
  import NumberToolbar from "./NumberToolbar.svelte";
  import DateToolbar from "./DateToolbar.svelte";
  import Date from "./Date.svelte";
  import ListAll from "./ListAll.svelte";

  import { number, date, time } from "./stores";

  export let max;

  let showNumber;
  let showDate;
  let showTime;
  let showList;

  function reset() {
    showNumber= false;
    showDate = false;
    showTime = false;
    showList = false;
  }

  number.subscribe(() => { reset(); showNumber = true });
  date.subscribe(() => { reset(); showDate = true });
  time.subscribe(() => { reset(); showTime = true });
  const onShowList = () => {reset(); showList = true }

</script>

<main class="container">
  <h1 class="mt-2">Learn Korean Numbers !</h1>

  <NumberToolbar bind:max />
  <DateToolbar />

  <ListAll hidden={!showList} on:change={onShowList} />

  {#if showNumber}
    <Number />
  {/if}

  {#if showDate}
    <Date />
  {/if}
</main>
