import { createApp } from 'vue';
import {createRouter, createWebHistory} from "vue-router";

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList  from "./components/users/UsersList.vue";
import TeamMembers from "@/components/teams/TeamMembers";
import NotFound from "@/components/nav/NotFound";

const router = createRouter({
    history: createWebHistory(),

routes: [

    {
        name: 'teams',
        path: '/teams', component: TeamsList , alias: '/' ,
        children: [
            {
                name: 'team-members',path: ':teamId', component: TeamMembers  , props: true },
        ]
    },
    { path: '/players', component: UsersList
    },
    { path: '/teams/:teamId', component:  TeamMembers ,
        props: true
    },
    {
        path: '/:notFound(.*)', component: NotFound
    }

]
});




const app = createApp(App)

app.use(router)

app.mount('#app');
