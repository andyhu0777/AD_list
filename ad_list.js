


$(document).ready(function() {
    // initialize objects
    var list_container = $('.ad_list');
    var prev_page_trigger = $('.ad_page_prev');
    var next_page_trigger = $('.ad_page_next');

    // get options
    var options = parse_options(list_container);
    console.log(options);  

    // initialize page selector
    var page_selector = new PageSelector(options.page_size, options.max_item);
    console.log(page_selector);

    // initialize ajax master
    var master = new AjaxMaster('', page_selector);
    master.refresh();

    // set page select events
    prev_page_trigger.click(function() {
        page_selector.prev_page(); 
        master.refresh(); 
    });
    next_page_trigger.click(function() {
        page_selector.next_page();
        master.refresh();
    });
});


function parse_options(list_container)
{
      arr = new Array();
      arr['checkbox'] = list_container.attr('ad_checkbox') === 'true' || false;
      arr['edit'] = list_container.attr('ad_edit') === 'true' || false;
      arr['del'] = list_container.attr('ad_del') === 'true' || false;
      arr['page_size'] = list_container.attr('ad_page_size') ? Number(list_container.attr('ad_page_size')) : 10;
      arr['max_item'] = list_container.attr('ad_max_item') ? Number(list_container.attr('ad_max_item')) : 0;
      return arr;
}


class AjaxMaster {
    construct(server_url, selector)
    {
        this.server_url = server_url;
        this.selector = selector;
    }

    refresh()
    {
        $.ajax({
            url: this.server_url,
            method: "POST",
            data: {
               content: "",
               page_size: selector.get_page_size(),
               page_num: selector.get_page_num(),
            },
            success(on_success)
        });
    }
    on_success(data)
    {
       json = JSON.parse(data);
       this.selector.set_max_item(json.max_item);
       console.log(this.selector);
       update_content();
    }
    update_content()
    {
    }
}

class PageSelector {
    constructor(page_size, max_item)
    {
        this.page_size = page_size;
        this.max_item = max_item;
        this.page_num = 1;
    }

    get_max_page_num()
    {
        return Math.floor((this.max_item + this.page_size - 1) / this.page_size);
    }
    set_max_item(max_item) {
        this.max_item = max_item;
    }

    set_page_size(page_size)
    {
        this.page_size = page_size;
    }
    get_page_size(page_size)
    {
        return this.page_size
    }

    set_page_num(page_num) 
    {
        this.page_num = page_num;
    }
    get_page_num(page_num)
    {
        return this.page_num;
    }
    prev_page()
    {
        if (this.page_num > 1) {
            this.page_num -= 1;
            return this.page_num;
        } else 
            return null;
    }
    next_page()
    {
        if (this.page_num < this.max_page_num) {
            this.page_num += 1;
            return this.page_num;
        } else 
            return null;
    }
}
