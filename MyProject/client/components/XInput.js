class XInput {
    
    static XIBODY = 'x-drop-down__block x-drop-down__block-passive';
    static XISEARCH = 'x-drop-down__search';
    static XIINPUT = 'x-drop-down__input';
    static XICLEAR = 'x-clear__button';
    static XIDDB = 'x-drop-down__button';
    static XIDDLIST = 'x-drop-down__list';
    static XILISTITEM = 'x-drop-down__list-item';
    static PH_INPUT = 'Введите текст';
    static PH_SELECT = 'Выбирайте из списка';
    static PH_DATALIST = 'Начните ввод или выбирите из списка';
    
    constructor () {
        this._body = document.createElement('div');
        this._body.className = this.constructor.XIBODY;
        this.value = '';
        this.index = '';
        this._inpt = document.createElement('input');
        this._inpt.className = this.constructor.XIINPUT;
        this._inpt.setAttribute('autocomplete','off');
        this._inpt.setAttribute('value',this.value);
        this._clrb = document.createElement('button');
        this._clrb.className = this.constructor.XICLEAR;
        this._clrb.innerHTML = '✘';
        this._ddb = document.createElement('button');
        this._ddb.className = this.constructor.XIDDB;
        this._lst = document.createElement('div');
        this._lst.className = this.constructor.XIDDLIST;
    }
    
    create(params) {
        const sch = document.createElement('div');
        sch.className = this.constructor.XISEARCH;
        sch.appendChild(this._inpt)
        if(params.hasOwnProperty('type')){
            params.hasOwnProperty('input_type') ? this._inpt.setAttribute('type',params.input_type) : this._inpt.setAttribute('type','text');
            if (params.type === 'select' || params.type === 'datalist' || params.type === 'input') sch.appendChild(this._clrb);
            if (params.hasOwnProperty('id')) {
                this._inpt.setAttribute('id','inpt' + params.id);
                this._lst.setAttribute('id','lst' + params.id);
            }
            if (params.hasOwnProperty('value')) this.value = params.value;
            if (params.hasOwnProperty('onchange')) this._inpt.setAttribute('onchange',params.onchange);
            if (params.hasOwnProperty('placeholder')) {
                this._inpt.setAttribute('placeholder',params.placeholder);
            } else {
                switch(params.type){
                    case 'input':
                        this._inpt.setAttribute('placeholder',this.constructor.PH_INPUT);
                        break;
                    case 'select':
                        this._inpt.setAttribute('placeholder',this.constructor.PH_SELECT);
                        break;
                    case 'datalist':
                        this._inpt.setAttribute('placeholder',this.constructor.PH_DATALIST);
                        break;
                };
            };
            if (params.type === 'select' || params.type === 'disabled') this._inpt.setAttribute('disabled','disabled');
            switch(params.type){
            case 'input':
                sch.appendChild(this._clrb);
                break;
            case 'select':
            case 'datalist':
                sch.appendChild(this._clrb);
                sch.appendChild(this._ddb);
                break;
            }
            this._body.appendChild(sch)
            if (params.type === 'select' || params.type === 'datalist') {
                this._body.appendChild(this._lst);
                if (params.hasOwnProperty('options')) this.addOpions(params.options);
            }
        }
        this._body.addEventListener("click", this._bodyEvents());
        /*
        //Интересный вариант, но не работает если input desabled
        this._body.addEventListener("blur", () => {
            this._body.classList.remove("x-drop-down__bloc-focus");
            this._body.classList.add("x-drop-down__block-passive");
        }, true);
        */
        
        return this._body;
    }
    
    _bodyEvents (e) {
        
        document.onclick = () => {
            let el = document.querySelectorAll(".x-drop-down__button-rotate")
            el.forEach((e) => {
                e.classList.remove("x-drop-down__button-rotate")
            })
            el = document.querySelectorAll("div.js-dropdown")
            el.forEach((e) => {
                e.classList.remove("js-dropdown")
            })
            el = document.querySelectorAll("div.x-drop-down__bloc-focus")
            el.forEach((e) => {
                e.classList.remove("x-drop-down__bloc-focus");
                e.classList.add("x-drop-down__block-passive");
            })
        }
        
        this._body.onclick = (event) => {
            let el = document.querySelectorAll("div.x-drop-down__bloc-focus")
            el.forEach((e) => {
                e.classList.remove("x-drop-down__bloc-focus");
                e.classList.add("x-drop-down__block-passive");
            })
            this._body.classList.remove("x-drop-down__block-passive");
            this._body.classList.add("x-drop-down__bloc-focus");
            el = document.querySelectorAll("div.x-drop-down__block-passive .js-dropdown")
            el.forEach((e) => {
                e.classList.remove("js-dropdown")
            })
            el = document.querySelectorAll(".item_hide")
            el.forEach((e) => {
                e.classList.remove("item_hide")
            })
            el = document.querySelectorAll("div.x-drop-down__block-passive .x-drop-down__button");
            el.forEach((e) => {
                e.classList.remove("x-drop-down__button-rotate")
            })
            switch(event.target.classList[0]) {
                case "x-drop-down__list-item":
                    this._inpt.value = event.target.innerText;
                    this.value = event.target.innerText;
                    this.index = event.target.dataset.id;
                    console.log('value = ' + this.value + ': index = ' + this.index)
                    this._clrb.classList.add("x-clear__button-visible");
                    this._lst.classList.remove("js-dropdown");
                    this._ddb.classList.remove("x-drop-down__button-rotate");
                    break;
                case "x-clear__button":
                    this._inpt.value = "";
                    this._lst.classList.remove("js-dropdown");
                    let items = document.querySelectorAll("div.x-drop-down__bloc-focus .x-drop-down__list-item");
                    items.forEach(function(el) {
                        if (el.classList.contains('item_hide')) el.classList.remove('item_hide');
                    });
                    this._ddb.classList.remove("x-drop-down__button-rotate");
                    event.target.classList.remove("x-clear__button-visible")
                    break;
                case "x-drop-down__button":
                    if (this._lst.classList.contains("js-dropdown")) {
                        this._lst.classList.remove("js-dropdown");
                    } else {
                        this._lst.classList.add("js-dropdown");
                    }
                    if (!event.target.classList.contains("x-drop-down__button-rotate")) {
                        event.target.classList.add("x-drop-down__button-rotate");
                    } else {
                        event.target.classList.remove("x-drop-down__button-rotate");
                    }
                    break;
                default:
                    break;
            }
            event.stopPropagation();
        }
        
        this._body.oninput  = (event) => {
            const xinput = event.target;
            this.value = xinput.value;
            if(xinput.classList.contains("x-drop-down__input")){
                let el = this._lst;
                if (el) el.classList.add("js-dropdown");
                el = this._clrb;
                if (xinput.value.length > 0) el.classList.add("x-clear__button-visible");
                el = this._ddb;
                if (el) el.classList.add("x-drop-down__button-rotate");
                let items = this._lst.children;
                for (let i = 0; i < items.length; i++) {
                    if (items[i].innerText.toLowerCase().indexOf(xinput.value.toLowerCase()) === -1) {
                        items[i].classList.add('item_hide');
                    } else {
                        if (items[i].innerText.toLowerCase().indexOf(xinput.value.toLowerCase()) > 0) {
                            items[i].classList.add('item_hide');
                        } else {
                            items[i].classList.remove('item_hide');
                        };
                    };
                };
            };
            
        }
    }
    
    addOpions (op, id) {
        if(this._lst){
            if(Array.isArray(op)){
                op.forEach((v, i) => {
                    let el = document.createElement('div')
                    el.innerText = v;
                    el.className = this.constructor.XILISTITEM;
                    (id) ? el.setAttribute('data-id',id) : el.setAttribute('data-id',i);
                    this._lst.appendChild(el);
                });
            } else {
                let el = document.createElement('div')
                el.innerText = op;
                el.className = this.constructor.XILISTITEM;
                if (id) el.setAttribute('data-id',id);
                this._lst.appendChild(el);
            }
        } else {
            console.log('class Xinput: лист опций не создан!');
        }
    }

    setAttribute (name,val) {
        this._inpt.setAttribute(name,val);
    }
}

