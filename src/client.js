import copyToClipboard from "copy-to-clipboard";
const id = (eid) => {
    return document.getElementById(eid);
};
const phonetics = "รข,รฎ,รป,ka,ku,ga,gu,x,c,ja,ji,ta,tu,da,di,du,th,p,b,f,na,nu,ma,mi,mu,y,va,vi,ra,ru,l,s,z,sh,ss,h, ,1,2,10,20,100,.,w".split(",");
const cuneiform = "๐ ,๐ก,๐ข,๐ฃ,๐ค,๐ฅ,๐ฆ,๐ง,๐จ,๐ฉ,๐ช,๐ซ,๐ฌ,๐ญ,๐ฎ,๐ฏ,๐ฐ,๐ฑ,๐ฒ,๐ณ,๐ด,๐ต,๐ถ,๐ท,๐ธ,๐น,๐บ,๐ป,๐ผ,๐ฝ,๐พ,๐ฟ,๐,๐,๐,๐,๐,๐,๐,๐,๐,๐,.,w".split(",");

window.onload = async () => {
    id("cuneiform").onkeyup = id("cuneiform").onpaste = () => {
        id("cuneiform").value = id("cuneiform").value.toLowerCase();
        for (let i of phonetics) {
            if (id("cuneiform").value.includes(i) && i != " ") {
                id("cuneiform").value = id("cuneiform").value.replace(new RegExp(i, "gi"), cuneiform[phonetics.indexOf(i)]);
            }
        }
        let phonValue = "";
        for (let i of id("cuneiform").value) {
            if (!cuneiform.includes(i)) {
                id("cuneiform").value = id("cuneiform").value.replace(new RegExp(i, "gi"), "");
            } else {
                phonValue += `${phonetics[cuneiform.indexOf(i)]}`;
            }
        }
        id("phonetic").value = phonValue.trim();
    };
    id("copy-phonetic").onclick = () => {
        copyToClipboard(id("phonetic").value);
    };
    id("copy-cuneiform").onclick = () => {
        copyToClipboard(id("cuneiform").value);
    };
};