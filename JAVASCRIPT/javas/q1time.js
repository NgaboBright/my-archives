const now = new Date();

const hour = now.getHours();
const minute = now.getMinutes();

if (hour < 7 || (hour === 7 && minute < 30)) {
    console.log("Good morning");
} else {
    console.log("It's not morning anymore!");
}
