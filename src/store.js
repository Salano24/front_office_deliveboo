import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  showMenu: false,
  showOffcanvasMenu() {
    this.showMenu = !this.showMenu;
  },
});
