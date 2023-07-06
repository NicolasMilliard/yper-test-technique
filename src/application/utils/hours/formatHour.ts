const formatHour = (timeString: string) => {
    const date = new Date(timeString);
    const timeStringToHour = date.toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
    });
    const formattedHour = timeStringToHour.replace(new RegExp(':', 'g'), 'H');
    return formattedHour;
};

export default formatHour;