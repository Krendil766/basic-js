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

    removeLink(pos) {
        if (typeof pos !== 'number' || pos >= this.getLength() || pos <= 0) {
            this.arr = [];
            throw Error();
        } else {
            this.arr.splice(pos - 1, 1);
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