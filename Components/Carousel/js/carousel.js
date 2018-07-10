//复用轮播图
function Carousel(){
		this.index = 0;
		this.len = 0;
		this.oTimer = null;
		this.clone = null;

		this.settings = {
			effect: 'slide', // 轮播图切换方式
			autoPlay:false, //是否自动轮播
			delay: 2000 // 隔多久切换一次
		}
	}
Carousel.prototype.init = function(oParent,options) {
	this.oParent = $('#'+oParent);
	this.len = this.oParent.find(".slide-box a").length;
	var This = this;
	for(var key in options){
		//console.log(options[key]);
		if(key == 'effect'){
			this.settings.effect = options[key];
		}else if(key == 'autoPlay'){
			this.settings.autoPlay = options[key];
		}else if(key == 'delay'){
			this.settings.delay = options[key];
		}
	}

	this.oParent.find('.btn-right').on('click',function(){
		This.index = This.index < This.len-1 ? ++This.index : 0;
		This.changeTo(This.settings.effect);
		This.oParent.find(".slide-dot li").removeClass("active");
		This.oParent.find(".slide-dot li").eq(This.index).addClass('active');		
	})
	this.oParent.find('.btn-left').on('click',function(){
		This.index = This.index > 0 ? --This.index : 2;
		This.changeTo(This.settings.effect);
		This.oParent.find(".slide-dot li").removeClass("active");
		This.oParent.find(".slide-dot li").eq(This.index).addClass('active');		
	})
	this.oParent.find('.slide-dot li').on('click',function(){
		This.index = $(this).index();
		This.changeTo(This.settings.effect);
		This.oParent.find(".slide-dot li").removeClass("active");
		$(this).addClass('active');
	})

	if(this.settings.autoPlay){
		this.autoRun();
	}
	
};
Carousel.prototype.autoRun = function(){
	var This = this;
	this.oTimer = setInterval(function(){
		This.index = This.index < This.len-1 ? ++This.index : 0;
		This.changeTo(This.settings.effect);
		This.oParent.find(".slide-dot li").removeClass("active");
		This.oParent.find(".slide-dot li").eq(This.index).addClass('active');
	},This.settings.delay);
}
Carousel.prototype.changeTo = function(effect){
	if(effect == 'slide'){
		this.oParent.find(".slide-box").addClass('absolute').animate({left:this.index*-1000+'px'});
	}else if(effect == 'fade'){
		this.oParent.find(".slide-box a").addClass('absolute').fadeOut();
		this.oParent.find(".slide-box a").eq(this.index).fadeIn();
	}	
}