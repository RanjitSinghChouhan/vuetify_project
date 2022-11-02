<template>
  <div>
    <br />
    <br />
    <form @submit.prevent="onSubmit" class="todo-input">
      <input type="text" v-model="title" />
      <input type="submit" value="Add Todo" />
    </form>
    <br />
    <br />
    <!-- <button @click="fetchTodos">Fetch Here</button> -->
    <!-- <div class="todos">
      <div v-for="todo in todos" :key="todo.id" :todo="todo">
        {{ todo.title }}
      </div>
    </div> -->
    <v-layout row wrap>
      <v-flex
        xs12
        sm6
        md4
        lg3
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
      >
        <v-card class="mx-auto ma6" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">{{ todo.id }}</div>
              <v-list-item-title class="text-h5 mb-1">
                {{ todo.completed }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ todo.title }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
              color="grey"
            ></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn outlined rounded text class="red" @click="removeTodo(todo)">
              Delete
            </v-btn>
            <v-btn outlined rounded text class="green" @click="editTodo(todo)">
              Edit Todo
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import store from "../store";

export default Vue.extend({
  name: "Fetch",

  data: () => ({
    title: String[""],
  }),

  methods: {
    addTodo(title: string): void {
      store.dispatch("addTodo", title);
      this.title = "";
    },
    onSubmit() {
      this.addTodo(this.title);
    },

    removeTodo(todo: string): void {
      store.dispatch("removeTodo", todo);
    },

    editTodo(todo: string) {
      store.dispatch("editTodo", todo);
    },
  },

  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },

  mounted() {
    this.$store.dispatch("fetchTodos");
  },

  created() {
    this.fetchTodos;
  },
});
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>