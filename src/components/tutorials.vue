<template>
  <section id="Tutorials">
    <div class="tutorial">
      <div class="tutorial-content">
        <div class="tutorial-arrow top">
          <img src="..\assets\arrow-curved.svg" alt="Arrow icon" />
        </div>
        <p>Welcome to the tutorial!</p>
        <p>To use the button on this page, click the button below:</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TutorialComponent",
  data() {
    return {
        tutorialPosition: null,
      tutorials: [
        {
          name: "",
          text: "1 Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
          icon: "",
          class: "",
          level: 1,
          parent: "",
          next: "",
        },
        {
          name: "",
          text: "2 Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
          icon: "",
          class: "",
          level: 1,
          parent: "",
          next: "",
        },
        {
          name: "",
          text: "",
          icon: "",
          class: "",
          level: 1,
          parent: "",
          next: "",
        },
      ],
      isRendered:false
    };
  },
  mounted() {
    this.tutorialArrow = this.$el.querySelector(".tutorial-arrow");
    this.isRendered = true;
    // this.updateTutorialPosition();
  },
  updated() { //NOT WORKING
    this.isRendered = true;
  },
  methods: {
    updateTutorialPosition() {
      // Calculate position of observed element
      const observedElement = this.$el.querySelector('.element');
      // const rect = this.$refs.observedElement.getBoundingClientRect();
      const rect = observedElement.getBoundingClientRect();
      const x = rect.left + window.scrollX;
      const y = rect.top + window.scrollY;
      console.log("rect",rect);
      console.log("x",x);
      console.log("y",y);

      // Set position of tutorial arrow
      this.tutorialPosition.style.left = x + "px";
      this.tutorialPosition.style.top = y + "px";
    },
  },
};
</script>

<style scoped>
.tutorial {
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0,0,0,0.8); */
  right: 0; /* position tutorial on right side of screen */
  width: 30%; /* make tutorial smaller in width */
}
.tutorial-content {
  position: absolute;
  top: calc(100% - 55vh);
  right: 0;
  transform: translate(-50%, -50%);
  width: 200px; /* adjust width of content to fit in tutorial div */
  max-width: 200px; /* further restrict width of content */
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
}
.tutorial-arrow {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid white;
  position: absolute;
  /*transform: rotate(45deg);*/ /* rotate arrow 45 degrees */
}
.tutorial-arrow.bottom {
  bottom: 10px; /* position arrow at bottom of tutorial div */
  right: 10px; /* position arrow at right of tutorial div */
}
.tutorial-arrow.top {
  top: 10px; /* position arrow at bottom of tutorial div */
  right: 50%; /* position arrow at right of tutorial div */
  /* left:1; */
  transform: rotate(5deg) scale(1, -1);
}
</style>
