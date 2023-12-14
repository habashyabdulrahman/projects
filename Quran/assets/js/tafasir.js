const apiUrl = "https://www.mp3quran.net/api/v3/tafsir?tafsir=1&language=ar";
const language = "ar";

async function getTafasir(tafasir) {
  const chooseTafasir = document.querySelector("#chooseTafasir");

  const res = await fetch(`${apiUrl}`);
  const data = await res.json();
  console.log(data);
  chooseTafasir.innerHTML += `<option value="">أختر تفسير</option>`;
  data.tafsir.forEach((tafsir) => {
    chooseTafasir.innerHTML += `<option value="${tafsir.id}">${tafsir.name}</option>`;
  });

  chooseTafasir.addEventListener("change", (e) => {
    const selectedTafasir = chooseTafasir.options[chooseTafasir.selectedIndex];
    playTafasir(selectedTafasir.value);
  });
  function playTafasir(tafasirMp3) {
    const audioPlayer = document.querySelector("#audioPlayer");
    audioPlayer.src = tafasirMp3;
    audioPlayer.play();
  }
}
getTafasir();


async function getSurah(surahServer, surahList) {
  const chooseSurah = document.querySelector("#chooseSurah");
  const res = await fetch(`https://mp3quran.net/api/v3/suwar`);
  const data = await res.json();
  const surahNames = data.suwar;

  surahList = surahList.split(",");

  surahList.forEach((surah) => {
    const padSurah = surah.padStart(3, "0");
    chooseSurah.innerHTML += `<option value=""></option>`;
    surahNames.forEach((surahName) => {
      if (surahName.id == surah) {
        chooseSurah.innerHTML += `<option value="${surahServer}${padSurah}.mp3">${surahName.name}</option>`;
      }
    });
  });

  chooseSurah.addEventListener("change", (e) => {
    const selectedSurah = chooseSurah.options[chooseSurah.selectedIndex];
    playSurah(selectedSurah.value);
  });
  function playSurah(surahMp3) {
    const audioPlayer = document.querySelector("#audioPlayer");
    audioPlayer.src = surahMp3;
    audioPlayer.play();
  }
}
