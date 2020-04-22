<template>
  <ais-instant-search :search-client="searchClient" index-name="demo-geosearch">
    <ais-search-box />
    <ais-hits>
      <div slot="item" slot-scope="{ item }">
        <router-link :to="{ path: `return-from/${item.iata_code}` }">{{
          item.name
        }}</router-link>
      </div>
    </ais-hits>
  </ais-instant-search>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/algolia-min.css";

@Component
export default class LocationSearch extends Vue {
  data() {
    return {
      searchClient: algoliasearch(
        "latency",
        "6be0576ff61c053d5f9a3225e2a90f76"
      ),
    };
  }
}
</script>
