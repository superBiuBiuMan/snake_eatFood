// 食物类
class Food {
    element: HTMLElement;
    constructor() {
        //注意感叹号,代表忽略这个严格模式下错误,因为可能会出现获取不到的情况
        this.element = document.getElementById("food")!;
    }
    //获取当前食物的x坐标
    get X() {
        return this.element.offsetLeft;
    }
    //获取当前食物的y坐标
    get Y() {
        return this.element.offsetTop;
    }
    //改变当前食物的位置
    change() {
        //舞台为300 * 300 ,水平,垂直可以移动的距离都是0-290(减去了自身位置)
        //产生随机数 Math.round(Math.random()*29)产生0-29(包含0,29)的随机数
        let left = Math.round(Math.random() * 29) * 10;
        let top = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + "px";
        this.element.style.top = top + "px";
    }
}

export default Food;