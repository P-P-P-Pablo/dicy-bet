<template>
  <div class="item">
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>

      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.item {
  margin-top: 2rem;
  display: flex;
  border: 2px solid var(--color-border);
  border-radius: 20px;
  transition: all 150ms linear;
  white-space: pre-wrap;
  text-decoration: none !important;
  text-transform: capitalize;

  padding: 0.4rem 0 1rem 80px;
  box-shadow: 2px 5px 10px #353866;

  &:hover {
    transition: all 150ms linear;

    opacity: 0.75;
  }

  &:active {
    transition: all 150ms linear;
    opacity: 0.65;
  }

  &:focus {
    outline: 1px dotted #959595;
    outline-offset: -2px;
  }
}

.details {
  flex: 1;
  margin-left: 1rem;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
</style>
