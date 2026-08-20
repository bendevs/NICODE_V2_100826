<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $targetPhoneNumber = "59100000000";

    // Sanitizar y obtener los datos enviados por POST
    $name    = isset($_POST['name']) ? trim($_POST['name']) : '';
    $phone   = isset($_POST['phone']) ? trim($_POST['phone']) : '';
    $service = isset($_POST['service']) ? trim($_POST['service']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';

    // Validación básica de campos obligatorios
    if (empty($name) || empty($phone) || empty($service)) {
        die('Por favor, completa los campos obligatorios.');
    }

    $lines = [
        '=============================',
        '🛠️ *NUEVA SOLICITUD DE SERVICIO*',
        '=============================',
        '',
        "👤 *Cliente:* {$name}",
        "📱 *Teléfono:* {$phone}",
        "💻 *Servicio solicitado:* *{$service}*"
    ];

    if (!empty($message)) {
        array_push(
            $lines,
            '',
            '---------------------------------------------',
            '📝 *Detalle del requerimiento:*',
            "_{$message}_"
        );
    }

    $lines[] = '';
    $lines[] = '=============================';

    $rawText = implode("\n", $lines);
    $encodedMessage = urlencode($rawText);

    // Enlace directo hacia WhatsApp
    $whatsappURL = "https://wa.me/{$targetPhoneNumber}?text={$encodedMessage}";

    // Redireccionar al usuario a WhatsApp
    header("Location: {$whatsappURL}");
    exit;
}
?>