/*
const container = document.querySelector(".conteiner");


const spravPeople = new TestInput()

const spPeople = {
        id:'sprav_people',
        type:'datalist',//'select','datalist','disabled'
        name:'Organisations.Организация',
        placeholder:'Введите фамилию',
        onchange:'SpravSelectUpdate(this.value,this.name)',
        options:['Иванов','Петров','Сидоров','Орлов','Мокач','Спирин','Бакулин','Попов','Ярков','Баринов','Цукерман','Логунов','Старовойтов','Попов','Темерязев','Сычкин','Шмаков','Васильев'],
    }

    
const spravOrg = new TestInput()
    
    

const spOrg = {
        id:'sprav_org',
        type:'select',//'select','datalist','disabled'
        name:'Organisations.Организация',
        placeholder:'Выберите организацию',
        onchange:'SpravSelectUpdate(this.value,this.name)',
    };

    


container.appendChild(spravPeople.create(spPeople));
container.appendChild(spravOrg.create(spOrg));
spravOrg.addOpions(['ЭХЗ','Гринатом','Атомохрана','Березка','Мастеркласс','Чистый дом','Атомспецтранс','Барракуда','Байкал','Рога и Копыта']);
//container.onclick = (e) => {console.log(e.target)}
//spravPeople.OnClick()
*/