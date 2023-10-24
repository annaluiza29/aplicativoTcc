<?php

// Conexao com BD
include_once('../conexao.php');



$postjson = json_decode(file_get_contents('php://input'), true);


$query = $pdo->prepare("SELECT id, nome FROM novopet ORDER BY nome ASC");

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);



for ($i=0; $i < count($res); $i++) { 
      $dados[] = array(
        'id' => $res[$i]['id'],
        'nome' => $res[$i]['nome']      

    );

}


if(count($res) > 0){
    $result = json_encode(array('success'=>true, 'resultado'=>@$dados));
}else{
    $result = json_encode(array('success'=>false, 'resultado'=>'0'));
}

echo $result;

?>