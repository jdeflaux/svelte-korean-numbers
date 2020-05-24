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
      <slot name="en" />
    </h1>

    <div class="row reveal">
      <span class="col">
        <h2>
          <slot name="kr" />
        </h2>
      </span>
    </div>

    <div class="reveal">
      <slot name="reveal"></slot>
    </div>

    <slot></slot>

  </div>
</div>
