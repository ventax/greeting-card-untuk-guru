const config = {
  namaGuru: "Pak Iwan Safrudin",
  mataPelajaran: "Produktif",
  namaSekolah: "SMK Negeri 1 Bangsri",
  tahunAjaran: "2023 - 2026",
  jumlahSiswa: 37,

  pesan: "Three years, countless stories. Terima kasih sudah menjadi bagian penting dalam perjalanan kita selama ini pak.Kita minta maaf ya pak untuk segala sikap, tutur kata yang kurang berkenan dan hal-hal yang mungkin pernah mengecewakan pak iwan selama ini.Semoga langkah pak iwan selalu dipenuhi hal-hal baik, sehat selalu dan bahagia selalu pak iwan safrudin dewa coding.",

  momen: [
    { tahun: "2023", icon: "sparkles", teks: "Awal masuk, langsung diajak bikin web kecil-kecilan biar berani coba" },
    { tahun: "2024", icon: "sparkles", teks: "Pak Iwan jadi wali kelas paling sabar, sering traktir jajan pas lagi capek" },
    { tahun: "2025", icon: "trophy", teks: "Proyek website makin serius, revisi kecil-kecil tapi jadi makin rapi" },
    { tahun: "2026", icon: "confetti", teks: "Akhir perjalanan, terima kasih untuk semua bimbingan dan kebaikan" }
  ],

  siswa: [
    "Aga",
    "Agasta",
    "Alinda",
    "Almas",
    "Andre",
    "Arkaan",
    "Asla",
    "Bahrul",
    "Danang",
    "Desta",
    "Diana",
    "Dido",
    "Dodi",
    "Doni",
    "Dwi",
    "Hammam",
    "Hanif",
    "Ilyas",
    "Kenang",
    "Khozi",
    "Ladia",
    "Laras",
    "Lukman",
    "Nanda",
    "Repal",
    "Reno",
    "Riko",
    "Rohim",
    "Rohman",
    "Rudi",
    "Silaa",
    "Siti",
    "Tantra",
    "Tete",
    "Ucup",
    "Wisnu",
    "Wulan"
  ],

  photos: [
    "assets/photos/hari_batik.jpeg",
    "assets/photos/hbd_pak_iwan_2025.png",
    "assets/photos/hbd_pak_iwan_2026.jpeg",
    "assets/photos/idul_fitri_pak_iwan.png",
    "assets/photos/kelulusan.png",
    "assets/photos/pentas_seni.png",
  ],

  kutipanPenutup: "Seorang guru yang baik bisa menginspirasi harapan, membangkitkan imajinasi, dan menanamkan kecintaan belajar.",
  lagu: "assets/song/ssstik.io_1778598913338.mp3",
  confettiSfx: "assets/song/confetti-pop-sound-effect.mp3",
  confettiSfxVolume: 1,
  confettiSfxDelay: 500,
  bonusTitle: "Hadiah Terakhir",
  bonusMessage: "Semua kotak sudah dibuka. Ini bonus kecil sebagai penutup.",
  bonusButton: "Lihat Foto Bonus",
  bonusPhoto: "assets/photos/special_photo.png",
  bonusDownloadLabel: "Download Foto Bonus",
  bonusShareCaption:
    "Wajib diposting di sosmed dengan suasana gembira! Terima kasih untuk semuanya. #XIIpplg2 #TerimaKasihGuru",
  bonusShareButton: "Salin Caption"
};

