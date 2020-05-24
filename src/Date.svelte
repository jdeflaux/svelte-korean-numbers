<script>
  import dayjs from "dayjs";
  import Card from "./Card.svelte";
  import { date } from "./stores";
  import { NUMBERS, MONTH_KR, WEEKDAY_KR } from "./constants";

  let englishDate;
  let koreanDate;

  date.subscribe(newDate => {
    englishDate = dayjs(newDate).format("ddd MMM D");

    const monthString = newDate ? MONTH_KR[newDate.getMonth()] : "";
    const dayString = newDate ? NUMBERS[newDate.getDate()].sino + "일" : "";
    const weekdayString = newDate ? WEEKDAY_KR[newDate.getDay()] : "";

    koreanDate = `${weekdayString} ${monthString} ${dayString}`;
  });
</script>

{#if $date}
  <Card>
    <span slot="en">{englishDate}</span>
    <span slot="kr">{koreanDate}</span>
  </Card>
{/if}
