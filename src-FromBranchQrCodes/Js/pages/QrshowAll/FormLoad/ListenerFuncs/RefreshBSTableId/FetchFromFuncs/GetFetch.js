let StartFunc = async () => {
    let jVarLocalFetchUrl = `/binv4/EntryScan/Show/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};

export { StartFunc };