(()=>{"use strict";const e=document.querySelector(".main");new class{constructor(e){this.container=e,this.onToggleClick=this.onToggleClick.bind(this)}initialize(){const e=document.createElement("div");e.innerHTML='\n      <button class="collapse-button">Collapse</button>\n      <div class="collapse-content">\n        <p class="collapse-text">\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n        </p>\n      </div>\n    ',this.container.append(e),this.container.querySelector(".collapse-button").addEventListener("click",this.onToggleClick)}onToggleClick(){const e=this.container.querySelector(".collapse-content"),n=e.classList.contains("collapse-open");e.style.maxHeight=n?null:"".concat(e.scrollHeight,"px"),e.classList.toggle("collapse-open")}}(e).initialize()})();
//# sourceMappingURL=main.js.map