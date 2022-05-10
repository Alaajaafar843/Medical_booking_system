
const lon = document.getElementById("lon");
const alt = document.getElementById("alt");

    function currentPosition() {
        if (navigator.geolocation) {
          navigator.geolocation.watchPosition(showPosition);
        } else { 
          x.innerHTML = "Geolocation is not supported by this browser.";
        }
      }
          
      function showPosition(position) {
          lon.value=  position.coords.latitude 
         alt.value =  position.coords.longitude;
      }







const loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};
  






const  mail = document.getElementById("E-mail");
const regexo = /^([\.\_a-zA-Z0-9]+)@((gmail+)||(hotmail+)||(icloud+)).(com+)$/;
const error_mail = document.getElementById("error_mail");


 


 mail.onkeyup = function (){
  if ( regexo.test(mail.value)){
      error_mail.innerHTML ="success"
      error_mail.className = "success"
      mail.className ="border-green"
      mail.focus()      
  }

  else{
      error_mail.innerHTML ="Please enter a correct email"
      error_mail.className = "error"
      mail.className ="border-red"
      mail.focus()  

  }
 }

   const tel = document.getElementById("Tel");
   const error_tel = document.getElementById("error_tel");


   tel.onkeyup = function (){
    if (tel.value.length==8){
        error_tel.innerHTML ="success"
        error_tel.className = "success"
        tel.className ="border-green"
        tel.focus()      
    }

    else{
        error_tel.innerHTML ="Please enter a correct number 8 digits"
        error_tel.className = "error"
        tel.className ="border-red"
        tel.focus()  

    }
   }


        const street = document.getElementById("street");
        const error_street = document.getElementById("error_street");

        

   street.onkeyup = function (){
    if (street.value.length>4){
        street.className ="border-black";
        error_street.innerHTML=""
            
    }

    else{
        error_street.innerHTML ="Please enter a full Name street";
        error_street.className = "error";
        street.className ="border-red";
        street.focus(); 
  }
   }

   const state = document.getElementById("countySel");
    const country = document.getElementById("stateSel");
    const city = document.getElementById("districtSel");

    const error_country = document.getElementById("error_country");
    const error_city = document.getElementById("error_city");
    
    function save(){

        if(mail.value !="" || tel.value !="" ){
            const newPatients = JSON.parse(localStorage.getItem("doctors"))
            var patients = newPatients
            if(!patients) patients = []
        
        patients.push({
        
        email : mail.value,
        tel : tel.value,
        lon: lon.value,
        alt : alt.value,
        state: state.value,
        country : country.value,
        city : city.value,
        street:street.value
        
        });
        
        
        localStorage.setItem("doctors",JSON.stringify(patients))
        }
        
 

   if (state.value!="Select State" && country.value=="select country"){
       error_country.innerHTML ="Please Choose a country"
       country.className="border-red"
       country.focus();    
   }
    
   else if(state.value!="Select State" && country.value!="select country" && city.value=="select city"){
    error_city.innerHTML ="Please Choose a city"
    city.className="border-red"
    country.className ="none"
    error_country.innerHTML = ""
    city.focus()
   }
   else if(state.value!="Select State" && country.value!="select country" && city.value!="select city" && street.value==""){
       city.className="none"
       error_city.innerHTML=""
       error_street.innerHTML="Please enter street name"
       street.className="border-red"
       street.focus()
   }
   else{
       street.innerHTML=""
       street.className="none"
   }
  
   
}




       
 


   
var stateObject = {
    "lebanon":
    {
        "Akkar": ['Aabboudiyeh', 'Aabdeh', 'Aadbil', 'Aaidamoun', 'Aaiyat', 'Aakkar El Aatiqa', 'Aamara', 'Aamaret El Baykat', 'Aamriyeh', 'Aandqet', 'Aaouadeh', 'Aaouainat ', 'Aarab Jourmnaya', 'Aarida ', 'Aarqa', 'Aayoun ', 'Aayoun El Ghizlane', 'Ain Achma', 'Ain Al Zahab (Dinbou)', 'Ain Ez Zayt', 'Ain Tinta', 'Ain Yaaqoub', 'Akroum', 'Baghdadi', 'Bani Sakher', 'Bebnine', 'Beino', 'Beit Ayoub', 'Beit El Hajj', 'Beit El Haouch', 'Beit Mellat', 'Beit Younes', 'Berbara', 'Berqayel', 'Bezbina ', 'Bireh ', 'Borj ', 'Borj El Aarab', 'Boustane El Herch', 'Bqerzla', 'Bsatine (Fsiqine)', 'Bzal', 'Chadra', 'Chane', 'Chaqdouf ', 'Charbila', 'Cheikh Aayache ', 'Cheikh Mohammad', 'Cheikh Taba', 'Cheikh Zennad', 'Cheikhlar', 'Daghleh', 'Dahr Laissineh', 'Dahr Qambar', 'Daoura ', 'Daoussa', 'Darine', 'Dayret En Nahr El Kabir (Khat Petrol)', 'Deir Dalloum', 'Deir Jannine', 'Dibbabiyeh Ech Charqiyeh', 'Douair Aadouiyeh', 'Fardh', 'Fnaydeq', 'Fraydis ', 'Ghzayleh', 'Habchit ', 'Hakour ', 'Halba', 'Haouchab', 'Hayssa', 'Haytla', 'Hayzouq', 'Hichi', 'Hmaireh ', 'Hnaider', 'Hokr Ech Cheikh Taba', 'Hokr Ed Dahri', 'Houaich', 'Hrar', 'Ilat', 'Jdaidet Ej Joumeh', 'Jdaidet El Qayteaa', 'Jebrayel ', 'Karm Aasfour ', 'Karm Zebdine', 'Kfar Harra', 'Kfar Melki ', 'Kfar Noun', 'Kfar Toun', 'Khirbet Char', 'Khirbet Daoud ', 'Khreibeh', 'Khreibet Ej Jindi', 'Kneisseh ', 'Kouachra', 'Koucha', 'Koueikhat', 'Kroum Aarab', 'Machha', 'Machta Hammoud', 'Machta Hassan', 'Majdala ', 'Majdel Aakkar',
            'Mar Touma', 'Massaaoudiyeh', 'Mazraat Baldeh', 'Mazraat Beit Ghattas', 'Mazraat En Nahriyeh', 'Mchaylha', 'Mechmech ', 'Memneaa', 'Mhammara ', 'Minyara', 'Mounjez', 'Mounseh', 'Mqaybleh', 'Mqayteaa', 'Mrah El Khaoukh (Akroum)', 'Nahriyeh', 'Nfisseh', 'Noura El Faouqa', 'Noura Et Tahta', 'Ouadi Ej Jamous', 'Ouadi El Haour', 'Ouadi Khaled', 'Qaabrine', 'Qabaait', 'Qachlaq', 'Qantara ', 'Qarha ', 'Qarqaf', 'Qbaiyat ', 'Qboula', 'Qenia', 'Qleiaat ', 'Qloud El Baqieh', 'Qorneh ', 'Qoubbet Chamra', 'Qraiyat ', 'Rahbeh', 'Rama', 'Rihaniyeh ', 'Rmah', 'Rmoul', 'Saadine', 'Sahleh', 'Sammaqiyeh', 'Sammouniyeh', 'Sayssouq', 'Semmaqli', 'Sfinet Ed Draib', 'Sfinet El Qayteaa', 'Sindianet Zeidane', 'Souaisset Aakkar', 'Srar', 'Tacheaa', 'Tall Aabbas Ech Charqi', 'Tall Aabbas El Gharbi', 'Tall Bibi', 'Tall Bireh', 'Tall Hmayra', 'Tall Meaayane', 'Tallet Chattaha', 'Tikrit', 'Tleil', 'Zouarib', 'Zouq El Hassineh', 'Zouq El Hbalsa', 'Zouq El Moqachrine', 'Zouq Haddara'],


        "Alay": ["Ain Es Saydeh ", "Ain Ksour ", "Ain Trez", "Baaouerta", "Bayssour(Aaley)", "Bchamoun", "Bdadoun", "Bedghane", "Behouara", "Bhamdoun Ed Dayaa", "Bhamdoun El Mhatta", "Binnay", "Bkhichtay", "Blaybel", "Bmahray", "Bmakine", "Bou Zrideh", "Bsatine(Aaley)", "Bserrine", "Bsous", "Btalloun", "Btater", "Chanay", "Charoun", "Chartoun", "Chimlane", "Choueifat", "Daqqoun ", "Deir Qoubel", "Dfoun ", "Douair Er Remmane", "Ghaboun", "Habramoun", "Houmal", "Ighmid", "Jisr El Qadi", "Kahhaleh", "Keyfoun", "Kfar Aammay", "Kfar Matta", "Maasriti", "Majdel Baana", "Mansouriyeh(Aaley)", "Mazraat En Nahr", "Mecherfeh", "Mejdlaiya(Aaley)", "Mrayjat", "Qmatiyeh", "Ramlieh", "Richmaiya", "Rijmeh", "Rimhala", "Rouaysset En Naamane", "Saoufar", "Sarhmoul", "Selfaya", "Souq El Gharb", "Taazaniyeh"],

        "Baabda": ["Aaraiya ", "Aarbaniyeh", "Ain Er Roummaneh (Chiyah) ", "Ain Mouaffaq", "Arsoun", "Baabda", "Baalchmay ", "Bmaryam ", "Borj El Brajneh ", "Boutchay", "Bsaba (Baabda)", "Btekhnay", "Btibyat ", "Bzebdine", "Chbaniyeh ", "Chiyah", "Chouit", "Deir El Harf", "Deir Khouna ", "Deir Mar Elias Kahlouniyeh", "Dlaybeh ", "Falougha", "Fayadiyeh ", "Furn Ech Chebbak", "Ghbayreh", "Hadath (Baabda) ", "Hammana ", "Haret El Botm ", "Haret Es Sitt ", "Haret Hamzeh", "Haret Hreik ", "Hasbaiya El Matn", "Hazmiyeh (Baabda) ", "Hlaliyeh (Baabda) ", "Jouar El Haouz", "Jouret Arsoun ", "Kfar Chima", "Kfar Selouane ", "Khalouat Falougha ", "Khreibeh (Baabda) ", "Kneisseh (Baabda) ", "Laylakeh", "Louayzeh", "Merdacheh ", "Mreijeh ", "Ouadi Chahrour El Aaoulia ", "Ouadi Chahrour Es Soufla", "Qalaa (Baabda)", "Qobbayaa", "Qornayel", "Qortada ", "Qrayeh (Baabda) ", "Qsaibeh (Baabda)", "Qtaleh (Baabda) ", "Ras El Harf ", "Ras El Matn ", "Rouaysset El Ballout", "Salima (Baabda) ", "Sibnay", "Tahouitat El Ghadir ", "Tahouitet En Nahr ", "Tarchich", "Zandouqa"],


        "Baalbak": [ "Aallaq Et Tell", "Aansar (Baalbek)", "Aaqidiyeh", "Aarsal", "Aaynata (Baalbek)", "Ain (Baalbek)", "Ain Bourday", "Ain Es Saouda","Baalbek", "Barqa", "Bechouat", "Bednayel (Baalbek)", "Beit Chama", "Bouday","Brital", "Btedaai",
            "Chaat",
            "Chlifa",
            "Chmistar",
            "Dar El Ouassaa",
            "Deir El Ahmar",
            "Douris (Insar)",
            "Fekeheh",
            "Flaoueh",
            "Hadath (Baalbek)",
            "Ham",
            "Haouch Barada",
            "Haouch Ed Dahab",
            "Haouch En Nabi",
            "Haouch Er Rafqa",
            "Haouch Snaid",
            "Haouch Tall Safiyeh",
            "Haour Taala",
            "Harbata",
            "Harfouch",
            "Hizzine",
            "Hlabta",
            "Iaat",
            "Jabbouleh",
            "Jdaidet El Fekeheh",
            "Jebaa",
            "Jenta",
            "Joubbaniyeh",
            "Kfar Dabach",
            "Kfar Dane",
            "Khodr (Baalbek)",
            "Khreibeh (Baalbek)",
            "Kneisseh (Baalbek)",
            "Laboueh",
            "Maaraboun",
            "Majdaloun",
            "Maqneh",
            "Masnaa Ez Zohr",
            "Mazraat Al Souaydane",
            "Mazraat Beit Matar",
            "Mazraat Beit Mchaik",
            "Mazraat Beit Slaybi",
            "Mazraat Ed Dallil",
            "Mazraat Er Remassa",
            "Mazraat Es Sayed",
            "Mazraat Et Tout",
            "Mazraat Qold Es Sabaah",
            "Moqraq",
            "Nabha Ed Damdoum",
            "Nabha El Mehfara",
            "Nabha El Qeddam",
            "Nabi Chbat",
            "Nabi Chit",
            "Nabi Osmane",
            "Nabi Rchadeh",
            "Nahleh (Baalbek)",
            "Nouqra",
            "Ouadi Faara",
            "Qaa Baalbek",
            "Qalileh (Nabha)",
            "Qarha (Baalbek)",
            "Qsarnaba",
            "Ram (Baalbek)",
            "Ras Baalbek Ech Charqi",
            "Riha",
            "Saaideh",
            "Safra (Bechouat)",
            "Sbouba",
            "Serraaine El Faouqa",
            "Serraaine Et Tahta",
            "Sifri",
            "Souaneh (Nabha Ed Damdoum)",
            "Talia",
            "Taoufiqiyeh",
            "Taraya",
            "Taybeh (Baalbek)",
            "Temnine El Faouqa",
            "Temnine Et Tahta",
            "Tfail",
            "Yahfoufa",
            "Yammouneh",
            "Younine",
            "Zabboud",
            "Zrazir",],



        "Nabatiyeh": ["Aabb", "Aadchit Ech Chqif", 'Aarab Salim', 'Aazzi', 'Ain Bou Souar', "'Ain Qana'", "Arnoun", "Braiqeaa", "Charqiyeh", "Choukine", "Deir Ez Zahrani", "Douair", "	Habbouch", "Harouf", "Houmine El Faouqa", "Houmine Et Tahta", 'Insar', '	Jarjouaa', 'Jbaa', 'Jibchit', '	Kfar Fila', 'Kfar Roummane', 'Kfar Sir', '	Kfar Tibnit	Kfour', '	Mayfadoun', "Nabatiyeh El Faouqa", "Nabatiyeh Et Tahta", "Nmairiyeh", "Qaaqaiyet Ej Jisr", "Qsaibeh", "Roumine", "Sarba", "Sinneh", "Sir El Gharbiyeh", "Toul", "	Yohmor", "Zaoutar Ech Charqiyeh", "Zaoutar El Gharbiyeh", "Zefta", "Zibdine"],

        "Batroun":
         ["Aabdelli",
        "Aabrine ",
        "Aalali",
        "Aaoura",
        "Aartiz",
        "Assia ",
        "Batroun ",
        "Bcheaali",
        "Bechtoudar",
        "Beit Chlala ",
        "Bijdarfil ",
        "Boqsmaiya ",
        "Chatine ",
        "Chekka",
        "Chibtine",
        "Daael ",
        "Dahr Abi Yaghi",
        "Darya ",
        "Deir Billa",
        "Douma ",
        "Douq",
        "Eddeh (Batroun) ",
        "Ftahat",
        "Ghouma",
        "Hadtoun ",
        "Hamat ",
        "Harbouna",
        "Hardine ",
        "Heri",
        "Hilta ",
        "Ijdabra ",
        "Jebla ",
        "Jrabta",
        "Jrane ",
        "Kfar Aabida ",
        "Kfar Hatna",
        "Kfar Hay",
        "Kfar Hilda",
        "Kfar Shlaimane",
        "Kfifane ",
        "Kfour El Aarbi",
        "Koubba",
        "Kour",
        "Mar Mama",
        "Masrah",
        "Mehmarch",
        "Mrah Chdid",
        "Mrah El Hajj",
        "Mrah Ez Ziyat ",
        "Nahla ",
        "Niha (Batroun)",
        "Ouajh El Hajar",
        "Ouata Houb",
        "Qandoula",
        "Racha ",
        "Rachana ",
        "Rachkida",
        "Rachkiddeh",
        "Ram ",
        "Ras Nahhach ",
        "Selaata ",
        "Sghar ",
        "Smar Jbeil",
        "Sourat",
        "Tannourine El Faouqa",
        "Tannourine Et Tahta ",
        "Thoum ",
        "Toula ",
        "Zane",
        ],




        "Bchareeh": ["Aabdine (Bcharreh)",
        "Bane",
        "Bazaaoun",
        "Bcharreh",
        "Beit Menzer",
        "Berhalioun",
        "Billa",
        "Blaouza",
        "Bqaa Kafra",
        "Bqerqacha",
        "Breissat",
        "Dimane",
        "Hadath Ej Joubbeh",
        "Hadchit",
        "Hasroun",
        "Mazraat Aassaf",
        "Mazraat Bani Saab",
        "Mchaa Ej Joubbeh",
        "Moghr El Ahoual",
        "Ouadi Qannoubine",
        "Qnat",
        "Qnayouer",
        "Tourza",
        ],




        "Bent jbeil": ["Aayta Ej Jabal (Zott)  ",
        "Aaytaroun  ",
        "Ain Ebel  ",
        "Baraachit  ",
        "Beit Lif  ",
        "Beit Yahoun ",
        "Bent Jbeil ",
        "Borj Qalaouiyeh ",
        "Chaqra ",
        "Debl  ",
        "Deir Ntar  ",
        "Froun  ",
        "Ghandouriyeh  ",
        "Haddatha  ",
        "Hanine ",
        "Hariss ",
        "Jmaijmeh  ",
        "Kafra (Bent Jbeil) ",
        "Kfar Dounine  ",
        "Khirbet Selm  ",
        "Kounine ",
        "Maroun Er Ras  ",
        "Qalaouiyeh ",
        "Qaouzah ",
        "Rachaf ",
        "Ramiyeh ",
        "Rmaych (Bent Jbeil) ",
        "Safad El Battikh  ",
        "Soultaniyeh ",
        "Srobbine  ",
        "Tibnine ",
        "Tiri  ",
        "Yaroun (Bent Jbeil) ",
        "Yater",
        ],





        "Beqaa Ouest": ["Aammiq (Beqaa Ouest)",
        "Aana",
        "Aaytanit",
        "Ain Et Tineh (Beqaa Ouest)",
        "Ain Zebdeh",
        "Baaloul (Beqaa Ouest)",
        "Bab Mareaa",
        "Chebrqiyet Aammiq",
        "Dakoueh",
        "Deir Tahniche",
        "Ghazzeh",
        "Haouch El Harimeh",
        "Harimeh Es Soughra",
        "Jazira (Beqaa Ouest)",
        "Joubb Jannine",
        "Kamed El Laouz",
        "Kefraiya (Beqaa Ouest)",
        "Khiara",
        "Khiara El Aatiqa",
        "Khirbet Qanafar",
        "Lala",
        "Libbaya",
        "Loussia",
        "Machghara",
        "Manara-Hammara",
        "Mansoura (Beqaa Ouest)",
        "Marj (Beqaa Ouest)",
        "Maydoun",
        "Ouaqf (Beqaa Ouest)",
        "Qaraaoun",
        "Qelaya",
        "Raouda (Istabel)",
        "Saghbine",
        "Saouiri",
        "Sohmor",
        "Soultan Yaaqoub",
        "Soultan Yaaqoub Aradi",
        "Yohmor (Beqaa Ouest)",
        "Zilaya",
        ],





        
        "Chouf": ["Aalmane",
        "Aammatour ",
        "Aammiq ()  ",
        "Aanout ",
        "Aathrine ",
        "Ain El Assad ",
        "Ain El Haour  ",
        "Ain Ouzain   ",
        "Ain Qani    ",
        "Ain Zhalta   ",
        "Ainbal   ",
        "Baadarane    ",
        "Baaqline    ",
        "Baassir   ",
        "Barja    ",
        "Barouk   ",
        "Bater    ",
        "Batloun   ",
        "Bayqoun   ",
        "Bchetfine    ",
        "Beit Ed Dine    ",
        "Benouati    ",
        "Beqaata   ",
        "Bettal   ",
        "Bireh ()    ",
        "Bkifa    ",
        "Botmeh   ",
        "Bourjein    ",
        "Brih    ",
        "Bsaba ()    ",
        "Chammis   ",
        "Chhim    ",
        "Chourit   ",
        "Dahr El Mghara   ",
        "Dalhoun   ",
        "Damour   ",
        "Daraiya ()   ",
        "Deir Baba    ",
        "Deir Dourit   ",
        "Deir El Qamar    ",
        "Deir Koucheh    ",
        "Dibbiyeh    ",
        "Dmit    ",
        "Faouarat Jaafar   ",
        "Fraydis ()   ",
        "Gharifeh    ",
        "Haret Baassir    ",
        "Haret En Naameh   ",
        "Haret Jandal    ",
        "Hasrout   ",
        "Jadra    ",
        "Jahliyeh    ",
        "Jbaa ()   ",
        "Jdaideh ()   ",
        "Jiyeh    ",
        "Jleiliyeh    ",
        "Jmailiyeh    ",
        "Joun    ",
        "Kahlouniyeh ()   ",
        "Ketermaya    ",
        "Kfar Faqoud   ",
        "Kfar Hay ()   ",
        "Kfar Him    ",
        "Kfar Nabrakh    ",
        "Kfar Niss    ",
        "Kfar Qatra   ",
        "Khirbet Bisri    ",
        "Khreibeh ()   ",
        "Klilayeh    ",
        "Kneisseh ()   ",
        "Maaniyeh    ",
        "Maasser Beit Ed Dine    ",
        "Maasser Ech     ",
        "Majdalouna   ",
        "Majdel El Meouch    ",
        "Marj Barja   ",
        "Marjiyat    ",
        "Mazboud   ",
        "Mazmoura    ",
        "Mazraa ()    ",
        "Mazraat Ed Dahr   ",
        "Mazraat El Barghoutiyeh   ",
        "Mechref   ",
        "Mghayriyeh   ",
        "Mohteqra    ",
        "Moukhtara    ",
        "Mristi   ",
        "Mtolleh   ",
        "Naameh   ",
        "Niha    ",
        "Ouadi Bnehlay    ",
        "Ouadi Deir Dourit    ",
        "Ouadi Ed Deir    ",
        "Ouadi Es Sitt    ",
        "Ouardaniyeh   ",
        "Ouarhaniyeh   ",
        "Rmeileh ()   ",
        "Semqaniyeh   ",
        "Sibline   ",
        "Sirjbal   ",
        "Zaarouriyeh",
        ],


        "Hasbiaya": ["Ain Jarfa",
        "Ain Qinia",
        "Bourghos",
        "Chebaa",
        "Chouaya",
        "Dellafi",
        "Fardis",
        "Hasbaiya",
        "Hebbariyeh",
        "Kaoukaba",
        "Kfar Chouba",
        "Kfar Hamam",
        "Kfayr Ez Zait",
        "Khalouat",
        "Majidiyeh",
        "Marj Ez Zouhour (Dnaibeh)",
        "Meri",
        "Mimess",
        "Rachaiya El Foukhar",
        ],



        "Hermel": ["Beit Et Tachm",
        "Bouayda (Hermel)",
        "Boustane (Hermel)",
        "Brissa",
        "Charbine El Hermel",
        "Chouaghir El Faouqa",
        "Chouaghir Et Tahta",
        "Fissane",
        "Haouch Es Sayed Aali",
        "Haret El Maasser",
        "Hariqa (Hermel)",
        "Hermel",
        "Hmaireh (Hermel)",
        "Jouar El Hachich",
        "Kharayeb (Hermel)",
        "Kouakh",
        "Maaysra (Hermel)",
        "Mazraat El Fqih",
        "Mazraat Sejoud (Hermel)",
        "Mrah El Qorneh",
        "Mrah Es Souaisseh",
        "Mrah Ez Zouaitineh ",
        "Mrah Ras El Ain",
        "Ouadi Bnit",
        "Ouadi El Aaoss",
        "Ouadi El Karm (Hermel)",
        "Ouadi En Nayra",
        "Ouadi Er Ratl",
        "Ouadi Et Tourkmane",
        "Qanafez",
        "Qasr (Hermel)",
        "Sahlat El May",
        "Zighrine El Hermel",
        "Footer menu",
        ],



        "Jbeil": ["Aabaydat",
        "Aalmat",
        "Aalmat Ech Chmaliyeh",
        "Aalmat Ej Jnoubiyeh",
        "Aamchit",
        "Aannaya",
        "Aaqoura",
        "Aarasta",
        "Adonis",
        "Afqa",
        "Ain Ed Delbeh",
        "Ain El Ghouaybeh",
        "Ain Jrain",
        "Ain Kfaa",
        "Bazyoun",
        "Bchilleh",
        "Behdaydat",
        "Beit Habbaq",
        "Bejjeh",
        "Bekhaaz",
        "Berbara",
        "Bichtlida",
        "Bintaael",
        "Blat",
        "Chamate",
        "Chikhane",
        "Chmout",
        "Deir Ain Ej Jaouzeh",
        "Deir El Qottara",
        "Dmalsa",
        "Eddeh",
        "Ehmej",
        "Fatreh",
        "Ferhet",
        "Fghal",
        "Fidar",
        "Frat",
        "Ghalboun",
        "Gharzouz",
        "Ghorfine",
        "Habil",
        "Halate",
        "Haqel",
        "Hdayneh",
        "Hjoula",
        "Hosrayel",
        "Hsarat",
        "Hsoun",
        "Jaj",
        "Janneh",
        "Jbeil",
        "Jeddayel",
        "Jlisseh",
        "Kafr",
        "Kfar Baal",
        "Kfar Kiddeh",
        "Kfar Masshoun",
        "Kfoun",
        "Kharbet",
        "Laqlouq",
        "Lassa",
        "Lehfed",
        "Maad",
        "Majdel",
        "Mar Sarkis",
        "Mayfouq",
        "Mazraat Es Siyad",
        "Mchane",
        "Mechmech",
        "Mghayreh",
        "Mounsef",
        "Mzarib",
        "Nahr Ibrahim",
        "Qahmez",
        "Qartaba",
        "Qorqraiya",
        "Qottara",
        "Ramoute",
        "Ras Osta",
        "Rihaneh",
        "Rouaiss",
        "Saqi Richmaya",
        "Saqiet El Khayt",
        "Seraaita",
        "Souaneh",
        "Tartij",
        "Tourzaiya",
        "Yanouh",
        "Zibdine",
        "Footer menu",
        ],









        "Jezzine": ["Aaramta",
        "Aaray",
        "Aaychiyeh",
        "Aazour",
        "Ain El Mir",
        "Ain Majdalayne",
        "Anane",
        "Bayssour (Jezzine)",
        "Benouati (Jezzine)",
        "Bhannine",
        "Bisri",
        "Bkassine",
        "Bouslaya",
        "Bteddine El Liqch",
        "Choualiq",
        "Chqedif",
        "Deir Qattine ",
        "Ghabbatiyeh",
        "Harf",
        "Hassaniyeh",
        "Haytouleh",
        "Haytoura",
        "Hidab",
        "Homsiyeh",
        "Jarmaq",
        "Jernaya",
        "Jezzine",
        "Karkha",
        "Kfar Falous",
        "Kfar Houneh",
        "Kfar Jarra",
        "Kfar Taala",
        "Lebaa",
        "Louayzeh (Jezzine)",
        "Machmoucheh",
        "Maknouniyeh",
        "Mazraat El Mathane",
        "Mharbiyeh",
        "Midane",
        "Mjeydil (Jezzine)",
        "Mlikh",
        "Mrah El Habasse",
        "Ouadi Baanqoudain",
        "Ouadi El Laymoun",
        "Ouadi Jezzine",
        "Qatrani",
        "Qaytouli",
        "Qtaleh (Jezzine)",
        "Rihane (Jezzine)",
        "Rimat",
        "Roum",
        "Sabbah",
        "Saydoun",
        "Sejoud",
        "Sfaray",
        "Snaiya",
        "Srayri",
        "Taaid",
        "Zhilta",
        ],



        "Kesrouane": ["Aabri",
        "Aachqout",
        "Aajaltoun",
        "Aaqaybeh",
        "Aaramoun",
        "Aazra Ouel Aazr",
        "Adma Oua Dafneh",
        "Ain Ed Delbeh",
        "Ain Er Rihaneh",
        "Aintoura",
        "Ballouneh",
        "Batha",
        "Beqaatet Aachqout",
        "Beqaatet Kanaane",
        "Bizhel",
        "Bouar",
        "Bqaatouta",
        "Bzoummar",
        "Chahtoul",
        "Chnanaair",
        "Chouane",
        "Daraaoun",
        "Daraiya (Kesrouane)",
        "Dlebta",
        "Faraya",
        "Fatqa",
        "Faytroun",
        "Ghabat",
        "Ghazir",
        "Ghbaleh",
        "Ghidras",
        "Ghineh",
        "Ghosta",
        "Harharaya",
        "Harissa",
        "Hayata",
        "Hbaline",
        "Hrajel",
        "Hsayn",
        "Ighbeh",
        "Jaaita",
        "Jdaidet Ghazir",
        "Jounieh",
        "Jouret Bedrane",
        "Jouret Et Termos",
        "Jouret Mhad",
        "Kfar Dibiane",
        "Kfar Jrayf",
        "Kfar Tay",
        "Kfar Yassine",
        "Kfour",
        "Maarab",
        "Maaysra",
        "Mayrouba",
        "Mradiyeh",
        "Nahr Ed Dahab",
        "Nammoura",
        "Ouata Ej Jaouz",
        "Qattine",
        "Qleiaat",
        "Raachine",
        "Rayfoun",
        "Safra",
        "Sehayleh",
        "Tabarja",
        "Yahchouch",
        "Zaaitreh",
        "Zaitoun",
        "Zouk Mkayel",
        "Zouk Mosbeh",
        "Footer menu",
        ],






        "Koura": ["Aaba",
        "Aafsdiq",
        "Ain Aakrine",
        "Amioun",
        "Badbhoun",
        "Barghoun",
        "Barsa",
        "Batroumine",
        "Bdebba",
        "Bechmizzine",
        "Bednayel (Koura)",
        "Bhabbouch",
        "Bkeftine",
        "Bnehran",
        "Bohsas",
        "Bsarma",
        "Btaaboura",
        "Bterram",
        "Btouratij",
        "Bziza",
        "Dahr El Ain",
        "Dar Baaechtar",
        "Dar Chmizzine",
        "Deddeh",
        "Enfeh",
        "Fiaa",
        "Haret El Khasseh",
        "Ijdaabrine",
        "Kaftoun",
        "Kefraiya (Koura)",
        "Kfar Aaqqa",
        "Kfar Hata (Koura)",
        "Kfar Hazir",
        "Kfar Qahel",
        "Kfar Saroun (Koura)",
        "Kousba",
        "Majdel (Koura)",
        "Metrit",
        "Nakhleh",
        "Qalhat",
        "Ras Masqa",
        "Rechdibbine",
        "Zakroun",
        "Zgharta El Mtaouileh",
        
        ],



        "Marjaayoun": ["Aadaysseh",
        "Aadchit (Qoussair)",
        "Aalmane",
        "Aamra",
        "Ain Aarab",
        "Bani Haiyane",
        "Blat (Marjaayoun)",
        "Blida",
        "Borj El Mlouk",
        "Bouayda",
        "Deir Mimas",
        "Deir Siriane",
        "Dibbine",
        "Houla",
        "Ibl Es Saqi",
        "Jdaideh (Marjaayoun)",
        "Kfar Kila",
        "Khiyam",
        "Majdel Selm",
        "Markaba",
        "Mazraat Sarada",
        "Meiss Ej Jabal",
        "Mhaibib",
        "Ouazzani",
        "Qabrikha",
        "Qantara",
        "Qlaiaa (Marjaayoun)",
        "Qoussair",
        "Rabb Et Talatine",
        "Souaneh (Marjaayoun)",
        "Talloussa",
        "Taybeh (Marjaayoun)",
        "Touline",
        ],



       "Matn": ["Aamaret Chalhoub",
       "Aatchaneh",
       "Aayoun (Matn)",
       "Aayroun",
       "Abou Mizane",
       "Ain Aalaq",
       "Ain Aar",
       "Ain El Kharroubeh",
       "Ain El Qabou",
       "Ain Es Sindianeh",
       "Ain Es Sofsaf",
       "Ain Et Teffaha",
       "Ain Ez Zeitouneh",
       "Ain Saadeh",
       "Aintoura (Matn)",
       "Antelias",
       "Baabdat",
       "Baouchriyeh",
       "Baskinta",
       "Beit Chabab",
       "Beit Ech Chaar",
       "Beit El Kekko",
       "Beit Meri",
       "Bhersaf",
       "Bikfaya",
       "Bnabil",
       "Borj Hammoud",
       "Bqennaya",
       "Broummana",
       "Bsalim",
       "Bteghrine",
       "Byaqout",
       "Chaouiyeh El Qnaytra",
       "Chouaya",
       "Choueir",
       "Chrine",
       "Dahr El Hossein",
       "Dahr Es Souane",
       "Daychouniyeh",
       "Dbayeh",
       "Deir Chamra",
       "Deir Mar Roukoz",
       "Deir Tamich",
       "Dekouaneh",
       "Dik El Mehdi",
       "Douar (Matn)",
       "Fanar",
       "Fraykeh",
       "Ghabeh",
       "Ghabet Bolonia",
       "Himlaya",
       "Jall Ed Dib",
       "Jdaidet El Matn",
       "Jouar",
       "Jouret El Ballout",
       "Kfar Aaqab",
       "Kfar Tay (Matn)",
       "Khallet El Mtain",
       "Khinchara",
       "Machrah",
       "Majdel Tarchich",
       "Majzoub",
       "Mansouriyeh",
       "Mar Boutros Karm Et Tine",
       "Mar Chaaya",
       "Mar Mikhayel Bnabil",
       "Mar Moussa Ed Douar",
       "Mar Youssef",
       "Marjaba",
       "Masqa",
       "Mayasseh",
       "Mazraat Deir Aaoukar",
       "Mazraat El Hadira",
       "Mazraat Yachouaa",
       "Mchikha",
       "Mhaiydseh",
       "Mkalles",
       "Mrouj",
       "Mtain",
       "Mtayleb",
       "Nabay",
       "Naqqach",
       "Ouadi Chahine",
       "Ouadi El Karm",
       "Ouata El Mrouj",
       "Qaaqour",
       "Qennabet Broummana",
       "Qennabet Salima",
       "Qornet Chehouane",
       "Qornet El Hamra",
       "Rabiyeh",
       "Roumieh",
       "Sadd El Baouchriyeh",
       "Saqiet El Misk",
       "Sfaileh (Baabdat)",
       "Sinn El Fil",
       "Zabbougha",
       "Zakrit",
       "Zalqa",
       "Zaraaoun",
       "Zighrine",
       "Zouq El Kharab",
       ],





    "Manieh-Danniyeh": ["Aassoun",
    "Aaymar",
    "Aazqai",
    "Afqa (Minieh-Danniyeh)",
    "Ain Et Tineh (Minieh-Danniyeh)",
    "Bakhaaoun",
    "Bakoura",
    "Bchennata",
    "Beddaoui",
    "Behouaita",
    "Beit El Faqs",
    "Beit Haouik",
    "Bhannine (Minieh-Danniyeh)",
    "Borj El Yahoudiyeh",
    "Bqaa Safrine",
    "Bqarsouna",
    "Btermaz",
    "Debaael ",
    "Deir Aammar",
    "Deir Nbouh",
    "Haouara",
    "Haql El Aazimeh",
    "Harf Es Sayad",
    "Hazmiyeh (Minieh-Danniyeh)",
    "Izal",
    "Jayroun",
    "Kaff El Malloul",
    "Karm El Mohr",
    "Kfar Bebnine",
    "Kfar Chellane (Minieh-Danniyeh)",
    "Kfar Habou",
    "Kharnoub",
    "Markebta",
    "Mazraat Aartoussi",
    "Mazraat El Kreym",
    "Minieh",
    "Mrah Es Sfireh",
    "Mrah Es Srayj",
    "Nabi Youcheaa",
    "Nimrine",
    "Ouadi En Nahleh",
    "Qarhaiya",
    "Qarsaita",
    "Qattine (Minieh-Danniyeh)",
    "Qemmamine",
    "Raouda (Minieh-Danniyeh)",
    "Rihaniyeh",
    "Sfireh",
    "Sir",
    "Tarane",
    "Terbol (Minieh-Danniyeh)",
    "Zghartaghrine",
    ],

    "Rachiaya": ["Aaqabet Rachaiya",
    "Aayha",
    "Aayta El Foukhar",
    "Ain Aarab (Rachaiya)",
    "Ain Aata",
    "Ain Horcheh",
    "Bakka",
    "Bakkifa (Rachaiya)",
    "Beit Lahia",
    "Bireh (Rachaiya)",
    "Dahr El Ahmar",
    "Deir El Aachayer",
    "Haouch El Qinnaabeh (Rachaiya)",
    "Heloueh",
    "Kaoukaba (Rachaiya)",
    "Kfar Denis",
    "Kfar Michki",
    "Kfar Qouq",
    "Khirbet Rouha",
    "Majdel Balhis",
    "Mazraat Selsata",
    "Mdoukha",
    "Mhaiydseh (Rachaiya)",
    "Rachaiya",
    "Rafid (Rachaiya)",
    "Tannoura",
    "Yanta",
    ],


    "Saida": ["Aabra",
    "Aaddoussiyeh",
    "Aadloun",
    "Aanqoun",
    "Aaqtanit (Saida)",
    "Aarab Ej Jall",
    "Aarab Tabbaya",
    "Ain Ed Delb",
    "Arzai",
    "Babliyeh",
    "Barti",
    "Bissariyeh",
    "Bnaafoul",
    "Bqosta",
    "Bramiyeh",
    "Darb Es Sim",
    "Erkay",
    "Ghassaniyeh",
    "Ghaziyeh",
    "Hajjeh",
    "Haret Saida",
    "Hlaliyeh (Saida)",
    "Insariyeh",
    "Kaouthariyet Es Siyad",
    "Kefraiya (Saida)",
    "Kfar Beit",
    "Kfar Chellal (Saida)",
    "Kfar Hatta",
    "Kfar Melki (Saida)",
    "Kharayeb (Saida)",
    "Khartoum",
    "Khzaiz",
    "Loubieh",
    "Maamariyeh",
    "Maghdoucheh",
    "Majdelyoun",
    "Mazraat El Qnaytra",
    "Mazraat Jinjlaya",
    "Merouaniyeh",
    "Miyeh Ou Miyeh",
    "Najjariyeh",
    "Qaaqaaiyet Es Snaoubar",
    "Qennarit",
    "Qraiyeh",
    "Saida",
    "Saksakiyeh",
    "Salhiyeh (Saida)",
    "Sarafand",
    "Tanbourit",
    "Teffahta",
    "Zeghdraiya",
    "Zeita",
    "Zrariyeh",
    ],




    "Sour": ["Aabbassiyeh",
    "Aalma Ech Chaab",
    "Aaytit",
    "Ain Abou Abdallah",
    "Ain Baal (Sour)",
    "Arzoun",
    "Baflay",
    "Barich",
    "Batoulay",
    "Bazouriyeh",
    "Bedias",
    "Bestiyat",
    "Biyad",
    "Borj Ech Chemali",
    "Borj Rahhal",
    "Bourgheliyeh",
    "Boustane",
    "Chaaitiyeh",
    "Chabriha",
    "Chamaa",
    "Chehabiyeh",
    "Chehour",
    "Chihine",
    "Debaal",
    "Deir Aames",
    "Deir Kifa (Sour)",
    "Deir Qanoun El Ain",
    "Deir Qanoun En Nahr",
    "Derdghaya",
    "Dhayra",
    "Halloussiyeh",
    "Hanaouay (Sour)",
    "Henniyeh",
    "Hmairi",
    "Jbal El Botm",
    "Jennata",
    "Jibbain",
    "Jouaiya",
    "Kneisseh",
    "Maarakeh",
    "Maaroub",
    "Mahrouna",
    "Majdel Zoun",
    "Malkiyet Es Sahel",
    "Mansouri",
    "Mazraat Ain Ez Zarqa",
    "Mazraat El Mechref",
    "Mazraat Ez Zalloutieh",
    "Merouahine",
    "Mjadel",
    "Naffakhiyeh",
    "Naqoura",
    "Ouadi Jilo",
    "Qana",
    "Qlaileh",
    "Recheknanay",
    "Rmadiyeh",
    "Saddiqine",
    "Selaa",
    "Smaiyeh",
    "Sour",
    "Srifa",
    "Tayr Debba",
    "Tayr Falsay",
    "Tayr Harfa",
    "Toura",
    "Yanouh (Sour)",
    "Yarine",
    "Zebqine",
    ],




    "Tripoli": ["Mina","Qalamoun","Tripoli"],




    "Zahle": ["Aali En Nahri",
    "Aanjar (Haouch Moussa)",
    "Ablah",
    "Ain Kfar Zabad",
    "Barr Elias",
    "Bouarej",
    "Chtaura",
    "Dalhamiyeh",
    "Deir El Ghazal",
    "Fourzol",
    "Haouch El Ghanam",
    "Haouch Hala",
    "Haret El Fikani",
    "Hazerta",
    "Jalala",
    "Jdita",
    "Karmeh (Qommol)",
    "Kfar Zabad",
    "Majdel Aanjar",
    "Makseh",
    "Massa",
    "Mrayjat (Zahleh)",
    "Nabi Ayla",
    "Nasriyeh",
    "Niha (Zahleh)",
    "Ouadi Ed Delm",
    "Qaa Er Rim",
    "Qabb Elias",
    "Qoussaya",
    "Raait",
    "Riyaq",
    "Saadnayel",
    "Taalabaya",
    "Taanayel",
    "Tall El Akhdar",
    "Terbol (Zahleh)",
    "Touayteh",
    "Zahleh",
    "Zahleh El Maallaqa ",
    ],




    "Zgharta": ["Aachach",
    "Aaintourine",
    "Aalma",
    "Aarbet Qouzhaiya",
    "Aarjes",
    "Ardeh",
    "Aslout",
    "Asnoun",
    "Aytou",
    "Baslouqit",
    "Bchannine",
    "Beit Aabeid",
    "Beit Aaoukar",
    "Bhayri",
    "Bneshaai",
    "Boussit",
    "Bsebaal",
    "Daraiya (Zgharta)",
    "Ehden",
    "Ejbaa",
    "Hailane",
    "Haret El Faouar",
    "Harf (Ardeh)",
    "Harf (Miziara)",
    "Hariq Zgharta",
    "Hmaiss",
    "Iaal",
    "Karm Saddeh",
    "Kefraiya (Zgharta)",
    "Kfar Chakhna",
    "Kfar Dlaqous",
    "Kfar Fou",
    "Kfar Haoura",
    "Kfar Hata (Zgharta)",
    "Kfar Sghab",
    "Kfar Yachit",
    "Kfar Zeina",
    "Mazraat El Fradis",
    "Mazraat En Nahr",
    "Mazraat Et Teffah",
    "Mazraat Haouqa",
    "Mejdlaiya (Zgharta)",
    "Miriata",
    "Miziara",
    "Qadriyeh",
    "Qarah Bach",
    "Rachaaine",
    "Ras Kifa",
    "Sakhra",
    "Sebaal",
    "Seraal",
    "Toula Ej Joubbeh",
    "Zgharta",
    ],




    },

}
window.onload = function () {
    var countySel = document.getElementById("countySel"),
        stateSel = document.getElementById("stateSel"),
        districtSel = document.getElementById("districtSel");
    for (var country in stateObject) {
        countySel.options[countySel.options.length] = new Option(country, country);
    }
    countySel.onchange = function () {
        stateSel.length = 1; // remove all options bar first
        districtSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done
        for (var state in stateObject[this.value]) {
            stateSel.options[stateSel.options.length] = new Option(state, state);
        }
    }
    countySel.onchange(); // reset in case page is reloaded
    stateSel.onchange = function () {
        districtSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done
        var district = stateObject[countySel.value][this.value];
        for (var i = 0; i < district.length; i++) {
            districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
        }
    }
} 

