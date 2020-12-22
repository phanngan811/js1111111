function doiTien(event){
    event.preventDefault();
    
    var dollar = document.getElementById("USA").value;

    var tienViet = dollar * 23500;
    var quyDoi = tienViet + "VND";
    
    document.getElementById("quyTien").innerHTML= quyDoi;
    

    
}


function dienTich(event){
    event.preventDefault();
    
    var cd = document.getElementById("chieuDai").value;
    var cr = document.getElementById("chieuRong").value;

    
    var dt = cd * cr;
    var dthcn = "Diện tích hcn là: " + dt

    document.getElementById("dienTichhcn").innerHTML= dthcn;
    

    
}

function chuVi(event){
    event.preventDefault();
    
    var cd = document.getElementById("chieuDai").value;
    var cr = document.getElementById("chieuRong").value;

    
    var cv = (cd + cr) * 2;
    var cvhcn = "Chu vi hcn là: " + cv

    document.getElementById("chuVihcn").innerHTML= cvhcn;
    

    
}




function haiSo(event){
    event.preventDefault();
    
    var haiNumber = document.getElementById("number").value

    var tongHaiNumber =Math.floor((haiNumber % 10) + (haiNumber /10)) 

    var ketQua = "Tổng hai số ký tự là: " + tongHaiNumber

    document.getElementById("kqHaiNumber").innerHTML= ketQua;
    

    
}

