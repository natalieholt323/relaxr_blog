var rm = $(".read_more"),
    moreText = "Read More",
    lessText = "Read Less";

rm.click(function () {
    var $this = $(this);
    $this.prev().slideToggle();
    $this.text($this.text() == moreText ? lessText : moreText);
});