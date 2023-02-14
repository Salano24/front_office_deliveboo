import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  showMenu: false,
  restaurants: '',
  restaurant: '',
  loading: true,
  types: [],
  selectedTypes: [],
  products: [],
  productsOrder: [],
  queryString: '',
  base_api_url: 'http://127.0.0.1:8000/',
  callApi() {
    this.queryString = this.selectedTypes.join('+');
    this.getRestaurants(this.base_api_url + 'api/restaurants/types/' + this.queryString)
    console.log(this.base_api_url + 'api/restaurants/types/' + this.queryString);
    this.queryString = '';
  },
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
  }, getTypes(call) {
    axios.get(call)
      .then(response => {
        this.types = response.data.results;
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
  getImagePath(path) {
    if (path) {
      return this.base_api_url + "storage/" + path;
    }
    return "/img/no-image.png";
  }
});
