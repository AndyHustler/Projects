const btn = document.getElementById('btn')
const socket = new WebSocket('ws://localhost:5000/')

socket.onopen = () => {
    socket.send(JSON.stringify({
        method: "connection",
        id: 555,
        username: "Andy"
    }))
}

socket.onmessage = (event) => {
    console.log('Пришло сообщение', event.data)
}

socket.onclose = () => {

}

socket.onerror = () => {

}

btn.onclick= () =>{
    socket.send(JSON.stringify({
        message:"Hallo server!",
        method: "message",
        id: 555,
        username: "Andy"
    }))
    socket.send(JSON.stringify({
        message:"It for UPDATE or ADD!",
        method: "post",
        id: 555,
        username: "Andy"
    }))
    socket.send(JSON.stringify({
        message:"It my be SELECT!",
        method: "get",
        id: 555,
        username: "Andy"
    }))
    socket.send(JSON.stringify({
        message:"It for DELETE!",
        method: "delete",
        id: 555,
        username: "Andy"
    }))
}