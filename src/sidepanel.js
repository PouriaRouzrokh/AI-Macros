document.addEventListener('DOMContentLoaded', () => {
    const contentSection = document.querySelector('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');
    let currentPage = null;

    async function loadContent(page) {
        if (page === currentPage) return;

        try {
            // Load HTML content
            const htmlResponse = await fetch(chrome.runtime.getURL(`../public/html/${page}.html`));
            const newContent = await htmlResponse.text();
            
            // Create a new div for the incoming content
            const newContentDiv = document.createElement('div');
            newContentDiv.innerHTML = newContent;
            newContentDiv.className = 'content-container content-next';
            newContentDiv.id = `${page}-container`;
            
            // Load and apply page-specific CSS
            const cssLink = document.createElement('link');
            cssLink.rel = 'stylesheet';
            cssLink.href = chrome.runtime.getURL(`../public/css/${page}.css`);
            document.head.appendChild(cssLink);
            
            // Add the new content to the DOM
            contentSection.appendChild(newContentDiv);
            
            // Trigger reflow
            void newContentDiv.offsetWidth;
            
            // Start transition
            const currentContent = contentSection.querySelector('.content-container:not(.content-next)');
            if (currentContent) {
                currentContent.classList.add('content-prev');
            }
            newContentDiv.classList.remove('content-next');
            
            // Wait for transition to complete
            setTimeout(() => {
                if (currentContent) {
                    currentContent.remove();
                    // Remove the old page-specific CSS
                    const oldCssLink = document.querySelector(`link[href$="${currentContent.id.replace('-container', '')}.css"]`);
                    if (oldCssLink) {
                        oldCssLink.remove();
                    }
                }
                currentPage = page;

                // Load page-specific JavaScript if needed
                if (page === 'apis') {
                    const script = document.createElement('script');
                    script.src = chrome.runtime.getURL('../src/apis.js');
                    script.type = 'module';
                    document.body.appendChild(script);
                }

                // Dispatch a custom event when content is loaded
                const event = new CustomEvent('contentLoaded', { detail: { page } });
                document.dispatchEvent(event);

            }, 300); // Match this to CSS transition duration
        } catch (error) {
            console.error('Error loading content:', error);
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
            const page = link.getAttribute('data-page');
            loadContent(page);
        });
    });

    // Load initial content (e.g., 'apply' page)
    loadContent('apply');
});