const Reader = require("./Class/Reader");
const Processor = require("./Class/Processor");
const Table = require("./Class/Table");
const HtmlParser = require("./Class/HtmlParser");
const Writer = require("./Class/Writer");
const PDFWriter = require("./Class/PdfWriter");

let leitor = new Reader();
let escritor = new Writer();

async function main() {
    let dados = await leitor.Read("./user.csv");
    let dadosProcessados = Processor.Process(dados);
    let usuarios = new Table(dadosProcessados);

    let html = await HtmlParser.Parse(usuarios);

    escritor.Write(Date.now() + ".html", html);
    PDFWriter.WritePDF(Date.now() + ".pdf",html);
    console.log(html);
}

main();