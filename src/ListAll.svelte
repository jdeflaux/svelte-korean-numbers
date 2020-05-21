<script>
  export let numbers;
  export let weekdays;
  export let monthList;
  let items = [];

  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  function toggleNumbersSino() {
    items = numbers.map((item) => ({
      uk: item.id,
      kr: item.sino
    }));
  }
  function toggleNumbersNative() {
    items = numbers.map((item) => ({
      uk: item.id,
      kr: item.native
    }));
  }
  function toggleWeekdays() {
    items = weekdays.map((item, index) => ({
      uk: weekday[index],
      kr: item
    }));
    // starts on monday :P
    items.push(items[0])
    items.shift();
  }
  function toggleMonthList() {
    items = monthList.map((item, index) => ({
      uk: month[index],
      kr: item
    }));
  }
</script>

<div>
  <span class="align-baseline">show:</span>
  <button class="btn btn-link" on:click={toggleNumbersSino}>numbers sino korean</button>
  <button class="btn btn-link" on:click={toggleNumbersNative}>numbers native</button>
  <button class="btn btn-link" on:click={toggleWeekdays}>week days</button>
  <button class="btn btn-link" on:click={toggleMonthList}>month</button>

  {#if items.length > 0}
    <div class="card container">
      <div class="row">
        {#each items as item}
          <div class="col text-nowrap text-center">
            <div>{item.uk}</div>
            <div>{item.kr}</div>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>
