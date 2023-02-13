import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  showMenu: false,
  restaurants: '',
  restaurant: '',
  loading: true,
  base_api_url: 'http://127.0.0.1:8000/',
  showOffcanvasMenu() {
    this.showMenu = !this.showMenu;
  },
  getRestaurants(call) {
    axios.get(call)
      .then(response => {
        this.restaurants = response.data.results;
        console.log(this.restaurants)
        this.loading = false
      })
      .catch(error => {
        console.error(error)
        this.error = error.message
        this.loading = false
      })
  },
  getRestaurant(call) {
    axios.get(call)
      .then(response => {
        if (response.data.success) {
          this.restaurant = response.data.results
          this.loading = false
        } else {
          this.$router.replace({ name: 'not-found' })
        }
        console.log(response);
      }).catch(error => {
        console.log(error)
      })

  },
});
