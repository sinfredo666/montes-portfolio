const d=document.querySelectorAll("[data-project-card]"),t=document.getElementById("project-modal"),c=document.getElementById("close-modal"),r=document.getElementById("modal-content"),g=[{id:"bottega-veneta-cafe",title:"BOTTEGA VENETA — MADISON AVE NYFW CAFÉ",client:"BOTTEGA VENETA × CNC AGENCY",category:"RETAIL ACTIVATION / NYFW",metrics:"10M+ SOCIAL IMPRESSIONS — 1K+ CUSTOMERS SERVED",summary:"Bottega Veneta transformed its Madison Avenue flagship boutique into an in-store café during New York Fashion Week. CNC Agency crafted a minimalist experience where guests customized Bottega branded lattes, explored the new collection, and captured content.",gallery:["/images/projects/bottega-veneta/hero.png","/images/projects/bottega-veneta/cafe-1.jpg","/images/projects/bottega-veneta/latte-art.jpg","/images/projects/bottega-veneta/exterior.jpg"]},{id:"prada-virtual-flower",title:"PRADA — PARADOXE VIRTUAL FLOWER",client:"PRADA × CNC AGENCY",category:"MOBILE VEHICLE / NYFW",metrics:"18K+ FLORAL STEMS — 14K SAMPLES — 3 POP-UPS",summary:"Prada’s Paradoxe Virtual Flower arrived during New York Fashion Week with a roaming floral installation—a mint green flower lab that brought Prada’s modern femininity into the streets through couture-level blooms and a fragrance discovery experience.",gallery:["/images/projects/prada/hero.jpg","/images/projects/prada/lab-1.jpg","/images/projects/prada/lab-2.jpg","/images/projects/prada/lab-3.jpg"]},{id:"loreal-ppd-protege",title:"L’ORÉAL — PPD PROTÉGÉ PROGRAM",client:"L’ORÉAL × CNC AGENCY",category:"MULTIDAY IMMERSION / BEAUTY",metrics:"60+ PRODUCT DISPLAYS — 150-PERSON LAUNCH PARTY",summary:"L’Oréal Professional Products Division launched its inaugural Protégé Program with a multiday influencer immersion in Los Angeles. CNC designed a custom ProLAB, shoppable School Store, 60+ product displays, and a 150-person launch party.",gallery:["/images/projects/loreal/hero.jpg","/images/projects/loreal/lab-1.jpg","/images/projects/loreal/lab-2.jpg","/images/projects/loreal/lab-3.jpg"]},{id:"ysl-essence-fest",title:"YSL BEAUTY — MYSLF L’ABSOLU (ESSENCE FEST)",client:"YSL BEAUTY × CNC AGENCY",category:"FESTIVAL POP-UP / BEAUTY",metrics:"16K+ ATTENDEES — 16K+ SAMPLES — 1K PHOTOBOOTH",summary:"YSL Beauty introduced the MYSLF L’Absolu fragrance at Essence Fest with a 20×30 pop-up sensory brand world where guests explored key notes through immersive displays, fragrance sampling, and mirrored campaign visuals.",gallery:["/images/projects/ysl-essence/hero.jpg","/images/projects/ysl-essence/lab-1.jpg","/images/projects/ysl-essence/lab-2.jpg","/images/projects/ysl-essence/lab-3.jpg"]}];d.forEach(s=>{s.addEventListener("click",()=>{const o=s.getAttribute("data-project-card"),e=g.find(l=>l.id===o);if(e&&t&&r){let l="";e.gallery&&e.gallery.length>0&&(l=`
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              ${e.gallery.map(i=>`
                <div class="border border-rule overflow-hidden">
                  <img src="${i}" alt="${e.title}" class="w-full h-full object-cover" />
                </div>
              `).join("")}
            </div>
          `),r.innerHTML=`
          <div class="flex flex-col gap-2 font-mono text-xs uppercase tracking-widest text-ruby font-bold">
            <span>${e.category}</span>
            <span class="text-secondary text-[10px]">${e.client}</span>
          </div>

          <h2 class="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-primary">
            ${e.title}
          </h2>

          <div class="font-mono text-xs text-primary bg-bg/90 p-3 border border-rule font-bold">
            METRICS: ${e.metrics}
          </div>

          <p class="font-sans text-base sm:text-lg text-secondary leading-relaxed">
            ${e.summary}
          </p>

          ${l}
        `,t.classList.remove("hidden"),t.classList.add("flex"),t.showModal?.()}})});c?.addEventListener("click",()=>{t&&(t.classList.add("hidden"),t.classList.remove("flex"),t.close?.())});t?.addEventListener("click",s=>{s.target===t&&(t.classList.add("hidden"),t.classList.remove("flex"),t.close?.())});const m=document.querySelectorAll("[data-still-card]"),a=document.getElementById("still-lightbox-modal"),p=document.getElementById("close-still-modal"),n=document.getElementById("still-modal-content"),u=[{id:"anua-dew-popup",label:"ANUA — DEW ON THE GO (SOHO POP-UP)",metadata:"ANUA × CNC — BEAUTY & EVENT COVERAGE",summary:"ANUA took over SoHo to launch the PDRN Spray Mist with Kendall Jenner. CNC designed a Euro-summer hotel fantasy popup featuring a vintage mint Fiat, Dew Cafe, and VIP launch with Mary Phillips.",gallery:["/images/still/anua/anua-1.jpg","/images/still/anua/anua-2.jpg","/images/still/anua/anua-3.jpg"]},{id:"notion-hero",label:"MAKE WITH NOTION — ANNUAL CONFERENCE",metadata:"NOTION × CNC — EVENT COVERAGE",summary:"Notion transformed its annual user conference into a full-scale community experience. CNC designed a one-day event blending product reveals, interactive workshops, ProLAB demos, and keynotes.",gallery:["/images/still/notion/notion-1.jpg","/images/still/notion/notion-2.jpg","/images/still/notion/notion-3.jpg","/images/still/notion/notion-4.jpg"]},{id:"bose-butter-hero",label:"BOSE — BUTTERMANIA SOUNDLINK PLUS SEEDING",metadata:"BOSE × CNC — PRODUCT & MERCH CONCEPT",summary:"To launch SoundLink Plus in butter yellow, Bose partnered with CNC to build Buttermania—a premium seeding kit turning the speaker into a sculptural stick of butter with custom packaging.",gallery:["/images/still/bose/bose-1.jpg","/images/still/bose/bose-2.jpg","/images/still/bose/bose-3.jpg","/images/still/bose/bose-4.jpg"]},{id:"mac-nudes-hero",label:"M·A·C — I ONLY WEAR M·A·C (SOHO TAKEOVER)",metadata:"M·A·C × CNC — BEAUTY & EVENT STILLS",summary:"M·A·C introduced its Nudes collection with a star-powered takeover of the SoHo flagship boutique. CNC created an immersive environment blending shade matching, product trials, and celebrity appearances.",gallery:["/images/still/mac/mac-1.jpg","/images/still/mac/mac-2.jpg","/images/still/mac/mac-3.jpg","/images/still/mac/mac-4.jpg"]}];m.forEach(s=>{s.addEventListener("click",()=>{const o=s.getAttribute("data-still-card"),e=u.find(l=>l.id===o);if(e&&a&&n){const l=`
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            ${e.gallery.map(i=>`
              <div class="border border-rule overflow-hidden">
                <img src="${i}" alt="${e.label}" class="w-full h-full object-cover" />
              </div>
            `).join("")}
          </div>
        `;n.innerHTML=`
          <div class="flex flex-col gap-2 font-mono text-xs uppercase tracking-widest text-ruby font-bold">
            <span>[ EVENT PHOTOGRAPHY GALLERY ]</span>
            <span class="text-secondary text-[10px]">${e.metadata}</span>
          </div>

          <h2 class="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-primary">
            ${e.label}
          </h2>

          <p class="font-sans text-base text-secondary leading-relaxed">
            ${e.summary}
          </p>

          ${l}
        `,a.classList.remove("hidden"),a.classList.add("flex"),a.showModal?.()}})});p?.addEventListener("click",()=>{a&&(a.classList.add("hidden"),a.classList.remove("flex"),a.close?.())});a?.addEventListener("click",s=>{s.target===a&&(a.classList.add("hidden"),a.classList.remove("flex"),a.close?.())});
