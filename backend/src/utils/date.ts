export function getTime() {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    let hours = date.getHours().toString();
    let minutes = date.getMinutes().toString();
    let seconds = date.getSeconds().toString();

    Number(hours) < 10 ? hours = "0".concat(hours) : hours;
    Number(minutes) < 10 ? minutes = "0".concat(minutes) : minutes;
    Number(seconds) < 10 ? seconds = "0".concat(seconds) : seconds;

    return `${month + 1}/${day}/${year}T${hours}:${minutes}:${seconds}`;
};
