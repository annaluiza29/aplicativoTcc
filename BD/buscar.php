<?php 

include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$buscar = '%' .@$_GET['buscar']. '%';

$query = $pdo->prepare("SELECT * from novopet where nome LIKE '$buscar' or tipo LIKE '$buscar' order by id desc");

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {  }      

    $dados[] = array(
        'id' => $res[$i]['id'],
        'nome' => $res[$i]['nome'],        
        'porte' => $res[$i]['porte'],
        'raca' => $res[$i]['raca'],
        'tipo' => $res[$i]['tipo'],
    );
}

if(count($res) > 0){
    $result = json_encode(array('success'=>true, 'resultado'=>$dados));
}else{
    $result = json_encode(array('success'=>false, 'resultado'=>'0'));
}

echo $result;

?>