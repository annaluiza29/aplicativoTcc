<?php 
require_once("../conexao.php");
$tabela = 'novopet';

$postjson = json_decode(file_get_contents('php://input'), true);

$id = @$postjson['id'];
$nome = @$postjson['nome'];
$porte = @$postjson['porte'];
$raca = @$postjson['raca'];
$tipo = @$postjson['tipo'];



//validar email
$query = $pdo->query("SELECT * FROM $tabela where id = '$id'");
$res = $query->fetchAll(PDO::FETCH_ASSOC);
$total_reg = @count($res);


if($id == "" || $id == "0"){
	$res = $pdo->prepare("INSERT INTO $tabela SET nome = :nome, porte = :porte, raca = :raca, tipo = :tipo");	

}else{
	$res = $pdo->prepare("UPDATE $tabela SET nome = :nome, porte = :porte, raca = :raca, tipo = :tipo where id = '$id'");
	
}


$res->bindValue(":nome", "$nome");
$res->bindValue(":porte", "$porte");
$res->bindValue(":raca", "$raca");
$res->bindValue(":tipo", "$tipo");

$res->execute();


$result = json_encode(array('mensagem'=>'Salvo com sucesso!', 'sucesso'=>true));

echo $result;

?>