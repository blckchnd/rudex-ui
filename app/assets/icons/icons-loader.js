let icons = [
    "photo-camera",
    "adjust",
    "alarm",
    "assets",
    "autolock",
    "barter",
    "borrow",
    "checkmark-circle",
    "chevron-down",
    "clippy",
    "clock",
    "cog",
    "cogs",
    "coming_soon",
    "connected",
    "connect",
    "cross-circle",
    "dashboard",
    "deposit",
    "deposit-withdraw",
    "disconnected",
    "direct_debit",
    "dollar-green",
    "dollar",
    "download",
    "excel",
    "eye",
    "eye-striked",
    "fi-star",
    "folder",
    "grouping",
    "hamburger-x",
    "hamburger",
    "htlc",
    "hourglass",
    "key",
    "list",
    "locked",
    "minus-circle",
    "news",
    "plus-circle",
    "power",
    "question-circle",
    "server",
    "settle",
    "share",
    "showcases",
    "shuffle",
    "text",
    "thumb-tack",
    "thumb-untack",
    "thumbs-up",
    "times",
    "trade",
    "transfer",
    "unlocked",
    "user",
    "voting",
    "warning",
    "withdraw",
    "filter",
    "info-circle-o",
    "zoom",
    "people",
    "robot",
    "fire",
    "question-in-circle",
    "attention",
    "checkmark",
    "paperclip",
    "wallet",
    "prediction",
    "prediction-large",
    "merchant",
    "insight",
    "create_account",
    "swap",
    "instant-trade"
];

let iconsMap = {};
for (let i of icons) iconsMap[i] = require(`./${i}.svg`);

export default iconsMap;
