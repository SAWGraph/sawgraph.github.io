document.write(`

    <!-- Site Identity -->
    <a href="index.html#home"
       class="w3-bar-item w3-button">
        <b>SAW</b>Graph
    </a>


    <!-- ==========================================
         Desktop Navigation
         ========================================== -->

    <nav class="desktop-nav" aria-label="Main navigation">


        <!-- About SAWGraph -->

        <div class="desktop-menu-item">

            <a href="index.html"
               class="desktop-menu-heading">
                About SAWGraph
            </a>

            <div class="desktop-dropdown">

                <a href="index.html">
                    Overview
                </a>

                <a href="pfas.html">
                    About PFAS
                </a>

            </div>

        </div>


        <!-- Data & Methods -->

        <div class="desktop-menu-item">

            <a href="kg.html"
               class="desktop-menu-heading">
                Data &amp; Methods
            </a>

            <div class="desktop-dropdown">

                <a href="kg.html">
                    Architecture
                </a>

                <a href="kg.html#data-sources">
                    Data Sources
                </a>

                <a href="ontologies.html">
                    Ontologies
                </a>

                <a href="aboutkgs.html">
                    About KGs
                </a>

            </div>

        </div>


        <!-- Explore -->

        <div class="desktop-menu-item">

            <button
                type="button"
                class="desktop-menu-heading"
                aria-haspopup="true">
                Explore
            </button>

            <div class="desktop-dropdown dropdown-right">

                <a href="testing.html">
                    Testing Demo 1
                </a>

                <a href="testing_aquifers.html">
                    Testing Demo 2
                </a>

                <a href="impacts.html">
                    Impacts Demo 1
                </a>

                <a href="tracing.html">
                    Tracing Demo 1
                </a>

                <a href="tracing_alldownstream.html">
                    Tracing Demo 2
                </a>

                <a href="tracing_upstream.html">
                    Tracing Demo 3
                </a>

            </div>

        </div>


        <!-- Project -->

        <div class="desktop-menu-item">

            <button
                type="button"
                class="desktop-menu-heading"
                aria-haspopup="true">
                Project
            </button>

            <div class="desktop-dropdown dropdown-right">

                <a href="aboutus.html">
                    Team
                </a>

                <a href="publications.html">
                    Publications
                </a>

            </div>

        </div>

    </nav>


    <!-- ==========================================
         Mobile Hamburger Button
         ========================================== -->

    <button
        id="siteMenuButton"
        type="button"
        class="mobile-menu-button w3-bar-item w3-button w3-right"
        onclick="toggleSiteMenu(event)"
        aria-label="Open navigation menu"
        aria-expanded="false"
        aria-controls="siteMenu">
        &#9776;
    </button>


    <!-- ==========================================
         Mobile Navigation
         ========================================== -->

    <div
        id="siteMenu"
        class="mobile-site-menu w3-bar-block w3-white w3-card-4"
        style="
            display:none;
            position:fixed;
            right:16px;
            width:340px;
            max-width:calc(100vw - 32px);
            max-height:calc(100vh - 80px);
            overflow-y:auto;
            z-index:9999;
        ">


        <!-- About SAWGraph -->

        <a href="index.html"
           class="w3-bar-item w3-button w3-left-align">
            <strong>About SAWGraph</strong>
        </a>

        <a href="index.html"
           class="w3-bar-item w3-button w3-left-align"
           style="padding-left:32px;">
            Overview
        </a>

        <a href="pfas.html"
           class="w3-bar-item w3-button w3-left-align"
           style="padding-left:32px;">
            About PFAS
        </a>


        <!-- Data & Methods -->

        <a href="kg.html"
           class="w3-bar-item w3-button w3-left-align">
            <strong>Data &amp; Methods</strong>
        </a>

        <a href="kg.html"
           class="w3-bar-item w3-button w3-left-align"
           style="padding-left:32px;">
            Architecture
        </a>

        <a href="kg.html#data-sources"
           class="w3-bar-item w3-button w3-left-align"
           style="padding-left:32px;">
            Data Sources
        </a>

        <a href="ontologies.html"
           class="w3-bar-item w3-button w3-left-align"
           style="padding-left:32px;">
            Ontologies
        </a>

        <a href="aboutkgs.html"
           class="w3-bar-item w3-button w3-left-align"
           style="padding-left:32px;">
            About KGs
        </a>


        <!-- Explore -->

        <div class="w3-bar-item">
            <strong>Explore</strong>
        </div>

        <a href="testing.html"
           class="w3-bar-item w3-button w3-left-align"
           style="padding-left:32px;">
            Testing Demo 1
        </a>

        <a href="testing_aquifers.html"
           class="w3-bar-item w3-button w3-left-align"
           style="padding-left:32px;">
            Testing Demo 2
        </a>

        <a href="impacts.html"
           class="w3-bar-item w3-button w3-left-align"
           style="padding-left:32px;">
            Impacts Demo 1
        </a>

        <a href="tracing.html"
           class="w3-bar-item w3-button w3-left-align"
           style="padding-left:32px;">
            Tracing Demo 1
        </a>

        <a href="tracing_alldownstream.html"
           class="w3-bar-item w3-button w3-left-align"
           style="padding-left:32px;">
            Tracing Demo 2
        </a>

        <a href="tracing_upstream.html"
           class="w3-bar-item w3-button w3-left-align"
           style="padding-left:32px;">
            Tracing Demo 3
        </a>


        <!-- Project -->

        <div class="w3-bar-item">
            <strong>Project</strong>
        </div>

        <a href="aboutus.html"
           class="w3-bar-item w3-button w3-left-align"
           style="padding-left:32px;">
            Team
        </a>

        <a href="publications.html"
           class="w3-bar-item w3-button w3-left-align"
           style="padding-left:32px;">
            Publications
        </a>

    </div>

`);


/* =========================================================
   Mobile Menu Functions
   ========================================================= */

function toggleSiteMenu(event) {

    event.stopPropagation();

    const menu = document.getElementById("siteMenu");
    const button = document.getElementById("siteMenuButton");
    const navbar = button.closest(".w3-bar");

    if (menu.style.display === "block") {

        menu.style.display = "none";
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "Open navigation menu");

    } else {

        const navbarBottom =
            navbar.getBoundingClientRect().bottom;

        menu.style.top = navbarBottom + "px";
        menu.style.display = "block";

        button.setAttribute("aria-expanded", "true");
        button.setAttribute("aria-label", "Close navigation menu");

    }

}


/* Close mobile menu when clicking elsewhere */

document.addEventListener("click", function(event) {

    const menu = document.getElementById("siteMenu");
    const button = document.getElementById("siteMenuButton");

    if (
        menu &&
        button &&
        !menu.contains(event.target) &&
        !button.contains(event.target)
    ) {

        menu.style.display = "none";
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "Open navigation menu");

    }

});


/* Close mobile menu with Escape */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        const menu = document.getElementById("siteMenu");
        const button = document.getElementById("siteMenuButton");

        if (menu && button) {

            menu.style.display = "none";
            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-label", "Open navigation menu");

        }

    }

});


/* Reset mobile menu when switching to desktop navigation */

window.addEventListener("resize", function() {

    if (window.innerWidth > 850) {

        const menu = document.getElementById("siteMenu");
        const button = document.getElementById("siteMenuButton");

        if (menu && button) {

            menu.style.display = "none";
            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-label", "Open navigation menu");

        }

    }

});
