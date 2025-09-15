document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("#har-idx-lead-form");e&&e.addEventListener("submit",function(o){o.preventDefault();const t=e.querySelector('button[type="submit"]');if(!t)return;const n=t.textContent;t.innerHTML=`
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending...
        `,t.disabled=!0;const r=new FormData(e);console.log("Form data collected:",Object.fromEntries(r.entries())),setTimeout(()=>{const s=document.createElement("div");s.className="p-6 bg-green-50 border border-green-200 rounded-xl text-green-800 mb-6 shadow-lg",s.innerHTML=`
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
          `,e.parentNode&&e.parentNode.insertBefore(s,e),e.reset(),t.innerHTML=n,t.disabled=!1,setTimeout(()=>{s.parentNode&&s.remove()},8e3)},1500)})});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("mobile-menu-toggle"),o=document.getElementById("mobile-menu");e&&o&&e.addEventListener("click",function(){o.classList.toggle("hidden")})});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("main-header");document.getElementById("logo"),document.querySelectorAll(".nav-link"),document.querySelectorAll(".mobile-nav-link");const o=document.getElementById("lang-switcher");document.querySelector("[data-menu-button]");const t=document.getElementById("mobile-menu-toggle"),n=document.getElementById("mobile-menu");function r(){const l=window.scrollY>50;e&&(l?(e.classList.remove("navbar-transparent"),e.classList.add("navbar-solid"),o&&(o.className="bg-teal-100 hover:bg-teal-200 text-teal-700 font-semibold py-2 px-4 rounded-lg transition-all duration-200 text-sm")):(e.classList.remove("navbar-solid"),e.classList.add("navbar-transparent"),o&&(o.className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 text-sm backdrop-blur-sm")))}function s(){document.querySelector(".hero-section")?document.body.classList.add("has-hero"):(document.body.classList.add("no-hero"),e&&(e.classList.remove("navbar-transparent"),e.classList.add("navbar-solid"))),r()}t&&n&&t.addEventListener("click",function(){n.classList.toggle("hidden");const i=!n.classList.contains("hidden");t.setAttribute("aria-expanded",i.toString())}),window.addEventListener("scroll",r),s()});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("#newsletter-form");e&&e.addEventListener("submit",function(o){o.preventDefault();const t=e.querySelector('input[name="newsletter-email"]'),n=e.querySelector('button[type="submit"]');if(!t||!n)return;const r=n.textContent;n.innerHTML=`
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Subscribing...
        `,n.disabled=!0;const s=new FormData(e);console.log("Newsletter subscription:",Object.fromEntries(s.entries())),setTimeout(()=>{const i=document.createElement("div");i.className="p-3 bg-green-500/20 border border-green-400 rounded-lg text-green-200 text-sm mt-3",i.innerHTML=`
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              Successfully subscribed! Check your email for confirmation.
            </div>
          `,e.parentNode&&e.parentNode.insertBefore(i,e.nextSibling),e.reset(),n.textContent=r,n.disabled=!1,setTimeout(()=>{i.parentNode&&i.remove()},6e3)},1500)})});
