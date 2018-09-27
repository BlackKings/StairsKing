var sAdderSize = 11;

function adderList(tLength, tWidth) {
    var
        sLength = tLength / sAdderSize,
        sWidth = tWidth,
        test = testKing(sLength, sWidth)

    return test;
}


//设置 x y 坐标
function testKing(sLength, sWidth) {
    var
        sAdderX = sLength / 2,
        sAdderY = sWidth / 2,
        s = [];
    for (let i = 0; i < sAdderSize; i++) {
        s.push([Math.round(sAdderX), Math.round(sAdderY)]);
        sAdderX += sLength;
    }
    return s;
}


function dowAdder(tLength, tWidth, times) {
    var
        test1 = tLength,
        test2 = tWidth,
        aaa = [];
    for (let i = 0; i < times; i++) {
        let bb = []
        bb = adderList(test1, test2);
        aaa.push(bb);
        test1 *= 0.89;
        test2 *= 0.89;
    }
    return aaa;
}
var kingtest = dowAdder(1000, 80, 8);
console.log(kingtest[1]  +"\n" + kingtest[kingtest.length -1]);