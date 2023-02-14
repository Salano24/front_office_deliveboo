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
  callApi() {
    this.queryString = this.selectedTypes.join("+");
    const url = this.base_api_url + "api/restaurants/types/" + this.queryString;
    axios
      .get(url)
      .then((response) => {
console.log(response.data);
         if (response.data.success) {
  this.restaurants = response.data.results;
        console.log(this.restaurants);
        this.loading = false;
         }else{ 
            this.restaurants = null;
         }
        
            
         
       /*  console.log(response.data.results);
        this.restaurants = null;
        this.loading = false; */
      
      })
      .catch((error) => {
        console.error(error);
        this.error = error.message;
        this.loading = false;
      });

    console.log(
      this.base_api_url + "api/restaurants/types/" + this.queryString
    );
    this.queryString = "";
  },
  showOffcanvasMenu() {
    this.showMenu = !this.showMenu;
  },
  getRestaurants(call) {
    axios
      .get(call)
      .then((response) => {
        this.restaurants = response.data.results.data;
        console.log(this.restaurants);
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
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
});
