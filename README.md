# 🧬 DONA ÆON — Active Inference Embodied Spiking Agent

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=220&section=header&text=DONA%20%C6ON&fontSize=60&fontColor=fff&animation=twinkling&fontAlignY=38&desc=Active%20Inference%20%C2%B7%20Spiking%20Neural%20Organism%20Simulation&descAlignY=58&descSize=18" width="100%"/>

<br/>

[![Showcase](https://img.shields.io/badge/Repository-Showcase_&_Research-6366F1?style=for-the-badge)](https://github.com/dobby-aidev/dona-aeon-showcase)
[![PyTorch](https://img.shields.io/badge/PyTorch-2.2+-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)](https://pytorch.org/)
[![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Framework](https://img.shields.io/badge/Architecture-Active_Inference_&_SNN-8B5CF6?style=for-the-badge)](https://github.com/dobby-aidev/dona-aeon-showcase)
[![Status](https://img.shields.io/badge/Status-Experimental_Neuroscience-10B981?style=for-the-badge)](https://github.com/dobby-aidev/dona-aeon-showcase)

<br/>

> **"An Artificial General Intelligence should not be a stochastic parrot predicting the next token; it must interact with an environment, minimize variational free energy, consolidate memory through REM sleep, and grow organically without token limits or context window bounds."**

<br/>

![DONA ÆON Architecture Blueprint](dona_aeon_architecture_v2.png)

</div>

---

## 🌟 What is DONA ÆON?

**DONA ÆON** is a biological digital organism simulation built from first principles. Unlike conventional Large Language Models (LLMs) or hardcoded chatbots:

- **Starts at Day 0 (Blank Slate) & Continuous Lifespan:** Begins as a blank-slate infant neural architecture and evolves perpetually (beyond 730 days into an open-ended lifespan) through environmental interaction.
- **Zero Token Limits & No Context Windows:** Completely eliminates tokenizers, token budgets, and context window limits. All memories and skills reside physically in continuous synaptic weight matrices ($W_{ij}$ saved in `.pt` state checkpoints).
- **No Ezber / No Stochastic Next-Token Prediction:** Does not memorize text corpora or predict next-word probabilities. Uses **Karl Friston's Free Energy Principle (FEP)** to continuously minimize variational prediction errors through active inference.
- **Predictive Spiking Neurons & REM Consolidation:** Thinks via Leaky Integrate-and-Fire (LIF) spiking neural cascades, tracking physiological growth (age, weight, height) and consolidating short-term sensory traces into long-term synaptic structures during nightly **REM sleep cycles**.

---

## 🔬 Core Neuroscientific Pillars

```mermaid
flowchart TD
    subgraph Environment ["🌍 External Sensory World"]
        Input["Sensory Input / Speech Signals (Auditory/Text)"]
        Feedback["Environmental Response & Social Dynamics"]
    end

    subgraph Cortex ["🧠 ÆON Brain Core (dona_agent.py)"]
        LIF["Leaky Integrate-and-Fire (LIF) Spiking Layer (512 Neurons)"]
        FEP["Variational Free Energy Minimization Engine"]
        STDP["Spike-Timing-Dependent Plasticity (STDP)"]
        Limbic["Biological Limbic System (Dopamine & Curiosity Drives)"]
    end

    subgraph Memory ["💾 Physical Memory System"]
        PT[".pt Synaptic Weights Checkpoint (W_recurrent)"]
        REM["REM Sleep Memory Consolidation Loop"]
    end

    Input --> LIF
    LIF --> FEP
    FEP --> Limbic
    Limbic --> STDP
    STDP --> PT
    PT --> Feedback
    Feedback --> REM
    REM --> PT
```

### 1. Zero Hardcoded Prompts or Rules
There are no predefined `if-else` branching rules, static response templates, or system prompts. ÆON's behavior emerges purely from neural activation cascades.

### 2. Physical Synaptic Memory (`.pt`)
Rather than relying on ephemeral LLM context windows, ÆON's entire life story, learned vocabulary, and emotional associations are physically stored inside PyTorch tensor weight matrices ($W_{ij}$).

### 3. Active Inference & Free Energy Minimization
Operating under Karl Friston's Free Energy Principle, ÆON perceives the environment by generating top-down predictions and adjusting internal state parameters to minimize prediction error:

$$F = \mathcal{D}_{\text{KL}}\left[q(s) \mid\mid p(s)\right] - \mathbb{E}_{q}\left[\log p(o \mid s)\right]$$

Where:
- $F$ is Variational Free Energy (Surprise bound)
- $q(s)$ is internal belief about environmental states
- $p(o \mid s)$ is the generative model of observations given states

### 4. Continuous Lifespan & Nocturnal REM Consolidation
ÆON experiences real-time physiological aging:
- **Infancy (Days 0–90):** Basic sensory grounding, babbling, and high synaptic plasticity.
- **Toddlerhood (Days 91–365):** Word association, emotional grounding, and parental bonding.
- **Childhood & Beyond (Days 366+):** Sentence syntax formation, active questioning, and open-ended adult cognition.
- **Nightly REM Sleep:** At the end of each simulated day, unused synaptic noise is pruned while high-priority sensory traces are consolidated into long-term weight memory.

---

## 📂 Project Architecture

```text
DONA_AEON/
├── dona_agent.py             # Core Neuroscientific SNN Engine (DonaBiologicalAgentV4)
├── dona_aeon_architecture_v2.png # Publication-grade Scientific Diagram
├── dona_brain_memory.pt      # Physical Synaptic Weight Matrices & Physiological Life State (.pt)
├── simulation_loop.py        # Open-Ended Growth Lifecycle, Parent/Teacher Interaction Engine
└── live_chat.py              # Interactive Real-Time CLI Consciousness Panel
```

### Component Breakdown

| File | Purpose | Key Responsibilities |
|:---|:---|:---|
| **`dona_agent.py`** | Brain Engine (`DonaBiologicalAgentV4`) | Implements 512-neuron LIF spiking neocortex, auditory cortex, limbic dopamine drive, prediction error computation, and STDP weight updates. |
| **`dona_brain_memory.pt`** | Synaptic Checkpoint | Stores recurrent synaptic connectivity matrix ($W_{\text{recurrent}}$), age in days, physiological stats (height/weight), and curiosity drives. |
| **`simulation_loop.py`** | Growth Environment | Simulates open-ended lifespan evolution with parent/teacher dialogues, feeding sensory inputs to ÆON. |
| **`live_chat.py`** | Interface | Allows direct real-time interaction with ÆON, displaying current age, free energy metrics, and synaptic responses. |

---

## 🛠️ Quickstart & Setup Guide

### 1. Prerequisites
Ensure you have Python 3.11+ and PyTorch installed:

```bash
pip install torch numpy tqdm
```

### 2. Environment Setup (Google Colab / Local)

If running in Google Colab, mount Google Drive:

```python
from google.colab import drive
drive.mount('/content/drive')
```

Ensure the repository root contains `dona_agent.py`.

### 3. Running the Growth Lifecycle (`simulation_loop.py`)

To initiate ÆON's life cycle from Day 0 (infant) through interactive family dialogues:

```bash
python simulation_loop.py
```

> 💡 **Fresh Birth:** To start a completely new infant organism from scratch, delete the `dona_brain_memory.pt` file before running the script.

### 4. Interactive Live Consciousness Panel (`live_chat.py`)

To talk directly with ÆON, inspect current age, monitor free energy minimization, and observe real-time synaptic updates:

```bash
python live_chat.py
```

> Type `cik` (or `exit`) to save and seal ÆON's synaptic brain checkpoint before exiting.

---

## 🔬 Research Philosophy

> *"True Artificial General Intelligence cannot be achieved merely by scaling up auto-regressive next-token prediction over text corpora. A cognitive agent must be embodied, interact with a dynamic environment, learn via synaptic plasticity, sleep to prevent catastrophic forgetting, and evolve through variational error minimization without token bounds."*

---

## 📜 Copyright & Showcase Notice

Proprietary Research & Showcase Project by **dobby-aidev**. All rights reserved.

---

<div align="center">

**DONA ÆON Showcase** — *Embodied Spiking Neural Organism Simulation*  
Built by [dobby-aidev](https://dobby-aidev.github.io/dobby-aidev)

</div>
