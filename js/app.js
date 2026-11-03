/**
 * VARDHMAN IRON PRODUCTS - Interactive Application Core
 * Brand: वर्धमान (Vardhman) • Factory: Nai Basti, Bina (M.P.) • Mobile: 9425424932
 */

// ================= DATA REPOSITORIES =================
const assemblyData = {
  aataChakki: {
    titleHi: "घरेलू आटा चक्की : पार्ट्स एवं असेंबली विवरण",
    titleEn: "Domestic Flour Mill : Parts & Assembly Breakdown",
    image: "images/aata_chakki_exploded_cad.svg",
    components: [
      {
        id: 1,
        nameHi: "एस.एस. 304 ग्रेन हॉपर एवं लिड",
        nameEn: "SS 304 Grain Hopper & Lid",
        material: "Food-Grade Stainless Steel 304 (0.8mm)",
        roleHi: "4.5 किलोग्राम गेहूं, चना, मक्का या बाजरा को स्वच्छ और धूल-मुक्त तरीके से ग्राइंडिंग चैंबर में धीरे-धीरे फीड करना।",
        roleEn: "Holds up to 4.5 KG of grain with transparent inspection lid for dust-free feeding.",
        specs: "Capacity: 4.5 Kg | Food-Grade | Vibration-Resistant Lip",
        stickerNote: "Stamped with food-grade purity seal & Vardhman quality stamp."
      },
      {
        id: 2,
        nameHi: "स्मार्ट ऑटो-फीडर एवं ग्रेन सेंसर",
        nameEn: "Smart Auto-Feed Gate & Sensor",
        material: "Microcontroller + IR Optical Sensor Switch",
        roleHi: "अनाज खत्म होते ही मशीन को 1 मिनट में अपने आप बंद करता है। पत्थरों या भारी अशुद्धियों को रोकता है।",
        roleEn: "Automatically shuts off the motor when empty. Prevents dry running & overheating.",
        specs: "Response Time: < 0.5s | Auto Child-Lock Interlock",
        stickerNote: "Contains Vardhman QC Passed Electronic Holo-Sticker."
      },
      {
        id: 3,
        nameHi: "1.0 एचपी 100% कॉपर वाइंडिंग मोटर",
        nameEn: "1.0 HP 100% Pure Copper Winding Motor",
        material: "Class-F Insulated Pure Copper Wire, Silicon Steel Lamination",
        roleHi: "2880 RPM की तीव्र गति के साथ भारी से भारी अनाज को बिना अटके पीसती है। बिजली की भारी बचत।",
        roleEn: "High-torque 2880 RPM pure copper motor designed for heavy daily domestic grinding with low power draw.",
        specs: "Power: 750W (1 HP) | RPM: 2880 | Voltage: 220-240V | Overload Protector",
        stickerNote: "Features Vardhman 100% Pure Copper Certified Metal Seal."
      },
      {
        id: 4,
        nameHi: "एस.एस. 304 ग्राइंडिंग चैंबर एवं 6-ब्लेड रोटर",
        nameEn: "SS 304 Grinding Chamber & 6-Cutter Rotor",
        material: "Heavy Solid Stainless Steel 304 CNC Machined",
        roleHi: "पत्थर रहित ठंडी पिसाई (Cold Grinding)। अनाज के पोषक तत्व, चोकर और विटामिन्स पूरी तरह सुरक्षित रहते हैं।",
        roleEn: "Stone-less cold grinding ensures all natural nutrients, fiber, and taste are 100% preserved.",
        specs: "Cutter Type: 6-Blade Dynamic Balanced | Hardness: HRC 52",
        stickerNote: "Precision engraved with 'Vardhman SS 304' emblem."
      },
      {
        id: 5,
        nameHi: "7 प्रकार की इंटरचेंजेबल माइक्रो-चलनी (जालियां)",
        nameEn: "Set of 7 Precision SS Micro-Sieves (Jaalis)",
        material: "Stainless Steel Laser-Perforated Sheets",
        roleHi: "दलिया, बेसन, बारीक मैदा, सामान्य रोटी का आटा, मक्का, ज्वार के लिए तुरंत बदली जा सकने वाली जालियां।",
        roleEn: "Interchangeable sieves for fine flour, coarse porridge (daliya), gram flour (besan), and multi-grain.",
        specs: "Sizes: No. 1 to No. 7 (0.5mm to 4.0mm)",
        stickerNote: "Packaged in genuine Vardhman branded protective case."
      },
      {
        id: 6,
        nameHi: "कोल्ड-रोल्ड पाउडर कोटेड स्टील कैबिनेट",
        nameEn: "Cold-Rolled Powder Coated Steel Cabinet",
        material: "Heavy Gauge CRCA Steel Sheet + Acoustic Sound Insulation",
        roleHi: "वाइब्रेशन और आवाज़ को 70% तक कम करता है। जंग-रोधी प्रीमियम फिनिश जो दशकों तक चमकती रहती है।",
        roleEn: "Acoustically damped heavy steel chassis cuts operational noise. Scratch & rust resistant.",
        specs: "Gauge: 18/20 Gauge CRCA Sheet | Finish: 7-Tank Powder Coating",
        stickerNote: "Front cabinet features the golden metallic Vardhman Factory Sticker."
      },
      {
        id: 7,
        nameHi: "एस.एस. आटा संग्रहण पात्र एवं फिल्टर रिंग",
        nameEn: "SS Flour Collection Container & Filter Ring",
        material: "Food-Grade Stainless Steel + 100% Cotton Filter",
        roleHi: "पिसे हुए आटे को ठंडा और ताज़ा रखता है। 100% डस्ट-फ्री ग्राइंडिंग - कोई आटा बाहर नहीं उड़ता।",
        roleEn: "Food-safe hygienic collection container with breathable dust filter for zero-mess flour collection.",
        specs: "Capacity: 4.5 KG Flour | Air-tight sealing ring",
        stickerNote: "Laser branded with Vardhman Hygienic Seal."
      },
      {
        id: 8,
        nameHi: "360° हेवी-ड्यूटी नायलॉन कास्टर व्हील",
        nameEn: "360° Heavy-Duty Nylon Caster Wheels",
        material: "High-Impact Virgin Nylon with Steel Pivot",
        roleHi: "मशीन को रसोई के किसी भी कोने में आसानी से ले जाने के लिए 4 मजबूत पहिए।",
        roleEn: "Smooth 360-degree mobility across kitchen tiles with locking stoppers.",
        specs: "Load Capacity: 120 KG | Non-Marking Wheel Tread",
        stickerNote: "Mounted on reinforced Vardhman chassis base."
      }
    ]
  },
  cooler: {
    titleHi: "हेवी-ड्यूटी शीट मेटल कूलर : पार्ट्स एवं असेंबली विवरण",
    titleEn: "Heavy-Duty Sheet Metal Air Cooler : Parts & Assembly Breakdown",
    image: "images/desert_cooler_exploded_cad.svg",
    components: [
      {
        id: 1,
        nameHi: "हेवी गैल्वेनाइज्ड टॉप कैनोपी एवं 4-वे वाटर ट्रे",
        nameEn: "Heavy GI Canopy & 4-Way Water Distribution Tray",
        material: "Deep Galvanized Iron (GI) 20 Gauge Sheet",
        roleHi: "तीनों तरफ के कूलिंग पैड्स पर पानी को बराबर वितरित करती है। पानी की एक बूंद भी बाहर नहीं छलकती।",
        roleEn: "Uniformly directs water to all 3 cooling pads. Prevents splashing and dry pad hot spots.",
        specs: "Thickness: 20 Gauge GI | Non-Clogging Overflow Channels",
        stickerNote: "Embossed with genuine Vardhman Bina factory seal."
      },
      {
        id: 2,
        nameHi: "मजबूत कॉर्नर पिलर एवं स्टील एंगल चेसिस",
        nameEn: "Reinforced 4-Corner Steel Structural Pillars",
        material: "Heavy Cold-Rolled Structural Angle Iron",
        roleHi: "तेज़ आंधी और भारी पानी के भार में भी कूलर को अडिग रखता है। शून्य कंपन (Zero Vibration)।",
        roleEn: "Structural rigidity preventing chassis rattle or motor vibration even at maximum fan speed.",
        specs: "Weld: High-Tensile Spot Welded + Anti-Rust Primer",
        stickerNote: "Structural 5-Year Guarantee backed by Vardhman."
      },
      {
        id: 3,
        nameHi: "100% कॉपर वाइंडिंग ड्यूल बॉल-बेयरिंग मोटर",
        nameEn: "100% Copper Winding Dual Ball-Bearing Motor",
        material: "Class-H High Temp Pure Copper + Double Z-Grade Bearings",
        roleHi: "1350 RPM की प्रचंड गति। कम वोल्टेज (160V) पर भी बिना जले लगातार 24 घंटे चलने में सक्षम।",
        roleEn: "110W to 180W high-velocity copper motor built to endure harsh Indian summers without overheating.",
        specs: "Power: 110W-180W | RPM: 1350 | Capacitor: 4 µF | Thermal Cutoff",
        stickerNote: "Equipped with official Vardhman 100% Copper Verification Stamp."
      },
      {
        id: 4,
        nameHi: "18-इंच एयरोफॉइल बैलेंस्ड 3-ब्लेड पंखा",
        nameEn: "18-Inch Balanced Aerofoil 3-Blade Fan",
        material: "High-Grade Tempered Aluminum Alloy",
        roleHi: "4500 CFM की तीव्र वायु फेंक (Air Throw)। 35 से 45 फीट की दूरी तक ठंडी हवा पहुंचाता है।",
        roleEn: "Dynamic balanced blades deliver massive 4500 CFM airflow reaching up to 45 feet.",
        specs: "Air Throw: 45 Feet | Noise Level: < 58 dB | Aerodynamic pitch",
        stickerNote: "Vardhman Factory dynamically balanced stamp."
      },
      {
        id: 5,
        nameHi: "फ्रंट एयर श्राउड एवं ऑटो-स्विंग ग्रिल",
        nameEn: "Front Shroud & Motorized Auto-Swing Louvers",
        material: "Galvanized Steel Frame + Motorized Swing Mechanism",
        roleHi: "कमरे के हर कोने में हवा को 120 डिग्री एंगल पर फैलाती है। मैन्युअल अप-डाउन फ्लैप्स भी शामिल।",
        roleEn: "Motorized vertical oscillating louvers distribute chilled air evenly across the room.",
        specs: "Oscillation: 120° Auto Swing | Independent Switch Control",
        stickerNote: "Front frame proudly bears the prominent metallic Vardhman Sticker."
      },
      {
        id: 6,
        nameHi: "3-तरफा गैल्वेनाइज्ड लूवर पैनल एवं हनीकॉम्ब पैड",
        nameEn: "3-Side Galvanized Louver Panels & Honeycomb Pads",
        material: "GI Sheet Frame + 5090 Cellulose Honeycomb / Forest Khas",
        roleHi: "गर्म हवा को तुरंत 10-15 डिग्री ठंडा करते हैं। आसान सफाई के लिए एक मिनट में खुलने वाले पैनल।",
        roleEn: "High-density 5090 honeycomb evaporative media provides instant temperature drop.",
        specs: "Pad Thickness: 50mm High Density | Quick-Release GI Latches",
        stickerNote: "Vardhman genuine replacement parts compatible."
      },
      {
        id: 7,
        nameHi: "18W सबमर्सिबल एंटी-क्लॉग वाटर पंप",
        nameEn: "18W Submersible Anti-Clog Water Pump",
        material: "High-Lift Ceramic Shaft Magnet Pump",
        roleHi: "बिना रुके लगातार पानी ऊपर भेजता है। कम पानी में भी जलने से सुरक्षित थर्मल कटआउट।",
        roleEn: "Continuous high-lift water delivery with anti-clog mesh filter for sediment protection.",
        specs: "Lift Height: 1.8m | Power: 18W | Multi-direction hose adapter",
        stickerNote: "Certified genuine accessory by Vardhman Iron Products."
      },
      {
        id: 8,
        nameHi: "जंग-रोधी 90 लीटर हेवी जी.आई. शीट वाटर टैंक",
        nameEn: "Anti-Rust 90L Heavy GI Sheet Deep Water Tank",
        material: "Hot-Dip Galvanized Iron (GI) 20 Gauge Sheet",
        roleHi: "रात भर बिना पानी भरे चलने के लिए 90 लीटर का विशाल टैंक। ब्रास फ्लोट वाल्व एवं ड्रेन प्लग युक्त।",
        roleEn: "Deep heavy-gauge GI tank that never cracks unlike cheap plastic tanks. Easy drainage plug.",
        specs: "Capacity: 90 Litres | Brass Float Valve Ready | Bottom Drain Plug",
        stickerNote: "Tank front prominently displays the golden Vardhman Brand Sticker."
      },
      {
        id: 9,
        nameHi: "हेवी स्क्वायर पाइप ट्रॉली स्टैंड (पहियों सहित)",
        nameEn: "Heavy Square Pipe Tubular Trolley Stand",
        material: "Heavy 1-inch Square Steel Pipe Frame + 4 Castor Wheels",
        roleHi: "पानी से भरे 150 किलो के भारी कूलर को भी एक उंगली से आसानी से घुमाने की सुविधा।",
        roleEn: "Heavy load carrying trolley stand ensuring easy indoor and outdoor mobility.",
        specs: "Load Rating: 200 KG | Dual-locking front wheels",
        stickerNote: "Vardhman fabricated heavy steel trolley."
      }
    ]
  }
};

