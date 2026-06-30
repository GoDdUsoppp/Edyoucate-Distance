const EP_DATA = {
  regular: {
    info: "Regular courses require physical attendance at a UGC-affiliated college. Best for students who prefer classroom learning and full campus life.",
    levels: [
      {
        label: "After 10th — Diploma & Vocational",
        subgroups: [
          {
            label: "Diploma Courses",
            courses: [
              "Engineering Diploma",
              "Polytechnic",
              "ITI Trades",
              "Paramedical Diploma",
              "Hotel Management Diploma",
            ],
          },
          {
            label: "Vocational Courses",
            courses: [
              "Computer Applications",
              "Retail Management",
              "Agriculture",
              "Fashion Designing",
              "Beauty & Wellness",
              "Healthcare",
            ],
          },
        ],
      },
      {
        label: "After 12th — Science Stream",
        subgroups: [
          {
            label: "Engineering & Technology",
            courses: [
              "B.Tech / BE — Computer Science",
              "B.Tech / BE — Mechanical",
              "B.Tech / BE — Civil",
              "B.Tech / BE — Electrical",
              "B.Tech / BE — Electronics",
              "B.Tech / BE — AI & Data Science",
            ],
          },
          {
            label: "Medical & Healthcare",
            courses: [
              "MBBS",
              "BDS — Dental",
              "BAMS — Ayurvedic",
              "BHMS — Homeopathic",
              "B.Sc Nursing",
              "B.Pharm — Pharmacy",
              "BPT — Physiotherapy",
              "BMLT — Medical Lab Technology",
            ],
          },
          {
            label: "Science & Others",
            courses: [
              "B.Sc Biotechnology",
              "B.Sc Agriculture",
              "B.Arch — Architecture",
              "B.Sc Computer Science",
              "B.Sc Mathematics",
              "B.Sc Physics",
              "B.Sc Chemistry",
              "Aviation",
            ],
          },
        ],
      },
      {
        label: "After 12th — Commerce Stream",
        subgroups: [
          {
            label: "Commerce & Management",
            courses: [
              "B.Com General",
              "B.Com Accounting & Finance",
              "BBA — Business Administration",
              "BMS — Management Studies",
              "CA — Chartered Accountancy",
              "CS — Company Secretary",
              "CMA — Cost Accountant",
              "Economics (Hons.)",
              "Banking & Finance",
              "Digital Marketing",
            ],
          },
        ],
      },
      {
        label: "After 12th — Arts / Humanities Stream",
        subgroups: [
          {
            label: "Arts & Humanities",
            courses: [
              "BA General",
              "BA English",
              "BA Hindi",
              "BA History",
              "BA Political Science",
              "BA Sociology",
              "BA Psychology",
              "BA Economics",
              "BJMC — Journalism & Mass Communication",
              "BSW — Social Work",
              "BA LLB — Law",
              "Hotel Management",
              "Fashion Designing",
              "Fine Arts",
              "Animation & Multimedia",
            ],
          },
        ],
      },
      {
        label: "Undergraduate (UG) — All Streams",
        subgroups: [
          {
            label: "Engineering & Technology",
            courses: [
              "B.Tech Computer Science",
              "B.Tech Artificial Intelligence",
              "B.Tech Data Science",
              "B.Tech Mechanical",
              "B.Tech Civil",
              "B.Tech Electrical",
              "B.Tech Electronics & Communication",
            ],
          },
          {
            label: "Medical & Healthcare",
            courses: [
              "MBBS",
              "BDS",
              "BAMS",
              "BHMS",
              "B.Sc Nursing",
              "BPT — Physiotherapy",
              "B.Pharm",
              "BMLT — Medical Lab Technology",
            ],
          },
          {
            label: "Commerce & Management",
            courses: [
              "B.Com",
              "BBA — Marketing",
              "BBA — Finance",
              "BBA — HR",
              "B.Com Accounting",
              "B.Com Banking & Insurance",
            ],
          },
          {
            label: "Arts & Humanities",
            courses: [
              "BA Psychology",
              "BA Sociology",
              "BA History",
              "BA Political Science",
              "BA English",
              "BA Economics",
              "BA Public Administration",
            ],
          },
          {
            label: "Computer & IT",
            courses: [
              "BCA",
              "B.Sc Computer Science",
              "B.Sc Cyber Security",
              "B.Sc Artificial Intelligence",
              "B.Sc Data Analytics",
              "B.Sc Cloud Computing",
            ],
          },
          {
            label: "Law",
            courses: ["LLB (3 Year)", "BA LLB (5 Year)", "BBA LLB (5 Year)"],
          },
          {
            label: "Design & Creative",
            courses: [
              "B.Des Fashion Design",
              "B.Des Interior Design",
              "B.Des Graphic Design",
              "B.Des Animation",
              "B.Des UI/UX Design",
              "BFA — Fine Arts",
            ],
          },
          {
            label: "Hospitality & Tourism",
            courses: [
              "BHM — Hotel Management",
              "B.Sc Travel & Tourism",
              "Culinary Arts",
              "Event Management",
            ],
          },
          {
            label: "Agriculture",
            courses: [
              "B.Sc Agriculture",
              "B.Sc Horticulture",
              "B.Sc Forestry",
              "B.Tech Dairy Technology",
              "B.Sc Fisheries",
            ],
          },
          {
            label: "Education",
            courses: [
              "B.Ed — Bachelor of Education",
              "Integrated BA B.Ed",
              "Integrated B.Sc B.Ed",
              "D.El.Ed — Elementary Education",
            ],
          },
        ],
      },
      {
        label: "Postgraduate (PG) / Master's",
        subgroups: [
          {
            label: "Engineering & Technology",
            courses: [
              "M.Tech Computer Science",
              "M.Tech Mechanical",
              "M.Tech Civil",
              "M.Tech Electrical",
              "ME — Master of Engineering",
              "M.Sc Computer Science",
              "M.Sc Data Science",
              "M.Sc Artificial Intelligence",
              "MCA",
            ],
          },
          {
            label: "Management",
            courses: [
              "MBA General",
              "MBA Marketing",
              "MBA Finance",
              "MBA HR",
              "MBA Operations",
              "MBA Business Analytics",
              "PGDM",
              "Executive MBA",
              "Master in HRM",
              "Master in Marketing",
              "Master in Finance",
            ],
          },
          {
            label: "Commerce",
            courses: [
              "M.Com",
              "Master of Finance",
              "Master of Accounting",
              "Master of Banking & Insurance",
              "Master of Economics",
            ],
          },
          {
            label: "Science",
            courses: [
              "M.Sc Physics",
              "M.Sc Chemistry",
              "M.Sc Mathematics",
              "M.Sc Biology",
              "M.Sc Biotechnology",
              "M.Sc Microbiology",
              "M.Sc Environmental Science",
              "M.Sc Data Science",
            ],
          },
          {
            label: "Arts & Humanities",
            courses: [
              "MA English",
              "MA Hindi",
              "MA History",
              "MA Political Science",
              "MA Sociology",
              "MA Psychology",
              "MA Economics",
              "MA Geography",
              "MA Public Administration",
            ],
          },
          {
            label: "Computer & IT",
            courses: [
              "MCA",
              "M.Sc Information Technology",
              "M.Sc Cyber Security",
              "M.Sc Artificial Intelligence",
              "M.Sc Cloud Computing",
              "M.Sc Data Analytics",
            ],
          },
          {
            label: "Education",
            courses: ["M.Ed", "MA Education", "M.P.Ed — Physical Education"],
          },
          { label: "Law", courses: ["LLM — Master of Laws"] },
          {
            label: "Medical & Healthcare",
            courses: [
              "MD",
              "MS — Master of Surgery",
              "MDS — Dental Surgery",
              "M.Pharm",
              "M.Sc Nursing",
              "MPH — Public Health",
              "MPT — Physiotherapy",
            ],
          },
          {
            label: "Agriculture",
            courses: [
              "M.Sc Agriculture",
              "M.Tech Agricultural Engineering",
              "M.Sc Horticulture",
              "M.Sc Forestry",
              "M.Sc Agronomy",
            ],
          },
          {
            label: "Design & Creative",
            courses: [
              "M.Des — Master of Design",
              "MFA — Master of Fine Arts",
              "MA Animation",
              "MA Graphic Design",
              "MA Interior Design",
            ],
          },
          {
            label: "Hospitality & Tourism",
            courses: [
              "MHM — Hotel Management",
              "MBA Hospitality",
              "MA Tourism Management",
              "MA Event Management",
            ],
          },
        ],
      },
    ],
  },
  distance: {
    info: "Distance education is UGC-DEB approved. Study via printed/digital material and appear for exams at a nearby centre. Ideal for working professionals and homemakers.",
    levels: [
      {
        label: "Undergraduate (UG) Programs",
        subgroups: [
          {
            label: "Arts & Humanities",
            courses: [
              "BA General",
              "BA English",
              "BA Hindi",
              "BA History",
              "BA Economics",
              "BA Political Science",
              "BA Sociology",
              "BA Psychology",
              "BA Public Administration",
              "BSW — Social Work",
            ],
          },
          {
            label: "Commerce & Management",
            courses: [
              "B.Com General",
              "B.Com Accounting & Finance",
              "BBA — Business Administration",
            ],
          },
          {
            label: "Computer & IT",
            courses: [
              "BCA — Computer Applications",
              "B.Sc Computer Science",
              "B.Sc Information Technology",
            ],
          },
          {
            label: "Science & Others",
            courses: [
              "B.Sc Mathematics",
              "B.Sc General",
              "B.Lib — Library Science",
            ],
          },
        ],
      },
      {
        label: "Postgraduate (PG) Programs",
        subgroups: [
          {
            label: "Arts & Humanities",
            courses: [
              "MA English",
              "MA Hindi",
              "MA History",
              "MA Economics",
              "MA Political Science",
              "MA Sociology",
              "MA Psychology",
              "MA Public Administration",
              "MA Sanskrit",
              "MSW — Social Work",
            ],
          },
          {
            label: "Commerce & Management",
            courses: [
              "M.Com",
              "MBA (Distance)",
              "PGDBA — Business Administration",
              "PGDHRM — HR Management",
              "PGDMM — Marketing Management",
              "PGDFM — Financial Management",
            ],
          },
          {
            label: "Computer & IT",
            courses: [
              "MCA (Distance)",
              "M.Sc Computer Science",
              "PGDCA — Computer Applications",
              "PGDIT — Information Technology",
            ],
          },
          {
            label: "Education",
            courses: [
              "B.Ed — Bachelor of Education",
              "M.Ed — Master of Education",
              "D.El.Ed — Elementary Education",
            ],
          },
          {
            label: "Library & Other",
            courses: [
              "M.Lib — Library Science",
              "PGDJMC — Journalism & Mass Communication",
              "PGDRD — Rural Development",
            ],
          },
        ],
      },
      {
        label: "Diploma & Certificate Programs",
        subgroups: [
          {
            label: "Diploma Courses",
            courses: [
              "Diploma in Computer Application (DCA)",
              "Diploma in Business Management",
              "Diploma in Journalism",
              "Diploma in Yoga",
              "Diploma in Tourism Management",
            ],
          },
          {
            label: "Certificate Courses",
            courses: [
              "Certificate in Computer Basics",
              "Certificate in Spoken English",
              "Certificate in Tourism Management",
              "Certificate in Yoga",
              "Certificate in Accounting (Tally)",
            ],
          },
        ],
      },
    ],
  },
  online: {
    info: "Online degrees are fully UGC-DEB approved. Attend live + recorded lectures, submit assignments digitally, and give exams online or at a nearby centre.",
    levels: [
      {
        label: "MBA Specialisations",
        subgroups: [
          {
            label: "MBA Programs",
            courses: [
              "MBA General Management",
              "MBA Marketing",
              "MBA Finance",
              "MBA Human Resource Management",
              "MBA Operations Management",
              "MBA Business Analytics",
              "MBA Digital Marketing",
              "MBA Healthcare Management",
              "MBA Logistics & Supply Chain",
              "MBA Retail Management",
              "MBA International Business",
              "MBA Banking & Finance",
              "MBA IT Management",
              "MBA Hotel & Hospitality",
              "Executive MBA",
            ],
          },
        ],
      },
      {
        label: "BBA Programs",
        subgroups: [
          {
            label: "BBA Specialisations",
            courses: [
              "BBA General",
              "BBA Marketing",
              "BBA Finance",
              "BBA HR",
              "BBA Digital Marketing",
              "BBA Entrepreneurship",
              "BBA Aviation & Hospitality",
            ],
          },
        ],
      },
      {
        label: "Computer & IT Programs",
        subgroups: [
          {
            label: "Postgraduate — Tech",
            courses: [
              "MCA",
              "M.Sc Computer Science",
              "M.Sc Data Science",
              "M.Sc Artificial Intelligence",
              "M.Sc Cyber Security",
              "M.Sc Information Technology",
              "M.Sc Cloud Computing",
            ],
          },
          {
            label: "Undergraduate — Tech",
            courses: [
              "BCA",
              "B.Sc Computer Science",
              "B.Sc Data Science",
              "B.Sc Information Technology",
              "B.Sc Animation & VFX",
              "B.Sc Cyber Security",
            ],
          },
        ],
      },
      {
        label: "Commerce Programs",
        subgroups: [
          {
            label: "Commerce & Accounts",
            courses: [
              "B.Com General",
              "B.Com Accounting & Finance",
              "B.Com Banking & Insurance",
              "B.Com Taxation",
              "M.Com General",
              "M.Com Accounting & Finance",
            ],
          },
        ],
      },
      {
        label: "Arts & Humanities",
        subgroups: [
          {
            label: "Undergraduate Arts",
            courses: [
              "BA Liberal Arts",
              "BA English",
              "BA Journalism & Mass Communication",
              "BA Psychology",
              "BA Economics",
            ],
          },
          {
            label: "Postgraduate Arts",
            courses: [
              "MA English",
              "MA Economics",
              "MA Psychology",
              "MA Journalism",
              "MA Public Administration",
              "MA Sociology",
            ],
          },
        ],
      },
      {
        label: "Diploma & Certificate (Online)",
        subgroups: [
          {
            label: "PG Diplomas",
            courses: [
              "PGDCA — Computer Applications",
              "PGDBA — Business Administration",
              "PGDHRM — HR Management",
              "PGDMM — Marketing",
            ],
          },
          {
            label: "Certificate Courses",
            courses: [
              "Certificate in Digital Marketing",
              "Certificate in Data Analytics",
              "Certificate in Cyber Security",
              "Certificate in Python Programming",
              "Certificate in Graphic Design",
              "Certificate in Tally & Accounting",
            ],
          },
        ],
      },
    ],
  },
};