const iconMap = {
  sparkles: "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 2.5l1.6 4.3 4.6 1-3.5 3.1.9 4.6-3.6-2.2-3.6 2.2.9-4.6L5.8 7.8l4.6-1L12 2.5Z\" fill=\"currentColor\"/><path d=\"M19.2 14.8l.7 1.9 2 .4-1.5 1.3.4 2-1.6-1-1.6 1 .4-2-1.5-1.3 2-.4.7-1.9Z\" fill=\"currentColor\"/></svg>",
  trophy: "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 4h10v3a5 5 0 0 1-4 4.9V14h2.6a1 1 0 0 1 .9 1.4l-1 2A1 1 0 0 1 14.6 18H9.4a1 1 0 0 1-.9-.6l-1-2A1 1 0 0 1 8.4 14H11v-2.1A5 5 0 0 1 7 7V4Z\" fill=\"currentColor\"/><path d=\"M5 6H3a2 2 0 0 0 2 2M19 6h2a2 2 0 0 1-2 2\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\"/></svg>",
  confetti: "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 4l6 6-6 2V4Z\" fill=\"currentColor\"/><path d=\"M13 6l6 6-6 2V6Z\" fill=\"currentColor\"/><path d=\"M8 15l1 3M12 16l2 2M16 14l3 1\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\"/></svg>"
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const giftPlaceholder = "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=";

const setupPageTransitions = () => {
  const page = document.querySelector(".page");
  if (!page) return;

  requestAnimationFrame(() => {
    page.classList.add("is-ready");
  });

  if (prefersReducedMotion) return;

  const links = document.querySelectorAll("a[href]");
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#")) return;
    if (href.startsWith("mailto:") || href.startsWith("tel:")) return;
    if (link.target && link.target !== "_self") return;
    if (link.hasAttribute("download")) return;

    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin) return;

    link.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (url.pathname === window.location.pathname && url.hash === window.location.hash) return;

      event.preventDefault();
      page.classList.remove("is-ready");
      page.classList.add("is-leaving");

      window.setTimeout(() => {
        window.location.href = link.href;
      }, 320);
    });
  });
};

const playOpenSound = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const context = new AudioContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(520, context.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(860, context.currentTime + 0.12);

    gain.gain.setValueAtTime(0, context.currentTime);
    gain.gain.linearRampToValueAtTime(0.12, context.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.2);

    oscillator.connect(gain);
    gain.connect(context.destination);

    oscillator.start();
    oscillator.stop(context.currentTime + 0.22);

    oscillator.onended = () => {
      context.close();
    };
  } catch (error) {
    console.warn("Audio blocked", error);
  }
};

const playConfettiSfx = () => {
  if (!config.confettiSfx) return;

  const audio = new Audio(config.confettiSfx);
  audio.volume =
    typeof config.confettiSfxVolume === "number" ? config.confettiSfxVolume : 1;
  audio.preload = "auto";
  audio.setAttribute("playsinline", "");

  const tryPlay = () => audio.play().then(() => true).catch(() => false);

  tryPlay().then((ok) => {
    if (ok) return;

    const unlock = () => {
      tryPlay().then((played) => {
        if (!played) return;
        window.removeEventListener("pointerdown", unlock);
        window.removeEventListener("keydown", unlock);
        window.removeEventListener("touchstart", unlock);
      });
    };

    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });
    window.addEventListener("touchstart", unlock, { once: true, passive: true });
  });
};

const setupAudio = () => {
  if (!config.lagu) return;

  const audio = document.createElement("audio");
  audio.src = config.lagu;
  audio.loop = true;
  audio.preload = "auto";
  audio.autoplay = true;
  audio.setAttribute("playsinline", "");
  audio.setAttribute("aria-hidden", "true");

  document.body.appendChild(audio);

  let unlocked = false;

  const hidePrompt = () => {
    const prompt = document.querySelector(".audio-prompt");
    if (prompt) prompt.remove();
  };

  const tryPlay = async () => {
    try {
      await audio.play();
      unlocked = true;
      hidePrompt();
      return true;
    } catch (error) {
      return false;
    }
  };

  const handleUnlock = () => {
    if (unlocked) return;
    tryPlay().then((ok) => {
      if (ok) {
        window.removeEventListener("pointerdown", handleUnlock);
        window.removeEventListener("keydown", handleUnlock);
        window.removeEventListener("touchstart", handleUnlock);
      }
    });
  };

  const ensurePrompt = () => {
    if (document.querySelector(".audio-prompt")) return;
    const overlay = document.createElement("div");
    overlay.className = "audio-prompt";
    overlay.innerHTML = `
      <div class="audio-prompt-card">
        <p class="audio-prompt-title">Putar lagu?</p>
        <p class="audio-prompt-sub">Ketuk untuk memulai musik.</p>
        <button class="audio-prompt-button" type="button">Mulai Musik</button>
      </div>
    `;
    overlay
      .querySelector(".audio-prompt-button")
      .addEventListener("click", handleUnlock);
    document.body.appendChild(overlay);
  };

  tryPlay().then((ok) => {
    if (!ok) ensurePrompt();
  });

  window.addEventListener("pointerdown", handleUnlock);
  window.addEventListener("keydown", handleUnlock);
  window.addEventListener("touchstart", handleUnlock, { passive: true });
};

