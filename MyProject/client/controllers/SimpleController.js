function SimpleController (parms) {
    
    const moduleContent = document.querySelector('.module_content');
    
    moduleContent.innerHTML = 
        `<div class="wite_conteiner" style="text-align:center"><span name="curent_user">Редактирование таблицы ${parms.title}</span></div>` +
        `<div class="wite_conteiner">` +
            `<div data-type="where">` +
                `<div id="where_select" class="simple_controller_block_input">` +
                    `<div style="width: 30%;text-align: right;margin-right: 24px;">Выбирите из списка</div>` +
                    `<div id="where_select_fild" style="width: 40%;margin-right: 24px;"></div>` +
                    `<div style="width: 30%;"></div>` +
                `</div>` +
                
                `<div data-type="where" class="simple_controller_block">` +
                    `<div style="width: 30%;text-align: right;margin-right: 24px;">Введите название</div>` +
                    `<div style="width: 40%;margin-right: 24px;display: flex;align-items: center;">` +
                        `<div id="where_id_fild" style="width: 80px;margin-right: 24px;"></div>` +
                        `<div id="where_name_fild" style="width: 100%;margin-right: 24px;"></div>` +
                    `</div>` +
                    `<div id="where_buttons" style="width: 30%;"></div>` +
                `</div>` +
            `</div>` +
        `</div>` +
        `<div class="wite_conteiner">` +
            `<div data-type="updata" class="simple_controller_block">` +
                `<div style="width: 30%;text-align: right;margin-right: 24px;">Изменить название на</div>` +
                `<div id="updata_input_fild" style="width: 40%;margin-right: 24px;"></div>` +
                `<div id="updata_buttons" style="width: 30%;"></div>` +
            `</div>` +
        `</div>` +
        `<div class="wite_conteiner" style="text-align:center">` +
            `<div id="simpleControllerDataTable"  class="data_table_conteiner">` +
            `</div>` +
        `</div>`;
    
    if (parms.hasOwnProperty('select')) {
        console.log('select')
        const whereSelFild = document.getElementById("where_select_fild");
        const selWhere = new XInput();
        const selWhereParam = {
            id:parms.select.inputid,
            type:'select',
            placeholder:'Выбирите из списка',
        };
        whereSelFild.appendChild(selWhere.create(selWhereParam));
        //selWhere.setAttribute('id',parms.select.inputid);
        where_select.style.display = 'flex';
        socket.send(JSON.stringify({
            handler: "InputOptions",
            elementId: parms.select.inputid,
            action: "select",
            table: parms.select.table,
            attributes: parms.select.attributes,
        }))
    }
        
    const whereIdFild = document.getElementById("where_id_fild");
    const idWhere = new XInput();
    const idWhereParam = {
        id:'id',
        type:'input',
        placeholder:'Введите id',
    };
    whereIdFild.appendChild(idWhere.create(idWhereParam));
    
    const whereNameFild = document.getElementById("where_name_fild");
    const nameWhere = new XInput();
    const nameWhereParam = {
        id:'name',
        type:'input',
        placeholder:'Введите наименование',
    };
    whereNameFild.appendChild(nameWhere.create(nameWhereParam));
    
    const btnSelect = new XButton("primary", "m", "Найти");
    btnSelect.setAttribute('data-action','select');
    btnSelect.setAttribute('style','width:80px;');
    const btnSave = new XButton("primary", "m", "Сохранить");
    btnSave.setAttribute('data-action','save');
    btnSave.setAttribute('style','width:100px;');
    const btnDelete = new XButton("outline", "m", "Удалить");
    btnDelete.setAttribute('data-action','delete');
    btnDelete.setAttribute('style','width:80px;');
    btnDelete.setAttribute('id','btnDelete');
    //where_buttons.appendChild(btnSelect);
    where_buttons.appendChild(btnSave);
    where_buttons.appendChild(btnDelete);

    
    socket.send(JSON.stringify({
        handler: "DataTableBuilder",
        elementId: "simpleControllerDataTable",
        function: "DataTableCellFuntion(this.id,['inptid','inptname'])",
        action: "select",
        table: parms.dataTable.table,
        attributes: parms.dataTable.attributes,
    }))
    
    
    /*
    btnSave.onclick (() => {

    })
*/
    
console.log('btnDelete' + btnDelete)

    btnDelete.onclick = (e) => {
        console.log(e.target)
    }
}
