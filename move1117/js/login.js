$(document).ready(function(){
		/* 个人/机构切换登录 */
        $('.g_def_login .title span').on('click',function(){
        	var leibie=$(this).data('type');
        	if(leibie==1){
        		$('#user_name').attr('placeholder','手机号/邮箱');
        		$('#user_name').removeClass('select_bg');
        	}
        	if(leibie==2){
        		$('#user_name').attr('placeholder','机构名称');
        		$('#user_name').addClass('select_bg');
        	}
        	$(this).siblings().removeClass('select');
        	$(this).toggleClass('select');
        });
        /* 登录按钮点击事件 */
		$('#login').on('submit',function(){
			  var user_name=$('#user_name');
			  var user_password=$('#user_password');
			  var error_tip=$('.km-dialog-mask');
			  if(user_name.val()==''){
			  	  error_tip.removeClass('hide');
			  	  error_tip.find('.km-dialog-content').text('请输入账户名');
			  	  return false;
			  }
			  if(user_password.val()==''){
			  	  error_tip.removeClass('hide');
			  	   error_tip.find('.km-dialog-content').text('请输入密码');
			  	  return false;
			  }
			  error_tip.removeClass('hide');
		});
		/* 注册页面按钮点击事件 */
		$('#regist').on('submit',function(){
			  var user_name=$('#user_name');
			  var user_password=$('#user_password');
			  var user_okpassword=$('#user_password_ok');
			  var user_phone=$('#user_phone');
			  var user_code=$('#user_code');
			  var error_tip=$('.km-dialog-mask');
			  if(user_name.val()==''){
			  	  error_tip.removeClass('hide');
			  	  error_tip.find('.km-dialog-content').text('请输入账户名');
			  	  return false;
			  }
			  if(user_password.val()==''){
			  	  error_tip.removeClass('hide');
			  	   error_tip.find('.km-dialog-content').text('请输入密码');
			  	  return false;
			  }
			  if(user_okpassword.val()==''){
			  	  error_tip.removeClass('hide');
			  	   error_tip.find('.km-dialog-content').text('请输入确认密码');
			  	  return false;
			  }
			  if(user_phone.val()==''){
			  	  error_tip.removeClass('hide');
			  	   error_tip.find('.km-dialog-content').text('请输入手机号');
			  	  return false;
			  }
			  if(user_code.val()==''){
			  	  error_tip.removeClass('hide');
			  	   error_tip.find('.km-dialog-content').text('请输入验证码');
			  	  return false;
			  }
			  error_tip.removeClass('hide');
		});
		/* 遮罩层中确定按钮事件 */
		$('.km-dialog-buttons').on('click',function(){
			  $('.km-dialog-mask').addClass('hide');
		});
});