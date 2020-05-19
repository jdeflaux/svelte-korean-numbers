<script>
  import Number from "./Number.svelte";
  import Toolbar from "./Toolbar.svelte";
  import ToolbarDate from "./ToolbarDate.svelte";
  import Date from "./Date.svelte";

  export let numbers;
  export let monthList;
  export let weekdays;
  export let max;

  let date = null;

  let number = null;

  $: referenceNumber = numbers.find(x => x && x.id === number) || {};
  $: id = referenceNumber.id;
  $: native = referenceNumber.native;
  $: sino = referenceNumber.sino;


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

  <Toolbar bind:max={max} bind:number={number} on:change={onNumberChange} />
  <ToolbarDate on:dateChange={onDateChange} />

  <Number number={id} native={native} sino={sino}/>

  <Date bind:date={date} bind:numbers={numbers} bind:monthList={monthList} bind:weekdays={weekdays} />
</main>
