<?php
header("Content-Type: application/json");
error_reporting(0);
ini_set('display_errors', 0);

$conn = new mysqli("localhost", "root", "", "chefproduct_nuxt");

if ($conn->connect_error) {
    echo json_encode(["error" => "DB connection failed"]);
    exit;
}

$result = $conn->query("SELECT * FROM products");
$products = [];

while ($row = $result->fetch_assoc()) {
    $product_id = $row['id'];
    $variant_result = $conn->query("SELECT * FROM product_variants WHERE product_id = $product_id");

    $variants = [];
    while ($v = $variant_result->fetch_assoc()) {
        $variants[] = $v;
    }

    $row['variants'] = $variants;
    $products[] = $row;
}

echo json_encode($products);
?>
