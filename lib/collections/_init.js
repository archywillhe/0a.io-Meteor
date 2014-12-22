//ಠ_ಠ
//prototype-base inheritance inspired by CoffeeScript
ಠ_ಠextends = function (child, parent) {
    _.extend(child,parent);
    child.prototype = new (function(){this.constructor = child;})();
    child.prototype.__proto__ = parent.prototype;
    return child;
}
//ಠ_ಠ