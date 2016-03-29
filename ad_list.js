


$(document).ready(function() {
    var list_container = $('.ad_list');

    var options = parse_options(list_container);
    console.log(options);  
});


function parse_options(list_container)
{
      arr = new Array();
      arr['ad_checkbox'] = list_container.attr('ad_checkbox') === 'true' || false;
      arr['ad_edit'] = list_container.attr('ad_edit') === 'true' || false;
      arr['ad_del'] = list_container.attr('ad_del') === 'true' || false;
      return arr;
}
