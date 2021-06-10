function config(entry = []) {
  return [...entry, require.resolve("./decorator")];
}

function managerEntries(entry = []) {
  return [...entry, require.resolve("./panel")];
}

module.exports = { config, managerEntries };
