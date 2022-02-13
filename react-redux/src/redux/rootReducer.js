/*
 * "Maestro": Reminder and notepad project.
 *
 * Copyright 2022
 */

import {combineReducers} from 'redux'
import {postsReducers} from './postsReducers'
import {appReducer} from './appReducer'

export const rootReducer = combineReducers({
    posts: postsReducers,
    app: appReducer
})
