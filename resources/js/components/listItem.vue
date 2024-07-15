<template>
    <div class="checkbox">
        <input type="checkbox"
        @change="updateCheck()"
        v-model="item.comleted"
        />

        <span :class="[item.comleted ? 'completed': '', 'itemText']">{{ item.name }}</span>
        <button @click="removeItem()" class="trashCan" 
        >Delete</button>

    </div>
        
</template>
<script>
import axios from 'axios';

export default {
    props: ['item'],
    methods:{
        updateCheck(){
            axios.put('api/item/'+this.item.id, {
                item: this.item
            })
            .then(response=>{
                if(response.status == 200){
                   // this.$emit('itemchanged');
                }
            })
            .catch(error=>{
                console.log(error);
            })
        },
        removeItem(){
            axios.delete('api/item/'+this.item.id).then(response=>{
                if(response.status == 200){
                    this.$emit('itemchanged');
                }
            })
            .catch(error=>{
                console.log(error);
            })
        }
    }
}
  </script>

<style scoped>
.completed{
    text-decoration: line-through;
    color: #999999;
}

.itemText{
    width: 100%;
    margin-left: 20px;
}

.item{
    display: flex;
    justify-content: center;
    align-items: center;
}
.trashCan{
    font-size: 20px;
    background-color: #e6e6e6;
    border: none;
    color: #FF0000;
    outline: none;
}


</style>