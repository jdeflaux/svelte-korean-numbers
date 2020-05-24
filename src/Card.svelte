<script>
  export let revealKorean = true;
</script>

<style>
  .card {
    min-height: 200px;
  }

  .reveal-container .reveal {
    visibility: hidden;
  }

  .reveal-container:hover .reveal {
    visibility: visible;
  }
</style>

<div class="card reveal-container">
  <div class="card-body text-center">

    <h1>
      {#if revealKorean}
        <slot name="en" />
      {/if}
      {#if !revealKorean}
        <slot name="kr" />
        <slot name="reveal"></slot>
      {/if}
    </h1>

    <div class="row reveal">
      <span class="col">
        <h2>
        {#if revealKorean}
          <slot name="kr" />
        {/if}
        {#if !revealKorean}
          <slot name="en" />
        {/if}
        </h2>
      </span>
    </div>

    <div class="reveal">
      {#if revealKorean}
        <slot name="reveal"></slot>
      {/if}
    </div>

    <slot></slot>

  </div>
</div>
