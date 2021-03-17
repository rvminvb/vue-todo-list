<template>
    <div class='item' >
       {{item.name}}
        <div class='actions-group'>
            <img
                v-bind:src='item.priority ? flagFill : flag'
                alt='flag'
                width='25px'
                @click='$emit("mark", item.id)'
            />
            <img
                src='../assets/dump.svg'
                alt='trash bin'
                width='25px'
                @click='$emit("remove", item.id)'
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

<style lang="sass" scoped>
@import ../assets/sass/ToDoItem
</style>