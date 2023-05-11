class XButton {
    static XBTN = 'x-button';
    static XBTNPRIM = 'x-button_type_inline';
    static XBTNOUTL = 'x-button_type_outline';
    static SIZEL = 'x-button_size_large';
    static SIZEM = 'x-button_size_medium';
    static SIZES = 'x-button_size_small';

    constructor (design, size, txt) {
        this.btn = document.createElement('button');
        this.btn.className = this.constructor.XBTN;
        if (design === 'outline') {
            this.btn.classList.add(this.constructor.XBTNOUTL);
        } else {
            this.btn.classList.add(this.constructor.XBTNPRIM);
        }
        switch(size){
            case 'l':
                this.btn.classList.add(this.constructor.SIZEL);
                break;
            case 's':
                this.btn.classList.add(this.constructor.SIZES);
                break;
            default:
                this.btn.classList.add(this.constructor.SIZEM);
                break;
        }
        (txt) ? this.btn.innerHTML = txt : this.btn.innerHTML = 'Button';
        return this.btn
    }
}
