$(document).ready(function(){
        /* 个人/机构切换注册 */
        $('.g_def_personal_regist .jigou_reg').on('click',function(){
        	$('.g_def_personal_regist').addClass('hide');
        	$('.g_def_jigou_regist').removeClass('hide');
        });
        $('.g_def_jigou_regist .person_reg').on('click',function(){
        	$('.g_def_jigou_regist').addClass('hide');
        	$('.g_def_personal_regist').removeClass('hide');
        });
        /* 注册须知 折叠-展开 */
        $('.arrow').on('click',function(){
        		$(this).toggleClass('up');
        		$('.message').slideToggle();
        });
		/* 登录按钮鼠标经过变色 */
		$('#J_regist_submit').hover(function(){
			  $(this).toggleClass('change_bgcolor');
		});
		/* 登录按钮点击事件 */
		$('#J_regist_submit').on('click',function(){
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
        /* 登录按钮鼠标经过变色 */
		$('.ui-btn-primary').hover(function(){
			  $(this).toggleClass('change_bgcolor');
		});
        /* 个人注册按钮点击事件 */
		$('#J_person_regist_submit').on('click',function(){
			  var user_name=$('#user_id');
			  var user_password=$('#user_password');
			  var user_ok_password=$('#user_ok_password');
			  var phone=$('#phone');
			  var error_tip=$('.sl-error');
			  if(user_name.val()==''){
			  	  error_tip.removeClass('hide').text('请输入账户名');
			  	  return false;
			  }
			  if(user_password.val()==''){
			  	  error_tip.removeClass('hide').text('请输入密码');
			  	  return false;
			  }
			  if(user_ok_password.val()==''){
			  	  error_tip.removeClass('hide').text('请输入确认密码');
			  	  return false;
			  }
			  if(phone.val()==''){
			  	  error_tip.removeClass('hide').text('请输入手机号');
			  	  return false;
			  }
			   if(!(/^1[3|5|8|7][0-9]{9}$/.test(phone.val()))){
			  	  error_tip.removeClass('hide').text('请输入正确的手机号');
			  	  return false;
			  }

			  $(this).addClass('greybg');
			  $('.ui-btn-gregist-after').removeClass('hide');


		});
		/* 注册发送验证码 */
		var num=60;
		var timer=null;
		$('#js-regist-code').on('click',function(){
		      $('#js-regist-code').val('60秒后重发');
		      clearInterval(timer);
			  timer=setInterval(function(){
			  	if(num==0) {
		                clearInterval(timer);
		                $('#js-regist-code').val('重新获取');
		                $('#js-regist-code').removeAttr('disabled');
		                num=10;
		            } else {
		            	num--;
		                $('#js-regist-code').val(num+'秒后重发');
		                $('#js-regist-code').attr('disabled','true');
		            }
			  }, 1000);
		});

});