import Swal from 'sweetalert2';

const calculateTimeToMidnight = () => {
    const now = new Date();
    const sgOffset = 8 * 60; // Singapore is UTC+8
    const sgNow = new Date(now.getTime() + now.getTimezoneOffset() * 60000 + sgOffset * 60000);

    const midnight = new Date(sgNow);
    midnight.setHours(24, 0, 0, 0); // Midnight of the next day
    // @ts-ignore
    const diff = midnight - sgNow;
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { hours, minutes, seconds };
};

const PopupHelp = (message: string) => {

    const updateCountdown = () => {
        const { hours, minutes, seconds } = calculateTimeToMidnight();
        const countdownText = `Wordlah refreshing in: ${hours}h ${minutes}m ${seconds}s`;
        Swal.update({
            html: `<p>${message}</p><p>${countdownText}</p>`
        });
    };

    Swal.fire({
        title: 'Good effort!!',
        html: `<p>${message}</p><p>Loading...</p>`,
        icon: 'warning',
        confirmButtonText: 'Close',
        customClass: {
            container: 'swal-container',
            popup: 'swal-popup',
            title: 'swal-title',
            htmlContainer: 'swal-html-container',
            confirmButton: 'swal-confirm',
        },
        didOpen: () => {
            const interval = setInterval(() => {
                updateCountdown();
            }, 1000);
            // @ts-ignore
            Swal.getConfirmButton().addEventListener('click', () => {
                clearInterval(interval);
            });
        }
    });
};

export default PopupHelp;