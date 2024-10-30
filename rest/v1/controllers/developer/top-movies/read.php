<?php
$conn = null;
$conn = checkDbConnection();
$topmovies = new TopMovies($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("topmoviesid", $_GET)) {
    $topmovies->movies_aid = $_GET['topmoviesid'];
    checkId($topmovies->movies_aid);
    $query = checkReadById($topmovies);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($topmovies);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();

