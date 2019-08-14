$(document).ready(function(){
		/* 导航划过事件 */
		$('.top_nav_tool li').mouseenter(function(){
				$(this).addClass('active');
				$(this).find('a.leave').addClass('active');
				$(this).find('.top-nav-list').removeClass('hide');
		});
		$('.top_nav_tool li').mouseleave(function(){
				$(this).addClass('active');
				$(this).find('a.leave').removeClass('active');
				$(this).find('.top-nav-list').addClass('hide');
		});
		/* 二级页面鼠标经过banner图片 图片高亮显示 */
		$('.show_highlight').mouseenter(function(){
				$(this).find('.sibmaster').stop().fadeOut("slow");
		});
		$('.show_highlight').mouseleave(function(){
				$(this).find('.sibmaster').stop().fadeIn("slow");
		});
		/* 首页鼠标经过banner图片 图片高亮显示 */
		$('.banner,.index_part2_l').mouseenter(function(){
				$(this).find('.master').stop().fadeOut("slow");
		});
		$('.banner,.index_part2_l').mouseleave(function(){
				$(this).find('.master').stop().fadeIn("slow");
		});
		/* 首页鼠标经过右侧图片 图片高亮显示 */
		$('.show_pic').mouseenter(function(){
				$(this).find('.master').fadeOut("slow");
		});
		$('.show_pic').mouseleave(function(){
				$(this).find('.master').fadeIn("slow");
		});
});