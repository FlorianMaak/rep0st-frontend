class Rep0st {
    constructor() {
        this.container = document.getElementById('content');
        this.pages = this.container.getElementsByClassName('page');
        this.firstPage = this.pages[0];
        this.currentIndex = 0;
        this.maxIndex = this.pages.length - 1;
        this.logo = document.getElementById('logo');
        this.buttons = {
            prev: document.getElementById('prev'),
            next: document.getElementById('next'),
        };

        this.container.classList.add('js-active');

        this.addListeners();
    }

    addListeners() {
        this.buttons.next.onclick = e => {
            e.preventDefault();
            
            if (this.currentIndex < this.maxIndex) {
                this.scrollContainer();
            }
        };

        this.buttons.prev.onclick = e => {
            e.preventDefault();

            if (this.currentIndex > 0) {
                this.scrollContainer(false);
            }
        };

        this.logo.onclick = e => {
            e.preventDefault();
            this.currentIndex = -1;
            this.scrollContainer();
        };
    }

    scrollContainer(scrollLeft = true) {
        scrollLeft ? this.currentIndex += 1 : this.currentIndex -= 1;

        this.buttons.next.disabled = this.currentIndex === this.maxIndex;
        this.buttons.prev.disabled = this.currentIndex === 0;
        this.firstPage.style.marginLeft = '-' + (this.currentIndex * 100) + '%';
    }
}

new Rep0st();
