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
console.log(model);
model.forEach((e) => {
    e.onclick = (event) => {
        switch (e.dataset.model) {
            case 'streets':
            case 'city':
                SendMessage (e, event);
                break;
        }
        
    }
});

function SendMessage (e, event) {
    let target = event.target;
        if (target.tagName !== 'BUTTON') return;
        let msg = {};
        msg["action"] = target.dataset.action;
        msg["model"] = e.dataset.model;
        var div = e.querySelectorAll('[data-type]');
        console.log(div)
        msg["request"] = {};
        msg.request["where"] = {};
        msg.request["updata"] = {};
        div.forEach((d) =>{
            if (d.dataset.type === 'where'){
                var inpt = d.querySelectorAll(`[data-type="where"] input`);
                console.log("where")
                console.log(inpt)
                inpt.forEach((i) => {
                    if (i.value.length > 0) msg.request.where[`${i.name}`] = i.value;
                })
            }
            if (d.dataset.type === 'updata'){
                var inpt = d.querySelectorAll(`[data-type="updata"] input`);
                console.log("updata")
                console.log(inpt)
                inpt.forEach((i) => {
                    if (i.value.length > 0) msg.request.updata[`${i.name}`] = i.value;
                })
            }
        })
        /*
        var inpt = document.querySelectorAll(`[data-model=${e.dataset.model}] input`);
        msg["request"] = {"where":{}}
        inpt.forEach((i) => {
            console.log(i.name);
            if (i.value.length > 0) {
                if (i.name === 'updata') {
                    msg.request["updata"] = i.value;
                } else {
                    msg.request.where[`${i.name}`] = i.value;
                }
            }
        })
        */
        msg["admin_name"] = document.getElementsByName('curent_user')[0].innerText;
        console.log('msg2');
        console.log(msg);
        socket.send(JSON.stringify(msg));
}