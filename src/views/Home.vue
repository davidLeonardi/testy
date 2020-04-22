<template>
  <div class="home">
    <WelcomeBack name="Jamie" />
    <LocationSearch />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import WelcomeBack from "@/components/home/WelcomeBack.vue";
import LocationSearch from "@/components/home/LocationSearch.vue";

@Component({
  components: {
    WelcomeBack,
    LocationSearch
  }
})
export default class Home extends Vue {
  @Prop() private name!: string;
}
</script>
