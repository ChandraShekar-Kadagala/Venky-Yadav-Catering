const WHATSAPP_NUMBER = "918328129450";

document.addEventListener("DOMContentLoaded", () => {
  // --- Restrict Date Picker to Future Dates ---
  const dateInput = document.getElementById("date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  }

  // --- Mobile Menu Toggle ---
  const toggleBtn = document.getElementById("mobile-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      const icon = toggleBtn.querySelector("i");
      if (mobileMenu.classList.contains("hidden")) {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      } else {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        const icon = toggleBtn.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      });
    });
  }

  // --- Sticky Header Styling on Scroll ---
  const header = document.getElementById("main-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("bg-charcoal-dark/95", "shadow-xl");
      header.classList.remove("py-4");
      header.classList.add("py-3");
    } else {
      header.classList.remove("bg-charcoal-dark/95", "shadow-xl");
      header.classList.remove("py-3");
      header.classList.add("py-4");
    }
  });

  // --- Menu Tabs ---
  const tabs = document.querySelectorAll(".menu-tab-btn");
  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-tab");

      // Update Tab Styles
      tabs.forEach(t => {
        t.classList.remove("bg-gold", "text-charcoal", "shadow-lg");
        t.classList.add("text-gray-400");
        t.classList.remove("text-white");
      });
      
      btn.classList.add("bg-gold", "text-charcoal", "shadow-lg");
      btn.classList.remove("text-gray-400");

      // Switch Content
      const vegPane = document.getElementById("veg-menu-pane");
      const nonvegPane = document.getElementById("nonveg-menu-pane");
      
      if (target === "veg") {
        vegPane.classList.remove("hidden");
        nonvegPane.classList.add("hidden");
      } else {
        vegPane.classList.add("hidden");
        nonvegPane.classList.remove("hidden");
      }
      
      // Refresh ScrollTrigger to adjust heights
      if (window.ScrollTrigger) {
        ScrollTrigger.refresh();
      }
    });
  });

  // --- Form Logic ---
  const form = document.getElementById("booking-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const date = document.getElementById("date").value;
      const diet = document.getElementById("diet").value;
      const msg = document.getElementById("msg").value;

      const message = `*✨ VENKY YADAV CATERING INQUIRY ✨*%0A` +
        `-----------------------------------------%0A` +
        `👤 *Name:* ${name}%0A` +
        `📞 *Contact:* ${phone}%0A` +
        `📅 *Event Date:* ${date}%0A` +
        `🍽️ *Preference:* ${diet}%0A` +
        `📝 *Details:* ${msg}%0A` +
        `-----------------------------------------`;

      window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${message}`, "_blank");
    });
  }

  // --- Counter Animation ---
  const counters = document.querySelectorAll('.counter');
  let hasCounted = false;

  const runCounters = () => {
    counters.forEach(counter => {
      counter.innerText = '0';
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        const increment = target / 50; // Speed of counter

        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 30);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
  };

  // --- GSAP Animations ---
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Animation Sequence
    const heroTl = gsap.timeline();
    heroTl.from(".gsap-hero-element", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.2
    });

    // General Fade Up Elements
    gsap.utils.toArray(".gsap-fade-up").forEach(elem => {
      gsap.from(elem, {
        scrollTrigger: {
          trigger: elem,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    });

    // Milestone Counter Trigger
    ScrollTrigger.create({
      trigger: "#milestones",
      start: "top 75%",
      onEnter: () => {
        if (!hasCounted) {
          runCounters();
          hasCounted = true;
        }
      }
    });
  }
});