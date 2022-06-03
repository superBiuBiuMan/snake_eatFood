//引入食物类
import Food from "./Food";
//引入计分板
import ScorePanel from "./ScorePanel";
//引入蛇
import Snake from "./Snake";

class Control {
    food: Food;//食物类
    snake: Snake;//蛇身类
    scorePanel: ScorePanel;//计分板
    moveDirection: string = "";
    moveLength: number;//移动距离
    isGameOver: boolean = false;//是否游戏结束
    isStart: boolean = false;//是否开始游戏
    constructor(moveLength = 10) {
        this.snake = new Snake();
        this.scorePanel = new ScorePanel();
        this.food = new Food();
        //初始化移动距离
        this.moveLength = moveLength;
        //初始化一些监听
        this.init();
        //移动方向
        // this.move();
    }
    /* 初始化 */
    init() {
        //添加键盘移动事件
        document.addEventListener("keyup", this.moveSnakeHandle.bind(this));
    }
    /* 键盘回调 */
    moveSnakeHandle(event: KeyboardEvent) {
        this.moveDirection = event.key;//存储移动方向
        // 游戏开始
        if (!this.isStart) {
            this.isStart = true;
            this.move();
        }
    }
    /* 蛇移动 */
    move() {
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.moveDirection) {
            case "ArrowUp":
            case "Up":
                //向上移动
                Y -= this.moveLength
                break;
            case "ArrowDown":
            case "Down":
                //向下移动
                Y += this.moveLength;
                break;
            case "ArrowLeft":
            case "Left":
                //向左移动
                X -= this.moveLength;
                break;
            case "ArrowRight":
            case "Right":
                //向右移动
                X += this.moveLength;
                break;
        }
        //检查是否吃到食物
        this.checkEatFood(X, Y);
        try {
            //设置蛇的位置
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (error: any) {
            //碰到墙壁了
            alert(error.message);//弹出错误信息
            //游戏结束
            this.isGameOver = true;
        }

        //当游戏没有结束的时候继续循环
        !this.isGameOver && setTimeout(this.move.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }
    /* 检查是否吃到食物 */
    checkEatFood(x: number, y: number) {
        //蛇头坐标等于食物坐标的时候就表示吃到了
        if (x === this.food.X && y === this.food.Y) {
            // console.log("蛇吃到食物了");
            // 1.食物坐标改变
            this.food.change();
            // 2.得分增加
            this.scorePanel.addScore();
            // 3.身体增加
            this.snake.addBody();
        }
    }
}
export default Control;
// //测试食物代码
// var food = new Food();
// food.change();

// //测试得分版代码
// var score = new ScroePanel();
// // for(var i = 0 ;i< 100;i++){
// //     score.addScore();
// // }

// //测试蛇代码
// var snake = new Snake();
// // snake.addBody();