import { useContext } from "react";

import { CitiesContext } from "../contexts/CitiesProvider";

function useCities() {
    return useContext(CitiesContext);
}

export { useCities };
