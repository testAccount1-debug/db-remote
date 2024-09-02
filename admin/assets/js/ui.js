$(function(){
  formCommon();
});


function remoteDocuList(option = {}){
    const viewer_summary_scroll = document.querySelector(".viewer_summary_scroll");
    let option_scroll_view = option.scrollView !== undefined ? option.scrollView : 3;
    const viewer_summary_item = document.querySelectorAll(".viewer_summary_item")[option_scroll_view];
    if(!!viewer_summary_item){
        viewer_summary_scroll.style.maxHeight = (viewer_summary_item.getBoundingClientRect().top - viewer_summary_scroll.getBoundingClientRect().top)  + "px";
    } 
}

function formCommon(){
  $(document).on("focus",'.input_search_sm', function(e){
    let thisObj = $(this);
    let thisObjParent = thisObj.closest(".search_sm_container");
    
    thisObjParent.addClass("focus");
  });
  $(document).on("focusout",'.input_search_sm', function(){
    let thisObj = $(this);
    let thisObjParent = thisObj.closest(".search_sm_container");
    
    thisObjParent.removeClass("focus");
  });
  $(document).on("click",'.d_tr_click tr', function(){
    let thisObj = $(this);
    let thisObjParent = thisObj.closest(".d_tr_click");

    thisObjParent.find("tr").not(thisObj).removeClass("active");
    
    thisObj.toggleClass("active");
  });
}


/* popup */
class DesignPopup {
  constructor (option){
    // variable
    this.option = option;
    this.selector = document.querySelector(this.option.selector);
    if (!this.selector) {
      return;
    }

    this.design_popup_wrap = document.querySelectorAll(".popup_wrap");
    this.domHtml = document.querySelector("html");
    this.domBody = document.querySelector("body");
    this.pagewrap = document.querySelector(".page_wrap");
    this.layer_wrap_parent = null;
    this.btn_closeTrigger = null;
    this.scrollValue = 0;
    
    // init
    const popupGroupCreate = document.createElement("div");
    popupGroupCreate.classList.add("layer_wrap_parent");
    if (!this.layer_wrap_parent && !document.querySelector(".layer_wrap_parent")) {
      this.pagewrap.append(popupGroupCreate);
    }
    this.layer_wrap_parent = document.querySelector(".layer_wrap_parent");


    // event
    this.btn_close = this.selector.querySelectorAll(".btn_popup_close");
    this.bg_design_popup = this.selector.querySelector(".bg_dim");
    let closeItemArray = [...this.btn_close];
    if (!!this.selector.querySelectorAll(".close_trigger")) {
      this.btn_closeTrigger = this.selector.querySelectorAll(".close_trigger");
      closeItemArray.push(...this.btn_closeTrigger);
    }
    if (closeItemArray.length) {
      closeItemArray.forEach((element) => {
        element.addEventListener("click", (e) => {
            e.preventDefault();
            this.popupHide(this.selector);
          },false);
      });
    }
  }
  dimCheck(){
    const popupActive = document.querySelectorAll(".popup_wrap.active");
    if (!!popupActive[0]) {
      popupActive[0].classList.add("active_first");
    }
    if (popupActive.length > 1) {
      this.layer_wrap_parent.classList.add("has_active_multi");
    } else {
      this.layer_wrap_parent.classList.remove("has_active_multi");
    }
  }
  popupShow(){
    this.design_popup_wrap_active = document.querySelectorAll(".popup_wrap.active");
    if (this.selector == null) { return; }
    this.domHtml.classList.add("touchDis");
    this.selector.classList.add("active");
    setTimeout(() => {
      this.selector.classList.add("motion_end");
    }, 30);
    if ("beforeCallback" in this.option) {
      this.option.beforeCallback();
    }
    if ("callback" in this.option) {
      this.option.callback();
    }
    /* if (!!this.design_popup_wrap_active) {
      this.design_popup_wrap_active.forEach((element, index) => {
        if (this.design_popup_wrap_active !== this.selector) {
          element.classList.remove("active");
        }
      });
    } */
    this.layer_wrap_parent.append(this.selector);
    this.dimCheck();
  }
  popupHide(){
    let target = this.option.selector;
    if (!!target) {
      this.selector.classList.remove("motion");
      if ("beforeClose" in this.option) {
        this.option.beforeClose();
      }
      //remove
      this.selector.classList.remove("motion_end");
      setTimeout(() => {
        this.selector.classList.remove("active");
        this.dimCheck();
      }, 400);
      this.design_popup_wrap_active = document.querySelectorAll(".popup_wrap.active");
      if ("closeCallback" in this.option) {
        this.option.closeCallback();
      }
      if (this.design_popup_wrap_active.length == 1) {
        this.domHtml.classList.remove("touchDis");
      }
    }
  }
}




function tableDrag(target){
  const tableContainer = document.querySelector(target);
  //const tableContainer = document.querySelector('.list_tb_wrap.scroll_type');

  let isDragging = false;
  let startX;
  let scrollLeft;

  tableContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    tableContainer.classList.add('active');
    startX = e.pageX - tableContainer.offsetLeft;
    scrollLeft = tableContainer.scrollLeft;
  });

  tableContainer.addEventListener('mouseleave', () => {
    isDragging = false;
    tableContainer.classList.remove('active');
  });

  tableContainer.addEventListener('mouseup', () => {
    isDragging = false;
    tableContainer.classList.remove('active');
  });

  tableContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - tableContainer.offsetLeft;
    const walk = (x - startX) * 3; // 스크롤 속도를 조정하려면 숫자를 변경
    tableContainer.scrollLeft = scrollLeft - walk;
  });
}


function getScrollbarWidth() {
  // Create a temporary div container and append it into the body
  const container = document.createElement('div');
  // Append the div container into the body
  document.body.appendChild(container);

  // Force scrollbar to appear
  container.style.overflow = 'scroll';
  container.style.width = '50px';
  container.style.height = '50px';

  // Add inner div
  const inner = document.createElement('div');
  container.appendChild(inner);
  inner.style.width = '100%';
  inner.style.height = '100%';

  // Calculate the width based on the difference between the container width and the inner width
  const scrollbarWidth = container.offsetWidth - inner.offsetWidth;

  // Remove the temporary div container
  document.body.removeChild(container);

  return scrollbarWidth;
}


function scrollTableAction(target){
  const targetTbWrap = document.querySelector(target);
  const targetThead = targetTbWrap.querySelector(".list_thead_wrap");
  const targetTbody = targetTbWrap.querySelector(".list_tbody_wrap");
  const targetTbodyTb = targetTbody.querySelector(".list_tb");
  /* if(!!targetTbWrap){
    targetTbWrap
  } */
  if(targetTbody.getBoundingClientRect().height>=targetTbodyTb.getBoundingClientRect().height){
    targetThead.classList.remove("has_scroll");
  }else{
    targetThead.classList.add("has_scroll");
  }
}