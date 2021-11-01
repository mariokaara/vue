import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productList: [
      {
        id: 1,
        author: "Charlotte Bronte",
        book: "Jane Eyre",
        goodreads: "4.1/5",
        price: 20,
      },
      {
        id: 2,
        author: "Margaret Mitchell",
        book: "Gone with the Wind",
        goodreads: "4.3/5",
        price: 22,
      },
      {
        id: 3,
        author: "Anthony Burgess",
        book: "A Clockwork Orange",
        goodreads: "4/5",
        price: 13,
      },
      {
        id: 4,
        author: "Fyodor Dostoevsky",
        book: "Crime and Punishment",
        goodreads: "4.2/5",
        price: 18,
      },
    ],
  },
  getters: {
    productListsale: (state) => {
      var productListsale = state.productList.map((product) => {
        return {
          author: "** " + product.author + " **",
          price: product.price / 2,
          book: product.book,
          goodreads: product.goodreads,
        };
      });
      return productListsale;
    },
  },
  mutations: {
    IncreasePrice: (state) => {
      state.productList.forEach((product) => {
        product.price += 1;
      });
    },
    DecreasePrice: (state) => {
      state.productList.forEach((product) => {
        product.price -= 1;
      });
    },
  },
  actions: {
    IncreasePriceAct: act => {
      setTimeout(function() {
      act.commit("IncreasePrice")
      }, 1000)
      },
      DecreasePriceAct: act => {
      setTimeout(function() {
      act.commit("DecreasePrice")
      }, 1000)
      }
     
  },
  modules: {},
  methods: {
    IncreasePrice: function () {
      this.$store.dispatch("IncreasePriceAct");
    },
    DecreasePrice() {
      this.$store.dispatch("DecreasePriceAct");
    },
  },
});
