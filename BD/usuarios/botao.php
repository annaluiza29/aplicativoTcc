<?php 
include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$novoValor = $_POST["valor"];

// Atualiza o valor no banco de dados
$sql = "UPDATE estado_botao SET valor = '$novoValor' WHERE id = 1";

?>
  