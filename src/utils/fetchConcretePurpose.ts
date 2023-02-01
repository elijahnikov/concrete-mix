export const fetchConcretePurpose = async () => {
    try {
        const response = await fetch(
            "https://fp-ardrecruiting-prod-001-func.azurewebsites.net/api/concretepurpose"
        );
        if (response.ok) {
            let data = await response.json();
            return data;
        }
    } catch (error) {
        console.error(error);
    }
};
