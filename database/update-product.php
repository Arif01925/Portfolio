<?php
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "chefproduct_nuxt");
if ($conn->connect_error) {
    echo json_encode(["error" => "DB connection failed"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);
$id = $data['id'] ?? null;

if (!$id || empty($data['name']) || empty($data['category'])) {
    http_response_code(400);
    echo json_encode(["error" => "Missing required fields"]);
    exit;
}

$name = $conn->real_escape_string($data['name']);
$category = $conn->real_escape_string($data['category']);
$base_size = $conn->real_escape_string($data['base_size']);
$main_image = $conn->real_escape_string($data['main_image']);
$ingredients = $conn->real_escape_string($data['ingredients']);
$description = $conn->real_escape_string($data['description']);

// Update product
$updateSql = "
    UPDATE products SET
        name='$name',
        category='$category',
        base_size='$base_size',
        main_image='$main_image',
        ingredients='$ingredients',
        description='$description'
    WHERE id=$id
";

if (!$conn->query($updateSql)) {
    echo json_encode(["error" => "Update failed: " . $conn->error]);
    exit;
}

// Delete old variants
$conn->query("DELETE FROM product_variants WHERE product_id = $id");

// Add new variants
foreach ($data['variants'] as $v) {
    if (empty($v['pack_size']) || empty($v['price'])) {
        continue;
    }

    $pack_size = $conn->real_escape_string($v['pack_size']);
    $price = floatval($v['price']);
    $stock = intval($v['stock'] ?? 0);
    $dimensions = $conn->real_escape_string($v['dimensions'] ?? '');
    $variant_type = $conn->real_escape_string($v['variant_type'] ?? '');
    $weight_lb = floatval($v['weight_lb'] ?? 0);
    $image = $conn->real_escape_string($v['image'] ?? '');

    $variant_sql = "
        INSERT INTO product_variants (product_id, pack_size, price, stock, dimensions, variant_type, weight_lb, image)
        VALUES ($id, '$pack_size', $price, $stock, '$dimensions', '$variant_type', $weight_lb, '$image')
    ";
    $conn->query($variant_sql);
}

echo json_encode(["message" => "Product updated"]);
?>
