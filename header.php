<html>

<?php
function url( $address = '' ) {
    $http = ( $_SERVER['HTTPS'] === 'on' ) ? 'https://' : 'http://';
    $url = ( str_contains( $_SERVER['HTTP_HOST'], 'test.local' ) ) ?     '/non-wp/rhodents/' : '/';
    echo $http . $_SERVER['HTTP_HOST'] . $url . $address;
}

function is_home() {
    if ( $_SERVER['REQUEST_URI'] === '/' || $_SERVER['REQUEST_URI'] === '/non-wp/rhodents/' ) {
        return true;
    }

    return false;
}
?>

<head>
    <title>Rhodents - Rhode Island's Two Cutest Hamsters</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript" charset="utf-8"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-FS5YYLWVFC"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-FS5YYLWVFC');
    </script>

    <link rel="stylesheet" href="<?php url('/css/rhodents.css?ts=2024053-0017'); ?>">

    <?php if ( is_home() ): ?>
        <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
        <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
        <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
    <?php endif; ?>

</head>

<body>

    <div class="container">
        <div class="hero">
            <a href="<?php url(); ?>">
                <img src="<?php url('assets/rhodents_logo.png'); ?>" alt="Rhodents Logo"/>
            </a>
            <p class="subhead">Two of the world’s cutest hamsters living their best life in Rhode Island</p>
            
            <div class="main-nav">
                <a href="<?php url(); ?>">Meet the Girls</a>
                <a href="<?php url('history'); ?>">History</a>
                <?php /* <a href="<?php url('enclosures'); ?>">Enclosures</a> */ ?>
                <a href="<?php url('photos'); ?>">Photos</a>
            </div>
        </div>
    </div>