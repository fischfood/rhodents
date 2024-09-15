<?php include( 'header.php' ); ?>
<?php include('wheel_data.php'); ?>

<?php
date_default_timezone_set('America/New_York');

$start_date = new DateTime(date("2022/05/30"));
$end_date = new DateTime( "today" );
$dd = date_diff($start_date,$end_date);

$now = time(); // or your date as well
$your_date = strtotime("2022-05-30");
$datediff = $now - $your_date;
?>

<div class="container">
	<h1 id="meet-the-girls">Meet the Girls!</h1>

	<?php /*
	<p>Much like their dad, these girls are New Jersey transplants.<br>
	Much like their mom, they have no plans to leave Rhode Island.</p>
	*/ ?>


	<div class="flex equal top meet">
		<div class="meet-container meet-jupiter">
			<img src="<?php url('assets/jupes.jpg'); ?>" />
			<h2>Jupiter</h2>
			<div class="meet-stats">
				<ul>
					<li>
						<strong>Nicknames</strong>
						Jupes, Jupey Poops, Jupiter Poopiter, <br> Jupey Mother F'in Poopies
					</li>
					<li>
						<strong>Fun Tidbit</strong>
						<ul>
							<li>Stumbles on her wheel anytime the light in a room changes!</li>
						</ul>
					</li>
					<li>
						<strong>Born</strong>
						May 30th, 2022
						<br>
						<small><?php echo "$dd->y years, $dd->m month(s), $dd->d day(s) old"; ?></small>
						<br>
						<small><?php echo number_format( ( $datediff / (60 * 60 * 24) ) * 35 / 365.25, 2 ); ?> in human years</small>
					</li>
					<li>
						<strong>Adopted</strong>
						July 9th, 2022
					</li>

				</ul>
			</div>
		</div>
		<div class="meet-container meet-mushroom">
			<img src="<?php url('assets/mushroom.jpg'); ?>" />
			<h2>Mushroom</h2>
			<div class="meet-stats">
				<ul>
					<li>
						<strong>Nicknames</strong>
						Mush, Mushpatoodles, <br>MUSHROOM STOP BITING ME
					</li>
					<li>
						<strong>Fun Tidbit</strong>
						<ul>
							<li>Strong enough to carry her seed ball around the enclosure...in her teeth!</li>
						</ul>
					</li>
					<li>
						<strong>Born</strong>
						May 30th, 2022
						<br>
						<small><?php echo "$dd->y years, $dd->m month(s), $dd->d day(s) old"; ?></small>
						<br>
						<small><?php echo number_format( ( $datediff / (60 * 60 * 24) ) * 35 / 365.25, 2 ); ?> in human years</small>
					</li>
					<li>
						<strong>Adopted</strong>
						July 10th, 2022
					</li>

				</ul>
			</div>
		</div>
	</div>
	<div class="text-center">
		Why the difference in adoption dates if they're sisters?<br>
		Head on over to their <a href="<?php url('history'); ?>">History</a> and find out!
	</div>
</div>

