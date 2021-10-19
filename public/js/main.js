// countdown in order-page
$(function() {
    let countDownDate = new Date("October 22, 2021 21:30:00").getTime();
    let countDown = setInterval(() => {
        let dateNow = new Date().getTime();
        let distance = countDownDate - dateNow;

        // get calculation
        // let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % ( 1000 * 60 * 60)) / ( 1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / (1000));

        $("#hour").html(`${hours}`);
        $("#minute").html(`: ${minutes}`);
        $("#second").html(`: ${seconds}`);

        // when countdown is complete
        if (distance == 0 | distance < 1) {
            // change the element
            $(".btn-menu-order").html(" We'll be back tomorrow, thank you ");
            $(".timer-wrapper").html(" CLOSE ");
            // reset the interval
            clearInterval(countDown);
        }
    });
});

//create text detail toping
// $(function() {
//     $("#toping").on('click', () => {
//         const checkToping = document.getElementById('toping');
//         const txtToping = document.querySelector('.txt-toping');

//         // if element #toping checked
//         if ( checkToping.checked == true) {
//             txtToping.style.visibility = "visible";
//         } else {
//             txtToping.style.visibility = "hidden";
//         }
//     });
// });

// create quantity increment and decrement
// $(function() {
//     const qty = document.querySelector('.qty');

//     $(".btn-plus").click( () => {
//         qty.value = parseInt(qty.value) + 1;
//     });

//     $(".btn-minus").click( () => {
//         // value under 1 
//         if ( qty.value <= 1 ) {
//             qty.value = 1;
//         } else {
//             qty.value = parseInt(qty.value) - 1;
//         }
//     })
// })


