import { useCallback, useEffect, useState } from "react";
import { httpGetPlanets } from "./requests";

function usePlanets() {
  const [planets, setPlanets] = useState([]);
  const [loadingplanets, setLoadingPlanets] = useState(true);

  const getPlanets = useCallback(async () => {
    setLoadingPlanets(true);
    const fetchedPlanets = await httpGetPlanets();
    setPlanets(fetchedPlanets);
    setLoadingPlanets(false);
  }, []);

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);

  return { planets, loadingplanets };
}

export default usePlanets;
