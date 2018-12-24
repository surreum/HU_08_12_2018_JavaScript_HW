var input = {
    name: 'INPUT',
    data: '',
    setData: function (newData) {
        this.data += newData;
    },
    clearData: function () {
        this.data = '';
    }
};

var div = {
    h: 0,
    w: 0,
    square: function () {
        return this.h * this.w
    }
};

var parent = {
    getName: function () {
        return this.name || 'DEFAULT';        
    }
}

input.__proto__ = parent;
div.__proto__ = parent;

console.log (input.getName()) 
 