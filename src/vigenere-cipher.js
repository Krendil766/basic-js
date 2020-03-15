class VigenereCipheringMachine {
    constructor(direct = true) {
        this.isDirect = direct;
    }

    getShift(index) {
        return (
            index[this.indexId++ % index.length].toUpperCase().charCodeAt(0) -
            "A".charCodeAt(0)
        );
    }

    codify(str, index, x) {
        if (!str || !index) throw Error;

        this.indexId = 0;
        let newStr = str.split("").map(l => {
            if (!/[A-Za-z]/.test(l)) {
                return l;
            }

            let letterCharCode = l.toUpperCase().charCodeAt(0),
                offset = "A".charCodeAt(0),
                position = letterCharCode - offset,
                shift = this.getShift(index);

            let newStrCode;
            if (x === "enc") newStrCode = (position + shift) % 26;
            if (x === "dec") newStrCode = (position - shift + 26) % 26;

            return String.fromCharCode(newStrCode + offset);
        });

        return this.isDirect ? newStr.join("") : newStr.reverse().join("");
    }

    encrypt(message, index) {
        return this.codify(message, index, "enc");
    }

    decrypt(encryptedMessage, index) {
        return this.codify(encryptedMessage, index, "dec");
    }
}

module.exports = VigenereCipheringMachine;