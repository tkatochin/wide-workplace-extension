/*
 *
 * This program is licensed under the MIT License.
 * Copyright 2014, aike (@aike1000)
 *
 */


//////////////////////////////////
var AnoRippleCircle = function(ctx, x, y) {
	this.ctx = ctx;
	this.age = 0;
	this.maxAge = 20;
	this.x = x;
	this.y = y;
}

AnoRippleCircle.prototype.draw = function() {
	if (this.age < this.maxAge) {
		var r = this.age * 6;

		var alpha = (0.5 - this.age / this.maxAge / 2).toFixed(2);
		this.ctx.strokeStyle = 'rgba(200, 200, 200, ' + alpha + ')';
		this.ctx.lineWidth = 8;

		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, r, 0, Math.PI*2, false);
		this.ctx.stroke();

		this.age++;
	}
}

///////////////////////////////////////////////////////
var VisibleTouchAno = function(ctx) {
	this.ctx = ctx;
	this.type = -1;
}

VisibleTouchAno.prototype.circle = function() {
	this.type = 2;
}

VisibleTouchAno.prototype.createObject = function(x, y) {
	return new AnoRippleCircle(this.ctx, x, y);
}

///////////////////////////////////////////////////////

$(function() {
	visibletouch.ano = new VisibleTouchAno(visibletouch.ctx);
	visibletouch.circle   = function() { visibletouch.ano.circle(); };
});