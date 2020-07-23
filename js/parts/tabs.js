
//tabs main page
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.site_content'),
        tabContentTabs = document.querySelectorAll('.block_content'),
        zag = document.querySelector('.vps'),
        text = [
            'Центр IT-решений',
            'Продукты',
            'Услуги',
            'Монтаж СКС',
            'Контакты'
        ],
        ikon = document.querySelector('.site_content'),
        tabIkon = document.querySelectorAll('.click-me'),
        tabIkonTabs = document.querySelectorAll('.menu_button');

        console.log(tabIkonTabs);
        console.log(tabContentTabs)
          
    function hideTabContent(a = 1) {
         for (let i = a; i < tabContent.length; i++) {
             tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
         }
     }
    hideTabContent();

    function hideTabContent1(d = 1) {
        for (let i = d; i < tabContentTabs.length; i++) {
            tabContentTabs[i].classList.remove('show');
           tabContentTabs[i].classList.add('hide');
        }
    }
   hideTabContent1();

    function hideTabContent1(d = 1) {
        for (let i = d; i < tabContentTabs.length; i++) {
            tabContentTabs[i].classList.remove('show1');
           tabContentTabs[i].classList.add('hide1');
        }
    }
   hideTabContent1();


    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    function showTabContent1(d) {
        if (tabContentTabs[d].classList.contains('hide1')) {
            tabContentTabs[d].classList.remove('hide1');
            tabContentTabs[d].classList.add('show1');
        }
    }
  
    function changeZag(c) {
        zag.innerHTML=(text[c]);
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (i=0; i<tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    changeZag(i);
                    break;
                    
                } 
            }
        }
    });

    function changeZagIkon(d) {
        zag.innerHTML=(text[d]);
    }

    ikon.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('click-me')) {
            for (i=0; i<tabIkon.length; i++) {
                if (target == tabIkon[i]) {
                    hideTabContent(0);
                    showTabContent(i+1);
                    changeZagIkon(i+1);
                    break;                   
                } 
            }
        }            
    });
    
    let ikonShow = document.querySelector('.menu_block4');

    ikonShow.addEventListener('click', function(event) {
        let target = event.target;
            
        if (target && target.classList.contains('menu_button')){
            for (i=0; i<tabIkonTabs.length; i++) {
                if (target == tabIkonTabs[i]) {
                    hideTabContent1(0);
                    showTabContent1(i);
                    break;
                }
            }
        }
    });