<img src="<?php url('assets/white-top.png'); ?>" />
<div class="chart-container">
	<div class="mini-container mb">
		<h2>Wheel Spins</h2>
		<p>Since November 11th, 2023, the girls have had pedometers on their wheels. This helped us keep track of how active they were at night, especially since their most active hours are between 1-4 AM. We knew they were active at night, but we didn't know <i>how</i> active. We really wish we had gotten these much earlier, but we never knew they existed, so we'll take any data we can get.</p>
		<p>We always thought <strong class="j">Jupiter</strong> was the runner of the two, considering we'd never really seen <strong class="m">Mushroom</strong> out on her wheel when we were awake, so we were expecting her numbers to be low. We know any enclosure cleanings stressed her out, which is why we try to do full cleans as little as possible, so those days typically have a higher spike. This we expected.</p>
		<p>What we didn't expect was the explosion of speed and endurance <strong class="m">Mushroom</strong> had! We were shocked the first night she crossed the 15,000 spin threshold, thinking "wow she finally caught up to Jupes!", but then proceeded to blow past her. As of today, her record stands at 30,962 spins.<p>
		<p>Accounting for just about 26" per rotation on her 8.25" wheel, and shaving by <?php echo $ratio_m * 100; ?>% since it still spins once she hops off, that comes to <?php echo number_format( 30962 * ( 1 - $ratio_m ) * 25.918 ); ?> inches of travel. That is <strong><?php echo number_format( 30962 * ( 1 - $ratio_m ) * 25.918 / (12*5280), 3 ); ?></strong> miles! Can you imagine!? I struggle to run one mile, and this little ham does double digits some nights.</p>
		<p>These days, the girls seem to have slowed down, keeping to under 10k spins most nights. A part of me wants to believe they just thrive in the cold weather months, or enjoy the blasts of heat from the vents near by late at night, but they're getting old. While the 20k plus spin nights were a sight to behold, we still appreciate the sub 5k nights, hearing the little pitter patter in the background, along with the occasional stumble.</p>
		<p>Yes, I'm talking about you <strong class="j">Jupiter</strong>.</p>
	</div>
	<div class="container chart-toggle" id="chart">
		<button class="active" data-toggle="spinChart">Rotations</button>
		<button data-toggle="cumulativeSpinChart">Cumulative Rotations</button>
		<button data-toggle="avgChart">Rolling Average Rotations</button>
		<br>
		<button data-toggle="mileChart">Mileage</button>
		<button data-toggle="cumulativeMileChart">Cumulative Mileage</button>
		<button data-toggle="avgMileChart">Rolling Average Miles</button>
		<br>
		<button data-toggle="spinChart30">Rotations - 30 Day</button>
		<button data-toggle="mileChart30">Mileage - 30 Day</button>
	</div>
	<div class="container charts">
		<div id="spinChart" class="chart active"></div>
		<div id="mileChart" class="chart hidden"></div>
		<div id="spinChart30" class="chart hidden"></div>
		<div id="mileChart30" class="chart hidden"></div>
		<div id="cumulativeSpinChart" class="chart hidden"></div>
		<div id="cumulativeMileChart" class="chart hidden"></div>
		<div id="avgChart" class="chart hidden"></div>
		<div id="avgMileChart" class="chart hidden"></div>
	</div>
	<small>
		The girls are usually active anywhere between 7PM and 4AM the next morning.<br>
		We count rotations for the day beginning when they wake up. Rotations reset around noon.
	</small>

	<div class="container">
		<p class="mt">Since Nov 11, 2023</p>
		<div class="flex columns equal top mt">
			<div class="mb">
				<div class="legend legend-j"></div>
				<strong class="j">Jupiter</strong><br>
				<small class="block">8.625" Diameter Wheel</small><br>
				<?php echo number_format( $wd_j[0] ); ?> Rotations<br>
				<small><?php echo number_format( $wd_j[0] * ( 1 - $wd_j[1] ) ); ?> (adjusted)</small><br>=<br>
				<?php echo number_format( $wd_j[0] * ( 1 - $wd_j[1] ) * ($wd_j[2] * pi() ) / (12*5280), 3 ); ?> Miles
			</div>
			<div class="mb">
				<div class="legend legend-m"></div>
				<strong class="m">Mushroom</strong><br>
				<small class="block">8.25" Diameter Wheel</small><br>
				<?php echo number_format( $wd_m[0] ); ?> Rotations<br>
				<small><?php echo number_format( $wd_m[0] * ( 1 - $wd_m[1] ) ); ?> (adjusted)</small><br>=<br>
				<?php echo number_format( $wd_m[0] * ( 1 - $wd_m[1] ) * ($wd_m[2] * pi() ) / (12*5280), 3 ); ?> Miles
			</div>
		</div>
	</div>

</div>
<img src="<?php url('assets/white-bottom.png'); ?>" />

<?php /* <script src="<?php echo url('wheel_data.js'); ?>"></script> */ ?>
<script>
	var wheel_encoded = <?php echo json_encode( $wheel_data ); ?>;
	var wheel_encoded_30 = <?php echo json_encode( $last_30 ); ?>;

	var wheel_data = wheel_encoded.map(function(item) {
		return {
			date: new Date(item[0] + "T11:00:00").getTime(),
			j: item[1],
			m: item[2],
			jm: parseFloat(item[3].toFixed(3)),
			mm: parseFloat(item[4].toFixed(3)),
			jcs: item[5],
			mcs: item[6],
			jms: parseFloat(item[7].toFixed(3)),
			mms: parseFloat(item[8].toFixed(3)),
			javg: parseFloat(item[9].toFixed(3)),
			mavg: parseFloat(item[10].toFixed(3)),
			javgmi: parseFloat(item[11].toFixed(3)),
			mavgmi: parseFloat(item[12].toFixed(3))
		};
	});

	var wheel_data_30 = wheel_encoded_30.map(function(i30) {
		return {
			date: new Date(i30[0] + "T11:00:00").getTime(),
			j30: i30[1],
			m30: i30[2],
			j30m: parseFloat(i30[3].toFixed(3)),
			m30m: parseFloat(i30[4].toFixed(3)),
		};
	});
</script>

<script src="<?php echo url('spinChart.js'); ?>"></script>
<script src="<?php echo url('mileChart.js'); ?>"></script>
<script src="<?php echo url('spinChart30.js'); ?>"></script>
<script src="<?php echo url('mileChart30.js'); ?>"></script>
<script src="<?php echo url('cumulativeSpinChart.js'); ?>"></script>
<script src="<?php echo url('cumulativeMileChart.js'); ?>"></script>
<script src="<?php echo url('avgChart.js'); ?>"></script>
<script src="<?php echo url('avgMileChart.js'); ?>"></script>


<div class="container">
	<div class="mt mb">
		<h2>"Are you girls a town in Florida? Because you look like My Hami"</h2>
		<span>- Brian</span>
	</div>
</div>

<?php include( 'footer.php' ); ?>