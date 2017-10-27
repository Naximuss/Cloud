/* global $ TweenMax Power0 Power1 Power2 Power3 */

var stopWatch,
    loops = 1;

//A simple helper function to do display:none to multiple items
function hideAll(whichOnes) {
    for (var q = 0; q < whichOnes.length; q++) {
        $(whichOnes[q]).hide();
    }
}
//This will echo how many seconds have passed
function returnTimer() {
    stopWatch = ((new Date().getTime()) - stopWatch) * 0.001;
    console.log(stopWatch + " seconds");
}
//Set the initial states of all divs here
function setInitialStates() {
    hideAll([
        // images
        '.bg1',
        '.bg1_1',
        '.copy1',
        '.copy2',
        '.copy2_1',
        '.legal',
        '.blue_container',
        '.content_blue_container',
        '.logo_blue',
        '.bg3',
        '.bg3_1',
        '.end_bg',
        '.car',
        '.cars',
        '.copy3',
        '.copy3_1',
        '.cta',
        '.left_border',
        '.bottom_border',
        '.right_border',
        '.copy3',
        '.cta',
    ]);
}

function resetAll() {
    TweenMax.set($(".container").find('*'), { clearProps: "all" });
}

function replay() {
    TweenMax.killTweensOf($(".container").find('*'));
    resetAll();
    setInitialStates();
    seq01();
}

function mainInit() {
    setInitialStates();
    $('.container').show();
    stopWatch = new Date().getTime();
    seq01();
}
var TL = new TimelineMax({repeat: -1});
function seq01() {
    var twnDelay = 0;

    $(".bg1").show();
    // $(".bg1_1").show();
    // $(".copy1").show();

    // TweenMax.set($(".bg1"), {x: -120});
    // TweenMax.set($(".bg1_1"), {x: -80});
    TweenMax.set($(".cloud_1"), {x: -150});
    TweenMax.set($(".cloud_2"), {x: -270});
    TweenMax.set($(".cloud_2_1"), {x: -170, y: -100});
    TweenMax.set($(".cloud_3"), {x: -215});
    TweenMax.set($(".cloud_4"), {x: -280});
    TweenMax.set($(".cloud_5"), {x: -240});

    TweenMax.set($(".pidgin_handler"), {x: -40, y: 300});

    TweenMax.to($(".cloud_1"), 16, {x: 0,  ease: Power0.easeOut, rotationZ: '0.01deg', force3D:true, delay:twnDelay});
    TweenMax.to($(".cloud_2"), 14, {x: 0,  ease: Power0.easeOut, rotationZ: '0.01deg', force3D:true, delay:twnDelay});
    TweenMax.to($(".cloud_2_1"), 14, {x: 0,  ease: Power0.easeOut, rotationZ: '0.01deg', force3D:true, delay:twnDelay});
    TweenMax.to($(".cloud_3"), 12, {x: 0,  ease: Power0.easeOut, rotationZ: '0.01deg', force3D:true, delay:twnDelay});
    TweenMax.to($(".cloud_4"), 11, {x: 0,  ease: Power0.easeOut, rotationZ: '0.01deg', force3D:true, delay:twnDelay});
    TweenMax.to($(".cloud_5"), 10, {x: 0,  ease: Power0.easeOut, rotationZ: '0.01deg', force3D:true, delay:twnDelay});

    TL.to(".pidgin", 0.5, {x: -210, ease: SteppedEase.config(6), delay: twnDelay});
    TweenMax.from($(".pidgin_handler"), 2.5, {x: 340, y: 150, scale: 0.45, rotation: -30, ease:Power0.easeOut, delay:twnDelay});

    twnDelay += 2;
    TweenMax.from($(".logo"), 1, { alpha: 0, ease: Power2.easeOut, delay: twnDelay });
    twnDelay += 4;
    TweenMax.to($(".logo"), 1, { alpha: 0, ease: Power2.easeOut, delay: twnDelay });
    twnDelay += 0.5;
    TweenMax.to([$(".cloud_1"),$(".cloud_2"),$(".cloud_2_1"),$(".cloud_3"),$(".cloud_4"),$(".cloud_5")], 0.75, { alpha: 0, ease: Power2.easeOut, delay: twnDelay });

    twnDelay += 2.25;
    // TweenMax.delayedCall(twnDelay, seq02);
}

