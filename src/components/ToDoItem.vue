<template>
    <div class='item' >
       {{item.name}}
        <div class='actions-group'>
            <img
                v-bind:src='item.priority ? flagFill : flag'
                alt='flag'
                width='25px'
                v-on:click='$emit("mark", item.id)'
            />
            <img
                src='../assets/dump.svg'
                alt='trash bin'
                width='25px'
                v-on:click='$emit("remove", item.id)'
            />
        </div>
    </div>
</template>

<script>
import flag from '../assets/flag.svg';
import flagFill from '../assets/flag-fill.svg';
export default {
    name: 'ToDoItem',
    props: {
        item: Object,
    },
    data() {
        return {
            flag, flagFill
        };
    }
}
</script>

<style>
.item {
    display: flex;
    background-color: #f1f5f8;
    margin-top: 10px;
    line-break: anywhere;
}

.item .actions-group {
    margin-left: auto;
    display: flex;

}
.item .actions-group img {
    margin-left: 10px;
}
</style>