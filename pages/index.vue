<template>
  <div>
    <div :class="$style.headerImage">
      <b-container :class="$style.dietBox">
        <b-row>
          <b-col :class="$style.foods" col="4" sm="2">
            <selectable-plan plan-name="F1" v-model="activePlan">
              <template #content>
                <div :class="$style.items">
                  <img
                    src="../assets/images/filter-diet/icon-sandwich.png"
                    :class="$style.image"
                  />
                  <p>Anything</p>
                </div>
              </template>
            </selectable-plan>
          </b-col>
          <b-col :class="$style.foods" col="4" sm="2">
            <selectable-plan plan-name="F2" v-model="activePlan">
              <template #content>
                <div :class="$style.items">
                  <img
                    src="../assets/images/filter-diet/icon-paleo-diet.png"
                    :class="$style.image"
                  />
                  <p>Paleo</p>
                </div>
              </template>
            </selectable-plan>
          </b-col>
          <b-col :class="$style.foods" col="4" sm="2">
            <selectable-plan plan-name="F3" v-model="activePlan">
              <template #content>
                <div :class="$style.items">
                  <img
                    src="../assets/images/filter-diet/icon-broccoli.png"
                    :class="$style.image"
                  />
                  <p>Vegetarian</p>
                </div>
              </template>
            </selectable-plan>
          </b-col>
          <b-col :class="$style.foods" col="4" sm="2">
            <selectable-plan plan-name="F4" v-model="activePlan">
              <template #content>
                <div :class="$style.items">
                  <img
                    src="../assets/images/filter-diet/icon-vegan-symbol.png"
                    :class="$style.image"
                  />
                  <p>Vegan</p>
                </div>
              </template>
            </selectable-plan>
          </b-col>
          <b-col :class="$style.foods" col="4" sm="2">
            <selectable-plan plan-name="F5" v-model="activePlan">
              <template #content>
                <div :class="$style.items">
                  <img
                    src="../assets/images/filter-diet/icon-no-gluten.png"
                    :class="$style.image"
                  />
                  <p>Ketogenic</p>
                </div>
              </template>
            </selectable-plan>
          </b-col>
          <b-col :class="$style.foods" col="4" sm="2">
            <selectable-plan plan-name="F6" v-model="activePlan">
              <template #content>
                <div :class="$style.items">
                  <img
                    src="../assets/images/filter-diet/icon-olive.png"
                    :class="$style.image"
                  />
                  <p>Mediterranean</p>
                </div>
              </template>
            </selectable-plan>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div style="height: 100vh;background-color:#ff4500 "></div>
    <div style="height: 100vh;background-color:#99ff21 "></div>
    <div style="height: 100vh;background-color:#fffb93 "></div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import selectablePlan from "~/components/selectablePlan/SelectablePlan";

export default {
  components: {
    Logo,
    selectablePlan
  },
  data: () => ({
    activePlan: ""
  })
};
</script>

<style module lang="scss">
.headerImage {
  height: 100vh;
  background-image: url("../assets/images/bgblur.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dietBox {
  background-color: #7700ff;
  border-radius: 10px;
  max-width: 750px;
  display: flex;
  flex-direction: column;
}

.foods {
  padding: 0px;
}

.items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image {
  width: 50px;
  height: 50px;
}
</style>
