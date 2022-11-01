function Queue() {

   this.elements = [];

}

Queue.prototype.enqueue = function(e) {

    return this.elements.push(e);

}

