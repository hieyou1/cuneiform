// import copyToClipboard from "copy-to-clipboard";
const id = (eid) => {
    return document.getElementById(eid);
};
const phonetics = "â,î,û,ka,ku,ga,gu,x,c,ja,ji,ta,tu,da,di,du,th,p,b,f,na,nu,ma,mi,mu,y,va,vi,ra,ru,l,s,z,sh,ss,h, ,.,1,2,10,20,100".split(",");
const cuneiform = "𐎠,𐎡,𐎢,𐎣,𐎤,𐎥,𐎦,𐎧,𐎨,𐎩,𐎪,𐎫,𐎬,𐎭,𐎮,𐎯,𐎰,𐎱,𐎲,𐎳,𐎴,𐎵,𐎶,𐎷,𐎸,𐎹,𐎺,𐎻,𐎼,𐎽,𐎾,𐎿,𐏀,𐏁,𐏂,𐏃,𐏐,𐏐𐏐,𐏑,𐏒,𐏓,𐏔,𐏕".split(",");

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
                phonValue += `${phonetics[cuneiform.indexOf(i)]} `;
            }
        }
        id("phonetic").value = phonValue.trim();
    };
    // id("copy-phonetic").onclick = () => {
    //     copyToClipboard(id("phonetic").value);
    // };
    // id("copy-cuneiform").onclick = () => {
    //     copyToClipboard(id("cuneiform").value);
    // };
};