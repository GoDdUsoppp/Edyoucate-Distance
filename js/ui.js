function switchTab(el, type) {
  document.querySelectorAll(".audience-panel").forEach((p) => {
    const isActive = p.dataset.panel === type;
    if (isActive) {
      p.className =
        "audience-panel group relative text-left p-8 sm:p-10 transition-all duration-400 bg-[linear-gradient(135deg,#171731_0%,#232347_40%,#E50000_100%)] text-white";
    } else {
      p.className =
        "audience-panel group relative text-left p-8 sm:p-10 transition-all duration-400 bg-white text-brand-text border-l border-gray-200";
    }
    const tagEl = p.querySelector(".mt-6");
    if (isActive) {
      tagEl.className =
        "mt-6 inline-flex items-center gap-1.5 text-xs font-semibold bg-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-md";
      tagEl.innerHTML = 'Viewing this path <i class="ti ti-arrow-right"></i>';
      const icon = p.querySelector(".w-12");
      icon.className =
        "w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-6 text-xl  backdrop-blur-md text-white";
      const para = p.querySelector("p");
      para.className = "text-sm text-white/80 leading-relaxed max-w-sm";
      const strongTag = p.querySelector("strong");
      if (strongTag) strongTag.className = "text-white";
    } else {
      tagEl.className =
        "mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-red group-hover:gap-2.5 transition-all";
      tagEl.innerHTML =
        'Tap to view this path <i class="ti ti-arrow-right"></i>';
      const icon = p.querySelector(".w-12");
      icon.className =
        "w-12 h-12 rounded-2xl bg-[rgba(229,0,0,0.08)] flex items-center justify-center mb-6 text-xl text-brand-red";
      const para = p.querySelector("p");
      para.className = "text-sm text-brand-muted leading-relaxed max-w-sm";
      const strongTag = p.querySelector("strong");
      if (strongTag) strongTag.className = "text-brand-dark";
    }
  });

  const pc = document.getElementById("pain-content");
  const cardClass =
    "bg-white border border-gray-200 border-t-4 border-t-brand-red rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-250";
  const iconClass =
    "w-10 h-10 rounded-xl bg-[rgba(229,0,0,0.08)] flex items-center justify-center mb-4 text-brand-red text-lg";
  const titleClass = "text-sm font-semibold text-brand-text mb-1.5";
  const textClass = "text-xs text-brand-muted leading-relaxed";

  if (type === "professional") {
    pc.innerHTML = `
        <div class="${cardClass}"><div class="${iconClass}"><i class="ti ti-trending-up"></i></div><h3 class="${titleClass}">Stuck without a degree for promotion?</h3><p class="${textClass}">A recognized online MBA or PG degree can unlock the next level in your career — without quitting your job or salary.</p></div>
        <div class="${cardClass}"><div class="${iconClass}"><i class="ti ti-calendar-off"></i></div><h3 class="${titleClass}">No time for regular classes?</h3><p class="${textClass}">Study on weekends or after work. Recorded lectures, flexible exam schedules, and zero mandatory attendance.</p></div>
        <div class="${cardClass}"><div class="${iconClass}"><i class="ti ti-coin"></i></div><h3 class="${titleClass}">Tight budget for education?</h3><p class="${textClass}">Online degrees are 60–80% cheaper than full-time programs. Pay in easy EMIs without financial stress.</p></div>
        <div class="${cardClass}"><div class="${iconClass}"><i class="ti ti-award"></i></div><h3 class="${titleClass}">Will employers accept online degrees?</h3><p class="${textClass}">Yes. UGC-DEB approved degrees are 100% valid. Many top companies actively prefer candidates with online PG credentials.</p></div>`;
  } else {
    pc.innerHTML = `
        <div class="${cardClass}"><div class="${iconClass}"><i class="ti ti-clock"></i></div><h3 class="${titleClass}">Couldn't attend regular college?</h3><p class="${textClass}">Online & distance programs let you study on your own schedule — morning, evening, or weekend. No daily attendance required.</p></div>
        <div class="${cardClass}"><div class="${iconClass}"><i class="ti ti-coin"></i></div><h3 class="${titleClass}">Worried about high fees?</h3><p class="${textClass}">Online degrees cost a fraction of regular college. Easy EMI options available. Quality education that fits your budget.</p></div>
        <div class="${cardClass}"><div class="${iconClass}"><i class="ti ti-certificate"></i></div><h3 class="${titleClass}">Is online degree valid?</h3><p class="${textClass}">Yes — 100%. Degrees from UGC-DEB approved universities are recognized for government jobs, private sector, and higher studies.</p></div>
        <div class="${cardClass}"><div class="${iconClass}"><i class="ti ti-map-pin"></i></div><h3 class="${titleClass}">Confused about which university?</h3><p class="${textClass}">We're local in Surat. Our counselors personally guide you to the right university and program for your career goals — for free.</p></div>`;
  }
}

function toggleFaq(el) {
  const a = el.querySelector("div:nth-child(2)");
  a.classList.toggle("hidden");
}

function filterFaqs(query) {
  const q = query.trim().toLowerCase();
  const items = document.querySelectorAll("#faq-list .faq-item");
  let visibleCount = 0;
  items.forEach((item) => {
    const match = item.dataset.q.includes(q);
    item.classList.toggle("hidden", !match);
    if (match) visibleCount++;
  });
  document
    .getElementById("faq-empty")
    ?.classList.toggle("hidden", visibleCount > 0);
}

function toggleGallery() {
      const cards = document.querySelectorAll('.expandable-card');
      const btnText = document.getElementById('uni-btn-text');
      const icon = document.getElementById('uni-btn-icon');

      let isExpanded = !cards[0].classList.contains('hidden');

      if (isExpanded) {
        // Collapse
        cards.forEach(el => {
          el.classList.add('hidden');
          el.classList.remove('flex');
        });
        btnText.innerText = 'View all 22 Universities';
        icon.className = 'ti ti-chevron-down text-lg transition-transform duration-300';

        // Smooth scroll back to top of gallery section
        document.getElementById('universities').scrollIntoView({ behavior: 'smooth' });
      } else {
        // Expand
        cards.forEach(el => {
          el.classList.remove('hidden');
          el.classList.add('flex');
        });
        btnText.innerText = 'View less';
        icon.className = 'ti ti-chevron-up text-lg transition-transform duration-300';
      }
    }