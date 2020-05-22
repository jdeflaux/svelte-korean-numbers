<script>
  import randomInt from "./random/randomInt";
  import randomDate from "./random/randomDate";
  import { date, time } from "./stores";

  const onRandom = () => {
    const random = randomDate(new Date(2020, 0, 1), new Date(2020, 12, 31));
    date.set(random);
  };

  const onRandomTime = () => {
    const random = new Date();
    random.setHours(randomInt(24));
    random.setMinutes(randomInt(60));
    time.set(random);
  };
</script>

<div class="form-row mb-2 justify-content-start">
  <div class="col-2 align-self-end mb-2 mt-3">
    <button class="btn btn-primary" on:click={onRandom}>Random Date</button>
  </div>
  <div class="col align-self-end mb-2 mt-3">
    <button class="btn btn-primary" on:click={onRandomTime}>Random Time</button>
  </div>
</div>
