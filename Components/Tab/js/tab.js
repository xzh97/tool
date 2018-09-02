
//选项卡组件
function Tab(tabBox){
	this.oParentBox = null;
	this.oBtn = null;
	this.oDiv = null;
	this.oTimer = null;

	this.settings = {
		event:'click',
		delay:0,
	}
}
Tab.prototype.init = function(tabBox,options){
	this.oParentBox = document.querySelector(tabBox);
	console.log(this.oParentBox.children);
	this.oBtn = this.oParentBox.querySelectorAll("button");
	this.oDiv = this.oParentBox.querySelectorAll("div");
	var This = this;

	for(var key in options){
		this.settings[key] = options[key];
	}
	for(var i=0; i<this.oBtn.length; i++){
		this.oBtn[i].index = i;
		this.oBtn[i].addEventListener(this.settings.event, function () {
			var _this = this;
			if (This.settings.delay) {
				This.oTimer = setTimeout(function () {
					This.change(_this);
				}, This.settings.delay);
			} else {
				console.log("delay0");
				This.change(this);
			}
		})
	}
	
}

Tab.prototype.change = function (obj){
	for(var j=0;j<this.oBtn.length; j++){
		this.oBtn[j].className = "";
		this.oDiv[j].className = "";
	}
	obj.className = "active";
	this.oDiv[obj.index].className = "show";
}