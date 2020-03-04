<template>
  <div
    :class="{
      [$style.box]: true,
      [$style.selectedBox]: this.activePlan === this.planName
    }"
    @click="updateActivePlan"
    @keydown.space="updateActivePlan"
  >
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  model: {
    prop: "activePlan",
    event: "onUpdatePlan"
  },
  props: {
    planName: {
      type: String
    },
    activePlan: {
      type: String
    }
  },
  methods: {
    updateActivePlan() {
      this.$emit("onUpdatePlan", this.planName);
    }
  }
};
</script>

<style lang="scss" module>
.box {
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.selectedBox {
  background-color: #3b8070;
}
</style>
