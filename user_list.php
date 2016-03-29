


<html>

    <head>
        <title> Test for list </title> 
        <link rel="stylesheet" type="text/css" href="user_list.css" >
    </head>

    <body>
        <div class="ad_list" ad_checkbox="true" ad_del="true" ad_max_item = "20" ad_list_server_url = "user_list.ajax.php" >
            <div class="r_table">
                <div class ="r_table_row">
                    <div class="r_table_heading"> Name </div>
                    <div class="r_table_heading"> Age </div>
                    <div class="r_table_heading"> Sex </div>
               </div>
               <div class="r_table_row"> 
                    <div class="r_table_cell">
                        John
                    </div>
                    <div class="r_table_cell">
                        22
                    </div>
                    <div class="r_table_cell">
                        Male
                    </div>
               </div> 
               <div class="r_table_row"> 
                    <div class="r_table_cell">
                        Anderson
                    </div>
                    <div class="r_table_cell">
                        35
                    </div>
                    <div class="r_table_cell">
                        Male
                    </div>
               </div> 
               <div class="r_table_row"> 
                    <div class = "r_table_cell">
                        Marry
                    </div>
                    <div class="r_table_cell">
                        35
                    </div>
                    <div class="r_table_cell">
                        Female
                    </div>
               </div> 
               <div class="r_table_row"> 
                    <div class="r_table_cell">
                        Jack
                    </div>
                    <div class="r_table_cell">
                        27
                    </div>
                    <div class="r_table_cell">
                        Male
                    </div>
               </div> 
               <div class="r_table_row"> 
                    <div class="r_table_cell">
                        Quin
                    </div>
                    <div class="r_table_cell">
                        32
                    </div>
                    <div class="r_table_cell">
                        Male
                    </div>
               </div> 
            </div>



            <div class="page_selector">
                <a class="ad_page_prev" href="#">Prev </a>
                <a class="ad_page_next" href="#">Next</a>
            </div>
        </div>

        <script src="jquery-2.2.2.min.js"> </script>
        <script src="ad_list.js"> </script>
    </body>

    
</html>
