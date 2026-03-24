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

const communityLinks = {
    whatsapp: "https://wa.me/000000000000?text=Hello%20FarmConnecta%2C%20I%20would%20like%20to%20learn%20more.",
    telegram: "https://t.me/farmconnecta"
};

const tabs = document.querySelectorAll(".market-tab");
const panels = document.querySelectorAll(".market-panel");

function renderListings(targetId, items) {
    const container = document.getElementById(targetId);
    if (!container) return;

    container.innerHTML = items
        .map(
            (item) => `
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
        )
        .join("");
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

renderListings("product-listings", listings.products);
renderListings("job-listings", listings.jobs);
renderListings("service-listings", listings.services);
renderListings("logistics-listings", listings.logistics);
hydrateCommunityLinks();

tabs.forEach((tab) => {
    tab.addEventListener("click", () => setActiveTab(tab.dataset.target));
});
