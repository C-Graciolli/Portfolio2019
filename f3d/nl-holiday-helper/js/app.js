 
$(document).ready(function(){

$.fn.preload = function() {
  this.each(function(){
      $('<../img/>')[0].src = this;
  });
}

// Usage:

$(['gender-boy-2.jpg','gender-boy.jpg','gender-girl-2.jpg','gender-girl.jpg','holiday_type-beach-2.jpg','holiday_type-beach.jpg','holiday_type-city-2.jpg','holiday_type-city.jpg','holiday_type-festival-2.jpg','holiday_type-festival.jpg','icon_bag-click.png','icon_bag.png','number_days-3-2.gif','number_days-3.gif','number_days-7-2.gif','number_days-7.gif','number_days-14-2.gif','number_days-14.gif']).preload();

///////////////////////////////// GLOBAL CALCULATIONS

  var bra_3 = parseInt($('.bra_3').val() * 70);
  var underwear_3 = parseInt($('.underwear_3').val() * 20);
  var socks_3 = parseInt($('.socks_3').val() * 30);
  var bikini_3 = parseInt($('.bikini_3').val() * 100);
  var shorts_3 = parseInt($('.shorts_3').val() * 400);
  var top_3 = parseInt($('.top_3').val() * 70);
  var dress_3 = parseInt($('.dress_3').val() * 300);
  var hat_3 = parseInt($('.hat_3').val() * 90);
  var trousers_3 = parseInt($('.trousers_3').val() * 350);
  var cami_3 = parseInt($('.cami_3').val() * 90);
  var tee_3 = parseInt($('.tee_3').val() * 110);
  var jewellery_3 = parseInt($('.jewellery_3').val() * 20);
  var wedges_3 = parseInt($('.wedges_3').val() * 600);

  var bra_7 = parseInt($('.bra_7').val() * 70);
  var underwear_7 = parseInt($('.underwear_7').val() * 20);
  var socks_7 = parseInt($('.socks_7').val() * 30);
  var bikini_7 = parseInt($('.bikini_7').val() * 100);
  var shorts_7 = parseInt($('.shorts_7').val() * 400);
  var top_7 = parseInt($('.top_7').val() * 70);
  var dress_7 = parseInt($('.dress_7').val() * 300);
  var hat_7 = parseInt($('.hat_7').val() * 90);
  var trousers_7 = parseInt($('.trousers_7').val() * 350);
  var cami_7 = parseInt($('.cami_7').val() * 90);
  var tee_7 = parseInt($('.tee_7').val() * 110);
  var jewellery_7 = parseInt($('.jewellery_7').val() * 20);
  var wedges_7 = parseInt($('.wedges_7').val() * 600);

  var bra_14 = parseInt($('.bra_14').val() * 70);
  var underwear_14 = parseInt($('.underwear_14').val() * 20);
  var socks_14 = parseInt($('.socks_14').val() * 30);
  var bikini_14 = parseInt($('.bikini_14').val() * 100);
  var shorts_14 = parseInt($('.shorts_14').val() * 400);
  var top_14 = parseInt($('.top_14').val() * 70);
  var dress_14 = parseInt($('.dress_14').val() * 300);
  var hat_14 = parseInt($('.hat_14').val() * 90);
  var trousers_14 = parseInt($('.trousers_14').val() * 350);
  var cami_14 = parseInt($('.cami_14').val() * 90);
  var tee_14 = parseInt($('.tee_14').val() * 110);
  var jewellery_14 = parseInt($('.jewellery_14').val() * 20);
  var wedges_14 = parseInt($('.wedges_14').val() * 600);
  
  var sandals = parseInt($('.sandals').val() * 400);
  var espadrilles = parseInt($('.espadrilles').val() * 300);
  var jacket = parseInt($('.jacket').val() * 600);
  var kimono = parseInt($('.kimono').val() * 300);
  var cover_up = parseInt($('.cover_up').val() * 250);
  var sunglasses = parseInt($('.sunglasses').val() * 40);
  var beach_bag = parseInt($('.beach_bag').val() * 100);
  var purse = parseInt($('.purse').val() * 100);
  
  var hair_band = parseInt($('.hair_band').val() * 50);

  var hoodie_3 = parseInt($('.hoodie_3').val() * 500);
  var hoodie_7 = parseInt($('.hoodie_7').val() * 500);
  var hoodie_14 = parseInt($('.hoodie_14').val() * 500);

  var long_socks_3 = parseInt($('.long_socks_3').val() * 30);
  var crop_top_3 = parseInt($('.crop_top_3').val() * 90);
  var shorts_3 = parseInt($('.shorts_3').val() * 400);
  var leggings_3 = parseInt($('.leggings_3').val() * 240);
  var skirt_3 = parseInt($('.skirt_3').val() * 250);
  var jeans_3 = parseInt($('.jeans_3').val() * 460);

  var long_socks_7 = parseInt($('.long_socks_7').val() * 30);
  var crop_top_7 = parseInt($('.crop_top_7').val() * 90);
  var shorts_7 = parseInt($('.shorts_7').val() * 400);
  var leggings_7 = parseInt($('.leggings_7').val() * 240);
  var skirt_7 = parseInt($('.skirt_7').val() * 250);
  var jeans_7 = parseInt($('.jeans_7').val() * 460);

  var long_socks_14 = parseInt($('.long_socks_14').val() * 30);
  var crop_top_14 = parseInt($('.crop_top_14').val() * 90);
  var shorts_14 = parseInt($('.shorts_14').val() * 400);
  var leggings_14 = parseInt($('.leggings_14').val() * 240);
  var skirt_14 = parseInt($('.skirt_14').val() * 250);
  var jeans_14 = parseInt($('.jeans_14').val() * 460);

  var wellies = parseInt($('.wellies').val() * 1600);
  var trainers_girl = parseInt($('.trainers_girl').val() * 800);
  var rain_mac = parseInt($('.rain_mac').val() * 350);
  var bum_bag = parseInt($('.bum_bag').val() * 120);
  var plimsolls = parseInt($('.plimsolls').val() * 600);
  var flower_garland = parseInt($('.flower_garland').val() * 10);

  var backpack_girl = parseInt($('.backpack_girl').val() * 460);

  var day_dress_3 = parseInt($('.day_dress_3').val() * 270);
  var cardigan_3 = parseInt($('.cardigan_3').val() * 400);
  var evening_dress_3 = parseInt($('.evening_dress_3').val() * 270);
  var playsuit_3 = parseInt($('.playsuit_3').val() * 270);
  var belt_3 = parseInt($('.belt_3').val() * 200);

  var day_dress_7 = parseInt($('.day_dress_7').val() * 270);
  var cardigan_7 = parseInt($('.cardigan_7').val() * 400);
  var evening_dress_7 = parseInt($('.evening_dress_7').val() * 270);
  var playsuit_7 = parseInt($('.playsuit_7').val() * 270);
  var belt_7 = parseInt($('.belt_7').val() * 200);

  var day_dress_14 = parseInt($('.day_dress_14').val() * 270);
  var cardigan_14 = parseInt($('.cardigan_14').val() * 400);
  var evening_dress_14 = parseInt($('.evening_dress_14').val() * 270);
  var playsuit_14 = parseInt($('.playsuit_14').val() * 270);
  var belt_14 = parseInt($('.belt_14').val() * 200);

  var courts = parseInt($('.courts').val() * 570);
  var clutch = parseInt($('.clutch').val() * 500);

  var umbrella = parseInt($('.umbrella').val() * 400);
  var blazer = parseInt($('.blazer').val() * 550);

  var heels = parseInt($('.heels').val() * 570);

  var underwear_boy_3 = parseInt($('.underwear_boy_3').val() * 60);
  var socks_boy_3 = parseInt($('.socks_boy_3').val() * 60);
  var shorts_boy_3 = parseInt($('.shorts_boy_3').val() * 480);
  var shirt_3 = parseInt($('.shirt_3').val() * 250);
  var vest_3 = parseInt($('.vest_3').val() * 120);
  var flip_flops_3 = parseInt($('.flip_flops_3').val() * 50);
  var swim_shorts_3 = parseInt($('.swim_shorts_3').val() * 400);
  var tee_boy_3 = parseInt($('.tee_boy_3').val() * 140);
  var trainers_3 = parseInt($('.trainers_3').val() * 800);
  var trousers_boy_3 = parseInt($('.trousers_boy_3').val() * 600);

  var underwear_boy_7 = parseInt($('.underwear_boy_7').val() * 60);
  var socks_boy_7 = parseInt($('.socks_boy_7').val() * 60);
  var shorts_boy_7 = parseInt($('.shorts_boy_7').val() * 480);
  var shirt_7 = parseInt($('.shirt_7').val() * 250);
  var vest_7 = parseInt($('.vest_7').val() * 120);
  var flip_flops_7 = parseInt($('.flip_flops_7').val() * 50);
  var swim_shorts_7 = parseInt($('.swim_shorts_7').val() * 400);
  var tee_boy_7 = parseInt($('.tee_boy_7').val() * 140);
  var trainers_7 = parseInt($('.trainers_7').val() * 800);
  var trousers_boy_7 = parseInt($('.trousers_boy_7').val() * 600);

  var underwear_boy_14 = parseInt($('.underwear_boy_14').val() * 60);
  var socks_boy_14 = parseInt($('.socks_boy_14').val() * 60);
  var shorts_boy_14 = parseInt($('.shorts_boy_14').val() * 480);
  var shirt_14 = parseInt($('.shirt_14').val() * 250);
  var vest_14 = parseInt($('.vest_14').val() * 120);
  var flip_flops_14 = parseInt($('.flip_flops_14').val() * 50);
  var swim_shorts_14 = parseInt($('.swim_shorts_14').val() * 400);
  var tee_boy_14 = parseInt($('.tee_boy_14').val() * 140);
  var trainers_14 = parseInt($('.trainers_14').val() * 800);
  var trousers_boy_14 = parseInt($('.trousers_boy_14').val() * 600);
 
  var backpack = parseInt($('.backpack').val() * 400);
  var wallet = parseInt($('.wallet').val() * 70);
  var jeans_boy = parseInt($('.jeans_boy').val() * 700);

  var chinos_3 = parseInt($('.chinos_3').val() * 600);
  var sweatshirt_3 = parseInt($('.sweatshirt_3').val() * 300);
  var belt_3 = parseInt($('.belt_3').val() * 200);

  var chinos_7 = parseInt($('.chinos_7').val() * 600);
  var sweatshirt_7 = parseInt($('.sweatshirt_7').val() * 300);
  var belt_7 = parseInt($('.belt_7').val() * 200);

  var chinos_14 = parseInt($('.chinos_7').val() * 600);
  var sweatshirt_14 = parseInt($('.sweatshirt_7').val() * 300);
  var belt_14 = parseInt($('.belt_7').val() * 200);

  var smart_shoes = parseInt($('.smart_shoes').val() * 1500);

  var makeup = parseInt($('.makeup').val() * 400);
  var makeup_remover = parseInt($('.makeup_remover').val() * 500);
  var sun_cream = parseInt($('.sun_cream').val() * 250);
  var after_sun = parseInt($('.after_sun').val() * 250);
  var shower_gel = parseInt($('.shower_gel').val() * 500);
  var wash_bag = parseInt($('.wash_bag').val() * 50);
  var razor = parseInt($('.razor').val() * 20);
  var shaving_gel = parseInt($('.shaving_gel').val() * 230);
  var shampoo = parseInt($('.shampoo').val() * 250);
  var conditioner = parseInt($('.conditioner').val() * 250);
  var hair_products = parseInt($('.hair_products').val() * 500);
  var hair_brush = parseInt($('.hair_brush').val() * 80);
  var nail_file = parseInt($('.nail_file').val() * 10);
  var nail_varnish = parseInt($('.nail_varnish').val() * 10);
  var tooth_brush = parseInt($('.tooth_brush').val() * 70);
  var tooth_paste = parseInt($('.tooth_paste').val() * 70);
  var mouth_wash = parseInt($('.mouth_wash').val() * 250);
  var perfume = parseInt($('.perfume').val() * 250);
  var deodorant = parseInt($('.deodorant').val() * 150);
  var repellent = parseInt($('.repellent').val() * 200);

  var tissues = parseInt($('.tissues').val() * 20);
  var cleanser = parseInt($('.cleanser').val() * 150);
  var hand_sanitiser = parseInt($('.hand_sanitiser').val() * 150);
  var vitamins = parseInt($('.vitamins').val() * 50);

  var comb = parseInt($('.comb').val() * 30);
  var moisturiser = parseInt($('.moisturiser').val() * 150);
  var after_shave = parseInt($('.after_shave').val() * 250);

  var toilet_roll = parseInt($('.toilet_roll').val() * 700);
  var antibacterial_wipes = parseInt($('.antibacterial_wipes').val() * 700);

  var headphones = parseInt($('.headphones').val() * 500);
  var towel = parseInt($('.towel').val() * 450);
  var camera = parseInt($('.camera').val() * 300);   
  var book = parseInt($('.book').val() * 10);
  var tablet = parseInt($('.tablet').val() * 350);
  var phone = parseInt($('.phone').val() * 130);
  var speaker = parseInt($('.speaker').val() * 160);
  var adapter = parseInt($('.adapter').val() * 50);

  var tent = parseInt($('.tent').val() * 10000);
  var sleeping_bag = parseInt($('.sleeping_bag').val() * 2500);
  var roll_matt = parseInt($('.roll_matt').val() * 450);
  var camping_chair = parseInt($('.camping_chair').val() * 2600);
  var torch = parseInt($('.torch').val() * 60);
  var penknife = parseInt($('.penknife').val() * 40);

  var selfie_stick = parseInt($('.selfie_stick').val() * 450);
  var hair_dryer = parseInt($('.hair_dryer').val() * 1000);

  var sum_girl_beach_3 = bra_3 + underwear_3 + socks_3 + sandals + espadrilles + bikini_3 + shorts_3 + top_3 + dress_3 + hat_3 + jacket + kimono + cover_up + trousers_3 + cami_3 + tee_3 + hoodie_3 + sunglasses + beach_bag + purse + jewellery_3 + wedges_3 + flower_garland + makeup + makeup_remover + sun_cream + after_sun + shower_gel + wash_bag + razor + shaving_gel + shampoo + conditioner + hair_products + hair_brush + nail_file + nail_varnish + tooth_brush + tooth_paste + mouth_wash + perfume + deodorant + repellent + headphones + towel + camera + book + tablet + phone + speaker + adapter;
  var sum_girl_beach_7 = bra_7 + underwear_7 + socks_7 + sandals + espadrilles + bikini_7 + shorts_7 + top_7 + dress_7 + hat_7 + jacket + kimono + cover_up + trousers_7 + cami_7 + tee_7 + hoodie_7 + sunglasses + beach_bag + purse + jewellery_7 + wedges_7 + flower_garland + makeup + makeup_remover + sun_cream + after_sun + shower_gel + wash_bag + razor + shaving_gel + shampoo + conditioner + hair_products + hair_brush + nail_file + nail_varnish + tooth_brush + tooth_paste + mouth_wash + perfume + deodorant + repellent + headphones + towel + camera + book + tablet + phone + speaker + adapter;
  var sum_girl_beach_14 = bra_14 + underwear_14 + socks_14 + sandals + espadrilles + bikini_14 + shorts_14 + top_14 + dress_14 + hat_14 + jacket + kimono + cover_up + trousers_14 + cami_14 + tee_14 + hoodie_14 + sunglasses + beach_bag + purse + jewellery_14 + wedges_14 + flower_garland + makeup + makeup_remover + sun_cream + after_sun + shower_gel + wash_bag + razor + shaving_gel + shampoo + conditioner + hair_products + hair_brush + nail_file + nail_varnish + tooth_brush + tooth_paste + mouth_wash + perfume + deodorant + repellent + headphones + towel + camera + book + tablet + phone + speaker + adapter;

  var sum_girl_festival_3 = bra_3 + underwear_3 + socks_3 + long_socks_3 + cami_3 + crop_top_3 + shorts_3 + leggings_3 + wellies + hat_3 + kimono + trainers_girl + rain_mac + hoodie_3 + sunglasses + flower_garland + bum_bag + skirt_3 + purse + plimsolls + hair_band + jeans_3 + backpack_girl + makeup + makeup_remover + sun_cream + after_sun + wash_bag + shampoo + hair_products + hair_brush + tooth_brush + tooth_paste + mouth_wash + deodorant + repellent + vitamins + toilet_roll + antibacterial_wipes + towel + tent + sleeping_bag + roll_matt + camping_chair + torch + penknife + camera + phone + speaker;
  var sum_girl_festival_7 = bra_7 + underwear_7 + socks_7 + long_socks_7 + cami_7 + crop_top_7 + shorts_7 + leggings_7 + wellies + hat_7 + kimono + trainers_girl + rain_mac + hoodie_7 + sunglasses + flower_garland + bum_bag + skirt_7 + purse + plimsolls + hair_band + jeans_7 + backpack_girl + makeup + makeup_remover + sun_cream + after_sun + wash_bag + shampoo + hair_products + hair_brush + tooth_brush + tooth_paste + mouth_wash + deodorant + repellent + vitamins + toilet_roll + antibacterial_wipes + towel + tent + sleeping_bag + roll_matt + camping_chair + torch + penknife + camera + phone + speaker;

  var sum_girl_city_3 = bra_3 + underwear_3 + socks_3 + day_dress_3 + jeans_3 + top_3+ evening_dress_3 + playsuit_3 + shorts_3 + courts + sandals + backpack_girl + clutch + jewellery_3 + sunglasses + belt_3 + jacket + umbrella + blazer + skirt_3 + rain_mac + cardigan_3 + heels + makeup + makeup_remover + cleanser + moisturiser + wash_bag + sun_cream + after_sun + shower_gel + wash_bag + razor + shaving_gel + shampoo + conditioner + hair_products + hair_brush + comb + nail_file + tissues + tooth_brush + tooth_paste + mouth_wash + perfume + deodorant + hand_sanitiser + selfie_stick + book + vitamins + camera + hair_dryer + tablet + phone + adapter;
  var sum_girl_city_7 = bra_7 + underwear_7 + socks_7 + day_dress_7 + jeans_7 + top_7+ evening_dress_7 + playsuit_7 + shorts_7 + courts + sandals + backpack_girl + clutch + jewellery_7 + sunglasses + belt_7 + jacket + umbrella + blazer + skirt_7 + rain_mac + cardigan_7 + heels + makeup + makeup_remover + cleanser + moisturiser + wash_bag + sun_cream + after_sun + shower_gel + wash_bag + razor + shaving_gel + shampoo + conditioner + hair_products + hair_brush + comb + nail_file + tissues + tooth_brush + tooth_paste + mouth_wash + perfume + deodorant + hand_sanitiser + selfie_stick + book + vitamins + camera + hair_dryer + tablet + phone + adapter;
  var sum_girl_city_14 = bra_14 + underwear_14 + socks_14 + day_dress_14 + jeans_14 + top_14+ evening_dress_14 + playsuit_14 + shorts_14 + courts + sandals + backpack_girl + clutch + jewellery_14 + sunglasses + belt_14 + jacket + umbrella + blazer + skirt_14 + rain_mac + cardigan_14 + heels + makeup + makeup_remover + cleanser + moisturiser + wash_bag + sun_cream + after_sun + shower_gel + wash_bag + razor + shaving_gel + shampoo + conditioner + hair_products + hair_brush + comb + nail_file + tissues + tooth_brush + tooth_paste + mouth_wash + perfume + deodorant + hand_sanitiser + selfie_stick + book + vitamins + camera + hair_dryer + tablet + phone + adapter;


  var sum_boy_beach_3 = underwear_boy_3 + socks_boy_3 + flip_flops_3 + shorts_boy_3 + shirt_3 + vest_3 + swim_shorts_3 + tee_boy_3 + trainers_3 + hoodie_3 + hat_3 + trousers_boy_3 + sunglasses + backpack + wallet + sun_cream + after_sun + shower_gel + moisturiser + razor + shaving_gel + shampoo + conditioner + hair_products + comb + tooth_brush + tooth_paste + mouth_wash + after_shave + deodorant + repellent + headphones + towel + camera + book + tablet + phone + speaker + adapter;
  var sum_boy_beach_7 = underwear_boy_7 + socks_boy_7 + flip_flops_7 + shorts_boy_7 + shirt_7 + vest_7 + swim_shorts_7 + tee_boy_7 + trainers_7 + hoodie_7 + hat_7 + trousers_boy_7 + sunglasses + backpack + wallet + sun_cream + after_sun + shower_gel + moisturiser + razor + shaving_gel + shampoo + conditioner + hair_products + comb + tooth_brush + tooth_paste + mouth_wash + after_shave + deodorant + repellent + headphones + towel + camera + book + tablet + phone + speaker + adapter;
  var sum_boy_beach_14 = underwear_boy_14 + socks_boy_14 + flip_flops_14 + shorts_boy_14 + shirt_14 + vest_14 + swim_shorts_14 + tee_boy_14 + trainers_14 + hoodie_14 + hat_14 + trousers_boy_14 + sunglasses + backpack + wallet + sun_cream + after_sun + shower_gel + moisturiser + razor + shaving_gel + shampoo + conditioner + hair_products + comb + tooth_brush + tooth_paste + mouth_wash + after_shave + deodorant + repellent + headphones + towel + camera + book + tablet + phone + speaker + adapter;

  var sum_boy_festival_3 = underwear_boy_3 + socks_boy_3 + tee_boy_3 + vest_3 + shorts_boy_3 + flip_flops_3 + wellies + trainers_3 + rain_mac + sweatshirt_3 + hoodie_3 + hat_3 + sunglasses + bum_bag + shirt_3 + jeans_boy + backpack + wallet + sun_cream + after_sun + wash_bag + hair_products + comb + tooth_brush + tooth_paste + mouth_wash + deodorant + repellent + vitamins + toilet_roll + antibacterial_wipes + towel + tent + sleeping_bag + roll_matt + camping_chair + torch + penknife + camera + phone + speaker; 
  var sum_boy_festival_7 = underwear_boy_7 + socks_boy_7 + tee_boy_7 + vest_7 + shorts_boy_7 + flip_flops_7 + wellies + trainers_3 + rain_mac + sweatshirt_3 + hoodie_7 + hat_7 + sunglasses + bum_bag + shirt_7 + jeans_boy + backpack + wallet + sun_cream + after_sun + wash_bag + hair_products + comb + tooth_brush + tooth_paste + mouth_wash + deodorant + repellent + vitamins + toilet_roll + antibacterial_wipes + towel + tent + sleeping_bag + roll_matt + camping_chair + torch + penknife + camera + phone + speaker; 

  var sum_boy_city_3 = chinos_3 + underwear_boy_3 + socks_boy_3 + tee_boy_3 + shorts_boy_3 + trainers_3 + sweatshirt_3 + jacket + smart_shoes + sunglasses + shirt_3 + jeans_boy + belt_3 + blazer + wallet + shower_gel + sun_cream + after_sun + wash_bag + razor + shaving_gel + moisturiser + after_shave + shampoo + conditioner + hair_products + comb + tooth_brush + tooth_paste + mouth_wash + deodorant + book + camera + tablet + phone + vitamins + adapter;
  var sum_boy_city_7 = chinos_7 + underwear_boy_7 + socks_boy_7 + tee_boy_7 + shorts_boy_7 + trainers_7 + sweatshirt_7 + jacket + smart_shoes + sunglasses + shirt_7 + jeans_boy + belt_7 + blazer + wallet + shower_gel + sun_cream + after_sun + wash_bag + razor + shaving_gel + moisturiser + after_shave + shampoo + conditioner + hair_products + comb + tooth_brush + tooth_paste + mouth_wash + deodorant + book + camera + tablet + phone + vitamins + adapter;
  var sum_boy_city_14 = chinos_14 + underwear_boy_14 + socks_boy_14 + tee_boy_14 + shorts_boy_14 + trainers_14 + sweatshirt_14 + jacket + smart_shoes + sunglasses + shirt_14 + jeans_boy + belt_14 + blazer + wallet + shower_gel + sun_cream + after_sun + wash_bag + razor + shaving_gel + moisturiser + after_shave + shampoo + conditioner + hair_products + comb + tooth_brush + tooth_paste + mouth_wash + deodorant + book + camera + tablet + phone + vitamins + adapter;

  var total_sum_girl_beach_3 = sum_girl_beach_3 / 1000;
  var total_sum_girl_beach_7 = sum_girl_beach_7 / 1000;
  var total_sum_girl_beach_14 = sum_girl_beach_14 / 1000;

  var total_sum_girl_festival_3 = sum_girl_festival_3 / 1000;
  var total_sum_girl_festival_7 = sum_girl_festival_7 / 1000;

  var total_sum_girl_city_3 = sum_girl_city_3 / 1000;
  var total_sum_girl_city_7 = sum_girl_city_7 / 1000;
  var total_sum_girl_city_14 = sum_girl_city_14 / 1000;

  var total_sum_boy_beach_3 = sum_boy_beach_3 / 1000;
  var total_sum_boy_beach_7 = sum_boy_beach_7 / 1000;
  var total_sum_boy_beach_14 = sum_boy_beach_14 / 1000;

  var total_sum_boy_festival_3 = sum_boy_festival_3 / 1000;
  var total_sum_boy_festival_7 = sum_boy_festival_7 / 1000;

  var total_sum_boy_city_3 = sum_boy_city_3 / 1000;
  var total_sum_boy_city_7 = sum_boy_city_7 / 1000;
  var total_sum_boy_city_14 = sum_boy_city_14 / 1000;

  $( ".total-weight-girl_beach_3").html(total_sum_girl_beach_3);
  $( ".total-weight-girl_beach_7").html(total_sum_girl_beach_7);
  $( ".total-weight-girl_beach_14").html(total_sum_girl_beach_14);

  $( ".total-weight-girl_festival_3").html(total_sum_girl_festival_3);
  $( ".total-weight-girl_festival_7").html(total_sum_girl_festival_7);

  $( ".total-weight-girl_city_3").html(total_sum_girl_city_3);
  $( ".total-weight-girl_city_7").html(total_sum_girl_city_7);
  $( ".total-weight-girl_city_14").html(total_sum_girl_city_14);

  $( ".total-weight-boy_beach_3").html(total_sum_boy_beach_3);
  $( ".total-weight-boy_beach_7").html(total_sum_boy_beach_7);
  $( ".total-weight-boy_beach_14").html(total_sum_boy_beach_14);

  $( ".total-weight-boy_festival_3").html(total_sum_boy_festival_3);
  $( ".total-weight-boy_festival_7").html(total_sum_boy_festival_7);

  $( ".total-weight-boy_city_3").html(total_sum_boy_city_3);
  $( ".total-weight-boy_city_7").html(total_sum_boy_city_7);
  $( ".total-weight-boy_city_14").html(total_sum_boy_city_14);

  
$(".re-calculate-girl_beach_3").on('click', function(e) {
  var bra_3_2GB3 = parseInt($('.bra_3_2GB3').val() * 70);
  var underwear_3_2GB3 = parseInt($('.underwear_3_2GB3').val() * 20);
  var socks_3_2GB3 = parseInt($('.socks_3_2GB3').val() * 30);
  var sandals_3_2GB3 = parseInt($('.sandals_3_2GB3').val() * 400);
  var espadrilles_3_2GB3 = parseInt($('.espadrilles_3_2GB3').val() * 300);
  var bikini_3_2GB3 = parseInt($('.bikini_3_2GB3').val() * 100);
  var shorts_3_2GB3 = parseInt($('.shorts_3_2GB3').val() * 400);
  var top_3_2GB3 = parseInt($('.top_3_2GB3').val() * 70);
  var dress_3_2GB3 = parseInt($('.dress_3_2GB3').val() * 300);
  var hat_3_2GB3 = parseInt($('.hat_3_2GB3').val() * 90);
  var jacket_3_2GB3 = parseInt($('.jacket_3_2GB3').val() * 600);
  var kimono_3_2GB3 = parseInt($('.kimono_3_2GB3').val() * 300);
  var cover_up_3_2GB3 = parseInt($('.cover_up_3_2GB3').val() * 250);
  var trousers_3_2GB3 = parseInt($('.trousers_3_2GB3').val() * 350);
  var cami_3_2GB3 = parseInt($('.cami_3_2GB3').val() * 90);
  var tee_3_2GB3 = parseInt($('.tee_3_2GB3').val() * 110);
  var hoodie_3_2GB3 = parseInt($('.hoodie_3_2GB3').val() * 500);
  var sunglasses_3_2GB3 = parseInt($('.sunglasses_3_2GB3').val() * 40);
  var beach_bag_3_2GB3 = parseInt($('.beach_bag_3_2GB3').val() * 100);
  var purse_3_2GB3 = parseInt($('.purse_3_2GB3').val() * 100);
  var jewellery_3_2GB3 = parseInt($('.jewellery_3_2GB3').val() * 20);
  var wedges_3_2GB3 = parseInt($('.wedges_3_2GB3').val() * 600);
  var flower_garland_3_2GB3= parseInt($('.flower_garland_3_2GB3').val() * 10);

  var makeup_3_2GB3 = parseInt($('.makeup_3_2GB3').val() * 400);
  var makeup_remover_3_2GB3 = parseInt($('.makeup_remover_3_2GB3').val() * 500);
  var sun_cream_3_2GB3 = parseInt($('.sun_cream_3_2GB3').val() * 250);
  var after_sun_3_2GB3 = parseInt($('.after_sun_3_2GB3').val() * 250);
  var shower_gel_3_2GB3 = parseInt($('.shower_gel_3_2GB3').val() * 500);
  var wash_bag_3_2GB3 = parseInt($('.wash_bag_3_2GB3').val() * 50);
  var razor_3_2GB3 = parseInt($('.razor_3_2GB3').val() * 20);
  var shaving_gel_3_2GB3 = parseInt($('.shaving_gel_3_2GB3').val() * 230);
  var shampoo_3_2GB3 = parseInt($('.shampoo_3_2GB3').val() * 250);
  var conditioner_3_2GB3 = parseInt($('.conditioner_3_2GB3').val() * 250);
  var hair_products_3_2GB3 = parseInt($('.hair_products_3_2GB3').val() * 500);
  var hair_brush_3_2GB3 = parseInt($('.hair_brush_3_2GB3').val() * 80);
  var nail_file_3_2GB3 = parseInt($('.nail_file_3_2GB3').val() * 10);
  var nail_varnish_3_2GB3 = parseInt($('.nail_varnish_3_2GB3').val() * 10);
  var tooth_brush_3_2GB3 = parseInt($('.tooth_brush_3_2GB3').val() * 70);
  var tooth_paste_3_2GB3 = parseInt($('.tooth_paste_3_2GB3').val() * 70);
  var mouth_wash_3_2GB3 = parseInt($('.mouth_wash_3_2GB3').val() * 250);
  var perfume_3_2GB3 = parseInt($('.perfume_3_2GB3').val() * 250);
  var deodorant_3_2GB3 = parseInt($('.deodorant_3_2GB3').val() * 150);
  var repellent_3_2GB3 = parseInt($('.repellent_3_2GB3').val() * 200);

  var headphones_3_2GB3 = parseInt($('.headphones_3_2GB3').val() * 500);
  var towel_3_2GB3 = parseInt($('.towel_3_2GB3').val() * 450);
  var camera_3_2GB3 = parseInt($('.camera_3_2GB3').val() * 300);   
  var book_3_2GB3 = parseInt($('.book_3_2GB3').val() * 10);
  var tablet_3_2GB3 = parseInt($('.tablet_3_2GB3').val() * 350);
  var phone_3_2GB3 = parseInt($('.phone_3_2GB3').val() * 130);
  var speaker_3_2GB3 = parseInt($('.speaker_3_2GB3').val() * 160);
  var adapter_3_2GB3 = parseInt($('.adapter_3_2GB3').val() * 50);


  var sum_girl_beach_3 = bra_3_2GB3 + underwear_3_2GB3 + socks_3_2GB3 + sandals_3_2GB3 + espadrilles_3_2GB3 + bikini_3_2GB3 + shorts_3_2GB3 + top_3_2GB3 + dress_3_2GB3 + jacket_3_2GB3 + hat_3_2GB3 + kimono_3_2GB3 + cover_up_3_2GB3 + trousers_3_2GB3 + cami_3_2GB3 + tee_3_2GB3 + hoodie_3_2GB3 + sunglasses_3_2GB3 + beach_bag_3_2GB3 + purse_3_2GB3 + jewellery_3_2GB3 + wedges_3_2GB3 + flower_garland_3_2GB3 + makeup_3_2GB3 + makeup_remover_3_2GB3 + sun_cream_3_2GB3 + after_sun_3_2GB3 + shower_gel_3_2GB3 + wash_bag_3_2GB3 + razor_3_2GB3 + shaving_gel_3_2GB3 + shampoo_3_2GB3 + conditioner_3_2GB3 + hair_products_3_2GB3 + hair_brush_3_2GB3 + nail_file_3_2GB3 + nail_varnish_3_2GB3 + tooth_brush_3_2GB3 + tooth_paste_3_2GB3 + mouth_wash_3_2GB3 + perfume_3_2GB3 + deodorant_3_2GB3 + repellent_3_2GB3 + headphones_3_2GB3 + towel_3_2GB3 + camera_3_2GB3 + book_3_2GB3 + tablet_3_2GB3 + phone_3_2GB3 + speaker_3_2GB3 + adapter_3_2GB3;
  
  var total_sum_girl_beach_3 = sum_girl_beach_3 / 1000;

  $( ".total-weight-girl_beach_3").html(total_sum_girl_beach_3);
});

$(".re-calculate-girl_beach_7").on('click', function(e) {
  var bra_7_2GB3 = parseInt($('.bra_7_2GB3').val() * 70);
  var underwear_7_2GB3 = parseInt($('.underwear_7_2GB3').val() * 20);
  var socks_7_2GB3 = parseInt($('.socks_7_2GB3').val() * 30);
  var sandals_7_2GB3 = parseInt($('.sandals_7_2GB3').val() * 400);
  var espadrilles_7_2GB3 = parseInt($('.espadrilles_7_2GB3').val() * 300);
  var bikini_7_2GB3 = parseInt($('.bikini_7_2GB3').val() * 100);
  var shorts_7_2GB3 = parseInt($('.shorts_7_2GB3').val() * 400);
  var top_7_2GB3 = parseInt($('.top_7_2GB3').val() * 70);
  var dress_7_2GB3 = parseInt($('.dress_7_2GB3').val() * 300);
  var hat_7_2GB3 = parseInt($('.hat_7_2GB3').val() * 90);
  var jacket_7_2GB3 = parseInt($('.jacket_7_2GB3').val() * 600);
  var kimono_7_2GB3 = parseInt($('.kimono_7_2GB3').val() * 300);
  var cover_up_7_2GB3 = parseInt($('.cover_up_7_2GB3').val() * 250);
  var trousers_7_2GB3 = parseInt($('.trousers_7_2GB3').val() * 350);
  var cami_7_2GB3 = parseInt($('.cami_7_2GB3').val() * 90);
  var tee_7_2GB3 = parseInt($('.tee_7_2GB3').val() * 110);
  var hoodie_7_2GB3 = parseInt($('.hoodie_7_2GB3').val() * 500);
  var sunglasses_7_2GB3 = parseInt($('.sunglasses_7_2GB3').val() * 40);
  var beach_bag_7_2GB3 = parseInt($('.beach_bag_7_2GB3').val() * 100);
  var purse_7_2GB3 = parseInt($('.purse_7_2GB3').val() * 100);
  var jewellery_7_2GB3 = parseInt($('.jewellery_7_2GB3').val() * 20);
  var wedges_7_2GB3 = parseInt($('.wedges_7_2GB3').val() * 600);
  var flower_garland_7_2GB3= parseInt($('.flower_garland_7_2GB3').val() * 10);

  var makeup_7_2GB3 = parseInt($('.makeup_7_2GB3').val() * 400);
  var makeup_remover_7_2GB3 = parseInt($('.makeup_remover_7_2GB3').val() * 500);
  var sun_cream_7_2GB3 = parseInt($('.sun_cream_7_2GB3').val() * 250);
  var after_sun_7_2GB3 = parseInt($('.after_sun_7_2GB3').val() * 250);
  var shower_gel_7_2GB3 = parseInt($('.shower_gel_7_2GB3').val() * 500);
  var wash_bag_7_2GB3 = parseInt($('.wash_bag_7_2GB3').val() * 50);
  var razor_7_2GB3 = parseInt($('.razor_7_2GB3').val() * 20);
  var shaving_gel_7_2GB3 = parseInt($('.shaving_gel_7_2GB3').val() * 230);
  var shampoo_7_2GB3 = parseInt($('.shampoo_7_2GB3').val() * 250);
  var conditioner_7_2GB3 = parseInt($('.conditioner_7_2GB3').val() * 250);
  var hair_products_7_2GB3 = parseInt($('.hair_products_7_2GB3').val() * 500);
  var hair_brush_7_2GB3 = parseInt($('.hair_brush_7_2GB3').val() * 80);
  var nail_file_7_2GB3 = parseInt($('.nail_file_7_2GB3').val() * 10);
  var nail_varnish_7_2GB3 = parseInt($('.nail_varnish_7_2GB3').val() * 10);
  var tooth_brush_7_2GB3 = parseInt($('.tooth_brush_7_2GB3').val() * 70);
  var tooth_paste_7_2GB3 = parseInt($('.tooth_paste_7_2GB3').val() * 70);
  var mouth_wash_7_2GB3 = parseInt($('.mouth_wash_7_2GB3').val() * 250);
  var perfume_7_2GB3 = parseInt($('.perfume_7_2GB3').val() * 250);
  var deodorant_7_2GB3 = parseInt($('.deodorant_7_2GB3').val() * 150);
  var repellent_7_2GB3 = parseInt($('.repellent_7_2GB3').val() * 200);

  var headphones_7_2GB3 = parseInt($('.headphones_7_2GB3').val() * 500);
  var towel_7_2GB3 = parseInt($('.towel_7_2GB3').val() * 450);
  var camera_7_2GB3 = parseInt($('.camera_7_2GB3').val() * 300);   
  var book_7_2GB3 = parseInt($('.book_7_2GB3').val() * 10);
  var tablet_7_2GB3 = parseInt($('.tablet_7_2GB3').val() * 350);
  var phone_7_2GB3 = parseInt($('.phone_7_2GB3').val() * 130);
  var speaker_7_2GB3 = parseInt($('.speaker_7_2GB3').val() * 160);
  var adapter_7_2GB3 = parseInt($('.adapter_7_2GB3').val() * 50);

  var sum_girl_beach_7 = bra_7_2GB3 + underwear_7_2GB3 + socks_7_2GB3 + sandals_7_2GB3 + espadrilles_7_2GB3 + bikini_7_2GB3 + shorts_7_2GB3 + top_7_2GB3 + dress_7_2GB3 + jacket_7_2GB3 + hat_7_2GB3 + kimono_7_2GB3 + cover_up_7_2GB3 + trousers_7_2GB3 + cami_7_2GB3 + tee_7_2GB3 + hoodie_7_2GB3 + sunglasses_7_2GB3 + beach_bag_7_2GB3 + purse_7_2GB3 + jewellery_7_2GB3 + wedges_7_2GB3 + flower_garland_7_2GB3 + makeup_7_2GB3 + makeup_remover_7_2GB3 + sun_cream_7_2GB3 + after_sun_7_2GB3 + shower_gel_7_2GB3 + wash_bag_7_2GB3 + razor_7_2GB3 + shaving_gel_7_2GB3 + shampoo_7_2GB3 + conditioner_7_2GB3 + hair_products_7_2GB3 + hair_brush_7_2GB3 + nail_file_7_2GB3 + nail_varnish_7_2GB3 + tooth_brush_7_2GB3 + tooth_paste_7_2GB3 + mouth_wash_7_2GB3 + perfume_7_2GB3 + deodorant_7_2GB3 + repellent_7_2GB3 + headphones_7_2GB3 + towel_7_2GB3 + camera_7_2GB3 + book_7_2GB3 + tablet_7_2GB3 + phone_7_2GB3 + speaker_7_2GB3 + adapter_7_2GB3;

  var total_sum_girl_beach_7 = sum_girl_beach_7 / 1000;
  $( ".total-weight-girl_beach_7").html(total_sum_girl_beach_7);
});

$(".re-calculate-girl_beach_14").on('click', function(e) {
  var bra_14_2GB3 = parseInt($('.bra_14_2GB3').val() * 70);
  var underwear_14_2GB3 = parseInt($('.underwear_14_2GB3').val() * 20);
  var socks_14_2GB3 = parseInt($('.socks_14_2GB3').val() * 30);
  var sandals_14_2GB3 = parseInt($('.sandals_14_2GB3').val() * 400);
  var espadrilles_14_2GB3 = parseInt($('.espadrilles_14_2GB3').val() * 300);
  var bikini_14_2GB3 = parseInt($('.bikini_14_2GB3').val() * 100);
  var shorts_14_2GB3 = parseInt($('.shorts_14_2GB3').val() * 400);
  var top_14_2GB3 = parseInt($('.top_14_2GB3').val() * 70);
  var dress_14_2GB3 = parseInt($('.dress_14_2GB3').val() * 300);
  var hat_14_2GB3 = parseInt($('.hat_14_2GB3').val() * 90);
  var jacket_14_2GB3 = parseInt($('.jacket_14_2GB3').val() * 600);
  var kimono_14_2GB3 = parseInt($('.kimono_14_2GB3').val() * 300);
  var cover_up_14_2GB3 = parseInt($('.cover_up_14_2GB3').val() * 250);
  var trousers_14_2GB3 = parseInt($('.trousers_14_2GB3').val() * 350);
  var cami_14_2GB3 = parseInt($('.cami_14_2GB3').val() * 90);
  var tee_14_2GB3 = parseInt($('.tee_14_2GB3').val() * 110);
  var hoodie_14_2GB3 = parseInt($('.hoodie_14_2GB3').val() * 500);
  var sunglasses_14_2GB3 = parseInt($('.sunglasses_14_2GB3').val() * 40);
  var beach_bag_14_2GB3 = parseInt($('.beach_bag_14_2GB3').val() * 100);
  var purse_14_2GB3 = parseInt($('.purse_14_2GB3').val() * 100);
  var jewellery_14_2GB3 = parseInt($('.jewellery_14_2GB3').val() * 20);
  var wedges_14_2GB3 = parseInt($('.wedges_14_2GB3').val() * 600);
  var flower_garland_14_2GB3= parseInt($('.flower_garland_14_2GB3').val() * 10);

  var makeup_14_2GB3 = parseInt($('.makeup_14_2GB3').val() * 400);
  var makeup_remover_14_2GB3 = parseInt($('.makeup_remover_14_2GB3').val() * 500);
  var sun_cream_14_2GB3 = parseInt($('.sun_cream_14_2GB3').val() * 250);
  var after_sun_14_2GB3 = parseInt($('.after_sun_14_2GB3').val() * 250);
  var shower_gel_14_2GB3 = parseInt($('.shower_gel_14_2GB3').val() * 500);
  var wash_bag_14_2GB3 = parseInt($('.wash_bag_14_2GB3').val() * 50);
  var razor_14_2GB3 = parseInt($('.razor_14_2GB3').val() * 20);
  var shaving_gel_14_2GB3 = parseInt($('.shaving_gel_14_2GB3').val() * 230);
  var shampoo_14_2GB3 = parseInt($('.shampoo_14_2GB3').val() * 250);
  var conditioner_14_2GB3 = parseInt($('.conditioner_14_2GB3').val() * 250);
  var hair_products_14_2GB3 = parseInt($('.hair_products_14_2GB3').val() * 500);
  var hair_brush_14_2GB3 = parseInt($('.hair_brush_14_2GB3').val() * 80);
  var nail_file_14_2GB3 = parseInt($('.nail_file_14_2GB3').val() * 10);
  var nail_varnish_14_2GB3 = parseInt($('.nail_varnish_14_2GB3').val() * 10);
  var tooth_brush_14_2GB3 = parseInt($('.tooth_brush_14_2GB3').val() * 70);
  var tooth_paste_14_2GB3 = parseInt($('.tooth_paste_14_2GB3').val() * 70);
  var mouth_wash_14_2GB3 = parseInt($('.mouth_wash_14_2GB3').val() * 250);
  var perfume_14_2GB3 = parseInt($('.perfume_14_2GB3').val() * 250);
  var deodorant_14_2GB3 = parseInt($('.deodorant_14_2GB3').val() * 150);
  var repellent_14_2GB3 = parseInt($('.repellent_14_2GB3').val() * 200);

  var headphones_14_2GB3 = parseInt($('.headphones_14_2GB3').val() * 500);
  var towel_14_2GB3 = parseInt($('.towel_14_2GB3').val() * 450);
  var camera_14_2GB3 = parseInt($('.camera_14_2GB3').val() * 300);   
  var book_14_2GB3 = parseInt($('.book_14_2GB3').val() * 10);
  var tablet_14_2GB3 = parseInt($('.tablet_14_2GB3').val() * 350);
  var phone_14_2GB3 = parseInt($('.phone_14_2GB3').val() * 130);
  var speaker_14_2GB3 = parseInt($('.speaker_14_2GB3').val() * 160);
  var adapter_14_2GB3 = parseInt($('.adapter_14_2GB3').val() * 50);

  var sum_girl_beach_14 = bra_14_2GB3 + underwear_14_2GB3 + socks_14_2GB3 + sandals_14_2GB3 + espadrilles_14_2GB3 + bikini_14_2GB3 + shorts_14_2GB3 + top_14_2GB3 + dress_14_2GB3 + jacket_14_2GB3 + hat_14_2GB3 + kimono_14_2GB3 + cover_up_14_2GB3 + trousers_14_2GB3 + cami_14_2GB3 + tee_14_2GB3 + hoodie_14_2GB3 + sunglasses_14_2GB3 + beach_bag_14_2GB3 + purse_14_2GB3 + jewellery_14_2GB3 + wedges_14_2GB3 + flower_garland_14_2GB3 + makeup_14_2GB3 + makeup_remover_14_2GB3 + sun_cream_14_2GB3 + after_sun_14_2GB3 + shower_gel_14_2GB3 + wash_bag_14_2GB3 + razor_14_2GB3 + shaving_gel_14_2GB3 + shampoo_14_2GB3 + conditioner_14_2GB3 + hair_products_14_2GB3 + hair_brush_14_2GB3 + nail_file_14_2GB3 + nail_varnish_14_2GB3 + tooth_brush_14_2GB3 + tooth_paste_14_2GB3 + mouth_wash_14_2GB3 + perfume_14_2GB3 + deodorant_14_2GB3 + repellent_14_2GB3 + headphones_14_2GB3 + towel_14_2GB3 + camera_14_2GB3 + book_14_2GB3 + tablet_14_2GB3 + phone_14_2GB3 + speaker_14_2GB3 + adapter_14_2GB3;

  var total_sum_girl_beach_14 = sum_girl_beach_14 / 1000;
  $( ".total-weight-girl_beach_14").html(total_sum_girl_beach_14);
});

$(".re-calculate-girl_festival_3").on('click', function(e) {
  var bra_3_2GF3 = parseInt($('.bra_3_2GF3 ').val() * 70);
  var underwear_3_2GF3 = parseInt($('.underwear_3_2GF3 ').val() * 20);
  var socks_3_2GF3 = parseInt($('.socks_3_2GF3 ').val() * 30);
  var hat_3_2GF3 = parseInt($('.hat_3_2GF3 ').val() * 90);
  var kimono_3_2GF3 = parseInt($('.kimono_3_2GF3 ').val() * 300);
  var cami_3_2GF3 = parseInt($('.cami_3_2GF3 ').val() * 90);
  var hoodie_3_2GF3 = parseInt($('.hoodie_3_2GF3 ').val() * 500);
  var sunglasses_3_2GF3 = parseInt($('.sunglasses_3_2GF3 ').val() * 40);
  var purse_3_2GF3 = parseInt($('.purse_3_2GF3 ').val() * 100);
  var hair_band_3_2GF3 = parseInt($('.hair_band_3_2GF3 ').val() * 50);
  var long_socks_3_2GF3 = parseInt($('.long_socks_3_2GF3 ').val() * 30);
  var crop_top_3_2GF3 = parseInt($('.crop_top_3_2GF3 ').val() * 90);
  var shorts_3_2GF3 = parseInt($('.shorts_3_2GF3 ').val() * 400);
  var leggings_3_2GF3 = parseInt($('.leggings_3_2GF3 ').val() * 240);
  var trainers_girl_3_2GF3 = parseInt($('.trainers_girl_3_2GF3 ').val() * 800);
  var wellies_3_2GF3 = parseInt($('.wellies_3_2GF3 ').val() * 1600);
  var rain_mac_3_2GF3 = parseInt($('.rain_mac_3_2GF3 ').val() * 350);
  var bum_bag_3_2GF3 = parseInt($('.bum_bag_3_2GF3 ').val() * 120);
  var skirt_3_2GF3 = parseInt($('.skirt_3_2GF3 ').val() * 250);
  var plimsolls_3_2GF3 = parseInt($('.plimsolls_3_2GF3').val() * 600);
  var flower_garland_3_2GF3 = parseInt($('.flower_garland_3_2GF3 ').val() * 10);
  var jeans_3_2GF3 = parseInt($('.jeans_3_2GF3').val() * 460);
  var backpack_girl_3_2GF3 = parseInt($('.backpack_girl_3_2GF3 ').val() * 460);

  var makeup_3_2GF3 = parseInt($('.makeup_3_2GF3 ').val() * 400);
  var makeup_remover_3_2GF3 = parseInt($('.makeup_remover_3_2GF3 ').val() * 500);
  var sun_cream_3_2GF3 =  parseInt($('.sun_cream_3_2GF3 ').val() * 250);
  var after_sun_3_2GF3 = parseInt($('.after_sun_3_2GF3 ').val() * 250);
  var wash_bag_3_2GF3 = parseInt($('.wash_bag_3_2GF3 ').val() * 50);
  var shampoo_3_2GF3 = parseInt($('.shampoo_3_2GF3 ').val() * 250);
  var hair_products_3_2GF3 = parseInt($('.hair_products_3_2GF3 ').val() * 500);
  var hair_brush_3_2GF3 = parseInt($('.hair_brush_3_2GF3 ').val() * 80);
  var tooth_brush_3_2GF3 = parseInt($('.tooth_brush_3_2GF3 ').val() * 70);
  var tooth_paste_3_2GF3 = parseInt($('.tooth_paste_3_2GF3 ').val() * 70);
  var mouth_wash_3_2GF3 = parseInt($('.mouth_wash_3_2GF3 ').val() * 250);
  var deodorant_3_2GF3 = parseInt($('.deodorant_3_2GF3 ').val() * 150);
  var repellent_3_2GF3 = parseInt($('.repellent_3_2GF3 ').val() * 200);
  var vitamins_3_2GF3 = parseInt($('.vitamins_3_2GF3 ').val() * 50);
  var toilet_roll_3_2GF3 = parseInt($('.toilet_roll_3_2GF3 ').val() * 700);
  var antibacterial_wipes_3_2GF3 = parseInt($('.antibacterial_wipes_3_2GF3 ').val() * 700);

  var towel_3_2GF3 = parseInt($('.towel_3_2GF3 ').val() * 450);
  var camera_3_2GF3 = parseInt($('.camera_3_2GF3 ').val() * 300);   
  var phone_3_2GF3 = parseInt($('.phone_3_2GF3 ').val() * 130);
  var speaker_3_2GF3 = parseInt($('.speaker_3_2GF3 ').val() * 160);
  var tent_3_2GF3 = parseInt($('.tent_3_2GF3 ').val() * 10000);
  var sleeping_bag_3_2GF3 = parseInt($('.sleeping_bag_3_2GF3 ').val() * 2500);
  var roll_matt_3_2GF3 = parseInt($('.roll_matt_3_2GF3 ').val() * 450);
  var camping_chair_3_2GF3  = parseInt($('.camping_chair_3_2GF3 ').val() * 2600);
  var torch_3_2GF3 = parseInt($('.torch_3_2GF3 ').val() * 60);
  var penknife_3_2GF3 = parseInt($('.penknife_3_2GF3 ').val() * 40);

  var sum_girl_festival_3 = bra_3_2GF3 + underwear_3_2GF3 + socks_3_2GF3 + long_socks_3_2GF3 + cami_3_2GF3 + crop_top_3_2GF3 + shorts_3_2GF3 + leggings_3_2GF3 + wellies_3_2GF3 + hat_3_2GF3 + kimono_3_2GF3 + trainers_girl_3_2GF3 + rain_mac_3_2GF3 + hoodie_3_2GF3 + sunglasses_3_2GF3 + flower_garland_3_2GF3 + bum_bag_3_2GF3 + skirt_3_2GF3 + purse_3_2GF3 + plimsolls_3_2GF3 + hair_band_3_2GF3 + jeans_3_2GF3 + backpack_girl_3_2GF3 + makeup_3_2GF3 + makeup_remover_3_2GF3 + after_sun_3_2GF3 + wash_bag_3_2GF3 + sun_cream_3_2GF3 + mouth_wash_3_2GF3 + shampoo_3_2GF3 + hair_products_3_2GF3 + hair_brush_3_2GF3 + toilet_roll_3_2GF3 + tooth_paste_3_2GF3 + tooth_brush_3_2GF3 + mouth_wash_3_2GF3 + deodorant_3_2GF3 + repellent_3_2GF3 + vitamins_3_2GF3 + toilet_roll_3_2GF3 + antibacterial_wipes_3_2GF3 + towel_3_2GF3 + tent_3_2GF3 + sleeping_bag_3_2GF3 + roll_matt_3_2GF3 + camping_chair_3_2GF3 + torch_3_2GF3 + penknife_3_2GF3 + camera_3_2GF3 + phone_3_2GF3 + speaker_3_2GF3;
  
  var total_sum_girl_festival_3 = sum_girl_festival_3 / 1000;

  $( ".total-weight-girl_festival_3").html(total_sum_girl_festival_3);
});

$(".re-calculate-girl_festival_7").on('click', function(e) {
  var bra_7_2GF7 = parseInt($('.bra_7_2GF7 ').val() * 70);
  var underwear_7_2GF7 = parseInt($('.underwear_7_2GF7 ').val() * 20);
  var socks_7_2GF7 = parseInt($('.socks_7_2GF7 ').val() * 30);
  var hat_7_2GF7 = parseInt($('.hat_7_2GF7 ').val() * 90);
  var kimono_7_2GF7 = parseInt($('.kimono_7_2GF7 ').val() * 300);
  var cami_7_2GF7 = parseInt($('.cami_7_2GF7 ').val() * 90);
  var hoodie_7_2GF7 = parseInt($('.hoodie_7_2GF7 ').val() * 500);
  var sunglasses_7_2GF7 = parseInt($('.sunglasses_7_2GF7 ').val() * 40);
  var purse_7_2GF7 = parseInt($('.purse_7_2GF7 ').val() * 100);
  var hair_band_7_2GF7 = parseInt($('.hair_band_7_2GF7 ').val() * 50);
  var long_socks_7_2GF7 = parseInt($('.long_socks_7_2GF7 ').val() * 30);
  var crop_top_7_2GF7 = parseInt($('.crop_top_7_2GF7 ').val() * 90);
  var shorts_7_2GF7 = parseInt($('.shorts_7_2GF7 ').val() * 400);
  var leggings_7_2GF7 = parseInt($('.leggings_7_2GF7 ').val() * 240);
  var trainers_girl_7_2GF7 = parseInt($('.trainers_girl_7_2GF7 ').val() * 800);
  var wellies_7_2GF7 = parseInt($('.wellies_7_2GF7 ').val() * 1600);
  var rain_mac_7_2GF7 = parseInt($('.rain_mac_7_2GF7 ').val() * 350);
  var bum_bag_7_2GF7 = parseInt($('.bum_bag_7_2GF7 ').val() * 120);
  var skirt_7_2GF7 = parseInt($('.skirt_7_2GF7 ').val() * 250);
  var plimsolls_7_2GF7 = parseInt($('.plimsolls_7_2GF7').val() * 600);
  var flower_garland_7_2GF7 = parseInt($('.flower_garland_7_2GF7 ').val() * 10);
  var jeans_7_2GF7 = parseInt($('.jeans_7_2GF7').val() * 460);
  var backpack_girl_7_2GF7 = parseInt($('.backpack_girl_7_2GF7 ').val() * 460);

  var makeup_7_2GF7 = parseInt($('.makeup_7_2GF7 ').val() * 400);
  var makeup_remover_7_2GF7 = parseInt($('.makeup_remover_7_2GF7 ').val() * 500);
  var sun_cream_7_2GF7 =  parseInt($('.sun_cream_7_2GF7 ').val() * 250);
  var after_sun_7_2GF7 = parseInt($('.after_sun_7_2GF7 ').val() * 250);
  var wash_bag_7_2GF7 = parseInt($('.wash_bag_7_2GF7 ').val() * 50);
  var shampoo_7_2GF7 = parseInt($('.shampoo_7_2GF7 ').val() * 250);
  var hair_products_7_2GF7 = parseInt($('.hair_products_7_2GF7 ').val() * 500);
  var hair_brush_7_2GF7 = parseInt($('.hair_brush_7_2GF7 ').val() * 80);
  var tooth_brush_7_2GF7 = parseInt($('.tooth_brush_7_2GF7 ').val() * 70);
  var tooth_paste_7_2GF7 = parseInt($('.tooth_paste_7_2GF7 ').val() * 70);
  var mouth_wash_7_2GF7 = parseInt($('.mouth_wash_7_2GF7 ').val() * 250);
  var deodorant_7_2GF7 = parseInt($('.deodorant_7_2GF7 ').val() * 150);
  var repellent_7_2GF7 = parseInt($('.repellent_7_2GF7 ').val() * 200);
  var vitamins_7_2GF7 = parseInt($('.vitamins_7_2GF7 ').val() * 50);
  var toilet_roll_7_2GF7 = parseInt($('.toilet_roll_7_2GF7 ').val() * 700);
  var antibacterial_wipes_7_2GF7 = parseInt($('.antibacterial_wipes_7_2GF7 ').val() * 700);

  var towel_7_2GF7 = parseInt($('.towel_7_2GF7 ').val() * 450);
  var camera_7_2GF7 = parseInt($('.camera_7_2GF7 ').val() * 300);   
  var phone_7_2GF7 = parseInt($('.phone_7_2GF7 ').val() * 130);
  var speaker_7_2GF7 = parseInt($('.speaker_7_2GF7 ').val() * 160);
  var tent_7_2GF7 = parseInt($('.tent_7_2GF7 ').val() * 10000);
  var sleeping_bag_7_2GF7 = parseInt($('.sleeping_bag_7_2GF7 ').val() * 2500);
  var roll_matt_7_2GF7 = parseInt($('.roll_matt_7_2GF7 ').val() * 450);
  var camping_chair_7_2GF7  = parseInt($('.camping_chair_7_2GF7 ').val() * 2600);
  var torch_7_2GF7 = parseInt($('.torch_7_2GF7 ').val() * 60);
  var penknife_7_2GF7 = parseInt($('.penknife_7_2GF7 ').val() * 40);

  var sum_girl_festival_7 = bra_7_2GF7 + underwear_7_2GF7 + socks_7_2GF7 + long_socks_7_2GF7 + cami_7_2GF7 + crop_top_7_2GF7 + shorts_7_2GF7 + leggings_7_2GF7 + wellies_7_2GF7 + hat_7_2GF7 + kimono_7_2GF7 + trainers_girl_7_2GF7 + rain_mac_7_2GF7 + hoodie_7_2GF7 + sunglasses_7_2GF7 + flower_garland_7_2GF7 + bum_bag_7_2GF7 + skirt_7_2GF7 + purse_7_2GF7 + plimsolls_7_2GF7 + hair_band_7_2GF7 + wash_bag_7_2GF7 + tooth_brush_7_2GF7 + jeans_7_2GF7 + backpack_girl_7_2GF7 + makeup_7_2GF7 + makeup_remover_7_2GF7 + sun_cream_7_2GF7 + after_sun_7_2GF7 + mouth_wash_7_2GF7 + shampoo_7_2GF7 + hair_products_7_2GF7 + hair_brush_7_2GF7 + toilet_roll_7_2GF7 + tooth_paste_7_2GF7 + mouth_wash_7_2GF7 + deodorant_7_2GF7 + repellent_7_2GF7 + vitamins_7_2GF7 + toilet_roll_7_2GF7 + antibacterial_wipes_7_2GF7 + towel_7_2GF7 + tent_7_2GF7 + sleeping_bag_7_2GF7 + roll_matt_7_2GF7 + camping_chair_7_2GF7 + torch_7_2GF7 + penknife_7_2GF7 + camera_7_2GF7 + phone_7_2GF7 + speaker_7_2GF7;
  
  var total_sum_girl_festival_7 = sum_girl_festival_7 / 1000;

  $( ".total-weight-girl_festival_7").html(total_sum_girl_festival_7);
});

$(".re-calculate-girl_city_3").on('click', function(e) { 
    var bra_3_2GC3 = parseInt($('.bra_3_2GC3').val() * 70);
    var underwear_3_2GC3 = parseInt($('.underwear_3_2GC3').val() * 20);
    var socks_3_2GC3 = parseInt($('.socks_3_2GC3').val() * 30);
    var day_dress_3_2GC3 = parseInt($('.day_dress_3_2GC3').val() * 270);
    var evening_dress_3_2GC3 = parseInt($('.evening_dress_3_2GC3').val() * 270);
    var playsuit_3_2GC3 = parseInt($('.playsuit_3_2GC3').val() * 270);
    var courts_3_2GC3 = parseInt($('.courts_3_2GC3').val() * 570);
    var clutch_3_2GC3 = parseInt($('.clutch_3_2GC3').val() * 500);
    var belt_3_2GC3 = parseInt($('.belt_3_2GC3').val() * 200);
    var umbrella_3_2GC3 = parseInt($('.umbrella_3_2GC3').val() * 400);
    var blazer_3_2GC3 = parseInt($('.blazer_3_2GC3').val() * 550);
    var cardigan_3_2GC3 = parseInt($('.cardigan_3_2GC3').val() * 400);
    var heels_3_2GC3 = parseInt($('.heels_3_2GC3').val() * 570);
    var shorts_3_2GC3 = parseInt($('.shorts_3_2GC3').val() * 400);
    var top_3_2GC3 = parseInt($('.top_3_2GC3').val() * 70);
    var sandals_3_2GC3 = parseInt($('.sandals_3_2GC3').val() * 400);
    var backpack_girl_3_2GC3 = parseInt($('.backpack_girl_3_2GC3').val() * 460);
    var jewellery_3_2GC3 = parseInt($('.jewellery_3_2GC3').val() * 20);
    var sunglasses_3_2GC3 = parseInt($('.sunglasses_3_2GC3').val() * 40);
    var rain_mac_3_2GC3 = parseInt($('.rain_mac_3_2GC3').val() * 350);
    var skirt_3_2GC3 = parseInt($('.skirt_3_2GC3').val() * 250);
    var jeans_3_2GC3 = parseInt($('.jeans_3_2GC3').val() * 460);
    var jacket_3_2GC3 = parseInt($('.jacket_3_2GC3').val() * 600);

    var tissues_3_2GC3 = parseInt($('.tissues_3_2GC3').val() * 20);
    var cleanser_3_2GC3 = parseInt($('.cleanser_3_2GC3').val() * 150);
    var hand_sanitiser_3_2GC3 = parseInt($('.hand_sanitiser_3_2GC3').val() * 150);
    var comb_3_2GC3 = parseInt($('.comb_3_2GC3').val() * 30);
    var moisturiser_3_2GC3 = parseInt($('.moisturiser_3_2GC3').val() * 150);
    var makeup_3_2GC3 = parseInt($('.makeup_3_2GC3').val() * 400);
    var makeup_remover_3_2GC3 = parseInt($('.makeup_remover_3_2GC3').val() * 500);
    var sun_cream_3_2GC3 = parseInt($('.sun_cream_3_2GC3').val() * 250);
    var after_sun_3_2GC3 = parseInt($('.after_sun_3_2GC3').val() * 250);
    var shower_gel_3_2GC3 = parseInt($('.shower_gel_3_2GC3').val() * 500);
    var wash_bag_3_2GC3 = parseInt($('.wash_bag_3_2GC3').val() * 50);
    var razor_3_2GC3 = parseInt($('.razor_3_2GC3').val() * 20);
    var shaving_gel_3_2GC3 = parseInt($('.shaving_gel_3_2GC3').val() * 230);
    var shampoo_3_2GC3 = parseInt($('.shampoo_3_2GC3').val() * 250);
    var conditioner_3_2GC3 = parseInt($('.conditioner_3_2GC3').val() * 250);
    var hair_products_3_2GC3 = parseInt($('.hair_products_3_2GC3').val() * 500);
    var hair_brush_3_2GC3 = parseInt($('.hair_brush_3_2GC3').val() * 80);
    var nail_file_3_2GC3 = parseInt($('.nail_file_3_2GC3').val() * 10);
    var tooth_brush_3_2GC3 = parseInt($('.tooth_brush_3_2GC3').val() * 70);
    var tooth_paste_3_2GC3 = parseInt($('.tooth_paste_3_2GC3').val() * 70);
    var mouth_wash_3_2GC3 = parseInt($('.mouth_wash_3_2GC3').val() * 250);
    var perfume_3_2GC3= parseInt($('.perfume_3_2GC3').val() * 250);
    var deodorant_3_2GC3 = parseInt($('.deodorant_3_2GC3').val() * 150);

    var selfie_stick_3_2GC3 = parseInt($('.selfie_stick_3_2GC3').val() * 450);
    var hair_dryer_3_2GC3 = parseInt($('.hair_dryer_3_2GC3').val() * 1000);
    var vitamins_3_2GC3 = parseInt($('.vitamins_3_2GC3').val() * 50);
    var camera_3_2GC3 = parseInt($('.camera_3_2GC3').val() * 300);   
    var book_3_2GC3 = parseInt($('.book_3_2GC3').val() * 10);
    var tablet_3_2GC3 = parseInt($('.tablet_3_2GC3').val() * 350);
    var phone_3_2GC3 = parseInt($('.phone_3_2GC3').val() * 130);
    var adapter_3_2GC3 = parseInt($('.adapter_3_2GC3').val() * 50);

    var sum_girl_city_3 = bra_3_2GC3 + underwear_3_2GC3 + socks_3_2GC3 + day_dress_3_2GC3 + jeans_3_2GC3 + top_3_2GC3 + evening_dress_3_2GC3 + playsuit_3_2GC3 + shorts_3_2GC3 + courts_3_2GC3 + sandals_3_2GC3 + backpack_girl_3_2GC3 + clutch_3_2GC3 + jewellery_3_2GC3 + sunglasses_3_2GC3 + belt_3_2GC3 + jacket_3_2GC3 + umbrella_3_2GC3 + blazer_3_2GC3 + skirt_3_2GC3 + rain_mac_3_2GC3 + cardigan_3_2GC3 + heels_3_2GC3 + makeup_remover_3_2GC3 + makeup_3_2GC3 + cleanser_3_2GC3 + moisturiser_3_2GC3 + sun_cream_3_2GC3 + after_sun_3_2GC3 + shower_gel_3_2GC3 + wash_bag_3_2GC3 + razor_3_2GC3 + shaving_gel_3_2GC3 + shampoo_3_2GC3 + conditioner_3_2GC3 + hair_products_3_2GC3 + hair_brush_3_2GC3 + comb_3_2GC3 + nail_file_3_2GC3 + tissues_3_2GC3 + tooth_brush_3_2GC3 + tooth_paste_3_2GC3 + mouth_wash_3_2GC3 + perfume_3_2GC3 + deodorant_3_2GC3 + hand_sanitiser_3_2GC3 + selfie_stick_3_2GC3 + book_3_2GC3 + vitamins_3_2GC3 + camera_3_2GC3 + hair_dryer_3_2GC3 + tablet_3_2GC3 + phone_3_2GC3 + adapter_3_2GC3;
    
    var total_sum_girl_city_3 = sum_girl_city_3 / 1000;

    $( ".total-weight-girl_city_3").html(total_sum_girl_city_3);
});

$(".re-calculate-girl_city_7").on('click', function(e) { 
  var bra_7_2GC7 = parseInt($('.bra_7_2GC7').val() * 70);
  var underwear_7_2GC7 = parseInt($('.underwear_7_2GC7').val() * 20);
  var socks_7_2GC7 = parseInt($('.socks_7_2GC7').val() * 30);
  var day_dress_7_2GC7 = parseInt($('.day_dress_7_2GC7').val() * 270);
  var evening_dress_7_2GC7 = parseInt($('.evening_dress_7_2GC7').val() * 270);
  var playsuit_7_2GC7 = parseInt($('.playsuit_7_2GC7').val() * 270);
  var courts_7_2GC7 = parseInt($('.courts_7_2GC7').val() * 570);
  var clutch_7_2GC7 = parseInt($('.clutch_7_2GC7').val() * 500);
  var belt_7_2GC7 = parseInt($('.belt_7_2GC7').val() * 200);
  var umbrella_7_2GC7 = parseInt($('.umbrella_7_2GC7').val() * 400);
  var blazer_7_2GC7 = parseInt($('.blazer_7_2GC7').val() * 550);
  var cardigan_7_2GC7 = parseInt($('.cardigan_7_2GC7').val() * 400);
  var heels_7_2GC7 = parseInt($('.heels_7_2GC7').val() * 570);
  var shorts_7_2GC7 = parseInt($('.shorts_7_2GC7').val() * 400);
  var top_7_2GC7 = parseInt($('.top_7_2GC7').val() * 70);
  var sandals_7_2GC7 = parseInt($('.sandals_7_2GC7').val() * 400);
  var backpack_girl_7_2GC7 = parseInt($('.backpack_girl_7_2GC7').val() * 460);
  var jewellery_7_2GC7 = parseInt($('.jewellery_7_2GC7').val() * 20);
  var sunglasses_7_2GC7 = parseInt($('.sunglasses_7_2GC7').val() * 40);
  var rain_mac_7_2GC7 = parseInt($('.rain_mac_7_2GC7').val() * 350);
  var skirt_7_2GC7 = parseInt($('.skirt_7_2GC7').val() * 250);
  var jeans_7_2GC7 = parseInt($('.jeans_7_2GC7').val() * 460);
  var jacket_7_2GC7 = parseInt($('.jacket_7_2GC7').val() * 600);

  var tissues_7_2GC7 = parseInt($('.tissues_7_2GC7').val() * 20);
  var cleanser_7_2GC7 = parseInt($('.cleanser_7_2GC7').val() * 150);
  var hand_sanitiser_7_2GC7 = parseInt($('.hand_sanitiser_7_2GC7').val() * 150);
  var comb_7_2GC7 = parseInt($('.comb_7_2GC7').val() * 30);
  var moisturiser_7_2GC7 = parseInt($('.moisturiser_7_2GC7').val() * 150);
  var makeup_7_2GC7 = parseInt($('.makeup_7_2GC7').val() * 400);
  var makeup_remover_7_2GC7 = parseInt($('.makeup_remover_7_2GC7').val() * 500);
  var sun_cream_7_2GC7 = parseInt($('.sun_cream_7_2GC7').val() * 250);
  var after_sun_7_2GC7 = parseInt($('.after_sun_7_2GC7').val() * 250);
  var shower_gel_7_2GC7 = parseInt($('.shower_gel_7_2GC7').val() * 500);
  var wash_bag_7_2GC7 = parseInt($('.wash_bag_7_2GC7').val() * 50);
  var razor_7_2GC7 = parseInt($('.razor_7_2GC7').val() * 20);
  var shaving_gel_7_2GC7 = parseInt($('.shaving_gel_7_2GC7').val() * 230);
  var shampoo_7_2GC7 = parseInt($('.shampoo_7_2GC7').val() * 250);
  var conditioner_7_2GC7 = parseInt($('.conditioner_7_2GC7').val() * 250);
  var hair_products_7_2GC7 = parseInt($('.hair_products_7_2GC7').val() * 500);
  var hair_brush_7_2GC7 = parseInt($('.hair_brush_7_2GC7').val() * 80);
  var nail_file_7_2GC7 = parseInt($('.nail_file_7_2GC7').val() * 10);
  var tooth_brush_7_2GC7 = parseInt($('.tooth_brush_7_2GC7').val() * 70);
  var tooth_paste_7_2GC7 = parseInt($('.tooth_paste_7_2GC7').val() * 70);
  var mouth_wash_7_2GC7 = parseInt($('.mouth_wash_7_2GC7').val() * 250);
  var perfume_7_2GC7= parseInt($('.perfume_7_2GC7').val() * 250);
  var deodorant_7_2GC7 = parseInt($('.deodorant_7_2GC7').val() * 150);

  var selfie_stick_7_2GC7 = parseInt($('.selfie_stick_7_2GC7').val() * 450);
  var hair_dryer_7_2GC7 = parseInt($('.hair_dryer_7_2GC7').val() * 1000);
  var vitamins_7_2GC7 = parseInt($('.vitamins_7_2GC7').val() * 50);
  var camera_7_2GC7 = parseInt($('.camera_7_2GC7').val() * 300);   
  var book_7_2GC7 = parseInt($('.book_7_2GC7').val() * 10);
  var tablet_7_2GC7 = parseInt($('.tablet_7_2GC7').val() * 350);
  var phone_7_2GC7 = parseInt($('.phone_7_2GC7').val() * 130);
  var adapter_7_2GC7 = parseInt($('.adapter_7_2GC7').val() * 50);

  var sum_girl_city_7 = bra_7_2GC7 + underwear_7_2GC7 + socks_7_2GC7 + day_dress_7_2GC7 + jeans_7_2GC7 + top_7_2GC7 + evening_dress_7_2GC7 + playsuit_7_2GC7 + shorts_7_2GC7 + courts_7_2GC7 + sandals_7_2GC7 + backpack_girl_7_2GC7 + clutch_7_2GC7 + jewellery_7_2GC7 + sunglasses_7_2GC7 + belt_7_2GC7 + jacket_7_2GC7 + umbrella_7_2GC7 + blazer_7_2GC7 + skirt_7_2GC7 + rain_mac_7_2GC7 + cardigan_7_2GC7 + heels_7_2GC7 + makeup_7_2GC7 + makeup_remover_7_2GC7 + cleanser_7_2GC7 + moisturiser_7_2GC7 + sun_cream_7_2GC7 + after_sun_7_2GC7 + shower_gel_7_2GC7 + wash_bag_7_2GC7 + razor_7_2GC7 + shaving_gel_7_2GC7 + shampoo_7_2GC7 + conditioner_7_2GC7 + hair_products_7_2GC7 + hair_brush_7_2GC7 + comb_7_2GC7 + nail_file_7_2GC7 + tissues_7_2GC7 + tooth_brush_7_2GC7 + tooth_paste_7_2GC7 + mouth_wash_7_2GC7 + perfume_7_2GC7 + deodorant_7_2GC7 + hand_sanitiser_7_2GC7 + selfie_stick_7_2GC7 + book_7_2GC7 + vitamins_7_2GC7 + camera_7_2GC7 + hair_dryer_7_2GC7 + tablet_7_2GC7 + phone_7_2GC7 + adapter_7_2GC7;
  
  var total_sum_girl_city_7 = sum_girl_city_7 / 1000;

  $( ".total-weight-girl_city_7").html(total_sum_girl_city_7);
});

$(".re-calculate-girl_city_14").on('click', function(e) { 
  var bra_14_2GC14 = parseInt($('.bra_14_2GC14').val() * 70);
  var underwear_14_2GC14 = parseInt($('.underwear_14_2GC14').val() * 20);
  var socks_14_2GC14 = parseInt($('.socks_14_2GC14').val() * 30);
  var day_dress_14_2GC14 = parseInt($('.day_dress_14_2GC14').val() * 270);
  var evening_dress_14_2GC14 = parseInt($('.evening_dress_14_2GC14').val() * 270);
  var playsuit_14_2GC14 = parseInt($('.playsuit_14_2GC14').val() * 270);
  var courts_14_2GC14 = parseInt($('.courts_14_2GC14').val() * 570);
  var clutch_14_2GC14 = parseInt($('.clutch_14_2GC14').val() * 500);
  var belt_14_2GC14 = parseInt($('.belt_14_2GC14').val() * 200);
  var umbrella_14_2GC14 = parseInt($('.umbrella_14_2GC14').val() * 400);
  var blazer_14_2GC14 = parseInt($('.blazer_14_2GC14').val() * 550);
  var cardigan_14_2GC14 = parseInt($('.cardigan_14_2GC14').val() * 400);
  var heels_14_2GC14 = parseInt($('.heels_14_2GC14').val() * 570);
  var shorts_14_2GC14 = parseInt($('.shorts_14_2GC14').val() * 400);
  var top_14_2GC14 = parseInt($('.top_14_2GC14').val() * 70);
  var sandals_14_2GC14 = parseInt($('.sandals_14_2GC14').val() * 400);
  var backpack_girl_14_2GC14 = parseInt($('.backpack_girl_14_2GC14').val() * 460);
  var jewellery_14_2GC14 = parseInt($('.jewellery_14_2GC14').val() * 20);
  var sunglasses_14_2GC14 = parseInt($('.sunglasses_14_2GC14').val() * 40);
  var rain_mac_14_2GC14 = parseInt($('.rain_mac_14_2GC14').val() * 350);
  var skirt_14_2GC14 = parseInt($('.skirt_14_2GC14').val() * 250);
  var jeans_14_2GC14 = parseInt($('.jeans_14_2GC14').val() * 460);
  var jacket_14_2GC14 = parseInt($('.jacket_14_2GC14').val() * 600);

  var tissues_14_2GC14 = parseInt($('.tissues_14_2GC14').val() * 20);
  var cleanser_14_2GC14 = parseInt($('.cleanser_14_2GC14').val() * 150);
  var hand_sanitiser_14_2GC14 = parseInt($('.hand_sanitiser_14_2GC14').val() * 150);
  var comb_14_2GC14 = parseInt($('.comb_14_2GC14').val() * 30);
  var moisturiser_14_2GC14 = parseInt($('.moisturiser_14_2GC14').val() * 150);
  var makeup_14_2GC14 = parseInt($('.makeup_14_2GC14').val() * 400);
  var makeup_remover_14_2GC14 = parseInt($('.makeup_remover_14_2GC14').val() * 500);
  var sun_cream_14_2GC14 = parseInt($('.sun_cream_14_2GC14').val() * 250);
  var after_sun_14_2GC14 = parseInt($('.after_sun_14_2GC14').val() * 250);
  var shower_gel_14_2GC14 = parseInt($('.shower_gel_14_2GC14').val() * 500);
  var wash_bag_14_2GC14 = parseInt($('.wash_bag_14_2GC14').val() * 50);
  var razor_14_2GC14 = parseInt($('.razor_14_2GC14').val() * 20);
  var shaving_gel_14_2GC14 = parseInt($('.shaving_gel_14_2GC14').val() * 230);
  var shampoo_14_2GC14 = parseInt($('.shampoo_14_2GC14').val() * 250);
  var conditioner_14_2GC14 = parseInt($('.conditioner_14_2GC14').val() * 250);
  var hair_products_14_2GC14 = parseInt($('.hair_products_14_2GC14').val() * 500);
  var hair_brush_14_2GC14 = parseInt($('.hair_brush_14_2GC14').val() * 80);
  var nail_file_14_2GC14 = parseInt($('.nail_file_14_2GC14').val() * 10);
  var tooth_brush_14_2GC14 = parseInt($('.tooth_brush_14_2GC14').val() * 70);
  var tooth_paste_14_2GC14 = parseInt($('.tooth_paste_14_2GC14').val() * 70);
  var mouth_wash_14_2GC14 = parseInt($('.mouth_wash_14_2GC14').val() * 250);
  var perfume_14_2GC14= parseInt($('.perfume_14_2GC14').val() * 250);
  var deodorant_14_2GC14 = parseInt($('.deodorant_14_2GC14').val() * 150);

  var selfie_stick_14_2GC14 = parseInt($('.selfie_stick_14_2GC14').val() * 450);
  var hair_dryer_14_2GC14 = parseInt($('.hair_dryer_14_2GC14').val() * 1000);
  var vitamins_14_2GC14 = parseInt($('.vitamins_14_2GC14').val() * 50);
  var camera_14_2GC14 = parseInt($('.camera_14_2GC14').val() * 300);   
  var book_14_2GC14 = parseInt($('.book_14_2GC14').val() * 10);
  var tablet_14_2GC14 = parseInt($('.tablet_14_2GC14').val() * 350);
  var phone_14_2GC14 = parseInt($('.phone_14_2GC14').val() * 130);
  var adapter_14_2GC14 = parseInt($('.adapter_14_2GC14').val() * 50);

  var sum_girl_city_14 = bra_14_2GC14 + underwear_14_2GC14 + socks_14_2GC14 + day_dress_14_2GC14 + jeans_14_2GC14 + top_14_2GC14 + evening_dress_14_2GC14 + playsuit_14_2GC14 + shorts_14_2GC14 + courts_14_2GC14 + sandals_14_2GC14 + backpack_girl_14_2GC14 + clutch_14_2GC14 + jewellery_14_2GC14 + sunglasses_14_2GC14 + belt_14_2GC14 + jacket_14_2GC14 + umbrella_14_2GC14 + blazer_14_2GC14 + skirt_14_2GC14 + rain_mac_14_2GC14 + cardigan_14_2GC14 + heels_14_2GC14 + makeup_remover_14_2GC14 + makeup_14_2GC14 + cleanser_14_2GC14 + moisturiser_14_2GC14 + sun_cream_14_2GC14 + after_sun_14_2GC14 + shower_gel_14_2GC14 + wash_bag_14_2GC14 + razor_14_2GC14 + shaving_gel_14_2GC14 + shampoo_14_2GC14 + conditioner_14_2GC14 + hair_products_14_2GC14 + hair_brush_14_2GC14 + comb_14_2GC14 + nail_file_14_2GC14 + tissues_14_2GC14 + tooth_brush_14_2GC14 + tooth_paste_14_2GC14 + mouth_wash_14_2GC14 + perfume_14_2GC14 + deodorant_14_2GC14 + hand_sanitiser_14_2GC14 + selfie_stick_14_2GC14 + book_14_2GC14 + vitamins_14_2GC14 + camera_14_2GC14 + hair_dryer_14_2GC14 + tablet_14_2GC14 + phone_14_2GC14 + adapter_14_2GC14;
  
  var total_sum_girl_city_14 = sum_girl_city_14 / 1000;
  $( ".total-weight-girl_city_14").html(total_sum_girl_city_14);
});

$(".re-calculate-boy_beach_3").on('click', function(e) { 
  var hat_3_2 = parseInt($('.hat_3_2').val() * 90);
  var hoodie_3_2 = parseInt($('.hoodie_3_2').val() * 500);
  var sunglasses_3_2 = parseInt($('.sunglasses_3_2').val() * 40);
  var underwear_boy_3_2 = parseInt($('.underwear_boy_3_2').val() * 60);
  var socks_boy_3_2 = parseInt($('.socks_boy_3_2').val() * 60);
  var flip_flops_3_2 = parseInt($('.flip_flops_3_2').val() * 50);
  var shorts_boy_3_2 = parseInt($('.shorts_boy_3_2').val() * 480);
  var shirt_3_2 = parseInt($('.shirt_3_2').val() * 250);
  var vest_3_2 = parseInt($('.vest_3_2').val() * 120);
  var swim_shorts_3_2 = parseInt($('.swim_shorts_3_2').val() * 400);
  var tee_boy_3_2 = parseInt($('.tee_boy_3_2').val() * 140);
  var trainers_3_2 = parseInt($('.trainers_3_2').val() * 800);
  var trousers_boy_3_2 = parseInt($('.trousers_boy_3_2').val() * 600);
  var backpack_3_2 = parseInt($('.backpack_3_2').val() * 400);
  var wallet_3_2 = parseInt($('.wallet_3_2').val() * 70);

  var sun_cream_3_2 = parseInt($('.sun_cream_3_2').val() * 250);
  var after_sun_3_2 = parseInt($('.after_sun_3_2').val() * 250);
  var shower_gel_3_2 = parseInt($('.shower_gel_3_2').val() * 500);
  var wash_bag_3_2 = parseInt($('.wash_bag_3_2').val() * 50);
  var razor_3_2 = parseInt($('.razor_3_2').val() * 20);
  var shaving_gel_3_2 = parseInt($('.shaving_gel_3_2').val() * 230);
  var shampoo_3_2 = parseInt($('.shampoo_3_2').val() * 250);
  var conditioner_3_2 = parseInt($('.conditioner_3_2').val() * 250);
  var hair_products_3_2 = parseInt($('.hair_products_3_2').val() * 500);
  var tooth_brush_3_2 = parseInt($('.tooth_brush_3_2').val() * 70);
  var tooth_paste_3_2 = parseInt($('.tooth_paste_3_2').val() * 70);
  var mouth_wash_3_2 = parseInt($('.mouth_wash_3_2').val() * 250);
  var deodorant_3_2 = parseInt($('.deodorant_3_2').val() * 150);
  var repellent_3_2 = parseInt($('.repellent_3_2').val() * 200);

  var comb_3_2 = parseInt($('.comb_3_2').val() * 30);
  var moisturiser_3_2 = parseInt($('.moisturiser_3_2').val() * 150);
  var after_shave_3_2 = parseInt($('.after_shave_3_2').val() * 250);

  var headphones_3_2 = parseInt($('.headphones_3_2').val() * 500);
  var towel_3_2 = parseInt($('.towel_3_2').val() * 450);
  var camera_3_2 = parseInt($('.camera_3_2').val() * 300);   
  var book_3_2 = parseInt($('.book_3_2').val() * 10);
  var tablet_3_2 = parseInt($('.tablet_3_2').val() * 350);
  var phone_3_2 = parseInt($('.phone_3_2').val() * 130);
  var speaker_3_2 = parseInt($('.speaker_3_2').val() * 160);
  var adapter_3_2 = parseInt($('.adapter_3_2').val() * 50);

  var sum_boy_beach_3 = after_shave_3_2 + underwear_boy_3_2 + socks_boy_3_2 + flip_flops_3_2 + shorts_boy_3_2 + shirt_3_2 + vest_3_2 + trousers_boy_3_2 + sunglasses_3_2 + swim_shorts_3_2 + tee_boy_3_2 + trainers_3_2 + hoodie_3_2 + hat_3_2 + backpack_3_2 + wallet_3_2 + sun_cream_3_2 + after_sun_3_2 + shower_gel_3_2 + moisturiser_3_2 + wash_bag_3_2 + razor_3_2 + shaving_gel_3_2 + shampoo_3_2 + conditioner_3_2 + hair_products_3_2 + comb_3_2 + tooth_brush_3_2 + tooth_paste_3_2 + mouth_wash_3_2 + deodorant_3_2 + repellent_3_2 + headphones_3_2 + towel_3_2 + camera_3_2 + book_3_2 + tablet_3_2 + phone_3_2 + speaker_3_2 + adapter_3_2 ;
  
  var total_sum_boy_beach_3 = sum_boy_beach_3 / 1000;

  $( ".total-weight-boy_beach_3").html(total_sum_boy_beach_3);
});

$(".re-calculate-boy_beach_7").on('click', function(e) { 
  var hat_7_2 = parseInt($('.hat_7_2').val() * 90);
  var hoodie_7_2 = parseInt($('.hoodie_7_2').val() * 500);
  var sunglasses_7_2 = parseInt($('.sunglasses_7_2').val() * 40);
  var underwear_boy_7_2 = parseInt($('.underwear_boy_7_2').val() * 60);
  var socks_boy_7_2 = parseInt($('.socks_boy_7_2').val() * 60);
  var flip_flops_7_2 = parseInt($('.flip_flops_7_2').val() * 50);
  var shorts_boy_7_2 = parseInt($('.shorts_boy_7_2').val() * 480);
  var shirt_7_2 = parseInt($('.shirt_7_2').val() * 250);
  var vest_7_2 = parseInt($('.vest_7_2').val() * 120);
  var swim_shorts_7_2 = parseInt($('.swim_shorts_7_2').val() * 400);
  var tee_boy_7_2 = parseInt($('.tee_boy_7_2').val() * 140);
  var trainers_7_2 = parseInt($('.trainers_7_2').val() * 800);
  var trousers_boy_7_2 = parseInt($('.trousers_boy_7_2').val() * 600);
  var backpack_7_2 = parseInt($('.backpack_7_2').val() * 400);
  var wallet_7_2 = parseInt($('.wallet_7_2').val() * 70);

  var sun_cream_7_2 = parseInt($('.sun_cream_7_2').val() * 250);
  var after_sun_7_2 = parseInt($('.after_sun_7_2').val() * 250);
  var shower_gel_7_2 = parseInt($('.shower_gel_7_2').val() * 500);
  var wash_bag_7_2 = parseInt($('.wash_bag_7_2').val() * 50);
  var razor_7_2 = parseInt($('.razor_7_2').val() * 20);
  var shaving_gel_7_2 = parseInt($('.shaving_gel_7_2').val() * 230);
  var shampoo_7_2 = parseInt($('.shampoo_7_2').val() * 250);
  var conditioner_7_2 = parseInt($('.conditioner_7_2').val() * 250);
  var hair_products_7_2 = parseInt($('.hair_products_7_2').val() * 500);
  var tooth_brush_7_2 = parseInt($('.tooth_brush_7_2').val() * 70);
  var tooth_paste_7_2 = parseInt($('.tooth_paste_7_2').val() * 70);
  var mouth_wash_7_2 = parseInt($('.mouth_wash_7_2').val() * 250);
  var deodorant_7_2 = parseInt($('.deodorant_7_2').val() * 150);
  var repellent_7_2 = parseInt($('.repellent_7_2').val() * 200);

  var comb_7_2 = parseInt($('.comb_7_2').val() * 30);
  var moisturiser_7_2 = parseInt($('.moisturiser_7_2').val() * 150);
  var after_shave_7_2 = parseInt($('.after_shave_7_2').val() * 250);

  var headphones_7_2 = parseInt($('.headphones_7_2').val() * 500);
  var towel_7_2 = parseInt($('.towel_7_2').val() * 450);
  var camera_7_2 = parseInt($('.camera_7_2').val() * 300);   
  var book_7_2 = parseInt($('.book_7_2').val() * 10);
  var tablet_7_2 = parseInt($('.tablet_7_2').val() * 350);
  var phone_7_2 = parseInt($('.phone_7_2').val() * 130);
  var speaker_7_2 = parseInt($('.speaker_7_2').val() * 160);
  var adapter_7_2 = parseInt($('.adapter_7_2').val() * 50);

  var sum_boy_beach_7 = after_shave_7_2 + underwear_boy_7_2 + socks_boy_7_2 + flip_flops_7_2 + shorts_boy_7_2 + shirt_7_2 + vest_7_2 + trousers_boy_7_2 + sunglasses_7_2 + swim_shorts_7_2 + tee_boy_7_2 + trainers_7_2 + hoodie_7_2 + hat_7_2 + backpack_7_2 + wallet_7_2 + sun_cream_7_2 + after_sun_7_2 + shower_gel_7_2 + moisturiser_7_2 + wash_bag_7_2 + razor_7_2 + shaving_gel_7_2 + shampoo_7_2 + conditioner_7_2 + hair_products_7_2 + comb_7_2 + tooth_brush_7_2 + tooth_paste_7_2 + mouth_wash_7_2 + deodorant_7_2 + repellent_7_2 + headphones_7_2 + towel_7_2 + camera_7_2 + book_7_2 + tablet_7_2 + phone_7_2 + speaker_7_2 + adapter_7_2 ;
  
  var total_sum_boy_beach_7 = sum_boy_beach_7 / 1000;

  $( ".total-weight-boy_beach_7").html(total_sum_boy_beach_7);
});

$(".re-calculate-boy_beach_14").on('click', function(e) { 
  var hat_14_2 = parseInt($('.hat_14_2').val() * 90);
  var hoodie_14_2 = parseInt($('.hoodie_14_2').val() * 500);
  var sunglasses_14_2 = parseInt($('.sunglasses_14_2').val() * 40);
  var underwear_boy_14_2 = parseInt($('.underwear_boy_14_2').val() * 60);
  var socks_boy_14_2 = parseInt($('.socks_boy_14_2').val() * 60);
  var flip_flops_14_2 = parseInt($('.flip_flops_14_2').val() * 50);
  var shorts_boy_14_2 = parseInt($('.shorts_boy_14_2').val() * 480);
  var shirt_14_2 = parseInt($('.shirt_14_2').val() * 250);
  var vest_14_2 = parseInt($('.vest_14_2').val() * 120);
  var swim_shorts_14_2 = parseInt($('.swim_shorts_14_2').val() * 400);
  var tee_boy_14_2 = parseInt($('.tee_boy_14_2').val() * 140);
  var trainers_14_2 = parseInt($('.trainers_14_2').val() * 800);
  var trousers_boy_14_2 = parseInt($('.trousers_boy_14_2').val() * 600);
  var backpack_14_2 = parseInt($('.backpack_14_2').val() * 400);
  var wallet_14_2 = parseInt($('.wallet_14_2').val() * 70);

  var sun_cream_14_2 = parseInt($('.sun_cream_14_2').val() * 250);
  var after_sun_14_2 = parseInt($('.after_sun_14_2').val() * 250);
  var shower_gel_14_2 = parseInt($('.shower_gel_14_2').val() * 500);
  var wash_bag_14_2 = parseInt($('.wash_bag_14_2').val() * 50);
  var razor_14_2 = parseInt($('.razor_14_2').val() * 20);
  var shaving_gel_14_2 = parseInt($('.shaving_gel_14_2').val() * 230);
  var shampoo_14_2 = parseInt($('.shampoo_14_2').val() * 250);
  var conditioner_14_2 = parseInt($('.conditioner_14_2').val() * 250);
  var hair_products_14_2 = parseInt($('.hair_products_14_2').val() * 500);
  var tooth_brush_14_2 = parseInt($('.tooth_brush_14_2').val() * 70);
  var tooth_paste_14_2 = parseInt($('.tooth_paste_14_2').val() * 70);
  var mouth_wash_14_2 = parseInt($('.mouth_wash_14_2').val() * 250);
  var deodorant_14_2 = parseInt($('.deodorant_14_2').val() * 150);
  var repellent_14_2 = parseInt($('.repellent_14_2').val() * 200);

  var comb_14_2 = parseInt($('.comb_14_2').val() * 30);
  var moisturiser_14_2 = parseInt($('.moisturiser_14_2').val() * 150);
  var after_shave_14_2 = parseInt($('.after_shave_14_2').val() * 250);

  var headphones_14_2 = parseInt($('.headphones_14_2').val() * 500);
  var towel_14_2 = parseInt($('.towel_14_2').val() * 450);
  var camera_14_2 = parseInt($('.camera_14_2').val() * 300);   
  var book_14_2 = parseInt($('.book_14_2').val() * 10);
  var tablet_14_2 = parseInt($('.tablet_14_2').val() * 350);
  var phone_14_2 = parseInt($('.phone_14_2').val() * 130);
  var speaker_14_2 = parseInt($('.speaker_14_2').val() * 160);
  var adapter_14_2 = parseInt($('.adapter_14_2').val() * 50);

  var sum_boy_beach_14 = after_shave_14_2 + underwear_boy_14_2 + socks_boy_14_2 + flip_flops_14_2 + shorts_boy_14_2 + shirt_14_2 + vest_14_2 + trousers_boy_14_2 + sunglasses_14_2 + swim_shorts_14_2 + tee_boy_14_2 + trainers_14_2 + hoodie_14_2 + hat_14_2 + backpack_14_2 + wallet_14_2 + sun_cream_14_2 + after_sun_14_2 + shower_gel_14_2 + moisturiser_14_2 + wash_bag_14_2 + razor_14_2 + shaving_gel_14_2 + shampoo_14_2 + conditioner_14_2 + hair_products_14_2 + comb_14_2 + tooth_brush_14_2 + tooth_paste_14_2 + mouth_wash_14_2 + deodorant_14_2 + repellent_14_2 + headphones_14_2 + towel_14_2 + camera_14_2 + book_14_2 + tablet_14_2 + phone_14_2 + speaker_14_2 + adapter_14_2 ;
  
  var total_sum_boy_beach_14 = sum_boy_beach_14 / 1000;

  $( ".total-weight-boy_beach_14").html(total_sum_boy_beach_14);
});

$(".re-calculate-boy_festival_3").on('click', function(e) { 
  var hat_3_2F = parseInt($('.hat_3_2F').val() * 90);
  var hoodie_3_2F = parseInt($('.hoodie_3_2F').val() * 500);
  var sunglasses_3_2F = parseInt($('.sunglasses_3_2F').val() * 40);
  var underwear_boy_3_2F = parseInt($('.underwear_boy_3_2F').val() * 60);
  var socks_boy_3_2F = parseInt($('.socks_boy_3_2F').val() * 60);
  var flip_flops_3_2F = parseInt($('.flip_flops_3_2F').val() * 50);
  var shorts_boy_3_2F = parseInt($('.shorts_boy_3_2F').val() * 480);
  var shirt_3_2F = parseInt($('.shirt_3_2F').val() * 250);
  var vest_3_2F = parseInt($('.vest_3_2F').val() * 120);
  var tee_boy_3_2F = parseInt($('.tee_boy_3_2F').val() * 140);
  var trainers_3_2F = parseInt($('.trainers_3_2F').val() * 800);
  var trousers_boy_3_2F = parseInt($('.trousers_boy_3_2F').val() * 600);
  var backpack_3_2F = parseInt($('.backpack_3_2F').val() * 400);
  var wallet_3_2F = parseInt($('.wallet_3_2F').val() * 70);

  var sweatshirt_3_2F = parseInt($('.sweatshirt_3_2F').val() * 300);
  var jeans_boy_3_2F = parseInt($('.jeans_boy_3_2F').val() * 700);
  var wellies_3_2F = parseInt($('.wellies_3_2F').val() * 1600);
  var rain_mac_3_2F = parseInt($('.rain_mac_3_2F').val() * 350);
  var bum_bag_3_2F = parseInt($('.bum_bag_3_2F').val() * 120);

  var sun_cream_3_2F = parseInt($('.sun_cream_3_2F').val() * 250);
  var after_sun_3_2F = parseInt($('.after_sun_3_2F').val() * 250);
  var wash_bag_3_2F = parseInt($('.wash_bag_3_2F').val() * 50);
  var hair_products_3_2F= parseInt($('.hair_products_3_2F').val() * 500);
  var tooth_brush_3_2F = parseInt($('.tooth_brush_3_2F').val() * 70);
  var tooth_paste_3_2F = parseInt($('.tooth_paste_3_2F').val() * 70);
  var mouth_wash_3_2F = parseInt($('.mouth_wash_3_2F').val() * 250);
  var deodorant_3_2F = parseInt($('.deodorant_3_2F').val() * 150);
  var repellent_3_2F = parseInt($('.repellent_3_2F').val() * 200);

  var comb_3_2F = parseInt($('.comb_3_2F').val() * 30);
  var moisturiser_3_2F = parseInt($('.moisturiser_3_2F').val() * 150);
  var after_shave_3_2F = parseInt($('.after_shave_3_2F').val() * 250);
  var vitamins_3_2F = parseInt($('.vitamins_3_2F').val() * 50);
  var toilet_roll_3_2F = parseInt($('.toilet_roll_3_2F').val() * 700);
  var antibacterial_wipes_3_2F = parseInt($('.antibacterial_wipes_3_2F').val() * 700);

  var towel_3_2F = parseInt($('.towel_3_2F').val() * 450);
  var phone_3_2F = parseInt($('.phone_3_2F').val() * 130);
  var speaker_3_2F= parseInt($('.speaker_3_2F').val() * 160);
  var tent_3_2F = parseInt($('.tent_3_2F').val() * 10000);
  var sleeping_bag_3_2F = parseInt($('.sleeping_bag_3_2F').val() * 2500);
  var roll_matt_3_2F = parseInt($('.roll_matt_3_2F').val() * 450);
  var camping_chair_3_2F = parseInt($('.camping_chair_3_2F').val() * 2600);
  var torch_3_2F = parseInt($('.torch_3_2F').val() * 60);
  var penknife_3_2F = parseInt($('.penknife_3_2F').val() * 40);
  var camera_3_2F = parseInt($('.camera_3_2F').val() * 300);   
 
  var sum_boy_festival_3 = underwear_boy_3_2F + socks_boy_3_2F + tee_boy_3_2F + shorts_boy_3_2F + vest_3_2F + flip_flops_3_2F + wellies_3_2F + trainers_3_2F + rain_mac_3_2F + sweatshirt_3_2F + hoodie_3_2F + hat_3_2F + sunglasses_3_2F + bum_bag_3_2F + shirt_3_2F + jeans_boy_3_2F + backpack_3_2F + wallet_3_2F + sun_cream_3_2F + after_sun_3_2F + wash_bag_3_2F + hair_products_3_2F + comb_3_2F + tooth_brush_3_2F + tooth_paste_3_2F + mouth_wash_3_2F + deodorant_3_2F + repellent_3_2F + vitamins_3_2F + toilet_roll_3_2F + antibacterial_wipes_3_2F + towel_3_2F + tent_3_2F + sleeping_bag_3_2F + roll_matt_3_2F + camping_chair_3_2F + torch_3_2F + penknife_3_2F + camera_3_2F + phone_3_2F + speaker_3_2F;    

  var total_sum_boy_festival_3 = sum_boy_festival_3 / 1000;

 $( ".total-weight-boy_festival_3").html(total_sum_boy_festival_3);
});

$(".re-calculate-boy_festival_7").on('click', function(e) { 
  var hat_7_2F = parseInt($('.hat_7_2F').val() * 90);
  var hoodie_7_2F = parseInt($('.hoodie_7_2F').val() * 500);
  var sunglasses_7_2F = parseInt($('.sunglasses_7_2F').val() * 40);
  var underwear_boy_7_2F = parseInt($('.underwear_boy_7_2F').val() * 60);
  var socks_boy_7_2F = parseInt($('.socks_boy_7_2F').val() * 60);
  var flip_flops_7_2F = parseInt($('.flip_flops_7_2F').val() * 50);
  var shorts_boy_7_2F = parseInt($('.shorts_boy_7_2F').val() * 480);
  var shirt_7_2F = parseInt($('.shirt_7_2F').val() * 250);
  var vest_7_2F = parseInt($('.vest_7_2F').val() * 120);
  var tee_boy_7_2F = parseInt($('.tee_boy_7_2F').val() * 140);
  var trainers_7_2F = parseInt($('.trainers_7_2F').val() * 800);
  var trousers_boy_7_2F = parseInt($('.trousers_boy_7_2F').val() * 600);
  var backpack_7_2F = parseInt($('.backpack_7_2F').val() * 400);
  var wallet_7_2F = parseInt($('.wallet_7_2F').val() * 70);

  var sweatshirt_7_2F = parseInt($('.sweatshirt_7_2F').val() * 300);
  var jeans_boy_7_2F = parseInt($('.jeans_boy_7_2F').val() * 700);
  var wellies_7_2F = parseInt($('.wellies_7_2F').val() * 1600);
  var rain_mac_7_2F = parseInt($('.rain_mac_7_2F').val() * 350);
  var bum_bag_7_2F = parseInt($('.bum_bag_7_2F').val() * 120);

  var sun_cream_7_2F = parseInt($('.sun_cream_7_2F').val() * 250);
  var after_sun_7_2F = parseInt($('.after_sun_7_2F').val() * 250);
  var wash_bag_7_2F = parseInt($('.wash_bag_7_2F').val() * 50);
  var hair_products_7_2F= parseInt($('.hair_products_7_2F').val() * 500);
  var tooth_brush_7_2F = parseInt($('.tooth_brush_7_2F').val() * 70);
  var tooth_paste_7_2F = parseInt($('.tooth_paste_7_2F').val() * 70);
  var mouth_wash_7_2F = parseInt($('.mouth_wash_7_2F').val() * 250);
  var deodorant_7_2F = parseInt($('.deodorant_7_2F').val() * 150);
  var repellent_7_2F = parseInt($('.repellent_7_2F').val() * 200);

  var comb_7_2F = parseInt($('.comb_7_2F').val() * 30);
  var moisturiser_7_2F = parseInt($('.moisturiser_7_2F').val() * 150);
  var after_shave_7_2F = parseInt($('.after_shave_7_2F').val() * 250);
  var vitamins_7_2F = parseInt($('.vitamins_7_2F').val() * 50);
  var toilet_roll_7_2F = parseInt($('.toilet_roll_7_2F').val() * 700);
  var antibacterial_wipes_7_2F = parseInt($('.antibacterial_wipes_7_2F').val() * 700);

  var towel_7_2F = parseInt($('.towel_7_2F').val() * 450);
  var phone_7_2F = parseInt($('.phone_7_2F').val() * 130);
  var speaker_7_2F= parseInt($('.speaker_7_2F').val() * 160);
  var tent_7_2F = parseInt($('.tent_7_2F').val() * 10000);
  var sleeping_bag_7_2F = parseInt($('.sleeping_bag_7_2F').val() * 2500);
  var roll_matt_7_2F = parseInt($('.roll_matt_7_2F').val() * 450);
  var camping_chair_7_2F = parseInt($('.camping_chair_7_2F').val() * 2600);
  var torch_7_2F = parseInt($('.torch_7_2F').val() * 60);
  var penknife_7_2F = parseInt($('.penknife_7_2F').val() * 40);
  var camera_7_2F = parseInt($('.camera_7_2F').val() * 300);   
 
  var sum_boy_festival_7 = underwear_boy_7_2F + socks_boy_7_2F + tee_boy_7_2F + shorts_boy_7_2F + vest_7_2F + flip_flops_7_2F + wellies_7_2F + trainers_7_2F + rain_mac_7_2F + sweatshirt_7_2F + hoodie_7_2F + hat_7_2F + sunglasses_7_2F + bum_bag_7_2F + shirt_7_2F + jeans_boy_7_2F + backpack_7_2F + wallet_7_2F + sun_cream_7_2F + after_sun_7_2F + wash_bag_7_2F + hair_products_7_2F + comb_7_2F + tooth_brush_7_2F + tooth_paste_7_2F + mouth_wash_7_2F + deodorant_7_2F + repellent_7_2F + vitamins_7_2F + toilet_roll_7_2F + antibacterial_wipes_7_2F + towel_7_2F + tent_7_2F + sleeping_bag_7_2F + roll_matt_7_2F + camping_chair_7_2F + torch_7_2F + penknife_7_2F + camera_7_2F + phone_7_2F + speaker_7_2F;    

  var total_sum_boy_festival_7 = sum_boy_festival_7 / 1000;

 $( ".total-weight-boy_festival_7").html(total_sum_boy_festival_7);
});

$(".re-calculate-boy_city_3").on('click', function(e) { 
  var sunglasses_3_2C = parseInt($('.sunglasses_3_2C').val() * 40);
  var underwear_boy_3_2C = parseInt($('.underwear_boy_3_2C').val() * 60);
  var socks_boy_3_2C = parseInt($('.socks_boy_3_2C').val() * 60);
  var shorts_boy_3_2C = parseInt($('.shorts_boy_3_2C').val() * 480);
  var shirt_3_2C = parseInt($('.shirt_3_2C').val() * 250);
  var tee_boy_3_2C = parseInt($('.tee_boy_3_2C').val() * 140);
  var trainers_3_2C = parseInt($('.trainers_3_2C').val() * 800);
  var jeans_boy_3_2C = parseInt($('.jeans_boy_3_2C').val() * 600);
  var wallet_3_2C = parseInt($('.wallet_3_2C').val() * 70);

  var sweatshirt_3_2C = parseInt($('.sweatshirt_3_2C').val() * 300);
  var jeans_boy_3_2C = parseInt($('.jeans_boy_3_2C').val() * 700);

  var trousers_boy_3_2C = parseInt($('.trousers_boy_3_2C').val() * 600);
  var chinos_3_2C = parseInt($('.chinos_3_2C').val() * 600);
  var jacket_3_2C = parseInt($('.jacket_3_2C').val() * 600);
  var smart_shoes_3_2C = parseInt($('.smart_shoes_3_2C').val() * 1500);
  var belt_3_2C = parseInt($('.belt_3_2C').val() * 200);
  var blazer_3_2C = parseInt($('.blazer_3_2C').val() * 500);

  var sun_cream_3_2C = parseInt($('.sun_cream_3_2C').val() * 250);
  var after_sun_3_2C = parseInt($('.after_sun_3_2C').val() * 250);
  var shower_gel_3_2C = parseInt($('.shower_gel_3_2C').val() * 500);
  var wash_bag_3_2C = parseInt($('.wash_bag_3_2C').val() * 50);
  var razor_3_2C = parseInt($('.razor_3_2C').val() * 20);
  var shaving_gel_3_2C = parseInt($('.shaving_gel_3_2C').val() * 230);
  var shampoo_3_2C = parseInt($('.shampoo_3_2C').val() * 250);
  var conditioner_3_2C = parseInt($('.conditioner_3_2C').val() * 250);
  var hair_products_3_2C = parseInt($('.hair_products_3_2C').val() * 500);
  var tooth_brush_3_2C = parseInt($('.tooth_brush_3_2C').val() * 70);
  var tooth_paste_3_2C = parseInt($('.tooth_paste_3_2C').val() * 70);
  var mouth_wash_3_2C = parseInt($('.mouth_wash_3_2C').val() * 250);
  var deodorant_3_2C = parseInt($('.deodorant_3_2C').val() * 150);
  var repellent_3_2C = parseInt($('.repellent_3_2C').val() * 200);

  var comb_3_2C = parseInt($('.comb_3_2C').val() * 30);
  var moisturiser_3_2C = parseInt($('.moisturiser_3_2C').val() * 150);
  var after_shave_3_2C = parseInt($('.after_shave_3_2C').val() * 250);

  var camera_3_2C = parseInt($('.camera_3_2C').val() * 300);   
  var book_3_2C = parseInt($('.book_3_2C').val() * 10);
  var tablet_3_2C = parseInt($('.tablet_3_2C').val() * 350);
  var phone_3_2C = parseInt($('.phone_3_2C').val() * 130);
  var speaker_3_2C = parseInt($('.speaker_3_2C').val() * 160);
  var adapter_3_2C = parseInt($('.adapter_3_2C').val() * 50);
  var vitamins_3_2C = parseInt($('.vitamins_3_2C').val() * 20);

  var sum_boy_city_3 = underwear_boy_3_2C + socks_boy_3_2C + chinos_3_2C + tee_boy_3_2C + shorts_boy_3_2C + trainers_3_2C + sweatshirt_3_2C + jacket_3_2C + smart_shoes_3_2C + sunglasses_3_2C + shirt_3_2C + jeans_boy_3_2C + belt_3_2C + blazer_3_2C + wallet_3_2C + shower_gel_3_2C + sun_cream_3_2C + after_sun_3_2C + wash_bag_3_2C + razor_3_2C + shaving_gel_3_2C + moisturiser_3_2C + after_shave_3_2C + shampoo_3_2C + conditioner_3_2C + hair_products_3_2C + comb_3_2C + tooth_paste_3_2C + tooth_brush_3_2C + mouth_wash_3_2C + deodorant_3_2C + book_3_2C + camera_3_2C + tablet_3_2C + phone_3_2C + vitamins_3_2C + adapter_3_2C;             
  
  var total_sum_boy_city_3 = sum_boy_city_3 / 1000;

  $( ".total-weight-boy_city_3").html(total_sum_boy_city_3);
});

$(".re-calculate-boy_city_7").on('click', function(e) { 
  var sunglasses_7_2C = parseInt($('.sunglasses_7_2C').val() * 40);
  var underwear_boy_7_2C = parseInt($('.underwear_boy_7_2C').val() * 60);
  var socks_boy_7_2C = parseInt($('.socks_boy_7_2C').val() * 60);
  var shorts_boy_7_2C = parseInt($('.shorts_boy_7_2C').val() * 480);
  var shirt_7_2C = parseInt($('.shirt_7_2C').val() * 250);
  var tee_boy_7_2C = parseInt($('.tee_boy_7_2C').val() * 140);
  var trainers_7_2C = parseInt($('.trainers_7_2C').val() * 800);
  var jeans_boy_7_2C = parseInt($('.jeans_boy_7_2C').val() * 600);
  var wallet_7_2C = parseInt($('.wallet_7_2C').val() * 70);

  var sweatshirt_7_2C = parseInt($('.sweatshirt_7_2C').val() * 300);
  var jeans_boy_7_2C = parseInt($('.jeans_boy_7_2C').val() * 700);

  var trousers_boy_7_2C = parseInt($('.trousers_boy_7_2C').val() * 600);
  var chinos_7_2C = parseInt($('.chinos_7_2C').val() * 600);
  var jacket_7_2C = parseInt($('.jacket_7_2C').val() * 600);
  var smart_shoes_7_2C = parseInt($('.smart_shoes_7_2C').val() * 1500);
  var belt_7_2C = parseInt($('.belt_7_2C').val() * 200);
  var blazer_7_2C = parseInt($('.blazer_7_2C').val() * 500);

  var sun_cream_7_2C = parseInt($('.sun_cream_7_2C').val() * 250);
  var after_sun_7_2C = parseInt($('.after_sun_7_2C').val() * 250);
  var shower_gel_7_2C = parseInt($('.shower_gel_7_2C').val() * 500);
  var wash_bag_7_2C = parseInt($('.wash_bag_7_2C').val() * 50);
  var razor_7_2C = parseInt($('.razor_7_2C').val() * 20);
  var shaving_gel_7_2C = parseInt($('.shaving_gel_7_2C').val() * 230);
  var shampoo_7_2C = parseInt($('.shampoo_7_2C').val() * 250);
  var conditioner_7_2C = parseInt($('.conditioner_7_2C').val() * 250);
  var hair_products_7_2C = parseInt($('.hair_products_7_2C').val() * 500);
  var tooth_brush_7_2C = parseInt($('.tooth_brush_7_2C').val() * 70);
  var tooth_paste_7_2C = parseInt($('.tooth_paste_7_2C').val() * 70);
  var mouth_wash_7_2C = parseInt($('.mouth_wash_7_2C').val() * 250);
  var deodorant_7_2C = parseInt($('.deodorant_7_2C').val() * 150);
  var repellent_7_2C = parseInt($('.repellent_7_2C').val() * 200);

  var comb_7_2C = parseInt($('.comb_7_2C').val() * 30);
  var moisturiser_7_2C = parseInt($('.moisturiser_7_2C').val() * 150);
  var after_shave_7_2C = parseInt($('.after_shave_7_2C').val() * 250);

  var camera_7_2C = parseInt($('.camera_7_2C').val() * 300);   
  var book_7_2C = parseInt($('.book_7_2C').val() * 10);
  var tablet_7_2C = parseInt($('.tablet_7_2C').val() * 350);
  var phone_7_2C = parseInt($('.phone_7_2C').val() * 130);
  var speaker_7_2C = parseInt($('.speaker_7_2C').val() * 160);
  var adapter_7_2C = parseInt($('.adapter_7_2C').val() * 50);
  var vitamins_7_2C = parseInt($('.vitamins_7_2C').val() * 20);

  var sum_boy_city_7 = underwear_boy_7_2C + socks_boy_7_2C + chinos_7_2C + tee_boy_7_2C + shorts_boy_7_2C + trainers_7_2C + sweatshirt_7_2C + jacket_7_2C + smart_shoes_7_2C + sunglasses_7_2C + shirt_7_2C + jeans_boy_7_2C + belt_7_2C + blazer_7_2C + wallet_7_2C + shower_gel_7_2C + sun_cream_7_2C + after_sun_7_2C + wash_bag_7_2C + razor_7_2C + shaving_gel_7_2C + moisturiser_7_2C + after_shave_7_2C + shampoo_7_2C + conditioner_7_2C + hair_products_7_2C + comb_7_2C + tooth_paste_7_2C + tooth_brush_7_2C + mouth_wash_7_2C + deodorant_7_2C + book_7_2C + camera_7_2C + tablet_7_2C + phone_7_2C + vitamins_7_2C + adapter_7_2C;             

  var total_sum_boy_city_7 = sum_boy_city_7 / 1000;

  $( ".total-weight-boy_city_7").html(total_sum_boy_city_7);
});

$(".re-calculate-boy_city_14").on('click', function(e) { 
  var sunglasses_14_2C = parseInt($('.sunglasses_14_2C').val() * 40);
  var underwear_boy_14_2C = parseInt($('.underwear_boy_14_2C').val() * 60);
  var socks_boy_14_2C = parseInt($('.socks_boy_14_2C').val() * 60);
  var shorts_boy_14_2C = parseInt($('.shorts_boy_14_2C').val() * 480);
  var shirt_14_2C = parseInt($('.shirt_14_2C').val() * 250);
  var tee_boy_14_2C = parseInt($('.tee_boy_14_2C').val() * 140);
  var trainers_14_2C = parseInt($('.trainers_14_2C').val() * 800);
  var jeans_boy_14_2C = parseInt($('.jeans_boy_14_2C').val() * 600);
  var wallet_14_2C = parseInt($('.wallet_14_2C').val() * 70);

  var sweatshirt_14_2C = parseInt($('.sweatshirt_14_2C').val() * 300);
  var jeans_boy_14_2C = parseInt($('.jeans_boy_14_2C').val() * 700);

  var trousers_boy_14_2C = parseInt($('.trousers_boy_14_2C').val() * 600);
  var chinos_14_2C = parseInt($('.chinos_14_2C').val() * 600);
  var jacket_14_2C = parseInt($('.jacket_14_2C').val() * 600);
  var smart_shoes_14_2C = parseInt($('.smart_shoes_14_2C').val() * 1500);
  var belt_14_2C = parseInt($('.belt_14_2C').val() * 200);
  var blazer_14_2C = parseInt($('.blazer_14_2C').val() * 500);

  var sun_cream_14_2C = parseInt($('.sun_cream_14_2C').val() * 250);
  var after_sun_14_2C = parseInt($('.after_sun_14_2C').val() * 250);
  var shower_gel_14_2C = parseInt($('.shower_gel_14_2C').val() * 500);
  var wash_bag_14_2C = parseInt($('.wash_bag_14_2C').val() * 50);
  var razor_14_2C = parseInt($('.razor_14_2C').val() * 20);
  var shaving_gel_14_2C = parseInt($('.shaving_gel_14_2C').val() * 230);
  var shampoo_14_2C = parseInt($('.shampoo_14_2C').val() * 250);
  var conditioner_14_2C = parseInt($('.conditioner_14_2C').val() * 250);
  var hair_products_14_2C = parseInt($('.hair_products_14_2C').val() * 500);
  var tooth_brush_14_2C = parseInt($('.tooth_brush_14_2C').val() * 70);
  var tooth_paste_14_2C = parseInt($('.tooth_paste_14_2C').val() * 70);
  var mouth_wash_14_2C = parseInt($('.mouth_wash_14_2C').val() * 250);
  var deodorant_14_2C = parseInt($('.deodorant_14_2C').val() * 150);
  var repellent_14_2C = parseInt($('.repellent_14_2C').val() * 200);

  var comb_14_2C = parseInt($('.comb_14_2C').val() * 30);
  var moisturiser_14_2C = parseInt($('.moisturiser_14_2C').val() * 150);
  var after_shave_14_2C = parseInt($('.after_shave_14_2C').val() * 250);

  var camera_14_2C = parseInt($('.camera_14_2C').val() * 300);   
  var book_14_2C = parseInt($('.book_14_2C').val() * 10);
  var tablet_14_2C = parseInt($('.tablet_14_2C').val() * 350);
  var phone_14_2C = parseInt($('.phone_14_2C').val() * 130);
  var speaker_14_2C = parseInt($('.speaker_14_2C').val() * 160);
  var adapter_14_2C = parseInt($('.adapter_14_2C').val() * 50);
  var vitamins_14_2C = parseInt($('.vitamins_14_2C').val() * 20);

  var sum_boy_city_14 = underwear_boy_14_2C + socks_boy_14_2C + chinos_14_2C + tee_boy_14_2C + shorts_boy_14_2C + trainers_14_2C + sweatshirt_14_2C + jacket_14_2C + smart_shoes_14_2C + sunglasses_14_2C + shirt_14_2C + jeans_boy_14_2C + belt_14_2C + blazer_14_2C + wallet_14_2C + shower_gel_14_2C + sun_cream_14_2C + after_sun_14_2C + wash_bag_14_2C + razor_14_2C + shaving_gel_14_2C + moisturiser_14_2C + after_shave_14_2C + shampoo_14_2C + conditioner_14_2C + hair_products_14_2C + comb_14_2C + tooth_paste_14_2C + tooth_brush_14_2C + mouth_wash_14_2C + deodorant_14_2C + book_14_2C + camera_14_2C + tablet_14_2C + phone_14_2C + vitamins_14_2C + adapter_14_2C;             

  var total_sum_boy_city_14 = sum_boy_city_14 / 1000;

  $( ".total-weight-boy_city_14").html(total_sum_boy_city_14);
});


$('.re-calculate').hide();

$('.checklist-items input').click(function() {
  $('.re-calculate').show();
});


      
  $('.NL_HH_container section').hide();
  $('.NL_HH_container .1-gender').show();
  $('.NL_HH_container .overlay').hide();
  $('.NL_HH_container .pop-up').hide();
  $('.NL_HH_container .checklist').hide();
  $('.NL_HH_container .result').hide();

  $(".options-gender").on('click', function(e) {
    if ($(e.target).is('input')) {
      var t = $(e.target);
      $('.gender').removeClass('selected-input');
      t.addClass('selected-input');
    }
  });

  $(".options-holiday_type").on('click', function(e) {
    if ($(e.target).is('input')) {
      var t = $(e.target);
      $('.holiday_type').removeClass('selected-input');
      t.addClass('selected-input');
    }
  });

/////////////////////////////////////// RESULTS ////////////////////////

  $('.gender').click(function() {
    $(".1-gender").hide();
    $(".2-holiday_type").show();
  });

  $(".holiday_type").click(function() {
    $(".2-holiday_type").hide();
    $(".3-number_days").show();
      if ($('input[name=holiday_type]:checked').val() == "festival" ) {
        $(".number_days-14").hide();
      } else {
        $(".number_days-14").show();
      }
  });

  $(".number_days").click(function() {
    var gender = $('.selected-input.gender').val();
    var holiday_type = $('.selected-input.holiday_type').val();
   
//////////////////////////////// RESULTS - GIRLS //////////////

    if (gender == 'girl'){
      if (holiday_type == 'beach') {
        if ($('input[name=number_days]:checked').val() == "3" ) {
          $('.result-girl-beach-3days').show();
        } else if ($('input[name=number_days]:checked').val() == "7" ) {
          $('.result-girl-beach-7days').show();
        } else if ($('input[name=number_days]:checked').val() == "14" ) {
          $('.result-girl-beach-14days').show();      
        }
      }
    } 

    if (gender == 'girl'){
      if (holiday_type == 'festival') {
        if ($('input[name=number_days]:checked').val() == "3" ) {
          $('.result-girl-festival-3days').show();
        } else if ($('input[name=number_days]:checked').val() == "7" ) { 
          $('.result-girl-festival-7days').show();
        } 
      }
    } 

    if (gender == 'girl'){
      if (holiday_type == 'city') {
        if ($('input[name=number_days]:checked').val() == "3" ) {
          $('.result-girl-city-3days').show();
        } else if ($('input[name=number_days]:checked').val() == "7" ) {
          $('.result-girl-city-7days').show();
        } else if ($('input[name=number_days]:checked').val() == "14" ) {
          $('.result-girl-city-14days').show();
        }
      }
    } 

      ///////////////////////////////// RESULTS - BOYS //////////////

    if (gender == 'boy'){
      if (holiday_type == 'beach') {
         if ($('input[name=number_days]:checked').val() == "3" ) {
          $('.result-boy-beach-3days').show();
        } else if ($('input[name=number_days]:checked').val() == "7" ) {
          $('.result-boy-beach-7days').show();
        } else if ($('input[name=number_days]:checked').val() == "14" ) {
          $('.result-boy-beach-14days').show();
        }
      }
    } 

    if (gender == 'boy'){
      if (holiday_type == 'festival') {
        if ($('input[name=number_days]:checked').val() == "3" ) {
          $('.result-boy-festival-3days').show();
        } else if ($('input[name=number_days]:checked').val() == "7" ) {
          $('.result-boy-festival-7days').show();
        }
      }
    } 

    if (gender == 'boy'){
      if (holiday_type == 'city') {
         if ($('input[name=number_days]:checked').val() == "3" ) {
          $('.result-boy-city-3days').show();
        } else if ($('input[name=number_days]:checked').val() == "7" ) { 
          $('.result-boy-city-7days').show();
        } else if ($('input[name=number_days]:checked').val() == "14" ) {
          $('.result-boy-city-14days').show();
        }
      }
    } 
  });

  $('.start-again').click(function(e) {
    $(".result").fadeOut();
  });

///////////////////////////////// RESULTS - CHECKLIST DROPDOWNS //////////////
   
  var clothing = $('.checklist-clothing');
  var toiletries = $('.checklist-toiletries');
  var other_items = $('.checklist-other_items');
  var money = $('.checklist-money');

  $('.checklist-clothing-trigger').click(function(event){
    event.preventDefault();
    if (clothing.is(":visible"))
      {
        clothing.slideUp(400);
        $(this).removeClass("open");
      }
      else
      {
        clothing.slideDown(400);
        $(this).addClass("open");
      }
  });

  $('.checklist-toiletries-trigger').click(function(event){
        event.preventDefault();
        if (toiletries.is(":visible"))
        {
           toiletries.slideUp(400);
            $(this).removeClass("open");
        }
        else
        {
            toiletries.slideDown(400);
            $(this).addClass("open");
        }
  });

  $('.checklist-other_items-trigger').click(function(event){
        event.preventDefault();
        if (other_items.is(":visible"))
        {
            other_items.slideUp(400);
            $(this).removeClass("open");
        }
        else
        {
            other_items.slideDown(400);
            $(this).addClass("open");
        }
  });

  $('.checklist-money-trigger').click(function(event){
        event.preventDefault();
        if (money.is(":visible"))
        {
            money.slideUp(400);
            $(this).removeClass("open");
        }
        else
        {
            money.slideDown(400);
            $(this).addClass("open");
        }
    });

   ///////////////////////////////// TOTAL WEIGHT CALCULATIONS //////////////

 


 
  $('.NL_HH_container .checklist').delay(6000).fadeIn();

  $('.more-info').click(function() {
    $(".pop-up").fadeIn();
    return false
  });

  $('.close-popup').click(function() {
    $(".pop-up").fadeOut();
    return false
  });


});


