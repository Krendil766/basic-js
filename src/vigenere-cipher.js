class VigenereCipheringMachine {
    constructor(direct) {
        this.isDirect = direct;
    }

    getShift(key) {
        return (
            key[this.indexId++ % index.length].toUpperCase().charCodeAt(0) -
            "A".charCodeAt(0)
        );
    }

    codify(str, key, x) {
        if (!str || !index) throw Error;

        this.indexId = 0;
        let newStr = str.split("").map(l => {
            if (!/[A-Za-z]/.test(l)) {
                return l;
            }

            let letterCharCode = l.toUpperCase().charCodeAt(0),
                offset = "A".charCodeAt(0),
                position = letterCharCode - offset,
                shift = this.getShift(key);

            let newStrCode;
            if (x === "enc") newStrCode = (position + shift) % 26;
            if (x === "dec") newStrCode = (position - shift + 26) % 26;

            return String.fromCharCode(newStrCode + offset);
        });

        return this.isDirect ? newStr.join("") : newStr.reverse().join("");
    }

    encrypt(message, key) {
        return this.codify(message, key, "enc");
    }

    decrypt(encryptedMessage, key) {
        return this.codify(encryptedMessage, key, "dec");
    }
}

module.exports = VigenereCipheringMachine;