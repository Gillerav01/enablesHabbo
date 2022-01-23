<?php

include('conexion.php');

$sql = "SELECT * FROM handitems;";
$result = mysqli_query($conn, $sql);

$rows = mysqli_num_rows($result);

$array = array();

if ($rows > 0) {
  while($row = mysqli_fetch_assoc($result)) {
    $array['handitems'][] = array('id' => $row['id'], 'idHanditem' => $row['idHanditem'], 'desHanditem' => $row["desHanditem"], 'fotoHanditem' => base64_encode($row['fotoHanditem']));
  }
}

mysqli_close($conn);
echo json_encode($array);

?>