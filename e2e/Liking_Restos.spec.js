Feature('Liking Restos');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restos', ({ I }) => {
    I.seeElement('#restaurants');
    // I.seeElement('.restaurants'); // membuat test menjadi gagal
    I.see('Tidak ada resto untuk ditampilkan', '.resto_not_found');
});

Scenario('liking one resto', async ({ I }) => {
    I.see('Tidak ada resto untuk ditampilkan', '.resto_not_found');

    I.amOnPage('/');
    // … kita akan mengisi uji coba berikutnya …
});

Scenario('liking one resto', ({ I }) => {
    I.see('Tidak ada resto untuk ditampilkan', '.resto_not_found');
  
    I.amOnPage('/');
    
    I.seeElement('.list_item_title a');
    I.click(locate('.list_item_title a').first());

    I.seeElement('#likeButton');
    I.click('#likeButton');
  
    I.amOnPage('/#/like');
    I.seeElement('.list_item');
});