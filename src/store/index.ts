import Vue from "vue";
import Vuex from "vuex";
import WeatherService from '../services/WeatherService';
import FlightService from '../services/FlightService';
import moment from 'moment';

import { Office, Route } from '../services/FlightTypes'

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    isLoading: true,
    departureCity: '',
    cityData: null,
    offices: []
  },
  mutations: {
    SET_LOADING(state) {
      state.isLoading = true;//state.isLoading;
    },
    SET_DEPARTURE_CITY(state, departureCity) {
      state.departureCity = departureCity;
    },
    SET_CITY_DATA(state, data) {
      state.cityData = data;
    },
    SET_OFFICES_DATA(state, data) {
      state.offices = data;
    }
  },
  actions: {
    setDepartureCity(context, departureCity) {
      context.commit('SET_DEPARTURE_CITY', departureCity);
    },

    setOfficeLocations(context, officeLocations) {
      context.commit('SET_OFFICES_DATA', officeLocations);
    },

    loadFlights(context) {
      context.commit('SET_LOADING');

      const routes: Route[] = context.state.offices.map((item: Office) => {
        return {
          origin: context.state.departureCity,
          destination: item.name,
          dateFrom: moment().format('DD,MM,YYY'),
          dateTo: moment().add(3, "days").format('DD,MM,YYY')
        }
      })

      FlightService.getCheapestFlightForLocations(routes)
      context.commit('SET_LOADING');
    }
  },
  modules: {}
});
