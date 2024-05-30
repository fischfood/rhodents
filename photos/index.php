<?php include( '../header.php' ); ?>
<?php $i = 0; ?>

<div class="container">
    <h1>Photos!</h1>
    <h3>Work In Progress</h3>
    <p>Right now, I mostly have photos from the first few months of their lives, since it's 2:15am as of writing this and I don't feel like combing through more, so check back soon for more hamster cuteness and shenanigans!</p>
    <br>
    <p>Also, I'm going to preface this by saying there are going to be way more photos of Jupiter. This isn't some favorite child kind of thing, it's just due to Jupiter's much more social and early bird personality, if you can call 9 PM early.</p>
</div>

<?php $photo_data = [
    'Baby Jupes' => [
        'subtitle' => 'June 11th, 2022 - 12 days old!',
        'photos' => [
            'Jupiter_June_11_1.jpg' => '',
            'Jupiter_June_11_2.jpg' => '', 
        ]
    ],
    'Jupiter Vs The Wheel' => [
        'videos' => [
            'IMG_1868.mp4' => 'June 17th, 2022',
            'IMG_2183.mp4' => 'June 30th, 2022'
        ]
    ],
    'Welcome Home' => [
        'subtitle' => 'July 9th - 12th, 2022',
        'photos' => [
            'IMG_5332.jpg' => '',
            'IMG_6464.jpg' => '',
        ],
        'vertical' => [
            'IMG_5304.jpg' => '',
            'IMG_5308.jpg' => '',
            'IMG_6395.jpg' => '',
            'IMG_6408.jpg' => '',
            'IMG_6450.jpg' => '',
            'Mushroom_7_11_2022.jpg' => '',
            'IMG_6486.JPG' => ''
        ],
    ],
    'Settling In' => [
        'subtitle' => 'Late July, 2022',
        'photos' => [
        ],
        'vertical' => [
            'IMG_5479.jpg' => '',
            'IMG_5484.jpg' => '',
            //'IMG_6710.jpg' => '',
            'IMG_5715.jpg' => '',
            'IMG_5710.jpg' => '',
            'IMG_5830.jpg' => '',
            'IMG_5833.jpg' => '',
        ],
    ],
    'A Little Clumsy at Times' => [
        'subtitle' => 'October, 2022',
        'videos' => [
            'IMG_7102.mp4' => 'Help...me...up!',
            'IMG_7107.mp4' => 'Aaand there I go.'
        ]
    ],
    'Fan Art' => [
        'photos' => [
            'TGE_Mushroom.png' => '"Mushroom" - Courtesy of theghostegg',
            'TGE_Jupiter.png' => '"Jupiter" - Courtesy of theghostegg',
        ],
    ],
];
?>

<?php foreach( $photo_data as $section => $data ): ?>
    <?php if ( $i % 2 === 0 ): ?>
        <img src="<?php url('assets/white-top.png'); ?>" />
        <div class="bg-white">
    <?php endif; ?>

    <div class="container photo-container pt pb">
        <h2><?php echo $section; ?></h2>
        <?php if ( ! empty( $data['subtitle'] ) ): ?>
            <p><?php echo $data['subtitle']; ?></p>
        <?php endif; ?>

        <?php if ( array_key_exists( 'photos', $data ) ): ?>
            <div class="flex equal top equal">
                <?php foreach( $data['photos'] as $file => $caption ): ?>
                    <?php if ( $caption === '<br>' ): ?>
                        </div><div class="flex equal top equal">
                    <?php else: ?>
                        <div>
                            <img src="<?php url('/images/' . $file ); ?>" />
                            <figcaption><?php echo $caption; ?></figcaption>
                        </div>
                    <?php endif; ?>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>

        <?php if ( array_key_exists( 'vertical', $data ) ): ?>
            <div class="flex equal top quarter">
                <?php foreach( $data['vertical'] as $file => $caption ): ?>
                    <?php if ( $caption === '<br>' ): ?>
                        </div><div class="flex equal top quarter">
                    <?php else: ?>
                        <div>
                            <img src="<?php url('/images/' . $file ); ?>" />
                            <figcaption><?php echo $caption; ?></figcaption>
                        </div>
                    <?php endif; ?>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>

        <?php if ( array_key_exists( 'videos', $data ) ): ?>
            <div class="flex equal top quarter">
                <?php foreach( $data['videos'] as $file => $caption ): ?>
                    <div>
                    <video width="288" height="512" controls>
                        <source src="<?php url( 'images/' . $file ); ?>" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                        <figcaption><?php echo $caption; ?></figcaption>
                    </div>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </div>

    <?php if ( $i % 2 === 0 ): ?>
        </div>
        <img src="<?php url('assets/white-bottom.png'); ?>" />
    <?php endif; ?>

    <?php $i++; ?>
<?php endforeach; ?>

<div class="container">
	<div class="mt mb">
		<h2>"Juuupiter! She's a really cute hamster. Jupiter! Running on the wheel now."</h2>
		<span>- Michelle, sung to the tune of <a href="https://youtu.be/vHQL71zQxiU?si=Kumaa0s91NqgHE85&t=15" target="_blank">"Cynthia Work-Out" from Rugrats</a></span>
	</div>
</div>

<?php include( '../footer.php' ); ?>