const bindText = (key, value) => {
  document.querySelectorAll(`[data-bind=\"${key}\"]`).forEach((el) => {
    el.textContent = value;
  });
};

const toTitleCase = (value) =>
  value.replace(/\w\S*/g, (word) =>
    `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`
  );

const formatCaptionFromPath = (path) => {
  const filename = path.split("/").pop() || path;
  const name = filename.replace(/\.[^/.]+$/, "");
  const cleaned = name.replace(/[_-]+/g, " ").trim();
  return cleaned ? toTitleCase(cleaned) : "Foto Kenangan";
};

const createPhotoCaptionMap = () => {
  const map = new Map();

  if (Array.isArray(config.photoCaptions)) {
    config.photos.forEach((src, index) => {
      const caption = config.photoCaptions[index];
      if (caption) map.set(src, caption);
    });
  } else if (config.photoCaptions && typeof config.photoCaptions === "object") {
    Object.entries(config.photoCaptions).forEach(([src, caption]) => {
      if (caption) map.set(src, caption);
    });
  }

  return map;
};

const createDownloadName = (captionText, fallback) => {
  const safe = (captionText || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return safe || fallback;
};

const copyTextToClipboard = async (text) => {
  if (!text) return false;

  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      return false;
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  textarea.style.pointerEvents = "none";
  document.body.appendChild(textarea);
  textarea.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(textarea);
  return ok;
};

const resolveBonusPhoto = () => {
  if (config.bonusPhoto === null) return null;
  if (config.bonusPhoto) return config.bonusPhoto;
  if (Array.isArray(config.photos) && config.photos.length) {
    return config.photos[config.photos.length - 1];
  }
  return null;
};

const setupGalleryProgress = (wrapper, total) => {
  const progress = document.querySelector("[data-gallery-progress]");
  if (!progress) return null;

  const label = progress.querySelector("[data-progress-label]");
  const fill = progress.querySelector("[data-progress-fill]");
  const track = progress.querySelector("[data-progress-track]");

  if (!total) {
    progress.style.display = "none";
    return null;
  }

  const update = (opened) => {
    if (label) label.textContent = `${opened}/${total} kotak terbuka`;
    if (fill) fill.style.width = `${Math.round((opened / total) * 100)}%`;
    if (track) {
      track.setAttribute("aria-valuenow", String(opened));
      track.setAttribute("aria-valuemax", String(total));
    }
  };

  update(0);
  return { update };
};

const setupBonusCard = (wrapper, captionMap) => {
  if (!wrapper) return null;

  let card = wrapper.querySelector(".bonus-card");
  if (!card) {
    card = document.createElement("div");
    card.className = "bonus-card is-hidden";
    card.setAttribute("data-bonus", "true");
    card.innerHTML = `
      <p class="bonus-title"></p>
      <p class="bonus-message"></p>
      <button class="bonus-button" type="button"></button>
    `;
    wrapper.appendChild(card);
  }

  const title = card.querySelector(".bonus-title");
  const message = card.querySelector(".bonus-message");
  const button = card.querySelector(".bonus-button");

  const bonusSrc = resolveBonusPhoto();
  const caption = bonusSrc
    ? captionMap.get(bonusSrc) || formatCaptionFromPath(bonusSrc)
    : "";

  if (title) title.textContent = config.bonusTitle || "Hadiah Terakhir";
  if (message) {
    message.textContent =
      config.bonusMessage || "Semua kotak sudah dibuka. Ini bonus kecil sebagai penutup.";
  }

  if (button) {
    if (bonusSrc) {
      button.hidden = false;
      button.textContent = config.bonusButton || "Lihat Foto Bonus";
      if (!button.dataset.bound) {
        button.addEventListener("click", () =>
          openLightbox(bonusSrc, caption, {
            download: true,
            downloadUrl: bonusSrc,
            shareCaption: config.bonusShareCaption,
            shareLabel: config.bonusShareButton
          })
        );
        button.dataset.bound = "true";
      }
    } else {
      button.hidden = true;
    }
  }

  const show = () => {
    card.classList.remove("is-hidden");
  };

  return { show };
};

let lightboxState = null;

const ensureLightbox = () => {
  if (lightboxState) return lightboxState;

  const root = document.createElement("div");
  root.className = "lightbox";
  root.setAttribute("aria-hidden", "true");
  root.innerHTML = `
    <div class="lightbox-backdrop" data-close="true"></div>
    <div class="lightbox-card" role="dialog" aria-modal="true" aria-label="Foto kenangan">
      <button class="lightbox-close" type="button" aria-label="Tutup">&times;</button>
      <figure class="lightbox-figure">
        <img class="lightbox-image" alt="">
        <figcaption class="lightbox-caption"></figcaption>
      </figure>
      <div class="lightbox-actions">
        <a class="lightbox-download" href="#" download hidden></a>
      </div>
      <div class="lightbox-share" hidden>
        <p class="lightbox-share-title">Caption sosmed</p>
        <p class="lightbox-share-text"></p>
        <button class="lightbox-share-button" type="button">Salin Caption</button>
      </div>
    </div>
  `;

  const image = root.querySelector(".lightbox-image");
  const caption = root.querySelector(".lightbox-caption");
  const download = root.querySelector(".lightbox-download");
  const shareWrap = root.querySelector(".lightbox-share");
  const shareText = root.querySelector(".lightbox-share-text");
  const shareButton = root.querySelector(".lightbox-share-button");
  const closeButton = root.querySelector(".lightbox-close");
  const backdrop = root.querySelector(".lightbox-backdrop");

  const close = () => {
    root.classList.remove("is-visible");
    root.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-lightbox-open");
    image.src = "";
    image.alt = "";
    caption.textContent = "";
    if (download) {
      download.hidden = true;
      download.removeAttribute("href");
      download.removeAttribute("download");
      download.textContent = "";
    }
    if (shareWrap && shareText && shareButton) {
      shareWrap.hidden = true;
      shareText.textContent = "";
      shareButton.textContent = config.bonusShareButton || "Salin Caption";
    }
  };

  if (shareButton && !shareButton.dataset.bound) {
    shareButton.addEventListener("click", async () => {
      if (!shareText) return;
      const text = shareText.textContent || "";
      const ok = await copyTextToClipboard(text);
      shareButton.textContent = ok ? "Tersalin!" : "Gagal salin";
      window.setTimeout(() => {
        shareButton.textContent = config.bonusShareButton || "Salin Caption";
      }, 1400);
    });
    shareButton.dataset.bound = "true";
  }

  closeButton.addEventListener("click", close);
  backdrop.addEventListener("click", close);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });

  document.body.appendChild(root);

  lightboxState = {
    root,
    image,
    caption,
    download,
    shareWrap,
    shareText,
    shareButton,
    close
  };
  return lightboxState;
};

