//按钮移入移除动画效果
$('.rake').mouseenter(function(){
    $(this).addClass('rubberBand animated infinite')
}).mouseleave(function(){
    $(this).removeClass('rubberBand animated infinite')
})
//创建截图
var cut = new ImgClip({
    canvas : 'canvas', // canvas id
    width:$(window).width(), //canvas 宽度
    height:$(window).height(), //canvas 高度
    fileObj : 'file', // file id
    cutBtn : 'save', // cut btn id
    resultObj : 'img', // result img id
    rotateR : 'rotateR',
    cutScale : 3/4, // 高:宽
    cutW : '300' // '数字'或者'winW'关键字，裁切宽度，随屏幕宽或自己设置
});
//点击选择本地图片预览
$('.file').on('change','#file',function(){
    $('#canvas').css('display','block')
    $('#img').css('display','none')
    $(this)[0].value=''
})

//取消预览
$('.cancle').click(function(){
    $('#canvas').css('display','none')
    $('#img').css('display','block')
})

//保存截图
$('#save').click(function(){
    $('#canvas').css('display','none')
    $('#img').css('display','block')
})

//点击上传图片
$('.upload').click(function(){
    var url = $('#img').attr('src')
    var file = dataURItoBlob(url)
    var fd=new FormData();
    fd.append('file',file);
    //如果需要多图上传只需要把对象添加进数组就可以了，向这样：fd.append('file[]',file);
    $.ajax({
       url:"php/upload.php",
       type:"POST",
       data:fd,
       processData: false,
       contentType: false,
       success:function(data){
           console.log(data)
       }
    }); 
})
function dataURItoBlob (base64Data) {
   var byteString;
   if (base64Data.split(',')[0].indexOf('base64') >= 0)
       byteString = atob(base64Data.split(',')[1]);
   else
       byteString = unescape(base64Data.split(',')[1]);
   var type = base64Data.split(',')[0].split(':')[1].split(';')[0];
   var ia = new Uint8Array(byteString.length);
   for (var i = 0; i < byteString.length; i++) {
       ia[i] = byteString.charCodeAt(i);
   }
   // canvas.toDataURL 返回的默认格式是 image/png
   return new Blob([ia], {type: type});
}