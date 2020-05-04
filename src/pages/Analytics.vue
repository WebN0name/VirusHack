<template>
	<main class="flex flex-wrap p-20">
		<!-- <h1 class="text-2xl leading-none text-black-1 mr-2">Analytics</h1>
		<Card class="w-full mt-6">
			<header class="w-full flex justify-between items-center m-10">
				<h2 class="uppercase text-black-3">Fleet activity map</h2>
			</header>
			<section class="mb-10 mx-10">
				<line-chart :chartdata="datacollectionLinear" :options="lineOptions" :bg-gradient="gradients"/>
			</section>
		</Card>
		<div class="flex w-full  mt-6">
			<Card class="w-1/4 mr-6">
				<header class="w-full flex justify-between items-center mx-10 mt-10">
					<icon class="bg-green-light text-green-normal p-3" size="6" name="check" round></icon>
				</header>
				<section class="mb-10 mx-10">
					<h3 class="text-6xl text-left">$1,428</h3>
					<p class="flex items-center text-black-3 text-lg">
						Vehicles on track
					</p>
				</section>
			</Card>
			<Card class="w-1/4 mr-6">
				<header class="w-full flex justify-between items-center mx-10 mt-10">
					<icon class="bg-blue-light text-blue-normal p-3" size="6" name="location_onplaceroom" round></icon>
				</header>
				<section class="mb-10 mx-10">
					<h3 class="text-6xl text-left">158.3 mi</h3>
					<p class="flex items-center text-black-3 text-lg">
						Distance driven
					</p>
				</section>
			</Card>
			<Card class="w-1/4 mr-6">
				<header class="w-full flex justify-between items-center mx-10 mt-10">
					<icon class="bg-purple-light text-purple-normal p-3" size="6" name="bolt" round></icon>
				</header>
				<section class="mb-10 mx-10">
					<h3 class="text-6xl text-left">87.4 kWh</h3>
					<p class="flex items-center text-black-3 text-lg">
						Energy consumed
					</p>
				</section>
			</Card>
			<Card class="w-1/4">
				<header class="w-full flex justify-between items-center mx-10 mt-10">
					<icon class="bg-yellow-light text-yellow-normal p-3" size="6" name="show_chart" round></icon>
				</header>
				<section class="mb-10 mx-10">
					<h3 class="text-6xl text-left">24.2 h</h3>
					<p class="flex items-center text-black-3 text-lg">
						Total drive time
					</p>
				</section>
			</Card>
		</div>
		<div class="flex w-full mt-6">
			<Card class="w-1/3 mr-6">
				<header class="w-full flex justify-between items-center m-10">
					<h2 class="uppercase text-black-3">Fleet activity map</h2>
				</header>
				<ul v-if="trips" class="mb-10 mx-10">
					<li class="flex justify-between mt-4" v-for="(trip, index) in trips" :key="index">
						<div class="flex-1">
							<p class="text-left">{{ trip.start }} - {{ trip.end }}</p>
							<p class="text-left text-black-3">{{trip.date.toLocaleDateString()}}</p>
						</div>
						<div class="flex-1">
							<p class="text-right">{{ trip.price }}</p>
							<p class="text-right text-black-3">{{trip.time}}</p>
						</div>
					</li>
				</ul>
			</Card>
			<Card class="w-2/3">
				<header class="w-full flex justify-between items-center m-10">
					<h2 class="uppercase text-black-3">Fleet activity map</h2>
				</header>
				<section class="mb-10 mx-10">
					<bar-chart :chartdata="datacollectionMixed" :options="mixedOptions"></bar-chart>
				</section>
			</Card>
		</div> -->
     <div class="w-full flex flex-col mt-6 lg:flex-row">
       <div class="input-block w-full mr-0 mb-6 lg:w-1/2 lg:mr-6 lg:mb-0">
         <input type="text" name="" id="" placeholder="Имя клиента" v-model="searchCients">
       </div>
     </div>
     <div class="w-full flex flex-col mt-6 lg:flex-row">
       <Card class="w-full mr-0 mb-6 lg:w-1/2 lg:mr-6 lg:mb-0 custom-card-class">
                <ul v-if="clients" class="mb-5 mx-5 md:mb-10 md:mx-10">
                    <li class="flex justify-between mt-4" v-for="client in filterClients" :key="client.firstName" @click="toClientPage(client.avatar, client.firstName, client.lastName)">
                        <Avatar class="flex-initial mr-4" :img="client.avatar" type="simple"/>
                        <div class="flex-1">
                            <p class="text-left name">{{ client.firstName }} {{ client.lastName }}</p>
                        </div>
                    </li>
                </ul>
            </Card>
     </div>
	</main>
</template>

<script>
  // import BarChart from "../components/BarChart";
  import Avatar from "../components/Avatar";
  import Card from "../components/Card";
  // import Icon from "../components/Icon";
  // import LineChart from "../components/LineChart";
  import { mapState } from 'vuex'

  export default {
    name: "Analytics",
    components: {
      Avatar,
      // BarChart,
      Card,
      // Icon,
      // LineChart
    },
    data: () => ({
      searchCients: ''
    }),

    computed: {
      ...mapState(['clients']),
      filterClients () {
      return this.clients.filter(client => {
        if (client.firstName.indexOf(this.searchCients) !== -1) {
          return true
        }
        if (client.lastName.indexOf(this.searchCients) !== -1) {
          return true
        }
        if ((client.firstName.toLowerCase()).indexOf(this.searchCients) !== -1) {
          return true
        }
        if ((client.lastName.toLowerCase()).indexOf(this.searchCients) !== -1) {
          return true
        }
      })
    }
    },

    methods: {
      toClientPage(avatar, firstName, lastName){
        this.$store.state.client.avatar = avatar
        this.$store.state.client.firstName = firstName
        this.$store.state.client.lastName = lastName
        this.$router.push('/Client')
      }
    },

    mounted() {

    }
  }
</script>

<style scoped>
.input-block input{
  width: 100%;
  padding: 10px;
}

.name{
  line-height: 48px;
}
</style>