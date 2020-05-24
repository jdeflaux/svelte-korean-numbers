<script>
  import { createEventDispatcher } from "svelte";
  import Card from "./Card.svelte";

  const dispatch = createEventDispatcher();

  import {
    NUMBERS,
    MONTH_KR,
    WEEKDAY_KR,
    MONTH_EN,
    WEEKDAY_EN
  } from "./constants";

  export let hidden;
  let items = [];

  const displayedNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  function toggleNumbers() {
    items = displayedNumbers.map(n => ({
      en: NUMBERS[n].id,
      sino: NUMBERS[n].sino,
      native: NUMBERS[n].native
    }));
    dispatch("change");
  }
  function toggleWeekdays() {
    items = WEEKDAY_KR.map((item, index) => ({
      en: WEEKDAY_EN[index],
      kr: item
    }));
    // starts on monday :P
    items.push(items[0]);
    items.shift();
    dispatch("change");
  }
  function toggleMonthList() {
    items = MONTH_KR.map((item, index) => ({
      en: MONTH_EN[index],
      kr: item
    }));
    dispatch("change");
  }
</script>

<div>
  <span class="align-baseline">show:</span>
  <button class="btn btn-link" on:click={toggleNumbers}>
    numbers
  </button>
  <button class="btn btn-link" on:click={toggleWeekdays}>week days</button>
  <button class="btn btn-link" on:click={toggleMonthList}>month</button>

  {#if items.length > 0 && !hidden}
    <Card>
      <div class="row">
        {#if items[1].sino}
          <div class="col text-nowrap text-center">
            <div>_</div>
            <h3><span class="badge badge-info">sino</span></h3>
            <h3><span class="badge badge-info">native</span></h3>
          </div>
        {/if}
        {#each items as item}
          <div class="col text-nowrap text-center">
            <div>{item.en}</div>
            {#if item.kr}<h3>{item.kr}</h3>{/if}
            {#if item.sino}<h3>{item.sino}</h3>{/if}
            {#if item.native}<h3>{item.native}</h3>{/if}
          </div>
        {/each}
      </div>
    </Card>
  {/if}
</div>
