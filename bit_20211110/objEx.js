//객체리터럴

const apple = {
    type: "macintosh",
    color: "red",
    getInfo: function () {
        return this.color + ' ' + this.type + ' apple'
    }
}

console.log(apple.getInfo())