import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export interface State {
  todos: string[],
}

export default new Vuex.Store<State>({
  state: {
    todos: []
  },
  mutations: {
    SET_TODOS(state, todos) { state.todos = todos },

    ADD_TODO(state, todo) {
      state.todos.unshift(todo)
    },

    REMOVE_TODO(state, todo) {
      state.todos = state.todos.filter(t => t !== todo)
    },

    // EDIT_TODO(state, todo) {
    //   state.todos.find((todo, index) => )

    // }
  },
  actions: {
    async fetchTodos({ commit }) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

      commit('SET_TODOS', response.data)
      console.log(response);
    },

    async addTodo({ commit }, title) {
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false });

      commit('ADD_TODO', response.data)
    },

    removeTodo({ commit }, todo: string) {
      commit('REMOVE_TODO', todo)
    },

    // editTodo({ commit }, todo: string) {
    //   commit('EDIT_TODO', todo)
    // }

  },
})
