<script>
  import Number from "./Number.svelte";
  import NumberToolbar from "./NumberToolbar.svelte";
  import DateToolbar from "./DateToolbar.svelte";
  import Date from "./Date.svelte";
  import ListAll from "./ListAll.svelte";

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
    number = null;
  }

  function reset() {
    date = null;
    number = null;
  }
</script>

<main class="container">
  <h1 class="mt-2">Learn Korean Numbers !</h1>

  <NumberToolbar bind:max bind:number on:change={onNumberChange} />
  <DateToolbar on:dateChange={onDateChange} />

  <ListAll {numbers} {monthList} {weekdays} hidden={date || number} on:change={reset}/>

  <Number {number} {numbers} />

  <Date {date} {numbers} {monthList} {weekdays} />

</main>
