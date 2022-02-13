/*
 * "Maestro": Reminder and notepad project.
 *
 * Copyright 2022
 */

import {CREATE_POST} from './types'
import {showAlert} from './actions'

const forbidden = ['fuck', 'php', 'spam']

export function forbiddenWordsMiddleware({dispatch}) {
    return function (next) {
        return function (action) {
            if (action.type === CREATE_POST) {
                const found = forbidden.filter(w => action.payload.title.includes(w))
                if (found.length) {
                    return dispatch(showAlert('forbidden words'))
                }
            }
            return next(action)
        }
    }
}
