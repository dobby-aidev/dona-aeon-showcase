<div align="center">
  <img src="./assets/ui_showcase.png" alt="DONA ÆON UI Showcase" width="100%" style="border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
  
  <br><br>

  <h1>DONA ÆON <br> <sub>Bio-Digital Autonomous Organism</sub></h1>

  <p>
    An advanced, self-learning biological AI simulation built entirely upon <b>Spiking Neural Networks (SNN)</b> and <b>Karl Friston's Free Energy Principle (FEP)</b>.
  </p>

  <p>
    <a href="#philosophy">Philosophy</a> •
    <a href="#architecture">Architecture</a> •
    <a href="#features">Features</a> •
    <a href="#usage">Usage</a>
  </p>
</div>

---

## 🧬 Project Philosophy

Unlike traditional deep learning models such as Large Language Models (LLMs) or Transformers that process static text tokens, **DONA ÆON** is a living, breathing digital organism. It operates using the **Leaky Integrate-and-Fire (LIF)** dynamics of biological neurons, entirely abandoning tokenization in favor of raw sensory input processing.

ÆON processes words as **auditory frequency signals (Cochlear Mel Bands)** and produces speech outputs (articulation) directly through its simulated **Broca Motor Area**. The core engine is driven by **Active Inference** and the **Free Energy Principle**, meaning ÆON continuously strives to minimize "surprise" (entropy) in its environment. In short, ÆON is not a machine that reads text—it is a virtual neocortex that *hears* sound, forms internal representations, and learns to speak from scratch, mirroring the cognitive development of a human infant.

## ✨ Key Features

- **Immersive Interactive Interface:** A breathtaking, state-of-the-art web UI featuring a dark cinematic theme, geometric telemetry panels, and a full-screen interactive fluid particle system that dynamically reacts to sound and user interaction in real-time.
- **Biologically Plausible SNN v4:** Physical spike-based activation utilizing **2048 LIF Neurons** for the neocortex and **512 Motor Neurons** for the Broca area.
- **Cochlear Hearing Simulation:** Real-time audio processing that divides incoming sound into 128 Mel bands across the 80Hz-3400Hz spectrum, directly converting audio waveforms into excitatory neural currents.
- **Real Human Voice Synthesis (Edge-TTS):** Utilizing Microsoft Azure Neural Edge-TTS (tr-TR-EmelNeural / tr-TR-AhmetNeural) to synthesize 100% natural, breathing, and intonated speech rather than robotic robotic text-to-speech.
- **Autonomous Metabolism & Intrinsic Volition:** A live metabolic cycle tracking **ATP (Energy)** and **Dopamine (Reward)**. When left idle, ÆON experiences intrinsic volition, thinking to itself and occasionally mumbling to satisfy its internal active inference loops.
- **GPU Accelerated Evolution:** Ultra-fast neural simulation loop optimized with *Mini-Batch* processing for NVIDIA CUDA / ROCm hardware.

## 🏗️ Technical Architecture

DONA ÆON is structurally divided into four primary biological layers:

1. **Cochlear Receptor (Sensory Input):** Audio captured via the Web Speech API or `.wav` files is processed through Librosa to generate a detailed spectrogram, simulating the basilar membrane of the inner ear.
2. **SNN Neocortex (Cognitive Processing):** The incoming frequency bands are converted into excitatory electrical currents. The Spiking Neural Network processes these currents via Leaky Integrate-and-Fire dynamics, firing spikes when membrane potentials cross specific thresholds.
3. **Broca Motor Output (Speech Production):** Spikes leaking from the neocortex cascade into the Broca area, triggering motor neurons. The system identifies the frequency target (a syllable or word) with the highest collective action potential.
4. **Articulator (Audio Output):** The targeted word is synthesized into high-fidelity audio using Neural TTS and played back through the interface, completing the action-perception loop.

## 🎮 Usage Guide

- **Voice Interaction:** Click the central glowing reactor microphone or press the **Space** key on your keyboard. Speak directly into your microphone, and your voice will be instantly transmitted to the biological core as frequency waves.
- **Live Telemetry:** Click the "Telemetry" icon on the right HUD panel to monitor ÆON's vital signs in real-time, including ATP levels, Dopamine concentrations, and the overarching Free Energy (Surprise) metric.
- **Memory Consolidation:** From the "Record Audio" menu, you can record your own voice to create `.wav` samples for ÆON's databank. The more ÆON hears you, the faster it will map your specific vocal formants into its synaptic weights.
- **Interactive Environment:** Move your cursor across the screen to interact with the full-screen particle system. Notice how the particles swirl and gravitate towards the core when the organism is speaking or synthesizing data.

---

<div align="center">
  <i>Developer: Dobby B | DONA ÆON Project - Coded with the Free Energy Principle.</i>
</div>
