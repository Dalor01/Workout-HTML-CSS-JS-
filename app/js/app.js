import { CountUp } from 'countup.js';
import { Fancybox } from "@fancyapps/ui";
import $ from 'jquery'
window.jQuery = $
window.$ = $
document.addEventListener('DOMContentLoaded', () => {
    let countOne = document.getElementById('counter-1');
    const options = {
            decimalPlaces: 2,
            useGrouping: false,
            separator: ':',
        };
        let counterOne = new CountUp('counter-1', countOne.dataset.count, options);
        if (!counterOne.error) {
            counterOne.start();
        } else {
            console.error(counterOne.error);
        }
    let countTwo = document.getElementById('counter-2');
        let counterTwo = new CountUp('counter-2', countTwo.dataset.count, options);
        if (!counterTwo.error) {
            counterTwo.start();
        } else {
            console.error(counterTwo.error);
        }
    $(document).ready(function(){
        $('.site-footer__accordion-item-trigger').click(function(){
            $(this).next('.site-footer__accordion-item-content').slideToggle()
        })
    })
})

