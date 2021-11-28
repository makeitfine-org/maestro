const EventEmitter = require('events')

// const em = new EventEmitter()
//
// const eventName = 'any_event'
//
// em.on(eventName, data => {
//     console.log('on any event:', data)
// })
//
// setTimeout(() => {
//     em.emit(eventName, {id: 1, name: 'any name'})
//     em.emit(eventName, {id: 2, name: 'any name 2'})
// }, 1500)
//
// em.emit(eventName, {id: 3, name: 'any name 3'})

class Dispatcher extends EventEmitter {
    sub(eventName, callback) {
        console.log('subscribe<<<')
        this.on(eventName, callback)
    }

    disp(eventName, data) {
        console.log('dispatching>>>')
        this.emit(eventName, data)
    }
}

const d = new Dispatcher()

setTimeout(() =>
        d.disp('one', {'a': 1, 'b': 2, 'c': 3}),
    1
)

d.sub('one', d => {
    console.log('ON: ', d)
})
