// 筛选

export function formatDistance(value){
    return (value/1000).toFixed(2)+'km';
}

export function formatPrice(value){
    return "￥" +value+'起送';
}

export function formatOrder_num(value){
    return "月售" +value+'单';
}
export function formatImg(value){
    if(!value){
        return ""
    }
    var s1 = value.slice(0, 1); // 截取第1个字符 比如： 9
    var s2 = value.slice(1, 3); // 截取第2-3个字符 比如： b9
    var s3 = value.slice(3);    // 截取从第3个字符后的所有字符 比如：c8e482821be2080edcffbb3a8d376png
    var s4 = value.slice(32);   // 截取从第32个字符后的所有字符，取图片后缀名, 比如： png
    return "http://fuss10.elemecdn.com/" + s1 + "/" + s2 + "/" + s3 + "." + s4;
}
