import { createStore, useStore } from "./reactive/reactive";

createStore({
    selected: ''
})

export function Title(){
    const [ selected ] = useStore('selected');
    return <h2>Star wars - {selected}</h2>
}