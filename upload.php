
<?php
//$path="../img/default_upload_logo.gif";
$fname=$_FILES['file']['name'];
$fsize=$_FILES['file']['size'];
$ftype=$_FILES['file']['type'];
$ftmp=$_FILES['file']['tmp_name'];
$randno=rand();
$storage_path="../img/".$randno.".jpg";
$storingin="../eglapp11/img/".$randno.".jpg";
if(move_uploaded_file($ftmp,$storingin))
{
//echo "file uploaded";
    echo $path=$storage_path;
}
?>