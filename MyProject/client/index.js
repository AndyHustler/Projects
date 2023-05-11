MainPage ();

const socket = new WebSocket('ws://localhost:5000/')

socket.onopen = () => {
    socket.send(JSON.stringify({
        action: "connection",
        id: 555,
        username: "Andy"
    }))
}

socket.onmessage = (event) => {
    console.log('Пришло сообщение', event.data);
    const rs = JSON.parse(event.data);
    //EventHandler(rs.data);
   if ('handler' in rs) window[rs.handler](rs);
}

socket.onclose = () => {

}

socket.onerror = () => {

}

function EventHandler(dat){
    if (typeof dat === 'undefined') return;
    dat.forEach((v) => {
        city.addOpions(v.street_name,v.id);
    })

}

function InputOptions (p) {
    const y = document.getElementById(p.elementId)
    console.log(y)
    p.data.forEach((v) => {
        let el = document.createElement('div')
        el.innerText = v[p.attributes[1]];
        el.className = 'x-drop-down__list-item';
        if (v[p.attributes[0]]) el.setAttribute('data-id',v[p.attributes[0]]);
        y.appendChild(el);
    })
    
}

function DataTableBuilder (p) {
    const div = document.getElementById(p.elementId)
    //console.log(p)
    const table = document.createElement('table');
    table.className = 'data_table';
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    p.attributes.forEach((v) => {
        let th = document.createElement('th');
        th.innerText = v[1];
        tr.appendChild(th)
    })
    thead.appendChild(tr);
    table.appendChild(thead);
    const tbody = document.createElement('tbody');
    let DTableRowCount = 0;
    p.data.forEach((v) =>{
        DTableRowCount++;
        var newRow = tbody.insertRow(-1);
        newRow.setAttribute("id",'dttr' + v.ID);
        newRow.setAttribute("onclick",p.function);
        let clr = DTableRowCount % 2 ? "data_table_row_dark" : "data_table_row_bright";
        newRow.className = clr;
        Object.values(v).forEach((vv) =>{
            var newCell = newRow.insertCell(-1);
            newCell.align = "center";
            newCell.innerText = vv;
            newCell.setAttribute("borderColor","#d1ab00");
        });
    });
    table.appendChild(tbody);
    div.appendChild(table);
}

function DataTableCellFuntion(tableId, elementsArrey) {
    const row = document.getElementById(tableId);
    elementsArrey.forEach((v,i) => {
        document.getElementById(v).value = row.children[i].innerText
    })
}

let model = document.querySelectorAll('[data-table]');
//console.log(model);
model.forEach((e) => {
    /*
    e.onclick = (event) => {
        switch (e.dataset.table) {
            case 'Street':
            case 'City':
                SendMessage (e, event);
                break;
        }
        
    }
    */
});

function SendMessage (e, event) {
    let target = event.target;
    //console.log(target)
        //if (target.tagName !== 'BUTTON') return;
        if (!target.dataset.action) return;
        let msg = {};
        msg["action"] = target.dataset.action;
        msg["table"] = e.dataset.table;
        var div = e.querySelectorAll('[data-type]');
        //console.log(div)
        msg["request"] = {};
        msg.request["where"] = {};
        msg.request["updata"] = {};
        div.forEach((d) =>{
            if (d.dataset.type === 'where'){
                var inpt = d.querySelectorAll(`[data-type="where"] input`);
                //console.log("where")
                //console.log(inpt)
                inpt.forEach((i) => {
                    if (i.value.length > 0) msg.request.where[`${i.name}`] = i.value;
                })
            }
            if (d.dataset.type === 'updata'){
                var inpt = d.querySelectorAll(`[data-type="updata"] input`);
                //console.log("updata")
                //console.log(inpt)
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
