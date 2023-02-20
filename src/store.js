import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  showMenu: false,
  restaurants: "",
  restaurant: null,
  loading: true,
  types: [],
  selectedTypes: [],
  queryString: "",
  base_api_url: "http://127.0.0.1:8000/",
  error: null,
  products: [],
  queryString: '',
  results: [],
  orderError: null,
  failed: false,
  callApi() {
    this.queryString = this.selectedTypes.join("+");

    if (this.queryString.length > 0) {
      const url = this.base_api_url + "api/restaurants/types/" + this.queryString;
      axios
        .get(url)
        .then((response) => {
          if (response.data.success) {
            this.restaurants = response.data.results;
            this.results = response.data.results;
            this.loading = false;
          } else {
            this.restaurants = null;
          }

        })
        .catch((error) => {
          console.error(error);
          this.error = error.message;
          this.loading = false;
        });
      this.queryString = "";
      this.failed = false
    } else {
      this.failed = true
    }

  },
  showOffcanvasMenu() {
    this.showMenu = !this.showMenu;
  },
  getRestaurants(call) {
    axios
      .get(call)
      .then((response) => {
        this.restaurants = response.data.results.data;
        this.results = response.data.results;
        this.loading = false;
      })
      .catch((error) => {
        console.error(error);
        this.error = error.message;
        this.loading = false;
      });
  },
  getTypes(call) {
    axios
      .get(call)
      .then((response) => {
        this.types = response.data.results;
        this.loading = false;
      })
      .catch((error) => {
        console.error(error);
        this.error = error.message;
        this.loading = false;
      });
  },
  getRestaurant(call) {
    axios
      .get(call)
      .then((response) => {
        if (response.data.success) {
          this.restaurant = response.data.results;
          this.loading = false;
        } else {
          this.$router.replace({ name: "not-found" });
        }
      })
      .catch((error) => {
      });
  },
  getImagePath(path) {
    if (path) {
      return this.base_api_url + "storage/" + path;
    }
    return "src/assets/no-image-available.png";
  }
});