const openLightbox = (src, captionText, options = {}) => {
  if (!src) return;
  const { root, image, caption, download, shareWrap, shareText, shareButton } =
    ensureLightbox();

  image.src = src;
  image.alt = captionText ? `Foto kenangan: ${captionText}` : "Foto kenangan";
  caption.textContent = captionText || "";

  if (download && options.download) {
    const name = createDownloadName(captionText, "special-photo");
    download.hidden = false;
    download.href = options.downloadUrl || src;
    download.setAttribute("download", options.downloadName || name);
    download.textContent =
      options.downloadLabel || config.bonusDownloadLabel || "Download Foto Bonus";
  } else if (download) {
    download.hidden = true;
    download.removeAttribute("href");
    download.removeAttribute("download");
    download.textContent = "";
  }

  if (shareWrap && shareText && shareButton && options.shareCaption) {
    shareWrap.hidden = false;
    shareText.textContent = options.shareCaption;
    shareButton.textContent =
      options.shareLabel || config.bonusShareButton || "Salin Caption";
  } else if (shareWrap && shareText && shareButton) {
    shareWrap.hidden = true;
    shareText.textContent = "";
    shareButton.textContent = config.bonusShareButton || "Salin Caption";
  }

  root.classList.add("is-visible");
  root.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-lightbox-open");
};

