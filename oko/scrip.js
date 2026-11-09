const iconList = {
    home: "material-symbols:home-rounded",
    user: "material-symbols:person-rounded",
    social: "material-symbols:groups-rounded",
    share: "material-symbols:share-rounded",
    tiktok: "simple-icons:tiktok",
    instagram: "simple-icons:instagram",
    youtube: "simple-icons:youtube",
    wattpad: "simple-icons:wattpad",
    trakteer: "lucide:heart-handshake",
    whatsapp: "simple-icons:whatsapp",
    email: "material-symbols:mail-rounded"
};


function renderIcons() {
    const elements = document.querySelectorAll("[data-icon]");
    elements.forEach(element => {
        const iconName = element.dataset.icon;
        const iconCode = iconList[iconName];
        if (!iconCode) {
            console.warn(
                `Icon "${iconName}" tidak ditemukan.`
            );
            return;
        }
        const iconElement = document.createElement(
            "iconify-icon"
        );
        iconElement.setAttribute("icon", iconCode);
        iconElement.setAttribute("aria-hidden", "true");
        element.replaceChildren(iconElement);
    });

}

async function shareWebsite() {
    const shareData = {
        title: "Otokodayo",
        text: "Yahho minna! Kunjungi website saya~",
        url: window.location.href
    };
    try {
        if (navigator.share) {
            await navigator.share(shareData);
        }
        else if (navigator.clipboard) {
            await navigator.clipboard.writeText(
                window.location.href
            );
            alert("Link website berhasil disalin!");
        }
        else {
            prompt(
                "Salin link website berikut:",
                window.location.href
            );
        }
    }
    catch (error) {
        if (error.name !== "AbortError") {
            console.error(
                "Gagal membagikan website:",
                error
            );
        }
    }
}

function initializeNavigation() {
    const shareButton = document.querySelector(
        '[data-action="share"]'
    );
    if (shareButton) {
        shareButton.addEventListener("click", shareWebsite);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderIcons();
    initializeNavigation();
    console.log(
        "Otokodayo Website berhasil dimuat!"
    );

});
