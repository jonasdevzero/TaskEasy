export function getTime() {
    const day = new Date().getDay();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    return `${year}/${month}/${day} ${hour}:${minutes}:${seconds}`;
};
