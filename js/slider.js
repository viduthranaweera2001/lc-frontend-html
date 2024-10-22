(function () {
    function init(item) {
        var items = item.querySelectorAll('li'),
            current = 0,
            autoUpdate = true,
            timeTrans = 4000;

        // Create nav
        var nav = document.createElement('nav');
        nav.className = 'nav_arrows';

        // Create button prev
        var prevbtn = document.createElement('button');
        prevbtn.className = 'prev';
        prevbtn.setAttribute('aria-label', 'Prev');

        // Create button next
        var nextbtn = document.createElement('button');
        nextbtn.className = 'next';
        nextbtn.setAttribute('aria-label', 'Next');

        // Create counter
        var counter = document.createElement('div');
        counter.className = 'counter';
        counter.innerHTML = "<span>1</span><span>" + items.length + "</span>";

        if (items.length > 1) {
            nav.appendChild(prevbtn);
            nav.appendChild(counter);
            nav.appendChild(nextbtn);
            item.appendChild(nav);
        }

        items[current].className = "current";
        if (items.length > 1) items[1].className = "next_slide";

        function navigate(dir) {
            items[current].className = "";

            if (dir === 'right') {
                current = current < items.length - 1 ? current + 1 : 0;
            } else {
                current = current > 0 ? current - 1 : items.length - 1;
            }

            var nextCurrent = (current + 1) % items.length; // Correctly set next
            var prevCurrent = (current - 1 + items.length) % items.length; // Correctly set previous

            items[current].className = "current";
            items[prevCurrent].className = "prev_slide";
            items[nextCurrent].className = "";

            // Update counter
            counter.firstChild.textContent = current + 1;
        }

        function autoSlide() {
            setInterval(function () {
                navigate('right');
            }, timeTrans);
        }

        // Add event listeners for buttons
        prevbtn.addEventListener('click', function () {
            navigate('left');
        });

        nextbtn.addEventListener('click', function () {
            navigate('right');
        });

        if (autoUpdate) autoSlide();
    }

    // Initiate the slider
    var slider = document.querySelector('.cd-slider');
    init(slider);
})();