let selectedMode = "distance";

function selectMode(mode) {
  selectedMode = mode;

  // Reset all
  document.getElementById("mode-regular").className =
    "cursor-pointer border border-gray-100 rounded-xl p-3 text-center transition-all hover:bg-gray-50 flex flex-col items-center justify-center h-full";
  document.getElementById("mode-regular").children[1].className =
    "font-bold text-[13px] text-gray-800 leading-tight";
  document.getElementById("mode-regular").children[2].className =
    "text-[9px] text-gray-400 mt-1 leading-tight";
  document.getElementById("icon-regular").className =
    "ti ti-building-community text-gray-400 text-xl mb-1.5 transition-colors";

  document.getElementById("mode-distance").className =
    "cursor-pointer border border-gray-100 rounded-xl p-3 text-center transition-all hover:bg-gray-50 flex flex-col items-center justify-center h-full";
  document.getElementById("mode-distance").children[1].className =
    "font-bold text-[13px] text-gray-800 leading-tight";
  document.getElementById("mode-distance").children[2].className =
    "text-[9px] text-gray-400 mt-1 leading-tight";
  document.getElementById("icon-distance").className =
    "ti ti-home text-gray-400 text-xl mb-1.5 transition-colors";

  document.getElementById("mode-online").className =
    "cursor-pointer border border-gray-100 rounded-xl p-3 text-center transition-all hover:bg-gray-50 flex flex-col items-center justify-center h-full";
  document.getElementById("mode-online").children[1].className =
    "font-bold text-[13px] text-gray-800 leading-tight";
  document.getElementById("mode-online").children[2].className =
    "text-[9px] text-gray-400 mt-1 leading-tight";
  document.getElementById("icon-online").className =
    "ti ti-device-laptop text-gray-400 text-xl mb-1.5 transition-colors";

  // Activate selected
  const target = document.getElementById("mode-" + mode);
  target.className =
    "cursor-pointer border border-[#c81e1e] bg-red-50 rounded-xl p-3 text-center transition-all shadow-[0_0_0_1px_#c81e1e] flex flex-col items-center justify-center h-full";
  target.children[1].className =
    "font-bold text-[13px] text-gray-900 leading-tight";
  target.children[2].className = "text-[9px] text-gray-500 mt-1 leading-tight";
  const icon = document.getElementById("icon-" + mode);
  icon.classList.remove("text-gray-400");
  icon.classList.add("text-[#c81e1e]");

  // Update Info Box
  document.getElementById("form-info-box").innerHTML = EP_DATA[mode].info;

  buildLevelSelect(mode);
}

