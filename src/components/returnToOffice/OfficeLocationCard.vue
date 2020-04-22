<template>
  <div class="officeCard">
    <h1>{{ cityName }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import * as emojiWeather from "emojiweather";
import { format } from "date-fns";

@Component({
  components: {}
})
export default class OfficeLocationCard extends Vue {
  @Prop() private cityName!: string;
  @Prop() private weatherString!: string;
  @Prop() private weatherEmoji!: string;
  @Prop() private flightPrice!: string;
  @Prop() private flightDate!: string;
  @Prop() private flightAirline!: string;
  @Prop() private flightCode!: string;
  @Prop() private flightDuration!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
