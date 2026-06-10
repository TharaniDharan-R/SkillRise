export function createInitialProgress(domainIds = []) {
  return {
    domainIds,
    xp: 0,
    completedTopics: {},
    startedAt: new Date().toISOString(),
  };
}

export function countTopics(domains) {
  return domains.reduce(
    (total, domain) =>
      total +
      domain.curriculum.reduce((moduleTotal, module) => moduleTotal + module.topics.length, 0),
    0,
  );
}

export function countCompleted(progress, domains) {
  const selectedTopicKeys = new Set();

  domains.forEach((domain) => {
    domain.curriculum.forEach((module) => {
      module.topics.forEach((topic) => selectedTopicKeys.add(`${domain.id}:${topic.id}`));
    });
  });

  return Object.entries(progress.completedTopics ?? {}).filter(
    ([key, complete]) => complete && selectedTopicKeys.has(key),
  ).length;
}

export function getProgressPercent(progress, domains) {
  const total = countTopics(domains);
  if (!total) return 0;
  return Math.round((countCompleted(progress, domains) / total) * 100);
}
