// PAGE SWITCHING LOGIC
const menuItems = document.querySelectorAll('.sidebar ul li');
const pages = document.querySelectorAll('.page');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const pageId = item.getAttribute('data-page');
        
        if(pageId === 'logout'){
            alert('Logout ho gaye!');
            window.location.href = 'index.html'; // wapas main site pe
            return;
        }

        menuItems.forEach(i => i.classList.remove('active'));
        pages.forEach(p => p.classList.remove('active'));

        item.classList.add('active');
        document.getElementById(pageId).classList.add('active');
    });
});

// BAR CHART
const ctxBar = document.getElementById('barChart').getContext('2d');
new Chart(ctxBar, {
    type: 'bar',
    data: { labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{ label: 'Users', data: [12000, 19000, 15000, 25000, 22000, 30000, 28000], backgroundColor: '#29b6f6', borderRadius: 8 }]
    },
    options: { responsive: true, plugins: { legend: { display: false } } }
});

// PIE CHART
const ctxPie = document.getElementById('pieChart').getContext('2d');
new Chart(ctxPie, {
    type: 'doughnut',
    data: { labels: ['Direct', 'Social', 'Referral', 'Organic'],
        datasets: [{ data: [40, 25, 15, 20], backgroundColor: ['#0288d1', '#29b6f6', '#81d4fa', '#01579b'] }]
    },
    options: { responsive: true }
});

// LINE CHART
const ctxLine = document.getElementById('lineChart').getContext('2d');
new Chart(ctxLine, {
    type: 'line',
    data: { labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            { label: 'Sessions', data: [65, 59, 80, 81, 56, 90], borderColor: '#0288d1', tension: 0.4 },
            { label: 'Page Views', data: [28, 48, 40, 19, 86, 67], borderColor: '#ffeb3b', tension: 0.4 }
        ]
    },
    options: { responsive: true }
});


// PROFILE DROPDOWN TOGGLE
const profileBtn = document.getElementById('profileBtn');
const profileDropdown = document.getElementById('profileDropdown');

profileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    profileDropdown.classList.toggle('show');
});

window.addEventListener('click', () => {
    profileDropdown.classList.remove('show');
});

profileDropdown.querySelectorAll('a[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        document.querySelector(`.sidebar ul li[data-page="${pageId}"]`).click();
    })
});





         