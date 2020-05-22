<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import { NUMBERS, MONTH_KR, WEEKDAY_KR, MONTH_EN, WEEKDAY_EN } from "./constants";

  export let hidden;
  let items = [];

  function toggleNumbersSino() {
    items = NUMBERS.map((item) => ({
      en: item.id,
      kr: item.sino
    }));
    dispatch('change')
  }
  function toggleNumbersNative() {
    items = NUMBERS.map((item) => ({
      en: item.id,
      kr: item.native
    }));
    dispatch('change')
  }
  function toggleWeekdays() {
    items = WEEKDAY_KR.map((item, index) => ({
      en: WEEKDAY_EN[index],
      kr: item
    }));
    // starts on monday :P
    items.push(items[0])
    items.shift();
    dispatch('change')
  }
  function toggleMonthList() {
    items = MONTH_KR.map((item, index) => ({
      en: MONTH_EN[index],
      kr: item
    }));
    dispatch('change')
  }
</script>

<div>
  <span class="align-baseline">show:</span>
  <button class="btn btn-link" on:click={toggleNumbersSino}>numbers sino korean</button>
  <button class="btn btn-link" on:click={toggleNumbersNative}>numbers native</button>
  <button class="btn btn-link" on:click={toggleWeekdays}>week days</button>
  <button class="btn btn-link" on:click={toggleMonthList}>month</button>

  {#if items.length > 0 && !hidden}
    <div class="card container">
      <div class="row">
        {#each items as item}
          <div class="col text-nowrap text-center">
            <div>{item.en}</div>
            <h3>{item.kr}</h3>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>
