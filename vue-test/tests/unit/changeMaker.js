// changeMaker.js
//
// Update snapshot: $>`npm run test:unit -- -u`
export default function changeMaker(value) {
    let pennies = value * 100;
    const quarters = Math.floor(pennies / 25);
    pennies -= quarters * 25;
    const dimes = Math.floor(pennies / 10);
    pennies -= dimes * 10;
    const nickels = Math.floor(pennies / 5);
    pennies -= nickels * 5;
    return {
        quarters,
        dimes,
        nickels,
        pennies,
    };
}
