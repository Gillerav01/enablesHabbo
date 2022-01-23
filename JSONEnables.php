<?php

include('conexion.php');

$sql = "SELECT * FROM enables;";
$result = mysqli_query($conn, $sql);

$rows = mysqli_num_rows($result);

$array = array();

if ($rows > 0) {
  while($row = mysqli_fetch_assoc($result)) {
    $array['enables'][] = array('id' => $row['id'], 'idEnable' => $row['idEnable'],'desEnable' => $row['desEnable'],'categoria' => $row['categoria'], 'fotoEnable' => base64_encode($row['fotoEnable']));
  }
}

mysqli_close($conn);
echo json_encode($array);

?>