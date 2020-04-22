<template>
  <div class="return">
    <OfficeCardList v-bind="offices"></OfficeCardList>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import OfficeCardList from "../components/returnToOffice/OfficeCardList.vue";
import Store from "../store";

// The destionation offices are defined here, but later on they could be retrieved from any kind of Calendar API or so
const offices = {
  locations: [
    {
      name: "Amsterdam",
      code: "3509299",
    },
    {
      name: "Madrid",
      code: "308526",
    },
    {
      name: "Budapest",
      code: "187423",
    },
  ],
};

@Component({
  components: {
    OfficeCardList,
  },
})
export default class ReturnToOffice extends Vue {
  @Prop() private originAirportCode!: string;
}
</script>
