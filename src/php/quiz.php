<?php

    // header('Content-Type: application/json');
    // header('Access-Control-Allow-Origin: *');
    // header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    // header('Access-Control-Allow-Headers: Content-Type');
    // header('Access-Control-Allow-Credentials: true');
    
    if(!isset($_POST)) return;

    $to      = 'karkasdliavas@yandex.ru';
    $subject = 'Заявка с каркасдлявас.рф';
    $message = '';

    $fields = array(
        'form' => 'Форма',
        'type' => 'Тип объекта',
        'architecture' => 'Архитектура',
        'square' => 'Площадь',
        'appointment' => 'Назначение дома',
        'gift' => 'Подарок',
        'soc' => 'Куда отправить',
        'phone' => 'Телефон',
    );

    $response = array();
    $redirect = '/success.html';

    foreach ($_POST as $key => $value) {
        if (is_array($value)) {
            $arr_values = join(', ', $value);
            $message .= "{$fields[$key]}: $arr_values" . "\r\n";
            continue;
        }
        $message .= "{$fields[$key]}: $value" . "\r\n";
    }

    $headers = 'From: noreply@каркасдлявас.рф' . "\r\n" .
    'Reply-To: noreply@каркасдлявас.рф' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    if(mail($to, $subject, $message)) {
        $response['success'] = true;
        $response['message'] = 'Сообщение отправлено';
        $response['redirect'] = $redirect;
    }else {
        $response['success'] = false;
        $response['message'] = 'Сообщение не отправлено';
    }
    
    echo json_encode($response);