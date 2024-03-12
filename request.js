const getSubs = (title) => {
  os.subtitles({
    query: title,
  })
    .then((response) => response)
    .catch(console.error);
};
