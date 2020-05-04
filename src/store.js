import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* eslint-disable no-param-reassign */
export default new Vuex.Store({
    state: {
        items: {
            needed: [
                {
                    id: 0,
                    name: "Spire",
                    price: 233,
                    info: "Tire replacement",
                    date: "June 12"
                },
                {
                    id: 1,
                    name: "Eos",
                    price: 120,
                    info: "Engine Check-up",
                    date: "May 2"
                },
                {
                    id: 5,
                    name: "Eagle",
                    price: 180,
                    info: "Tire replacement",
                    date: "June 6"
                },
                {
                    id: 6,
                    name: "Bebop",
                    price: 1400,
                    info: "Monthly service",
                    date: "June 12"
                }
            ],
            waiting: [
                {
                    id: 2,
                    name: "Expedition",
                    price: 766,
                    info: "Tire replacement",
                    date: "June 3"
                }
            ],
            service: [
                {
                    id: 3,
                    name: "Scorpion",
                    price: 430,
                    info: "Monthly service",
                    date: "June 4"
                }
            ],
            serviced: [
                {
                    id: 4,
                    name: "Empire",
                    price: 542,
                    info: "Engine check-up",
                    date: "June 24"
                }
            ]
        },
        nextId: 1,

        clients: [
            {
                avatar: {
                    src: 'https://sun9-52.userapi.com/c855216/v855216062/1f69b6/POMI5Q3OLII.jpg'
                },
                firstName: 'Владимир',
                lastName: 'Строев'
            },
            {
                avatar: {
                    src: 'https://sun9-52.userapi.com/c855216/v855216062/1f69b6/POMI5Q3OLII.jpg'
                },
                firstName: 'Иван',
                lastName: 'Иванович'
            },
            {
                avatar: {
                    src: 'https://sun9-52.userapi.com/c855216/v855216062/1f69b6/POMI5Q3OLII.jpg'
                },
                firstName: 'Семен',
                lastName: 'Семенович'
            },
        ],

        client: {
            avatar: Object,
            firstName: '',
            lastName: '',
            diagnoz: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, exercitationem enim cupiditate, hic, deleniti corrupti eos error architecto ad quia ullam at distinctio consequuntur. Architecto itaque quis voluptatem? Excepturi, quidem.'
        }
    },
    mutations: {
        addItem(state, item) {
            state.items.todo.push(Object.assign(item, { id: state.nextId }));
            state.nextId += 1;
        },
        updateItems(state, { items, id }) {
            state.items[id] = items;
        }
    }
});