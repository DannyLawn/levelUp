$(document).ready(function () {
  $('[name=tel]').bind("change keyup input click", function () {
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
  })
  $('[name=person]').bind("change keyup input click", function () {
    if (this.value.match(/[^a-zа-яё ]/iu)) {
      this.value = this.value.replace(/[^a-zа-яё ]/iu, '');
    }
  })
});
