<template>
    <v-card class="mx-auto rounded {'v-cardPad' : $vuetify.breakpoint.xs, 'v-card' : $vuetify.breakpoint.mdAndUp}" id="dashboard">
      <v-card-title><h1 :class="{'xsFont' : $vuetify.breakpoint.xs, 'largeFont' : $vuetify.breakpoint.mdAndUp}">Vue Task Dashboard</h1></v-card-title>
      <v-card-text>
        <v-data-table
         @click:row="rowClick" 
         item-key="name" 
         single-select 
         dense 
         :headers="headers" 
         :items="tasks" 
         :items-per-page="10" 
         :item-class="itemRowBackground"
         :class="{'elevation-1 xsFont' : $vuetify.breakpoint.xs, 'elevation-1 largeFont' : $vuetify.breakpoint.mdAndUp}" justify="center" 
         >
        
        </v-data-table>
      </v-card-text>
    </v-card>
    
</template>

<script>
import Tasks from '@/assets/data/site/vue-tasks.json';
  export default {
    name:"SiteDashboard",
     methods: {
         itemRowBackground: function (item) {
           console.log(item.status);
             return item.status === 'OK' ? 'style-ok' : item.status === 'Open' ? 'style-open' : 'style-new'
         },
         rowClick: function (item, row) {      
           console.log("clicked"+item);
           row.select(true);
          }
     },
   data(){
     return {       
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
<style >

</style>
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

</style>