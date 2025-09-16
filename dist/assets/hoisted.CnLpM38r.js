document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("#har-idx-lead-form");e&&e.addEventListener("submit",function(o){o.preventDefault();const n=e.querySelector('button[type="submit"]');if(!n)return;const t=n.textContent;n.innerHTML=`
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending...
        `,n.disabled=!0;const i=new FormData(e);console.log("Form data collected:",Object.fromEntries(i.entries())),setTimeout(()=>{const s=document.createElement("div");s.className="p-6 bg-green-50 border border-green-200 rounded-xl text-green-800 mb-6 shadow-lg",s.innerHTML=`
            <div class="flex items-center">
              <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-lg">Message Sent Successfully!</h4>
                <p class="text-green-600">We'll contact you within 24 hours. Check your email for a confirmation.</p>
              </div>
            </div>
          `,e.parentNode&&e.parentNode.insertBefore(s,e),e.reset(),n.innerHTML=t,n.disabled=!1,setTimeout(()=>{s.parentNode&&s.remove()},8e3)},1500)})});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("mobile-menu-toggle"),o=document.getElementById("mobile-menu");e&&o&&e.addEventListener("click",function(){o.classList.toggle("hidden")})});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("main-header");document.getElementById("logo"),document.querySelectorAll(".nav-link"),document.querySelectorAll(".mobile-nav-link");const o=document.getElementById("lang-switcher");document.querySelector("[data-menu-button]");const n=document.getElementById("mobile-menu-toggle"),t=document.getElementById("mobile-menu");function i(){const r=window.scrollY>50;e&&(r?(e.classList.remove("navbar-transparent"),e.classList.add("navbar-solid"),o&&(o.className="bg-primary hover:opacity-90 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 text-sm")):(e.classList.remove("navbar-solid"),e.classList.add("navbar-transparent"),o&&(o.className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 text-sm backdrop-blur-sm")))}function s(){document.querySelector(".hero-section")?document.body.classList.add("has-hero"):(document.body.classList.add("no-hero"),e&&(e.classList.remove("navbar-transparent"),e.classList.add("navbar-solid"))),i()}n&&t?(console.log("Mobile menu toggle button found and event listener added"),n.addEventListener("click",function(l){l.preventDefault(),console.log("Mobile menu button clicked");const r=t.style.display==="none"||t.classList.contains("hidden");console.log("Menu before toggle:",r?"hidden":"visible"),r?(t.style.display="block",t.classList.remove("hidden"),n.setAttribute("aria-expanded","true"),console.log("Menu shown")):(t.style.display="none",t.classList.add("hidden"),n.setAttribute("aria-expanded","false"),console.log("Menu hidden"))})):console.log("Mobile menu elements not found:",{toggleButton:!!n,mobileMenu:!!t}),window.addEventListener("scroll",i),s()});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("#newsletter-form");e&&e.addEventListener("submit",function(o){o.preventDefault();const n=e.querySelector('input[name="newsletter-email"]'),t=e.querySelector('button[type="submit"]');if(!n||!t)return;const i=t.textContent;t.innerHTML=`
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Subscribing...
        `,t.disabled=!0;const s=new FormData(e);console.log("Newsletter subscription:",Object.fromEntries(s.entries())),setTimeout(()=>{const l=document.createElement("div");l.className="p-3 bg-green-500/20 border border-green-400 rounded-lg text-green-200 text-sm mt-3",l.innerHTML=`
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              Successfully subscribed! Check your email for confirmation.
            </div>
          `,e.parentNode&&e.parentNode.insertBefore(l,e.nextSibling),e.reset(),t.textContent=i,t.disabled=!1,setTimeout(()=>{l.parentNode&&l.remove()},6e3)},1500)})});
