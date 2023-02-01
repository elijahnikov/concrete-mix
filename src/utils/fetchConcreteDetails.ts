export const fetchConcreteDetails = async (id: string) => {
    try {
        const response = await fetch(
            `https://fp-ardrecruiting-prod-001-func.azurewebsites.net/api/concretedetails?designatedConcrete=${id}`
        );
        if (response.ok) {
            let data = await response.json();
            return data;
        }
    } catch (error) {
        console.error(error);
    }
};
