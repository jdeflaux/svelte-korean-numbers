<script>
  import dayjs from "dayjs";
  import Card from "./Card.svelte";
  import { time } from "./stores";
  import { HOURS_KR, NUMBERS } from "./constants";
  import randomInt from "./random/randomInt";

  let englishTime;
  let koreanTime;

  time.subscribe(newDate => {
    englishTime = dayjs(newDate).format("hh:mm a");

    const hours = newDate ? HOURS_KR[newDate.getHours() % 12] : "";
    let minutes = newDate
      ? NUMBERS[newDate.getMinutes()].sino.replace(" ", "") + "분"
      : "";

    if (newDate && newDate.getMinutes() === 30) {
      minutes = "반";
    }

    const ampm = newDate && newDate.getHours(0) >= 12 ? "오후" : "오전";

    koreanTime = `${ampm} ${hours} ${minutes}`;
  });
</script>

{#if $time}
  <Card>
    <span slot="en">{englishTime}</span>
    <span slot="kr">{koreanTime}</span>
  </Card>
{/if}