// ================= APP STATE =================
let currentLang = 'hi'; // 'hi' or 'en'
let currentAssembly = 'aataChakki';
let currentSelectedComponent = 1;

// ================= DOM INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
  initLanguageToggle();
  initExplodedView();
  initProductFilter();
  initQuoteCalculator();
  initStickerModal();
  initMobileMenu();
});

// ================= LANGUAGE TOGGLE =================
function initLanguageToggle() {
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (!langToggleBtn) return;

  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'hi' ? 'en' : 'hi';
    updateLanguage();
  });
}

function updateLanguage() {
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.innerHTML = currentLang === 'hi' 
      ? `<span class="text-amber-400 font-bold">हिन्दी</span> / EN` 
      : `HI / <span class="text-amber-400 font-bold">English</span>`;
  }

  // Update elements with data-hi and data-en
  document.querySelectorAll('[data-hi]').forEach(el => {
    const text = currentLang === 'hi' ? el.getAttribute('data-hi') : el.getAttribute('data-en');
    if (text) el.innerHTML = text;
  });

  // Re-render the active assembly component details
  renderComponentDetail(currentSelectedComponent);
}

// ================= EXPLODED VIEW & ASSEMBLY ENGINE =================
function initExplodedView() {
  const tabChakki = document.getElementById('tabChakki');
  const tabCooler = document.getElementById('tabCooler');
  const explosionSlider = document.getElementById('explosionSlider');
  const explosionPercent = document.getElementById('explosionPercent');
  const schematicImg = document.getElementById('schematicImg');

  if (tabChakki && tabCooler) {
    tabChakki.addEventListener('click', () => {
      currentAssembly = 'aataChakki';
      tabChakki.className = 'px-5 py-2.5 rounded-lg text-sm font-bold bg-sky-600 text-white shadow-lg transition-all';
      tabCooler.className = 'px-5 py-2.5 rounded-lg text-sm font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all';
      loadAssembly(currentAssembly);
    });

    tabCooler.addEventListener('click', () => {
      currentAssembly = 'cooler';
      tabCooler.className = 'px-5 py-2.5 rounded-lg text-sm font-bold bg-sky-600 text-white shadow-lg transition-all';
      tabChakki.className = 'px-5 py-2.5 rounded-lg text-sm font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all';
      loadAssembly(currentAssembly);
    });
  }

  if (explosionSlider) {
    explosionSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      if (explosionPercent) explosionPercent.innerText = `${val}%`;
      
      // Dynamic visual scaling / exploded animation effect on the SVG
      if (schematicImg) {
        const scaleVal = 1 + (val / 100) * 0.12;
        const spreadY = (val / 100) * 8;
        schematicImg.style.transform = `scale(${scaleVal}) translateY(-${spreadY}px)`;
      }
    });
  }

  loadAssembly('aataChakki');
}

