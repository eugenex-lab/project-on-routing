<template>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :image="user.image" :jerseyNumber="user.jerseyNumber" :role="user.role"
    :app="user.app" :goals="user.goals" :nationality="user.nationality"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin-left: -20px;
  max-width: 200rem;
  max-height: 30rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  gap: 10px;
}

</style>