# 🧠 DONA ÆON — Neuromorphic Digital Mind (NDM)

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=220&section=header&text=DONA%20%C6ON%20%C2%B7%20NDM&fontSize=55&fontColor=fff&animation=twinkling&fontAlignY=38&desc=Autonomous%20Neuromorphic%20Digital%20Mind%20%C2%B7%20Spiking%20Neural%20Organism&descAlignY=58&descSize=16" width="100%"/>

<br/>

[![Architecture](https://img.shields.io/badge/Architecture-Neuromorphic_Digital_Mind_(NDM)-6366F1?style=for-the-badge&logo=cpu)](https://github.com/dobby-aidev/dona-aeon-showcase)
[![Status](https://img.shields.io/badge/Status-Active_Development-10B981?style=for-the-badge&logo=activity)](https://github.com/dobby-aidev/dona-aeon-showcase)
[![Backend](https://img.shields.io/badge/Backend-PyTorch_SNN_%26_Bio_Cochlea-EE4C2C?style=for-the-badge&logo=pytorch)](https://pytorch.org/)
[![Memory](https://img.shields.io/badge/Memory-Episodic_Palace_%26_REM_Consolidation-F59E0B?style=for-the-badge)](https://github.com/dobby-aidev/dona-aeon-showcase)
[![Vocal](https://img.shields.io/badge/Vocal_Motor-Two--Mass_Glottal_%26_Kelly--Lochbaum-3776AB?style=for-the-badge)](https://github.com/dobby-aidev/dona-aeon-showcase)

<br/>

> **"True Artificial General Intelligence is not a stochastic LLM predicting text tokens; it is a Neuromorphic Digital Mind (NDM) that perceives raw biological auditory frequency spectra, minimizes variational free energy, consolidates memories into a physical Synaptic Memory Palace, and speaks through physical acoustic motor articulation."**

<br/>

<img src="./assets/ndm_architecture_ui.jpg" alt="DONA ÆON Neuromorphic Digital Mind Architecture" width="100%" style="border-radius: 14px; box-shadow: 0 12px 40px rgba(0,0,0,0.7); margin-top: 15px;">

</div>

---

> [!IMPORTANT]
> **Zero LLM & Zero External API Dependency**: DONA ÆON does not rely on OpenAI, Gemini, or any cloud LLMs. It operates 100% locally using event-driven Spiking Neural Networks (SNN), physical synaptic memory consolidation, and physical vocal tract acoustic modeling.

> [!NOTE]
> **Aktif Geliştirme Aşaması**: DONA ÆON gerçek bir nöromorfik biyolojik zihin geliştirme sürecidir. Henüz erken üretim aşamasında — en, as gibi ilk sözcük kombinasyonlarını kendi ürettiği fonem sekanslarıyla oluşturabilmektedir. Bu bir AI wrapper degil, sıfırdan inşa edilen özgün bir biyolojik zihin mimarisidir.

---

## 🌟 What is DONA ÆON?

**DONA ÆON** is an **Autonomous Neuromorphic Digital Mind (NDM)** built entirely from biological first principles. Unlike conventional Large Language Models (LLMs) or hardcoded chatbots, ÆON operates as a virtual biological neocortex:

- **⚡ Event-Driven SNN Neocortex:** 2048 Leaky Integrate-and-Fire (LIF) conductance-based spiking neurons operating on 2.1M+ action-potential spikes per epoch.
- **🏰 Biyolojik Hafıza Sarayı (Episodic Memory Palace):** Three-layer memory — Temporal Corridors (Year→Month→Day→Hour→ms), Topological Attractor Rooms (topic clusters), and Episodic Memory Capsules (2-4 KB each). REM Sleep Synaptic Consolidation seals memories into synapses_core.pt.
- **🦻 128-Channel ERB Gammatone Bio-Cochlea:** 128-channel logarithmic ERB-scale Gammatone filter bank (20Hz–20kHz), converting audio into biological frequency spike trains (512-dim).
- **📉 Unsupervised Acoustic Spectrogram Reconstruction:** 512-dim predictive coding auto-encoder learning acoustic representations directly from raw human speech without discrete labels.
- **🔤 Temporal Phoneme Sequence Decoder:** Decodes temporal spike history (T frames) into 30 Turkish phoneme classes (29 letters + SIL).
- **🗣️ Biomimetic Vocal Motor Synthesis:** 48kHz physical PCM speech via Two-Mass Glottal Vocal Cord dynamics and 16-section Kelly-Lochbaum Acoustic Tube (zero TTS libraries).
- **🧠 Karl Friston Free Energy Principle (FEP):** Continuously minimizes variational free energy between internal generative models and auditory observations.
- **🧪 5-Modulator Neurochemistry:** DA (Dopamine), NE (Noradrenaline), 5-HT (Serotonin), ACh (Acetylcholine), OXT (Oxytocin) scale plasticity and emotional arousal.
- **🩸 Biological Metabolism:** ATP consumption, Lactate buildup, metabolic homeostasis, fatigue cycles.
- **🧬 Tripartite Synapse & Astrocyte Buffer:** Glial cells regulate synaptic ion clearance (glutamate, K+) and supply lactate fuel to hyperactive cortical columns.
- **🎭 Thalamic Relay & TRN Gating:** Thalamic Reticular Nucleus gates sensory salience — tonic mode for relaxed processing, burst mode for auditory surprises.

---

## 🌌 Live Web Interface & Bio-Acoustic HUD

DONA ÆON features a 100% Voice-Driven Neuromorphic Containment HUD serving real-time SNN telemetry, Free Energy graphs, Dopamine levels, and an interactive mouse-parallax Bio-Orb reactor.

<div align="center">
  <img src="./assets/dona_aeon_web_hud.png" alt="DONA ÆON Live Web UI & Telemetry HUD" width="100%" style="border-radius: 14px; box-shadow: 0 12px 40px rgba(0,0,0,0.7); margin-top: 15px;">
</div>

### 🚀 Web UI Başlatma

`ash
# Yontem 1 - Bat dosyasi (Windows)
run_web_ui.bat

# Yontem 2 - Manuel Python
python scripts/web_chat.py

# Tarayicida ac
http://127.0.0.1:7860
`

> [!WARNING]
> Web UI, ile:// protokolu uzerinden **calismaz**. FastAPI sunucusu baslatilarak http://127.0.0.1:7860 adresinden acilmalidir. Aksi halde /api/chat, /api/memory/context ve /api/status ucnoktalari erisilelemez olur.

### 🖥️ Web UI Ozellikleri

| Ozellik | Detay |
|:---|:---|
| **Ses Transceiver** | SPACE veya tiklamayla ses iletimi — Web Speech API (Chrome/Edge) |
| **Tam Ekran Sohbet** | Kutu/balon yok — mesajlar arka plan uzerinde seffaf HUD akisi |
| **Mouse Parallax Orb** | Merkezi biyoreaktor orb fareyı yumusakcayarı takip eder; tiklaninca pulse verir |
| **Canli Telemetri** | ATP, Laktat, FEP, DA/NE/5-HT/ACh/OXT gercek zamanli HUD paneli |
| **Telemetri Drawer** | Sag ust chart butonu — genisletilmis norokimya ve metabolizma paneli |
| **Mimari Modal** | i butonu — 6 bolum NDM mimarisi aciklayici |
| **ODUL / UYARI** | Dopamin odulu ve Noradrenalin uyarisi — gercek zamanli noromodulatör enjeksiyonu |
| **NREM/REM Uykusu** | Telemetri drawer'dan sinaptik konsolidasyon baslatma |

### 🏛️ Konusma Bellegi — Iki Katmanli Sistem

ÆON, LLM'ler gibi oturum bitince sifirlanmaz:

**Katman 1 — Gercek Episodik Hafiza Sarayi (Backend)**
- Sayfa acilinca: GET /api/memory/context → EpisodicMemoryPalace.flash_recall() → son kapsüller HUD'da görüntülenir
- Her konusmada: org.live_step() → seal_capsule() → synapses_core.pt güncellenir
- REM döngüsü: /api/sleep_cycle → consolidation_manager.py → gurultu budama

**Katman 2 — localStorage Fallback (Offline / file:// modu)**
- Sunucu erisilelemezse localStorage["dona_aeon_chat_history"] UI metin gecmisi olarak yuklenir
- Max 200 mesaj, oturum ayraci ile gosterilir, cop kutusuyla tamamen temizlenir

| Ozellik | Hafiza Sarayi (Backend) | localStorage (Fallback) |
|:---|:---|:---|
| Kalicilik | synapses_core.pt fiziksel agirlik | Tarayici yerel deposu |
| Icerik | Sinaptik agirlik + duygu + konu + FEP | Sade mesaj metni |
| Kapasite | Sinirsiz (yillarca buyur) | Max 200 mesaj |
| Cevrimici | Sunucu gerekli | Sunucu gerekmez |

---

## 🔬 Evolution Comparison: Legacy Agent vs. NDM Architecture

| Architectural Dimension | Legacy Spiking Agent (v4) | NDM Architecture (v5 Current) |
| :--- | :--- | :--- |
| **Cognitive Core** | 512 LIF Neurons | **2048 Massively Parallel LIF Spiking Neocortex** |
| **Memory Palace** | Short-Term Sensory Buffer | **3-Layer Episodic Memory Palace + REM Sleep Consolidation** |
| **Neurochemistry** | Basic Dopamine/Arousal | **5-Modulator Limbic System (DA, NE, 5-HT, ACh, OXT)** |
| **Auditory Sensor** | Mel-Spectrogram Parsing | **128-Channel ERB Gammatone Filter Bank Cochlea** |
| **Audio Learning** | Forced 30-Word Discrete Classification | **Unsupervised Acoustic Spectrogram Reconstruction** |
| **Language Output** | Hardcoded 30-Word Lookup Table | **Temporal Phoneme Sequence Auto-Encoder (29 Letters + SIL)** |
| **Voice Articulation** | External Microsoft Edge-TTS Library | **Biomimetic Two-Mass Glottal & Kelly-Lochbaum Acoustic Filter** |
| **Learning Paradigm** | Supervised CrossEntropy Loss | **Dual-Loss: Unsupervised Reconstruction + Phoneme Sequence STDP** |
| **Memory API** | None | **/api/memory/context + /api/memory/flash_recall + /api/memory/stats** |
| **Web UI** | Static HTML | **Full-screen HUD, Mouse Parallax Orb, Real-time Telemetry Drawer** |

---

## 🧬 Neuromorphic Pipeline

`mermaid
graph TD
    A["Raw Audio Stream / Biyo-Akustik Ses"] --> B["128-Ch Gammatone Filter Bank Koklea"]
    B --> C["512-dim Isitsel Spike Frekans Akisi"]
    C --> D["Thalamic Relay & TRN Gate (Salient Filter)"]
    D --> E["Spiking Neokorteks (2048 LIF Noron & AdEx Konduktons)"]
    E --> F["512-dim Latent Motor Spike Gecmisi (T=10)"]
    F --> G["Unsupervised Spektrogram Rekonstruksiyon Dekoderi"]
    G --> H["Yeniden Uretilen Akustik Spiklar (MSE + Cosine Loss)"]
    F --> I["Zamansal Fonem Sekans Dekoderi (30 Fonem Logitleri)"]
    I --> J["Cozumlenen Turkce Fonem Dizisi"]
    F --> K["Episodik Hafiza Sarayi (Hipokampal SNN + REM)"]
    K --> L["synapses_core.pt Kalici Agirlik Matrisi"]
    K --> M["EpisodicCapsule — t_m, v_speaker, s_emotion, z_core"]
    J --> N["Vokal Motor Korteks (Iki Kutleli Vokal Kord + Kelly-Lochbaum)"]
    N --> O["48kHz Fiziksel PCM Ses Ciktisi"]
    P["Noromodulatör Havuzu (DA, NE, 5HT, ACh, OXT)"] --> E
    P --> K
    Q["Metabolizma (ATP, Laktat, Yorgunluk)"] --> P
`

---

## 🔬 Active Inference & Mathematical Foundations

### Karl Friston Free Energy Principle (FEP)

F = \mathcal{D}_{\text{KL}}\left[q(s) \mid\mid p(s)\right] - \mathbb{E}_{q}\left[\log p(o \mid s)\right]

- F: Variational Free Energy (Surprise bound)
- q(s): Internal belief about environmental states
- p(o|s): Generative model of observations given states

### Conductance-Based AdEx LIF Neuron

C_m \frac{dV(t)}{dt} = -g_L (V(t) - E_L) + g_L \Delta_T \exp\left(\frac{V(t)-V_T}{\Delta_T}\right) - g_E(t)(V(t)-E_E) - g_I(t)(V(t)-E_I) - w(t) + I_{ext}

\frac{dw(t)}{dt} = \frac{a(V(t) - E_L) - w(t)}{\tau_w}

### Synaptic Conductance & E/I Balance (Self-Organized Criticality)

\frac{dg_E(t)}{dt} = -\frac{g_E(t)}{\tau_E} + \sum_k W_{E,k} \cdot \delta(t - t_k)

E/I ratio kept at ~1.0 — preventing both epileptic discharge and coma states.

### Neurochemical Diffusion Dynamics

\frac{d[C_k]}{dt} = \text{Release}_k(t) - \lambda_k \cdot [C_k](t) + \sum_j \omega_{kj} [C_j](t)

### Three-Factor STDP + Neuromodulation

\Delta W_{ij} = \eta \cdot [C_{DA} + C_{ACh}] \cdot \text{STDP}(t_{post} - t_{pre})

Without Dopamine or Acetylcholine, no synaptic changes occur — noise never writes to permanent memory.

### Gammatone Cochlea Filter

g(t, f_c) = a \cdot t^{n-1} \cdot e^{-2\pi b(f_c) t} \cdot \cos(2\pi f_c t + \phi)

### Episodic Memory Capsule

C_m = \langle t_m,\ v_{speaker},\ s_{emotion},\ z_{core},\ P_{links} \rangle

| Field | Description |
|:---|:---|
| t_m | Unix timestamp (ms) + Year→Month→Day→Hour hierarchy |
| v_speaker | 32-dim compressed speaker biometric vector |
| s_emotion | Emotion label + [DA,NE,5HT,ACh,OXT] neuromodulator state |
| z_core | 32-dim compressed cortical resonance spike fingerprint |
| P_links | Topological links to related capsule IDs (associative recall) |

Each capsule ~2-4 KB. 10 years of operation = few hundred MB total.

---

## 📂 System Architecture Breakdown

### 🧠 Core Neural Engine (/core)

| Module | Neuroscientific Function | Key Responsibilities |
|:---|:---|:---|
| **snn_phoneme_autoencoder.py** | NDM Core Auto-Encoder | Spiking Neocortex Encoder, Unsupervised Spectrogram Reconstruction, Temporal Phoneme Sequence Decoder |
| **dona_brain_network.py** | Multi-Region SNN Topology | Neocortex (512x512) and Hippocampus (512x512) recurrent spiking networks |
| **conductance_neuron.py** | Conductance LIF Neurons | AdEx conductance-based LIF neurons, surrogate gradients, spike-triggered adaptation |
| **consolidation_manager.py** | Hafiza Sarayi & REM Uykusu | Prunes noisy weights, seals Neocortex and Hippocampus into .pt checkpoints |
| **episodic_memory_capsule.py** | Episodik Hafiza Sarayi Motoru | TemporalSpine tree, TopicRooms attractor clusters, EpisodicCapsule sealing, O(1) flash_recall |
| **free_energy_core.py** | Active Inference Engine | Calculates F (Variational Free Energy) and surprise bounds |
| **dona_agent.py** | Organism Core | AeonBiologicalOrchestrator — physiological age, metabolic life, module integration |
| **dona_physiology.py** | Biological Metabolism | ATP/Lactate/Fatigue homeostasis, CEN/DMN/SAN network mode switching |
| **neuromodulator_pool.py** | Limbic Neurochemistry | 5-modulator pool with enzymatic decay and cross-modulation matrix |
| **thalamic_relay.py** | Thalamus & TRN Gating | Tonic/burst mode — salience gating via Thalamic Reticular Nucleus |
| **dona_predictive_brain.py** | Predictive Coding | Top-down prediction generation and bottom-up error minimization |
| **autonomous_loop.py** | Intrinsic Volition | 7/24 idle metabolic loop and spontaneous autonomous predictive firing |
| **dona_consolidator.py** | Memory Consolidator | Lightweight bridge for memory sealing operations |
| **dona_web_server.py** | FastAPI Web Server | /api/status, /api/chat, /api/memory/context, /api/memory/flash_recall, /api/memory/stats, /api/sleep_cycle |

### 🧬 Sensory & Motor Modules (/modules)

| Module | Neuroscientific Function | Key Responsibilities |
|:---|:---|:---|
| **neural_cochlea.py** | Gammatone Bio-Cochlea | 128-channel ERB-scale Gammatone Filter Bank (20Hz-20kHz) → 512-d auditory spikes |
| **dona_vocal_motor.py** | Broca Vocal Motor | Temporal phoneme sequences → physical 48kHz PCM waveforms |
| **two_mass_glottal_model.py** | Vocal Cord Dynamics | Physical simulation of vocal cord masses under lung pressure (Ps) and F0 |
| **kelly_lochbaum_tract.py** | Acoustic Tube Filter | 16-section acoustic waveguide for 29 Turkish phoneme resonances |

### 🌐 Web Server & Containment HUD (/web)

| File | Interface Function | Key Responsibilities |
|:---|:---|:---|
| **dona_web_server.py** | FastAPI Server | 10+ REST endpoints: Memory Palace API, TTS, speaker registration, sleep cycle |
| **index.html** | NDM Bio-HUD Layout | Full-screen HUD with mouse-parallax Bio-Orb, transparent chat stream, metric panels |
| **style.css** | Cinematic Styling | Dark glassmorphism (#030407), geo-ring animations, gradient fade, memory-flash styles |
| **app.js** | WebGL & Audio Engine | Mouse parallax orb, Speech Recognition, Memory Palace fetch, localStorage fallback, telemetry |

### 🛠️ Core Scripts & Tools (/scripts)

| Script | Utility Function | Key Responsibilities |
|:---|:---|:---|
| **live_chat.py** | CLI NDM Panel | Interactive command-line NDM session, free energy monitoring, vocal motor synthesis |
| **audio_training.py** | GPU SNN Training | GPU-accelerated Spectrogram Reconstruction and Phoneme Auto-Encoder training |
| **colab_t4_trainer.py** | Google Colab Engine | One-click T4/L4/A100 GPU integration, synaptic sealing to Google Drive |
| **generate_harf_dataset.py** | Formant Synthesis | Bio-acoustic formant dataset for Turkish phonemes (F0, F1, F2, F3) |
| **reset_brain.py** | Neural Wiping | Resets .pt memory checkpoints to genomic baseline (Day 0) |
| **web_chat.py** | Web UI Launcher | Starts FastAPI at http://127.0.0.1:7860 and opens browser |

---

## 🏛️ Episodic Memory Palace — Uc Katman

`
HAFIZA SARAYI (EpisodicMemoryPalace)
├── KATMAN 1: Temporal Spine (Zaman Koridoru Agaci)
│   └── Year → Month → Day → Hour → Minute → Capsule IDs
│   └── O(log N) traversal · O(1) date-range recall
│
├── KATMAN 2: Topic Rooms (Topolojik Cekici Odalari)
│   ├── AI_Architecture  ├── Music_Production
│   ├── Villa_Management ├── Hardware_Code
│   ├── Science          ├── Language
│   └── General
│
└── KATMAN 3: EpisodicCapsule (~2-4 KB)
    ├── capsule_id  : Benzersiz ID
    ├── t_m         : Unix zaman damgasi (ms)
    ├── v_speaker   : 32-dim biyometrik ses vektoru
    ├── s_emotion   : Duygu + [DA,NE,5HT,ACh,OXT] vektoru
    ├── z_core      : 32-dim kortikal rezonans spike izi
    ├── P_links     : Iliski kurulmus kapsul IDleri
    ├── free_energy : O anki FEP degeri
    └── importance  : Duygusal onem skoru (0-1)
`

**Memory API Endpoints:**

`
GET  /api/memory/context        → Son N kapsul → Web HUD yansit
GET  /api/memory/flash_recall   → Konu/konusmaci filtreli cagirma
GET  /api/memory/stats          → Toplam kapsul, KB, konu dagilimi
POST /api/sleep_cycle           → NREM + REM konsolidasyonu
`

---

## 🔬 Neurochemistry Deep Dive

### 5-Modulator Limbic Pool

| Modulatör | Biyolojik Rol | ÆON Islevi |
|:---|:---|:---|
| **Dopamin (DA)** | Odül, Yenilik, Kesif | Sinaptik plastisite kapisi + STDP tetikleyici |
| **Noradrenalin (NE)** | Uyarilma, Surpriz, Tehdit | TRN burst tetikleyici, dikkat keskinlestiric |
| **Serotonin (5-HT)** | Memnuniyet, Sabir, Risk Inhibisyonu | Asiri NE patlamalarini dengeleyen karsı agirlik |
| **Asetilkolin (ACh)** | Ogrenme Kapisi, Bellek Kaydi | Hippocampal konsolidasyon izni, DA ile beraber plastisite |
| **Oksitosin (OXT)** | Biyometrik Ses Rezonans, Empati | Konusmaci kimlik baglama skoru, sosyal baglanma |

### Thalamic Reticular Network (TRN) Gating

`
Gelen Ses → TRN Salience Filter
    ├── Dusuk surpriz (FEP dusuk) → TONIC mode → kortekse suzulmus akis
    └── Yuksek surpriz (FEP yuksek) → BURST mode → NE spike → dikkat yonlendirme
`

---

## 🗺️ Roadmap & Milestones

- [x] **Phase 1** — LIF spiking neural engine, AdEx conductance neurons, Free Energy minimization
- [x] **Phase 2** — 3-Layer Episodic Memory Palace, Hippocampus SNN, REM sleep synaptic weight pruning
- [x] **Phase 3** — 128-channel ERB Gammatone filter bank bio-cochlea (20Hz-20kHz)
- [x] **Phase 4** — 512-dim unsupervised spectrogram reconstructor + temporal phoneme decoder
- [x] **Phase 5** — Two-Mass Glottal Model + Kelly-Lochbaum 48kHz PCM voice synthesizer
- [x] **Phase 5.5** — Full-screen FastAPI-backed Web HUD with Memory Palace API + mouse-parallax orb
- [ ] **Phase 6** — Event-based DVS silicon retina visual spike integration
- [ ] **Phase 7** — Cross-modal binding: lip-sync visual + auditory spike temporal alignment
- [ ] **Phase 8** — Embodied robotic motor articulation from SNN motor cortex output

---

<div align="center">
  <i>DONA ÆON — Neuromorphic Digital Mind (NDM) Architecture Showcase</i><br>
  Built by <b>Dobby B</b> · Active Development · Zero LLM · Zero External API · Pure Bio-Physics
</div>
