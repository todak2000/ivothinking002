// $(document).ready(function(){
//     $('.my-class').slick({
//         dots: true,
//         infinite: true,
//         fade: true,
//         cssEase: 'linear',
//         autoplay: true,
//         autoplaySpeed: 2000
//       });
//   });
          
//   $(function(){
//     $('.fadein .row(0)').hide();
//     setInterval(function(){$('.fadein :first-child').fadeOut().next('row').fadeIn().end().appendTo('.fadein');}, 5000);
// });
 


$(document).ready(function(){
    $.fn.nextOrFirst = function(selector) {
        var next = this.next(selector);
        return (next.length) ? next : this.prevAll(selector).last();
    }
    
    $(function() {
        $('.fadein div:eq(0)').addClass("active");
        $('.fadein div:gt(0)').hide();
        setInterval(function() {
            $('.active:eq(0)').fadeOut().removeClass("active").nextOrFirst('div').addClass("active").fadeIn().end()
        }, 7000);
    });
  });