<?php
$conn = null;
$conn = checkDbConnection();
$topseries = new TopSeries($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("topseriesid", $_GET)) {
    $topseries->movies_aid = $_GET['topseriesid'];
    checkId($topseries->movies_aid);
    $query = checkReadById($topseries);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($topseries);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();

