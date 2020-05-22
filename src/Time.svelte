<script>
  import dayjs from "dayjs";
  import { time } from "./stores";
  import { NUMBERS } from "./constants";

  let englishTime;
  let koreanTime;

  time.subscribe(newDate => {
    englishTime = dayjs(newDate).format("HH:mm");

    const hours = newDate ? NUMBERS[newDate.getHours()].native.replace(' ', '') + "시" : "";
    let minutes = newDate ? NUMBERS[newDate.getMinutes()].sino.replace(' ', '') + "분" : "";

    if(newDate.getMinutes() === 30) {
      minutes = '반'
    }

    koreanTime = `${hours} ${minutes}`;
  });
</script>

{#if $time}
  <div class="card reveal-container">
    <div class="card-body text-center">
      <h1>{englishTime}</h1>

      <div class="row">
        <span class="col">
          <h2 class="reveal">{koreanTime}</h2>
        </span>
      </div>

    </div>
  </div>
{/if}
