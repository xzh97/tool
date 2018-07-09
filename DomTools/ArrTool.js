/*
 * @Author: xzh 
 * @Date: 2018-05-09 15:45:20 
 * @Last Modified by:   xzh 
 * @Last Modified time: 2018-05-09 15:45:20 
 */
function ArrTool(){

}
ArrTool.prototype = {
    //数组去重  最彩笔的版本  QAQ没错就是本彩笔 我写的
    removeRepeat:function (arr) {
        var newArr = [];
        //两层循环  只要有值相同的  就删除掉  用delete不影响下标
        for(var i=0; i<arr.length; i++){
            for (var j = i+1; j < arr.length; j++){
                if( arr[i] == arr[j] ){
                    delete arr[j];
                }
            }    
        }
        //for in  把非undefined的都push进新数组   感觉好麻烦
        for( var key in arr){
            if( arr[key] != undefined ){
                newArr.push(arr[key]); 
            }
        }
        return newArr;
    },
    //数组去重2,原理主要是利用indexOf这个方法，如果有查找到相同的  就不会push进来 
    unique: function(arr){
        var n = [];
        for(var i=0; i<arr.length; i++){
            if( n.indexOf(arr[i]) == -1 ){
                n.push( arr[i] );
                console.log(n);
            }
        }
        return n;
    },

    //编写函数将数组的元素的顺序打乱
    changeOrder:function(arr){
        /* var newArr = [];
        while (arr.length>0) {
            var randomNum = Math.floor(Math.random() * arr.length); //0-3
            newArr.push(arr[randomNum]);
            arr.splice(randomNum,1);
        }
        return newArr; */
        return arr.sort(function () {
            return Math.random() > 0.5 ? -1 : 1;
        })
    },

    //求出数组元素的最大值和最小值
/*     getMaxAndMin:function(arr){
        var json = {
            max:'',
            min:''
        };
        arr = arr.sort(function(a,b){return a-b;});
        //console.log(arr);
        json.max = arr[arr.length-1];
        json.min = arr[0];
        return json;
    }, */

    //求出数组元素的最大值
    getArrMax: function (arr) {     
        return Math.max.apply(null, arr);
    },

    //求出数组元素的最大值
    getArrMin: function (arr) { 
        return Math.min.apply(null, arr);
    },

    //从数组中随机获取元素
    getRandomIndex:function(arr){
        return arr[ Math.floor(Math.random() * arr.length) ];
    },

    //求数组元素的和与平均值
    getSumAndAverage:function(arr){
        var json = {
            sum:'',
            avg:'',
        };
        var sum = 0,avg = 0;
        for(var key in arr){
            sum += arr[key];
        }
        avg = sum / arr.length;
        json.sum = sum;
        json.avg = avg;
        return json;
    },

    //改变传入的数组，将数组中第 n(从 0 开始算 ) 个元素放到数组的开头
    putFirst:function(arr,index){
        arr.unshift(arr[index]);
        arr.splice(index+1, 1);
        return arr;  
    },

    //将数组按age字段的值进行排序
    sortParam:function(arr){ 
        /* var newArr = [];var a;
        for(var i=0; i<arr.length-1; i++){
            for(var j=i+1; j<arr.length; j++){
                if (arr[i].age > arr[j].age) {
                    a = arr[i];
                    arr[i] = arr[j];
                    arr[j] = a;
                    //newArr.push( arr[i] );
                    //console.log(arr[i]);
                }
            }   
        }
        return arr; */

        arr.sort(function (a, b) {
            return a.age < b.age ? -1 : 1;
        })
        return arr;
    },

    //查找数组中age大于18的对象
    getAgeMoreThan:function(arr){
        /* var newArr = [];
        for(var key in arr){
            if(arr[key].age > 18){
                newArr.push(arr[key]);
            }
        }
        return newArr; */
        return arr.filter(function (item) {
            return item.age > ages;
        })
    }


}
