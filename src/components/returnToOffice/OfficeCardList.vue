<template>
  <div class="OfficeCardList">
    <OfficeLocationCard :v-for="office in offices"></OfficeLocationCard>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import OfficeLocationCard from "./OfficeLocationCard.vue";

@Component({
  components: {
    OfficeLocationCard
  }
})
export default class OfficeCardList extends Vue {
  @Prop() private offices!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