function loadAssembly(assemblyKey) {
  const data = assemblyData[assemblyKey];
  const schematicImg = document.getElementById('schematicImg');
  const componentList = document.getElementById('componentList');

  if (schematicImg) {
    schematicImg.src = data.image;
    schematicImg.alt = currentLang === 'hi' ? data.titleHi : data.titleEn;
  }

  // Populate component pill list
  if (componentList) {
    componentList.innerHTML = '';
    data.components.forEach(comp => {
      const btn = document.createElement('button');
      btn.className = `comp-pill text-left p-3 rounded-xl border transition-all flex items-center justify-between ${
        comp.id === 1 ? 'border-sky-400 bg-sky-950/60 text-white shadow-md' : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:bg-slate-800'
      }`;
      btn.dataset.id = comp.id;
      btn.innerHTML = `
        <div class="flex items-center gap-3">
          <span class="w-7 h-7 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center border border-amber-300 shadow">
            ${comp.id}
          </span>
          <span class="font-semibold text-sm">
            ${currentLang === 'hi' ? comp.nameHi : comp.nameEn}
          </span>
        </div>
        <svg class="w-4 h-4 text-sky-400 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
      `;

      btn.addEventListener('click', () => {
        document.querySelectorAll('.comp-pill').forEach(b => {
          b.className = 'comp-pill text-left p-3 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:bg-slate-800 transition-all flex items-center justify-between';
        });
        btn.className = 'comp-pill text-left p-3 rounded-xl border border-sky-400 bg-sky-950/80 text-white shadow-lg transition-all flex items-center justify-between';
        currentSelectedComponent = comp.id;
        renderComponentDetail(comp.id);
      });

      componentList.appendChild(btn);
    });
  }

  currentSelectedComponent = 1;
  renderComponentDetail(1);
}

