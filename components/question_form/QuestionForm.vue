<template>
  <b-container :class="$style.dietBox">
    <b-row>
      <b-col
        v-for="item in filterOptions"
        :key="`diet_category_${item.id}`"
        :class="$style.foods"
        col="4"
        sm="2"
      >
        <selectable-plan :plan-name="item.title" v-model="activePlan">
          <template #content>
            <div :class="$style.items">
              <img
                :src="
                  require(`../../assets/images/filter-diet/${item.imageUrl}.png`)
                "
                :class="$style.image"
                :alt="item.title"
              />
              <span style="font-size: 13px">{{ item.title }}</span>
            </div>
          </template>
        </selectable-plan>
      </b-col>
    </b-row>
    <b-button v-b-modal.question_form_modal>Launch demo modal</b-button>
    <QuestionFormModal />
  </b-container>
</template>

<script>
import selectablePlan from "~/components/selectablePlan/SelectablePlan";
import QuestionFormModal from "../QuestionFormModal";

export default {
  name: "QuestionForm",
  components: {
    selectablePlan,
    QuestionFormModal
  },
  data: () => ({
    filterOptions: [
      {
        id: 1,
        title: "Anything",
        imageUrl: "icon-sandwich"
      },
      {
        id: 2,
        title: "Paleo",
        imageUrl: "icon-paleo-diet"
      },
      {
        id: 3,
        title: "Vegetarian",
        imageUrl: "icon-broccoli"
      },
      {
        id: 4,
        title: "Vegan",
        imageUrl: "icon-vegan-symbol"
      },
      {
        id: 5,
        title: "Ketogenic",
        imageUrl: "icon-no-gluten"
      },
      {
        id: 6,
        title: "Mediterranean",
        imageUrl: "icon-olive"
      }
    ],
    activePlan: ""
  })
};
</script>

<style module lang="scss">
.dietBox {
  background-color: #ffffff;
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
