$(document).ready(function(){
	     /* 让ie7,8,9支持input的placeholder属性*/
	     $('input, textarea').placeholder();
        /* 个人/机构切换登录 */
        $('.g_def_login .title span').on('click',function(){
        	var leibie=$(this).data('type');
        	if(leibie==1){
        		$('#user_name').attr('placeholder','手机号/邮箱');
        	}
        	if(leibie==2){
        		$('#user_name').attr('placeholder','机构名称');
        	}
        	$(this).siblings().removeClass('select');
        	$(this).toggleClass('select');
        });
		/* 登录按钮鼠标经过变色 */
		$('#J_login_submit').hover(function(){
			  $(this).toggleClass('change_bgcolor');
		});
		/* 登录按钮点击事件 */
		$('#J_login_submit').on('click',function(){
			  var user_name=$('#user_name');
			  var user_password=$('#user_password');
			  var error_tip=$('.sl-error');
			  if(user_name.val()==''){
			  	  error_tip.removeClass('hide').text('请输入账户名');
			  	  return false;
			  }
			  if(user_password.val()==''){
			  	  error_tip.removeClass('hide').text('请输入登录密码');
			  	  return false;
			  }
			  $(this).addClass('greybg');
			  $('.ui-btn-loading-after').removeClass('hide');


		});

});