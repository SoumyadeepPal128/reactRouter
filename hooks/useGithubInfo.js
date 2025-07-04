import { useEffect, useState } from "react";

function useGithubInfo() {
  const [data, setData] = useState({});

  useEffect(() => {
    const call = async () => {
      try {
        const res = await fetch("https://codeforces.com/api/user.info?handles=SoumyadeepPal&checkHistoricHandles=false");
        const json = await res.json();
        console.log("GitHub API response:", json);

        setData(json);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    call();
  }, []);

  return data;
}

export default useGithubInfo;
