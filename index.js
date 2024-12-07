// Bài 1:
document.getElementById("btnTinhLuong").onclick = function () {
  let luongNgay = document.getElementById("luongNgay").value * 1;
  let ngayLam = document.getElementById("soNgayLam").value * 1;

  let tienLuong = luongNgay * ngayLam;
  document.getElementById("tienLuong").innerHTML =
    "Tổng tiền lương: " + tienLuong;
};

// Bài 2:
document.getElementById("btnTBC").onclick = function () {
  let so1 = document.getElementById("so1").value * 1;
  let so2 = document.getElementById("so2").value * 1;
  let so3 = document.getElementById("so3").value * 1;
  let so4 = document.getElementById("so4").value * 1;
  let so5 = document.getElementById("so5").value * 1;

  let TBC = (so1 + so2 + so3 + so4 + so5) / 5;
  document.getElementById("TBC").innerHTML = "Giá trị trung bình cộng: " + TBC;
};

// Bài 3:
document.getElementById("btnQuyDoi").onclick = function () {
  let usd = document.getElementById("soUSD").value * 1;

  let tienSauQuyDoi = 23500 * usd;
  document.getElementById("tienNhan").innerHTML = tienSauQuyDoi + " VNĐ";
};

//Bài 4:
document.getElementById("btnCVDT").onclick = function () {
  let cDai = document.getElementById("chieuDai").value * 1;
  let cRong = document.getElementById("chieuRong").value * 1;

  let chuVi = (cDai + cRong) * 2;
  let dienTich = cDai * cRong;

  document.getElementById("chuVi").innerHTML = "Chu vi: " + chuVi;
  document.getElementById("dienTich").innerHTML = "Diện tích: " + dienTich;
};

//Bài 5:
document.getElementById("btnTinhTong").onclick = function () {
  let so = document.getElementById("so").value * 1;

  let soChuc = Math.floor(so / 10);
  let soDV = so % 10;

  let tong2KySo = soChuc + soDV;
  document.getElementById("tongKySo").innerHTML = tong2KySo;
};
