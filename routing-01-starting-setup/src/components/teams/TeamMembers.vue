<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
          v-for="member in members"
          :key="member.id"
          :name="member.fullName"
          :role="member.role"
          :image="member.image"
          :jerseyNumber="member.jerseyNumber"
          :app="member.app" :goals="member.goals" :nationality="member.nationality"
      ></user-item>
    </ul>
    <router-link to="/teams/t2"> Go to Team 3</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';


export default {
  inject: ['users','teams'],
  props: ['teamId'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods: {
    loadTeamMemebers(teamId) {
      // const teamId = this.$route.params.teamId;
      // const teamId = route.params.teamId;

      const  selectedTeam = this.teams.find(team => team.id === teamId);
      const members = selectedTeam.members;
      const selectedMembers = [];
      for (const member of members) {
        const selectedUser = this.users.find(user => user.id === member);
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    }
  },

  created() {
    this.loadTeamMemebers(this.teamId );
  },
  watch: {
    teamId(newId){
      this.loadTeamMemebers(newId );
    }
  }
};
</script>

<style scoped>
section {
  margin-right: 10px ;
  margin-top: 30px;
  max-width: 110rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  /*margin: 0.2rem 0;*/
  /*height: 330px;*/
  /*width: 420px;*/
  /*border: 1px solid #ccc;*/
  /*padding: 1rem;*/

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left ;
  align-items: center;
  list-style: none;
  margin-left: -40px;
  gap: 10px

;



}


</style>