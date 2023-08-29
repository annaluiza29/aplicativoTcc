<?php 
require_once("../conexao.php");
$tabela = 'alimentacao';

$postjson = json_decode(file_get_contents('php://input'), true);

$id = @$postjson['id'];
$nome = @$postjson['nome'];
$periodo = @$postjson['periodo'];
$horario = @$postjson['horario'];
$quantidade = @$postjson['quantidade'];



//validar email
$query = $pdo->query("SELECT * FROM $tabela where id = '$id'");
$res = $query->fetchAll(PDO::FETCH_ASSOC);
$total_reg = @count($res);


if($id == "" || $id == "0"){
	$res = $pdo->prepare("INSERT INTO $tabela SET nome = :nome, periodo = :periodo, horario = :horario, quantidade = :quantidade");	

}else{
	$res = $pdo->prepare("UPDATE $tabela SET nome = :nome, periodo = :periodo, horario = :horario, quantidade = :quantidade where id = '$id'");
	
}


$res->bindValue(":nome", "$nome");
$res->bindValue(":periodo", "$periodo");
$res->bindValue(":horario", "$horario");
$res->bindValue(":quantidade", "$quantidade");

$res->execute();


$result = json_encode(array('mensagem'=>'Salvo com sucesso!', 'sucesso'=>true));

echo $result;

?>