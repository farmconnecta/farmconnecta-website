const listings = {
    products: [
        {
            type: "Maize Listing",
            title: "Yellow Maize Harvest",
            description: "Bulk maize supply from a producer group with harvest timing and location details visible to buyers.",
            meta: ["Northern Ghana", "20 tonnes", "Harvest in 2 weeks"],
            footer: ["Producer profile", "Direct inquiry"]
        },
        {
            type: "Fresh Produce",
            title: "Tomato Supply Cluster",
            description: "Coordinated tomato availability from multiple farms to help buyers source volume with less fragmentation.",
            meta: ["Kano State", "Cluster listing", "Quality graded"],
            footer: ["Buyer ready", "Moderated"]
        },
        {
            type: "Cash Crop",
            title: "Sesame Export Batch",
            description: "Structured listing with crop details, seller background, and route support for regional agribusiness buyers.",
            meta: ["Tanzania", "Export-oriented", "Available now"],
            footer: ["Request contact", "Seller profile"]
        }
    ],
    jobs: [
        {
            type: "Field Work",
            title: "Seasonal Harvest Team",
            description: "Farm operator looking for workers for a coordinated harvest cycle with clear timing and expectations.",
            meta: ["Rift Valley", "14-day contract", "On-site"],
            footer: ["Apply profile", "Message employer"]
        },
        {
            type: "Agribusiness Role",
            title: "Procurement Assistant",
            description: "Buyer-side role focused on supplier coordination, record support, and regional field communication.",
            meta: ["Nairobi", "Full time", "Agribusiness"],
            footer: ["Skills matched", "Moderated post"]
        },
        {
            type: "Livestock Support",
            title: "Veterinary Field Assistant",
            description: "Support role for livestock health visits and farm coordination with supervising veterinary professionals.",
            meta: ["Lusaka", "Contract", "Travel required"],
            footer: ["Role details", "Contact team"]
        }
    ],
    services: [
        {
            type: "Agronomy",
            title: "Crop Advisory Services",
            description: "Agronomist profile showing field coverage, crop focus, and advisory support for farmers and cooperatives.",
            meta: ["Soil health", "Maize and rice", "Regional visits"],
            footer: ["Book inquiry", "Service profile"]
        },
        {
            type: "Animal Health",
            title: "Mobile Veterinary Support",
            description: "Veterinary professional offering scheduled livestock checkups and preventative care coordination.",
            meta: ["Cattle and goats", "Mobile service", "Weekly routes"],
            footer: ["View availability", "Direct contact"]
        },
        {
            type: "Mechanization",
            title: "Tractor Hire Network",
            description: "Equipment service directory entry for land preparation and seasonal mechanization support.",
            meta: ["3 districts", "Daily rates", "Operator included"],
            footer: ["Check coverage", "Request service"]
        }
    ],
    logistics: [
        {
            type: "Transport",
            title: "Regional Produce Haulage",
            description: "Transport provider listing for farm-to-market delivery with route visibility and operating capacity.",
            meta: ["West Africa", "Open-bed trucks", "2-day booking"],
            footer: ["Route inquiry", "Fleet profile"]
        },
        {
            type: "Cold Chain",
            title: "Perishable Goods Support",
            description: "Cold-chain logistics option for higher-value produce requiring tighter delivery and handling standards.",
            meta: ["Perishables", "Temperature managed", "Urban routes"],
            footer: ["Capacity request", "Speak to operator"]
        },
        {
            type: "Aggregation",
            title: "Collection Hub Coordination",
            description: "Hub operator connecting smallholder outputs into larger shipments for buyer and exporter efficiency.",
            meta: ["Aggregation point", "Shared loads", "Flexible schedule"],
            footer: ["Hub details", "Coordinate pickup"]
        }
    ]
};

const trustProofItems = [
    {
        title: "Built around real roles",
        description: "Farmers, buyers, workers, service providers, logistics operators, and finance partners each have a visible place in the ecosystem."
    },
    {
        title: "Structured marketplace lanes",
        description: "Products, jobs, services, and logistics are separated so discovery feels intentional instead of noisy."
    },
    {
        title: "Trust before transactions",
        description: "The public experience focuses on visibility, moderation, and coordination before adding heavier workflow complexity."
    }
];

const partnerCategories = [
    "Farmers",
    "Buyers",
    "Workers",
    "Agronomists",
    "Logistics",
    "Partners"
];

const audiencePaths = [
    {
        title: "I am a farmer or producer",
        description: "Show what you grow, discover buyers, and find workers, services, or transport support.",
        ctaLabel: "Explore the marketplace",
        href: "marketplace.html"
    },
    {
        title: "I am a buyer or agribusiness",
        description: "Browse supply opportunities and connect with producers, service providers, and logistics operators.",
        ctaLabel: "Browse supply lanes",
        href: "marketplace.html"
    },
    {
        title: "I am looking for work or services",
        description: "See how FarmConnecta makes agricultural opportunities and expert support easier to discover.",
        ctaLabel: "View opportunity preview",
        href: "marketplace.html"
    },
    {
        title: "I want to partner with FarmConnecta",
        description: "Start a conversation about strategic partnerships, ecosystem collaboration, or long-term platform support.",
        ctaLabel: "Contact FarmConnecta",
        href: "contact.html"
    }
];

