module.exports = {
    randomRange: (min, max, floor = false)=>{
        let num = Math.random() * max;
        while(num < min){
            num += num / 5
        }
        return floor ? Math.floor(num) : num
    }
}