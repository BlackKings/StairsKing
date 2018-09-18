var colorList = ["#3CB371", "#EE30A7", "#CAFF70", "#B3EE3A", "#9932CC", "#8B1A1A", "#7FFF00",
    "#20B2AA", "#FFC125", "#2F4F4F", "#0000EE"]

var sonLadderNumber = colorList.length;

var LadderNumber = 7; //界面的阶梯数

//大阶梯的宽度和高度list
var ladderWidthSet = [352, 385, 429, 484, 539, 594, 660];
var ladderHeightSet = [35, 37, 39, 41, 43, 45, 48];
var ladderMarginTop = [48, 45, 43, 41, 39, 37, 35];

// // 开始遍历制造子阶梯
for (n = 0; n < LadderNumber; n++) {
    sonDivId = makeLadder(n);
    for (s = 0; s < sonLadderNumber; s++) {
        makeLadderSon(s, sonLadderNumber, sonDivId);
    }
}


var a = colorList;
var b = ["c", "b"]
var c = [a, b];
console.log(c)

//制造阶梯
function makeLadder(sonId) {
    var bigDiv = document.getElementById("bigDiv_01");
    var bigDivWidth = parseInt(bigDiv.style.width); //获取大Div的宽度
    var bigDivHeight = parseInt(bigDiv.style.height);  //获取大DIV的高度
    var sonDivWidth = ladderWidthSet[sonId]; //设置子DIV宽度
    var sonDivHeight = ladderHeightSet[sonId]; //设置子DIV高度
    var sonDiveId = "divSon_" + sonId;  //设置DIV的id  numberId是传参

    divSon = document.createElement("div");
    divSon.setAttribute("id", sonDiveId);
    divSon.setAttribute("style", "width:" + sonDivWidth + "px;" + "height:" + sonDivHeight + "px;" + "margin-top:50px;")
    bigDiv.appendChild(divSon); //在大div中添加子div


    console.log("divWidth:    " + sonDivWidth)
    return sonDiveId;
}

//制造阶梯块
function makeLadderSon(n, ladderNumber, sonDivId) {
    var bigLadder = document.getElementById(sonDivId);
    var ladderWidth = parseInt(bigLadder.style.width); //获取大阶梯的长度   注意js获取得到的是文本型，需要提取Int
    var ladderHeight = bigLadder.style.height;  //获取大阶梯的高度 注意js获取得到的是文本型, 因为不拿来计算，所以不用提取Int
    var sonWidth = ladderWidth / ladderNumber; //子阶梯的宽 长度/个数
    var sonHeight = ladderHeight; //子阶梯的高 == 大阶梯的高度
    var sonCorlor = colorList[n]; //设置画布的颜色
    var sonId = "leaderId_" + n; //设置id名字  n是传参


    ladderSon = document.createElement("canvas");
    ladderSon.setAttribute("id", sonId);  //给元素添加Id
    ladderSon.setAttribute("style", "background:" + sonCorlor + ";" + "width:" + sonWidth + "px;"
        + "height:" + sonHeight + ";"); //设置元素的样式
    bigLadder.appendChild(ladderSon);
    console.log(sonWidth, sonHeight);
}