const renderPhotos = () => {
  const wrapper = document.querySelector("[data-photos]");
  if (!wrapper) return;

  const captionMap = createPhotoCaptionMap();
  const getCaption = (src) => captionMap.get(src) || formatCaptionFromPath(src);
  const total = config.photos.length;
  const progress = setupGalleryProgress(wrapper, total);
  const bonus = setupBonusCard(wrapper, captionMap);
  let openedCount = 0;

  const photoPool = [...config.photos];
  const pickRandomPhoto = () => {
    if (!photoPool.length) {
      return config.photos[Math.floor(Math.random() * config.photos.length)];
    }
    const index = Math.floor(Math.random() * photoPool.length);
    return photoPool.splice(index, 1)[0];
  };

  const openGiftBox = (box) => {
    if (box.dataset.opened === "true") return;
    const img = box.querySelector(".gift-image");
    const captionEl = box.querySelector(".gift-caption");
    const src = pickRandomPhoto();
    const caption = getCaption(src);
    img.src = src;
    img.alt = caption ? `Foto kenangan: ${caption}` : `Foto bersama ${config.namaGuru}`;
    if (captionEl) captionEl.textContent = caption;
    box.dataset.photo = src;
    box.dataset.caption = caption;
    box.dataset.opened = "true";
    box.classList.add("is-open");
    playOpenSound();

    openedCount += 1;
    if (progress) progress.update(openedCount);
    if (bonus && openedCount >= total) bonus.show();
  };

  if (!config.photos.length) {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = "<figure><div class=\"empty-slide\">Tambahkan foto di folder assets/photos</div></figure>";
    wrapper.appendChild(slide);
    return;
  }

  config.photos.forEach(() => {
    const slide = document.createElement("div");
    slide.className = "gift-box";
    slide.setAttribute("data-stagger", "true");

    const img = document.createElement("img");
    img.className = "gift-image";
    img.src = giftPlaceholder;
    img.alt = "Kotak hadiah foto kenangan";

    const cover = document.createElement("button");
    cover.type = "button";
    cover.className = "gift-cover";
    cover.setAttribute("aria-label", "Buka kotak hadiah");
    cover.innerHTML = `
      <div class="gift-art">
        <div class="gift-lid">
          <span class="gift-bow"></span>
        </div>
        <div class="gift-body">
          <span class="gift-ribbon"></span>
        </div>
      </div>
      <div class="gift-label">Kotak Kejutan<div class="gift-hint">Tap untuk buka</div></div>
    `;
    cover.addEventListener("click", () => openGiftBox(slide));

    slide.addEventListener("click", (event) => {
      if (slide.dataset.opened !== "true") return;
      if (event.target.closest(".gift-cover")) return;
      openLightbox(slide.dataset.photo, slide.dataset.caption);
    });

    const caption = document.createElement("span");
    caption.className = "gift-caption";

    slide.appendChild(img);
    slide.appendChild(cover);
    slide.appendChild(caption);
    wrapper.appendChild(slide);
  });
};

