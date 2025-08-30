<?php
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "chefproduct_nuxt");

$id = $_GET['id'] ?? null;
if (!$id) {
    echo json_encode(["error" => "Missing ID"]);
    exit;
}

// Delete product variants first
$conn->query("DELETE FROM product_variants WHERE product_id = $id");

// Then delete the product
$conn->query("DELETE FROM products WHERE id = $id");

echo json_encode(["message" => "Product deleted"]);
?>
