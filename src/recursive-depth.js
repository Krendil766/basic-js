module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let level_one = 1;
        for (let key of arr) {
            if (Array.isArray(key)) {
                var count = 1;
                count += this.calculateDepth(key)
            }
            if (count > level_one) {
                level_one = count;
            }
        }
        return level_one;
    }
}