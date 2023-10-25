<?php 
include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$valor = @$postjson['valor'];

$query = $pdo->query("SELECT * FROM estado_botao");
$res = $query->fetchAll(PDO::FETCH_ASSOC);
$total_reg = @count($res);


if($valor == 'true'){
	$res = $pdo->prepare("UPDATE estado_botao SET valor = 0");	

}else{
	$res = $pdo->prepare("UPDATE estado_botao SET valor = 1");
	
}

$res->execute();


?>
  