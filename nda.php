<?php

$pdo = new PDO('mysql:host=localhost;dbname=nba_bd;port=3306;charset=utf8', 'root', '');

$sql = "SELECT jogador.nome, pontuacao.cestas FROM pontuacao JOIN jogador ON jogador.id = pontuacao.id_jogador";

$statement = $pdo->prepare($sql);

$statement->execute();


while($results = $statement->fetch(PDO::FETCH_ASSOC)) {

    $result[] = $results;
}

echo json_encode($result);