const demoSteps = [
    {
        step: "1",
        title: "Create a role-based profile",
        description: "A participant enters through the path that matches how they work in the agricultural economy."
    },
    {
        step: "2",
        title: "Publish or discover listings",
        description: "Products, jobs, services, and logistics become visible in structured marketplace lanes."
    },
    {
        step: "3",
        title: "Coordinate with confidence",
        description: "Messaging, moderation, and clearer profiles help users move from discovery into real conversations."
    }
];

const communityLinks = {
    whatsapp: "https://wa.me/998999968085?text=Hello%20FarmConnecta%2C%20I%20would%20like%20to%20learn%20more.",
    telegram: "https://t.me/farmconnecta"
};

const currentScript = document.currentScript;
const currentPage = currentScript ? currentScript.dataset.page : "";
const tabs = document.querySelectorAll(".market-tab");
const panels = document.querySelectorAll(".market-panel");
const menuToggle = document.querySelector(".menu-toggle");
const siteHeader = document.querySelector(".site-header");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

function setActivePageLink() {
    if (!currentPage) return;

    const activeLink = document.querySelector(`[data-nav="${currentPage}"]`);

    if (activeLink) {
        activeLink.classList.add("is-current");
        activeLink.setAttribute("aria-current", "page");
    }
}

function initMobileMenu() {
    if (!menuToggle || !siteHeader) return;

    menuToggle.addEventListener("click", () => {
        const isOpen = siteHeader.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.querySelectorAll(".site-nav a").forEach((link) => {
        link.addEventListener("click", () => {
            siteHeader.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

function initContactForm() {
    if (!contactForm) return;

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const name = (formData.get("name") || "").toString().trim();
        const email = (formData.get("email") || "").toString().trim();
        const category = (formData.get("category") || "").toString().trim();
        const organization = (formData.get("organization") || "").toString().trim();
        const message = (formData.get("message") || "").toString().trim();

        const subject = encodeURIComponent(`FarmConnecta website inquiry: ${category || "General contact"}`);
        const body = encodeURIComponent(
            [
                `Name: ${name}`,
                `Email: ${email}`,
                `Category: ${category}`,
                `Organization: ${organization || "Not provided"}`,
                "",
                "Message:",
                message
            ].join("\n")
        );

        if (formStatus) {
            formStatus.textContent = "Opening your email app with a prefilled message to FarmConnecta.";
        }

        window.location.href = `mailto:tech@farmconnecta.com?subject=${subject}&body=${body}`;
    });
}

function renderCards(targetId, items, renderer) {
    const container = document.getElementById(targetId);
    if (!container) return;

    container.innerHTML = items.map(renderer).join("");
}

function renderListings(targetId, items) {
    renderCards(
        targetId,
        items,
        (item) =>
            `
                <article class="listing-card">
                    <span class="listing-type">${item.type}</span>
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                    <div class="listing-meta">
                        ${item.meta.map((entry) => `<span>${entry}</span>`).join("")}
                    </div>
                    <div class="listing-footer">
                        ${item.footer.map((entry) => `<span>${entry}</span>`).join("")}
                    </div>
                </article>
            `
    );
}

function renderTrustProof() {
    renderCards(
        "proof-grid",
        trustProofItems,
        (item) => `
            <article class="info-card">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </article>
        `
    );
}

function renderLogoStrip() {
    renderCards(
        "logo-strip",
        partnerCategories,
        (label) => `<span class="logo-pill">${label}</span>`
    );
}

function renderAudiencePaths() {
    renderCards(
        "path-grid",
        audiencePaths,
        (item) => `
            <article class="path-card">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a class="button button-secondary" href="${item.href}">${item.ctaLabel}</a>
            </article>
        `
    );
}

function renderDemoSteps() {
    renderCards(
        "demo-grid",
        demoSteps,
        (item) => `
            <article class="demo-card">
                <span class="demo-step">Step ${item.step}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </article>
        `
    );
}

function setActiveTab(target) {
    tabs.forEach((tab) => {
        tab.classList.toggle("is-active", tab.dataset.target === target);
    });

    panels.forEach((panel) => {
        panel.classList.toggle("is-active", panel.dataset.panel === target);
    });
}

function hydrateCommunityLinks() {
    const whatsappLink = document.getElementById("whatsapp-link");
    const telegramLink = document.getElementById("telegram-link");

    if (whatsappLink) {
        whatsappLink.href = communityLinks.whatsapp;
    }

    if (telegramLink) {
        telegramLink.href = communityLinks.telegram;
    }
}

setActivePageLink();
initMobileMenu();
initContactForm();
renderListings("product-listings", listings.products);
renderListings("job-listings", listings.jobs);
renderListings("service-listings", listings.services);
renderListings("logistics-listings", listings.logistics);
renderTrustProof();
renderLogoStrip();
renderAudiencePaths();
renderDemoSteps();
hydrateCommunityLinks();

tabs.forEach((tab) => {
    tab.addEventListener("click", () => setActiveTab(tab.dataset.target));
});
