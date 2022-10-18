class ExtendedClock extends Clock {
    constructor({template, precision = '1000'}){ //if parameter precision is null then it uses default value
        super({template});
        this.precision = precision;
    }

    start(){
        super.render();
        this.timer = setInterval(() => super.render(), this.precision);
    }
}
