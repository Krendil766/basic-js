const chainMaker = {

    arr: [],

    getLength() {
        return this.arr.length;
    },

    addLink(value) {
        if (value !== undefined) {
            this.arr.push(`( ${value} )`);
        } else {
            this.arr.push(`(  )`);
        }
        return this;
    },

    removeLink(position) {
        if (typeof position !== 'number' || position >= this.getLength() || position <= 0) {
            this.arr = [];
            throw Error();
        } else {
            this.arr.splice(position - 1, 1);
            return this;
        }
    },
    reverseChain() {
        this.arr.reverse();
        return this;
    },
    finishChain() {
        let str = this.arr.join('~~');
        this.arr = [];
        return str;
    }
};

module.exports = chainMaker;