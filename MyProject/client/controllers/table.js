try {
        var ansver = JSON.parse(receivedData);
        console.log("ansver: " + ansver);
        switch(ansver.options.RequestHeader) {
            case "user":
                if(ansver.options.Status !== "error") {
                    userAdmin = true;
                    userAdminName = ansver.options.Status;
                    console.log("Имя пользователя - " + userAdminName);
                    userstatus.innerText = "пользователь " + userAdminName;
                } else {
                    userAdmin = false;
                    userstatus.innerText = "не прошел авторизацию";
                }
                break;
            case "DataTableList":
                console.log("case DataTableList. JSON");
                var x = Number(ansver.options.ElementID);
                var d = document.getElementById('dt'+x+'body');
                d.innerHTML='';
                d.insertAdjacentHTML('beforeend', '<div id="dt'+x+'list" class="dtlist"></div>');
                let dtlistid = 'dt'+x+'list';
                AddDataTable(x);
                var tbody = document.getElementById('dt'+x).getElementsByTagName('TBODY')[0];
                let DTableRowCount = 0;
                ansver.data.forEach((x) =>{
                    DTableRowCount++;
                    var newRow = tbody.insertRow(-1);
                    newRow.setAttribute("id",x.keyt);
                    newRow.setAttribute("onclick",DtableCellFuntion[x]);
                    let clr = DTableRowCount % 2?"dtablerowd":"dtablerowl";
                    newRow.setAttribute("class",clr);
                    Object.values(x).forEach((y) =>{
                        var newCell = newRow.insertCell(-1);
                        newCell.align = "center";
                        newCell.innerText = y;
                        newCell.setAttribute("borderColor","#d1ab00");
                    });
                });
                if(DTableRowCount > 10) {DataTableShowRang(x,10);};
                console.log("case DataTableList: RowCount = " + DTableRowCount);
                document.getElementById('dtablerowcount'+x).innerHTML = "<b>Найдено записей: "+DTableRowCount+"</b>";
                modal_wait.style.display = "none";
                break;
 
            default:
                break;
        }
    } catch (e) {
        console.log("ansver: ");
        console.log(ansver);
        console.log("Ошибка JSON.parse" + e);
        
    }
    
//server java

