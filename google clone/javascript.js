function search(){
    let text = document.getElementById('inputtext').value;
    let url="https://www.google.com/search?q="+text;
    window.open(url,"_black");
}