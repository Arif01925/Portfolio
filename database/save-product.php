<?php
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "chefproduct_nuxt");
if ($conn->connect_error) {
    echo json_encode(["error" => "DB connection failed"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if (
    empty($data['name']) ||
    empty($data['category']) ||
    empty($data['variants']) ||
    !is_array($data['variants'])
) {
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

$insert = "
    INSERT INTO products (name, category, base_size, main_image, ingredients, description)
    VALUES ('$name', '$category', '$base_size', '$main_image', '$ingredients', '$description')
";

if (!$conn->query($insert)) {
    echo json_encode(["error" => "Product insert failed: " . $conn->error]);
    exit;
}

$product_id = $conn->insert_id;

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
        VALUES ($product_id, '$pack_size', $price, $stock, '$dimensions', '$variant_type', $weight_lb, '$image')
    ";
    $conn->query($variant_sql);
}

echo json_encode(["message" => "Product added"]);
?>
