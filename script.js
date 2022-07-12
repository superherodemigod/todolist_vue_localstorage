var app = new Vue({
    el: '#app',
    data: {
        items: [],
        newItemName: '',
    },
    mounted() {
        this.getItems();
    },
    methods: {
        addItem() {
            // validation check
            if (this.newItemName) {
                this.items.unshift({
                    id: this.items.length,
                    name: this.newItemName,
                    completed: false,
                });
            }
            // reset new_todo
            this.newItemName = '';
            // save the new item in localstorage
            return true;
        },
        getItems() {
            if (localStorage.getItem('todo_list')) {
                this.items = JSON.parse(localStorage.getItem('todo_list'));
            }
        },
    },
    watch: {
        items: {
            handler: function(updatedList) {
                localStorage.setItem('todo_list', JSON.stringify(updatedList));
            },
            deep: true
        }
    },
})