function seq02() {
    var twnDelay = 0;

    $('.bg3').show();
    $('.bg3_1').show();
    $('.end_bg').show();
    $('.left_border').show();
    $('.bottom_border').show();
    $('.right_border').show();
    $('.logo_blue').show();
    $('.car').show();
    $('.cars').show();
    $('.copy2').show();
    $('.copy2_1').show();
    // $('.cta').show();
    $('.legal').show();

    TweenMax.set($(".bg3_1"), {x: -130});
    TweenMax.set($(".car"), {x: -6, y: 18, scale: 0.62 });
    // show seq03
    TweenMax.from($(".end_bg"), 0.5, { alpha: 0, ease: Power2.easeOut, delay: twnDelay });
    TweenMax.to($(".bg3_1"), 6.2, {x: -40,  ease: Power0.easeOut, rotationZ: '0.01deg', force3D:true, delay:twnDelay});
    twnDelay += 0.4;
    TweenMax.from($(".left_border"), 0.6, { height: 0, ease: Power1.easeOut, delay: twnDelay });

    twnDelay += 0.6;
    TweenMax.from($(".bottom_border"), 0.4, { width: 0, ease: Power1.easeOut, delay: twnDelay });
    TweenMax.from($(".logo_blue"), 0.9, { alpha: 0, ease: Power2.easeOut, delay: twnDelay });

    twnDelay += 0.2;
    TweenMax.from($(".right_border"), 0.6, { y: 600, ease: Power1.easeOut, delay: twnDelay+0.2 });

    twnDelay += 0.1;
    TweenMax.from($(".copy2"), 0.9, { opacity: 0, ease: Power2.easeOut, delay: twnDelay });

    twnDelay += 0.5;
    TweenMax.from($(".copy2_1"), 0.9, { opacity: 0, ease: Power2.easeOut, delay: twnDelay });

    twnDelay += 0.5;
    TweenMax.from($(".legal"), 0.9, { opacity: 0, ease: Power1.easeOut, delay: twnDelay });

    twnDelay += 1.75;
    TweenMax.delayedCall(twnDelay, seq03);


}
function seq03() {
    var twnDelay = 0;
    $('.cta').show();
    $('.copy3').show();
    $('.copy3_1').show();
    $('.blue_container').show();
    $('.content_blue_container').show();


    TweenMax.to([$(".copy2"),$(".copy2_1"),$(".bg3_1"),$(".cars")], 0.5, { alpha: 0, ease: Power2.easeOut, delay: twnDelay });

    TweenMax.to($(".car"), 0.8, {x: 0 , y: 0, scale: 1, ease: Power2.easeOut, delay: twnDelay });

    twnDelay += 0.5;
    TweenMax.from($(".copy3"), 0.8, { opacity: 0, ease: Power2.easeOut, delay: twnDelay });

    twnDelay += 0.4;
    TweenMax.from($(".blue_container"), 0.8, { width: 0, ease: Power2.easeOut, delay: twnDelay });

    twnDelay += 0.6;
    TweenMax.from($(".content_blue_container"), 0.8, { alpha: 0, ease: Power2.easeOut, delay: twnDelay });

    twnDelay += 0.6;
    TweenMax.from($(".copy3_1"), 0.7, { opacity: 0, ease: Power2.easeOut, delay: twnDelay });

    twnDelay += 0.5;
    TweenMax.from($(".cta"), 0.6, { alpha: 0, ease: Power2.easeOut, delay: twnDelay });
    // twnDelay += 0.6;
    // TweenMax.delayedCall(twnDelay, returnTimer);


    twnDelay += 4;
    if (loops > 0) {
        loops -= 1;
        TweenMax.to($(".white_bg"), 0.3, { alpha: 1, ease: Power2.easeOut, delay: twnDelay });
        twnDelay += 0.3;
        TweenMax.to($(".white_bg"), 0.5, { alpha: 0, ease: Power2.easeOut, delay: twnDelay });
        TweenMax.delayedCall(twnDelay, function() {
            TweenMax.delayedCall(0, replay);
        });
    }
}

function returnTimer(){
    stopWatch=((new Date().getTime())-stopWatch)*0.001;
    console.log(stopWatch+" seconds");
}

$(window).on('load', mainInit);
