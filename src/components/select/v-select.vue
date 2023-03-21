<template>
  <div class="v-select" :class="{active: areOptionsVisible}">
    <div class="v-select__title"
      @click="toggleActive">
      {{selected.name}}
    </div>
    <div class="v-select__list"

      v-if="areOptionsVisible && !isDisable">
      <div class="v-select__item"
        v-for="( option, index ) in options" 
        :key="option.value"
        @click="selectItem(index)">
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "v-select",
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    selected: {
      type: Object,
      default() {
        return {}
      }
    },
    isDisable: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      areOptionsVisible: false
    }
  },
  methods: {
    toggleActive() {
      this.areOptionsVisible = !this.areOptionsVisible
    },
    selectItem(index) {
      this.$emit('selectOption', index)
    },
    hideSelect(event) {
      if(!event.target.closest('.v-select__title')) {
        this.areOptionsVisible = false
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.hideSelect)
  }
}

</script>

<style lang="scss">
.v-select {
  padding: 20px 0;
  display: inline-block;
  width: 250px;
  position: relative;
  z-index: 2;

  &__title,
  &__item {
    padding: 10px;
    text-align: left;
    cursor: pointer;
    width: 100%;
  }

  &__title {
    position: relative;
    border-radius: 5px;
    background: #dddcdc;
    border: 1px solid #cdcdcd;

    &::after,
    &::before {
      content: '';
      position: absolute;
      height: 2px;
      width: 10px;
      background: #000;
      top: 17px;
      transition: all .2s ease-in-out;
    }

    &::before {
      right: 15px;
      transform: rotate(45deg);
    }

    &::after {
      right: 8px;
      transform: rotate(-45deg);
    }
  }

  &__list {
    width: 97%;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
  }

  &__item {
    border-left: 1px solid #cdcdcd;
    border-right: 1px solid #cdcdcd;
    border-top: 1px solid #cdcdcd;

    &:last-child {
      border-bottom: 1px solid #cdcdcd;
    }

    &:hover {
      background: #f3f2f2;
    }
  }

  &.active {
    .v-select__title {
      &::before {
        transform: rotate(-45deg);
      }

      &::after {
        transform: rotate(45deg);
      }
    }
  }
}

</style>