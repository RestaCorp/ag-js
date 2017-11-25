/* Anim-Gradient LIB - fudo.su/ag */
var agJs = {
animate:function(elem, colors, scale){
		var te = "linear-gradient(124deg";
		var o = te;
		for (var i = colors.length - 1; i >= 0; i--) {
			var o = o+", "+colors[i];
		}
		var l = o+")";
		$(elem).css({"background":l, "-webkit-animation":"fGradient 18s ease infinite", "-z-animation":"fGradient 18s ease infinite", "-o-animation":"fGradient 18s ease infinite", "animation":"fGradient 18s ease infinite", "background-size":scale});
	}
};
/* Anim-Gradient LIB - fudo.su/ag */