const renderTimeline = () => {
  const list = document.querySelector("[data-list=\"momen\"]");
  if (!list) return;

  config.momen.forEach((item) => {
    const li = document.createElement("li");
    li.className = "timeline-item";
    li.setAttribute("data-stagger", "true");

    li.innerHTML = `
      <div class="timeline-icon">${iconMap[item.icon] || iconMap.sparkles}</div>
      <div class="timeline-content">
        <h3>${item.tahun}</h3>
        <p>${item.teks}</p>
      </div>
    `;

    list.appendChild(li);
  });
};

const renderSignatures = () => {
  const container = document.querySelector("[data-list=\"siswa\"]");
  if (!container) return;

  config.siswa.forEach((nama) => {
    const chip = document.createElement("span");
    chip.className = "signature";
    chip.textContent = nama;
    chip.setAttribute("data-stagger", "true");
    container.appendChild(chip);
  });
};

const initSwiper = () => {
  const gallery = document.querySelector(".gallery-swiper");
  if (!gallery || typeof Swiper === "undefined") return;

  const hasBlindBoxes = Boolean(gallery.querySelector(".blind-box"));

  const swiper = new Swiper(gallery, {
    effect: "fade",
    fadeEffect: { crossFade: true },
    loop: !hasBlindBoxes,
    autoplay: prefersReducedMotion
      ? false
      : {
          delay: 3000,
          disableOnInteraction: false
        },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });

  if (!prefersReducedMotion) {
    swiper.on("click", () => {
      swiper.autoplay.stop();
      setTimeout(() => swiper.autoplay.start(), 2500);
    });
  }
};

const setupScrollReveal = () => {
  const sections = document.querySelectorAll(".section");
  if (!sections.length) return;

  if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
    sections.forEach((section) => section.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        const staggerItems = entry.target.querySelectorAll("[data-stagger]");
        staggerItems.forEach((item, index) => {
          item.style.transitionDelay = `${index * 120}ms`;
        });

        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => observer.observe(section));
};

const runHeroAnimation = () => {
  if (prefersReducedMotion || !window.gsap) return;

  const targets = document.querySelectorAll("[data-animate]");
  window.gsap.from(targets, {
    opacity: 0,
    y: 20,
    duration: 0.9,
    stagger: 0.12,
    ease: "power2.out"
  });
};

const runConfetti = () => {
  if (prefersReducedMotion || typeof confetti === "undefined") return;
  if (!document.querySelector(".hero")) return;

  setTimeout(() => {
    const sfxDelay =
      typeof config.confettiSfxDelay === "number" ? config.confettiSfxDelay : 0;
    if (sfxDelay > 0) {
      window.setTimeout(playConfettiSfx, sfxDelay);
    } else {
      playConfettiSfx();
    }
    const duration = 2500;
    const end = Date.now() + duration;

    const colors = ["#f25f5c", "#f7b500", "#2ec4b6", "#1f2430"];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, 500);
};

const initContent = () => {
  bindText("namaGuru", config.namaGuru);
  bindText("mataPelajaran", config.mataPelajaran);
  bindText("namaSekolah", config.namaSekolah);
  bindText("tahunAjaran", config.tahunAjaran);
  bindText("jumlahSiswa", `${config.jumlahSiswa} siswa`);
  bindText("pesan", config.pesan);
  bindText("kutipanPenutup", config.kutipanPenutup);

  const heroLead = "Three years, countless stories. Terima kasih sudah menjadi bagian penting dalam perjalanan kita selama ini pak. Kita minta maaf ya pak untuk segala sikap, tutur kata yang kurang berkenan dan hal-hal yang mungkin pernah mengecewakan pak iwan selama ini. Semoga langkah pak iwan selalu dipenuhi hal-hal baik, sehat selalu dan bahagia selalu pak iwan safrudin dewa coding. from : anak anak pak iw <3";
  bindText("heroLead", heroLead);

  renderPhotos();
  renderTimeline();
  renderSignatures();
};

document.addEventListener("DOMContentLoaded", () => {
  initContent();
  setupAudio();
  initSwiper();
  setupScrollReveal();
  runHeroAnimation();
  runConfetti();
  setupPageTransitions();
});
