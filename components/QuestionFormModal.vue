<template>
  <b-modal id="question_form_modal" title="Nutrition calculator" size="lg">
    <b-form>
      <b-form-group
        label-cols-sm="4"
        label-cols-lg="4"
        label="I want to"
        label-for="input-1"
      >
        <b-form-radio-group
          id="input-1"
          class="w-100"
          v-model="selected"
          :options="options"
          button-variant="outline-primary"
          buttons
        />
      </b-form-group>
      <b-form-group
        label-cols-sm="4"
        label-cols-lg="4"
        label="Preferred units"
        label-for="input-2"
      >
        <b-form-radio-group
          id="input-2"
          class="w-100"
          v-model="selected2"
          :options="options2"
          button-variant="outline-primary"
          buttons
        />
      </b-form-group>
      <b-form-group
        label-cols-sm="4"
        label-cols-lg="4"
        label="I am"
        label-for="input-3"
      >
        <b-form-radio-group
          id="input-3"
          class="w-100"
          v-model="selected3"
          :options="options3"
          button-variant="outline-primary"
          buttons
        />
      </b-form-group>
      <b-form-group
        label-cols-sm="4"
        label-cols-lg="4"
        label="Height"
        label-for="input-4"
      >
        <b-row>
          <b-col cols="6">
            <b-input-group>
              <template #append>
                <b-input-group-text :class="$style.unitLabel">
                  <strong>ft</strong>
                </b-input-group-text>
              </template>
              <b-form-input :class="$style.pairBtn" />
            </b-input-group>
          </b-col>
          <b-col cols="6">
            <b-input-group>
              <template #append>
                <b-input-group-text :class="$style.unitLabel">
                  <strong>in</strong>
                </b-input-group-text>
              </template>
              <b-form-input :class="$style.pairBtn" />
            </b-input-group>
          </b-col>
        </b-row>
      </b-form-group>
      <b-form-group
        label-cols-sm="4"
        label-cols-lg="4"
        label="Weight"
        label-for="input-4"
      >
        <b-row>
          <b-col lg="6" sm="12">
            <b-input-group>
              <template #append>
                <b-input-group-text :class="$style.unitLabel">
                  <strong>lbs</strong>
                </b-input-group-text>
              </template>
              <b-form-input :class="$style.pairBtn" />
            </b-input-group>
          </b-col>
        </b-row>
      </b-form-group>
      <b-form-group
        label-cols-sm="4"
        label-cols-lg="4"
        label="Age"
        label-for="input-4"
      >
        <b-row>
          <b-col lg="6" sm="12">
            <b-input-group>
              <template #append>
                <b-input-group-text :class="$style.unitLabel">
                  <strong>years</strong>
                </b-input-group-text>
              </template>
              <b-form-input :class="$style.pairBtn" />
            </b-input-group>
          </b-col>
        </b-row>
      </b-form-group>
      <b-form-group
        label-cols-sm="4"
        label-cols-lg="4"
        label="Bodyfat"
        label-for="input-4"
      >
        <b-form-radio-group
          id="input-4"
          class="w-100"
          v-model="selected4"
          :options="options4"
          button-variant="outline-primary"
          buttons
        />
      </b-form-group>
      <b-form-group
        label-cols-sm="4"
        label-cols-lg="4"
        label="Activity level"
        label-for="input-4"
      >
        <b-form-select v-model="selected5" :options="options5"></b-form-select>
      </b-form-group>
      <b-form-group
        label-cols-sm="4"
        label-cols-lg="4"
        label="Set a weight goal?"
        label-for="input-4"
      >
        <b-form-radio-group
          id="input-4"
          class="w-100"
          v-model="selected6"
          :options="options6"
          button-variant="outline-primary"
          buttons
        />
      </b-form-group>
      <div class="w-100 d-flex justify-content-center">
        <b-button type="submit" variant="success" class="mt-4 w-50">
          <i class="fas fa-calculator"></i> Calculate
        </b-button>
      </div>
    </b-form>
    <template v-slot:modal-footer>
      <div class="w-100">
        <b-button
          variant="outline-primary"
          size="sm"
          class="float-right"
          @click="$bvModal.hide('question_form_modal')"
        >
          Close
        </b-button>
      </div>
    </template>
  </b-modal>
</template>
<script>
export default {
  data: () => ({
    selected: "radio1",
    options: [
      { text: "Lose weight", value: "radio1" },
      { text: "Maintain", value: "radio2" },
      { text: "Build muscle", value: "radio3" }
    ],
    selected2: "radio1",
    options2: [
      { text: "U.S. Standard", value: "radio1" },
      { text: "Metric", value: "radio2" }
    ],
    selected3: "radio1",
    options3: [
      { text: "Male", value: "radio1" },
      { text: "Female", value: "radio2" }
    ],
    selected4: "radio1",
    options4: [
      { text: "Low", value: "radio1" },
      { text: "Medium", value: "radio2" },
      { text: "High", value: "radio3" }
    ],
    selected5: "radio1",
    options5: [
      { text: "Sedentary", value: "radio1" },
      { text: "Lightly Active", value: "radio2" },
      { text: "Moderately Active", value: "radio3" },
      { text: "Very Active", value: "radio3" },
      { text: "Extremely Active", value: "radio3" }
    ],
    selected6: "radio1",
    options6: [
      { text: "No thanks", value: "radio1" },
      { text: "Yeah let's do it!", value: "radio2" }
    ]
  })
};
</script>
<style module lang="scss">
.pairBtn {
  border-right: 0px;
}

.unitLabel {
  background-color: transparent;
  border-left: 0px;
}
</style>
