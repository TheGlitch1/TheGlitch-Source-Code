<template>
  <section id="onBoarding">
    <div v-if="showOnboarding" class="onboarding-container">
      <div v-for="(tutorial, index) in currentTutorial" :key="index" class="tooltip-custom" :class="tutorial.class" ref="tutorialBox">
        {{ tutorial.text }}
        <div  class="buttons">
          <button @click="prevStep">Back</button>
          <button @click="nextStep">Next</button>
        </div>
      </div>
      <ArrowComponent v-if="sourceComputed" :source="source" :target="targetElement" />
    </div>
  </section>
</template>

<script>
  import ArrowComponent from './onBoarding/ArrowComponent.vue';

export default {
  components: {
    ArrowComponent
  },
  data() {
    return {
      tutorials: [
        {
          name: "Step 1",
          text: "1 Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 1",
          icon: "",
          class: "",
          level: 1,
          parent: "",
          action:"",
          element: "#setting",
        },
        {
          name: "Step 2",
          text: "2 Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 2",
          icon: "",
          class: "",
          level: 2,
          parent: "",
          action:"",
          element: ".switch-toggle-theme",
        },
        {
          name: "Step 3",
          text: "2 Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 3",
          icon: "",
          class: "",
          level: 3,
          parent: "",
          action:"",
          element: ".switch-resume",
        },
      ],
      currentStep: 0,
      showOnboarding: true,
      source: '',
      targetElement: ''
    };
  },
  created() {
    this.initializeOnboarding();
  },
  mounted() {
    this.startTutorial();
  },
  computed: {
    currentTutorial() {
      console.log(this.currentStep);
      // return this.tutorials[this.currentStep];
      return this.tutorials.filter((tutorial,key) => key === this.currentStep);
    },
    sourceComputed(){
      return this.source ? true : false
    }
  },
  methods: {
    initializeOnboarding() {
      let onboardingState = localStorage.getItem('onboardingState');
      if (!onboardingState || onboardingState === 'remindLater') {
        this.showOnboarding = true;
      }
    },
    skipOnboarding() {
      this.showOnboarding = false;
      localStorage.setItem('onboardingState', 'remindLater');
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
        this.targetElement =  document.querySelector(this.tutorials[this.currentStep].element)
      }
    },
    nextStep() {
      if (this.currentStep < this.tutorials.length -1) {
        this.currentStep++;
        this.targetElement =  document.querySelector(this.tutorials[this.currentStep].element);
      } else {
        this.showOnboarding = false;
        this.source='';
        // TODO: Save state to localStorage if needed.
      }
    },
    finishOnboarding() {
      this.showOnboarding = false;
      localStorage.setItem('onboardingState', 'finished');
    },
    startTutorial() {
      // Example of how to initiate the tutorial and set the target element
      this.targetElement = document.querySelector(this.tutorials[0].element); // replace with your target element selector
      this.tutorialBoxElement();
    },
    tutorialBoxElement() {
      return this.source = this.$refs.tutorialBox;
    }
  }
}
</script>

<style scoped>

#onBoarding{
  position: absolute;
  
}
.onboarding-container {
    /* position: fixed;
    width: 500px;
    top: 25vh;
    right: 371px;
  z-index: 9999; */
  position: fixed;
    width: 500px;
    top: 0px;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 97;
}

.tooltip-custom {
  /* background-color: red;
  position: absolute;
  padding: 10px; 
  width: 500px; */
  background-color: red;
    position: absolute;
    padding: 10px;
    width: 500px;
    top: 20%;
    left: 735px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px; /* Some space between the text and buttons */
}

/* Specific classes for each tooltip-custom to position them correctly */
.some-specific-class {
  top: 10px;
  right: 50px;
}

/* Add more classes for other tooltip-customs as needed */
</style>
