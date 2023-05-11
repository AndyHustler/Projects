class VirticalMenu {
    static VMBODY = 'virtical-menu';
    static VMUP = 'virtical-menu-visible';
    static VMDOWN = 'virtical-menu-dropdown';
    
    constructor () {
        this._body = document.createElement('div');
        this._body.className = this.constructor.VMBODY;
        this.classList = this._body.classList;
    }
    
    create(params) {
        params.a.forEach((at) => {
            let a = document.createElement('a');
            a.setAttribute('href',at.href);
            a.innerText = at.text;
            this._body.appendChild(a);
        });
        if (params.visible) {
            this._body.classList.add(this.constructor.VMUP);
        } else {
            this._body.classList.add(this.constructor.VMDOWN);
        }
        return this._body;
    }
    
    add (cl) {
        this._body.classList.add(cl)
    }
};

