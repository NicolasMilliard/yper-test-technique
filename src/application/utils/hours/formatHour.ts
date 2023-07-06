const formatHour = (timeString: string) => {
    const date = new Date(timeString);
    const formattedHour = date.toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
    });
    return formattedHour;
};

export default formatHour;