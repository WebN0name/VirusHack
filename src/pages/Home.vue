<template>
    <main class="flex flex-wrap p-2 lg:p-20">
        <!-- <div class="mb-6 lg:w-1/2 lg:mb-0">
            <Card class="lg:mr-6"
                  :img="operatingCard.img"
                  :title="operatingCard.title"
                  :content="operatingCard.content">
            </Card>
            <div class="hidden lg:flex lg:mt-6">
                <Card class="mr-6 w-1/2">
                    <header class="w-full flex justify-between items-center mx-10 mt-10">
                        <h2 class="uppercase text-black-3">Vehicles on track</h2>
                    </header>
                    <section class="mb-10 mx-10">
                        <h3 class="text-6xl text-left">1,428<span class="text-2xl">cars</span></h3>
                        <p class="flex items-center text-red-normal text-lg"><Icon class="w-6 h-6 mr-2" name="arrow-down-right" />-7.6%</p>
                    </section>
                </Card>
                <Card class="mr-6  w-1/2">
                    <header class="w-full flex justify-between items-center mx-10 mt-10">
                        <h2 class="uppercase text-black-3">Distance Driven</h2>
                    </header>
                    <section class="mb-10 mx-10">
                        <h3 class="text-6xl text-left">158.3<span class="text-2xl">mi</span></h3>
                        <p class="flex items-center text-green-normal text-lg"><Icon class="w-6 h-6 mr-2" name="arrow-up-right" />+14.2%</p>
                    </section>
                </Card>
            </div>
        </div> -->
        <!-- <Card class="w-full lg:w-1/2">
            <header class="w-full flex justify-between items-center m-5 md:m-10">
                <h2 class="uppercase text-black-3">Fleet activity map</h2>
            </header>
            <section class="mb-5 mx-5 md:mb-10 md:mx-10">
                <line-chart :chartdata="datacollectionLinear" :options="options"/>
            </section>
        </Card> -->
        <!-- <Card class="w-full mt-6">
            <header class="w-full flex justify-between items-center m-5 md:m-10">
                <h2 class="uppercase text-black-3">Fleet activity map</h2>
            </header>
            <section class="overflow-hidden" style="height: 500px;">
                <l-map
                        ref="map"
                        :zoom="zoom"
                        @update:zoom="zoomUpdated"
                        :center="center"
                >
                    <l-tile-layer :url="url"></l-tile-layer>
                    <l-circle-marker :lat-lng="[40.730451, -73.959626]" :radius="largeRadius"></l-circle-marker>
                    <l-circle :lat-lng="[40.730451, -73.959626]" :radius="40" :fill="true" :fill-opacity="1"></l-circle>
                    <l-circle-marker :lat-lng="[40.725169, -73.987105]" :radius="smallRadius"></l-circle-marker>
                    <l-circle :lat-lng="[40.725169, -73.987105]" :radius="40" :fill="true" :fill-opacity="1"></l-circle>
                    <l-circle-marker :lat-lng="[40.731543, -73.907368]" :radius="smallRadius"></l-circle-marker>
                    <l-circle :lat-lng="[40.731543, -73.907368]" :radius="40" :fill="true" :fill-opacity="1"></l-circle>
                    <l-circle-marker :lat-lng="[40.715542, -74.011095]" :radius="largeRadius"></l-circle-marker>
                    <l-circle :lat-lng="[40.715542, -74.011095]" :radius="40" :fill="true" :fill-opacity="1"></l-circle>
                    <l-circle-marker :lat-lng="[40.738795, -73.990796]" :radius="largeRadius"></l-circle-marker>
                    <l-circle :lat-lng="[40.738795, -73.990796]" :radius="40" :fill="true" :fill-opacity="1"></l-circle>
                    <l-circle-marker :lat-lng="[40.737072, -73.929598]" :radius="largeRadius"></l-circle-marker>
                    <l-circle :lat-lng="[40.737072, -73.929598]" :radius="40" :fill="true" :fill-opacity="1"></l-circle>
                </l-map>
            </section>
        </Card> -->
        <div class="w-full flex flex-col mt-6 lg:flex-row">
            <Card class="w-full mr-0 mb-6 lg:w-1/2 lg:mr-6 lg:mb-0 custom-card-class">
                <header class="w-full flex justify-between items-center m-5 md:m-10">
                    <h2 class="uppercase text-black-3">История</h2>
                </header>
                <ul v-if="carList" class="mb-5 mx-5 md:mb-10 md:mx-10">
                    <li class="flex justify-between mt-4" v-for="car in carList" :key="car.id">
                        <Avatar class="flex-initial mr-4" :img="car.img" type="simple" :notify="{ text: car.id + 1 }"/>
                        <div class="flex-1">
                            <p class="text-left">{{ car.name }}</p>
                            <p class="text-left text-black-3">{{ car.model }}</p>
                        </div>
                        <div class="flex-1">
                            <p class="text-right">${{car.price}}</p>
                            <p class="text-right text-black-3">{{car.distance}} miles</p>
                        </div>
                    </li>
                </ul>
            </Card>
            <!-- <Card class="w-full mr-0 mb-6 lg:w-1/3 lg:mr-6 lg:mb-0">
                <header class="w-full flex justify-between items-center m-5 md:m-10">
                    <h2 class="uppercase text-black-3">Fleet activity map</h2>
                </header>
                <section class="mb-5 mx-5 md:mb-10 md:mx-10">
                    <bar-chart :chartdata="datacollectionBar" :options="options"/>
                    <div class="flex justify-between mt-5 md:mt-10">
                        <div>
                            <h3 class="text-xl md:text-6xl leading-tight text-left">1,744</h3>
                            <div class="flex items-center">
                                <div class="w-4 h-4 rounded-full mr-3 bg-primary-normal md:mr-5"></div>
                                <span class="text-black-3">Comfort</span>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-xl md:text-6xl text-left">2,312</h3>
                            <div class="flex items-center">
                                <div class="w-4 h-4 rounded-full mr-3 bg-purple-normal md:mr-5"></div>
                                <span class="text-black-3">Premium</span>
                            </div>
                        </div>
                    </div>
                </section>
            </Card> -->
            <Card class="w-full mr-0 mb-6 lg:w-1/2 lg:mr-6 lg:mb-0 custom-card-class">
                <header class="w-full flex justify-between items-center m-5 md:m-10">
                    <h2 class="uppercase text-black-3">Таски</h2>
                </header>
                <section class="mb-5 mx-5 md:mb-10 md:mx-10">
                    <todo-list standard-text="Vehicles #"
                               :todo-list="todoVehicles"
                               alert-content="Due today">
                    </todo-list>
                </section>
            </Card>
        </div>
        <div class="w-full flex flex-col mt-6 lg:flex-row">
            <Card class="w-full mr-0 mb-6 lg:w-1/2 lg:mr-6 lg:mb-0 custom-card-class">
                <header class="w-full flex justify-between items-center m-5 md:m-10">
                    <h2 class="uppercase text-black-3">Ближайшие</h2>
                </header>
                <ul v-if="carList" class="mb-5 mx-5 md:mb-10 md:mx-10">
                    <li class="flex justify-between mt-4" v-for="car in carList" :key="car.id">
                        <Avatar class="flex-initial mr-4" :img="car.img" type="simple" :notify="{ text: car.id + 1 }"/>
                        <div class="flex-1">
                            <p class="text-left">{{ car.name }}</p>
                            <p class="text-left text-black-3">{{ car.model }}</p>
                        </div>
                        <div class="flex-1">
                            <p class="text-right">${{car.price}}</p>
                            <p class="text-right text-black-3">{{car.distance}} miles</p>
                        </div>
                    </li>
                </ul>
            </Card>
           <Card class="w-full mr-0 mb-6 lg:w-1/2 lg:mr-6 lg:mb-0 custom-card-class">
                <header class="w-full flex justify-between items-center m-5 md:m-10">
                    <h2 class="uppercase text-black-3">Сегодня</h2>
                </header>
                <ul v-if="carList" class="mb-5 mx-5 md:mb-10 md:mx-10">
                    <li class="flex justify-between mt-4" v-for="car in carList" :key="car.id">
                        <Avatar class="flex-initial mr-4" :img="car.img" type="simple" :notify="{ text: car.id + 1 }"/>
                        <div class="flex-1">
                            <p class="text-left">{{ car.name }}</p>
                            <p class="text-left text-black-3">{{ car.model }}</p>
                        </div>
                        <div class="flex-1">
                            <p class="text-right">${{car.price}}</p>
                            <p class="text-right text-black-3">{{car.distance}} miles</p>
                        </div>
                    </li>
                </ul>
            </Card>
        </div>
        <div class="flex flex-wrap items-start p-20">
          <h1 class="text-2xl flex-initial leading-none text-black-1 mr-2">Календарь</h1>
          <div class="flex justify-between items-start w-full">
            <task-lane class="w-1/7 mr-6" id="monday" title="Понедельник" :items="neededItems"></task-lane>
            <task-lane class="w-1/7 mr-6" id="tuesday" title="Вторник" :items="waintingItems"></task-lane>
            <task-lane class="w-1/7 mr-6" id="wednessday" title="Среда" :items="serviceItems"></task-lane>
            <task-lane class="w-1/7 mr-6" id="thursday" title="Четверг" :items="serviceItems"></task-lane>
            <task-lane class="w-1/7 mr-6" id="friday" title="Пятница" :items="serviceItems"></task-lane>
            <task-lane class="w-1/7 mr-6" id="saturday" title="Суббота" :items="serviceItems"></task-lane>
            <task-lane class="w-1/7 mr-6" id="sunday" title="Воскресенье" :items="serviceItems"></task-lane>
          </div>
        </div>
    </main>
