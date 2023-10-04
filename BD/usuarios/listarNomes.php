<?php

// Conexao com BD
include_once "conexao.php";

// QUERY para recuperar registro do banco de dados
$query_sits = "SELECT id, nome FROM novopet ORDER BY nome ASC";
//$query_sits = "SELECT id, nome FROM situacoes WHERE id = 100 ORDER BY nome ASC";
$result_sits = $conn->prepare($query_sits);
$result_sits->execute();

if(($result_sits) and ($result_sits->rowCount() != 0)){
    while($row_sit = $result_sits->fetch(PDO::FETCH_ASSOC)){
        extract($row_sit);
        $dados[] = [
            'id' => $id,
            'nome' => $nome
        ];
    }
    $response = ['status' => true, 'dados' => $dados];
}else{
    $response = ['status' => false, 'msg' => "<p style='color: #f00'>Erro: Nenhuma situação encontrada, entre em contato com o ...!</p>"];
}

echo json_encode($response);