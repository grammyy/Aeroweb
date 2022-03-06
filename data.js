//Temporary solution until I figure out a custom system on the the mostly undocumented pure JS HTTP request API

const WelMSG = [
    "░█████╗░███████╗██████╗░░█████╗░░██╗░░░░░░░██╗███████╗██████╗░",
    "██╔══██╗██╔════╝██╔══██╗██╔══██╗░██║░░██╗░░██║██╔════╝██╔══██╗",
    "███████║█████╗░░██████╔╝██║░░██║░╚██╗████╗██╔╝█████╗░░██████╦╝",
    "██╔══██║██╔══╝░░██╔══██╗██║░░██║░░████╔═████║░██╔══╝░░██╔══██╗",
    "██║░░██║███████╗██║░░██║╚█████╔╝░░╚██╔╝░╚██╔╝░███████╗██████╦╝",
    "╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝░╚════╝░░░░╚═╝░░░╚═╝░░╚══════╝╚═════╝░",
    "══════════════════════════════════════════════════════════════",
    "You can find the credits to all code/media artists in the HTML page source.",
    "HTML Developer branch is updated once every major update",
    "-Working on neco-arc fighter HTML5 game.",
    "/linebreak/",
    "Major updates:",
    "+Added Ported Website (Webhost000, Dev Branch)",
    "+Added Keybinds and Cookies",
    "+Added multiple public google docs, API controls coming soon",
    "+Added Proxy (miniProxy)",
    "+Added Cloth Sim (@abro_oks)",
    "+Added Cookie Clicker 2.031 (Latest version)",
    "/linebreak/",
    "Known Bugs:",
    "-The webhost000 environment handles CSS and HTML differently."]
const universes = [
    ["Cloth Sim","/multiverse/cloth.html"],["Encrypted Web Proxy","https://aerophp.000webhostapp.com/proxy/index.php"],
    ["Cookie Clicker 2.031","/multiverse/CC2031.html"],
    ["Console Emulator","/multiverse/CESTE.html"],
    ["Flex Background","/multiverse/FLPBE.html"]]
const database = [
    ["Public DOC.1","https://docs.google.com/document/d/1_qpvRk_4rMYjyb9gz8h2HkStVHwUBYWUdFRi_FO-vC8/edit?usp=sharing","Document"],
    ["Public DOC.2","https://docs.google.com/document/d/1gO_NaXDcCk9OZRklirPDxB5kVp1NdOV7quAHqXSVnaE/edit?usp=sharing","Document"],
    ["Public DOC.3","https://docs.google.com/document/d/1WHgwzGz4EVP2nYBiky0ikJohPukdAVOUQYvLOe6A5-E/edit?usp=sharing","Document"],
    ["PAC Module","Python","https://github.com/BartenderWinery/PAC/releases/download/module/pac.py"],
    ["Youtubmp4","Python","https://github.com/BartenderWinery/Youtubmp4/releases/download/release/Youtubmp4.exe"],
    ["Algorithms","Example Package",""]]
const shelf = [
    ["SYSTEMS",
        ["Operating Sub-system: [Unfinished]",""]],
    ["PROGRAMS",
        ["Cookie Clicker 2.031: [Orteil.dashnet]","onclick=engine.resize(1);engine.exec('iframe','multiverse/CC2031.html')"],
        ["Neco-Arc Arcade: [Unfinished]",""],
        ["Encrypted Proxy: [MiniProxy]","onclick=engine.resize(1);engine.exec('iframe','https://aerophp.000webhostapp.com/proxy/index.php')"],
        ["Ported Website: [Developer Branch]","onclick=engine.resize(2);engine.exec('iframe','https://aerophp.000webhostapp.com/subweb/index.html')"],
        ["Window Sample: [Quick access]","onclick='API.compile(["+'"multiverse/CC2031.html"'+","+'""'+","+'"drag/iframe"'+","+'"height:100px;width:200px;resize:both;overflow:hidden;z-index:1000"'+"])'"],
        ["Code Editor: [Unfinished]","onclick='API.compile(["+'"engine/editor.html"'+","+'"Code Editor"'+","+'"drag/iframe"'+","+'"height:270px;width:600px;resize:both;overflow:hidden;z-index:1000"'+"])'"]],
    ["COMPILERS",
        ["Python: [Unfinshed]",""]],
    ]
const contacts = [
    "Contact information",
    ["Discord","Bartender","#0531"],
    ["Steam","Bartender","https://steamcommunity.com/id/WineBartender/"],
    ["Github","BartenderWinery","https://github.com/BartenderWinery"]
]

    let color = "red"; let size = 0; var rank = "75 95 100 82"; const windows = []; var time = ""
    const objs = ["p","iframe","code","img"]

    function find(element){ return document.getElementById(element)}
    var overlay = find("overlay")
    var universal = find("universal")
    var list = find("list")
    var con = find("con")
    var inspect = find("inspect")
    var overlay = find("overlay")
    var multiverse = find("multiverse")
    var toolkit = find("toolkit")
    var cc = find("cc")
    var c = find("c")
    var ccc = find("ccc")
    var folder = find("folder")
    var folders = find("folders")
    var clock = find("clock")
    var analog = find("analog")
    var score = find("score")
    var scoreInner = find("scoreInner")
    var rcon = find("rcon")
    var execute = find("execute")

const colorable = [
    ["div","p","input","li","a"]
]

function book(error){
    switch(error.toString().split(":")[0]){
        case "SecurityError":
            exec("inspect",["Your browser has blocked the editing of a iframe window due to security risks, this shouldn't have happened","/linebreak/","Common causes include: Being offline, browsing the website locally, or your browser may outright block it."])
            break;
    }
}