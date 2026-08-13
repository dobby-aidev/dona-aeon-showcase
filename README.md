<div align="center">
  <img src="assets/ui_showcase.png" alt="DONA ÆON Interface" width="100%" style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
  
  <br><br>

  <h1>DONA ÆON <br> <sub>Biyo-Dijital Otonom Organizma</sub></h1>

  <p>
    <b>Spiking Neural Networks (SNN)</b> ve <b>Karl Friston'ın Serbest Enerji İlkesi (FEP)</b> temelleri üzerine inşa edilmiş, kendi kendine öğrenen biyolojik yapay zeka simülasyonu.
  </p>
</div>

---

## 🏗️ Mimari ve Kod Yapısı

Projemiz, kelimeleri klasik LLM'ler gibi "token" olarak değil, doğrudan biyolojik bir frekans dalgası olarak algılar ve işler.

<div align="center">
  <img src="dona_aeon_architecture.png" alt="Mimari Şema" width="100%">
</div>

1. **Cochlear Receptor (İşitsel Girdi):** Ses dalgaları Web Speech API veya `.wav` üzerinden alınır ve Librosa ile 128 Mel bandına bölünerek spektrograma dönüştürülür.
2. **SNN Neocortex (Bilişsel İşleme):** 2048 nöronluk Spiking Neural Network (SNN), bu frekansları uyarıcı akımlara (LIF potansiyellerine) çevirir. Sistem Serbest Enerji Prensibi (FEP) ile sürprizi en aza indirmeye çalışır.
3. **Broca Motor Output (Konuşma Üretimi):** Neokorteksten sızan potansiyeller, Broca alanındaki 512 motor nöronu tetikler. En yüksek aksiyon potansiyeline sahip frekans hedefi (hece/kelime) seçilir.
4. **Gerçek Ses Sentezi:** Hedeflenen kelime, Microsoft Edge-TTS altyapısıyla nefes alan, tonlamalı gerçek insan sesine dönüştürülerek arayüzden dışarı verilir.

## 🔬 Biyolojik Metabolizma ve Telemetri
DONA ÆON'un arka planda yaşayan bir metabolizması vardır:
- **ATP (Enerji):** Sistem dinledikçe ve konuştukça düşer. Kendi haline bırakıldığında (rölantide) yenilenir.
- **Dopamin (Ödül):** Sistem doğru tahminler yaptığında artar, sinaptik öğrenme hızını (plastisiteyi) artırır.
- **İçsel İrade (Intrinsic Volition):** Organizma yalnız kaldığında kendi kendine düşünür ve içsel beklentilerini karşılamak için mırıldanır (mumbling).

---
*Geliştirici: Dobby B | DONA ÆON Projesi - FEP ile Kodlanmıştır.*
