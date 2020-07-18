
//tabs main page
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.site_content'),
        zag = document.querySelector('.vps'),
        text = [
            'Главная',
            'ККТ и оборудование',
            'Обслуживание',
            'Монтаж СКС',
            'Контакты'
        ],
        ikon = document.querySelector('.site_content'),
        tabIkon = document.querySelectorAll('.click-me'),
        tabIkonTabs = document.querySelectorAll('.click-me-tab');
          
    function hideTabContent(a = 1) {
         for (let i = a; i < tabContent.length; i++) {
             tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
         }
     }
    hideTabContent();

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
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
    
    let ikonShow = document.querySelector('.site_contaner');

    ikonShow.addEventListener('click', function(event) {
        let target = event.target;
            
        if (target && target.classList.contains('click-me-tab')){
            for (i=0; i<tabIkonTabs.length; i++) {
                if (target == tabIkonTabs[i]) {
                    hideTabContent(0);
                    showTabContent(i+5);
                    break;
                }
            }
        }
    });
