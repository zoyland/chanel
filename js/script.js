// function openModal(){
//     $('.popping').fadeIn(300);
// }
// $('.close').on('click', function(){
//     $('.popping').fadeOut(300);
// });


var modal = document.getElementsByClassName('popping')[0]; // 팝업되는 창 전체 
    var p = document.getElementsByClassName('language')[0]; // 처음 놓여있는 이미지

    // var modaling = document.getElementById('img01'); // 팝업되는 창에서 이미지 부분 
    // var captionTxt = document.getElementById('caption'); // 팝업되는 창에서 이미지의 제목 (설명)

    var closeBtn = document.getElementsByClassName('close')[0]; // 팝업 창의 닫기 버튼
    // 변수로 요소 재정의 

    p.onclick = function(){
        modal.style.display = "block";
        // modaling.src = this.src; // src 의 본인의 이미지를 가져옴 
        // captionTxt.innerHTML = this.alt; // alt 값을 가져옴 내가 누른 이미지의 alt 값을 가져와서 caption 의 텍스트값을 보여줌 
    } // 눌렀을 때 나타나는 함수 

    closeBtn.onclick = function (){
        modal.style.display = "none";
    }
