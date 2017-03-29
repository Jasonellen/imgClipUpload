<?php
	header('Access-Control-Allow-Origin:*');
	//处理文件
	if(!file_exists('./img')){
		mkdir('./img');
	}
	$file = $_FILES['file']['tmp_name'];  //获取文件路径
	$newName = $_FILES['file']['name']; //获取文件的名字
	$res = move_uploaded_file($file,"./img/{$newName}"); //原名上传到指定文件夹

	print_r($_FILES)
?>