const formatStatus = (status: string): string => {
    const statusList: Record<string, string> =
        {
            "INVALID_REQUEST": "Cette requête n'est pas valide.",
            "NOT_FOUND": "Le lieu référencé est introuvable.",
            "OVER_QUERY_LIMIT": "L'application a dépassé son quota de requêtes.",
            "REQUEST_DENIED": "L'application n'est pas autorisée à utiliser PlacesService.",
            "UNKNOWN_ERROR": "La requête PlacesService n'a pas pu être traitée en raison d'une erreur du serveur. Si vous essayez à nouveau, la requête pourrait aboutir.",
            "ZERO_RESULTS": "Aucun résultat n'a été trouvé pour cette requête.",
        };

        return statusList[status] || "Une erreur est survenue, veuillez ré-essayer.";
}

export default formatStatus;