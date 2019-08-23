/**
 * @see  第一道题：考察随机游走算法
 * @see   十分钟的时间，回到原点，本质是一个随机离散的过程
 * @see   'n':北；‘s’:南;'e':东；‘w’:西
 * @see  场景：二维坐标系，某人提前达到坐标点，提前了十分钟，每次走一个方向需要一分钟（标准网格状，节点与相邻节点的距离都是一致的）
 */
function walkValidator(walk){
    // 这里的walk是随机传入，如：['n','s','n','s','n','s','n','s']   依次往哪个方向
    // 只有十分钟，四个方向，需要回到原点   ，如果能回到原点  返回true,不能返回  false 
    
    // 在二维空间，标准网格，如果所跨街口数为奇数，则肯定回不了原点
    if(walk.length%2===0){ // 偶数
        // 如果是偶数，就得看方向了
        var  ns=0;
        var  ew=0;
        for(let i=0;i++;i<walk.length){
            if(walk[i]==='n') ns++
            else if(walk[i]==='s') ns--
            else if(walk[i]==='e') ew++
            else if(walk[i]==='w') ew--
        }
        if(ns===0&&es===0) return true

    }else{ // 奇数
        return  false
    }
}

/**
 * @see 问题2：根据天气情况，计算最少雨伞数量的方法
 * @see weather的可能值为  [‘下雨’,’晴天’,’下雨’,’下雨’,’晴天’,’晴天’]
 * @see 如果始终下雨，最少数量的伞为1把
 */
function amoutOfUmbrellas(weather){
    // 只有两种天气情况，姑且抽象为 0 ： 晴天 ； 1： 下雨
    // 只有一个时段不计算
    // 我们发现这么一个规律，只要找准相邻两天的差异值和数组的头和尾我们就能确定下来需要带伞的数量
    // eg： [0,1,0,1,0,1]  代表晴天下雨 晴天下雨  晴天下雨    3把伞
    // eg:  [1,1,1,1,1,1]  1把伞
    // eg:  [0,0,0,0,0,0]  0把伞
    // eg:  [1,0,0,1,1,1]  1+1=2  2把伞 
    // eg:  [1,0,1,0,1,1]  1+1+1=3  3把伞 
    // eg:  [0,1,1,0,1,0]  2把伞
    // eg:  [0,1,0,0,1,0]  2把伞

    // 进过以上的抽象归纳：我们得出结论：

    // 有连续的1计数为1个1 ，否则，有多少个1就需要带多少把伞
    if(weather.length<=1) return false // 返回false 代表不计算
    else {
        // 我们首先先数组连续相等值部分进行去重
        let newArr=[weather[0]]
        for(let i=1;i<=weather.length;i++){
            if (weather[i]!==newArr[newArr.length-1]){
                newArr.push(weather[i])
            }
        }
        // 拿到新的数组
        let num=0;
        newArr.filter(item=>{
            if(item==='下雨'){
                num+=1
            }
        })
        return num
    }
    
}

console.info(amoutOfUmbrellas(['下雨','晴天','下雨','晴天','下雨','晴天'])) // 成功拿到值，哈哈，兴奋

/** 媳妇儿说11点一定要睡觉，所以只有一个小时了，应该时间范围内能解出来吧
 * 第一眼看到同构，相互映射，立刻想到了高中化学的同分异构体，那个手相，满满的肥忆有木有
 * @see 问题3：
 * @see 请设计一个方法isomorphValidator，此方法能够确认两给定字符串是否为同构（Isomorphic）。
 * @see 其实这道题的难点还是在于如何抽象问题，抽象出可度量的模型  
    同构的定义在此为：两个字符串A、B中每个字符都能互相映像，则字符串A和B可称为同构。
    例如字符串A为’ABB’，字符串B为’CDD’。则字符串A的A可映像到字符串B的C，字符串A的B可映像道字符串B的D，彼此存在互向映像关系，所以同构。
    字符串C为’ABAB’，字符串D为’CD’，因为字符串C的第三和第四字符在字符串D中没有字符可映像，所以字符串C和D非同构。

 */

// 1.常规解法，hash 映射
function isomorphValidator (a,b) {
    // 首先如果两个字符的长度不一致的话，肯定非同构
    if(a.length!==b.length){
        return false
    }else{
        let hash1=new Map()
        let hash2=new Map()
        for(let i=0;i<a.length;i++){
            let S=a[i];
            let T=b[i];
            if(hash1.has(S)){
                if(hash1.get(S) !== T) return false
            }else if(hash2.has(T)){
                if(hash2.get(T) !== S) return false
            }else{
                hash1.set(S, T)
                hash2.set(T, S)
            }
        }
        return true
    }
}
// 2. 用js中的 indexOf ，返回首次出现字符串的位置索引
function isomorphValidator(a,b){
    for(let i = 0; i < a.length; i++) {
        if(a.indexOf(a[i]) != b.indexOf(b[i])) return false
    }
    return true
}

