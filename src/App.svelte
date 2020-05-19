<script>
  import Number from "./Number.svelte";
  import NumberToolbar from "./NumberToolbar.svelte";
  import DateToolbar from "./DateToolbar.svelte";
  import Date from "./Date.svelte";

  export let numbers;
  export let monthList;
  export let weekdays;
  export let max;

  let date = null;
  let number = null;

  function onNumberChange(e) {
    number = e.detail;
    date = null;
  }

  function onDateChange(e) {
    date = e.detail;
    number = null
  }

</script>

<main class="container">
  <h1 class="mt-2">Learn Korean Numbers !</h1>

  <NumberToolbar bind:max={max} bind:number={number} on:change={onNumberChange} />
  <DateToolbar on:dateChange={onDateChange} />

  <Number number={number} numbers={numbers} />

  <Date date={date} numbers={numbers} monthList={monthList} weekdays={weekdays} />
</main>
