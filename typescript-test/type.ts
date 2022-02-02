/*
 * "Maestro": Reminder and notepad project.
 *
 * Copyright 2022
 */

const str: string = "Hi, there!!!"
console.log(str)

const isGood: boolean = true
const isNotGood: boolean = false

let int: number = 333
int = 333
const int2 = 333

let k: unknown = 333
k = "abc"
k = true

console.log(k)


const numberArray: number[] = [3, 3, 3, 3, -3.3, 0, 3]
const numberArray2: Array<number> = [3, 3, 3, 3, -3.3, 0, 3]
const numberArray3 = [3, 3, 3, 3, -3.3, 0, 3, -33, -3434.34234, -0.0000342, 0.003e43, 'scc', true]

console.log(numberArray)
console.log(numberArray2)
console.log(numberArray3)

const conc: [string, boolean, number] = ['one', true, 95.55]

console.log(conc)

// Any
let v: any = 33
v = 'ddd'

const t: string = 'kee'

function sN(name: string): void {
    console.log(name)
}

sN("Topic")

// Never

function throwError(mes: string): never {
    throw new Error(mes)
}

function throwError2(mes: string): never {
    while (true) {

    }
}

// throwError(throwError('33'))
// throwError(throwError2('33'))

type Login = string

const l: Login = '333'
console.log(l)

type ID = string | number | boolean
const id: ID = 5
const id2: ID = '3'
const id3: ID = false

console.log(id, id2, id3)

type SomeType = string | null | undefined

let a: number | string = '3'
a = 555

let a3: undefined = undefined
console.log(a3)

let a4: null = null
console.log(a4)
