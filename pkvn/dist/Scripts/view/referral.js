!function(e){e(["jquery","api","translate"],function(e,t,r){function l(){t.POST("/api/getReferral","",a,o)}function a(t,r,l){var a=e.parseJSON(t);"1"==a.exist?(e("#tblReferralCreate").css("display","none"),e("#tblReferralView").css("display","table")):(e("#tblReferralCreate").css("display","table"),e("#tblReferralView").css("display","none")),e("#txtRefCode").val(a.code),e("#txtRefUrl").val(location.protocol+"//"+location.host+"/?ref="+a.code),e("#btnRefRegister").attr("href",e("#txtRefUrl").val());var o=Math.floor(1e5*Math.random()+899999);if(e("#txtCreateRefCode").val(o),a.referral.length>0){e("#tblReferralList").css("display","table");for(var f=a.referral.split(","),i="",n=0;n<f.length;n++)i+="<tr><td>"+f[n]+"</td></tr>";e("#tblReferralList tbody").html(i)}}function o(e,t){console.log(e+":"+t)}function f(){var r=new Object;r.code=e("#txtCreateRefCode").val();var l=JSON.stringify(r);t.POST("/api/setReferral",l,i,n)}function i(t,r,l){if("1"==t){e("#tblReferralCreate").css("display","none"),e("#tblReferralView").css("display","table");var a=e("#txtCreateRefCode").val();e("#txtRefCode").val(a),e("#txtRefUrl").val(location.protocol+"//"+location.host+"/Register.aspx?ref="+a),e("#btnRefRegister").attr("href",e("#txtRefUrl").val())}}function n(e,t){console.log(e+":"+t)}return function(){l(),e("#btnRefSubmit").click(f)}})}(myGlobalRequire.define);