function renderComponentDetail(compId) {
  const data = assemblyData[currentAssembly];
  const comp = data.components.find(c => c.id === compId) || data.components[0];
  const detailBox = document.getElementById('componentDetailBox');
  if (!detailBox) return;

  detailBox.innerHTML = `
    <div class="space-y-4 animate-fadeIn">
      <div class="flex items-center justify-between border-b border-slate-700/80 pb-3">
        <div class="flex items-center gap-3">
          <span class="w-9 h-9 rounded-full bg-red-600 text-amber-200 border-2 border-amber-400 font-extrabold flex items-center justify-center text-sm shadow">
            #${comp.id}
          </span>
          <div>
            <h4 class="text-lg font-bold text-white">
              ${currentLang === 'hi' ? comp.nameHi : comp.nameEn}
            </h4>
            <p class="text-xs text-sky-400 font-mono">Part Code: VIP-${currentAssembly.toUpperCase()}-0${comp.id}</p>
          </div>
        </div>
        <!-- Embedded Mini Vardhman Badge on Component Detail -->
        <div class="vardhman-sticker-badge text-[10px] cursor-pointer" onclick="openStickerModal()">
          <span class="sticker-seal-dot"></span>
          <span>वर्धमान SEAL</span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
        <div class="bg-slate-950/70 p-3 rounded-lg border border-slate-800">
          <span class="text-slate-400 block mb-1">
            ${currentLang === 'hi' ? 'धातु एवं पदार्थ (Material Grade)' : 'Material & Metallurgy'}:
          </span>
          <span class="text-amber-300 font-bold">${comp.material}</span>
        </div>
        <div class="bg-slate-950/70 p-3 rounded-lg border border-slate-800">
          <span class="text-slate-400 block mb-1">
            ${currentLang === 'hi' ? 'इंजीनियरिंग स्पेसिफिकेशन' : 'Technical Specs'}:
          </span>
          <span class="text-sky-300 font-bold">${comp.specs}</span>
        </div>
      </div>

      <div class="bg-slate-900/90 p-4 rounded-xl border border-sky-900/60">
        <h5 class="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">
          ${currentLang === 'hi' ? 'कार्यक्षमता एवं उपयोगिता' : 'Role & Engineering Advantage'}
        </h5>
        <p class="text-sm text-slate-200 leading-relaxed">
          ${currentLang === 'hi' ? comp.roleHi : comp.roleEn}
        </p>
      </div>

      <!-- Sticker Verification Note -->
      <div class="bg-red-950/40 border border-red-800/60 p-3 rounded-lg flex items-center gap-3">
        <div class="w-8 h-8 rounded bg-red-600 flex-shrink-0 flex items-center justify-center text-amber-300 font-black text-xs">
          VIP
        </div>
        <div>
          <span class="text-[11px] text-amber-300 font-bold block">
            ${currentLang === 'hi' ? 'असली वर्धमान सुरक्षा सील:' : 'Original Vardhman Security Sticker:'}
          </span>
          <span class="text-xs text-slate-300">${comp.stickerNote}</span>
        </div>
      </div>

      <div class="flex items-center gap-3 pt-2">
        <a href="https://wa.me/919425424932?text=${encodeURIComponent('Hello Vardhman Iron Products Bina, I am interested in knowing more about ' + (currentLang === 'hi' ? comp.nameHi : comp.nameEn) + ' of ' + (currentAssembly === 'aataChakki' ? 'Aata Chakki' : 'Desert Cooler'))}" 
           target="_blank" 
           class="flex-1 btn-whatsapp-glow text-center py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
          ${currentLang === 'hi' ? 'इस पार्ट के बारे में पूछें' : 'Inquire About This Component'}
        </a>
        <button onclick="openStickerModal()" 
                class="px-4 py-2.5 rounded-lg text-xs font-bold bg-slate-800 text-amber-300 border border-amber-400/40 hover:bg-slate-700 transition">
          ${currentLang === 'hi' ? 'स्टिकर जांचें' : 'Verify Sticker'}
        </button>
      </div>
    </div>
  `;
}

