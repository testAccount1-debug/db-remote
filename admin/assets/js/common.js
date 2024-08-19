/*------------------------------------------------
    datepicker
------------------------------------------------*/ 
$(function() {
    $(".form_input.calendar").datepicker({
        monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
        changeMonth: true,
        changeYear: true,
        dateFormat: 'yy-mm-dd',
        beforeShow(input, inst) {
        }
    });
});

/*------------------------------------------------
    조직도 팝업 호출
------------------------------------------------*/
window.onload = () => {
    popClose();
    popOpen();
    treeToggle();
}

function popClose(){
    let popClose = document.querySelector('.pop_close');
    if(popClose) {
        popClose.addEventListener("click", (e) => {
            let popWrap = popClose.closest('.popup_wrap');
            popWrap.classList.remove('active');
        })
    }
}

function popOpen(){
    let popOpen = document.querySelector('.tree-btn');
    if(popOpen){
        popOpen.addEventListener("click", () => {
            let popWrap = document.querySelector('.popup_tree');
            if(popWrap) {
                popWrap.classList.add('active');
            } 
        })
    }
}

function treeToggle(){
    let treeBtn = document.querySelectorAll('.tree-title');
    let subTree = document.querySelector('.sub_tree-box');

    treeBtn.forEach((element, index) => {
        if(element.nextSibling == subTree){
        } else {
        }
    })
        
}

