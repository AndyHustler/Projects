const socket = new WebSocket('ws://localhost:5000/')

socket.onopen = () => {
    socket.send(JSON.stringify({
        action: "connection",
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

let model = document.querySelectorAll('[data-model]');
    //console.log(model);
model.forEach((e) => {
    e.onclick = (event) => {
        //console.log(e.dataset.model)
        switch (e.dataset.model) {
            case 'streets':
                SendMessage (e, event, 'streets');
                break;
            case 'city':
                SendMessage (e, event, 'city');
                break;
        }
    }
});

function SendMessage (e, event, model) {
    let target = event.target;
        if (target.tagName !== 'BUTTON') return;
        let msg = {};
        msg["action"] = target.dataset.action;
        msg["model"] = e.dataset.model;
        var inpt = document.querySelectorAll(`[data-model=${model}] input`);
        console.log(inpt);
        msg["request"] = {"where":{}}
        inpt.forEach((i) => {
            msg.request.where[`${i.name}`] = i.value;
        })
        msg["admin_name"] = document.getElementsByName('curent_user')[0].innerText;
        console.log('msg');
        console.log(msg);
        socket.send(JSON.stringify(msg));
}