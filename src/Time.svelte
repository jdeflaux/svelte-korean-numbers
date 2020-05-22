<script>
  import dayjs from 'dayjs';
  export let date;

  export let numbers;
  export let monthList;
  export let weekdays;

  $: dateString = dayjs(date).format('ddd MMM D');
  $: monthString = date ? monthList[date.getMonth()] : ''
  $: dayString = date ? numbers[date.getDate()].sino + '일' : ''
  $: weekdayString = date ? weekdays[date.getDay()] : ''
</script>

<style>
</style>

{#if date}
  <div class="card reveal-container">
    <div class="card-body text-center">
      <h1>{dateString}</h1>

      <div class="row">
        <span class="col">
          <h2 class="reveal">{weekdayString} {monthString} {dayString}</h2>
        </span>
      </div>

    </div>
  </div>
{/if}
