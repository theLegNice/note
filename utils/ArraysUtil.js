//数组根据角标删除元素 返回对应元素
Array.prototype.remove = function (index) {
    let prop = this[index];
    for (let i = index; i < this.length; i++) {
        if (i !== this.length){
            this[i] = this[i + 1];
        }
    }
    this.length--;
    return prop;
};
//数组根据角标 添加元素
Array.prototype.insert = function (index,ele) {
    let len = this.length;
    for (let i = len; i > index ; i--) {
        this[i] =  this[i-1]
    }
    this[index] = ele;
};