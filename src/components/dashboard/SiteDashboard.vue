<template>
    <v-card class="mx-auto rounded {'v-cardPad' : $vuetify.breakpoint.xs, 'v-card' : $vuetify.breakpoint.mdAndUp}" id="dashboard">
      <v-card-title><h1 :class="{'xsFont' : $vuetify.breakpoint.xs, 'largeFont' : $vuetify.breakpoint.mdAndUp}">Task Dashboard</h1></v-card-title>
      <v-card-text>
        <v-data-table dense :headers="headers" :items="tasks" :items-per-page="5" :class="{'xsFont' : $vuetify.breakpoint.xs, 'largeFont' : $vuetify.breakpoint.mdAndUp}" justify="center" ></v-data-table>
      </v-card-text>
    </v-card>
    
</template>

<script>
import Tasks from '@/assets/data/site/vue-tasks.json';
  export default {
    name:"SiteDashboard",
   data(){
     return {
        methods: {
            itemRowBackground: function (item) {
                return item.status == 'OK' ? 'style-ok' : item.status == 'Open' ? 'style-open' : 'style-new'
            }
        },
        tasks: Tasks.tasks,
       headers:[
        {           
          text:'Task',
          align: 'left',
          sortable: 'true',
          value:'name'
        },
        {
          text:'Status',
          value:'status'
         },
       ]
     }
   }
  }
</script>

<style scoped>

.v-cardPad{
  padding:0%;
}

.v-card__title{
  padding:0%;
  padding-top: 2%;
}
.xsFont
{
  width: 100%;
}
#dashboard{
  width: 100%;
}
.style-ok {
  background-color: rgb(0,255,)
}
.style-open {
  background-color: rgb(255,255,0)
}
.style-new {
  background-color: rgb(255,0,0)
}
</style>