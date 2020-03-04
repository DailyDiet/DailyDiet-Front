<template>
  <div>
    <div :class="$style.headerImage">
      <QuestionForm />
    </div>
    <div style="height: 100vh;background-color:#ff4500 "></div>
    <div style="height: 100vh;background-color:#99ff21 "></div>
    <div style="height: 100vh;background-color:#fffb93 "></div>
  </div>
</template>

<script>
import QuestionForm from "../components/question_form/QuestionForm";
export default {
  components: { QuestionForm },
  data: () => ({})
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
</style>
