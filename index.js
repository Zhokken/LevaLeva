// Eksempeldata. Senere kan denne lista hentes fra back-end.
const uker = [
    {
        tittel: "Uke 47 · 16.–22. november",
        turer: [
            { id: 1, navn: "Tur langs Levangerelva", tid: "Torsdag kl. 10.00" }
        ]
    },
    {
        tittel: "Uke 48 · 23.–29. november",
        turer: [
            { id: 2, navn: "Tur til Røstad", tid: "Tirsdag kl. 11.00" }
        ]
    },
    {
        tittel: "Uke 49 · 30. november–6. desember",
        turer: []
    },
    {
        tittel: "SIGMA uke 50 . dato - dato",
            turer: [
                {id: 2, navn: "tur til sigma", tid: "SIGMATIME"}
            ]
    }
];

const ukeplan = document.querySelector("#ukeplan");
const forrige = document.querySelector("#forrige");
const neste = document.querySelector("#neste");

let start = 0; // Hvilken uke i lista skal vises først?

function visUkeplan() {
    ukeplan.replaceChildren();


    // Vis opptil 1 uke, fra og med start. dette kan endre dersom man har lyst til å se flere uker samtidig
    // filter searching option kanskje?
    for (let i = start; i < start + 1 && i < uker.length; i++) {
        let uke = uker[i];

        let tittel = document.createElement("h2");
        tittel.textContent = uke.tittel;
        ukeplan.append(tittel);

        if (uke.turer.length === 0)//sjekker om current week har innhold i turer{
            let feedback = document.createElement("p");
            feedback.textContent = "Ingen turer denne uka.";
            ukeplan.append(feedback);
        }

        // Lag en knapp for hver tur i denne uka.
        for (let j = 0; j < uke.turer.length; j++) {
            let tur = uke.turer[j];

            let knapp = document.createElement("button");
            knapp.textContent = tur.tid + " – " + tur.navn;
            knapp.dataset.turId = tur.id;
            ukeplan.append(knapp);
        }
    }

}
//treated som function expression?
//could listen for click, men dt her e intuitive
forrige.onclick = function () {
    start--;
    visUkeplan();
};

neste.onclick = function () {
    start++;
    visUkeplan();
};
visUkeplan();
