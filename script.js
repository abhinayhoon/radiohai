(function(){
  /* ======================================================================
     PLAYLISTS — Three channels, each reading from its own subfolder.
     Saloon  → audio/saloon/
     Truck   → audio/truck/
     Ghazals → audio/ghazals/
     ====================================================================== */
  var CHANNELS = {
    saloon: {
      freq: '90.4',
      emoji: '',
      glow: ['#E24C42','#49B4C4'],
      songs: [
        { title:'Mujhse Mohabbat Ka', artist:'Kumar Sanu, Alka Yagnik · Hum Hain Rahi Pyar Ke', src:'audio/saloon/Mujhse Mohabbat Ka Hum Hain Rahi Pyar Ke 320 Kbps.mp3' },
        { title:'Tumsa Koi Pyaara', artist:'Kumar Sanu, Alka Yagnik · Khuddar', src:'audio/saloon/Tumsa Koi Pyaara Khuddar 320 Kbps.mp3' },
        { title:'Bahut Pyar Karte Hai', artist:'S. P. Balasubrahmanyam · Saajan', src:'audio/saloon/Bahut Pyar Karte Hai Male Version Saajan 320 Kbps.mp3' },
        { title:'Jeeta Tha Jiske Liye', artist:'Kumar Sanu, Alka Yagnik · Dilwale', src:'audio/saloon/Jeeta Tha Jiske Liye Dilwale 320 Kbps.mp3' },
        { title:'Ek Sanam Chahiye Aashiqui Ke Liye', artist:'Kumar Sanu · Aashiqui', src:'audio/saloon/Ek Sanam Chahiye Aashiqui Ke Liye Aashiqui 320 Kbps.mp3' },
        { title:'Tu Pyar Hai Kisi Aur Ka', artist:'Anuradha Paudwal · Dil Hai Ke Manta Nahin', src:'audio/saloon/Tu Pyar Hai Kisi Aur Ka Dil Hai Ke Manta Nahin 320 Kbps.mp3' },
        { title:'Sochenge Tumhe Pyar', artist:'Kumar Sanu · Deewana', src:'audio/saloon/Sochenge Tumhe Pyar - Jb (PenduJatt.Com.Se).mp3' },
        { title:'Ek Ladki Ko Dekha', artist:'Kumar Sanu · 1942 A Love Story', src:'audio/saloon/Ek Ladki Ko Dekha 1942 A Love Story 320 Kbps.mp3' },
        { title:'Chura Ke Dil Mera', artist:'Kumar Sanu, Alka Yagnik · Main Khiladi Tu Anari', src:'audio/saloon/Chura Ke Dil Mera Main Khiladi Tu Anari 320 Kbps.mp3' },
        { title:'Tum To Thehre Pardesi', artist:'Altaf Raja', src:'audio/saloon/Tum To Thehre Pardesi (PenduJatt.Com.Se).mp3' },
        { title:'Dulhe Ka Sehra', artist:'Nusrat Fateh Ali Khan · Dhadkan', src:'audio/saloon/Dulhe Ka Sehra Dhadkan 320 Kbps.mp3' },
        { title:'Jeeye To Jeeye Kaise', artist:'Kumar Sanu, Anuradha Paudwal · Saajan', src:'audio/saloon/Jeeye To Jeeye Kaise Duet Version Saajan 320 Kbps.mp3' },
        { title:'Tum Dil Ki Dhadkan Mein', artist:'Kumar Sanu', src:'audio/saloon/Tum Dil Ki Dhadkan Mein Kumar Sanu 320 Kbps.mp3' },
        { title:'Pehli Pehli Baar Mohabbat Ki Hai', artist:'Kumar Sanu · Sirf Tum', src:'audio/saloon/Pehli Pehli Baar Mohabbat Ki Hai (PenduJatt.Com.Se).mp3' },
        { title:'Aawara Hawa Ka Jhonka Hoon', artist:'Altaf Raja', src:'audio/saloon/Aawara Hawa Ka Jhonka Hoon (PenduJatt.Com.Se).mp3' }
      ]
    },
    truck: {
      freq: '98.6',
      emoji: '',
      glow: ['#F0A63E','#14876A'],
      songs: [
        { title:'Aaye Ho Meri Zindagi Mein', artist:'Udit Narayan · Raja Hindustani', src:'audio/truck/Aaye Ho Meri Zindagi Mein Male Raja Hindustani 320 Kbps.mp3' },
        { title:'Ae Mere Humsafar', artist:'Udit Narayan, Alka Yagnik · Qayamat Se Qayamat Tak', src:'audio/truck/Ae Mere Humsafar Qayamat Se Qayamat Tak 320 Kbps.mp3' },
        { title:'Akeli Na Bazar Jaya Karo', artist:'Kumar Sanu · Major Saab', src:'audio/truck/Akeli Na Bazar Jaya Karo Major Saab 320 Kbps.mp3' },
        { title:'Chura Ke Dil Mera', artist:'Kumar Sanu, Alka Yagnik · Main Khiladi Tu Anari', src:'audio/truck/Chura Ke Dil Mera Main Khiladi Tu Anari 320 Kbps (1).mp3' },
        { title:'Husn Hai Suhana', artist:'Abhijeet, Chandana Dixit · Coolie No. 1', src:'audio/truck/Husn Hai Suhana Coolie No.1 320 Kbps.mp3' },
        { title:'Ladki Badi Anjani Hai', artist:'Kumar Sanu, Alka Yagnik · Kuch Kuch Hota Hai', src:'audio/truck/Ladki Badi Anjani Hai Kuch Kuch Hota Hai 320 Kbps.mp3' },
        { title:'Na Kajare Ki Dhar', artist:'Pankaj Udhas, Sadhana Sargam · Mohra', src:'audio/truck/Na Kajare Ki Dhar Duet Version Mohra 320 Kbps.mp3' },
        { title:'Pardesi Pardesi', artist:'Kumar Sanu, Alka Yagnik · Raja Hindustani', src:'audio/truck/Pardesi Pardesi Kumar Sanu Alka Yagnik Raja Hindustani 320 Kbps.mp3' },
        { title:'Pehli Pehli Baar Mohabbat Ki Hai', artist:'Kumar Sanu, Alka Yagnik · Sirf Tum', src:'audio/truck/Pehli Pehli Baar Mohabbat Ki Hai Sirf Tum 320 Kbps.mp3' },
        { title:'Raah Mein Unse Mulaqat', artist:'Kumar Sanu, Alka Yagnik · Vijaypath', src:'audio/truck/Raah Mein Unse Mulaqat Vijaypath 320 Kbps.mp3' },
        { title:'Tera Naam Liya', artist:'Manhar Udhas, Anuradha Paudwal · Ram Lakhan', src:'audio/truck/Tera Naam Liya Ram Lakhan 320 Kbps.mp3' },
        { title:'Tip Tip Barsa Paani', artist:'Udit Narayan, Alka Yagnik · Mohra', src:'audio/truck/Tip Tip Barsa Paani Mohra 320 Kbps.mp3' },
        { title:'Tu Shayar Hai Main Teri Shayari', artist:'Alka Yagnik · Saajan', src:'audio/truck/Too Shayar Hai Main Teri Shayari (PenduJatt.Com.Se).mp3' },
        { title:'Tu Pyar Hai Kisi Aur Ka', artist:'Anuradha Paudwal · Dil Hai Ke Manta Nahin', src:'audio/truck/Tu Pyar Hai Kisi Aur Ka Dil Hai Ke Manta Nahin 320 Kbps (1).mp3' },
        { title:'Tum Dil Ki Dhadkan Mein', artist:'Kumar Sanu', src:'audio/truck/Tum Dil Ki Dhadkan Mein Kumar Sanu 320 Kbps (1).mp3' },
        { title:'Tumsa Koi Pyaara', artist:'Kumar Sanu, Alka Yagnik · Khuddar', src:'audio/truck/Tumsa Koi Pyaara Khuddar 320 Kbps (1).mp3' }
      ]
    },
    ghazals: {
      freq: '104.8',
      emoji: '',
      glow: ['#C68A3C','#5A2020'],
      songs: [
        { title:'Aa Sajan', artist:'Satinder Sartaaj', src:'audio/ghazals/Aa Sajan Satinder Sartaaj 320 Kbps.mp3' },
        { title:'Apni Dhun Mein Rehta Hoon', artist:'Ghazal', src:'audio/ghazals/Apni Dhun Mein Rehta Hoon (PenduJatt.Com.Se).mp3' },
        { title:'Bhar Do Jholi Meri', artist:'Adnan Sami · Bajrangi Bhaijaan', src:'audio/ghazals/Bhar Do Jholi Meri Bajrangi Bhaijaan 320 Kbps.mp3' },
        { title:'Koi Fariyaad', artist:'Jagjit Singh · Tum Bin', src:'audio/ghazals/Koi Fariyaad Tum Bin 320 Kbps.mp3' },
        { title:'Main Nazar Se Pee Raha Hoon', artist:'Ghazal', src:'audio/ghazals/Main Nazar Se Pee Raha Hoon (PenduJatt.Com.Se).mp3' },
        { title:'Main Yahaan Hoon', artist:'Udit Narayan · Veer-Zaara', src:'audio/ghazals/Main Yahaan Hoon Veer Zaara 320 Kbps.mp3' },
        { title:'Mere Rashke Qamar', artist:'Nusrat Fateh Ali Khan', src:'audio/ghazals/Mere Rashke Qamar - Nusrat Fateh Ali Khan.mp3' },
        { title:'Par Chanaa De', artist:'Ghazal', src:'audio/ghazals/Par Chanaa De (PenduJatt.Com.Se).mp3' },
        { title:'Rafta Rafta', artist:'Atif Aslam', src:'audio/ghazals/Rafta Rafta - Atif Aslam.mp3' },
        { title:'Ranjish Hi Sahi', artist:'Ghazal', src:'audio/ghazals/Ranjish Hi Sahi (PenduJatt.Com.Se).mp3' },
        { title:'Tajdar E Haram', artist:'Atif Aslam', src:'audio/ghazals/Tajdar-E-Haram (PenduJatt.Com.Se).mp3' },
        { title:'Udaarian', artist:'Satinder Sartaaj', src:'audio/ghazals/Udaarian - Satinder Sartaaj.mp3' },
        { title:'Un Ka Andaz E Karam', artist:'Ghazal', src:'audio/ghazals/Un Ka Andaz-E-Karam (PenduJatt.Com.Se).mp3' }
      ]
    }
  };

  /* ===== DOM refs ===== */
  var body       = document.body;
  var dialWrap   = document.getElementById('dialWrap');
  var playerBar  = document.getElementById('playerBar');
  var needle     = document.getElementById('needle');
  var artInner   = document.getElementById('artInner');
  var trackTitle = document.getElementById('trackTitle');
  var trackSub   = document.getElementById('trackSub');
  var listenerEl = document.getElementById('listenerCount');
  var clockEl    = document.getElementById('clock');
  var playBtn    = document.getElementById('playBtn');
  var playIcon   = document.getElementById('playIcon');
  var prevBtn    = document.getElementById('prevBtn');
  var nextBtn    = document.getElementById('nextBtn');
  var marks      = document.querySelectorAll('.freq-mark');
  var glowA      = document.querySelector('.glow-a');
  var glowB      = document.querySelector('.glow-b');
  var canvas     = document.getElementById('visualizer');
  var vctx       = canvas.getContext('2d');
  var progressTrack = document.getElementById('progressTrack');
  var progressFill  = document.getElementById('progressFill');
  var timeCurrent   = document.getElementById('timeCurrent');
  var timeDuration  = document.getElementById('timeDuration');
  var audioEl       = document.getElementById('realAudio');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

  /* ===== State ===== */
  var currentChannel = 'saloon';
  var currentIndex   = 0;
  var activeGlow     = 'a';
  var isPlaying      = false;

  /* ===== Web Audio for static SFX only ===== */
  var actx, analyser;
  function ensureAudioCtx(){
    if(!actx){
      actx = new (window.AudioContext || window.webkitAudioContext)();
      analyser = actx.createAnalyser();
      analyser.fftSize = 64;
      analyser.smoothingTimeConstant = 0.82;
      analyser.connect(actx.destination);
    }
    if(actx.state === 'suspended') actx.resume();
  }

  /* ===== Radio static SFX ===== */
  function playStatic(dur){
    dur = dur || 0.4;
    ensureAudioCtx();
    try{
      var sz = Math.floor(actx.sampleRate * dur);
      var buf = actx.createBuffer(1, sz, actx.sampleRate);
      var d = buf.getChannelData(0);
      for(var i=0;i<sz;i++) d[i] = (Math.random()*2-1)*(1-i/sz);
      var src = actx.createBufferSource();
      src.buffer = buf;
      var bp = actx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.setValueAtTime(600, actx.currentTime);
      bp.frequency.exponentialRampToValueAtTime(2800, actx.currentTime+dur);
      bp.Q.value = 0.6;
      var g = actx.createGain();
      g.gain.setValueAtTime(0.001, actx.currentTime);
      g.gain.linearRampToValueAtTime(0.18, actx.currentTime+dur*0.12);
      g.gain.exponentialRampToValueAtTime(0.001, actx.currentTime+dur);
      src.connect(bp).connect(g).connect(actx.destination);
      src.start(); src.stop(actx.currentTime+dur);
    }catch(e){}
  }

  /* ===== Load & play a song ===== */
  function loadSong(ch, idx){
    var songs = CHANNELS[ch].songs;
    if(!songs.length){
      trackTitle.textContent = 'No songs yet';
      trackSub.textContent = 'Add songs to audio/' + ch + '/';
      progressFill.style.width = '0%';
      timeCurrent.textContent = '0:00';
      timeDuration.textContent = '0:00';
      return;
    }
    idx = ((idx % songs.length) + songs.length) % songs.length;
    currentIndex = idx;
    var song = songs[idx];
    audioEl.src = song.src;
    audioEl.load();
    trackTitle.textContent = song.title;
    var cfg = CHANNELS[ch];
    trackSub.textContent = song.artist + ' · ' + cfg.freq + ' FM';
    trackTitle.style.opacity = '0';
    setTimeout(function(){ trackTitle.style.opacity = '1'; }, 60);
    progressFill.style.width = '0%';
    timeCurrent.textContent = '0:00';
    timeDuration.textContent = '0:00';
  }

  function playCurrent(){
    if(!CHANNELS[currentChannel].songs.length) return;
    ensureAudioCtx();
    isPlaying = true;
    var p = audioEl.play();
    if(p && p.catch) p.catch(function(e){ console.warn('Play blocked:', e); isPlaying = false; updatePlayUI(); });
    updatePlayUI();
  }

  function pauseCurrent(){
    isPlaying = false;
    audioEl.pause();
    updatePlayUI();
  }

  function updatePlayUI(){
    playIcon.innerHTML = isPlaying
      ? '<rect x="5" y="4" width="5" height="16" rx="1.5" fill="currentColor"/><rect x="14" y="4" width="5" height="16" rx="1.5" fill="currentColor"/>'
      : '<path d="M8 5v14l11-7z" fill="currentColor"/>';
    playBtn.setAttribute('aria-label', isPlaying ? 'Pause' : 'Play');
  }

  /* ===== Next / Prev ===== */
  function nextTrack(){
    if(!CHANNELS[currentChannel].songs.length) return;
    playStatic(0.3);
    loadSong(currentChannel, currentIndex + 1);
    if(isPlaying) setTimeout(playCurrent, 280);
  }
  function prevTrack(){
    if(!CHANNELS[currentChannel].songs.length) return;
    if(audioEl.currentTime > 3){
      audioEl.currentTime = 0;
      return;
    }
    playStatic(0.3);
    loadSong(currentChannel, currentIndex - 1);
    if(isPlaying) setTimeout(playCurrent, 280);
  }

  /* Auto-advance when song ends */
  audioEl.addEventListener('ended', function(){ nextTrack(); });

  /* ===== Progress bar ===== */
  function fmtTime(s){
    if(!isFinite(s)) return '0:00';
    var m = Math.floor(s/60);
    var sec = Math.floor(s%60);
    return m + ':' + (sec < 10 ? '0' : '') + sec;
  }
  audioEl.addEventListener('timeupdate', function(){
    if(!audioEl.duration) return;
    var pct = (audioEl.currentTime / audioEl.duration) * 100;
    progressFill.style.width = pct + '%';
    timeCurrent.textContent = fmtTime(audioEl.currentTime);
  });
  audioEl.addEventListener('loadedmetadata', function(){
    timeDuration.textContent = fmtTime(audioEl.duration);
  });
  audioEl.addEventListener('durationchange', function(){
    timeDuration.textContent = fmtTime(audioEl.duration);
  });
  /* Click-to-seek on progress bar */
  progressTrack.addEventListener('click', function(e){
    if(!audioEl.duration) return;
    var rect = progressTrack.getBoundingClientRect();
    var pct = (e.clientX - rect.left) / rect.width;
    audioEl.currentTime = pct * audioEl.duration;
  });

  /* ===== Glow crossfade ===== */
  function hexA(hex,a){
    var h=hex.replace('#','');
    return 'rgba('+parseInt(h.substring(0,2),16)+','+parseInt(h.substring(2,4),16)+','+parseInt(h.substring(4,6),16)+','+a+')';
  }
  function crossfadeGlow(c){
    var next = activeGlow==='a' ? glowB : glowA;
    var prev = activeGlow==='a' ? glowA : glowB;
    next.style.background = 'radial-gradient(circle at 28% 22%,'+hexA(c[0],.35)+',transparent 60%),radial-gradient(circle at 80% 78%,'+hexA(c[1],.25)+',transparent 55%)';
    next.style.opacity='1'; prev.style.opacity='0';
    activeGlow = activeGlow==='a' ? 'b' : 'a';
  }

  /* ===== Channel switching ===== */
  function updateMarks(key){
    marks.forEach(function(m){ m.setAttribute('aria-checked', String(m.dataset.channel===key)); });
  }

  function switchChannel(key){
    if(key===currentChannel) return;
    var cfg = CHANNELS[key];
    var btn = document.querySelector('.freq-mark[data-channel="'+key+'"]');
    playStatic(0.42);
    needle.style.left = btn.style.left;
    crossfadeGlow(cfg.glow);
    updateMarks(key);
    setTimeout(function(){
      body.dataset.channel = key;
      artInner.className = 'art-inner art-' + key;
    }, 200);
    currentChannel = key;
    currentIndex = 0;
    loadSong(key, 0);
    if(isPlaying) setTimeout(playCurrent, 350);
  }

  /* ===== Event listeners ===== */
  marks.forEach(function(btn){
    btn.addEventListener('click', function(){ switchChannel(btn.dataset.channel); });
  });
  playBtn.addEventListener('click', function(){
    if(isPlaying) pauseCurrent(); else playCurrent();
  });
  prevBtn.addEventListener('click', prevTrack);
  nextBtn.addEventListener('click', nextTrack);

  /* ===== Visualizer ===== */
  function resizeCanvas(){
    var r = canvas.getBoundingClientRect();
    var dpr = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.floor(r.width*dpr));
    canvas.height = Math.max(1, Math.floor(r.height*dpr));
  }
  window.addEventListener('resize', resizeCanvas);

  var idlePhase = 0;
  function draw(){
    requestAnimationFrame(draw);
    if(canvas.width===0) resizeCanvas();
    var w=canvas.width, h=canvas.height;
    vctx.clearRect(0,0,w,h);
    var bars=28, gap=w/bars;
    vctx.fillStyle = CHANNELS[currentChannel].glow[0];

    if(isPlaying && analyser){
      var data = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(data);
      var hasData = false;
      for(var k=0;k<data.length;k++) if(data[k]>0){hasData=true;break;}

      if(hasData){
        for(var i=0;i<bars;i++){
          var v = data[Math.floor(i*data.length/bars)]/255;
          var bh = Math.max(h*0.06, v*h*0.92);
          vctx.globalAlpha = 0.5 + v*0.5;
          vctx.fillRect(i*gap+gap*0.2, h-bh, gap*0.6, bh);
        }
        vctx.globalAlpha = 1;
      } else {
        if(!reducedMotion) idlePhase += 0.14;
        for(var j=0;j<bars;j++){
          var wave = Math.abs(Math.sin(idlePhase+j*0.38)*Math.cos(idlePhase*0.6+j*0.22));
          var bh2 = Math.max(h*0.08, wave*h*0.82);
          vctx.globalAlpha = 0.4 + wave*0.6;
          vctx.fillRect(j*gap+gap*0.2, h-bh2, gap*0.6, bh2);
        }
        vctx.globalAlpha = 1;
      }
    } else {
      if(!reducedMotion) idlePhase += 0.04;
      vctx.globalAlpha = 0.25;
      for(var m=0;m<bars;m++){
        var bh3 = (Math.sin(idlePhase+m*0.5)*0.1+0.14)*h;
        vctx.fillRect(m*gap+gap*0.2, h-bh3, gap*0.6, bh3);
      }
      vctx.globalAlpha = 1;
    }
  }

  /* ===== Clock ===== */
  function updateClock(){
    var now = new Date();
    var h = now.getHours(), m = now.getMinutes();
    clockEl.textContent = (h<10?'0':'')+h+':'+(m<10?'0':'')+m;
  }

  /* ===== Listener count (simulated) ===== */
  var listeners = 260 + Math.floor(Math.random()*260);
  function updateListeners(){
    listeners += Math.floor(Math.random()*11)-5;
    listeners = Math.max(140, Math.min(940, listeners));
    // if(listenerEl) listenerEl.textContent = listeners.toLocaleString();
  }

  /* ===== Keyboard shortcuts ===== */
  document.addEventListener('keydown', function(e){
    if(e.code==='Space'){ e.preventDefault(); isPlaying ? pauseCurrent() : playCurrent(); }
    if(e.code==='ArrowRight') nextTrack();
    if(e.code==='ArrowLeft') prevTrack();
  });

  /* ===== Init ===== */
  artInner.className = 'art-inner art-saloon';
  updateMarks('saloon');
  loadSong('saloon', 0);
  updateClock();
  setInterval(updateClock, 10000);
  updateListeners();
  setInterval(updateListeners, 2600);
  resizeCanvas();
  draw();

  /* Entrance animations */
  requestAnimationFrame(function(){
    requestAnimationFrame(function(){
      dialWrap.classList.add('on');
      playerBar.classList.add('on');
    });
  });

  /* ===== Social Menu Toggle ===== */
  var socialToggle = document.getElementById('socialToggle');
  var socialMenu = document.getElementById('socialMenu');
  if (socialToggle && socialMenu) {
    socialToggle.addEventListener('click', function() {
      var isOpen = socialMenu.classList.contains('open');
      if (isOpen) {
        socialMenu.classList.remove('open');
        socialToggle.setAttribute('aria-expanded', 'false');
      } else {
        socialMenu.classList.add('open');
        socialToggle.setAttribute('aria-expanded', 'true');
      }
    });
  }

  /* ===== Coke Modal ===== */
  var cokeBtn = document.getElementById('cokeBtn');
  var cokeModal = document.getElementById('cokeModal');
  var cokeModalClose = document.getElementById('cokeModalClose');
  var cokeBtnYes = document.getElementById('cokeBtnYes');
  var cokeBtnNo = document.getElementById('cokeBtnNo');
  var cokeModalInner = document.getElementById('cokeModalInner');
  var cokeModalQr = document.getElementById('cokeModalQr');

  if(cokeBtn && cokeModal) {
    cokeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      cokeModal.classList.add('open');
      cokeModalInner.style.display = 'block';
      cokeModalQr.style.display = 'none';
      socialMenu.classList.remove('open');
      socialToggle.setAttribute('aria-expanded', 'false');
    });

    function closeCokeModal() {
      cokeModal.classList.remove('open');
    }
    
    cokeModalClose.addEventListener('click', closeCokeModal);
    cokeBtnNo.addEventListener('click', closeCokeModal);
    cokeModal.addEventListener('click', function(e) {
      if(e.target === cokeModal) closeCokeModal();
    });

    cokeBtnYes.addEventListener('click', function() {
      var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
      if(isMobile) {
        window.location.href = "upi://pay?pa=abhinayhai@fam";
        closeCokeModal();
      } else {
        cokeModalInner.style.display = 'none';
        cokeModalQr.style.display = 'block';
      }
    });
  }
})();
