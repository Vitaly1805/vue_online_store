<template>
  <div class="v-checkbox">
    <input class="v-checkbox__input" type="checkbox" :name="name" v-model="isTrueFl" @change="sendFl" :value="value" :id="id">
    <label class="v-checkbox__checkbox" :for="id"></label>
    <label class="v-checkbox__label" :for="id">{{ label }}</label>
  </div>
</template>
<script>

export default {
    name: 'v-checkbox',
    props: {
      value: {
        type: [String, Number],
        default() {
          return ''
        }
      },
      name: {
        type: String,
        default() {
          return ''
        }
      },
      id: {
        type: [String, Number],
        default() {
          return ''
        }
      },
      label: {
        type: [String, Number],
        default() {
          return ''
        }
      },
      isTrue: {
        type: Boolean,
        default() {
          return false
        }
      }
    },
    data() {
      return {
        isTrueFl: false
      }
    },
    methods: {
      sendFl() {
        this.$emit('SendFl', {fl: this.isTrueFl, value: this.value})
      }
    },
    created() {
      this.isTrueFl = this.isTrue
    }
}
</script>

<style lang="scss">
.v-checkbox {
  display: flex;
  align-items: center;

  &__input {  
    display: none;
  }

  &__checkbox {
    width: 15px;
    display: inline-block;
    height: 15px;
    background:#cdcdcd;
    border-radius: 4px;
    border: 1px solid #999999;
    cursor: pointer;
    position: relative;
  }

  &__input:checked + &__checkbox {
    &::after,
    &::before {
      content: '';
      background: #000;
      height: 2px;
      position: absolute;
    }

    &::after {
      width: 6px;
      transform: rotate(45deg);
      top: 8px;
      left: 0;
    }

    &::before {
      width: 12px;
      transform: rotate(-45deg);
      top: 6px;
      left: 2px;
    }
  }

  &__label {
    cursor: pointer;
    font-size: 14px;
    margin: 0 0 0 8px;
  }
}
</style>