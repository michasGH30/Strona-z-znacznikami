function html_table()
{
    document.getElementById("html_table").style.display="table";
    document.getElementById("html_table_h").style.display="block";
    document.getElementById("css_table").style.display="none";
    document.getElementById("css_table_h").style.display="none";
    document.getElementById("html_table_but").style.border="5px solid green";
    document.getElementById("css_table_but").style.border="";
    

}

function css_table()
{
    document.getElementById("css_table").style.display="table";
    document.getElementById("css_table_h").style.display="block";
    document.getElementById("html_table").style.display="none";
    document.getElementById("html_table_h").style.display="none";
    document.getElementById("css_table_but").style.border="5px solid green";
    document.getElementById("html_table_but").style.border="";

}