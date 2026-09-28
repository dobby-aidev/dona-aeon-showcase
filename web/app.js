/* ─────────────────────────────────────────────────────────────────
   DONA ÆON — Official 3D Spatial Runway Engine & Neural Terminal
   Ground-truth blueprint: donacodex.com / dona-nova-ui-architecture
   Color Palette: Bioluminescent Synapse Cyan & Amethyst Plasma
   Zero Cloud LLMs · Zero External APIs · 100% SNN & Bio-Acoustics
   ───────────────────────────────────────────────────────────────── */

document.addEventListener("DOMContentLoaded", () => {

    const $ = id => document.getElementById(id);
    const isMobile = window.innerWidth <= 768;

    /* ─────────────────────────────────────────────────────────────
       1. MILESTONES SPECIFICATION (Z-Coordinates & Falloff)
       ───────────────────────────────────────────────────────────── */
    const START_Z = 20.0;
    const MIN_Z   = -578.0;
    const MAX_Z   = 28.0;

    const MILESTONES = [
        { id: 0, z:  20.0, plateau: 20.0, fade: 46.0, sector: "00 // GİRİŞ", sectorEn: "00 // ENTRY", short: "GİRİŞ" },
        { id: 1, z: -65.0, plateau: 24.0, fade: 28.0, sector: "01 // KOKLEA", sectorEn: "01 // COCHLEA", short: "KOKLEA" },
        { id: 2, z: -150.0, plateau: 24.0, fade: 28.0, sector: "02 // NEOKORTEKS", sectorEn: "02 // NEOCORTEX", short: "KORTEKS" },
        { id: 3, z: -235.0, plateau: 24.0, fade: 28.0, sector: "03 // SERBEST ENERJİ", sectorEn: "03 // FREE ENERGY", short: "FEP" },
        { id: 4, z: -320.0, plateau: 24.0, fade: 28.0, sector: "04 // ÇEKİCİLER", sectorEn: "04 // ATTRACTORS", short: "ÇEKİCİ" },
        { id: 5, z: -405.0, plateau: 24.0, fade: 28.0, sector: "05 // VOKAL MOTOR", sectorEn: "05 // VOCAL MOTOR", short: "VOKAL" },
        { id: 6, z: -490.0, plateau: 24.0, fade: 28.0, sector: "06 // UYKU / BELLEK", sectorEn: "06 // SLEEP / MEMORY", short: "BELLEK" },
        { id: 7, z: -575.0, plateau: 38.0, fade: 32.0, sector: "07 // CANLI TERMİNAL", sectorEn: "07 // LIVE TERMINAL", short: "TERMİNAL" }
    ];

    let currentZ = START_Z;
    let targetZ  = START_Z;
    let activeMilestoneIdx = 0;
    let isIntroGlide = true;
    let introStartTime = Date.now();
    const INTRO_DURATION = 5500; // 5.5s bird's-eye opening glide

    // Mouse Parallax & Drag
    let mouseX = 0, mouseY = 0;
    let isDragging = false;
    let dragStartY = 0;
    let dragStartZ = 0;

    /* ─────────────────────────────────────────────────────────────
       2. THREE.JS 3D ENGINE (Daylight Stratosphere, Sun & Cloud Sea)
       Flying over realistic 3D volumetric clouds above Earth
       ───────────────────────────────────────────────────────────── */
    const canvas = $("webgl-canvas");
    let scene, camera, renderer;
    let cloudsGroup = [];
    let cloudTexture = null;
    let mistParticles, mistGeo;
    let mistCount = isMobile ? 120 : 260;
    let sunMesh, sunHaloMesh;

    // Procedural Cumulus Cloud Billboard Texture (Organic Multi-Octave Gaussian Puffs)
    function createCumulusCloudTexture() {
        const size = 256;
        const c = document.createElement("canvas");
        c.width = size;
        c.height = size;
        const ctx = c.getContext("2d");

        const puffs = [
            { x: 128, y: 130, r: 82, a: 0.88 },
            { x: 92,  y: 112, r: 66, a: 0.76 },
            { x: 164, y: 116, r: 65, a: 0.75 },
            { x: 74,  y: 148, r: 58, a: 0.70 },
            { x: 182, y: 145, r: 60, a: 0.72 },
            { x: 130, y: 84,  r: 56, a: 0.82 },
            { x: 105, y: 165, r: 50, a: 0.62 },
            { x: 152, y: 164, r: 52, a: 0.62 },
        ];

        for (const p of puffs) {
            const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
            grad.addColorStop(0, `rgba(255, 255, 255, ${p.a})`);
            grad.addColorStop(0.45, `rgba(242, 250, 255, ${p.a * 0.75})`);
            grad.addColorStop(0.8, `rgba(215, 238, 255, ${p.a * 0.28})`);
            grad.addColorStop(1, "rgba(200, 230, 255, 0)");
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
        }

        const tex = new THREE.CanvasTexture(c);
        tex.needsUpdate = true;
        return tex;
    }

    // Procedural Sun Corona / Halo Texture
    function createSunHaloTexture() {
        const size = 256;
        const c = document.createElement("canvas");
        c.width = size;
        c.height = size;
        const ctx = c.getContext("2d");

        const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
        grad.addColorStop(0, "rgba(255, 255, 255, 1.0)");
        grad.addColorStop(0.18, "rgba(255, 245, 215, 0.75)");
        grad.addColorStop(0.45, "rgba(255, 220, 160, 0.28)");
        grad.addColorStop(0.8, "rgba(255, 200, 120, 0.08)");
        grad.addColorStop(1, "rgba(255, 180, 80, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(128, 128, 128, 0, Math.PI * 2);
        ctx.fill();

        const tex = new THREE.CanvasTexture(c);
        tex.needsUpdate = true;
        return tex;
    }

    function initThreeEngine() {
        if (!canvas || typeof THREE === "undefined") {
            console.warn("Three.js r128 not loaded");
            return;
        }

        const W = window.innerWidth;
        const H = window.innerHeight;

        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x94c1eb, 0.0032);

        camera = new THREE.PerspectiveCamera(54, W / H, 0.1, 1050);
        camera.position.set(0, 12, 62);

        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: !isMobile,
            alpha: false,
            powerPreference: "high-performance"
        });
        renderer.setSize(W, H);
        renderer.setPixelRatio(isMobile ? 1.0 : Math.min(window.devicePixelRatio, 1.25));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.32;

        // ── 1. Gerçekçi Stratosferik Atmosfer Gök Kubbesi (Rayleigh Sky Dome)
        const skyVertexShader = `
            varying vec3 vWorldPos;
            void main() {
                vec4 worldPos = modelMatrix * vec4(position, 1.0);
                vWorldPos = worldPos.xyz;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `;
        const skyFragmentShader = `
            varying vec3 vWorldPos;
            void main() {
                float h = normalize(vWorldPos).y;
                // Üst: Derin stratosferik safir mavisi, Ufuk: Güneşle aydınlanan parlak gök sisi
                vec3 zenith = vec3(0.05, 0.22, 0.48);     // #0d387a Derin mavi
                vec3 midSky = vec3(0.24, 0.54, 0.82);     // #3d8ad1 Canlı gök mavisi
                vec3 horizon = vec3(0.76, 0.88, 0.98);    // #c2e0fa Güneş parıltılı ufuk
                vec3 groundMist = vec3(0.48, 0.68, 0.86); // #7aae formatı

                vec3 col = mix(groundMist, horizon, max(0.0, h + 0.12));
                col = mix(col, midSky, clamp(h * 1.8, 0.0, 1.0));
                col = mix(col, zenith, clamp(pow(max(0.0, h), 0.7), 0.0, 1.0));

                gl_FragColor = vec4(col, 1.0);
            }
        `;
        const skyMat = new THREE.ShaderMaterial({
            vertexShader: skyVertexShader,
            fragmentShader: skyFragmentShader,
            side: THREE.BackSide,
            depthWrite: false
        });
        const skyDomeGeo = new THREE.SphereGeometry(900, 32, 20);
        const skyDomeMesh = new THREE.Mesh(skyDomeGeo, skyMat);
        scene.add(skyDomeMesh);

        // ── 2. Doğal Gün Işığı & Yandan Vuran Sıcak Güneş
        const skyAmb = new THREE.AmbientLight(0x8ec2eb, 1.35);
        scene.add(skyAmb);

        const hemiLight = new THREE.HemisphereLight(0xdcf2ff, 0x6e9ec4, 0.95);
        scene.add(hemiLight);

        // Yandan vuran güçlü sıcak güneş ışığı (Doğal gölgeler & bulut kenarı parıltıları)
        const sunLight = new THREE.DirectionalLight(0xfff1d2, 2.9);
        sunLight.position.set(120, 48, -60);
        scene.add(sunLight);

        const fillSun = new THREE.DirectionalLight(0xa5d6fa, 0.9);
        fillSun.position.set(-70, 32, 25);
        scene.add(fillSun);

        // ── 3. Uzakta Parlayan 3D Güneş & Korona
        const sunGeo = new THREE.SphereGeometry(20, 24, 24);
        const sunMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        sunMesh = new THREE.Mesh(sunGeo, sunMat);
        sunMesh.position.set(140, 72, -490);
        scene.add(sunMesh);

        const haloGeo = new THREE.PlaneGeometry(180, 180);
        const haloMat = new THREE.MeshBasicMaterial({
            map: createSunHaloTexture(),
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        sunHaloMesh = new THREE.Mesh(haloGeo, haloMat);
        sunHaloMesh.position.copy(sunMesh.position);
        scene.add(sunHaloMesh);

        // ── 4. Gerçekçi Katmanlı 3D Bulut Denizi (Uçak Penceresinden Manzara Hissi)
        cloudTexture = createCumulusCloudTexture();
        const cloudMat = new THREE.MeshLambertMaterial({
            map: cloudTexture,
            transparent: true,
            opacity: 0.88,
            depthWrite: false
        });

        // A. Alt Bulut Okyanusu (Optimize, ipeksi akıcı bulut halısı)
        const seaCloudCount = isMobile ? 30 : 65;
        for (let i = 0; i < seaCloudCount; i++) {
            const w = 55 + Math.random() * 45;
            const h = 38 + Math.random() * 32;
            const geo = new THREE.PlaneGeometry(w, h);
            const mesh = new THREE.Mesh(geo, cloudMat);

            const x = (Math.random() - 0.5) * 500;
            const y = -14 + (Math.random() - 0.5) * 8;
            const z = -720 + Math.random() * 780;

            mesh.position.set(x, y, z);
            mesh.rotation.x = -Math.PI / 2 + (Math.random() - 0.5) * 0.28;
            mesh.rotation.z = Math.random() * Math.PI * 2;

            mesh.userData = {
                initY: y,
                speedY: 0.25 + Math.random() * 0.35,
                offset: Math.random() * 10
            };

            scene.add(mesh);
            cloudsGroup.push(mesh);
        }

        // B. Yan Bulut Kanyonları (Solda ve sağda yükselen kümülüs kuleleri)
        const bankCount = isMobile ? 16 : 30;
        for (let i = 0; i < bankCount; i++) {
            const w = 45 + Math.random() * 40;
            const h = 32 + Math.random() * 30;
            const geo = new THREE.PlaneGeometry(w, h);
            const mesh = new THREE.Mesh(geo, cloudMat);

            const side = Math.random() > 0.5 ? 1 : -1;
            const x = side * (34 + Math.random() * 75);
            const y = -7 + Math.random() * 24;
            const z = -700 + Math.random() * 750;

            mesh.position.set(x, y, z);
            mesh.rotation.z = Math.random() * Math.PI * 2;

            mesh.userData = {
                initY: y,
                speedY: 0.35 + Math.random() * 0.45,
                offset: Math.random() * 10
            };

            scene.add(mesh);
            cloudsGroup.push(mesh);
        }

        // ── 5. Yüksek İrtifa Atmosferik Sis & Nem Parçacıkları
        mistGeo = new THREE.BufferGeometry();
        const mistPositions = new Float32Array(mistCount * 3);
        const mistColors = new Float32Array(mistCount * 3);

        const cWhite = new THREE.Color(0xffffff);
        const cSunMist = new THREE.Color(0xfff6e5);
        const cSkyCyan = new THREE.Color(0xd6effe);

        for (let i = 0; i < mistCount; i++) {
            mistPositions[i * 3]     = (Math.random() - 0.5) * 85;
            mistPositions[i * 3 + 1] = -12 + Math.random() * 36;
            mistPositions[i * 3 + 2] = -700 + Math.random() * 760;

            const r = Math.random();
            const col = r > 0.6 ? cSunMist : (r > 0.25 ? cSkyCyan : cWhite);
            mistColors[i * 3]     = col.r;
            mistColors[i * 3 + 1] = col.g;
            mistColors[i * 3 + 2] = col.b;
        }

        mistGeo.setAttribute("position", new THREE.BufferAttribute(mistPositions, 3));
        mistGeo.setAttribute("color", new THREE.BufferAttribute(mistColors, 3));

        const mistMat = new THREE.PointsMaterial({
            size: isMobile ? 0.16 : 0.12,
            vertexColors: true,
            transparent: true,
            opacity: 0.75,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        mistParticles = new THREE.Points(mistGeo, mistMat);
        scene.add(mistParticles);

        window.addEventListener("resize", onWindowResize);
        setupInteractionListeners();
        requestAnimationFrame(renderLoop);
    }

    function onWindowResize() {
        const W = window.innerWidth;
        const H = window.innerHeight;
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
        renderer.setSize(W, H);
    }

    /* ─────────────────────────────────────────────────────────────
       3. INTERACTION LISTENERS (Wheel, Drag, Keys, Milestone Jumps)
       ───────────────────────────────────────────────────────────── */
    function setupInteractionListeners() {
        // Mouse Move Parallax
        window.addEventListener("mousemove", (e) => {
            mouseX = (e.clientX / window.innerWidth) - 0.5;
            mouseY = (e.clientY / window.innerHeight) - 0.5;
        });

        // Mouse Wheel Scroll Z
        window.addEventListener("wheel", (e) => {
            isIntroGlide = false;
            targetZ -= e.deltaY * 0.18;
            clampTargetZ();
        }, { passive: true });

        // Desktop Mouse Drag Z
        window.addEventListener("mousedown", (e) => {
            if (e.target.closest("input") || e.target.closest("button") || e.target.closest(".terminal-stage-box")) return;
            isDragging = true;
            dragStartY = e.clientY;
            dragStartZ = targetZ;
        });

        window.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
            isIntroGlide = false;
            const deltaY = e.clientY - dragStartY;
            targetZ = dragStartZ + deltaY * 0.45;
            clampTargetZ();
        });

        window.addEventListener("mouseup", () => { isDragging = false; });

        // Keyboard Navigation (W / S / Up / Down)
        window.addEventListener("keydown", (e) => {
            if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

            if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
                isIntroGlide = false;
                targetZ -= 22;
                clampTargetZ();
            } else if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
                isIntroGlide = false;
                targetZ += 22;
                clampTargetZ();
            } else if (e.key === "Home") {
                isIntroGlide = false;
                targetZ = START_Z;
            } else if (e.key === "End") {
                isIntroGlide = false;
                targetZ = MIN_Z;
            }
        });

        // Telemetry Rail Dot Jumps
        document.querySelectorAll(".sector-dot").forEach(btn => {
            btn.addEventListener("click", () => {
                isIntroGlide = false;
                const secIdx = parseInt(btn.getAttribute("data-sector"), 10);
                if (!isNaN(secIdx) && MILESTONES[secIdx]) {
                    targetZ = MILESTONES[secIdx].z;
                    clampTargetZ();
                }
            });
        });

        // Brand Home Link Jump
        const homeLink = $("brand-home-link");
        if (homeLink) {
            homeLink.addEventListener("click", (e) => {
                e.preventDefault();
                isIntroGlide = false;
                targetZ = START_Z;
            });
        }

        // Stage Card Click -> Advance to Next Milestone
        document.querySelectorAll(".stage-card").forEach(card => {
            card.addEventListener("click", (e) => {
                // Eğer terminal kutusu içindeyse tıklamayı yok say
                if (e.target.closest(".terminal-stage-box") || e.target.closest("button") || e.target.closest("input")) return;
                const mId = parseInt(card.getAttribute("data-milestone"), 10);
                if (mId < MILESTONES.length - 1) {
                    triggerDisintegration(e.clientX, e.clientY);
                    targetZ = MILESTONES[mId + 1].z;
                    clampTargetZ();
                }
            });
        });

        // Loop Button (Card 7 -> Return to Start)
        const loopBtn = $("loop-btn");
        if (loopBtn) {
            loopBtn.addEventListener("click", () => {
                triggerAscentLoop();
            });
        }

        // Mobile Nav Dock Buttons
        const mobPrevBtn = $("mob-prev-btn");
        const mobNextBtn = $("mob-next-btn");
        if (mobPrevBtn) {
            mobPrevBtn.addEventListener("click", () => {
                isIntroGlide = false;
                if (activeMilestoneIdx > 0) {
                    targetZ = MILESTONES[activeMilestoneIdx - 1].z;
                    clampTargetZ();
                }
            });
        }
        if (mobNextBtn) {
            mobNextBtn.addEventListener("click", () => {
                isIntroGlide = false;
                if (activeMilestoneIdx < MILESTONES.length - 1) {
                    targetZ = MILESTONES[activeMilestoneIdx + 1].z;
                    clampTargetZ();
                } else {
                    triggerAscentLoop();
                }
            });
        }
    }

    function clampTargetZ() {
        targetZ = Math.max(MIN_Z, Math.min(MAX_Z, targetZ));
    }

    /* ─────────────────────────────────────────────────────────────
       4. COSINE FALLOFF CARDS VISIBILITY & HUD UPDATE
       ───────────────────────────────────────────────────────────── */
    const stageCards = document.querySelectorAll(".stage-card");
    const depthReadout = $("depth-readout");
    const progressFill = $("telemetry-progress");
    const sectorBadge = $("sector-badge");
    const sectorDots = document.querySelectorAll(".sector-dot");
    const mobCounter = $("mob-counter");
    const mobDots = document.querySelectorAll(".m-dot");

    function updateStageCardsVisibility(z) {
        let closestIdx = 0;
        let minDiff = 9999;

        MILESTONES.forEach((m, idx) => {
            const cardEl = $(`card-${m.id}`);
            if (!cardEl) return;

            const diff = Math.abs(z - m.z);
            if (diff < minDiff) {
                minDiff = diff;
                closestIdx = idx;
            }

            // Cosine Falloff Formula per dona-nova-ui-architecture
            let factor = 0;
            if (diff <= m.plateau) {
                factor = 1.0;
            } else if (diff <= m.plateau + m.fade) {
                const excess = diff - m.plateau;
                factor = Math.cos((excess / m.fade) * (Math.PI / 2));
            } else {
                factor = 0;
            }

            const opacity = Math.pow(Math.max(0, factor), 1.2);
            const blurPx  = (1.0 - factor) * 14;
            const scale   = 0.95 + factor * 0.05;

            cardEl.style.opacity   = opacity.toFixed(3);
            cardEl.style.filter    = `blur(${blurPx.toFixed(1)}px)`;
            cardEl.style.transform = `scale(${scale.toFixed(3)}) translateY(${(1.0 - factor) * 12}px)`;
            cardEl.style.pointerEvents = factor > 0.4 ? "auto" : "none";

            if (factor > 0.6) {
                cardEl.classList.add("active");
            } else {
                cardEl.classList.remove("active");
            }
        });

        // Update Telemetry Hud
        activeMilestoneIdx = closestIdx;
        const curM = MILESTONES[closestIdx];

        if (depthReadout) {
            const absM = Math.abs(Math.round(z));
            depthReadout.textContent = `Z · ${z <= 0 ? "-" : "+"}${String(absM).padStart(3, '0')} M`;
        }

        const totalDist = START_Z - MIN_Z;
        const currentDist = START_Z - z;
        const pct = Math.max(0, Math.min(100, (currentDist / totalDist) * 100));

        if (progressFill) progressFill.style.height = `${pct}%`;
        if (sectorBadge) sectorBadge.textContent = (typeof currentLang !== "undefined" && currentLang === "en") ? curM.sectorEn : curM.sector;

        // Sector Dots
        sectorDots.forEach((dot, dIdx) => {
            dot.classList.toggle("active", dIdx === closestIdx);
        });

        // Mobile Dock
        if (mobCounter) mobCounter.textContent = `0${closestIdx + 1} / 08`;
        mobDots.forEach((dot, mIdx) => {
            dot.classList.toggle("active", mIdx === closestIdx);
        });
    }

    /* ─────────────────────────────────────────────────────────────
       5. CINEMATIC ASCENT & INTRO GLIDE
       ───────────────────────────────────────────────────────────── */
    function triggerAscentLoop() {
        const blurOverlay = $("cinematic-blur-overlay");
        if (blurOverlay) {
            blurOverlay.style.opacity = "1";
            blurOverlay.style.backdropFilter = "blur(38px)";
        }
        setTimeout(() => {
            targetZ = START_Z;
            currentZ = START_Z;
            isIntroGlide = true;
            introStartTime = Date.now();
            if (blurOverlay) {
                blurOverlay.style.opacity = "0";
                blurOverlay.style.backdropFilter = "blur(0px)";
            }
        }, 1200);
    }

    /* ─────────────────────────────────────────────────────────────
       6. DISINTEGRATION CANVAS (Starburst Particle Explosion)
       ───────────────────────────────────────────────────────────── */
    const disCanvas = $("disintegration-canvas");
    let disCtx = disCanvas ? disCanvas.getContext("2d") : null;
    let sparkParticles = [];

    if (disCanvas) {
        disCanvas.width = window.innerWidth;
        disCanvas.height = window.innerHeight;
        window.addEventListener("resize", () => {
            disCanvas.width = window.innerWidth;
            disCanvas.height = window.innerHeight;
        });
    }

    function triggerDisintegration(x, y) {
        if (!disCtx) return;
        const count = isMobile ? 22 : 65;
        const colors = ["#ffffff", "#00f0ff", "#38bdf8", "#b026ff", "#dbeafe"];

        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 2.5 + Math.random() * 7.5;
            sparkParticles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 1.2,
                size: 1.5 + Math.random() * 3.5,
                color: colors[Math.floor(Math.random() * colors.length)],
                alpha: 1.0,
                decay: 0.02 + Math.random() * 0.025
            });
        }
    }

    function renderDisintegration() {
        if (!disCtx) return;
        disCtx.clearRect(0, 0, disCanvas.width, disCanvas.height);

        for (let i = sparkParticles.length - 1; i >= 0; i--) {
            const p = sparkParticles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.vx *= 0.955;
            p.vy *= 0.955;
            p.alpha -= p.decay;

            if (p.alpha <= 0) {
                sparkParticles.splice(i, 1);
                continue;
            }

            disCtx.beginPath();
            disCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            disCtx.fillStyle = p.color;
            disCtx.globalAlpha = p.alpha;
            disCtx.shadowColor = p.color;
            disCtx.shadowBlur = p.size * 2;
            disCtx.fill();
        }
        disCtx.globalAlpha = 1.0;
        disCtx.shadowBlur = 0;
    }

    /* ─────────────────────────────────────────────────────────────
       7. MAIN RENDER LOOP (60FPS Camera Lerp + Dust Animation)
       ───────────────────────────────────────────────────────────── */
    let frameClock = 0;

    function renderLoop() {
        requestAnimationFrame(renderLoop);
        frameClock += 0.01;

        // Opening 5.5s Bird's-Eye Glide
        if (isIntroGlide) {
            const elapsed = Date.now() - introStartTime;
            const progress = Math.min(1.0, elapsed / INTRO_DURATION);
            const easeT = 1.0 - Math.pow(1.0 - progress, 3); // Cubic out

            const camY = 10.0 + (2.0 - 10.0) * easeT;
            const camZ = 62.0 + (20.0 - 62.0) * easeT;

            camera.position.set(mouseX * 0.6, camY, camZ);
            camera.lookAt(0, 0.8, camZ - 20);

            currentZ = camZ;
            targetZ  = camZ;

            if (progress >= 1.0) {
                isIntroGlide = false;
            }
        } else {
            // Camera Z Lerp
            currentZ += (targetZ - currentZ) * 0.085;

            // Camera Parallax per spec: x = mouseX * 0.85, y = 2.0 - (mouseY * 0.45)
            const camTargetX = mouseX * 0.85;
            const camTargetY = 2.0 - (mouseY * 0.45);

            camera.position.x += (camTargetX - camera.position.x) * 0.06;
            camera.position.y += (camTargetY - camera.position.y) * 0.06;
            camera.position.z = currentZ;

            camera.lookAt(0, 1.2, currentZ - 24);
        }

        // ── Atmospheric Mist Drift & Cloud Breathing
        if (mistGeo && mistParticles) {
            const pos = mistGeo.attributes.position.array;
            for (let i = 0; i < mistCount; i++) {
                const zIdx = i * 3 + 2;
                pos[zIdx] += 0.14; // Drift forward toward camera
                if (pos[zIdx] > currentZ + 20) {
                    pos[zIdx] = currentZ - 650; // Wrap into the distance
                }
            }
            mistGeo.attributes.position.needsUpdate = true;
        }

        // Cloud billow subtle organic waving
        for (let i = 0; i < cloudsGroup.length; i++) {
            const cMesh = cloudsGroup[i];
            if (cMesh.userData) {
                cMesh.position.y = cMesh.userData.initY + Math.sin(frameClock * cMesh.userData.speedY + cMesh.userData.offset) * 0.4;
            }
        }

        if (sunHaloMesh) {
            sunHaloMesh.rotation.z += 0.0005;
        }

        updateStageCardsVisibility(currentZ);
        renderDisintegration();
        renderer.render(scene, camera);
    }

    initThreeEngine();

    /* ─────────────────────────────────────────────────────────────
       8. CANLI SESSEL ETKİLEŞİM — CENTRAL VOICE ORB & FLOATING SPEECH
       Sıfır LLM · Sıfır Metin Kutusu · Saf Biyo-Akustik Ses Etkileşimi
       ───────────────────────────────────────────────────────────── */
    const aeonVoiceOrb       = $("aeon-voice-orb");
    const voiceStatusText    = $("voice-status-text");
    const floatingUserSpeech = $("floating-user-speech");
    const userSpeechText     = $("user-speech-text");
    const floatingAeonSpeech = $("floating-aeon-speech");
    const aeonSpeechText     = $("aeon-speech-text");
    const bioAudio           = $("bio-speech-audio");
    const whisperBtns        = document.querySelectorAll(".whisper-btn");

    let isSpeaking = false;
    let isListening = false;
    let voiceOutputEnabled = true;

    // ─── LANGUAGE ENGINE (TR / EN DYNAMIC SWITCHING) ───────────────
    let currentLang = "tr";
    const langToggleBtn = $("lang-toggle-btn");
    const langTrOpt = $("lang-tr");
    const langEnOpt = $("lang-en");

    const I18N = {
        tr: {
            soundOn: "BİYO-SES: AÇIK",
            soundOff: "BİYO-SES: KAPALI",
            depthLabel: "DERİNLİK",
            footerHint: "SCROLL / DRAG İLE DERİNLİKTE SEYAHAT EDİN",
            mobPrev: "GERİ",
            mobNext: "İLERİ",
            voiceStatusReady: "SESLENMEK İÇİN BASIN",
            voiceStatusListening: "SİZİ DİNLİYOR... (ŞİMDİ KONUŞUN)",
            voiceStatusThinking: "SNN KORTEKS CEVAP OLUŞTURUYOR...",
            voiceStatusSpeaking: "ÆON SES TELLERİ TİTRİYOR...",
            voiceHintSub: "İç kulak kokleası 128 kanal ile dinliyor",
            userTag: "ZİYARETÇİ //",
            aeonDefault: "Ben ÆON. Nöromorfik biyolojik zihnim ve vokal motorum aktif. Seslenin veya aşağıdaki derinlik sorgularından birini seçin.",
            loopBtn: "↻ [BAŞLANGICA GERİ DÖN]",
            whispers: [
                { q: "Zihnin nasıl çalışıyor?", label: '"Zihnin nasıl çalışıyor?"' },
                { q: "Nöromorfik mimarin nedir?", label: '"Nöromorfik mimarin nedir?"' },
                { q: "Serbest enerji prensibin nedir?", label: '"Serbest enerjin nedir?"' },
                { q: "Biyolojik ses motorun nasıl çalışıyor?", label: '"Ses motorun nasıl çalışıyor?"' }
            ],
            cards: [
                {
                    arch: "[DC // PROTOKOL 00 / NÖROMORFİK DİJİTAL AKIL]",
                    title: "DONA ÆON",
                    sentence: `Yapay zekâyı bulut dili değil; <span class="cyan-word">128-kanal Gammatone koklea</span>, <span class="cyan-word">2048 LIF neokorteks nöronu</span> ve <span class="violet-word">Two-Mass vokal motoruyla</span> yaşayan, nefes alan, deterministik bir <span class="cyan-word">biyomimetik organizma</span> olarak inşa ediyoruz.`,
                    hint: "* [İLERLEMEK İÇİN TIKLAYIN VEYA KAYDIRIN]"
                },
                {
                    arch: "[DC // PROTOKOL 01 / AKUSTİK KOKLEA]",
                    title: "128-KANAL GAMMATONE KOKLEA",
                    sentence: `İnsan iç kulağındaki <span class="cyan-word">basilar membran</span> biyofiziğini simüle eden 128 Gammatone filtre bankası; 20Hz - 20.000Hz arasındaki tüm frekansları <span class="violet-word">zamansal aksiyon potansiyeli spike'larına</span> dönüştürür.`,
                    hint: "* [SONRAKİ PROTOKOL İÇİN TIKLAYIN]"
                },
                {
                    arch: "[DC // PROTOKOL 02 / HİYERARŞİK KORTEKS]",
                    title: "2048 LIF SPİKE NEOKORTEKS",
                    sentence: `Biyolojik <span class="cyan-word">Eksitatör / İnhibitör (E/I 4:1)</span> dengesinde çalışan 2048 Leaky Integrate-and-Fire sinir hücresi; Colab T4 5000-Epoch eğitimiyle <span class="violet-word">2.15M+ aksiyon potansiyeli</span> ateşler.`,
                    hint: "* [SONRAKİ PROTOKOL İÇİN TIKLAYIN]"
                },
                {
                    arch: "[DC // PROTOKOL 03 / SERBEST ENERJİ]",
                    title: "KARL FRISTON SERBEST ENERJİ PRENSİBİ",
                    sentence: `Zihin, dünyayı tahmin eder. <span class="cyan-word">Variational Free Energy (FEP)</span> minimizasyonu sayesinde her yeni ses girdisinde tahmin hatasını sıfıra yaklaştırarak <span class="violet-word">deterministik öğrenme dengesi</span> kurar.`,
                    hint: "* [SONRAKİ PROTOKOL İÇİN TIKLAYIN]"
                },
                {
                    arch: "[DC // PROTOKOL 04 / ÇEKİCİ HAVUZLARI]",
                    title: "HOPFIELD ATTRACTOR REZONANSI",
                    sentence: `Gürültülü akustik ortamda anlam kaybolmaz. Kortex durum vektörü <span class="cyan-word">Hopfield çekici enerji çukurlarına</span> rezonansa girerek konuşmacı biyometriğini ve benlik kimliğini kesin olarak hatırlar.`,
                    hint: "* [SONRAKİ PROTOKOL İÇİN TIKLAYIN]"
                },
                {
                    arch: "[DC // PROTOKOL 05 / VOKAL MOTOR]",
                    title: "TWO-MASS & KELLY-LOCHBAUM VOKAL SENTEZ",
                    sentence: `Harici TTS ve bulut ses motorları yok. <span class="cyan-word">Two-Mass glottal hava basıncı</span> ve <span class="violet-word">16-kesitli Kelly-Lochbaum akustik rezonans tüpüyle</span> insan vokal yolunu 48kHz saf biyofiziksel dalga olarak simüle ediyoruz.`,
                    hint: "* [SONRAKİ PROTOKOL İÇİN TIKLAYIN]"
                },
                {
                    arch: "[DC // PROTOKOL 06 / EPİSODİK BELLEK]",
                    title: "NREM/REM UYKU & HAFIZA SARAYI",
                    sentence: `Gündüz yaşanan duyusal anılar <span class="cyan-word">150+ episodik hafıza kapsülünde</span> mühürlenir. Gece NREM uykusunda gereksiz sinapslar budanır (pruning), REM evresinde ise kalıcı <span class="violet-word">çekirdek ağırlıklar mühürlenir</span>.`,
                    hint: "* [CANLI ETKİLEŞİM TERMİNALİNE GEÇ]"
                },
                {
                    arch: "[DC // YÜRÜTME 07 / BİYO-AKUSTİK SESSEL REZONANS]",
                    title: "ÆON CANLI SESSEL ETKİLEŞİM"
                }
            ]
        },
        en: {
            soundOn: "BIO-VOICE: ON",
            soundOff: "BIO-VOICE: OFF",
            depthLabel: "DEPTH",
            footerHint: "SCROLL / DRAG TO TRAVEL THROUGH DEPTH",
            mobPrev: "BACK",
            mobNext: "NEXT",
            voiceStatusReady: "PRESS TO SPEAK",
            voiceStatusListening: "LISTENING... (SPEAK NOW)",
            voiceStatusThinking: "SNN CORTEX GENERATING RESPONSE...",
            voiceStatusSpeaking: "ÆON VOCAL CORDS RESONATING...",
            voiceHintSub: "Inner ear cochlea listening on 128 channels",
            userTag: "VISITOR //",
            aeonDefault: "I am ÆON. My neuromorphic digital mind and neural vocal motor are active. Speak or select a depth query below.",
            loopBtn: "↻ [RETURN TO BEGINNING]",
            whispers: [
                { q: "How does your mind think?", label: '"How does your mind think?"' },
                { q: "What is your neuromorphic architecture?", label: '"Neuromorphic architecture?"' },
                { q: "What is your Free Energy Principle?", label: '"What is Free Energy?"' },
                { q: "How does your vocal motor work?", label: '"How does your voice work?"' }
            ],
            cards: [
                {
                    arch: "[DC // PROTOCOL 00 / NEUROMORPHIC DIGITAL MIND]",
                    title: "DONA ÆON",
                    sentence: `We do not engineer AI as cloud language; we build it as a living, breathing, deterministic <span class="cyan-word">biomimetic organism</span> with a <span class="cyan-word">128-channel Gammatone cochlea</span>, <span class="cyan-word">2048 LIF neocortex neurons</span>, and a <span class="violet-word">Two-Mass vocal motor</span>.`,
                    hint: "* [CLICK OR SCROLL TO ADVANCE]"
                },
                {
                    arch: "[DC // PROTOCOL 01 / ACOUSTIC COCHLEA]",
                    title: "128-CHANNEL GAMMATONE COCHLEA",
                    sentence: `Simulating human inner ear <span class="cyan-word">basilar membrane</span> biophysics, a 128 Gammatone filterbank converts all audible frequencies from 20Hz to 20,000Hz into <span class="violet-word">temporal action potential spikes</span>.`,
                    hint: "* [CLICK FOR NEXT PROTOCOL]"
                },
                {
                    arch: "[DC // PROTOCOL 02 / HIERARCHICAL CORTEX]",
                    title: "2048 LIF SPIKING NEOCORTEX",
                    sentence: `Operating under biological <span class="cyan-word">Excitatory / Inhibitory (E/I 4:1)</span> homeostasis, 2048 Leaky Integrate-and-Fire neurons fire over <span class="violet-word">2.15M+ action potentials</span> trained across 5000 epochs.`,
                    hint: "* [CLICK FOR NEXT PROTOCOL]"
                },
                {
                    arch: "[DC // PROTOCOL 03 / FREE ENERGY]",
                    title: "KARL FRISTON FREE ENERGY PRINCIPLE",
                    sentence: `The mind continuously predicts sensory reality. Through <span class="cyan-word">Variational Free Energy (FEP)</span> minimization, prediction errors are driven toward zero, establishing <span class="violet-word">deterministic cognitive balance</span>.`,
                    hint: "* [CLICK FOR NEXT PROTOCOL]"
                },
                {
                    arch: "[DC // PROTOCOL 04 / ATTRACTOR BASINS]",
                    title: "HOPFIELD ATTRACTOR RESONANCE",
                    sentence: `Meaning never decays in acoustic noise. The cortical state settles into <span class="cyan-word">Hopfield attractor energy basins</span>, reliably recalling speaker biometrics and self-identity.`,
                    hint: "* [CLICK FOR NEXT PROTOCOL]"
                },
                {
                    arch: "[DC // PROTOCOL 05 / VOCAL MOTOR]",
                    title: "TWO-MASS & KELLY-LOCHBAUM VOCAL SYNTHESIS",
                    sentence: `Zero cloud TTS or external voice APIs. Through <span class="cyan-word">Two-Mass glottal air pressure</span> and <span class="violet-word">16-section Kelly-Lochbaum acoustic tubes</span>, we model human vocal physics as pure acoustic waves.`,
                    hint: "* [CLICK FOR NEXT PROTOCOL]"
                },
                {
                    arch: "[DC // PROTOCOL 06 / EPISODIC MEMORY]",
                    title: "NREM/REM SLEEP & MEMORY PALACE",
                    sentence: `Sensory memories are preserved in <span class="cyan-word">150+ episodic memory capsules</span>. During NREM sleep, redundant synapses are pruned, while REM cycles consolidate permanent <span class="violet-word">synaptic weights</span>.`,
                    hint: "* [ENTER LIVE INTERACTION TERMINAL]"
                },
                {
                    arch: "[DC // EXECUTION 07 / BIO-ACOUSTIC VOCAL RESONANCE]",
                    title: "ÆON LIVE VOCAL INTERACTION"
                }
            ]
        }
    };

    function applyLanguage(lang) {
        currentLang = lang;
        const dict = I18N[lang];
        if (!dict) return;

        if (langTrOpt) langTrOpt.classList.toggle("active", lang === "tr");
        if (langEnOpt) langEnOpt.classList.toggle("active", lang === "en");

        if (soundBtnText) soundBtnText.textContent = voiceOutputEnabled ? dict.soundOn : dict.soundOff;
        const depthLabel = document.querySelector(".depth-label");
        if (depthLabel) depthLabel.textContent = dict.depthLabel;
        const footerHint = $("footer-hint");
        if (footerHint) footerHint.textContent = dict.footerHint;

        const mobPrevSpan = document.querySelector("#mob-prev-btn span");
        const mobNextSpan = document.querySelector("#mob-next-btn span");
        if (mobPrevSpan) mobPrevSpan.textContent = dict.mobPrev;
        if (mobNextSpan) mobNextSpan.textContent = dict.mobNext;

        // Update Stage Cards
        for (let i = 0; i <= 7; i++) {
            const cardEl = $("card-" + i);
            if (!cardEl) continue;
            const cData = dict.cards[i];
            if (!cData) continue;

            const archEl = cardEl.querySelector(".stage-arch-header");
            if (archEl && cData.arch) archEl.textContent = cData.arch;

            const titleEl = cardEl.querySelector(".stage-card-title") || cardEl.querySelector(".title-coming-soon");
            if (titleEl && cData.title) titleEl.textContent = cData.title;

            const sentEl = cardEl.querySelector(".stage-sentence");
            if (sentEl && cData.sentence) sentEl.innerHTML = cData.sentence;

            const hintEl = cardEl.querySelector(".card-advance-hint:not(.loop-action-btn)");
            if (hintEl && cData.hint) hintEl.textContent = cData.hint;
        }

        // Card 7 Elements
        if (voiceStatusText && !isListening && !isSpeaking) voiceStatusText.textContent = dict.voiceStatusReady;
        const voiceHintSub = document.querySelector(".voice-hint-sub");
        if (voiceHintSub) voiceHintSub.textContent = dict.voiceHintSub;

        const userTag = $("user-speaker-tag");
        if (userTag) userTag.textContent = dict.userTag;

        const aeonSpeechEl = $("aeon-speech-text");
        if (aeonSpeechEl && (aeonSpeechEl.textContent.includes("Ben ÆON") || aeonSpeechEl.textContent.includes("I am ÆON") || aeonSpeechEl.textContent.includes("hazırım"))) {
            aeonSpeechEl.textContent = dict.aeonDefault;
        }

        const loopBtn = $("loop-btn");
        if (loopBtn) loopBtn.textContent = dict.loopBtn;

        // Whisper Buttons
        const wBtns = document.querySelectorAll(".whisper-btn");
        wBtns.forEach((btn, idx) => {
            if (dict.whispers[idx]) {
                btn.setAttribute("data-phrase", dict.whispers[idx].q);
                btn.textContent = dict.whispers[idx].label;
            }
        });

        // Speech recognition lang
        if (recognition) {
            recognition.lang = (lang === "en") ? "en-US" : "tr-TR";
        }

        updateStageCardsVisibility(currentZ);
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", () => {
            const nextLang = (currentLang === "tr") ? "en" : "tr";
            applyLanguage(nextLang);
        });
    }

    // Audio Output Toggle Pill in Header
    const audioToggleBtn = $("audio-toggle-btn");
    const soundBtnText   = $("sound-btn-text");
    if (audioToggleBtn) {
        audioToggleBtn.addEventListener("click", () => {
            voiceOutputEnabled = !voiceOutputEnabled;
            audioToggleBtn.classList.toggle("active", voiceOutputEnabled);
            const dict = I18N[currentLang];
            if (soundBtnText && dict) soundBtnText.textContent = voiceOutputEnabled ? dict.soundOn : dict.soundOff;
            if (!voiceOutputEnabled && bioAudio) bioAudio.pause();
        });
    }

    // Play ÆON Natural Human Voice
    function playAeonVoice(replyText) {
        if (!voiceOutputEnabled || !replyText) return;
        const bioUrl = `/api/bio_vocal_audio?t=${Date.now()}`;
        if (!bioAudio) return;

        isSpeaking = true;
        if (aeonVoiceOrb) {
            aeonVoiceOrb.classList.add("speaking");
            aeonVoiceOrb.classList.remove("listening");
        }
        const dict = I18N[currentLang];
        if (voiceStatusText && dict) voiceStatusText.textContent = dict.voiceStatusSpeaking;

        bioAudio.src = bioUrl;
        bioAudio.play().catch((err) => {
            console.warn("Otomatik ses oynatma tarayıcı etkileşimi bekliyor:", err);
            isSpeaking = false;
            if (aeonVoiceOrb) aeonVoiceOrb.classList.remove("speaking");
            if (voiceStatusText && dict) voiceStatusText.textContent = dict.voiceStatusReady;
        });

        bioAudio.onended = () => {
            isSpeaking = false;
            if (aeonVoiceOrb) aeonVoiceOrb.classList.remove("speaking");
            const d = I18N[currentLang];
            if (voiceStatusText && d) voiceStatusText.textContent = d.voiceStatusReady;
        };
    }

    // Send Spoken Query to SNN Neocortex
    async function sendVoiceQuery(speechText) {
        const clean = (speechText || "").trim();
        if (!clean) return;

        // Show User Speech Floating on Screen (Transparent)
        if (floatingUserSpeech && userSpeechText) {
            userSpeechText.textContent = clean;
            floatingUserSpeech.style.display = "flex";
        }

        const dict = I18N[currentLang];
        if (voiceStatusText && dict) voiceStatusText.textContent = dict.voiceStatusThinking;

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: clean, lang: currentLang })
            });

            if (!res.ok) {
                if (floatingAeonSpeech && aeonSpeechText) {
                    aeonSpeechText.textContent = (currentLang === "en") 
                        ? "Cortical action potentials failed to generate response." 
                        : "Kortikal aksiyon potansiyelleri yanıt üretemedi.";
                    floatingAeonSpeech.style.display = "flex";
                }
                if (voiceStatusText && dict) voiceStatusText.textContent = dict.voiceStatusReady;
                return;
            }

            const data = await res.json();
            const reply = data.reply || "...";

            // Show Æon Response Floating on Screen (Transparent)
            if (floatingAeonSpeech && aeonSpeechText) {
                aeonSpeechText.textContent = reply;
                floatingAeonSpeech.style.display = "flex";
            }

            // Update Telemetry Numbers
            const tAtp = $("term-atp");
            const tFe  = $("term-fe");
            if (tAtp) tAtp.textContent = `${Math.round(data.energy || 100)}%`;
            if (tFe)  tFe.textContent  = (data.fe_loss || 0.0035).toFixed(4);

            // Synthesize and Speak with Natural Turkish Voice
            playAeonVoice(reply);

        } catch (err) {
            console.error(err);
            if (floatingAeonSpeech && aeonSpeechText) {
                aeonSpeechText.textContent = "Sunucu iletişiminde kopukluk oluştu.";
            }
            if (voiceStatusText) voiceStatusText.textContent = "SESLENMEK İÇİN BASIN";
        }
    }

    // Speech Recognition (Speech-to-Text via Web Speech API)
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = null;

    if (SpeechRec) {
        recognition = new SpeechRec();
        recognition.lang = "tr-TR";
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = () => {
            isListening = true;
            if (aeonVoiceOrb) aeonVoiceOrb.classList.add("listening");
            if (voiceStatusText) voiceStatusText.textContent = "SİZİ DİNLİYOR... (ŞİMDİ KONUŞUN)";
        };

        recognition.onresult = (e) => {
            const transcript = e.results[0][0].transcript;
            if (transcript) {
                sendVoiceQuery(transcript);
            }
        };

        recognition.onerror = () => {
            isListening = false;
            if (aeonVoiceOrb) aeonVoiceOrb.classList.remove("listening");
            if (voiceStatusText) voiceStatusText.textContent = "SESLENMEK İÇİN BASIN";
        };

        recognition.onend = () => {
            isListening = false;
            if (aeonVoiceOrb && !isSpeaking) aeonVoiceOrb.classList.remove("listening");
            if (voiceStatusText && !isSpeaking) voiceStatusText.textContent = "SESLENMEK İÇİN BASIN";
        };
    }

    // Voice Orb Click Handler
    if (aeonVoiceOrb) {
        aeonVoiceOrb.addEventListener("click", (e) => {
            e.stopPropagation();

            if (isSpeaking) {
                if (bioAudio) bioAudio.pause();
                isSpeaking = false;
                aeonVoiceOrb.classList.remove("speaking");
                if (voiceStatusText) voiceStatusText.textContent = "SESLENMEK İÇİN BASIN";
                return;
            }

            if (recognition) {
                if (isListening) {
                    try { recognition.stop(); } catch {}
                    isListening = false;
                    aeonVoiceOrb.classList.remove("listening");
                    if (voiceStatusText) voiceStatusText.textContent = "SESLENMEK İÇİN BASIN";
                } else {
                    try {
                        recognition.start();
                    } catch {
                        isListening = false;
                    }
                }
            } else {
                // Tarayıcı SpeechRecognition desteklemiyorsa hızlı prompt simülasyonu
                const promptVal = prompt("ÆON Kokleasına seslenin (Konuşma tanıma tarayıcınızda aktif değil):", "Nasılsın");
                if (promptVal) sendVoiceQuery(promptVal);
            }
        });
    }

    // Whisper Trigger Buttons (Quick Spoken Questions)
    whisperBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const phrase = btn.getAttribute("data-phrase");
            if (phrase) {
                sendVoiceQuery(phrase);
            }
        });
    });

    // Spacebar to trigger Voice Orb
    window.addEventListener("keydown", (e) => {
        if (e.code === "Space" && activeMilestoneIdx === 7) {
            e.preventDefault();
            if (aeonVoiceOrb) aeonVoiceOrb.click();
        }
    });

    // Background Telemetry Polling (ATP & FEP)
    async function pollTelemetry() {
        try {
            const res = await fetch("/api/status");
            if (res.ok) {
                const d = await res.json();
                const v5 = d.v5 || {};
                const ep = Math.round(v5.atp ?? d.energy ?? 100);
                const fe = parseFloat(v5.mean_free_energy ?? d.fe_loss ?? 0.0035);
                const tAtp = $("term-atp");
                const tFe  = $("term-fe");
                if (tAtp) tAtp.textContent = `${ep}%`;
                if (tFe)  tFe.textContent  = fe.toFixed(4);
            }
        } catch {}
    }
    setInterval(pollTelemetry, 4000);

});
