<template>
    <section  id="arrowComponenet">


        <!-- <svg v-if="showArrow" viewBox="0 0 10 10"
            :style="{ position: 'absolute', top: '0', left: '0', width: '100vw', height: '100vh', pointerEvents: 'none' }">
            <path :d="arrowPath" fill="none" stroke="black" />
        </svg> -->
        
        <!-- Your other components and elements -->
        <!-- <div>
            <svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;">
      <defs>
        <marker id="arrowhead" viewBox="0 0 10 10" refX="5" refY="5" 
        markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 Z" fill="black"></path>
    </marker>
</defs>
<path :d="arrowPath" fill="none" stroke="black" stroke-width="2" marker-end="url(#arrowhead)"></path>
</svg>
</div> -->


    <svg width="100%" height="100%" style="position: absolute; top: 0; left: 0; pointer-events: none;">
        <defs>
            <marker id="arrowhead" viewBox="0 0 10 10" refX="5" refY="5" 
            markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 Z" fill="black"></path>
            </marker>
    </defs>
    <path :d="arrowPath" fill="none" stroke="black" stroke-width="2" marker-end="url(#arrowhead)"></path>
    </svg>
</section>
</template>
  
<script>
export default {
    name: "ArrowComponent",
    props: ['source', 'target'],
    data() {
        return {
            showArrow: false,
            arrowPath: 'M1874.5078125,239.296875 L1273.51171875,273.9609375'
        };
    },
    watch: {
        source: 'updateArrow',
        target: 'updateArrow'
    },
    mounted() {
        // Add event listeners for window resize and scroll
        window.addEventListener('resize', this.updateArrow);
        window.addEventListener('scroll', this.updateArrow);
        this.updateArrow();
    },
    beforeDestroy() {
        // Clean up event listeners
        window.removeEventListener('resize', this.updateArrow);
        window.removeEventListener('scroll', this.updateArrow);
    },
    methods: {
        updateArrow() {
            if (!this.source || !this.target) return;
            console.log(this.source);
            console.log(this.target);
            let box = this.source[0].getBoundingClientRect();
            let target = this.target.getBoundingClientRect();

            // Calculate SVG path based on positions
            // This example just draws a straight line, but you can add curves, arrowheads, etc.
            // this.arrowPath = `M${box.left + box.width / 2},${box.top + box.height} L${target.left + target.width / 2},${target.top}`;

            let startX = box.right;
            let startY = box.top + box.height / 2;

            // End point: center-left of the target (violet box)
            let endX = target.left;
            let endY = target.top + target.height / 2;
            
            // SVG path
            this.arrowPath = `M${startX},${startY} L${endX},${endY}`;

            console.log("this.arrowPath", this.arrowPath)
        }
    }
}
</script>

<style scoped>
svg {
    /* position: absolute;
    top: -206px;
    right: -353px;
    z-index: -1;
    width: 97vw;
    height: 100vh; */
    position: absolute;
    /* top: -206px; */
    /* right: -353px; */
    z-index: 1;
    width: 97vw;
    height: 90vh;
}
</style>
  