<script>
  import dayjs from "dayjs";
  import { date } from "./stores";
  import { NUMBERS, MONTH_KR, WEEKDAY_KR } from "./constants";

  let englishDate;
  let koreanDate;

  date.subscribe((newDate) => {
    englishDate = dayjs(newDate).format("ddd MMM D");

    const monthString = newDate ? MONTH_KR[newDate.getMonth()] : "";
    const dayString = newDate ? NUMBERS[newDate.getDate()].sino + "일" : "";
    const weekdayString = newDate ? WEEKDAY_KR[newDate.getDay()] : "";

    koreanDate = `${weekdayString} ${monthString} ${dayString}`;
  });
</script>

{#if $date}
  <div class="card reveal-container">
    <div class="card-body text-center">

      <h1>{englishDate}</h1>

      <div class="row">
        <span class="col">
          <h2 class="reveal">{koreanDate}</h2>
        </span>
      </div>

    </div>
  </div>
{/if}
