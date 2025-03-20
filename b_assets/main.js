document.addEventListener("DOMContentLoaded", () => {
    const ramBlock = document.querySelector(".ram p");
    const text = ramBlock.innerHTML; 
    ramBlock.innerHTML = "";  
  
    let index = 0;
  
    function typeWriter() {
      if (index < text.length) {
        ramBlock.innerHTML += text[index];
        index++;
        setTimeout(typeWriter, 40);  
      }
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && ramBlock.innerHTML === "") {
          typeWriter();
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(ramBlock);
  });
  


  setTimeout(() => {
    const loader = document.querySelector('.paloadr');
    const wrapper = document.querySelector('.wrapper');
  
    if (loader) {
        loader.style.transition = 'opacity 1s ease';
        loader.style.opacity = '0';

        setTimeout(() => {
            loader.remove();
            
            if (wrapper) {
                wrapper.style.opacity = '1';
                wrapper.style.display = 'block';
                wrapper.style.transition = 'opacity 1s ease';
            }
 
            const sections = document.querySelectorAll('section');
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active-section');
                    } else {
                        entry.target.classList.remove('active-section');
                    }
                });
            }, { threshold: 0.5 });

            sections.forEach(section => observer.observe(section));

        }, 1000);  
    }
}, 4000);

if(window.innerWidth <= 992){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints:{
            575:{
                slidesPerView: 1.5,
            }
        }
      });
}

document.addEventListener('DOMContentLoaded', function () {
    const sectionsBox = document.querySelectorAll('a, img, p, h1, h2, h3, li');
  
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);  
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 });
  
    sectionsBox.forEach((section, index) => {
      section.style.setProperty('--animation-delay', `${index * 0.1}s`);
      observer.observe(section);
    });
 
    
  });

  const icons = document.querySelector('.icon');
  const headerNav = document.querySelector('.header_link');
  const headerNavLink = headerNav.querySelectorAll('a');
  
  function toggleMenu() {
      icons.classList.toggle("open");
      headerNav.classList.toggle("active");  
  }
  
  icons.addEventListener('click', (event) => {
      event.stopPropagation();  
      toggleMenu();
  });
  
  headerNavLink.forEach(item => {
      item.addEventListener('click', () => {
          toggleMenu();
      });
  });
  
  document.addEventListener('click', (event) => {
      if (!headerNav.contains(event.target) && !icons.contains(event.target)) {
          icons.classList.remove("open");
          headerNav.classList.remove("active");
      }
  });

  const moveBlock = document.querySelector('.rigth_block ');
  const titleBlock = document.querySelector('h1')

  if (window.innerWidth <= 992){
    titleBlock.after(moveBlock)
  }