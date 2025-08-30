<?php
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "chefproduct_nuxt");

$id = $_GET['id'] ?? null;
if (!$id) {
    echo json_encode(["error" => "Missing product ID"]);
    exit;
}

$productSql = "SELECT * FROM products WHERE id = $id";
$productRes = $conn->query($productSql);
$product = $productRes->fetch_assoc();

$variantSql = "SELECT * FROM product_variants WHERE product_id = $id";
$variantRes = $conn->query($variantSql);
$variants = [];

while ($row = $variantRes->fetch_assoc()) {
    $variants[] = $row;
}

$product['variants'] = $variants;

echo json_encode($product);
?>
