import { TriviaService } from './../services/TriviaService';

export const TriviaModule = {
  state: {
    trivias: [],
    triviaCategories: []
  },
  getters: {
    getTrivias(state) {
      return state.trivias;
    },
    getTriviaCategories(state) {
      return state.triviaCategories;
    }
  },
  mutations: {
    setTrivias(state, trivias) {
      state.trivias = trivias;
    },
    setTriviaCategories(state, triviaCategories) {
      state.triviaCategories = triviaCategories;
    }
  },
  actions: {
    // async-await example
    // you can always use promises as callbacks
    // just don't forget to remove async-await words
    async fetchTrivias(store, category) {
      const {data} = await TriviaService.getRandomTrivias(category);
      store.commit('setTrivias', data);
      // TriviaService.getRandomTrivias().then(({ data }) => {
      //   store.commit('setTrivias', data);
      // });
    },

    async fetchTriviaCategories(store) {
      const {data} = await TriviaService.getTriviasCategories();
      store.commit('setTriviaCategories', data);
    }
  }
}