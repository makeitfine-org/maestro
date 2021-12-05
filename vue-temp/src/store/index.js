import {createStore} from 'vuex'
import post from './mudules/post'

const storing = {
    modules: {
        post
    }
}

const store = createStore(storing)

export default store