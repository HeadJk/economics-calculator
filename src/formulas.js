const formulas = [
{
    name: "Compound Amount Factor",
    mathLabel: "(F/P, i, N)",
    description: "For finding the future worth of a present amount",
    equation: (i, N) => {
        return Math.pow((1 + i), N);
    }
},
{
    name: "Present Worth Factor",
    mathLabel: "(P/F, i, N)",
    description: "For finding the future worth of a present amount",
    equation: (i, N) => {
        return 1 / Math.pow((1 + i), N);
    }
},
{
    name: "Sinking Fund Factor",
    mathLabel: "(A/F, i, N)",
    description: "How much has to be saved/paid on a regular basis to accumulate a future amount (F)",
    equation: (i, N) => {
        return i / (Math.pow((1 + i), N) - 1);
    }
},
{
    name: "Uniform Series Amount",
    mathLabel: "(F/A, i, N)",
    description: "Gives the value of the Future Worth (F), that is equal to repeated disbursements/receipts",
    equation: (i, N) => {
        return (Math.pow((1 + i), N) - 1) / i;
    }
},
{
    name: "Capital Recovery Factor",
    mathLabel: "(A/P, i, N)",
    description: "How much money needs to be saved over a N periods to recover an investment of P",
    equation: (i, N) => {
        const interest = Math.pow((1 + i), N);
        return (i*interest) / (interest - 1);
    }
},
{
    name: "Series Present Worth Factor",
    mathLabel: "(P/A, i, N)",
    description: "Gives the present value P, equal to an annuity of A, given i and N",
    equation: (i, N) => {
        const interest = Math.pow((1 + i), N);
        return (interest - 1) / (i*interest);
    }
},
{
    name: "Arithmetic Gradient Factor",
    mathLabel: "(A/G, i, N)",
    description: "Used when someone is paying regular fee on something every year, and the cost of is increasing by the same amount each year.",
    equation: (i, N) => {
        return (1 / i) - (N / (Math.pow((1 + i), N) - 1));
    }
},
]

export default formulas;