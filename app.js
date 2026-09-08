/* ----------------------------------------------------
   Kaamil International University - Application Logic
   ---------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {

    // --- State and Route Content Database ---
    const routeContent = {
        'about-kaamil': {
            title: 'About Kaamil International University',
            lead: 'Established as a center of excellence, KIU integrates standard academic discipline with innovative exploration to produce leadership that matters.',
            customHTML: `
                <div class="dynamic-info-block">
                    <h3>Our Vision & Mission</h3>
                    <p>To be a premier global institution recognized for excellence in teaching, transformative research, and dedicated service. We aim to inspire and empower scholars to become ethical, productive, and creative members of society.</p>
                    <br>
                    <h3>Core Pillars</h3>
                    <ul style="margin-left: 20px; line-height: 1.8; color: var(--text-muted);">
                        <li><strong>Academic Rigor:</strong> Comprehensive syllabi designed to exceed global standards.</li>
                        <li><strong>Inclusive Community:</strong> A supportive campus hosting diverse cultures and talents.</li>
                        <li><strong>Community Engagement:</strong> Giving back through clinical medicine and agricultural development projects.</li>
                    </ul>
                </div>
            `
        },
        'academics': {
            title: 'Faculties & Academic Programs',
            lead: 'Explore our comprehensive range of undergraduate, postgraduate, and professional certificate programs across multiple disciplines.',
            customHTML: `
                <div class="dynamic-info-block">
                    <h3>Our Faculties</h3>
                    <p>KIU is organized into five core schools, each offering cutting-edge curricula tailored to emerging global markets:</p>
                    <br>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px;">
                        <div style="background: var(--bg-color); padding: 20px; border-radius: var(--border-radius); border: 1px solid var(--border-color);">
                            <h4 style="color: var(--accent-color); margin-bottom: 8px;">Faculty of Medicine</h4>
                            <p style="font-size: 0.85rem; color: var(--text-muted);">Leading training in clinical surgery, pharmacy, and nursing sciences.</p>
                        </div>

                        <div style="background: var(--bg-color); padding: 20px; border-radius: var(--border-radius); border: 1px solid var(--border-color);">
                            <h4 style="color: var(--accent-color); margin-bottom: 8px;">Bacherlor Of Clinical Medicine</h4>
                            <p style="font-size: 0.85rem; color: var(--text-muted);">A degree program that prepares students to diagnose, treat, and
                             prevent diseases while providing quality patient care.</p>
                        </div>

                        <div style="background: var(--bg-color); padding: 20px; border-radius: var(--border-radius); border: 1px solid var(--border-color);">
                            <h4 style="color: var(--accent-color); margin-bottom: 8px;">Bacherlor Of IT and Engineering</h4>
                            <p style="font-size: 0.85rem; color: var(--text-muted);">A degree program that equips students with skills in information technology, engineering, 
                            software development, and modern technological solutions.</p>

                        </div>
                        <div style="background: var(--bg-color); padding: 20px; border-radius: var(--border-radius); border: 1px solid var(--border-color);">
                            <h4 style="color: var(--accent-color); margin-bottom: 8px;">Bacherlor Of Public Health</h4>
                            <p style="font-size: 0.85rem; color: var(--text-muted);">A degree program that prepares students to promote health, prevent diseases, and 
                            improve the well-being of communities.</p>
                        </div>

                        <div style="background: var(--bg-color); padding: 20px; border-radius: var(--border-radius); border: 1px solid var(--border-color);">
                            <h4 style="color: var(--accent-color); margin-bottom: 8px;">Bacherlor Of Midwifery</h4>
                            <p style="font-size: 0.85rem; color: var(--text-muted);">A degree program that prepares students to provide safe and professional care to women during pregnancy, 
                            childbirth, and the postnatal period.</p>
                        </div>

                        <div style="background: var(--bg-color); padding: 20px; border-radius: var(--border-radius); border: 1px solid var(--border-color);">
                            <h4 style="color: var(--accent-color); margin-bottom: 8px;">Bacherlor Of Accounting</h4>
                            <p style="font-size: 0.85rem; color: var(--text-muted);">A degree program that equips students with skills in accounting, finance, and business management.</p>
                        </div>

                        <div style="background: var(--bg-color); padding: 20px; border-radius: var(--border-radius); border: 1px solid var(--border-color);">
                            <h4 style="color: var(--accent-color); margin-bottom: 8px;">Bacherlor Of Human Resource Management</h4>
                            <p style="font-size: 0.85rem; color: var(--text-muted);">A degree program that prepares students to manage employees, 
                            recruitment, training, performance, and organizational development.</p>
                        </div>
                    </div>
                </div>
            `
        },
        'research': {
            title: 'Research & Innovation Hub',
            lead: 'Promoting interdisciplinary research to solve local and global challenges, specializing in biomedical, public health, and ecological sciences.',
            customHTML: `
                <div class="dynamic-info-block">
                    <h3>Impact Highlights</h3>
                    <p>Our labs operate at the intersection of theory and execution. Currently, KIU hosts 4 active collaborative projects with European and American research syndicates.</p>
                    <br>
                    <h3>Featured Projects</h3>
                    <p><strong>Sustainable Arid Agriculture:</strong> Developing drought-resistant crop strains for the Horn of Africa.</p>
                    <p><strong>Genomics and Epidemics:</strong> Tracking malaria vectors using DNA sequence analysis.</p>
                </div>
            `
        },
        'health-medicine': {
            title: 'Health & Medicine Division',
            lead: 'Delivering stellar medical education and community clinics designed to raise health standards and clinical excellence across the region.',
            customHTML: `
                <div class="dynamic-info-block">
                    <h3>Teaching Hospitals & Partners</h3>
                    <p>Students gain invaluable clinical experience in our affiliated KIU Community Clinic and partner medical centers. We provide free healthcare camps, dental checkups, and optical solutions to local communities, combining learning with social good.</p>
                </div>
            `
        },
        'admission': {
            title: 'Admission & Enrollments 2026',
            lead: 'DIIWAANGELINTA ARDAYDA CUSUB WAA FURAN TAHAY!.',
            customHTML: `
                <div class="dynamic-info-block">
                    <h3>How to Apply</h3>
<p><strong>:</strong> 🌟 Haddii aad rajadaada iyo himiladaada ku haysato barashada Kuliyadda Daawada iyo Qalliinka (MBBS) 🩺👨‍⚕️👩‍⚕️, Kamil International University (KIU) 
                    waxay diyaar u tahay inay kaa caawiso sidii aad u gaari_lahayd_riyadaada_waxbarasho.</p>
                    <p><strong>📚🎓Fursaddaada ha lumin!</strong></p>
                    <p><strong>Kuliyadda Daawada & Qalliinka (MBBS):</strong> 👉 Isdiiwaangeli maanta oo bilow tallaabada koowaad ee safarkaaga caafimaad. </p>
                
                    <br>
                    <button class="btn btn-primary" href="#" data-url="https://vt.tiktok.com/ZSXL66TNP/"> Start Online Application</button>
                </div>
            `
        },
        'life-on-farm': {
            title: 'Life On The Farm - Agricultural Testbed',
            lead: 'Experience KIU\'s experimental farms, where students learn dairy processing, horticulture, and sustainable landscape management first-hand.',
            customHTML: `
                <div class="dynamic-info-block">
                    <h3>Active Farm Learning</h3>
                    <p>The KIU Farm is not just a campus space, but an interactive science laboratory. Students direct modern irrigation systems, analyze soil samples, and operate processing machines. Produce grown on campus is supplied directly to the student cafeteria and local farmer cooperatives.</p>
                </div>
            `
        },
        'admission-requirements': {
            title: 'Admission Requirements',
            lead: 'Review our criteria for high school credentials, transcripts, language competency, and grade point averages required for undergraduate and postgraduate enrollments.',
            customHTML: `
                <div class="dynamic-info-block">
                    <h3>Undergraduate Checklist</h3>
                    <ul style="margin-left: 20px; line-height: 1.8; color: var(--text-muted);">
                        <li>Secondary school completion certificate (GPA 2.5 or above).</li>
                        <li>Original academic transcripts.</li>
                        <li>Completed online KIU Application Form.</li>
                        <li>Valid national identification document or passport copy.</li>
                    </ul>
                </div>
            `
        },
        'tuition-fees': {
            title: 'Tuition Fees & Payments',
            lead: 'KIU maintains a highly transparent and affordable fee structure, offering instalment plans, credit adjustments, and corporate sponsorship routes.',
            customHTML: `
                <div class="dynamic-info-block">
                    <h3>Overview of Semestrial Fees (2026)</h3>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 0.9rem;">
                        <thead>
                            <tr style="background: var(--primary-color); color: var(--white); text-align: left;">
                                <th style="padding: 12px;">Faculty</th>
                                <th style="padding: 12px;">Credit Fee</th>
                                <th style="padding: 12px;">Semester Estimate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 12px;">Faculty of Medicine</td>
                                <td style="padding: 12px;">$45 / Credit</td>
                                <td style="padding: 12px;">$900</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 12px;">School of Agriculture</td>
                                <td style="padding: 12px;">$30 / Credit</td>
                                <td style="padding: 12px;">$600</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 12px;">Computer Science</td>
                                <td style="padding: 12px;">$35 / Credit</td>
                                <td style="padding: 12px;">$700</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `
        },
        'scholarships': {
            title: 'Scholarships & Merit Awards',
            lead: 'No academic talent should go unrecognized. KIU awards multiple tuition-waiver scholarships based on academic merit, research promise, and financial need.',
            customHTML: `
                <div class="dynamic-info-block">
                    <h3>Featured Scholarship Schemes</h3>
                    <p><strong>KIU Chancellor\'s Medal:</strong> 100% tuition-waiver for top-ranking national students.</p>
                    <p><strong>STEM Women Scholarship:</strong> Supporting female students enrolling in Engineering and Information Systems programs.</p>
                </div>
            `
        },
        'undergrad-prospectus': {
            title: 'Undergraduate Prospectus 2026',
            lead: 'Your complete directory guide to KIU\'s majors, credit structures, faculty profiles, and student support ecosystems.',
            customHTML: `
                <div class="dynamic-info-block" style="text-align: center; padding: 40px 0;">
                    <i class="fa-solid fa-file-pdf" style="font-size: 4rem; color: #E03131; margin-bottom: 20px;"></i>
                    <h3>Undergraduate Prospectus.pdf</h3>
                    <p style="margin-bottom: 24px;">Size: 8.4 MB | Last Updated: June 2026</p>
                    <button class="btn btn-primary" onclick="window.app.triggerMockDownload('Undergraduate Prospectus.pdf')">
                        <i class="fa-solid fa-download"></i> Start Download
                    </button>
                </div>
            `
        },
        'graduation-books': {
            title: 'Graduation Books & Annals',
            lead: 'Review our proud registry archives documenting honor rolls, dean\'s lists, graduation histories, and alumni records.',
            customHTML: `
                <div class="dynamic-info-block" style="text-align: center; padding: 40px 0;">
                    <i class="fa-solid fa-book" style="font-size: 4rem; color: var(--accent-color); margin-bottom: 20px;"></i>
                    <h3>KIU Graduation Book 2025.pdf</h3>
                    <p style="margin-bottom: 24px;">Size: 12.1 MB | Alumni Records & Photos</p>
                    <button class="btn btn-primary" onclick="window.app.triggerMockDownload('KIU Graduation Book 2025.pdf')">
                        <i class="fa-solid fa-download"></i> Start Download
                    </button>
                </div>
            `
        },
        'somali-business-review': {
            title: 'Somali Business Review (SBR)',
            lead: 'KIU\'s premier peer-reviewed journal highlighting economic trends, trade reports, business innovations, and entrepreneurship research.',
            customHTML: `
                <div class="dynamic-info-block" style="text-align: center; padding: 40px 0;">
                    <i class="fa-solid fa-feather-pointed" style="font-size: 4rem; color: var(--primary-color); margin-bottom: 20px;"></i>
                    <h3>SBR - Summer Edition 2026.pdf</h3>
                    <p style="margin-bottom: 24px;">Peer-reviewed studies on East African market integrations.</p>
                    <button class="btn btn-primary" onclick="window.app.triggerMockDownload('Somali Business Review Summer 2026.pdf')">
                        <i class="fa-solid fa-download"></i> Download Journal Edition
                    </button>
                </div>
            `
        },
        'kiu-reports': {
            title: 'KIU Annual Reports & Governance',
            lead: 'Read our institutional reviews, audit compliance reports, state evaluations, and strategic plans for the upcoming decade.',
            customHTML: `
                <div class="dynamic-info-block" style="text-align: center; padding: 40px 0;">
                    <i class="fa-solid fa-chart-line" style="font-size: 4rem; color: #0CA678; margin-bottom: 20px;"></i>
                    <h3>Annual Academic & Financial Report 2025.pdf</h3>
                    <p style="margin-bottom: 24px;">Transparent disclosures on research spend, grants, and capital updates.</p>
                    <button class="btn btn-primary" onclick="window.app.triggerMockDownload('KIU Annual Report 2025.pdf')">
                        <i class="fa-solid fa-download"></i> Download PDF Document
                    </button>
                </div>
            `
        },
        'news': {
            title: 'Kaamil News & Event Updates',
            lead: 'Browse announcements, event calendars, scholarly articles, and student achievements happening inside our campus community.',
            customHTML: `
                <div class="dynamic-info-block">
                    <h3>Recent Announcements</h3>
                    <p><strong>Campus Convocation:</strong> Graduation ceremony schedules are finalized for September 20, 2026.</p>
                    <p><strong>Clinical Research Grant:</strong> KIU Medical school receives WHO validation for rural healthcare survey systems.</p>
                </div>
            `
        },
        'privacy-policy': {
            title: 'Privacy Policy & Student Data Guidelines',
            lead: 'Information regarding the storage, collection, encryption, and institutional usage of student files, logs, and profile records.',
            customHTML: `<p>We safeguard your private data in strict compliance with international security and institutional registry policies.</p>`
        },
        'terms-of-service': {
            title: 'Terms of Service & Usage Agreements',
            lead: 'The rules, guidelines, student behavior handbook and digital portal requirements binding users of KIU online assets.',
            customHTML: `<p>Use of this portal is governed by the KIU Council Guidelines on Academic Integrity and Network Safety Standards.</p>`
        }
    };

    // --- DOM Selections ---
    const homeView = document.getElementById('home-view');
    const dynamicView = document.getElementById('dynamic-view');
    const breadcrumbCurrent = document.getElementById('breadcrumb-current');
    const dynamicTitle = document.getElementById('dynamic-title');
    const dynamicLead = document.getElementById('dynamic-lead');
    const dynamicCustomDetails = document.getElementById('dynamic-custom-details');
    const btnBackHome = document.getElementById('btn-back-home');

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');

    const extModal = document.getElementById('external-link-modal');
    const extUrlDisplay = document.getElementById('external-url-display');
    const modalCancel = document.getElementById('modal-cancel');
    const modalProceed = document.getElementById('modal-proceed');

    const searchInput = document.getElementById('search-input');
    const searchResultsDropdown = document.getElementById('search-results');

    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinksList = document.querySelector('.nav-links');

    const newsletterEmail = document.getElementById('newsletter-email');
    const newsletterBtn = document.getElementById('newsletter-btn');
    const toastContainer = document.getElementById('toast-container');

    // --- Dynamic Routing System ---
    function navigateTo(routeId) {
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Hide mobile menu if open
        navLinksList.classList.remove('active');
        mobileMenuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

        if (routeId === 'home') {
            // Animate view switch
            dynamicView.classList.remove('show');
            setTimeout(() => {
                dynamicView.style.display = 'none';
                homeView.style.display = 'block';
                // Trigger title animations
                const title = document.querySelector('.animate-title');
                if (title) {
                    title.style.animation = 'none';
                    title.offsetHeight; /* trigger reflow */
                    title.style.animation = null;
                }
            }, 300);
            window.location.hash = '';
            showToast('Returned to KIU Main Campus view.');
            return;
        }

        const data = routeContent[routeId];
        if (data) {
            homeView.style.display = 'none';
            dynamicView.style.display = 'block';

            // Populate content
            breadcrumbCurrent.textContent = routeId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            dynamicTitle.textContent = data.title;
            dynamicLead.textContent = data.lead;
            dynamicCustomDetails.innerHTML = data.customHTML || '';

            // Transition in
            setTimeout(() => {
                dynamicView.classList.add('show');
            }, 50);

            window.location.hash = `#/${routeId}`;
            showToast(`Loaded section: ${data.title}`);
        } else {
            // Default Hello World
            homeView.style.display = 'none';
            dynamicView.style.display = 'block';
            breadcrumbCurrent.textContent = routeId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            dynamicTitle.textContent = routeId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            dynamicLead.textContent = 'Hello World - custom section dynamic routing.';
            dynamicCustomDetails.innerHTML = `<div class="dynamic-info-block"><p>You clicked an interactive dynamic node "${routeId}". The system automatically routed you here, rendering a clean internal layout.</p></div>`;

            setTimeout(() => {
                dynamicView.classList.add('show');
            }, 50);

            window.location.hash = `#/${routeId}`;
            showToast(`Loaded: ${routeId}`);
        }
    }

    // --- Search Logic ---
    function performSearch(query) {
        searchResultsDropdown.innerHTML = '';
        if (!query.trim()) {
            searchResultsDropdown.style.display = 'none';
            return;
        }

        const matches = [];
        const cleanQuery = query.toLowerCase();

        // Include home view
        if ('home campus'.includes(cleanQuery)) {
            matches.push({ id: 'home', title: 'KIU Home Page', lead: 'Main campus landing site' });
        }

        // Loop databases
        for (const [key, value] of Object.entries(routeContent)) {
            if (value.title.toLowerCase().includes(cleanQuery) || value.lead.toLowerCase().includes(cleanQuery)) {
                matches.push({ id: key, title: value.title, lead: value.lead });
            }
        }

        if (matches.length > 0) {
            matches.forEach(match => {
                const item = document.createElement('div');
                item.className = 'search-result-item';
                item.innerHTML = `<strong>${match.title}</strong><br><span style="font-size:0.75rem;opacity:0.7;">${match.lead.slice(0, 50)}...</span>`;
                item.addEventListener('click', () => {
                    navigateTo(match.id);
                    searchInput.value = '';
                    searchResultsDropdown.style.display = 'none';
                });
                searchResultsDropdown.appendChild(item);
            });
            searchResultsDropdown.style.display = 'block';
        } else {
            const noRes = document.createElement('div');
            noRes.className = 'search-result-item';
            noRes.style.textAlign = 'center';
            noRes.style.color = 'var(--text-muted)';
            noRes.textContent = 'No matching campus directories found.';
            searchResultsDropdown.appendChild(noRes);
            searchResultsDropdown.style.display = 'block';
        }
    }

    // --- Direct Media Lightbox Overlay ---
    function openLightbox(imgSrc, captionText) {
        lightboxImg.src = imgSrc;
        lightboxCaption.textContent = captionText || 'Kaamil University Media Archive';
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            lightbox.classList.add('show');
        }, 50);
        showToast('Opened high-resolution media viewer.');
    }

    function closeLightbox() {
        lightbox.classList.remove('show');
        setTimeout(() => {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    // --- External Links Modal ---
    function openExternalModal(url) {
        extUrlDisplay.textContent = url;
        modalProceed.href = url;
        extModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            extModal.classList.add('show');
        }, 50);
    }

    function closeExternalModal() {
        extModal.classList.remove('show');
        setTimeout(() => {
            extModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    // --- Toast Notification System ---
    function showToast(message, isError = false) {
        const toast = document.createElement('div');
        toast.className = `toast ${isError ? 'error' : ''}`;
        toast.innerHTML = `<i class="fa-solid ${isError ? 'fa-circle-xmark' : 'fa-circle-check'}"></i> <span>${message}</span>`;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideInLeft 0.3s reverse forwards';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3500);
    }

    // --- Event Listeners and Triggers ---

    // Catch-all click listener for route, media, and url attributes
    document.addEventListener('click', (e) => {
        // Traverse upwards to see if click targets data attribute elements
        let target = e.target;
        while (target && target !== document.body) {

            // 1. Check data-route
            const routeId = target.getAttribute('data-route');
            if (routeId) {
                e.preventDefault();
                navigateTo(routeId);
                return;
            }

            // 2. Check data-media
            const mediaUrl = target.getAttribute('data-media');
            if (mediaUrl) {
                e.preventDefault();
                let alt = target.getAttribute('alt');
                if (!alt) {
                    const img = target.querySelector('img');
                    alt = img ? img.getAttribute('alt') : 'KIU High Resolution Image';
                }
                openLightbox(mediaUrl, alt);
                return;
            }

            // 3. Check data-url (External)
            const extUrl = target.getAttribute('data-url');
            if (extUrl) {
                e.preventDefault();
                openExternalModal(extUrl);
                return;
            }

            target = target.parentNode;
        }
    });

    // Back to Campus Button
    btnBackHome.addEventListener('click', () => {
        navigateTo('home');
    });

    // Lightbox triggers
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === lightbox.querySelector('.lightbox-content-wrapper')) {
            closeLightbox();
        }
    });

    // Modal triggers
    modalCancel.addEventListener('click', closeExternalModal);
    modalProceed.addEventListener('click', closeExternalModal);
    extModal.addEventListener('click', (e) => {
        if (e.target === extModal) {
            closeExternalModal();
        }
    });

    // Keyboard handlers
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
            closeExternalModal();
        }
    });

    // Search bar event
    searchInput.addEventListener('input', (e) => {
        performSearch(e.target.value);
    });

    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResultsDropdown.contains(e.target)) {
            searchResultsDropdown.style.display = 'none';
        }
    });

    // Mobile Toggle
    mobileMenuToggle.addEventListener('click', () => {
        const isActive = navLinksList.classList.toggle('active');
        mobileMenuToggle.innerHTML = isActive
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });

    // Newsletter submit mock
    function handleNewsletterSubmit() {
        const val = newsletterEmail.value.trim();
        if (!val) {
            showToast('Please enter a valid email address.', true);
            return;
        }
        if (!val.includes('@') || !val.includes('.')) {
            showToast('Email address is invalid.', true);
            return;
        }
        showToast(`Thank you! "${val}" has been registered for the KIU newsletter.`);
        newsletterEmail.value = '';
    }

    newsletterBtn.addEventListener('click', handleNewsletterSubmit);
    newsletterEmail.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleNewsletterSubmit();
        }
    });

    // --- Mock Downloads & Interactive Extras (Exposed globally) ---
    window.app = {
        showToast: showToast,
        triggerMockDownload: (filename) => {
            showToast(`Generating request for ${filename}...`);
            setTimeout(() => {
                showToast(`Successfully downloaded "${filename}" locally.`, false);
            }, 1500);
        }
    };

    // --- Initial Hash Routing Support (e.g. bookmarks/reloads) ---
    if (window.location.hash) {
        const hashRoute = window.location.hash.replace('#/', '');
        if (hashRoute) {
            navigateTo(hashRoute);
        }
    }
});