// ================= PRODUCT CATALOG FILTER =================
function initProductFilter() {
  const filterBtns = document.querySelectorAll('.cat-filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.className = 'cat-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 text-slate-400 border border-slate-800 hover:text-white transition';
      });
      btn.className = 'cat-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-red-600 text-white border border-amber-400 shadow-md transition';

      const cat = btn.dataset.category;
      productCards.forEach(card => {
        if (cat === 'all' || card.dataset.category === cat) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ================= FACTORY QUOTE ESTIMATOR =================
function initQuoteCalculator() {
  const calcProduct = document.getElementById('calcProduct');
  const calcSize = document.getElementById('calcSize');
  const calcMotor = document.getElementById('calcMotor');
  const calcGauge = document.getElementById('calcGauge');
  const calcEstimateBtn = document.getElementById('calcEstimateBtn');
  const calcResultBox = document.getElementById('calcResultBox');

  if (!calcEstimateBtn) return;

  calcEstimateBtn.addEventListener('click', () => {
    const product = calcProduct.value;
    let basePriceMin = 10000;
    let basePriceMax = 15000;
    let title = "वर्धमान आटा चक्की (1 HP)";

    if (product === 'chakki') {
      const motor = calcMotor.value;
      if (motor === '1hp') {
        basePriceMin = 12500; basePriceMax = 15500; title = "वर्धमान घरेलू आटा चक्की 1 HP (10-12 kg/hr)";
      } else if (motor === '1.25hp') {
        basePriceMin = 15000; basePriceMax = 18000; title = "वर्धमान हैवी आटा चक्की 1.25 HP";
      } else {
        basePriceMin = 22000; basePriceMax = 28000; title = "वर्धमान कमर्शियल आटा चक्की 2 HP";
      }
    } else if (product === 'cooler') {
      const size = calcSize.value;
      if (size === '16inch') {
        basePriceMin = 4800; basePriceMax = 6500; title = "वर्धमान 16 इंच घरेलू रूम कूलर (60L)";
      } else if (size === '18inch') {
        basePriceMin = 6500; basePriceMax = 8800; title = "वर्धमान 18 इंच जंबो डेजर्ट कूलर (90L)";
      } else {
        basePriceMin = 11500; basePriceMax = 16000; title = "वर्धमान 24 इंच हैवी इंडस्ट्रियल कूलर (150L)";
      }
    } else if (product === 'almirah') {
      basePriceMin = 11000; basePriceMax = 19500; title = "वर्धमान रॉयल हैवी स्टील अलमारी (डबल लॉकर व ड्रेसिंग मिरर)";
    } else if (product === 'rack') {
      basePriceMin = 2800; basePriceMax = 6500; title = "वर्धमान स्लॉटेड एंगल स्टील डिस्प्ले स्टोरेज रैक";
    } else if (product === 'trunk') {
      basePriceMin = 2400; basePriceMax = 5200; title = "वर्धमान गैल्वेनाइज्ड स्टील हैवी स्टोरेज पेटी / संदूक";
    }

    const waMessage = `नमस्ते वर्धमान आयरन प्रॉडक्ट्स (बीना)! मुझे निम्नलिखित प्रोडक्ट की फैक्ट्री कीमत और डिलीवरी जानकारी चाहिए:\n- प्रोडक्ट: ${title}\n- अनुमानित रेंज: ₹${basePriceMin.toLocaleString('en-IN')} - ₹${basePriceMax.toLocaleString('en-IN')}\n- फोन: 9425424932`;

    calcResultBox.innerHTML = `
      <div class="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-sky-950 border border-sky-500/50 shadow-xl space-y-4 animate-fadeIn">
        <div class="flex items-center justify-between border-b border-slate-700 pb-3">
          <span class="text-xs text-amber-400 font-bold uppercase tracking-wider">फैक्ट्री डायरेक्ट कोटेशन (Estimated Quote)</span>
          <div class="vardhman-sticker-badge text-[10px]">
            <span class="sticker-seal-dot"></span>
            <span>VARDHMAN CERTIFIED</span>
          </div>
        </div>
        <div>
          <h4 class="text-lg font-bold text-white">${title}</h4>
          <p class="text-2xl font-black text-amber-400 mt-1">
            ₹${basePriceMin.toLocaleString('en-IN')} – ₹${basePriceMax.toLocaleString('en-IN')}*
          </p>
          <span class="text-[11px] text-slate-400 block mt-1">*बिना बिचौलियों के शुद्ध निर्माता दर (Wholesale & Retail Factory Direct Rate)</span>
        </div>
        <div class="bg-slate-950/80 p-3 rounded-lg border border-slate-800 text-xs text-slate-300 space-y-1">
          <p>✔ 100% असली वर्धमान लेजर होलोग्राम स्टिकर के साथ</p>
          <p>✔ 5 वर्ष स्ट्रक्चरल वारंटी & 1 वर्ष मोटर रिप्लेसमेंट गारंटी</p>
          <p>✔ फैक्ट्री: नई बस्ती, बीना (म.प्र.) से डायरेक्ट लोडिंग</p>
        </div>
        <a href="https://wa.me/919425424932?text=${encodeURIComponent(waMessage)}" 
           target="_blank" 
           class="btn-whatsapp-glow block w-full text-center py-3 rounded-xl font-bold text-sm shadow-lg flex items-center justify-center gap-2">
          <span>व्हाट्सएप पर ऑर्डर व डिलीवरी कन्फर्म करें (9425424932)</span>
        </a>
      </div>
    `;
  });
}

// ================= VARDHMAN BRAND STICKER MODAL =================
function initStickerModal() {
  const modal = document.getElementById('stickerModal');
  const closeBtn = document.getElementById('closeStickerModal');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  }
}

function openStickerModal() {
  const modal = document.getElementById('stickerModal');
  if (modal) modal.classList.add('open');
}

// ================= MOBILE NAVIGATION =================
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}
