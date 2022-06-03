//计分板 最好不要使用字面量

class ScorePanel {
    score = 0;//得分
    level = 1;//等级
    maxLevel: number;//最高等级
    leveUpScore = 10;//等级提升达到的分数
    scoreEle: HTMLElement;//得分标签
    levelEle: HTMLElement;//等级标签
    constructor(maxLevel = 10, levelUpScore = 10) {
        //初始化元素
        this.scoreEle = document.querySelector("#score .title")!;
        this.levelEle = document.querySelector("#level .title")!;
        //初始化等级分数
        this.initScore();
        //设定最高等级
        this.maxLevel = maxLevel;
        //设置等级提升
        this.leveUpScore = levelUpScore;
    }
    //初始化等级分数
    initScore() {
        this.scoreEle.textContent = this.score + "";//因为textContent是字符串类型的,所以转换下
        this.levelEle.textContent = this.level + "";
    }
    //获取得分
    addScore() {
        this.scoreEle.textContent = ++this.score + "";
        //达到等级提升的条件
        if ((this.score % this.leveUpScore) == 0 && this.level < this.maxLevel) {
            this.levelEle.textContent = ++this.level + "";
        }
    }
}

export default ScorePanel;