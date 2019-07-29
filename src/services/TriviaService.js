// import Axios from 'axios';

// class TriviaService {
//     constructor() {
//         this.client = new Axios.create({
//             baseURL: 'http://jservice.io/api'
//         });
//     }

//     getRandomTrivias(triviaCategoryId) {
//         return this.client.get('/random', {
//             params: { count: 30, category: triviaCategoryId }
//         });
//     }

//     // it's always better to have possibility to change later
//     // number of needed trivia categories
//     getTriviasCategories(numberOfCategories = 10) {
//         return this.client.get('/categories', {
//             params: {
//                 count: numberOfCategories
//             }
//         })
//     }
// }

// const triviaService = new TriviaService();

// export { triviaService as TriviaService }


import axios from 'axios';

export default class TriviaService {
    constructor() {
        axios.defaults.baseURL = "http://jservice.io/api"
    }

    getRandomTrivias(triviaCategoryId) {
        return axios.get('/random', {
            params: { count: 30, category: triviaCategoryId }
        });
    }

    // it's always better to have possibility to change later
    // number of needed trivia categories
    getTriviasCategories(numberOfCategories = 10) {
        return axios.get('/categories', {
            params: {
                count: numberOfCategories
            }
        })
    }
}

const triviaService = new TriviaService();

export { triviaService as TriviaService }