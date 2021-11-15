const app = new Vue({

    el: '#app',

    data:{
        todoList:[
            {
                text: 'ciao',
                done: false,
            },
        ],
        todostr: '',
        error:false,
    },

    methods:{

        insertTodo(){
            if(this.todostr.length < 3){
                this.error = true;
                setTimeout(()=>{
                    this.error = false;
                },3000)
            } else {
                const newTodoItem = {
                    text:this.todostr,
                    done:false
                },
                this.todoList.push(newTodoItem);
                this.todostr = '';
            }
        },

        removeToddo(index){
            if(confirm('Sei sicuro di eliminare?: "${this.todoList[index].text}"')){
            this.todoList.splice(index,1);
            }

        },

        toggleDone(index){
            this.todoList[index].done = !this.todoList[index].done;
        }
    }  
    
});