const app = {
    data() {
        return {
            noteTitle: 'Notes list',
            notePlaceholder: 'Input note',
            noteInputValue: '',
            notes: ['note1', 'note2', 'note3'],
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.noteInputValue = event.target.value
        },
        addNewNote() {
            if (this.noteInputValue === '')
                return
            this.notes.push(this.noteInputValue)
            this.noteInputValue = ''
        },
        inputKeyPress(event) {
            if (event.key === 'Enter') {
                this.addNewNote()
            }
        },
        removeNote(idx) {
            this.notes.splice(idx, 1)
        },
        toUpperCase(str) {
            return str.toUpperCase()
        },
        doubleNumber() {
            return this.notes.length * 2
        },
        titleH1TextDecoration() {
            if (this.noteInputValue.length < 15) {
                return 'none'
            }
            console.log(">>>")
            return 'underline'
        },
        titleH1Style() {
            return {
                color: this.noteInputValue.length < 15 ? 'green' : 'red',
                fontWeight: this.noteInputValue.length < 15 ? 'normal' : 'bold',
                textDecoration: this.titleH1TextDecoration()
            }
        }
    },
    computed: {
        doubleNumberComputed() {
            return this.notes.length * 2
        }
    },
    watch: {
        noteInputValue(value) {
            if (value.includes('qwerty'))
                this.noteInputValue = ''
        }
    }
}

Vue.createApp(app).mount('#app')
