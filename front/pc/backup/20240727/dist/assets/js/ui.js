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
    if (!!this.design_popup_wrap_active) {
      this.design_popup_wrap_active.forEach((element, index) => {
        if (this.design_popup_wrap_active !== this.selector) {
          element.classList.remove("active");
        }
      });
    }
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
      }, 400);
      this.design_popup_wrap_active = document.querySelectorAll(".popup_wrap.active");
      this.dimCheck();
      if ("closeCallback" in this.option) {
        this.option.closeCallback();
      }
      if (this.design_popup_wrap_active.length == 1) {
        this.domHtml.classList.remove("touchDis");
      }
    }
  }
}