function buildLevelSelect(mode) {
  const lvl = document.getElementById("form-level");
  lvl.innerHTML =
    '<option value="" disabled selected hidden>Select your education level...</option>';
  EP_DATA[mode].levels.forEach((lv, i) => {
    const op = document.createElement("option");
    op.value = i;
    op.textContent = lv.label;
    lvl.appendChild(op);
  });
  lvl.value = "";
  document.getElementById("form-subgroup-row").style.display = "none";
  document.getElementById("form-course-row").style.display = "none";
}

function onLevelChange() {
  const lvlIdx = document.getElementById("form-level").value;
  if (lvlIdx === "") return;
  const level = EP_DATA[selectedMode].levels[lvlIdx];
  const sub = document.getElementById("form-subgroup");
  sub.innerHTML =
    '<option value="" disabled selected hidden>Select stream...</option>';
  level.subgroups.forEach((sg, i) => {
    const op = document.createElement("option");
    op.value = i;
    op.textContent = sg.label;
    sub.appendChild(op);
  });
  sub.value = "";
  document.getElementById("form-subgroup-row").style.display = "block";
  document.getElementById("form-course-row").style.display = "none";
}

function onSubgroupChange() {
  const lvlIdx = document.getElementById("form-level").value;
  const sgIdx = document.getElementById("form-subgroup").value;
  if (lvlIdx === "" || sgIdx === "") return;
  const courses = EP_DATA[selectedMode].levels[lvlIdx].subgroups[sgIdx].courses;
  const csel = document.getElementById("form-course");
  csel.innerHTML =
    '<option value="" disabled selected hidden>Select course...</option>';
  courses.forEach((c) => {
    const op = document.createElement("option");
    op.value = c;
    op.textContent = c;
    csel.appendChild(op);
  });
  csel.value = "";
  document.getElementById("form-course-row").style.display = "block";
}

