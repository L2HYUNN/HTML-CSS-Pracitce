class NotificationBar {
    constructor() {
        this.barE1 = document.createElement('div');
        this.barE1.style.display = 'none';
        this.barE1.classList.add("notification-bar");
        document.body.appendChild(this.barE1);
    }

    show(message, position = 'top') {
        if(position === 'top'){
            this.barE1.style.top = '10px';
            this.barE1.style.bottom = '';
        }

        if(position === 'bottom'){
            this.barE1.style.top = '';
            this.barE1.style.bottom = '10px';
        }
        this.barE1.style.left = '10px';
        this.barE1.style.right = '10px';
        this.barE1.style.display = '';
        this.barE1.innerHTML = message;
    }
}

const noti = new NotificationBar();

setTimeout(() => {
    noti.show('Welcome to JavaScript 200');
}, 1000);

setTimeout(() => {
    noti.show('Welcome to JavaScript 200', 'bottom');
}, 3000);