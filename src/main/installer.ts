import fetch from 'node-fetch';
import ModData from "./json/ModData";
import PackData from "./json/PackData"

const version = "1.0.0";
const baseRepo = "https://raw.githubusercontent.com/nacrt/SkyblockClient-REPO/main";
const baseCdn = "https://cdn.jsdelivr.net/gh/nacrt/SkyblockClient-REPO@main";
const settings = { method: "Get" };
const modUrl = baseRepo + "/files/mods.json";

fetch(modUrl, settings)
    .then(async (res) => {
        JSON.parse(await res.text())
    })
    