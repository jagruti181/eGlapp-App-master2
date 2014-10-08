<html>
<head>

    <link rel="stylesheet" type="text/css" href="../css/main.css" />
    <style>
        body{
        background: white;
         }
    </style>
</head>
<body>

<form method="POST" enctype="multipart/form-data">
<?php
$path="../img/default_upload_logo.gif";
if(isset($_POST['reg']))
{
$fname=$_FILES['a']['name'];
$fsize=$_FILES['a']['size'];
$ftype=$_FILES['a']['type'];
$ftmp=$_FILES['a']['tmp_name'];
$randno=rand();
$storage_path="../img/".$_GET['id'].$randno.".jpg";
$storingin="http://localhost/eglapp11/demo/".$storage_path;
if(move_uploaded_file($ftmp,$storingin))
{
//echo "file uploaded";
    $path=$storage_path;
}
}
?>
<?php
echo "<img src=".$path." height='200px' width='200px'>"
    ?>
<input type="file" name="a"/>
<p>
    <input type="submit" class="btn btn-info" name="reg" value="Save Image"/></p>
</form>

</body>
</html>
