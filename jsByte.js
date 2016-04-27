/*
 * Class for storing and manipulating bytes. Bit manipulation uses indexes (0=1, 1=2, 2=4, 3=8, etc.)
 * @param mixed val
 *      This should be a numeric value, but may be hex or other base besides 10 if "base" is set
 * @param int base (optional)
 *      This should be the base of the original value, defaults to 10
 * @param int size (optional)
 *      The number of bits this "byte" contains, defaults to 8
 */
 
function Byte(val, base, size){
    if(this.constructor != Byte) return new Byte(val, base, size);
    this._s = typeof size == 'undefined' ? 8 : size;
    this._i = parseInt(val, base);
    this.setBits();
}

//get value of specific bit
Byte.prototype.getBit = function(b){
    return this._b[(this._s-1)-b];
}

//set value for specific bit
Byte.prototype.setBit = function(b, v){
    this._b[(this._s-1)-b] = String(v);
    return this.setInt();
}

//Set bits based on current integer
Byte.prototype.setBits = function(){
    this._b = (this._i).toString(2).split('');
    Array().unshift.apply(this._b, Array(this._s-this._b.length).fill('0'));
    return this;
}
//Set integer based on current bits
Byte.prototype.setInt = function(){
    this._i = parseInt(this.toString(), 2);
    return this;
}

//invert bits (all 0=1, all 1=0)
Byte.prototype.invert = function(){
    this._i = ~this._i & (Math.pow(2,this._b.length)-1);
    return this.setBits();
}

//flip bits (00110101 = 10101100)
Byte.prototype.flip = function(){
    this._b = this._b.reverse();
    return this.setInt();
}

//convert byte to different base (b=16 for hex)
Byte.prototype.toBase = function(b){
    return this._i.toString(b);
}

//Type casting methods
Byte.prototype.toString = function(){
    return this._b.join('');
}
Byte.prototype.toArray = function(){
    return this._b;
}
Byte.prototype.valueOf = function(){
    return this._i;
}


/*
 * Byte casting methods
 */
Number.prototype.toByte = String.prototype.toByte = function(base, size){
    return new Byte(this, base, size);
}
