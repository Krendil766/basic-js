module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let one = 1;
        for (let i = 0; i < arr.length; i++){
            if (Array.isArray(arr[i])) {
                var count = 1;
                count+=this.calculateDepth(arr[i])
            }
            if (count > one) {
                one = count;
            }
        }
       return one
    }
}