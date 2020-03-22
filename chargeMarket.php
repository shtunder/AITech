<?php
// On autorise Ajax
header('Access-Control-Allow-Origin: *');

// On vérifie qu'on utilise la méthode GET
if($_SERVER['REQUEST_METHOD'] == 'GET'){
    // On se connecte à la BDD
    require_once('connect.php');

    $sql = "SELECT * , MIN(prix) FROM market WHERE produits='HP' " ;

    $query = $db->prepare($sql);

    //$query->bindValue(':produit', $_GET['donne'], PDO::PARAM_INT);    
   $rep= $query->execute();
  
    $result = $query->fetchAll();

    http_response_code(200);

    echo json_encode($result);
    
    require_once('close.php');

}else{
    http_response_code(405);
    echo 'Méthode non autorisée';
}