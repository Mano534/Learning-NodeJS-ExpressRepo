import eventEmitter from 'events';

const customEventEmitter = new eventEmitter();

customEventEmitter.on('respond',(s1)=>{
    console.log('this is my respond with no arguments');
    console.log('this is my respond with argument :'+s1);
})

customEventEmitter.on('respond',()=>{
    console.log('this is my respond with no arguments');
})
customEventEmitter.emit("respond", "fuking boi")