</template>

<script>
  import Avatar from "../components/Avatar";
  // import BarChart from "../components/BarChart";
  import Card from "../components/Card";
  // import LineChart from "../components/LineChart";
  // import Icon from "../components/Icon";
  import TodoList from "../components/TodoList";
  import {mapState} from 'vuex';
  import TaskLane from "../components/TaskLane"

  // import { LMap, LTileLayer, LCircleMarker, LCircle  } from 'vue2-leaflet';

  export default {
    name: 'home',
    components: {
      Avatar,
      // BarChart,
      Card,
      // Icon,
      // LineChart,
      // LMap,
      // LTileLayer,
      // LCircleMarker,
      // LCircle,
      TodoList,
      TaskLane
    },
    data() {
      return {
        operatingCard: {
          img: {
            url: require('../assets/img/home/operating-score.png'),
            alt: 'Operating Score',
            width: 203,
            height: 142
          },
          title: 'Welcome to Velocity',
          content: 'All cars are operating well. There were 1,233 trips since your last login.'
        },
        graphCard: {
          title: 'Fleet Activity Map'
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              gridLines: {
                color: "#B0BAC9",
                borderDash: [3, 3]
              },
              ticks: {
                suggestedMin: 0,
                suggestedMax: 125,
                fontColor: "#B0BAC9"
              }
            }],
            xAxes: [{
              gridLines: {
                color: "#B0BAC9",
                borderDash: [3, 3]
              },
              ticks: {
                fontColor: "#B0BAC9"
              }
            }]
          },
          legend: {
            display: true,
            align: 'end',
            labels: {
              boxWidth: 10,
              usePointStyle: true,
              padding: 20,
              fontColor: "#B0BAC9"
            }
          },
          elements: {
            point: {
              radius: 5,
              hoverRadius: 4,
              borderWidth: 3,
              hoverBorderWidth: 3,
              backgroundColor: "#FFF"
            }
          }
        },
        carList: [
          {
            id: 0,
            name: 'Bebop',
            model: 'Volvo Intellisafe',
            price: '6,432',
            distance: '1,232',
            img: {
              src: require('../assets/img/vehicles/bebop.png')
            }
          },
            {
                id: 1,
                name: 'Bebop',
                model: 'Volvo Intellisafe',
                price: '6,432',
                distance: '1,232',
                img: {
                    src: require('../assets/img/vehicles/bebop.png')
                }
            },
            {
                id: 2,
                name: 'Bebop',
                model: 'Volvo Intellisafe',
                price: '6,432',
                distance: '1,232',
                img: {
                    src: require('../assets/img/vehicles/bebop.png')
                }
            },
            {
                id: 3,
                name: 'Bebop',
                model: 'Volvo Intellisafe',
                price: '6,432',
                distance: '1,232',
                img: {
                    src: require('../assets/img/vehicles/bebop.png')
                }
            },
            {
                id: 4,
                name: 'Bebop',
                model: 'Volvo Intellisafe',
                price: '6,432',
                distance: '1,232',
                img: {
                    src: require('../assets/img/vehicles/bebop.png')
                }
            },
            {
                id: 5,
                name: 'Bebop',
                model: 'Volvo Intellisafe',
                price: '6,432',
                distance: '1,232',
                img: {
                    src: require('../assets/img/vehicles/bebop.png')
                }
            },
            {
                id: 6,
                name: 'Bebop',
                model: 'Volvo Intellisafe',
                price: '6,432',
                distance: '1,232',
                img: {
                    src: require('../assets/img/vehicles/bebop.png')
                }
            },
            {
                id: 7,
                name: 'Bebop',
                model: 'Volvo Intellisafe',
                price: '6,432',
                distance: '1,232',
                img: {
                    src: require('../assets/img/vehicles/bebop.png')
                }
            }
        ],
        todoVehicles: [
          {
            id: 11283,
            validated: false,
            alertType: 'error'
          },
          {
            id: 11300,
            validated: false,
            alertType: 'error'
          },
          {
            id: 10502,
            validated: false,
            alertType: 'error'
          },
          {
            id: 12320,
            validated: false,
            alertType: 'error'
          },
          {
            id: 14183,
            validated: false,
            alertType: 'error'
          },
          {
            id: 15233,
            validated: false,
            alertType: 'error'
          },
          {
            id: 15332,
            validated: false,
            alertType: 'error'
          }
        ],
        zoom: 14,
        zoomBase: 14,
        largeRadius: 55,
        smallRadius: 35,
        center: [40.721811, -73.991590],
        url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
      }
    },

     computed: mapState({
            neededItems: s => s.items.needed,
            waintingItems: s => s.items.waiting,
            serviceItems: s => s.items.service,
            servicedItems: s => s.items.serviced
      }),

    methods: {
        zoomUpdated (zoom) {
            this.zoom = zoom;
            this.largeRadius = (this.largeRadius * this.zoom) / this.zoomBase;
            this.smallRadius = (this.smallRadius * this.zoom) / this.zoomBase;
        }
    }
  }
</script>

<style scoped>
.custom-card-class{
  max-height: 700px;
  overflow-y: auto;
  overflow-x: hidden;
} 

</style>