<template>
  <the-navigation @set-page="setActivePage"></the-navigation>
  <main>
    <component :is="activePage"></component>
  </main>
</template>

<script>
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  components: {
    TheNavigation,
    TeamsList,
    UsersList,
  },
  data() {
    return {
      activePage: 'teams-list',
      teams: [
        {id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2']},
        {id: 't2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3']},
        {id: 't3', name: 'Client Consulting', members: ['u4', 'u5']},
      ],
      users: [
        {
          id: 'u1',
          fullName: 'David de Gea',
          role: 'Goalkeeper',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p51940.png',
          jerseyNumber: '1',
          app: '1',
          nationality: 'Spain',
          goals: '0',
        },

        {
          id: 'u2',
          fullName: 'Raphaël Varane',
          role: 'Centre Back',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXBmGHittgofN0XCQckMtazVKx2fvwXeK4_w&usqp=CAU',
          jerseyNumber: '19',
          app: '1',
          nationality: 'France',
          goals: '0',

        }, {
          id: 'u2',
          fullName: 'Harry Maguire',
          role: 'Centre Back',
          image: 'data:image/jpeg;base64,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',
          jerseyNumber: '5',
          app: '1',
          nationality: 'England',
          goals: '0',

        }, {
          id: 'u2',
          fullName: 'Lisandro Martínez',
          role: 'Centre Back',
          image: 'https://e0.365dm.com/22/07/768x432/skysports-lisandro-martinez_5846996.jpg?20220727133633',
          jerseyNumber: '6',
          app: '1',
          nationality: 'Spain',
          goals: '0',
        }, {
          id: 'u2',
          fullName: 'Eric Bailly',
          role: 'Centre Back',
          image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p197365.png',
          jerseyNumber: '3',
          app: '0',
          nationality: 'Cort de voir',
          goals: '0',
        },
        {
          id: 'u3',
          fullName: 'Christian Eriksen',
          role: 'Midfielder',
          image: 'https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0801%2Fr1042964_1296x729_16%2D9.jpg&w=375&h=211',
          jerseyNumber: '14',
          app: '1',
          nationality: 'Denmark',
          goals: '0',
        }
        ,
        {
          id: 'u3',
          fullName: 'Fred',
          role: 'Midfielder',
          image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p101582.png",
          jerseyNumber: '17',
          app: '1',
          nationality: 'Brazil',
          goals: '0',
        },
        {
          id: 'u3',
          fullName: 'Bruno Fernandes',
          role: 'Midfielder',
          image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p141746.png",
          jerseyNumber: '8',
          app: '1',
          nationality: 'Portugal',
          goals: '0',
        }
        ,
        {
          id: 'u4',
          fullName: 'Jadon Sancho',
          role: 'Forward',
          image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p209243.png",
          jerseyNumber: '25',
          app: '1',
          nationality: 'England',
          goals: '0',
        }
        ,
        {
          id: 'u4',
          fullName: 'Alejandro Garnacho',
          role: 'Forward',
          image: "https://d3nfwcxd527z59.cloudfront.net/content/uploads/2022/02/10124345/PA-64204360-1-1-752x428.jpg",
          jerseyNumber: '25',
          app: '1',
          nationality: 'Argentina',
          goals: '0',
        }

      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  },
  methods: {
    setActivePage(page) {
      this.activePage = page;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>