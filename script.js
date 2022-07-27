vketik1=kalimat.innerHTML;kalimat.innerHTML = "";
  vketik1b=kalimata.innerHTML;kalimata.innerHTML = "";
  vketik2=kalimatb.innerHTML;kalimatb.innerHTML = "";
  vketik3=kalimatc.innerHTML;kalimatc.innerHTML = "";
  
  function mulaiketik1(){
  new TypeIt("#kalimat", {
  strings: ["" + vketik1], startDelay: 1, speed: 40, waitUntilVisible: true,
  afterComplete: function(){
    kalimat.innerHTML = vketik1;
  },}).go();
  }
  function mulaiketik1b(){
  kalimat.style="display:none";
  fotoakhir.src=fotoakhir1.src;
  new TypeIt("#kalimata", {
  strings: ["" + vketik1b], startDelay: 1, speed: 35, waitUntilVisible: true,
  afterComplete: function(){
    kalimata.innerHTML = vketik1b;
  },}).go();
  }
  function mulaiketik2(){
  wallpaper.style="transform: scale(2)";
  fotoakhir.src=fotoakhir2.src;
  kalimata.style="display:none";
  new TypeIt("#kalimatb", {
  strings: ["" + vketik2], startDelay: 1, speed: 40, waitUntilVisible: true,
  afterComplete: function(){
    kalimatb.innerHTML = vketik2;
  },}).go();
  }
  function mulaiketik3(){
  wallpaper.style="transform: scale(1)";
  fotoakhir.src=fotoakhir3.src;
  new TypeIt("#kalimatc", {
  strings: ["" + vketik3], startDelay: 1, speed: 40, waitUntilVisible: true,
  afterComplete: function(){
    kalimatc.innerHTML = vketik3;
    tombol();
  },}).go();
  }
  
  function dilanjut(){setTimeout(otomatis2,500);Tombol.style="opacity:0;transform: scale(.1);";jikakuis=1;setTimeout(tombol,1000);}
  
  function otomatis() {befanimkata();setTimeout(animkata,400);} 
  function befanimkata(){kalimat.style="transform:scale(.3);";kalimatb.style="transform:scale(.3);";kalimatc.style="transform:scale(.3);";} 
  function animkata() {kalimat.style="transform:scale(1);";kalimatb.style="transform:scale(1);";kalimatc.style="transform:scale(1);";}
  
  function otomatis2() {
  kalimat.innerHTML = kalimat2.innerHTML;
  kalimat.style="";kalimatb.style="display:none";kalimatc.style="display:none";}

  function otomatis3() {befanimkata3();setTimeout(animkata3,700);} 
  function befanimkata3(){kalimat.style="";kalimatb.style="";kalimatc.style="";kalimat.style="opacity:0";kalimatb.style="opacity:0";kalimatc.style="opacity:0";} 
  function animkata3() {kalimat.innerHTML = kalimat3.innerHTML;kalimatb.innerHTML = kalimatb3.innerHTML;kalimat.style="opacity:1";kalimatb.style="opacity:1;font-size:16px;font-weight:400;";}
  
  function sbakhir(){Bn.style.display="none";setTimeout(stakhir,500);} function stakhir(){tmbl.innerHTML="💌 Kirim Pesan";Tombol.style="opacity:1;transform: scale(1)";ftom=5;fungsi=0;}
  
  async function diterima(){
      setInterval(createHeart,200);
      fthilang();ftganti=1;
      setTimeout(ftmuncul,400);
      wallpaper.style="transform: scale(1)";
      bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);transition:all 1s ease;margin-top:0;";
      Tombol.style="opacity:0;transform: scale(.1);";
      Content.style = "transition:all 1s ease;opacity:1;margin-top:7vh;";
      setTimeout(sbakhir,1000);otomatis3();
   }
  
  async function ditolak(){
  	if(fungsi==1){
  	Tombol.style="transition:all .3s ease;opacity:0";await swalst.fire({title: '' + kataditolak.innerHTML, timer: 2000, imageUrl: '' + stikerditolak.src,});tombol();
  	}
   }
   