function submitNewCtaForm() {
  const nameInput = document.getElementById("form-name");
  const waInput = document.getElementById("form-wa");
  const levelSelect = document.getElementById("form-level");
  const subgroupSelect = document.getElementById("form-subgroup");
  const courseSelect = document.getElementById("form-course");
  const errorMsg = document.getElementById("form-error");

  const num = waInput.value.replace(/\D/g, "");

  if (
    !nameInput.value.trim() ||
    num.length < 10 ||
    !levelSelect.value ||
    !subgroupSelect.value ||
    !courseSelect.value
  ) {
    errorMsg.classList.remove("hidden");
    if (!nameInput.value.trim()) nameInput.classList.add("border-[#c81e1e]");
    if (num.length < 10) waInput.classList.add("border-[#c81e1e]");
    if (!levelSelect.value) levelSelect.classList.add("border-[#c81e1e]");
    if (!subgroupSelect.value) subgroupSelect.classList.add("border-[#c81e1e]");
    if (!courseSelect.value) courseSelect.classList.add("border-[#c81e1e]");
    return;
  }

  errorMsg.classList.add("hidden");
  nameInput.classList.remove("border-[#c81e1e]");
  waInput.classList.remove("border-[#c81e1e]");
  levelSelect.classList.remove("border-[#c81e1e]");
  subgroupSelect.classList.remove("border-[#c81e1e]");
  courseSelect.classList.remove("border-[#c81e1e]");

  const levelText = levelSelect.options[levelSelect.selectedIndex].text;
  const streamText = subgroupSelect.options[subgroupSelect.selectedIndex].text;
  const courseText = courseSelect.value;
  const modeText = selectedMode.charAt(0).toUpperCase() + selectedMode.slice(1);

  const message =
    "Hi, I am " +
    nameInput.value +
    ". I would like to request a free counselling call.\nStudy Mode: " +
    modeText +
    "\nEducation Level: " +
    levelText +
    "\nStream: " +
    streamText +
    "\nCourse: " +
    courseText +
    "\nPhone: " +
    waInput.value;

  window.open(
    "https://wa.me/918866230077?text=" + encodeURIComponent(message),
    "_blank",
  );
}

// Initialize on load
selectMode("distance");
